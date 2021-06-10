import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './modules/home/home.module';
import {MaterialModule} from './modules/material';
import { NewsComponent } from './modules/news/news.component';
import { WatchlistComponent } from './modules/watchlist/watchlist.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
// import { LayoutComponent } from './shared/layout/layout.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { StockDisplayComponent } from './modules/stock-display/stock-display.component';
import { ArticleDisplayComponent } from './modules/article-display/article-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    MatSidenavModule,
    AppRoutingModule,
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    
    // WatchlistComponent,
    // PortfolioComponent,
    // LayoutComponent,
    // AuthComponent,
    // HomeComponent,
    // StockDisplayComponent,
    // ArticleDisplayComponent,
   
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
