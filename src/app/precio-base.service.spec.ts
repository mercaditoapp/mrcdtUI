import { TestBed, inject } from '@angular/core/testing';

import { PrecioBaseService } from './precio-base.service';

describe('PrecioBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecioBaseService]
    });
  });

  it('should be created', inject([PrecioBaseService], (service: PrecioBaseService) => {
    expect(service).toBeTruthy();
  }));
});
