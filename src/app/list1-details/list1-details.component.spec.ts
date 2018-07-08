import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List1DetailsComponent } from './list1-details.component';

describe('List1DetailsComponent', () => {
  let component: List1DetailsComponent;
  let fixture: ComponentFixture<List1DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List1DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
