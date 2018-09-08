import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpFormGroup: FormGroup;
  isDuplilcate: boolean;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.signUpFormGroup = this.fb.group({
      id: ['', [Validators.required]],
      pwd: ['', Validators.required],
      user_name: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.isDuplilcate = false;
  }

  signup(form: FormGroup) {
    if (form.valid) {
      this.userService
      .signUp(form.controls.id.value, form.controls.pwd.value, form.controls.user_name.value, form.controls.email.value)
      .subscribe((res: any) => {
        if (res.result === 'fail') {
          this.isDuplilcate = true;
          // 빈칸에 따른 예외처리
          form.controls.id.reset();
          form.controls.pwd.reset();
          form.controls.email.reset();
          form.controls.user_name.reset();

        } else if (res.result === 'success') {
          // 현재 session에 id 저장
          sessionStorage.setItem('id', res.id);

          // main 화면으로 전환
          this.router.navigateByUrl('/main');
        }

      });
    }
  }

}
