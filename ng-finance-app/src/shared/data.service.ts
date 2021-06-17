import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api = 'https://query1.finance.yahoo.com/v8/finance/chart/{0}?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d&.tsrc=finance';
  constructor(private httpClient: HttpClient) { }
  public getStockInformation(ticker){
      let api = this.api.replace('{0}', ticker);
      
      const result=this.httpClient.get(api)
      console.log("stock service", result)
      return result;
  }
  public getNewsInformation(){
    let apiUrl="https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details";
    let  apiHeader=  { 
      "x-rapidapi-key": "d4c7841377msh24dda083d8339d2p1f7504jsn3cefc3b48a2f",
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "useQueryString": "true"
    }
    let apiParams= {"uuid": "9803606d-a324-3864-83a8-2bd621e6ccbd",
    "region": "US"}
      const result= this.httpClient.get(apiUrl, {headers: apiHeader, params:apiParams})
    console.log("news service", result)
    console.log("THE NEWS :", result)
    return result
  }
}
