import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';

interface GoogleBook {
  id: string;
  title: string;
  authors: string;
  description: string;
  thumbnail: string;
}

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularBooks: GoogleBook[] = [];
  randomBooks: GoogleBook[] = [];
  crimeBooks: GoogleBook[] = [];
  romanceBooks: GoogleBook[] = [];
  fantasyBooks: GoogleBook[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadPopularBooks();
    this.loadRandomBooks();
    this.loadCrimeBooks();    // <- aggiungi anche questi
    this.loadRomanceBooks();  // <- per caricare le nuove categorie
    this.loadFantasyBooks();  // <- 
  }

  private loadPopularBooks(): void {
    this.bookService.searchBooksOnGoogle('bestsellers', 5, 0).subscribe(
      (response) => {
        this.popularBooks = response.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors?.join(', ') ?? 'Autore sconosciuto',
          description: item.volumeInfo.description ?? '',
          thumbnail: item.volumeInfo.imageLinks?.thumbnail ?? ''
        }));
      },
      (err) => {
        console.error('Errore nel caricare i libri popolari', err);
      }
    );
  }

  private loadRandomBooks(): void {
    const terms = ['fiction', 'science', 'history', 'mystery', 'romance', 'fantasy'];
    const term = terms[Math.floor(Math.random() * terms.length)];
    const start = Math.floor(Math.random() * 30);

    this.bookService.searchBooksOnGoogle(term, 5, start).subscribe(
      (response) => {
        this.randomBooks = response.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors?.join(', ') ?? 'Autore sconosciuto',
          description: item.volumeInfo.description ?? '',
          thumbnail: item.volumeInfo.imageLinks?.thumbnail ?? ''
        }));
      },
      (err) => {
        console.error('Errore nel caricare i libri casuali', err);
      }
    );
  }

  private loadCrimeBooks(): void {
    this.bookService.searchBooksOnGoogle('crime', 5, 0).subscribe(
      (response) => {
        this.crimeBooks = response.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors?.join(', ') ?? 'Autore sconosciuto',
          description: item.volumeInfo.description ?? '',
          thumbnail: item.volumeInfo.imageLinks?.thumbnail ?? ''
        }));
      },
      (err) => {
        console.error('Errore nel caricare i libri crime', err);
      }
    );
  }

  private loadRomanceBooks(): void {
    this.bookService.searchBooksOnGoogle('romance', 5, 0).subscribe(
      (response) => {
        this.romanceBooks = response.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors?.join(', ') ?? 'Autore sconosciuto',
          description: item.volumeInfo.description ?? '',
          thumbnail: item.volumeInfo.imageLinks?.thumbnail ?? ''
        }));
      },
      (err) => {
        console.error('Errore nel caricare i libri romantici', err);
      }
    );
  }

  private loadFantasyBooks(): void {
    this.bookService.searchBooksOnGoogle('fantasy', 5, 0).subscribe(
      (response) => {
        this.fantasyBooks = response.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors?.join(', ') ?? 'Autore sconosciuto',
          description: item.volumeInfo.description ?? '',
          thumbnail: item.volumeInfo.imageLinks?.thumbnail ?? ''
        }));
      },
      (err) => {
        console.error('Errore nel caricare i libri fantasy', err);
      }
    );
  }
}
