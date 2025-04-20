import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCarousal1SectionComponent } from './project-carousal1-section.component';

describe('ProjectCarousal1SectionComponent', () => {
  let component: ProjectCarousal1SectionComponent;
  let fixture: ComponentFixture<ProjectCarousal1SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCarousal1SectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCarousal1SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
