import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { ReportModule } from './report/report.module';
import { MainTabModule } from './main-tab/main-tab.module';
import { BoardModule } from './board/board.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LoginModule,
    MainTabModule,
    MatTabsModule,
    ReportModule,
    SignUpModule,
    BoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
