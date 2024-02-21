import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactItem, Data } from './model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  API_URL = 'assets/data.json'

  constructor(private http: HttpClient) { }

  getData(): Observable<Data> {
    return this.http.get<Data>(this.API_URL);
  }
  
}
