import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditHomeComponent } from './edit-home/edit-home.component';

const routes: Routes = [
  {path: 'edit', component: EditHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
