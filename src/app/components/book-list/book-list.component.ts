import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: false
})


export class BookListComponent implements OnInit {
  books = [
    { _id: 1, title: 'Harry Potter e la Pietra Filosofale', author: 'J.K. Rowling' },
    { _id: 2, title: 'Il Signore degli Anelli', author: 'J.R.R. Tolkien' },
    { _id: 3, title: '1984', author: 'George Orwell' }
  ];

  constructor() {}

  ngOnInit() {}
}





/*
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe((data: any[]) => {
      this.books = data;
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBookBy(id).subscribe(() => {
      this.getBooks();
    });
  }
  editBook(id: number) {
    this.bookService.editBook(id).subscribe(() => {
      this.getBooks();
    });
  }

}
*/