import { TestBed } from '@angular/core/testing';

import { MayanTombService } from './mayan-tomb.service';
import { Tomb } from './tomb';

describe('MayanTombService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MayanTombService = TestBed.get(MayanTombService);
    expect(service).toBeTruthy();
  });

  it('test create2DTomb function for return 2d array', () => {
    const service: MayanTombService = TestBed.get(MayanTombService);
    const tombArray = service.create2DTomb(5);
    expect(tombArray.length).toBeGreaterThanOrEqual(0);
  });

  it('test create2DTomb function for return 2d array of Tomb class has specific x dimention', () => {
    const service: MayanTombService = TestBed.get(MayanTombService);
    const tombArray = service.create2DTomb(5);
    expect(tombArray.length).toEqual(5);
  });

  it('test create2DTomb function for return 2d array of Tomb class has specific y dimention', () => {
    const service: MayanTombService = TestBed.get(MayanTombService);
    const tombArray = service.create2DTomb(5);
    expect(tombArray[0].length).toEqual(5);
  });

  it('test create2DTomb function for return 2d array of Tomb class has specific instance of Tomb', () => {
    const service: MayanTombService = TestBed.get(MayanTombService);
    const tombArray = service.create2DTomb(5);
    expect(tombArray[0][0] instanceof Tomb).toBeTruthy();
  });

  it('test calculateRowNumberAverage  work correctly', () => {
    const service: MayanTombService = TestBed.get(MayanTombService);
    const tombArray = service.calculateRowNumberAverage(5);
    expect(tombArray).toEqual(2);
  });
});
