import { Component, OnDestroy, OnInit } from '@angular/core';
import { Price } from '@crypto-prices/api-interfaces';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { DataService } from './data.service';

@Component({
  selector: 'crypto-prices-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  prices = [];
  Time_Out = 30 * 1000;
  subscription: Subscription;

  constructor(private dataService: DataService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCrytoPrices();
   setInterval(() => this.getCrytoPrices(), this.Time_Out);
    /*SetInterval is used to retrieve updated prices every 30 seconds.
      For production ready app, I would use sockets to which will emit updates*/
  }

  getCrytoPrices() {
    this.prices = [];
    this.subscription = this.dataService.prices$
      .subscribe((res: Price[]) => {
        const data = Object.entries(res);
        data.forEach(([coin, currencies]) => {
          const item = { coin, currencies: this.getCurrencies(currencies) };
          this.prices.push(item);
        });
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
