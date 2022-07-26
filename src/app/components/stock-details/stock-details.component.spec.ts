import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetailsComponent } from './stock-details.component';

describe('StockDetailsComponent', () => {//test suites
  let component: StockDetailsComponent;
  let fixture: ComponentFixture<StockDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { //test spec section
    //assertion method  ///matcher method
    expect(component).toBeTruthy();
  });
});
