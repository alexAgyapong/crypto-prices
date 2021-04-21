import { HttpModule } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { of } from 'rxjs';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
      imports: [HttpModule]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getCryptoPrices', () => {
    it('should return crypto prices"', () => {
      const result = TestData;
      let actual: unknown;
      jest.spyOn(service, 'getCryptoPrices').mockImplementation(() => of(result));

      const prices$ = service.getCryptoPrices();
      prices$.subscribe(res => {
        actual = res;
      })

      expect(actual).toEqual(result);
    });
  });
});


export const TestData = {
  BTC: {
    USD: 55274.33,
    GBP: 39782.09,
    EUR: 46051.85,
    JPY: 5980696.82,
    ZAR: 824568.22,
  },
  ETH: {
    USD: 2295.13,
    GBP: 1651.79,
    EUR: 1912.49,
    JPY: 248324.66,
    ZAR: 34244.32,
  },
  LTC: { USD: 259.44, GBP: 186.74, EUR: 215.99, JPY: 28073.39, ZAR: 3870.52 },
  XRP: { USD: 1.418, GBP: 1.022, EUR: 1.182, JPY: 153.47, ZAR: 21.11 },
  BCH: { USD: 948.81, GBP: 682.66, EUR: 790.25, JPY: 102628.76, ZAR: 14149.59 },
  ETC: { USD: 34.05, GBP: 24.52, EUR: 28.39, JPY: 3664.37, ZAR: 505.21 },
};