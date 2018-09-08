import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../service/user.service';

import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignUpRoutingModule
  ],
  declarations: [SignUpComponent],
  providers: [UserService],
})
export class SignUpModule { }
