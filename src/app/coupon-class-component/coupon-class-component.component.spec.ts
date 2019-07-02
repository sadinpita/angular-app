import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponClassComponentComponent } from './coupon-class-component.component';

describe('CouponClassComponentComponent', () => {
  let component: CouponClassComponentComponent;
  let fixture: ComponentFixture<CouponClassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponClassComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
