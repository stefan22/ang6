import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List1Details2Component } from './list1-details2.component';

describe('List1Details2Component', () => {
  let component: List1Details2Component;
  let fixture: ComponentFixture<List1Details2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List1Details2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List1Details2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
