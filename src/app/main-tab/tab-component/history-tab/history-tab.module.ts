import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HistoryTabComponent } from './history-tab.component';
import { HistoryTabRoutingModule} from './hsitory-tab-routing.module';
import { ResultModule } from './result/result.module';



@NgModule({
  imports: [
    CommonModule,
    ResultModule,
    ReactiveFormsModule,
    HistoryTabRoutingModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  declarations: [HistoryTabComponent],
  exports: [HistoryTabComponent],
})
export class HistoryTabModule { }
