import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  msg: string;
  userID: string;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.userID = sessionStorage.getItem('id');
    this.msg = '1';
    console.log(this.msg);
    this.data.currentMessage.subscribe(message => this.msg = message);
  }
}
