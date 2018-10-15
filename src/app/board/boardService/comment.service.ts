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

  getComments(id: number): Observable<any> {
    return this.http.get(this.url + `/comment/${id}`);
  }

  postComment(data: any) {
    return this.http.post(this.url + '/commit-posting', data);
  }
}
