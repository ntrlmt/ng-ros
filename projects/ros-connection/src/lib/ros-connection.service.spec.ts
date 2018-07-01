import { TestBed, inject } from '@angular/core/testing';

import { RosConnectionService } from './ros-connection.service';

describe('RosConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RosConnectionService]
    });
  });

  it('should be created', inject([RosConnectionService], (service: RosConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
