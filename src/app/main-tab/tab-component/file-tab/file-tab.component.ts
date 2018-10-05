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
  loading = false;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.fileTabForm = this.fb.group({
      file: ['', [Validators.required]]
    });
  }

  onSubmitFile(files: FileList, form: FormGroup) {
    // 사용자 id 확인, 비사용자의 경우 null
    const id = sessionStorage.getItem('id');

    // 파일 변환
    const formData = new FormData();
    formData.append('avatar', files[0]);

    // VirusTotal 수행 여부
    if (form.controls.virusTotal) {
      // VirusTotal 수행
      this.userService.submitFileVirusTotal(id, formData).subscribe((res: any) => {
        this.loading = false;

        if (res.result === 'fail') {
          alert(res.result);
        }
      });
    } else {
      // VirusTotal 수행X
      this.userService.submitFile(id, formData).subscribe((res: any) => {
        this.loading = false;

    if (res.result === 'fail') {
      alert(res.result);
    }
      });
    }
  }
}
