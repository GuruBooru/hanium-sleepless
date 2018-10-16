import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      id: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }

  login(form: FormGroup) {
    const id = form.value.id;
    const pwd = form.value.pwd;

    // 로그인 수행
    this.userService.logIn(id, pwd).subscribe((res: any) => {
      // 로그인 데이터 확인
      if (res.result === 'success') {
        // 세션에 id 저장
        sessionStorage.setItem('id', id);

        // main 화면으로 전환
        this.router.navigateByUrl('');
      } else {
        alert(res.result);
      }
    });
  }
}
