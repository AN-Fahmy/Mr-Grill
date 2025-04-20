import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallUs2Component } from './call-us2.component';

describe('CallUs2Component', () => {
  let component: CallUs2Component;
  let fixture: ComponentFixture<CallUs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallUs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallUs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
