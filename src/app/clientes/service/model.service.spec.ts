/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModelService } from './cliente.service';

describe('Service: Model', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelService]
    });
  });

  it('should ...', inject([ModelService], (service: ModelService) => {
    expect(service).toBeTruthy();
  }));
});
