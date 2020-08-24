import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsDetailComponent } from './interviews-detail.component';

describe('PodcastDetailComponent', () => {
  let component: InterviewsDetailComponent;
  let fixture: ComponentFixture<InterviewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
