import Homey from "homey";
import { BoilerData, ThermostatData } from "./lib/types";

class MyApp extends Homey.App {
  async onInit() {
    this.log("App EMS-ESP has been initialized");
  }
}

module.exports = MyApp;
