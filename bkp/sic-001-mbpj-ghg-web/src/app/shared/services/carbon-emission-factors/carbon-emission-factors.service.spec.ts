import { TestBed } from '@angular/core/testing';

import { CarbonEmissionFactorsService } from './carbon-emission-factors.service';

describe('CarbonEmissionFactorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarbonEmissionFactorsService = TestBed.get(CarbonEmissionFactorsService);
    expect(service).toBeTruthy();
  });
});
