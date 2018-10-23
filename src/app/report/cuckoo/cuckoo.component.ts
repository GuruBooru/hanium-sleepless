import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuckoo',
  templateUrl: './cuckoo.component.html',
  styleUrls: ['./cuckoo.component.css']
})
export class CuckooComponent implements OnInit {

  @Input() yara_result: string;
  report: Observable<any>;
  constructor() { }

  ngOnInit() {
    let tmp: string;
    tmp = this.yara_result.replace('{"reason":', ``);
    this.yara_result = tmp;
    tmp = this.yara_result.replace('}]}', '}]');
    this.yara_result = tmp;

    console.log(this.yara_result);
    this.report = JSON.parse(this.yara_result);
  }
}

