import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'crypto-prices-crypto-price-list',
  templateUrl: './crypto-price-list.component.html',
  styleUrls: ['./crypto-price-list.component.scss']
})
export class CryptoPriceListComponent {
  @Input() prices: unknown;

}
