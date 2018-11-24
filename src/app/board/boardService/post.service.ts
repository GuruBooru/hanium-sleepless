import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../../service/global.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: String;

  constructor(private http: HttpClient, private global: GlobalService) {
    this.url = global.url;
  }

  // 게시판 받아오기
  getPosts(): Observable<any> {
    return this.http.get(this.url + '/posting-head');
  }
  // 게시물 등록
  sendPost(data: any) {
    return this.http.post(this.url + '/board-posting', data);
  }

  // 게시물 받아오기
  getPost(id): Observable<any> {
    return this.http.get(this.url + `/posting/${id}`);
  }
}
