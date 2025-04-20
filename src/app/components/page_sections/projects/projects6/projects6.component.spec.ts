import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects6Component } from './projects6.component';

describe('Projects6Component', () => {
  let component: Projects6Component;
  let fixture: ComponentFixture<Projects6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projects6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projects6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
