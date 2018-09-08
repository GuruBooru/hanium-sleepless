import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private global: GlobalService, private http: HttpClient ) {
    this.url = global.url;
  }

  signUp(id: string, pwd: string, user_name: string, email: string): Observable<any> {
    return this.http.post(this.url + '/sign-up', {
      id: id,
      pwd: pwd,
      name: user_name,
      email: email
    });
  }

  logIn(id: string, password: string): Observable<any> {
    const encoded = btoa('${email}:${pwd}');
    return this.http.post(this.url + '/login', {id: id, pwd: password});
  }

  submitFile(id: string, file: FormData, isCheck: number) {
    return this.http.post(this.url + `/file?id=${id}${isCheck}`, file);
  }

  submitUrl(id: string, url: string, isCheck: number) {
    return this.http.post(this.url + '/res_url', {id: id, res_url: url});
  }

  submitHash(id: string, hash: string) {
    return this.http.post(this.url + '/hash', {id: id, res_hash: hash});
  }
}
