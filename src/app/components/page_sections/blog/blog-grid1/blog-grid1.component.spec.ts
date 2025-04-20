import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGrid1Component } from './blog-grid1.component';

describe('BlogGrid1Component', () => {
  let component: BlogGrid1Component;
  let fixture: ComponentFixture<BlogGrid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGrid1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
