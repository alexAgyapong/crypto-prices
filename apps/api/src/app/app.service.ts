import { HttpService, Injectable } from '@nestjs/common';
import { environment } from './../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {

  }

  //For production, coins and currencies would come from the UI.
  //I have hard-coded them here just for the test.
  getCryptoPrices() {
    const coins = `BTC,ETH,LTC,XRP,BCH,ETC`;
    const currencies = `USD,GBP,EUR,JPY,ZAR`;

    const url = `${environment.BaseUrl}?fsyms=${coins}&tsyms=${currencies}`

    return this.httpService.get(url).pipe(map(response => response.data));
  }
}
