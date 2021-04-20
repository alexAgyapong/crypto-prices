import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  prices$ = this.http.get<unknown>('/api/prices');
  constructor(private http: HttpClient) { }
}
