import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPriceListComponent } from './crypto-price-list.component';

describe('CryptoPriceListComponent', () => {
  let component: CryptoPriceListComponent;
  let fixture: ComponentFixture<CryptoPriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoPriceListComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// End to end test written for this component since it doesn't do 