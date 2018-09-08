import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../service/user.service';
import { MatTabsModule } from '@angular/material';

import { MainTabComponent } from './main-tab.component';
import { MainTabRoutingModule } from './main-tab-routing.module';
import { FileTabModule } from './tab-component/file-tab/file-tab.module';
import { UrlTabModule } from './tab-component/url-tab/url-tab.module';
import { HashTabModule } from './tab-component/hash-tab/hash-tab.module';
import { HistoryTabModule } from './tab-component/history-tab/history-tab.module';



@NgModule({
  imports: [
    CommonModule,
    MainTabRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    FileTabModule,
    UrlTabModule,
    HashTabModule,
    HistoryTabModule,
  ],
  declarations: [MainTabComponent],
  providers: [UserService],
})
export class MainTabModule { }
