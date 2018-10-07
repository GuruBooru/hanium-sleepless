import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  _url: string;

  constructor() {
      this._url = 'http://192.168.0.9:9988';
   }

   get url() {
      return this._url;
   }
}
