import { TestBed } from '@angular/core/testing';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ConverterService = TestBed.get(ConverterService);
    expect(service).toBeTruthy();
  });
});
