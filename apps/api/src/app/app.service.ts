import { HttpService, Injectable } from '@nestjs/common';
import { Message } from '@crypto-prices/api-interfaces';
import { environment } from './../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {

  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getCryptoPrices() {
    const coins = `BTC,ETH,LTC,XRP,BCH,ETC`;
    const currencies = `USD,GBP,EUR,JPY,ZAR`;
    const url = `${environment.BaseUrl}?fsyms=${coins}&tsyms=${currencies}`

    return this.httpService.get(url).pipe(map(response => response.data), tap(data => console.log({ data })));
  }
}
