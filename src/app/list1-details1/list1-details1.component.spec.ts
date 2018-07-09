import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List1Details1Component } from './list1-details1.component';

describe('List1Details1Component', () => {
  let component: List1Details1Component;
  let fixture: ComponentFixture<List1Details1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List1Details1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List1Details1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
