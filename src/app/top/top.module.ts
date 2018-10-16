import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBtnModule } from './user-btn/user-btn.module';
import { UserIdModule } from './user-id/user-id.module';

@NgModule({
  imports: [
    CommonModule,
    UserBtnModule,
    UserIdModule,
  ],
  declarations: []
})
export class TopModule { }
