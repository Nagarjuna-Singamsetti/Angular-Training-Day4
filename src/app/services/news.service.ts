import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http:HttpClient) { }

  public getNews(countryCode:string):Observable<any>{
   return  this.http.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=642e1ab13f574c32889a42df07f4e904`);
  }
}
