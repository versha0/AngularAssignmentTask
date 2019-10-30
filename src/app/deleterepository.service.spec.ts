import { TestBed } from '@angular/core/testing';

import { DeleterepositoryService } from './deleterepository.service';

describe('DeleterepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleterepositoryService = TestBed.get(DeleterepositoryService);
    expect(service).toBeTruthy();
  });
});
