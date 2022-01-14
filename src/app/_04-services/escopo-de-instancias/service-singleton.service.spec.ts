import { TestBed } from '@angular/core/testing';

import { ServiceSingletonService } from './service-singleton.service';

describe('ServiceSingletonService', () => {
  let service: ServiceSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
