import { TestBed, inject } from '@angular/core/testing';

import { IngredienteProcedimientoService } from './ingrediente-procedimiento.service';

describe('IngredienteProcedimientoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredienteProcedimientoService]
    });
  });

  it('should be created', inject([IngredienteProcedimientoService], (service: IngredienteProcedimientoService) => {
    expect(service).toBeTruthy();
  }));
});
