import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianBox1Component } from './accordian-box1.component';

describe('AccordianBox1Component', () => {
  let component: AccordianBox1Component;
  let fixture: ComponentFixture<AccordianBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
