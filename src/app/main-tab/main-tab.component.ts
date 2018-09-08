import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {
  constructor (private fb: FormBuilder, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }
}
