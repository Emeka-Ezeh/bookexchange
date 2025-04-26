import { TestBed } from '@angular/core/testing';

import { BookService } from '../services/book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have a getBooks method', () => {
    expect(service.getBooks).toBeTruthy();
  });
  it('should have a getBookById method', () => {
    expect(service.getBookById).toBeTruthy();
  });
});
