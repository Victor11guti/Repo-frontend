import { TestBed } from '@angular/core/testing';

import { CruService } from './cru.service';

describe('CruService', () => {
  let service: CruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
