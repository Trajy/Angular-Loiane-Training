# __INJETANDO UM SERVICE EM OUTRO SERVICE__

A injecao de dependencia entre _services_ e semelhante a injecao de dependencia em _components_, para exemplificar vamos criar um service responsavel apenas por mostrar uma mensagem no console, vamos chamar essa classe de `LogService`.

___service_ que sera injetado:__
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  consoleLog(msg: string){
    console.log(msg)
  }
}
```
retomando o exemplo implementado em [__COMUNICACAO ENTRE COMPONENTS USANDO SERVICES (BROADCASTING)__ ](comunicacao-entre-components-com-services.md), podemos injetar a classe `LogService` na classe `ComumService` e chamar o metodo `consoleLog()` passando como argumento a mensagem desejada a ser exibida no console.

___service_ que ira receber a injecao de dependencia:__

```typescript
import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './injetando-service-em-outro-service/log.service'

@Injectable()
export class ComumService {

  static emitirCursoCriadoEstatico = new EventEmitter<string>();

  cursos: string[] = ['Angular', 'NodeJs']

  // injecao de dependencia via construtor
  constructor(private logService: LogService) { 
    console.log('Instancia do Service')
  }

  getCursos(){
    return this.cursos
  }

  addCurso(curso: string){

    ComumService.emitirCursoCriadoEstatico.emit(curso)

    // chamada do metodo da dependencia
    this.logService.consoleLog(`Criando um novo curso ${curso}`)
  }
}
```

