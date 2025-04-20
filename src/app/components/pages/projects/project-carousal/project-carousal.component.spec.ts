import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCarousalComponent } from './project-carousal.component';

describe('ProjectCarousalComponent', () => {
  let component: ProjectCarousalComponent;
  let fixture: ComponentFixture<ProjectCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCarousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
