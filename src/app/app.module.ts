import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RosConnectionModule } from 'ros-connection';
import { RosImageViewModule } from 'ros-image-view';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RosConnectionModule,
    RosImageViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
