import { TestBed } from '@angular/core/testing';

import { TaskEventService } from './task-event-service.service';

describe('TaskEventService', () => {
  let service: TaskEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
