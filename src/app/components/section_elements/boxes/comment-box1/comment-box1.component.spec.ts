import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentBox1Component } from './comment-box1.component';

describe('CommentBox1Component', () => {
  let component: CommentBox1Component;
  let fixture: ComponentFixture<CommentBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
