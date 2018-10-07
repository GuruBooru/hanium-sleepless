import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from '../../../service/user.service';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  isFile: string;
  context: string;
  date: string;
  result: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-history-tab',
  styleUrls: ['./history-tab.component.css'],
  templateUrl: './history-tab.component.html',
})
export class HistoryTabComponent implements OnInit {
  historyTabForm: FormGroup;

  userId = sessionStorage.getItem('id');

  // 테이블 단위로 받아올 때, 처리하는 방법
  historyInfo: Observable<Array<any>>;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    if (this.userId != null) {
      this.historyInfo = this.userService.getHistory(this.userId);
    }
  }

  onSubmitHistory(form: FormGroup) {
    // report 볼 파일명, 유저 id 전송;
  }
}
