import { TestBed } from '@angular/core/testing';

import { PasoUnaVezService } from './paso-una-vez.service';

describe('PasoUnaVezService', () => {
  let service: PasoUnaVezService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasoUnaVezService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
