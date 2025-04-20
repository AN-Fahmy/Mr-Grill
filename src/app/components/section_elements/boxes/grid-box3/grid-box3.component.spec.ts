import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBox3Component } from './grid-box3.component';

describe('GridBox3Component', () => {
  let component: GridBox3Component;
  let fixture: ComponentFixture<GridBox3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBox3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
