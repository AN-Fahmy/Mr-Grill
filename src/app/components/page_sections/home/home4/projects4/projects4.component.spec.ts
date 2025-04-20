import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects4Component } from './projects4.component';

describe('Projects4Component', () => {
  let component: Projects4Component;
  let fixture: ComponentFixture<Projects4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projects4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projects4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
