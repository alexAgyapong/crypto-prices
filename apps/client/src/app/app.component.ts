import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@crypto-prices/api-interfaces';

@Component({
  selector: 'crypto-prices-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  prices$ = this.http.get<any>('/api/prices');
  constructor(private http: HttpClient) { }
}
