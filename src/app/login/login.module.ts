import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../service/user.service';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule ({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: [UserService],

})
export class LoginModule {
}
