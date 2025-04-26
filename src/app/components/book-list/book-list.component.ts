import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
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
