import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.post(this.url + '/url/virusTotal', {id: id, url: url});
  }
  submitUrl(id: string, url: string) {
    return this.http.post(this.url + '/url', {id: id, url: url});
  }

  // Hash 값 검사
  submitHash(id: string, hash: string) {
    return this.http.post(this.url + '/hash', {id: id, hash: hash});
  }

  // 결과 리스트 받아오기
  getHistory(id: string): Observable<any> {
    return this.http.get(this.url + `/history?id=${id}`).pipe(
      map((res: any) => res.result === 'success' ? res.data : [])
    );
  }

  // 결과 리포트 받아오기
  getReport(id, scan_id, file_md5_url, isfile): Observable<any> {
    return this.http.get(this.url + `/report/virustotal?
    id=${id}&scan_id=${scan_id}&isfile=${isfile}&file_md5_url=${file_md5_url}`).pipe(
      map((res: any) => res.result === 'success' ? res : [])
    );
  }
  getYaraReport(id, scan_id, file_md5_url, isfile): Observable<any> {
    return this.http.get(this.url + `/cuckoo/result?
    id=${id}&scan_id=${scan_id}&isfile=${isfile}&file_md5_url=${file_md5_url}`).pipe(
      map((res: any) => res.result === 'success' ? res : res)
    );
  }

  // 게시판 받아오기
  getBoard() {
    return this.http.post(this.url + '/board', {});
  }
}
