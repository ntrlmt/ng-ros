import { TestBed, inject } from '@angular/core/testing';

import { Ros3dService } from './ros3d.service';

describe('Ros3dService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ros3dService]
    });
  });

  it('should be created', inject([Ros3dService], (service: Ros3dService) => {
    expect(service).toBeTruthy();
  }));
});
