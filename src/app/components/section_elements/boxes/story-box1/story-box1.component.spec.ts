import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBox1Component } from './story-box1.component';

describe('StoryBox1Component', () => {
  let component: StoryBox1Component;
  let fixture: ComponentFixture<StoryBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
