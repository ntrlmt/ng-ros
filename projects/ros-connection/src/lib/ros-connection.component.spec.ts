import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosConnectionComponent } from './ros-connection.component';

describe('RosConnectionComponent', () => {
  let component: RosConnectionComponent;
  let fixture: ComponentFixture<RosConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
