import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessondetailComponent } from './lessondetail.component';

describe('LessondetailComponent', () => {
  let component: LessondetailComponent;
  let fixture: ComponentFixture<LessondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
