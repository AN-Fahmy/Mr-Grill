import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallUs1Component } from './call-us1.component';

describe('CallUs1Component', () => {
  let component: CallUs1Component;
  let fixture: ComponentFixture<CallUs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallUs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallUs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
