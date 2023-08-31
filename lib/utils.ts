import Homey from "homey";
import { DeviceType, Settings } from "./types";
import { EmsEspClient } from "./ems-esp-client";
import { ErrorCodes } from "./error-codes";

export function driverOnPair(
  driver: Homey.Driver,
  session: Homey.Driver.PairSession,
  deviceType: DeviceType
) {
  // Fetch global settings
  session.setHandler("get_settings", async () => {
    return {
      network_address: driver.homey.settings.get("network_address") || "",
      access_token: driver.homey.settings.get("access_token") || "",
    } as Settings;
  });

  // Update global settings
  session.setHandler("set_settings", async (data: Settings) => {
    driver.homey.settings.set("network_address", data.network_address);
    driver.homey.settings.set("access_token", data.access_token);
  });

  session.setHandler("check_connection", async (data: Settings) => {
    const client = new EmsEspClient(data.network_address, data.access_token);
    return await client.getSystemData();
  });

  session.setHandler("list_devices", async () => {
    const network_address = driver.homey.settings.get("network_address");
    const access_token = driver.homey.settings.get("access_token");
    const client = new EmsEspClient(network_address, access_token);
    const devices = await client.getDevices();
    return devices
      .filter((device) => device.type === deviceType)
      .map((device) => {
        return {
          name: `EMS-ESP ${capitalize(deviceType)} ${device["device id"]}`,
          data: { id: device["device id"] },
          settings: { network_address, access_token },
        };
      });
  });
}

export async function setCapabilityValues(
  device: Homey.Device,
  data: Array<[string, any]>
) {
  for (const [key, value] of data) {
    await device.setCapabilityValue(key, value).catch(device.error);
  }
}

export function capitalize(str: string): string {
  return typeof str === "string"
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : str;
}

type LastCodeTokens = {
  prefix: string;
  code: string;
  desc: string;
};

export function parseLastCode(text: string) {
  const match = text.match(/(\w+)\(([\d+^)]+)\)/);
  return match
    ? ({
        prefix: match[1],
        code: match[2],
        desc: ErrorCodes.get(match[2]) ?? "",
      } as LastCodeTokens)
    : undefined;
}

export function formatLastCode(obj: LastCodeTokens | undefined, desc = false) {
  return obj
    ? `${obj.prefix}(${obj.code})${desc && obj.desc ? ` ${obj.desc}` : ""}`
    : "-";
}

export function polling<T>(
  intervalMs: number,
  fn: () => Promise<T>,
  cb: (err: Error | null, res: T | null) => void
) {
  let stopped = false;
  let timer: NodeJS.Timeout | undefined;

  (async function poll() {
    if (stopped) return;
    try {
      cb(null, await fn());
    } catch (err) {
      cb(err instanceof Error ? err : new Error(String(err)), null);
    } finally {
      if (!stopped) timer = setTimeout(poll, intervalMs);
    }
  })();

  return () => {
    stopped = true;
    if (timer) clearTimeout(timer);
  };
}

/**
 * Use to avoid triggering a flow multiple times in a short period of time.
 */
export class TriggerThrottler {
  private timeouts = new Map<string, number>();

  public check(triggerId: string, timeoutMs: number) {
    const timeout = this.timeouts.get(triggerId);
    if (!timeout || Date.now() >= timeout) {
      this.reset(triggerId, timeoutMs);
      return true;
    }

    return false;
  }

  public reset(triggerId: string, timeoutMs: number | null = null) {
    if (timeoutMs) {
      this.timeouts.set(triggerId, Date.now() + timeoutMs);
    } else {
      this.timeouts.delete(triggerId);
    }
  }
}

export function minutesToMs(minutes: number) {
  return minutes * 60 * 1e3;
}

export function hoursToMs(hours: number) {
  return minutesToMs(hours * 60);
}
