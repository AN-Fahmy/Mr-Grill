import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWrapperLayoutComponent } from './box-wrapper-layout.component';

describe('BoxWrapperLayoutComponent', () => {
  let component: BoxWrapperLayoutComponent;
  let fixture: ComponentFixture<BoxWrapperLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxWrapperLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWrapperLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
