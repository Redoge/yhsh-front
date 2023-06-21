import { TestBed } from '@angular/core/testing';

import { AuthorizedGuardServiceService } from './authorized-guard-service.service';

describe('AuthorizedGuardServiceService', () => {
  let service: AuthorizedGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
