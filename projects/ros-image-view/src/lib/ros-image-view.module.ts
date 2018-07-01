import { NgModule } from '@angular/core';
import { RosImageViewComponent } from './ros-image-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  declarations: [RosImageViewComponent],
  exports: [RosImageViewComponent]
})
export class RosImageViewModule { }
