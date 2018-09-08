import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../../../service/user.service';
import { UrlTabComponent } from './url-tab.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [UrlTabComponent],
  exports: [UrlTabComponent],
  providers: [UserService],
})
export class UrlTabModule { }
