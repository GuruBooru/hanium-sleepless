import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-file-tab',
  templateUrl: './file-tab.component.html',
  styleUrls: ['./file-tab.component.css']
})
export class FileTabComponent implements OnInit {
  fileTabForm: FormGroup;
  vt_file: boolean;
  yr_file: boolean;
  upload_name = '파일 선택';

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.fileTabForm = this.fb.group({
      file: ['', [Validators.required]]
    });
  }

  vtChecked() {
    this.vt_file ? this.vt_file = false : this.vt_file = true;
  }

  yrChecked() {
    this.yr_file ? this.yr_file = false : this.yr_file = true;
  }

  onSubmitFile(files: FileList, form: FormGroup) {
    // 사용자 id 확인, 비사용자의 경우 null
    const id = sessionStorage.getItem('id');
    // 파일 변환
    const formData = new FormData();
    formData.append('avatar', files[0]);

    // VirusTotal 수행 여부
    if (this.vt_file) {
      // VirusTotal 수행
      this.userService.submitFileVirusTotal(id, formData).subscribe((res: any) => {
        alert('VirusTotal ' + res.result);
      });
    }
    if (this.yr_file) {
      // YaraRule 수행
      this.userService.submitFile(id, formData).subscribe((res: any) => {
        alert('YaraRule ' + res.result);
      });
    }
  }

  changeName(files: FileList) {
    this.upload_name = files[0].name;
  }
}
