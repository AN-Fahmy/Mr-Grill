import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBox1Component } from './grid-box1.component';

describe('GridBox1Component', () => {
  let component: GridBox1Component;
  let fixture: ComponentFixture<GridBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
