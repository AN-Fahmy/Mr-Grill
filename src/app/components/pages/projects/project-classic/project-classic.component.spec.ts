import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectClassicComponent } from './project-classic.component';

describe('ProjectClassicComponent', () => {
  let component: ProjectClassicComponent;
  let fixture: ComponentFixture<ProjectClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectClassicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
