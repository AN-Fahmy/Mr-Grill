import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBox4Component } from './blog-box4.component';

describe('BlogBox4Component', () => {
  let component: BlogBox4Component;
  let fixture: ComponentFixture<BlogBox4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBox4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
