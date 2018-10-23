import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() result: string;
  @Input() cnt: number;

  report: Observable<any>;

  constructor() { }

  ngOnInit() {
    let tmp: string;
    for (let i = 0; i < this.cnt; i++) {
      tmp = this.result.replace('"report":', ``);
      this.result = tmp;
    }

    tmp = this.result.replace('{{', '[{');
    this.result = tmp.replace('}}', '}]');

    console.log(this.result);
    this.report = JSON.parse(this.result);
  }
}
