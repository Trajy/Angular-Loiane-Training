import { AlunoModel } from './aluno.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private _alunos: AlunoModel[] = [
    {id: 1, nome: 'Aluno01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno03', email: 'aluno03@email.com'}

  ]

  constructor() { }

  getAlunos(): any {
    return this._alunos
  }

  getAluno(id: number): any {
    for(const aluno of this._alunos){
      if(aluno.id == id) return aluno
    }
    return null
  }
}
