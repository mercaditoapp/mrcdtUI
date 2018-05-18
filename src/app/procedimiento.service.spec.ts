import { TestBed, inject } from '@angular/core/testing';

import { ProcedimientoService } from './procedimiento.service';

describe('ProcedimientoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcedimientoService]
    });
  });

  it('should be created', inject([ProcedimientoService], (service: ProcedimientoService) => {
    expect(service).toBeTruthy();
  }));
});
