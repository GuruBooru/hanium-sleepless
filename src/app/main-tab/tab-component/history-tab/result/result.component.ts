import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Result {
  isFile: string;
  content: string;
  result: string;
  date: Date;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
