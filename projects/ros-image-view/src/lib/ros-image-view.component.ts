import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mat-ros-image-view',
  templateUrl: './ros-image-view.html',
  styleUrls: ['./ros-image-view.css']
})
export class RosImageViewComponent implements OnInit {
  url: string = "http://localhost:8080";
  topicName: string = "";
  constructor() { }

  ngOnInit() {
  }

}
