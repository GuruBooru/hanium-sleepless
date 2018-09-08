import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReportRoutingModule,
  ],
  declarations: [ReportComponent],
})
export class ReportModule { }
