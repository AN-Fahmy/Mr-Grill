import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBox2Component } from './blog-box2.component';

describe('BlogBox2Component', () => {
  let component: BlogBox2Component;
  let fixture: ComponentFixture<BlogBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
