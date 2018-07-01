import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RosConnectionModule } from 'ros-connection';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RosConnectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
