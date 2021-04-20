import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPriceListComponent } from './crypto-price-list.component';

describe('CryptoPriceListComponent', () => {
  let component: CryptoPriceListComponent;
  let fixture: ComponentFixture<CryptoPriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoPriceListComponent ]
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
