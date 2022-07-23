import { Pipe, PipeTransform } from '@angular/core';
import { IStockDetails } from '../models/stocks.model';

@Pipe({
  name: 'search',
  pure:false,
})
export class SearchPipe implements PipeTransform {

  transform(value: IStockDetails[], searchedStockName:String  ): IStockDetails[] {
    if(value.length === 0 || searchedStockName === ''){
      return value;
    }
    const result = [];
    for (const item of value) {
      if(item.stockName.toLocaleLowerCase().match(searchedStockName.toLocaleLowerCase())){
        result.push(item)
      }
    }
    return result;
  }

}
