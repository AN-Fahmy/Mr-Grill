import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBox2Component } from './grid-box2.component';

describe('GridBox2Component', () => {
  let component: GridBox2Component;
  let fixture: ComponentFixture<GridBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
