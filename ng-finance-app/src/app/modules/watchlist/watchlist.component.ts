import { Component, OnInit, ViewChild } from '@angular/core';
import { StockDisplayComponent} from '../stock-display/stock-display.component';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  @ViewChild('stockDisplay', { static: false })
  stockDisplay: StockDisplayComponent;

  globalStocks = [
    { symbol: 'ES=F', name: 'S&P 500'},
    { symbol: 'YM=F', name: 'DOW JONES'},
    { symbol: 'NQ=F', name: 'NASDAQ'},
    { symbol: 'GC=F', name: 'GOLD'},
  ];
  constructor() { }
  selectedStock: string;
  ngOnInit(): void{
      this.selectedStock = '';
  }
  stockClicked(symbol): void{
      this.selectedStock = symbol;
      console.log('clicked', this.selectedStock);
  }

}
