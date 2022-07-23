import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paren'
})
export class ParenPipe implements PipeTransform {

  transform(value: string | number, condition?: boolean): string {
    if (value === '') {
      return '';
    }
    if (condition) {
      return '（(' + value + ')）';
    }
    return '(' + value + ')';
  }

}
