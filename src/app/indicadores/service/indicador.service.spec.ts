/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
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
