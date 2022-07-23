import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stocks.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks2',
  templateUrl: './stocks2.component.html',
  styleUrls: ['./stocks2.component.css']
})
export class Stocks2Component implements OnInit {
  public stock2Records: IStockDetails[];
  public filterByStockName:String;
  constructor(public stockService:StockService) { 
    this.stock2Records= [];
    this.filterByStockName='';
  }

  public ngOnInit(): void {

    this.stockService.getStockRecords().subscribe((response:IStockDetails[])=>{
      this.stock2Records=response;
    });
  }
  public addStock(){
    this.stock2Records.push({id: 1,
      stockName: "BioScrip, Inc.",
      stockMarketCap: 306.09,
      stockMSector: "Health Care",
      releaseDate: "01/06/2021",
      symbol: "BIOS",
      buyPrice: 100
 })
  }

    }



