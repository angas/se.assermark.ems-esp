import Homey from "homey";
import { EmsEspClient } from "../../lib/ems-esp-client";
import { capitalize, polling, setCapabilityValues } from "../../lib/utils";
import { ThermostatData } from "../../lib/types";

class ThermostatDevice extends Homey.Device {
  private stopPolling: (() => void) | null = null;
  private oldData: ThermostatData | null = null;
  private hpoperatingstateChangedTrigger:
    | Homey.FlowCardTriggerDevice
    | undefined;

  private get intervalMs() {
    return Number(this.getSetting("poll_interval") || 10000);
  }

  private get client() {
    return new EmsEspClient(
      this.getSetting("network_address"),
      this.getSetting("access_token")
    );
  }

  private startPolling() {
    this.stopPolling = this.stopPolling = polling(
      Number(this.getSetting("poll_interval") || 10000),
      () => this.client.getThermostatData(),
      async (err, res) => {
        if (err) {
          this.error(err);
          await this.setUnavailable(`${err}`).catch(this.error);
        } else if (res) {
          await this.updateCapabilityValues(res).catch(this.error);
          await this.setAvailable().catch(this.error);
          await this.triggerFlows(res);
        }
      }
    );
  }

  private async triggerFlows(newData: ThermostatData) {
    if (
      this.oldData &&
      this.oldData.hc1.hpoperatingstate !== newData.hc1.hpoperatingstate
    ) {
      this.hpoperatingstateChangedTrigger
        ?.trigger(
          this,
          {
            old_value: capitalize(this.oldData.hc1.hpoperatingstate),
            new_value: capitalize(newData.hc1.hpoperatingstate),
          },
          undefined
        )
        .catch(this.error);
    }
    this.oldData = newData;
  }

  private async updateCapabilityValues(data: ThermostatData) {
    return setCapabilityValues(this, [
      ["thermostat_dampedoutdoortemp", data.dampedoutdoortemp],
      [
        "thermostat_hc1_hpoperatingstate",
        capitalize(data.hc1.hpoperatingstate),
      ],
      ["target_temperature", data.hc1.seltemp],
    ]);
  }

  async onInit() {
    this.hpoperatingstateChangedTrigger = this.homey.flow.getDeviceTriggerCard(
      "thermostat_hc1_hpoperatingstate_changed"
    );

    this.registerCapabilityListener("target_temperature", async (value) => {
      this.log(`Updating selected temperature to ${value}°C`);
      try {
        if (this.oldData?.hc1.seltemp === value) {
          this.log(`Don't update selected temperature, is already ${value}°C`);
          return;
        }
        this.stopPolling?.();
        await this.client.setSelectedTemp(value).catch(this.error);
        this.setCapabilityValue("target_temperature", value).catch(this.error);
        this.log(`Selected temperature updated to ${value}°C`);
      } catch (err) {
        this.error("Failed to update selected temperature", err);
        this.setUnavailable(`${err}`).catch(this.error);
      } finally {
        // Don't start polling until the thermostat has been updated
        setTimeout(() => this.startPolling(), this.intervalMs);
      }
    });

    this.homey.flow
      .getConditionCard("outdoor-temp-less-than")
      .registerRunListener(async (args: { temp: number }, state) => {
        const temp = this.oldData?.dampedoutdoortemp;
        return temp && temp < args.temp;
      });

    this.homey.flow
      .getConditionCard("outdoor-temp-greater-than")
      .registerRunListener(async (args: { temp: number }, state) => {
        const temp = this.oldData?.dampedoutdoortemp;
        return temp && temp > args.temp;
      });

    this.startPolling();
  }

  onDeleted() {
    this.stopPolling?.();
  }
}

module.exports = ThermostatDevice;
