import { Pipe } from '@angular/core';

import { PipePuroPipe } from './../criando-pipe-puro/pipe-puro.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class PipeImpuroPipe extends PipePuroPipe {

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
