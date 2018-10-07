import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UserService } from '../../../service/user.service';
import { FileTabComponent } from './file-tab.component';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  declarations: [FileTabComponent],
  exports: [FileTabComponent],
  providers: [UserService],
})
export class FileTabModule { }
