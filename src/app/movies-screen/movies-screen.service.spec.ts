import { TestBed } from '@angular/core/testing';

import { MoviesScreenService } from './movies-screen.service';

describe('MoviesScreenService', () => {
  let service: MoviesScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
