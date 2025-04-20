import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBox2Component } from './team-box2.component';

describe('TeamBox2Component', () => {
  let component: TeamBox2Component;
  let fixture: ComponentFixture<TeamBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
