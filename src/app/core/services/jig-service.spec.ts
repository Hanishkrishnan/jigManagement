import { TestBed } from '@angular/core/testing';

import { JigService } from './jig-service';

describe('JigService', () => {
  let service: JigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
