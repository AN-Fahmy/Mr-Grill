import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailSectionComponent } from './project-detail-section.component';

describe('ProjectDetailSectionComponent', () => {
  let component: ProjectDetailSectionComponent;
  let fixture: ComponentFixture<ProjectDetailSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
