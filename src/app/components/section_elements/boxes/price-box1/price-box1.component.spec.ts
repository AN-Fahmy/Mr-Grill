import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBox1Component } from './price-box1.component';

describe('PriceBox1Component', () => {
  let component: PriceBox1Component;
  let fixture: ComponentFixture<PriceBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
