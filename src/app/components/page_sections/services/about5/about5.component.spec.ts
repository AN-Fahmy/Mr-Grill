import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About5Component } from './about5.component';

describe('About5Component', () => {
  let component: About5Component;
  let fixture: ComponentFixture<About5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ About5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(About5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
