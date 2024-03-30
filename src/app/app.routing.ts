import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NxgHomeComponent } from './components/main/home/home.component';
import { NxgMainComponent } from './components/main/main.component';

const routes: Routes = [
    //{ path: '', component: NxgMainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
