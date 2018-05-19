import { TestBed, inject } from '@angular/core/testing';

import { EscalarService } from './escalar.service';

describe('EscalarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscalarService]
    });
  });

  it('should be created', inject([EscalarService], (service: EscalarService) => {
    expect(service).toBeTruthy();
  }));
});
