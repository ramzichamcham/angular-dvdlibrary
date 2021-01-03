import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateRoutingModule } from './create-routing.module';
import { CreateHomeComponent } from './create-home/create-home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [CreateHomeComponent],
  imports: [
    CommonModule,
    CreateRoutingModule, 
    FormsModule, 
    HttpClientModule
  ]
})
export class CreateModule { }
