import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specializations4Component } from './specializations4.component';

describe('Specializations4Component', () => {
  let component: Specializations4Component;
  let fixture: ComponentFixture<Specializations4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specializations4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specializations4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
