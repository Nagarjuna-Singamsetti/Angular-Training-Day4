import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stocks3Component } from './stocks3.component';

describe('Stocks3Component', () => {
  let component: Stocks3Component;
  let fixture: ComponentFixture<Stocks3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stocks3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stocks3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
