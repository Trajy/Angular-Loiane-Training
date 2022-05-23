import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ]
  }

  getCurso(id: number){
    let cursos = this.getCursos()
    for(const element of cursos) if(element.id == id) return element
    return null
  }
}
