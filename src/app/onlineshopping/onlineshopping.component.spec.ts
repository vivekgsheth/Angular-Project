import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineshoppingComponent } from './onlineshopping.component';

describe('OnlineshoppingComponent', () => {
  let component: OnlineshoppingComponent;
  let fixture: ComponentFixture<OnlineshoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineshoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
