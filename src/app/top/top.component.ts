import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  subscription: Subscription;
  @Input() msg: string;
  userID: string;

  constructor(private route: ActivatedRoute, private router: Router) {  }

  ngOnInit() {
    this.userID = sessionStorage.getItem('id');
    console.log('top init : ' + this.msg + ' ' +  this.userID);
  }

  goMain() {
    this.router.navigateByUrl('/main');
  }
}
