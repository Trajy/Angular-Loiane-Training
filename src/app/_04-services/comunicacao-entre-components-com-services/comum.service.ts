import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './injetando-service-em-outro-service/log.service'

@Injectable()
export class ComumService {

  // emissor de evento
   emitirCursoCriado = new EventEmitter<string>();
  static emitirCursoCriadoEstatico = new EventEmitter<string>();

  cursos: string[] = ['Angular', 'NodeJs']

  constructor(private logService: LogService) { 
    console.log('Instancia do Service')
  }

  getCursos(){
    return this.cursos
  }

  addCurso(curso: string){
    // this.cursos.push(curso)

    // emitir curso criado
    // this.emitirCursoCriado.emit(curso)
    ComumService.emitirCursoCriadoEstatico.emit(curso)

    this.logService.consoleLog(`Criando um novo curso ${curso}`)
  }
}
