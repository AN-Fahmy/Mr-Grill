import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects5Component } from './projects5.component';

describe('Projects5Component', () => {
  let component: Projects5Component;
  let fixture: ComponentFixture<Projects5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projects5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projects5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
