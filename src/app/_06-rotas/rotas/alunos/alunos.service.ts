import { Injectable } from '@angular/core';

@Injectable({
})
export class AlunosService{

    alunos: any = [
        {id: 1, nome: 'Aluno01', email: 'aluno01@email.com'},
        {id: 2, nome: 'Aluno02', email: 'aluno02@email.com'},
        {id: 3, nome: 'Aluno03', email: 'aluno03@email.com'}
    ]

    constructor(){ }

    getAlunos(): any[]{
        return this.alunos
    }

    getAluno(id: number){
        for(let i: number = 0; i < this.alunos.length; i++){
            if(this.alunos[i].id == id) return alunos[i]
        }
    }
}