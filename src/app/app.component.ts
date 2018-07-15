import { Component, HostListener } from '@angular/core';

import { RosConnectionComponent } from 'ros-connection'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imgWidthRatio: 0.8;
  windowWidth: number;
  windowHeight: number;  

  constructor() {
    this.windowWidth = window.screen.width;
    this.windowHeight = window.screen.height;
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event) {
    // this.windowWidth = window.screen.width;
    // this.windowHeight = window.screen.height;
    this.windowWidth = event.target.innerWidth;
    this.windowHeight = event.target.innerHeight;
    console.log(`window width: ${this.windowWidth}`);
    console.log(`window height: ${this.windowHeight}`);
  }
}

