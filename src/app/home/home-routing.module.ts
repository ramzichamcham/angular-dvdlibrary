
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTopComponent } from './home-top/home-top.component';
import { HomeContentComponent } from './home-content/home-content.component';



const routes: Routes = [
  // {path: 'home', component: HomeTopComponent},
  // {path: 'home', component: HomeContentComponent},
  // {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
