import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {

  // transform(result,term ) {
  //   if(term==undefined) {
  //     return result
  //   }
  //   else {
  //     return result.filter(
  //       function(x){
  //         return x.title.toUpperCase().startsWith(term.toUpperCase())
  //       }
  //     )
  //   }
  // }
  
  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
