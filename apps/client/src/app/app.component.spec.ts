import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestData } from './../../../testing/test-data';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  let app: AppComponent;
  const data = TestData;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule],
      providers: [MessageService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should get an array of 5 currency values of a coin ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let result = [];
    const allPrices = Object.entries(data);
    allPrices.map(([coin, currencies]) => result = app.getCurrencies(currencies));
    console.log({ result });

    expect(5).toEqual(result.length);
  });
});
