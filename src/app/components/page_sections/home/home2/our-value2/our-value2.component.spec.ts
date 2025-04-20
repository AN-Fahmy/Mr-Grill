import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurValue2Component } from './our-value2.component';

describe('OurValue2Component', () => {
  let component: OurValue2Component;
  let fixture: ComponentFixture<OurValue2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurValue2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurValue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
