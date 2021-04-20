import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoPriceListComponent } from './crypto-price-list/crypto-price-list.component';

// Primeng
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, CryptoPriceListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, TableModule, MessagesModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
