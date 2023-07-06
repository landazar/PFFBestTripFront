import { TestBed } from '@angular/core/testing';

import { GuideVoyageService } from './guide-voyage.service';

describe('GuideVoyageService', () => {
  let service: GuideVoyageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuideVoyageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
