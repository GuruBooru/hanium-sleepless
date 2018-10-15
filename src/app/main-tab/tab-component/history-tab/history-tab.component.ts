import {Component, OnInit, Input} from '@angular/core';
import { Router} from '@angular/router';

import { UserService } from '../../../service/user.service';
import { Observable } from 'rxjs';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-history-tab',
  styleUrls: ['./history-tab.component.css'],
  templateUrl: './history-tab.component.html',
})
export class HistoryTabComponent {
  // 테이블 단위로 받아올 때, 처리하는 방법
  @Input() historyInfo: Observable<any>;

  constructor(private userService: UserService, private router: Router) { }

  navigateToReport(scan_id, file_md5_url, isfile) {
    this.router.navigate([`/report`, {scan_id: scan_id, file_md5_url: file_md5_url, isfile: isfile}]);
  }
}
