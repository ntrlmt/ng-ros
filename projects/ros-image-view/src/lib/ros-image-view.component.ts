import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mat-ros-image-view',
  templateUrl: './ros-image-view.html',
  styleUrls: ['./ros-image-view.css']
})
export class RosImageViewComponent implements OnInit {
  // url: string = "http://localhost:8080";
  url: string = "http://192.168.11.160:8080";
  width = 640;
  height = 480;
  imageTopicName: string = "/raspicam_node/image";
  get imageUrl(): string {
    return this.url + "/snapshot?topic=" + this.imageTopicName + "&width=" + this.width + "&height=" + this.height;
  }
  get videoUrl(): string {
    return this.url + "/stream?topic=" + this.imageTopicName  + "&width=" + this.width + "&height=" + this.height;
  }
  constructor() { }

  ngOnInit() {
  }

}
