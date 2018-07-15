import { Component, OnInit, Input, ViewChild, ElementRef, DoCheck, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'mat-ros-image-view',
  templateUrl: './ros-image-view.html',
  styleUrls: ['./ros-image-view.css']
})
export class RosImageViewComponent implements OnInit, DoCheck, OnChanges, AfterViewInit {
  @ViewChild('imageViewDiv') imageViewDivElem: ElementRef;
  @ViewChild('image') imageElem: ElementRef;
  @Input()
  url: string = "http://localhost:8080";
  @Input()
  imageTopicName: string = "/camera_node/image";
  @Input()
  imgWidth = 0;
  @Input()
  imgMaxWidth = 0;
  @Input()
  imgRatio: number = 0;

  get imageUrl(): string {
    var imageUrl = this.url + "/snapshot?topic=" + this.imageTopicName;
    var imgWidth = this.imgWidth;
    if(this.imgMaxWidth != 0 && imgWidth > this.imgMaxWidth){
      imgWidth = this.imgMaxWidth;
    }
    if(imgWidth != undefined && imgWidth >= 0) {
      imageUrl += "&width=" + this.imgWidth ;
      if(this.imgRatio != 0) {   
        var imgHeight = Math.floor(imgWidth * this.imgRatio);
        imageUrl += "&height=" + imgHeight;
      }  
      console.log(`image width: ${imgWidth}`);    
      console.log(`image height: ${imgHeight}`);
    }
    return imageUrl;
  }
  get videoUrl(): string {
    var videoUrl = this.url + "/stream?topic=" + this.imageTopicName;
    var imgWidth = this.imgWidth;

    if(imgWidth != undefined && imgWidth >= 0) {
      videoUrl += "&width=" + this.imgWidth ;
      if(this.imgRatio != 0) {   
        var imgHeight = Math.floor(imgWidth * this.imgRatio);
        videoUrl += "&height=" + imgHeight;
      }  
      console.log(`image width: ${imgWidth}`);    
      console.log(`image height: ${imgHeight}`);
    }
    console.log(`image width: ${imgWidth}`);    
    console.log(`image height: ${imgHeight}`);
    return videoUrl;
  }
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngDoCheck() {
  }

  ngOnChanges() {
  }
}
