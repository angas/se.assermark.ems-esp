import { Mutex } from "async-mutex";

export type Settings = {
  network_address: string;
  access_token: string;
};

export type DeviceSettings = {
  networkAddress: string;
  accessToken: string;
  pollInterval: number;
  mutex: Mutex;
  timeout: NodeJS.Timeout | null;
};

export type SystemData = {
  system: SystemInfo;
  network: unknown;
  ntp: unknown;
  ap: unknown;
  mqtt: unknown;
  syslog: unknown;
  sensor: unknown;
  api: unknown;
  bus: unknown;
  settings: unknown;
  devices: Array<DeviceData>;
};

export type SystemInfo = {
  version: string;
  platform: string;
  uptime: string;
  uptimeSec: number;
  freeMem: number;
  maxAlloc: number;
  freeApp: number;
  resetReason: string;
};

export type DeviceType =
  | "boiler"
  | "thermostat"
  | "heatpump"
  | "heatsource"
  | "solar"
  | "connect"
  | "mixer"
  | "controller"
  | "switch"
  | "gateway"
  | "alert"
  | "pump";

export type DeviceData = {
  type: DeviceType;
  name: string;
  deviceID: string;
  productID: number;
  brand: string;
  version: string;
  entities: number;
  handlersReceived: string;
  handlersFetched: string;
  handlersPending: string;
  handlersIgnored: string;
};

export type ThermostatHc1Data = {
  seltemp: number;
  hpoperatingstate: string;
  hpoperatingmode: string;
  [key: string]: unknown;
};

export type ThermostatData = {
  dampedoutdoortemp: number;
  hc1: ThermostatHc1Data | undefined;
  dhw: unknown;
  [key: string]: unknown;
};

export type BoilerDhwData = {
  curtemp: number;
  curtemp2: number;
  curflow: number;
  [key: string]: unknown;
};

export type BoilerData = {
  curflowtemp: number;
  rettemp: number;
  lastcode: string;
  hpbrinein: number;
  hpbrineout: number;
  hpbrinepumpspd: number;
  hpcircspd: number;
  hpcompspd: number;
  dhw: BoilerDhwData;
  [key: string]: unknown;
};
