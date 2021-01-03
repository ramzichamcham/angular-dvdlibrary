import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditRoutingModule } from './edit-routing.module';
import { EditHomeComponent } from './edit-home/edit-home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [EditHomeComponent],
  imports: [
    CommonModule,
    EditRoutingModule, 
    FormsModule,
    HttpClientModule
  ]
})
export class EditModule { }
