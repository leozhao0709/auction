import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string, args?: any): any {

    if (!filterField || !keyword) {
      return list;
    }

    return list.filter(
      (item) => {
        const filedValue: string = item[filterField];
        return filedValue.indexOf(keyword) >= 0;
      }
    );
  }

}
