# Rotas Filhas: Desenvolvendo Telas

Vamos desenvolver as telas para os _components_ criados na documentação [Rotas Filhas](12-rotas-filhas.md) utilizando o [Materialize CSS](http://archives.materializecss.com/0.100.2/).

## Dados Mockados

Para simular os dados oriundos de um back-end vamos criar uma classe de serviço que sera nosso objeto Mock.

- Classe Mock (AlunosService)

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private _alunos: any[] = [
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
```

Observe que temos 2 métodos, um para retornar todos os alunos (`getAlunos()`) e outro para retornar apenas um aluno (`getAluno(id)`) recebendo seu id como argumento.

OBS: como esta e uma classe Mock nenhum algoritmo para performance de busca foi implementado, pois, sao apenas dados em pequenas quantidades, e a estrutura de repetição `for` serve bem para este proposito.

IMPORTANTE: note que para este exemplo no decorator `@Injectable()` não ha um objeto com o atributo `providedIn: 'root'`, deste modo e necessário declarar a qual modulo esta classe de serviço pertence, seguindo a estrutura do projeto deve ser declarada em `alunos.module.ts` no array `providers`, a classe Mock estará disponível para todos os _compoenents_ declarados no modulo e todos os _components_ dos módulos que importarem o modulo `AlunosModule`.

```typescript
//...demais imports omitidos
import { AlunosService } from './alunos.service';

@NgModule({
  declarations: [
    //...demais components omitidos
  ],
  imports: [
    //...demais modulos omitidos
  ],
  exports: [],
  providers: [ AlunosService ]
})
export class AlunosModule { }

```

## Desenvolvendo telas

### Lista de Alunos

Para recuperar os dados em `AlunosComponent` iremos injetar por injeção de dependências do Angular no construtor, no método `ngOnInit()` aramazenar os dados mockados no atributo `alunos` da classe `AlunosComponent`.

```typescript
import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos: any[]

  constructor(private _service: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this._service.getAlunos()
  }
}
```

No template HTML DOM irmos utilizar a lista da seção [Collections](http://archives.materializecss.com/0.100.2/collections.html) do Materialize CSS, a diretiva ngFor ira renderizar os alunos obtidos no array `alunos` da _class_ `AlunosComponent`

```HTML
<div class="row">
  <div class="col s6">
    <p>Lista de Alunos</p>
    <div class="collection">
      <a
      *ngFor="let aluno of alunos"
        class="collection-item"
        [routerLink]="[aluno.id]"
        routerLinkActive="active"
      >
      {{ aluno.nome }}
      </a>
    </div>
  </div>
  <div class="col s6">
    <router-outlet></router-outlet>
  </div>
</div>
```

Note que no em `[routerLink]` não e necessário passar o caminho `/alunos` pois por se tratar de uma rota filha todos os argumentos de caminho passados para a url serão inseridos apos a rota do _component_ pai, logo basta passar o id do aluno desejado que a rota completa sera `/alunos/:id`, onde `:id` e o id do aluno desejado.

Importante: para o funcionamento correto do materialize CSS segundo o exemplo obtido em [Grid](http://archives.materializecss.com/0.100.2/grid.html) e importante que todo o contudo esteja no interior de uma `div` com a `class` `container`, esta classe esta como valor do atributo class em `app.component.html`, ou seja, engloba toda a aplicação. Neste exemplo a tela esta dividida ao meio entre a lista de alunos e as rotas filhas.

### Rotas Filhas (AlunosDetalhe e AlunosForm)

#### Alunos Detalhe

Na classe `AlunoDetalheComponent` também iremos utilizar um objeto Mock do tipo que foi criado no inicio deste documento, mas desta vez para obter os dados de um único aluno, a classe `ActivatedRoute` do package `@angular/router` também sera utilizada para obter o id do aluno a partir dos parâmetros passados para a rota por meio do método `subscribe()` para obter o valor do parâmetro `id` e passa-lo como argumento ao método `getAluno(id)` e retornar os dados de um aluno especifico.

```typescript
import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  public aluno: any
  private inscricao: Subscription

  constructor(private _route: ActivatedRoute, private _service: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params: any) => {
      let id = params['id']
      this.aluno = this._service.getAluno(id)
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
```

no DOM basta apenas exibir os valores recebidos por meio de interpolacao

```HTML
<p>Detalhe Aluno</p>

<p>Id: {{ aluno.id }}</p>
<p>Nome: {{ aluno.nome }}</p>
<p>E-mail: {{ aluno.email }} </p>
```

### Formulário para adição/edição de alunos

Do mesmo modo que o `AlunoDetalheCompoenent` busca o objeto de um aluno com base em seu id, `AlunoFormComponent` também tera a mesma logica.

```typescript
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
```

No DOM os dados serão exibidos em um formulário modificado a partir dos modelos em [Forms](http://archives.materializecss.com/0.100.2/forms.html) do Materialize CSS. Utilizando a diretiva `ngModel` do angular para realizar o _two-way-data-binding_.

IMPORTANTE: lembre-se que para utilizar a diretiva `ngModel` o modulo `FormsModule`, deve ser importado no módulo que declara os _components_ que iram utilizar a diretiva.

- modulo `AlunosModule`

```typescript
//...demais imports omitidos
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //...components declarados omitidos
  ],
  imports: [
    //...demais modulos importados omitidos
    FormsModule
  ],
  exports: [],
  providers: [ 
    //...providers importados omitidos
   ]
})
export class AlunosModule { }
```
- dom

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
      <input id="nome" [(ngModel)]="aluno.nome" type="text">
    </div>
  </div>
  <div class="row">
    <div class="col s12">
      <label for="email">Email</label>
      <input id="email" [(ngModel)]="aluno.email" type="email">
    </div>
  </div>
</div>
```

Note que não foi utilizada a tag `form`, este assunto sera abortado posteriormente, o Angular e inteligente para detectar forms, logo, podemos utilizar a tag `div` no lugar da tag `form`.

### Adição do botão para editar no _component_ `AlunoDetalheComponent`

para redirecionar para a `AlunoFormComponent` utilizaremos as rotas imperativas o método `btnEditarAluno()` que sera chamado por meio de um botão no DOM de `AlunoDetalheComponent`

- classe `AlunoDetalheComponent`

```typescript
// ...demais imports omitidos
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  // ...atributos da classe omitidos

  constructor(
    // ...demais parametros do construtos omitidos
    private _router: Router,

  ) { }

  // ...demais metodos da classe omitidos

  btnEditarAluno() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

}
```

- adição do botão no DOM de `AlunoDetalheComponent`

```HTML
<!-- codigo HTML omitido -->

<a
  class="waves-effect waves-light btn"
  (click)="btnEditarAluno()"
>
  Editar
</a>
```

## Utilizando Telas Desenvolvidas

<p align="center">
    <img src="img/desenvolvendo-telas-rotas-filhas.gif"><br>
    exemplo das telas desenvolvidas.
</p>
