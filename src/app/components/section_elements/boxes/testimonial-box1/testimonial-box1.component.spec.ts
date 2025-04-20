import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialBox1Component } from './testimonial-box1.component';

describe('TestimonialBox1Component', () => {
  let component: TestimonialBox1Component;
  let fixture: ComponentFixture<TestimonialBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
