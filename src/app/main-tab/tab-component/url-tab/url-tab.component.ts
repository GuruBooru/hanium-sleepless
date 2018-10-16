import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-url-tab',
  templateUrl: './url-tab.component.html',
  styleUrls: ['./url-tab.component.css']
})
export class UrlTabComponent implements OnInit {

  urlTabForm: FormGroup;
  vt_url: boolean;
  yr_url: boolean;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.urlTabForm = this.fb.group({
      url: ['', [Validators.required]],
    });
  }

  vtChecked() {
    this.vt_url ? this.vt_url = false : this.vt_url = true;
  }

  yrChecked() {
    this.yr_url ? this.yr_url = false : this.yr_url = true;
  }

  onSubmitURL(form: FormGroup) {
    // 사용자 id 확인, 비사용자의 경우 null
    const id = sessionStorage.getItem('id');
    // url값 고정
    const url = form.value.url;

    console.log(url);
    // url 전송
    if (this.vt_url) {
      this.userService.submitUrlVirusTotal(id, url).subscribe((res: any) => {
        form.value.url = '';
        alert('VirusTotal ' + res.result);
      });
    }
    if (this.yr_url) {
      this.userService.submitUrl(id, url).subscribe((res: any) => {
        form.value.url = '';
        alert('YaraRule ' + res.result);
      });
    }
  }
}
