/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { IndicadorService } from './indicador.service';

describe('Service: Indicador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicadorService]
    });
  });

  it('should ...', inject([IndicadorService], (service: IndicadorService) => {
    expect(service).toBeTruthy();
  }));
});
