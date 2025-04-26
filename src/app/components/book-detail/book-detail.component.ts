import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-detail',
  standalone: false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit() : void {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(bookId!).subscribe(data => {
      this.book = data;
    });
  }


}
