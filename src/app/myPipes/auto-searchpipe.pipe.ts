import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoSearchpipe'
})
export class AutoSearchpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == null){
      return value
    }
    return value.filter(function(v){
      return v.name.toLowerCase().includes(args.toLowerCase())
    })
  }

}
