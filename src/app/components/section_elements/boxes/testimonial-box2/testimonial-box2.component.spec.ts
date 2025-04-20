import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialBox2Component } from './testimonial-box2.component';

describe('TestimonialBox2Component', () => {
  let component: TestimonialBox2Component;
  let fixture: ComponentFixture<TestimonialBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
