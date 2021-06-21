import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DataService } from 'src/shared/data.service';
import { switchMap } from 'rxjs/operators';
import {NewsDetails} from '../../models/news-details';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss']
})
export class NewsDisplayComponent implements OnInit {

  constructor( private dataService: DataService) { }
  newsList: NewsDetails[];
  newsDetails: NewsDetails;
  NewsInfo: any;
  subscription: Subscription;

  ngOnInit(): void {
    this.newsDetails = null;
    this.subscription = timer(0, 50000)
    .pipe(switchMap(() =>
    this.dataService.getNewsInformation())).subscribe(result => {
      console.log('Beginning of subsc: ', result);
      const content = result.data.contents[0].content;
      this.newsDetails = new NewsDetails();
      this.newsDetails.title = content.title;
      this.newsDetails.summary = content.summary;
      this.newsDetails.author = content.authors[0].author.displayName;
      this.newsDetails.canonicalUrl = content.canonicalUrl.url;
      this.newsDetails.provider = content.provider.displayName;
      this.newsDetails.pubDate = content.pubDate;
      console.log ('SUBSCRIBE NEWSLIST :', content);

    });
  }

}
