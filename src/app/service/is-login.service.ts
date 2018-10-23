import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginService {

  subTitleChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setSubTitle(subTitle: string) {
    this.subTitleChangeEvent.emit(subTitle);
  }

  onChangeSubTitle(handler: any) {
    this.subTitleChangeEvent.subscribe(handler);
  }
}
