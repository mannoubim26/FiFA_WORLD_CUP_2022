import { TestBed } from '@angular/core/testing';

import { GrpValueService } from './grp-value.service';

describe('GrpValueService', () => {
  let service: GrpValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
