import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectClassic2Component } from './project-classic2.component';

describe('ProjectClassic2Component', () => {
  let component: ProjectClassic2Component;
  let fixture: ComponentFixture<ProjectClassic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectClassic2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectClassic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
