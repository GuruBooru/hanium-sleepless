import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginService { // 로그인 확인

  subTitleChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setSubTitle(subTitle: string) {
    this.subTitleChangeEvent.emit(subTitle);
  }

  onChangeSubTitle(handler: any) {
    this.subTitleChangeEvent.subscribe(handler);
  }
}
