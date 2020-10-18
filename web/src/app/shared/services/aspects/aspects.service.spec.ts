import { TestBed } from '@angular/core/testing';

import { AspectsService } from './aspects.service';

describe('AspectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AspectsService = TestBed.get(AspectsService);
    expect(service).toBeTruthy();
  });
});
