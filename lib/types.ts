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
  "System Info": SystemInfo;
  "Network Info": unknown;
  "NTP Info": unknown;
  "OTA Info": unknown;
  "MQTT Info": unknown;
  "Syslog Info": unknown;
  "Sensor Info": unknown;
  "API Info": unknown;
  "Bus Info": unknown;
  Settings: unknown;
  Devices: Array<DeviceData>;
};

export type SystemInfo = {
  version: string;
  platform: string;
  uptime: string;
  "uptime (seconds)": number;
  "free mem": number;
  "max alloc": number;
  "free app": number;
  "reset reason": string;
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
  "device id": string;
  "product id": string;
  version: string;
  entities: number;
  "handlers received": string;
  "handlers fetched": string;
  "handlers pending": string;
  "handlers ignored": string;
};

export type ThermostatData = {
  datetime: string;
  intoffset: number;
  floordry: "off" | "start" | "heat" | "hold" | "cool" | "end";
  dampedoutdoortemp: number;
  floordrytemp: number;
  building: "light" | "medium" | "heavy";
  minexttemp: number;
  damping: "on" | "off";
  energycostratio: number;
  pvenableww: "on" | "off";
  pvraiseheat: number;
  pvlowercool: number;
  wwmode: "off" | "normal" | "comfort" | "auto" | "own prog" | "eco";
  wwcircmode: "off" | "on" | "auto" | "own prog";
  wwchargeduration: number;
  wwcharge: "on" | "off";
  wwextra1: number;
  wwdisinfecting: "on" | "off";
  wwdisinfectday: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | "all";
  wwdisinfecttime: number;
  hc1: {
    seltemp: number;
    haclimate: "selTemp" | "roomTemp";
    mode: "manual" | "auto";
    modetype: "eco" | "comfort";
    ecotemp: number;
    manualtemp: number;
    comforttemp: number;
    summertemp: number;
    designtemp: number;
    offsettemp: number;
    minflowtemp: number;
    maxflowtemp: number;
    roominfluence: number;
    roominflfactor: number;
    curroominfl: number;
    nofrostmode: "room" | "outdoor" | "room outdoor";
    nofrosttemp: number;
    targetflowtemp: number;
    heatingtype: "off" | "radiator" | "convector" | "floor";
    hpoperatingmode: "off" | "auto" | "heating" | "cooling";
    hpoperatingstate: "heating" | "off" | "cooling";
    controlmode:
      | "weather compensated"
      | "outside basepoint"
      | "n/a"
      | "room"
      | "power"
      | "constant";
    program: "prog 1" | "prog 2";
    tempautotemp: number;
    remoteseltemp: number;
    fastheatup: number;
    switchonoptimization: "on" | "off";
    reducemode: "outdoor" | "room" | "reduce";
    noreducetemp: number;
    reducetemp: number;
    wwprio: "on" | "off";
    cooling: "on" | "off";
    coolingon: "on" | "off";
    hpmode: "heating" | "cooling" | "heating&cooling";
    dewoffset: number;
    roomtempdiff: number;
    hpminflowtemp: number;
  };
};

export type BoilerData = {
  wwstarts2: number;
  wwalternatingop: "on" | "off";
  wwaltopprioheat: number;
  wwaltopprioww: number;
  wwcomfoff: number;
  wwecooff: number;
  wwecoplusoff: number;
  hpcircpumpww: "on" | "off";
  wwsettemp: number;
  wwseltemp: number;
  wwseltemplow: number;
  wwseltempsingle: number;
  wwcomfort1: string;
  wwflowtempoffset: number;
  wwcircpump: "on" | "off";
  wwhyston: number;
  wwhystoff: number;
  wwdisinfectiontemp: number;
  wwcircmode:
    | "off"
    | "1x3min"
    | "2x3min"
    | "3x3min"
    | "4x3min"
    | "5x3min"
    | "6x3min"
    | "continuous";
  wwcirc: "on" | "off";
  wwcurtemp: number;
  wwcurtemp2: number;
  wwcurflow: number;
  wwactivated: "on" | "off";
  wwonetime: "on" | "off";
  wwdisinfecting: "on" | "off";
  wwcharging: "on" | "off";
  wwrecharging: "on" | "off";
  wwtempok: "on" | "off";
  ww3wayvalve: "on" | "off";
  wwstarts: number;
  wwworkm: number;
  heatingactive: "on" | "off";
  tapwateractive: "on" | "off";
  selflowtemp: number;
  heatingpumpmod: number;
  outdoortemp: number;
  curflowtemp: number;
  rettemp: number;
  syspress: number;
  burngas: "on" | "off";
  flamecurr: number;
  heatingpump: "on" | "off";
  fanwork: "on" | "off";
  ignwork: "on" | "off";
  heatingactivated: "on" | "off";
  heatingtemp: number;
  burnminperiod: number;
  burnminpower: number;
  burnmaxpower: number;
  boilhyston: number;
  boilhystoff: number;
  absburnpow: number;
  selburnpow: number;
  curburnpow: number;
  burnstarts: number;
  burnworkmin: number;
  burn2workmin: number;
  heatworkmin: number;
  heatstarts: number;
  ubauptime: number;
  lastcode: string;
  servicecodenumber: number;
  emergencyops: "on" | "off";
  emergencytemp: number;
  uptimecontrol: number;
  uptimecompheating: number;
  uptimecompcooling: number;
  uptimecompww: number;
  uptimecomppool: number;
  totalcompstarts: number;
  heatingstarts: number;
  coolingstarts: number;
  poolstarts: number;
  nrgconstotal: number;
  nrgconscomptotal: number;
  nrgconscompheating: number;
  nrgconscompww: number;
  nrgconscompcooling: number;
  nrgconscomppool: number;
  auxelecheatnrgconstotal: number;
  auxelecheatnrgconsheating: number;
  auxelecheatnrgconsww: number;
  auxelecheatnrgconspool: number;
  nrgsupptotal: number;
  nrgsuppheating: number;
  nrgsuppww: number;
  nrgsuppcooling: number;
  nrgsupppool: number;
  hppower: number;
  hpcompon: "on" | "off";
  hpactivity:
    | "none"
    | "heating"
    | "cooling"
    | "hot water"
    | "pool"
    | "unknown"
    | "defrost";
  hpheatingon: "on" | "off";
  hpcoolingon: "on" | "off";
  hpwwon: "on" | "off";
  hppoolon: "on" | "off";
  hpbrinepumpspd: number;
  hpswitchvalve: "on" | "off";
  hpcompspd: number;
  hpcircspd: number;
  hpbrinein: number;
  hpbrineout: number;
  hptcnumber: number;
  hptc1: number;
  hptc3: number;
  hptr1: number;
  hptr3: number;
  hptr5: number;
  hptr6: number;
  hptl2: number;
  hppl1: number;
  hpph1: number;
  poolsettemp: number;
  hpin1opt: string;
  hpin2opt: string;
  hpin3opt: string;
  hpin4opt: string;
  maxheatcomp: string;
  maxheatheat: string;
  maxheatdhw: string;
  mandefrost: "on" | "off";
  pvcooling: "on" | "off";
  auxheateronly: "on" | "off";
  auxheateroff: "on" | "off";
  auxheaterstatus: "on" | "off";
  auxheaterdelay: number;
  auxmaxlimit: number;
  auxlimitstart: number;
  auxheatrmode: "eco" | "comfort";
  hphystheat: number;
  hphystcool: number;
  hphystpool: number;
  silentmode: "off" | "auto" | "on";
  silentfrom: number;
  silentto: number;
  mintempsilent: number;
  tempparmode: number;
  auxheatmix: number;
  tempdiffheat: number;
  tempdiffcool: number;
  vpcooling: "on" | "off";
  heatcable: "on" | "off";
  vcnumbervalve: "on" | "off";
  primepump: "on" | "off";
  primepumpmod: number;
  hp3way: "on" | "off";
  elheatstep1: "on" | "off";
  elheatstep2: "on" | "off";
  elheatstep3: "on" | "off";
};
