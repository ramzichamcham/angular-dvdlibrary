import { ViewHomeComponent } from './view/view-home/view-home.component';
import { CreateHomeComponent } from './create/create-home/create-home.component';
import { HomeTopComponent } from './home/home-top/home-top.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditHomeComponent } from './edit/edit-home/edit-home.component';


const routes: Routes = [
    {path: 'home', component: HomeTopComponent},
    {path: '', redirectTo: '/home', pathMatch:'full'}, 
    { path: 'edit/:id', component: EditHomeComponent},
    { path: 'view/:id', component: ViewHomeComponent}, 
    {path: 'create', component: CreateHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
