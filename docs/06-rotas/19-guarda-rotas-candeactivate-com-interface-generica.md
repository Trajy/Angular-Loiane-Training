# Guarda Rotas: CanDeactivate com Interface Generica

Ao utilizar o guarda rotas [`CanDeactivate`](18-guarda-rotas-candeactivate.md) e necessario que o tipo do component que sera verificado ao desativar a rota, imagine uma situacao onde varios _components_ possuem a mesma logica de desativacao, nao seria uma boa pratica implementar um guarda rotas para cada _component_ (afinal isso iria contra o reaproveitamento de codigo, um do principios por tras da orientacao o objetos).

deste modo, podemos criar uma interface que possui os metodos que devem ser implementados nos components para realizar a verificacao (lembre-se que na assinatura do metodo `canDeactivate` existe o parametro com o tipo do component passado como argumento na variavel de tipo da interface `CanDeactivate`

- Exemplo de Interface

```typescript
export interface IComponentsDeactivate {

  podeDesativar: boolean

  get desativar(): boolean

  set mudou(value: boolean)
}
```

- Guarda Rotas

note que o que a variavel de tipo recebe o tipo da interface, ou seja, qualquer component que a implemente pode utilizar este guarda rotas, pois, ira possuir a implementacao dos metodos da interface.

```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IComponentsDeactivate } from './../general-interfaces/i-components-deactivate';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IComponentsDeactivate> {

  canDeactivate(_component: IComponentsDeactivate, _currentRoute: ActivatedRouteSnapshot, _currentState: RouterStateSnapshot, _nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('guarda de desativacao da rota')
    return _component.podeDesativar
  }
}
```
- `AlunosFormComponent`

em nosso component iremos implementar a interface

```typescript
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
  podeDesativar: boolean = true; // implementacao da interface

  constructor(private _route: ActivatedRoute, private _service: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params) => {
      this.aluno = this._service.getAluno(params['id'])
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

  // implementacao da interface
  get desativar(): boolean {
    return this.desativar;
  }

  // implementacao da interface
  set mudou(value: boolean) {
    this.podeDesativar = value;
  }

}
```

- template HTML de `AlunosFormComponent`

vamos utilizar o propertyBindind para realizar a chamada do metodo `mudou`, desse modo a variavel podeDesativar ira receber o valor true (o Angular e inteligente para atribuir o valor true como argumento)

```HTML

<h5>
  Criar/Editar Aluno
</h5>

<div class="col s12">
  <div class="row">
    <div class="col s12">
      <label for="Id">#</label>
      <input disabled [(ngModel)]="aluno.id" id="id" type="text">
    </div>
  </div>
  <div class="row">
    <div class="col s12">
      <label for="nome" class="active">Nome</label>
      <!-- inclusao da propertyBindind (input)-->
      <input id="nome" [(ngModel)]="aluno.nome" type="text" (input)="mudou=false">
    </div>
  </div>
  <div class="row">
    <div class="col s12">
      <label for="email">Email</label>
      <!-- inclusao da propertyBindind (input)-->
      <input id="email" [(ngModel)]="aluno.email" type="email" (input)="mudou=false">
    </div>
  </div>
</div>
```

Note que ao realizar qualquer modificacao em um dos campos do formulario o guarda rotas `CanDeactivate` nao permite a saida da rota.

<p align="center">
    
<img src="img/guarda-rotas-candeactivate-com-interface-generica.gif"><br>
    guarda rotas CanDeactivate.
</p>
