import Homey from 'homey';

class MyApp extends Homey.App {
  async onInit() {
    this.log('App EMS-ESP has been initialized');
  }
}

export = MyApp;
