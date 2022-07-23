import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParenPipe } from 'src/app/shared/paren.pipe';
import { SearchPipe } from 'src/app/shared/search.pipe';

import { Stocks2Component } from './stocks2.component';

describe('Stocks2Component', () => {
  let component: Stocks2Component;
  let fixture: ComponentFixture<Stocks2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stocks2Component,ParenPipe,SearchPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stocks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
