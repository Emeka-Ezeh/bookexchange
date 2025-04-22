import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:5000/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBookById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }
  deleteBookBy(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  editBook(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, {});
  }
  createBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }
}
