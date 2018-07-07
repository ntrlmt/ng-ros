import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { RosConnectionService } from './ros-connection.service';

@Component({
  selector: 'mat-ros-connection',
  templateUrl: './ros-connection.html',
  styleUrls: ['./ros-connection.css']
})
export class RosConnectionComponent implements OnInit {
  url: string = 'localhost:9090';
  get connected(): boolean {
    return this.rosConnectionService.connected;
  }

  get color(): string {
    if(this.connected){
      return 'primary';
    }
    else {
      return '';
    }
  } 

  constructor(private rosConnectionService : RosConnectionService) { }

  ngOnInit() {
  }

  connect() {
    if(this.connected){
      this.rosConnectionService.disconnect();
    }
    else{
      this.rosConnectionService.connect(this.url);
    }
  }
}
