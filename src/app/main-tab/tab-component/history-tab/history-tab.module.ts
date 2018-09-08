import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HistoryTabComponent } from './history-tab.component';
import { ResultModule } from './result/result.module';


@NgModule({
  imports: [
    CommonModule,
    ResultModule,
    ReactiveFormsModule,
  ],
  declarations: [HistoryTabComponent],
  exports: [HistoryTabComponent],
})
export class HistoryTabModule { }
