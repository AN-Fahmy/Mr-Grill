import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProjects1Component } from './similar-projects1.component';

describe('SimilarProjects1Component', () => {
  let component: SimilarProjects1Component;
  let fixture: ComponentFixture<SimilarProjects1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarProjects1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarProjects1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
