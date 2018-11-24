import { Component } from '@angular/core';
import { IsLoginService } from './service/is-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = '0';

  constructor(private loginService: IsLoginService) {
    // 로그인 메시지 전송
    this.loginService.onChangeSubTitle(newIsLogin => {
      this.msg = newIsLogin;
    });
  }
}
