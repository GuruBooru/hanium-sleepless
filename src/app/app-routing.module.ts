import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ReportComponent } from './report/report.component';
import { MainTabComponent } from './main-tab/main-tab.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: MainTabComponent},
  {path: 'login', component: LoginComponent },
  {path: 'sign-up', component: SignUpComponent },
  {path: 'report', component: ReportComponent},
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
