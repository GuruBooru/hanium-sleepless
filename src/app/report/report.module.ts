import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { CompanyModule } from './company/company.module';
import { CuckooModule } from './cuckoo/cuckoo.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReportRoutingModule,
    CompanyModule,
    CuckooModule,
  ],
  declarations: [ReportComponent],
})
export class ReportModule { }
