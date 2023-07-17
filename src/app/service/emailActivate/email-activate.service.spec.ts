import { TestBed } from '@angular/core/testing';

import { EmailActivateService } from './email-activate.service';

describe('EmailActivateService', () => {
  let service: EmailActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
