import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any
  inscricao: Subscription

  constructor(
    private _route: ActivatedRoute,
    private _service: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.aluno = this._service.getAluno(params['id']);
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}