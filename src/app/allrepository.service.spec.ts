import { TestBed } from '@angular/core/testing';

import { AllrepositoryService } from './allrepository.service';

describe('AllrepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllrepositoryService = TestBed.get(AllrepositoryService);
    expect(service).toBeTruthy();
  });
});
