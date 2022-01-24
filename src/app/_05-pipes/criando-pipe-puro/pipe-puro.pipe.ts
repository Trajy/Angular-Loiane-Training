import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class PipePuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(value.lenght === 0 || args === undefined){
      return value
    }
    
    let filro = args.toLocaleString().toLocaleLowerCase()
    
    return value.filter(
      (elementoASerComparado: string) => elementoASerComparado.toLocaleLowerCase().includes(filro)
    );
  }
}
