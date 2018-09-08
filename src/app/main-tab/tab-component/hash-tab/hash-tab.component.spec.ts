import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashTabComponent } from './hash-tab.component';

describe('HashTabComponent', () => {
  let component: HashTabComponent;
  let fixture: ComponentFixture<HashTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
