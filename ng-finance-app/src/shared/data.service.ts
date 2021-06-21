import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api = 'https://query1.finance.yahoo.com/v8/finance/chart/{0}?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d&.tsrc=finance';  constructor(private httpClient: HttpClient) { }
  public getStockInformation(ticker): any{
      const api = this.api.replace('{0}', ticker);

      const result = this.httpClient.get(api);
      console.log('stock service', result);
      return result;
  }
  public getNewsInformation(): Observable<any>{
    const apiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details';
    const  apiHeader =  {
      'x-rapidapi-key': 'd4c7841377msh24dda083d8339d2p1f7504jsn3cefc3b48a2f',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      useQueryString: 'true'
    };
    const apiParams = {uuid: '9803606d-a324-3864-83a8-2bd621e6ccbd',
    region: 'US'};
    const result = this.httpClient.get(apiUrl, {headers: apiHeader, params: apiParams});
    console.log('news service', result);
    console.log('THE NEWS :', result);
    return result.pipe(map(data => data));
  }
  public getNewsList(): Observable<any>{
    const apiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list';
    const  apiHeader =  {
      'content-type': 'text/plain',
      'x-rapidapi-key': 'd4c7841377msh24dda083d8339d2p1f7504jsn3cefc3b48a2f',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
	useQueryString: 'true'
    };
    const apiParams = {
      uuid: '9803606d-a324-3864-83a8-2bd621e6ccbd',
      region: 'US',
      snippetCount: '28'};
    const result = this.httpClient.get(apiUrl, {headers: apiHeader, params: apiParams});
    console.log('news list', result);
    return result;
  }
}
