import { HttpModule } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { of } from 'rxjs';

import { AppService } from './app.service';
import { TestData } from './../../../testing/test-data';
describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
      imports: [HttpModule]
    })
.compile();

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

