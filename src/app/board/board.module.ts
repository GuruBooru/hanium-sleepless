import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DisplayModule } from './display/display.module';
import { ListModule } from './list/list.module';
import { WriteModule } from './write/write.module';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';


@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BoardRoutingModule,
    ReactiveFormsModule,
    ListModule,
    DisplayModule,
    WriteModule
  ],
  providers: [],
  bootstrap: [BoardComponent]
})
export class BoardModule {
}
