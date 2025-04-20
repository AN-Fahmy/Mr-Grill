import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBox3Component } from './service-box3.component';

describe('ServiceBox3Component', () => {
  let component: ServiceBox3Component;
  let fixture: ComponentFixture<ServiceBox3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBox3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
