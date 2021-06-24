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
  newsDetsStub:NewsDetails;

  ngOnInit(): void {
    this.newsDetails = null;
    this.newsDetails = new NewsDetails();
    this.newsDetsStub={
      title : "We are trying to see how the title will be displayed",
      summary : "Si vous disposez d'informations supplémentaires qui, selon vous, peuvent nous être utiles pour traiter votre demande, n'hésitez pas à répondre à ce courriel, mais ne soumettez pas un ticket en double, car cela réduirait la priorité de votre demande initiale.",
      image:"https://s.yimg.com/uu/api/res/1.2/RDSOPGyireRWQCZgUpl_wQ--~B/aD01NzI7dz0xMDEyO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/6dd6068485913f2b84282730677143c1",
      author : "Kelly Ngaruko",
      canonicalUrl : "https://74frqkzcw9.wixsite.com/kellyngaruko",
      provider : "www.wix.com",
      pubDate : new Date(),
    }
    this.newsList= [this.newsDetsStub,this.newsDetsStub,this.newsDetsStub,this.newsDetsStub,this.newsDetsStub,this.newsDetsStub,this.newsDetsStub]
    // this.subscription = timer(0, 50000)
    // .pipe(switchMap(() =>
    // this.dataService.getNewsInformation())).subscribe(result => {
    //   console.log('Beginning of subsc: ', result);
    //   const content = result.data.contents[0].content;
    //   this.newsDetails = new NewsDetails();
    //   this.newsDetails.title = content.title;
    //   this.newsDetails.summary = content.summary;
    //   this.newsDetails.image= content.body.data.partnerData.cover.image.originalUrl
    //   this.newsDetails.author = content.authors[0].author.displayName;
    //   this.newsDetails.canonicalUrl = content.canonicalUrl.url;
    //   this.newsDetails.provider = content.provider.displayName;
    //   this.newsDetails.pubDate = content.pubDate;
      //console.log ('IMAGE :', this.newsDetails.image);

   //});
  }

}
