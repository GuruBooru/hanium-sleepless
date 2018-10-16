import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  button_hide: string;
  userID: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userID = sessionStorage.getItem('id');
    this.hidebutton();
  }

  hidebutton() {
    console.log(this.userID);

    if (this.userID === null) {
      this.button_hide = '1';
    } else {
      this.button_hide = '0';
    }
  }
}
