import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NxgHomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: NxgHomeComponent }, // Existing path
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class mainRoutingModule { }
