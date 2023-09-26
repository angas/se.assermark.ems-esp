import { Mutex } from "async-mutex";
import fetch, { Response } from "node-fetch";
import { SystemData, DeviceData, ThermostatData, BoilerData } from "./types";

export class EmsEspClient {
  private readonly mutex = new Mutex();

  constructor(private networkAddress: string, private accessToken?: string) {}

  public static async checkResponse(response: Response | Promise<Response>) {
    const res = response instanceof Response ? response : await response;
    if (res.ok) {
      return res;
    } else {
      try {
        const data = await res.json();
        throw Error(`Got response code ${res.status}, ${data}`);
      } catch {
        throw Error(`Got response code ${res.status}`);
      }
    }
  }

  private async get<T>(path: string) {
    try {
      await this.mutex.acquire();
      const res = await EmsEspClient.checkResponse(
        fetch(`http://${this.networkAddress}/${path}`, {
          timeout: 5000,
          headers: { Accept: "application/json" },
        })
      );

      return (await res.json()) as Promise<T>;
    } finally {
      this.mutex.release();
    }
  }

  private async post<T>(path: string, body: T) {
    if (!this.accessToken) throw Error("No access token");
    try {
      this.mutex.acquire();
      return EmsEspClient.checkResponse(
        fetch(`http://${this.networkAddress}/${path}`, {
          method: "POST",
          body: JSON.stringify(body),
          timeout: 5000,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
      );
    } finally {
      this.mutex.release();
    }
  }

  public async getSystemData(): Promise<SystemData> {
    return this.get<SystemData>("api/system");
  }

  public async getDevices(): Promise<Array<DeviceData>> {
    return this.getSystemData().then((systemData) => systemData.Devices);
  }

  public async getThermostatData(): Promise<ThermostatData> {
    return this.get<ThermostatData>("api/thermostat");
  }

  public async setSelectedTemp(temp: number) {
    await this.post("api/thermostat", { cmd: "seltemp", data: temp });
  }

  public async getBoilerData(): Promise<BoilerData> {
    return this.get<BoilerData>("api/boiler");
  }
}
