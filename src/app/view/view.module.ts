import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewRoutingModule} from './view-routing.module'



@NgModule({
  declarations: [ViewHomeComponent],
  imports: [
    CommonModule, 
    ViewRoutingModule
  ]
})
export class ViewModule { }
