import { TestBed } from '@angular/core/testing';

import { UserOccupationsService } from './user-occupations.service';

describe('UserOccupationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserOccupationsService = TestBed.get(UserOccupationsService);
    expect(service).toBeTruthy();
  });
});
