import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  public aluno: any
  private inscricao: Subscription

  constructor(private _route: ActivatedRoute, private _service: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params) => {
      this.aluno = this._service.getAluno(params['id'])
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }
}
