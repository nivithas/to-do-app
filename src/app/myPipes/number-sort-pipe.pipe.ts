import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSortPipe'
})
export class NumberSortPipePipe implements PipeTransform {
  sortNumbers = function(first,second){
      return first - second;
  }
  transform(value: any, args?: any): any {
    if(args == 'asc'){
      return value.sort(this.sortNumbers);
    }
    else if(args == 'dsc'){
      return value.sort(this.sortNumbers).reverse();
    }
    return value.sort(this.sortNumbers);
  }

}
