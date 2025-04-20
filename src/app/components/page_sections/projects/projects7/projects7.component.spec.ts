import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects7Component } from './projects7.component';

describe('Projects7Component', () => {
  let component: Projects7Component;
  let fixture: ComponentFixture<Projects7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projects7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projects7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
