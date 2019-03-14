import { TestBed, inject } from '@angular/core/testing';

import { EquivalenciaService } from './equivalencia.service';

describe('EquivalenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquivalenciaService]
    });
  });

  it('should be created', inject([EquivalenciaService], (service: EquivalenciaService) => {
    expect(service).toBeTruthy();
  }));
});
