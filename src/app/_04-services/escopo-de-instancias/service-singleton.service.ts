import { Injectable } from '@angular/core';

@Injectable(
  // {providedIn: 'root'}
  )
export class ServiceSingletonService {

  cursos: string[] = ['Angular', 'NodeJs']

  constructor() { 
    console.log('Instancia do Service')
  }

  getCursos(){
    return this.cursos
  }

  addCurso(curso: string){
    this.cursos.push(curso)
  }
}
