import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// convert html to pdf
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reportForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.reportForm = this.fb.group({

    });
  }

}
