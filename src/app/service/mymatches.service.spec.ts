import { TestBed } from '@angular/core/testing';

import { MymatchesService } from './mymatches.service';

describe('MymatchesService', () => {
  let service: MymatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MymatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
