import Homey from "homey";
import { EmsEspClient } from "../../lib/ems-esp-client";
import {
  formatLastCode,
  parseLastCode,
  polling,
  setCapabilityValues,
} from "../../lib/utils";
import { BoilerData } from "../../lib/types";

export class BoilerDevice extends Homey.Device {
  private stopPolling: (() => void) | null = null;

  private get client() {
    return new EmsEspClient(
      this.getSetting("network_address"),
      this.getSetting("access_token")
    );
  }

  private triggerFlows(newData: BoilerData) {
    // Don't have to explicity triggers that ends with _changed
    // because Homey does that automatically for us
    // https://apps.developer.homey.app/the-basics/flow#custom-capability-changed
    return this.homey.flow
      .getDeviceTriggerCard("boiler_wwcurtemp_less_than")
      ?.trigger(this, { wwcurtemp: newData.wwcurtemp }, newData);
  }

  private async updateCapabilityValues(data: BoilerData) {
    return setCapabilityValues(this, [
      ["boiler_curflowtemp", data.curflowtemp],
      ["boiler_hpbrinein", data.hpbrinein],
      ["boiler_hpbrineout", data.hpbrineout],
      ["boiler_hpbrinepumpspd", data.hpbrinepumpspd],
      ["boiler_hpcircspd", data.hpcircspd],
      ["boiler_hpcompspd", data.hpcompspd],
      ["boiler_lastcode", formatLastCode(parseLastCode(data.lastcode))],
      ["boiler_rettemp", data.rettemp],
      ["boiler_wwcurtemp", data.wwcurtemp],
    ]);
  }

  async onInit() {
    this.stopPolling = polling(
      Number(this.getSetting("poll_interval") || 10000),
      () => this.client.getBoilerData(),
      async (err, res) => {
        if (err) {
          this.error(err);
          await this.setUnavailable(`${err}`).catch(this.error);
        } else if (res) {
          await this.updateCapabilityValues(res).catch(this.error);
          await this.setAvailable().catch(this.error);
          await this.triggerFlows(res).catch(this.error);
        }
      }
    );
  }

  onDeleted() {
    this.stopPolling?.();
  }
}

module.exports = BoilerDevice;
