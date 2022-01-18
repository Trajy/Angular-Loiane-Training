import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let resultado = ""
    let palavras = value.split(' ')

    for(let palavra of palavras){
      resultado += this.mudarPrimeiraLetraParaCaixaAlta(palavra)
    }

    return resultado;
  }

  mudarPrimeiraLetraParaCaixaAlta(palavra: string){
    return palavra.substring(0,1).toUpperCase() +
      palavra.substring(1).toLowerCase()

  }
}
