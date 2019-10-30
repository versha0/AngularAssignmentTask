import { TestBed } from '@angular/core/testing';

import { CreaterepositoryService } from './createrepository.service';

describe('CreaterepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreaterepositoryService = TestBed.get(CreaterepositoryService);
    expect(service).toBeTruthy();
  });
});
