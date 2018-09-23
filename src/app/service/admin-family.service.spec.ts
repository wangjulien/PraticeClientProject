import { TestBed } from '@angular/core/testing';

import { AdminFamilyService } from './admin-family.service';

describe('AdminFamilyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminFamilyService = TestBed.get(AdminFamilyService);
    expect(service).toBeTruthy();
  });
});
