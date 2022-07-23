import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input('title') title:string;
  @Input('countryCode') country:string;
  
  public newsDetails: any[];
  constructor(private newsService:NewsService) { 
    this.newsDetails = []; 
    this.title='NEWS';
    this.country='';
  }

  public ngOnInit(): void {
    this.title=`${this.country} ${this.title}`;
 this.intializeNews();
  }

  public intializeNews():void{
    this.newsService.getNews(this.country).subscribe((response:any)=>{
      this.newsDetails=response.articles;
    })
  }
}
