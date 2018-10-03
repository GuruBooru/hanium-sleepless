import {Component, OnInit} from '@angular/core';
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

const ELEMENT_DATA: PeriodicElement[] = [
  {isFile: '1', context: 'Hydrogen', date: '1.0079', result: 'H'},
  {isFile: '2', context: 'Helium', date: '4.0026', result: 'He'},
  {isFile: '3', context: 'Lithium', date: '6.941', result: 'Li'},
  {isFile: '4', context: 'Beryllium', date: '9.0122', result: 'Be'},
  {isFile: '5', context: 'Boron', date: '10.811', result: 'B'},
  {isFile: '6', context: 'Carbon', date: '12.0107', result: 'C'},
  {isFile: '7', context: 'Nitrogen', date: '14.0067', result: 'N'},
  {isFile: '8', context: 'Oxygen', date: '15.9994', result: 'O'},
  {isFile: '9', context: 'Fluorine', date: '18.9984', result: 'F'},
  {isFile: '10', context: 'Neon', date: '20.1797', result: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-history-tab',
  styleUrls: ['./history-tab.component.css'],
  templateUrl: './history-tab.component.html',
})
export class HistoryTabComponent {
  displayedColumns: string[] = ['File/URL', 'Contexts', 'Date', 'Result'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  historyTabForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {  }

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

  onSubmitHistory(fb: FormGroup) {
    const id = sessionStorage.getItem('id');
    // 세부 확인할 검사결과 모음

    // 검사결과 전송
  }
}
