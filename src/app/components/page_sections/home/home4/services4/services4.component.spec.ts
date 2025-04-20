import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Services4Component } from './services4.component';

describe('Services4Component', () => {
  let component: Services4Component;
  let fixture: ComponentFixture<Services4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Services4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Services4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
