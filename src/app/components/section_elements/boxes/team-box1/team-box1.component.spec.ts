import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBox1Component } from './team-box1.component';

describe('TeamBox1Component', () => {
  let component: TeamBox1Component;
  let fixture: ComponentFixture<TeamBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
