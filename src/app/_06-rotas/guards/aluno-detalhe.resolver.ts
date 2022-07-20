import { AlunosService } from './../rotas/alunos/alunos.service';
import { AlunoModel } from '../rotas/alunos/aluno.model';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlunoDetalheResolver implements Resolve<AlunoModel> {

  constructor(private service: AlunosService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): AlunoModel | Observable<AlunoModel> | Promise<AlunoModel> {
    console.log('Resolver');

    const id = route.params['id']
    return this.service.getAluno(id)
  }
}
