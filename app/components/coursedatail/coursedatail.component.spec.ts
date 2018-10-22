import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedatailComponent } from './coursedatail.component';

describe('CoursedatailComponent', () => {
  let component: CoursedatailComponent;
  let fixture: ComponentFixture<CoursedatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
