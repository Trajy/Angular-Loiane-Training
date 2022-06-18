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

  public aluno: any
  private inscricao: Subscription

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: AlunosService

  ) { }

  ngOnInit(): void {

    this.inscricao = this._route.params.subscribe((params: any) => {
      let id = params['id']
      this.aluno = this._service.getAluno(id)
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  btnEditarAluno() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

}
