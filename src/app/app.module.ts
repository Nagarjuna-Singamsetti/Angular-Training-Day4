import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Stocks1Component } from './components/stocks1/stocks1.component';
import { Stocks2Component } from './components/stocks2/stocks2.component';
import { Stocks3Component } from './components/stocks3/stocks3.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/highlight.directive';
import { SearchPipe } from './shared/search.pipe';
import { ParenPipe } from './shared/paren.pipe';
import { NewsComponent } from './components/news/news.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Stocks1Component,
    Stocks2Component,
    Stocks3Component,
    StockDetailsComponent,
    HighlightDirective,
    SearchPipe,
    ParenPipe,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
