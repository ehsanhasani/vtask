import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingService = TestBed.get(LoadingService);
    expect(service).toBeTruthy();
  });

  it('displayLoader be work correctly', () => {
    const service: LoadingService = TestBed.get(LoadingService);
    service.display = false;
    service.displayLoader();
    expect(service.display).toEqual(true);
  });

  it('displayloading be work correctly', () => {
    const service: LoadingService = TestBed.get(LoadingService);
    service.display = false;
    service.displayloading.subscribe((data) => {
      service.display = !data;
    });
    service.displayLoader();
    expect(service.display).toEqual(false);
  });
});
