import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specializations2Component } from './specializations2.component';

describe('Specializations2Component', () => {
  let component: Specializations2Component;
  let fixture: ComponentFixture<Specializations2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specializations2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specializations2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
