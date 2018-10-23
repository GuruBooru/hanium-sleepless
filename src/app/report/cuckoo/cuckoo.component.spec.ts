import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuckooComponent } from './cuckoo.component';

describe('CuckooComponent', () => {
  let component: CuckooComponent;
  let fixture: ComponentFixture<CuckooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuckooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuckooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
