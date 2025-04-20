import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBox1Component } from './blog-box1.component';

describe('BlogBox1Component', () => {
  let component: BlogBox1Component;
  let fixture: ComponentFixture<BlogBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
