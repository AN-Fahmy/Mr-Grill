import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionBox1Component } from './solution-box1.component';

describe('SolutionBox1Component', () => {
  let component: SolutionBox1Component;
  let fixture: ComponentFixture<SolutionBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
