import { TestBed } from '@angular/core/testing';

import { TrainingGrouperService } from './training-grouper.service';

describe('TrainingGrouperService', () => {
  let service: TrainingGrouperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingGrouperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
