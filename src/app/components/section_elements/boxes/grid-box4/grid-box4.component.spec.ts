import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBox4Component } from './grid-box4.component';

describe('GridBox4Component', () => {
  let component: GridBox4Component;
  let fixture: ComponentFixture<GridBox4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBox4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
