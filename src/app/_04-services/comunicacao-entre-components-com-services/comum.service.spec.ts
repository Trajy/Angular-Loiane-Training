import { TestBed } from '@angular/core/testing';

import { ComumService } from './comum.service';

describe('ComumService', () => {
  let service: ComumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
