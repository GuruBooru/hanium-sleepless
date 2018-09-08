import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashTabComponent } from './hash-tab.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  declarations: [HashTabComponent],
  exports: [HashTabComponent],
})
export class HashTabModule { }
