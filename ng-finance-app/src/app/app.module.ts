import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './modules/home/home.module'
import { NewsComponent } from './modules/news/news.component';
import { WatchlistComponent } from './shared/watchlist/watchlist.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { StockDisplayComponent } from './shared/stock-display/stock-display.component';
import { ArticleDisplayComponent } from './shared/article-display/article-display.component';
import { SharedModule } from './shared';

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    AppRoutingModule,
    HomeModule,
    // WatchlistComponent,
    // PortfolioComponent,
    // LayoutComponent,
    // AuthComponent,
    // HomeComponent,
    // StockDisplayComponent,
    // ArticleDisplayComponent,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
