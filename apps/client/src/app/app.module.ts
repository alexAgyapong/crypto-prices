import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Primeng
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,TableModule,TabViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
