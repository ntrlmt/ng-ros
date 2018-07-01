import { NgModule } from '@angular/core';
import { RosConnectionComponent } from './ros-connection.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  declarations: [RosConnectionComponent],
  exports: [RosConnectionComponent]
})
export class RosConnectionModule { }
