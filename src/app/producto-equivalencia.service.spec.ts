import { TestBed, inject } from '@angular/core/testing';

import { ProductoEquivalenciaService } from './producto-equivalencia.service';

describe('ProductoEquivalenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoEquivalenciaService]
    });
  });

  it('should be created', inject([ProductoEquivalenciaService], (service: ProductoEquivalenciaService) => {
    expect(service).toBeTruthy();
  }));
});
