import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specializations3Component } from './specializations3.component';

describe('Specializations3Component', () => {
  let component: Specializations3Component;
  let fixture: ComponentFixture<Specializations3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specializations3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specializations3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
