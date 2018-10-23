import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuckooComponent } from './cuckoo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [CuckooComponent],
  exports: [CuckooComponent],
})
export class CuckooModule { }
