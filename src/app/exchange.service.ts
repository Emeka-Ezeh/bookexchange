import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private apiUrl = 'http://localhost:5000/api/exchanges';

  constructor(private http: HttpClient) { }

  createExchangeRequest(requestData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, requestData);
  }

  updateExchangeRequest(id: string, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { status });
  }

  getUserExchangeRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
