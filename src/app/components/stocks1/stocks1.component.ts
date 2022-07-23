import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stocks.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks1',
  templateUrl: './stocks1.component.html',
  styleUrls: ['./stocks1.component.css']
})
export class Stocks1Component implements OnInit {
  public stock1Records: IStockDetails[];
  constructor(public stockService:StockService) { 
    this.stock1Records= [];
  }

  public ngOnInit(): void {

    this.stockService.getStockRecords().subscribe((response:IStockDetails[])=>{
      this.stock1Records=response;
    });
  }

    }


