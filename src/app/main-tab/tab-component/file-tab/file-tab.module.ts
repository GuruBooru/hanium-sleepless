import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../../../service/user.service';
import { FileTabComponent } from './file-tab.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  declarations: [FileTabComponent],
  exports: [FileTabComponent],
  providers: [UserService],
})
export class FileTabModule { }
