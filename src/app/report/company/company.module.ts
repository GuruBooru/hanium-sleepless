import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  declarations: [CompanyComponent],
  exports: [CompanyComponent],
})
export class CompanyModule { }
