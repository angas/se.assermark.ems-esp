import Homey from 'homey';
import EmsEspClient from '../../lib/ems-esp-client';
import {
  formatLastCode,
  parseLastCode,
  polling,
  setCapabilityValues,
} from '../../lib/utils';
import { BoilerData } from '../../lib/types';

class BoilerDevice extends Homey.Device {
  private stopPolling: (() => void) | null = null;
  private restartTimer: NodeJS.Timeout | null = null;
  private deleted = false;
  private _client: EmsEspClient | null = null;

  private get client() {
    if (!this._client) {
      this._client = new EmsEspClient(
        this.getSetting('network_address'),
        this.getSetting('access_token'),
      );
    }
    return this._client;
  }

  private get intervalMs() {
    return Number(this.getSetting('poll_interval') || 10000);
  }

  private triggerFlows(newData: BoilerData) {
    // Don't have to explicity triggers that ends with _changed
    // because Homey does that automatically for us
    // https://apps.developer.homey.app/the-basics/flow#custom-capability-changed
    return this.homey.flow
      .getDeviceTriggerCard('boiler_wwcurtemp_less_than')
      ?.trigger(this, { wwcurtemp: newData.dhw.curtemp }, newData);
  }

  private async updateCapabilityValues(data: BoilerData) {
    return setCapabilityValues(this, [
      ['boiler_curflowtemp', data.curflowtemp],
      ['boiler_hpbrinein', data.hpbrinein],
      ['boiler_hpbrineout', data.hpbrineout],
      ['boiler_hpbrinepumpspd', data.hpbrinepumpspd],
      ['boiler_hpcircspd', data.hpcircspd],
      ['boiler_hpcompspd', data.hpcompspd],
      ['boiler_lastcode', formatLastCode(parseLastCode(data.lastcode))],
      ['boiler_rettemp', data.rettemp],
      ['boiler_wwcurtemp', data.dhw.curtemp],
    ]);
  }

  private startPolling() {
    if (this.deleted) return;
    this.stopPolling?.();
    if (this.restartTimer) this.homey.clearTimeout(this.restartTimer);

    this.stopPolling = polling(
      this,
      this.intervalMs,
      () => this.client.getBoilerData(),
      (err, res) => {
        this.handlePollResult(err, res).catch(this.error);
      },
    );
  }

  private restartPollingAfter(delayMs: number) {
    if (this.restartTimer) this.homey.clearTimeout(this.restartTimer);
    this.restartTimer = this.homey.setTimeout(() => this.startPolling(), delayMs);
  }

  private async handlePollResult(err: Error | null, res: BoilerData | null) {
    if (err) {
      this.error(err);
      // Stop regular polling and retry once after a doubled interval.
      this.stopPolling?.();
      this.restartPollingAfter(this.intervalMs * 2);
      await this.setUnavailable(`${err}`).catch(this.error);
    } else if (res) {
      await this.updateCapabilityValues(res).catch(this.error);
      await this.setAvailable().catch(this.error);
      await this.triggerFlows(res).catch(this.error);
    }
  }

  async onInit() {
    this.startPolling();
  }

  async onSettings() {
    this._client = null;
    this.startPolling();
  }

  onDeleted() {
    this.deleted = true;
    this.stopPolling?.();
    if (this.restartTimer) this.homey.clearTimeout(this.restartTimer);
  }
}

export = BoilerDevice;
