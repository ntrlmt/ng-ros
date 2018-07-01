import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ros3dComponent } from './ros3d.component';

describe('Ros3dComponent', () => {
  let component: Ros3dComponent;
  let fixture: ComponentFixture<Ros3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ros3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ros3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
