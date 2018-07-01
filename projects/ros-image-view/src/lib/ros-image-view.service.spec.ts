import { TestBed, inject } from '@angular/core/testing';

import { RosImageViewService } from './ros-image-view.service';

describe('RosImageViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RosImageViewService]
    });
  });

  it('should be created', inject([RosImageViewService], (service: RosImageViewService) => {
    expect(service).toBeTruthy();
  }));
});
