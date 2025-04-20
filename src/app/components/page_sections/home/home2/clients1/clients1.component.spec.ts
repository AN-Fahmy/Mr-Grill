import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clients1Component } from './clients1.component';

describe('Clients1Component', () => {
  let component: Clients1Component;
  let fixture: ComponentFixture<Clients1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clients1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clients1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
