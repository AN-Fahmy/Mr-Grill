import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWithSidebarComponent } from './post-with-sidebar.component';

describe('PostWithSidebarComponent', () => {
  let component: PostWithSidebarComponent;
  let fixture: ComponentFixture<PostWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostWithSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
