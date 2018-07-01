import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosImageViewComponent } from './ros-image-view.component';

describe('RosImageViewComponent', () => {
  let component: RosImageViewComponent;
  let fixture: ComponentFixture<RosImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosImageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
