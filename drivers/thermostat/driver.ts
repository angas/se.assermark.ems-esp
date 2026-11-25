import Homey from 'homey';
import { driverOnPair } from '../../lib/utils';

class ThermostatDriver extends Homey.Driver {
  async onInit() {
    this.homey.flow
      .getDeviceTriggerCard('thermostat_hc1_hpoperatingstate_changed')
      .registerRunListener(async (args, state) => {
        this.log(
          'Trigger thermostat_hc1_hpoperatingstate_changed has been triggered',
          args,
          state,
        );
        return true;
      });
  }

  async onPair(session: Homey.Driver.PairSession): Promise<void> {
    driverOnPair(this, session, 'thermostat');
  }
}

export = ThermostatDriver;
