import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeContentComponent } from './home-content/home-content.component';


@NgModule({
  declarations: [HomeTopComponent, HomeContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
