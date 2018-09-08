import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-hash-tab',
  templateUrl: './hash-tab.component.html',
  styleUrls: ['./hash-tab.component.css']
})
export class HashTabComponent implements OnInit {

  hashTabForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.hashTabForm = this.fb.group({
      hash: ['', [Validators.required]],
    });
  }

  onSubmitHash(form: FormGroup) {
    // 사용자 id 확인, 비사용자의 경우 null
    const id = sessionStorage.getItem('id');
    // hash값 설정
    const hash = form.value.hash;

    // hash값 전송
    this.userService.submitHash(id, hash).subscribe((res: any) => {
      if (res.result === 'success') {
        form.value.hash =  '';
      } else {
        alert(res.result);
      }
    });
  }
}
