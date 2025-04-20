import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMasonaryComponent } from './project-masonary.component';

describe('ProjectMasonaryComponent', () => {
  let component: ProjectMasonaryComponent;
  let fixture: ComponentFixture<ProjectMasonaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMasonaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMasonaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
