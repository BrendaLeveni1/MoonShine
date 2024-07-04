import { TestBed } from '@angular/core/testing';

import { VelasDataService } from './services/velas-data.service';

describe('VelasDataService', () => {
  let service: VelasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VelasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
