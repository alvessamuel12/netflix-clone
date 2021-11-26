import { TestBed } from '@angular/core/testing';

import { HasUserDataGuard } from './has-user-data.guard';

describe('HasUserDataGuard', () => {
  let guard: HasUserDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasUserDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
