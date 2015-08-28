import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users{
  heading = 'Gauging Stations';
  users = [];
  gauges = [];

  constructor (http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://piwebapi.dstcontrols.com/piwebapi/');
    });

    this.http = http;
  }

  activate (){
    // return this.http.fetch('system/versions')
    //   .then(response => response.json())
    //   .then(response => console.log(response));

      return this.http.fetch('elements/E0RCRoEQjjJ06jHBU6_gMSNgJ0bXNiDi5BGAyABQVqoXkgRFNULVM1MTU1LVZNXFBDV0FcR0FVR0lORyBTVEFUSU9OUw/elements')
        .then(response => response.json())
        .then(response => this.gauges = response.Items);
  }
}
