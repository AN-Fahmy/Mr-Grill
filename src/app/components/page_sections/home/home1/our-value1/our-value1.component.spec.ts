import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurValue1Component } from './our-value1.component';

describe('OurValue1Component', () => {
  let component: OurValue1Component;
  let fixture: ComponentFixture<OurValue1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurValue1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurValue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
