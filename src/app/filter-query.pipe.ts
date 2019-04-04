import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterQuery'
})
export class FilterQueryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.filter(el => el['Name'].match(args));
    }
    return null;
  }

}