import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Price } from '@crypto-prices/api-interfaces';
import { catchError, tap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'crypto-prices-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  prices$ = this.http.get<unknown>('/api/prices');
  prices = [];
  Time_Out = 10 * 1000;
  subscription: Subscription;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCrytoPrices();
    // setInterval(() => this.getCrytoPrices(), this.Time_Out)

  }

  getCrytoPrices() {
    this.prices = [];
    this.subscription = this.prices$
      .subscribe((res: Price[]) => {
        const data = Object.entries(res);
        data.forEach(([coin, currencies]) => {
          const item = { coin, currencies: this.getCurrencies(currencies) };
          this.prices.push(item);
          console.log('second', JSON.stringify(this.prices));
        });
        console.log(this.prices, 'prices ', { res });
        console.log(JSON.stringify(this.prices), 'prices');
      },
        (err) => this.getErrorMessage(err)
      );
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

  private getErrorMessage(err: any) {
    console.log('HTTP Error', err);
    this.messageService.add({
      severity: 'info',
      summary: `We encountered an error retrieving data`
      // detail: `${err?.statusText}`
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
