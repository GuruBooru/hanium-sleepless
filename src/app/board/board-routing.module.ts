import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteComponent } from './write/write.component';
import { DisplayComponent } from './display/display.component';
import { BoardComponent } from './board.component';

const routes: Routes = [
  {path: '', component: BoardComponent},
  {path: 'write', component: WriteComponent},
  {path: 'post/:id', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
