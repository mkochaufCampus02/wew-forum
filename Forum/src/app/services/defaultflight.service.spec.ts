import { TestBed } from '@angular/core/testing';

import { DefaultForumService } from './defaultforum.service';

describe('DefaultflightService', () => {
  let service: DefaultForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
