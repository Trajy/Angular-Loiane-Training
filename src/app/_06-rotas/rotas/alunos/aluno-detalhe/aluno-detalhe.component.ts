import { AlunoModel } from './../aluno.model';
import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  public aluno: AlunoModel
  private inscricao: Subscription

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: AlunosService

  ) {
  }

  ngOnInit(): void {
    /* codigo nao utilizado, pois o guarda rotas resolver ira carregar
    as antes da renderizacao do component */

    /* this.inscricao = this._route.params.subscribe((params: any) => {
      let id = params['id']
      this.aluno = this._service.getAluno(id)
    }) */

    console.log('ngOnInit') // metodo para observar no console


    this._route.data.subscribe((x) => this.aluno = x.aluno)
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  btnEditarAluno() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

}
