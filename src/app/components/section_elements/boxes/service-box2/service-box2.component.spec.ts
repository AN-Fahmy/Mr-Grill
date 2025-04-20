import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBox2Component } from './service-box2.component';

describe('ServiceBox2Component', () => {
  let component: ServiceBox2Component;
  let fixture: ComponentFixture<ServiceBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
