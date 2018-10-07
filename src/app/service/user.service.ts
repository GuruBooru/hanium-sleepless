import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

import { GlobalService } from './global.service';
import { map } from 'rxjs/operators';

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

  // 파일 검사
  submitFileVirusTotal(id: string, file: FormData) {
    return this.http.post(this.url + `/file/VirusTotal?id=${id}`, file);
  }
  submitFile(id: string, file: FormData) {
    return this.http.post(this.url + `/file?id=${id}`, file);
  }

  // URL 검사
  submitUrlVirusTotal(id: string, url: string) {
    return this.http.post(this.url + `/res_url/VirusTotal`, {id: id, res_url: url});
  }
  submitUrl(id: string, url: string) {
    return this.http.post(this.url + '/res_url', {id: id, res_url: url});
  }

  // Hash 값 검사
  submitHash(id: string, hash: string) {
    return this.http.post(this.url + '/hash', {id: id, res_hash: hash});
  }

  // 결과 리스트 받아오기
  getHistory(id: string): Observable<Array<any[]>> {
    return this.http.get(this.url + `history?id=${id}`).pipe(
      map((res: any) => res.result === 'success' ? res.data : [])
    );
  }
}
