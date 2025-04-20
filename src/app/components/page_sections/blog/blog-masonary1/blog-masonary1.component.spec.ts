import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMasonary1Component } from './blog-masonary1.component';

describe('BlogMasonary1Component', () => {
  let component: BlogMasonary1Component;
  let fixture: ComponentFixture<BlogMasonary1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogMasonary1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMasonary1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
