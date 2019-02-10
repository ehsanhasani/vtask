import { TestBed } from '@angular/core/testing';

import { MayanTombService } from './mayan-tomb.service';

describe('MayanTombService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MayanTombService = TestBed.get(MayanTombService);
    expect(service).toBeTruthy();
  });
});
