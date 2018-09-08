import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlTabComponent } from './url-tab.component';

describe('UrlTabComponent', () => {
  let component: UrlTabComponent;
  let fixture: ComponentFixture<UrlTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
