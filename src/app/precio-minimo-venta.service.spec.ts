import { TestBed, inject } from '@angular/core/testing';

import { PrecioMinimoVentaService } from './precio-minimo-venta.service';

describe('PrecioMinimoVentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecioMinimoVentaService]
    });
  });

  it('should be created', inject([PrecioMinimoVentaService], (service: PrecioMinimoVentaService) => {
    expect(service).toBeTruthy();
  }));
});
