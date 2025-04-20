import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About4Component } from './about4.component';

describe('About4Component', () => {
  let component: About4Component;
  let fixture: ComponentFixture<About4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ About4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(About4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
