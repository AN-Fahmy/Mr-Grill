import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBox3Component } from './blog-box3.component';

describe('BlogBox3Component', () => {
  let component: BlogBox3Component;
  let fixture: ComponentFixture<BlogBox3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBox3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
