import { Component, OnInit, Input } from '@angular/core';
import { Result } from './result/result.component';

@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.component.html',
  styleUrls: ['./history-tab.component.css']
})
export class HistoryTabComponent implements OnInit {

  @Input() resultList: Array<Result>;

  row: number;
  rowMaker: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
