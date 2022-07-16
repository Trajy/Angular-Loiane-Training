import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IComponentsDeactivate } from 'src/app/_06-rotas/general-interfaces/i-components-deactivate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, IComponentsDeactivate {

  public aluno: any
  private inscricao: Subscription
  podeDesativar: boolean = true;

  constructor(private _route: ActivatedRoute, private _service: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params) => {
      this.aluno = this._service.getAluno(params['id'])
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

  get desativar(): boolean {
    return this.desativar;
  }
  set mudou(value: boolean) {
    this.podeDesativar = value;
  }

}
