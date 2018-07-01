import { Injectable } from '@angular/core';

import * as ROSLIB from 'roslib';

@Injectable({
  providedIn: 'root'
})
export class RosConnectionService {
  ros: ROSLIB.Ros;
  url: string = 'localhost:9090';
  connected: boolean = false;

  constructor() { }

  private connectionEvent = () => {
    console.log('Connected to websocket server: ', this.url);
    this.connected = true;
  }

  private errorEvent = (error) => {
    console.log('Error connecting to websocket server: ', error);
    this.connected = false;
  }

  private closeEvent = () => {
    console.log('Connection to websocket server closed.');
    this.connected = false;
  }
  
  connect(url: string) {
    this.url = url
    this.ros = new ROSLIB.Ros({
      url: 'ws://' + this.url
    });

    this.ros.on('connection', this.connectionEvent);
    this.ros.on('error', this.errorEvent);
    this.ros.on('close', this.closeEvent);
  }

  disconnect() {
    if(this.connected){
      this.ros.close();
    }
  }
}
