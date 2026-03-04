import Homey from "homey";
import { TriggerThrottler, driverOnPair, hoursToMs } from "../../lib/utils";
import { BoilerDevice } from "./device";
import { BoilerData } from "../../lib/types";

class BoilerDriver extends Homey.Driver {
  private throttling = new TriggerThrottler();

  async onInit() {
    this.homey.flow
      .getDeviceTriggerCard("boiler_lastcode_changed")
      .registerRunListener(async () => {
        this.log("Trigger boiler_lastcode_changed has been triggered");
        return true;
      });

    this.homey.flow
      .getDeviceTriggerCard("boiler_wwcurtemp_less_than")
      .registerRunListener(
        async (
          args: { wwcurtemp: number; device: BoilerDevice },
          state: BoilerData,
        ) => {
          if (state.dhw?.curtemp != null && state.dhw.curtemp <= args.wwcurtemp) {
            if (this.throttling.check("wwcurtemp_less_than", hoursToMs(8))) {
              this.log("Trigger boiler_wwcurtemp_less_than has been triggered");
              return true;
            }
          } else {
            this.throttling.reset("wwcurtemp_less_than");
          }

          return false;
        },
      );
  }

  async onPair(session: Homey.Driver.PairSession): Promise<void> {
    driverOnPair(this, session, "boiler");
  }
}

module.exports = BoilerDriver;
