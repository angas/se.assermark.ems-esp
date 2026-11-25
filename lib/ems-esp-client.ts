import { Mutex } from 'async-mutex';
import {
  SystemData, DeviceData, ThermostatData, BoilerData,
} from './types';

export default class EmsEspClient {
  private readonly mutex = new Mutex();
  private readonly networkAddress: string;
  private readonly accessToken?: string;

  constructor(networkAddress: string, accessToken?: string) {
    this.networkAddress = networkAddress;
    this.accessToken = accessToken;
  }

  public static async checkResponse(response: Response | Promise<Response>) {
    const res = response instanceof Response ? response : await response;
    if (res.ok) {
      return res;
    }
    let detail = '';
    try {
      detail = `, ${await res.json()}`;
    } catch {}
    throw Error(`Got response code ${res.status}${detail}`);
  }

  private async request(path: string, init: RequestInit) {
    const url = `http://${this.networkAddress}/${path}`;
    try {
      return await fetch(url, { ...init, signal: AbortSignal.timeout(5000) });
    } catch (err) {
      // Native fetch reports only "fetch failed"; the reason is in the cause.
      let reason = `${err}`;
      if (err instanceof Error && err.name === 'TimeoutError') {
        reason = 'network timeout';
      } else if (err instanceof Error && err.cause instanceof Error) {
        reason = err.cause.message;
      }
      throw Error(`Request to ${url} failed, reason: ${reason}`);
    }
  }

  private async get<T>(path: string) {
    try {
      await this.mutex.acquire();
      const res = await EmsEspClient.checkResponse(
        this.request(path, { headers: { Accept: 'application/json' } }),
      );

      return (await res.json()) as T;
    } finally {
      this.mutex.release();
    }
  }

  private async post<T>(path: string, body: T) {
    if (!this.accessToken) throw Error('No access token');
    try {
      await this.mutex.acquire();
      return await EmsEspClient.checkResponse(
        this.request(path, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.accessToken}`,
          },
        }),
      );
    } finally {
      this.mutex.release();
    }
  }

  public async getSystemData(): Promise<SystemData> {
    return this.get<SystemData>('api/system');
  }

  public async getDevices(): Promise<Array<DeviceData>> {
    return this.getSystemData().then((systemData) => systemData.devices);
  }

  public async getThermostatData(): Promise<ThermostatData> {
    return this.get<ThermostatData>('api/thermostat');
  }

  public async setSelectedTemp(temp: number) {
    await this.post('api/thermostat', { cmd: 'seltemp', data: temp });
  }

  public async getBoilerData(): Promise<BoilerData> {
    return this.get<BoilerData>('api/boiler');
  }
}
