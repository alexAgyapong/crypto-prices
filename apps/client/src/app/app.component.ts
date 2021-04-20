import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@crypto-prices/api-interfaces';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'crypto-prices-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  hello$ = this.http.get<Message>('/api/hello');
  prices$ = this.http.get<unknown>('/api/prices');
  prices = [];
  Time_Out = 10 * 1000;
  subscription: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCrytoPrices();

    // setInterval(() => this.getCrytoPrices(), this.Time_Out)

  }

  getCrytoPrices() {
    this.prices = [];
    this.subscription = this.prices$.pipe(tap(res => {
      const data = Object.entries(res);
      data.forEach(([key, value]) => {
        const item = { key, value: this.getCurrencies(value) };
        this.prices.push(item);
      });
      console.log(this.prices, 'prices ', { res });

    })).subscribe();
  }

  getCurrencies(value: unknown) {
    const data = Object.entries(value);
    const result = [];
    data.forEach(([key, value]) => {
      const item = { currency: key, value };
      result.push(item);
    })
    return result;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
