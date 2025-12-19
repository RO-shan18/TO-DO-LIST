import { TestBed } from '@angular/core/testing';

import { TaskLimitService } from './task-limit.service';

describe('TaskLimitService', () => {
  let service: TaskLimitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskLimitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
