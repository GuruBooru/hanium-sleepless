import {Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from '../../../service/user.service';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

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
export class HistoryTabComponent {
  displayedColumns: string[] = ['File/URL', 'Contexts', 'Date', 'Result', 'select'];
  // dataSource = ELEMENT_DATA;
  ELEMENT_DATA: PeriodicElement[];

  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  historyTabForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
      this.setDataSource();
   }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  setDataSource() {
    const id = sessionStorage.getItem('id');

    // this.ELEMENT_DATA = this.userService.getHistory(id);
  }

  onSubmitHistory(fb: FormGroup) {
    const id = sessionStorage.getItem('id');
    // 세부 확인할 검사결과 모음

    // 검사결과 전송
  }
}
