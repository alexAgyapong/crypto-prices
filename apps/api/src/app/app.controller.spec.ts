import { HttpModule, HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { EMPTY, of } from 'rxjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let appService: AppService;
  let appController: AppController;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      imports: [HttpModule],
      providers: [AppService],
    }).compile();
    appService = app.get(AppService);
  });

  beforeEach(() => {
    appController = app.get<AppController>(AppController);
  });

  describe('getCryptoPrices', () => {
    it('should call the appservice ', () => {
      const service = jest.spyOn(appService, 'getCryptoPrices').mockImplementation(() => EMPTY);

      appController.getCryptoPrices()

      expect(service).toHaveBeenCalled();
    })
  });
});
