import { TestBed } from '@angular/core/testing';

import { AdminChildService } from './admin-child.service';

describe('AdminChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminChildService = TestBed.get(AdminChildService);
    expect(service).toBeTruthy();
  });
});
