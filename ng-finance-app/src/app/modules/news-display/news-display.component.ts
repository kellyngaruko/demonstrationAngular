import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DataService } from 'src/shared/data.service';
import { switchMap } from 'rxjs/operators';
import {NewsDetails} from '../../models/news-details'

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss']
})
export class NewsDisplayComponent implements OnInit {

  constructor( private dataService: DataService) { }
  newsList: NewsDetails[];
  ngOnInit(): void {
// this.dataService.getNewsList().subscribe(data=>{
//   console.log ("SUBSCRIBE NEWSLIST :", data)
// })
  }

}
