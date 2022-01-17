import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ComumService {

  // emissor de evento
   emitirCursoCriado = new EventEmitter<string>();
  static emitirCursoCriadoEstatico = new EventEmitter<string>();

  cursos: string[] = ['Angular', 'NodeJs']

  constructor() { 
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
  }
}
