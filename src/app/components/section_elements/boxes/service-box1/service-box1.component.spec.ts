import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBox1Component } from './service-box1.component';

describe('ServiceBox1Component', () => {
  let component: ServiceBox1Component;
  let fixture: ComponentFixture<ServiceBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
