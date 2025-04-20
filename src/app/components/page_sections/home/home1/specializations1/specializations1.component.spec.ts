import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specializations1Component } from './specializations1.component';

describe('Specializations1Component', () => {
  let component: Specializations1Component;
  let fixture: ComponentFixture<Specializations1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specializations1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specializations1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
