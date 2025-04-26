import { Component } from '@angular/core';
import { BookService } from '../../../services/book.service';


@Component({
  selector: 'app-book-form',
  standalone: false,
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  bookData = {
    title: '',
    author: '',
    description: '',
    images: [],
    genre: ''
  };

  constructor(private bookService: BookService) {}

  submitForm(): void {
    this.bookService.createBook(this.bookData).subscribe((response: any) => {
      console.log('Book added:', response);
    });
  }
}
