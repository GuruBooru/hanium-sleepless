import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  _url: string;

  constructor() {
      this._url = 'http://14.49.36.132:9988';
   }

   get url() {
      return this._url;
   }
}
