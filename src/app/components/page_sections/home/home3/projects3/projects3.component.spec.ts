import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects3Component } from './projects3.component';

describe('Projects3Component', () => {
  let component: Projects3Component;
  let fixture: ComponentFixture<Projects3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projects3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projects3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
