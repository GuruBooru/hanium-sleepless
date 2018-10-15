import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent {

  userHistory: Observable<any>;

  constructor (private userService: UserService, private router: Router) { }

  reloadHistory() {
    console.log(sessionStorage.getItem('id'));
    this.userHistory = this.userService.getHistory(sessionStorage.getItem('id'));
    console.log(this.userHistory);
    }
}
