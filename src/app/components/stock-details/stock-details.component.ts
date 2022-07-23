import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stocks.model';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  public stockDetails: IStockDetails;
  public isStockDetailsEditable:boolean;

  constructor() {
    this.stockDetails = {} as IStockDetails;
    this.isStockDetailsEditable=false;
  }

  public ngOnInit(): void {
    this.stockDetails = {
      id: 1,
      stockName: "BioScrip, Inc.",
      stockMarketCap: 306.09,
      stockMSector: "Health Care",
      releaseDate: "01/06/2021",
      symbol: "BIOS",
      buyPrice: 100

    }
  }
public editStock():void{
this.isStockDetailsEditable=true;
}
public updateStock():void{
  this.isStockDetailsEditable=false;
  
}
}
