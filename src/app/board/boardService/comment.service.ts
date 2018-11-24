import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../../service/global.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url: String;

  constructor(private http: HttpClient, private global: GlobalService) {
    this.url = global.url;
  }

  // 댓글 받아오기
  getComments(id: number): Observable<any> {
    return this.http.get(this.url + `/comment/${id}`);
  }

  // 댓글 등록
  postComment(data: any) {
    return this.http.post(this.url + '/commit-posting', data);
  }
}
