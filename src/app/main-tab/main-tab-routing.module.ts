import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTabComponent } from './main-tab.component';

const routes: Routes = [
  {path: '', component: MainTabComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainTabRoutingModule { }
