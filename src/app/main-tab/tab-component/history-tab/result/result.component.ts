import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Result {
  isFile: string;
  result_name: string;
  result: string;
  date: Date;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result: Result;

  isSave: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSave = false;
  }

  navigateToResult(resultFile: File) {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/report/${}');
    }
  }

  // 보고서 변환 코드

}
