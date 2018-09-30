import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';

import { HistoryTabComponent } from './history-tab.component';
import { ResultModule } from './result/result.module';


@NgModule({
  imports: [
    CommonModule,
    ResultModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  declarations: [HistoryTabComponent],
  exports: [HistoryTabComponent],
})
export class HistoryTabModule { }
