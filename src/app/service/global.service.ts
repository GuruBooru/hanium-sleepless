import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  _url: string;

  constructor() { // 웹서버 주소
      this._url = 'http://192.168.0.26:9988';
   }

   get url() {
      return this._url;
   }
}
