import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditHomeComponent } from './edit-home/edit-home.component';


@NgModule({
  declarations: [EditHomeComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
