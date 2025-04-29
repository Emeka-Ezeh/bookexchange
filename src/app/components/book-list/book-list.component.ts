import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';  // Importa il servizio

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: false
})
export class BookListComponent implements OnInit {
  books: any[] = [];  // Array che conterrà i libri ottenuti
  errorMessage: string = '';  // Messaggio di errore nel caso di problemi

  constructor(private bookService: BookService) {}  // Inietta BookService

  ngOnInit(): void {
    // Effettua la ricerca dei libri tramite Google API
    this.bookService.searchBooksOnGoogle('fiction', 10, 0).subscribe(
      (data) => {
        console.log(data);  // Per vedere la risposta di Google
        this.books = data.items || [];  // Salva i libri trovati nel array 'books'
      },
      (error) => {
        this.errorMessage = 'Errore nel recupero dei libri: ' + error;  // Gestisce gli errori
      }
    );
  }


  truncateDescription(description: string, wordLimit: number = 90): string {
    if (!description) return '';  // Se la descrizione è vuota, ritorna una stringa vuota
    const words = description.split(' ');
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  }
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