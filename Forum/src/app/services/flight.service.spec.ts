import { TestBed } from '@angular/core/testing';

import { ForumService } from './forum.service';

describe('FlightService', () => {
  let service: ForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
