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
  virusTotal: number;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.urlTabForm = this.fb.group({
      url: ['', [Validators.required]],
    });
  }

  onSubmitURL(form: FormGroup) {
    // 사용자 id 확인, 비사용자의 경우 null
    const id = sessionStorage.getItem('id');
    // url값 고정
    const url = form.value.url;

    if (form.controls.virusTotal) {
      this.virusTotal = 1;
    } else {
      this.virusTotal = 0;
    }


    // url 전송
    this.userService.submitUrl(id, url, this.virusTotal).subscribe((res: any) => {
      if (res.result === 'success') {
        form.value.url = '';
      } else {
        alert(res.result);
      }

    });
  }
}
