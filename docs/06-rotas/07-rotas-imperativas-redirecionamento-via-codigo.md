# Rotas Imperativas: Redirecionamento via codigo.

vamos aprimorar o codigo desenvolvido em [Escutando mudancas nos parametros de rotemento](_06-Escutando-mudancas-nos-parametros-de-roteamento.md), primeiro vamos criar uma classe de servico para alimentar nossos componentes (neste caso a classe apenas ira retornar um objeto com id`s e nomes de de cursos, para simular o retorno de dados de um API por exemplo).

- __classe de servico__

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ]
  }

  getCurso(id: number){
    let cursos = this.getCursos()
    for(const element of cursos) if(element.id == id) return element
    return null
  }
}
```

__OBS__: note que nao e necessario declarar a classe um nenhum modulo, pois, o decorator `@Injectable()` possui o atributo, `providedIn` com o valor `root`, significa que a classe esta sendo disponibilizada para toda aplicacao pelo modulo raiz.

O proximo passo e refatorar o _component_ para representar o detalhamento de um curso especifico. O pacote `@angular/router`, possui uma classe Router que possui diversos metodos relativos as rotas, neste caso o metodo de interesse e `navigate()` que ira redirecionar para outro _component_

- __classe CursoDetalheComponent__

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosServiceService } from '../cursos/cursos-service.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription = new Subscription()

  // variavel para receber o objeto com os dados do curso oriundos da classe de servico.
  curso: any;

  // os objetos sao injetados por meio da injecao de dependencias do angular.  
  constructor(private _route: ActivatedRoute, 
    private _router: Router,
    private _service: CursosServiceService) {
   }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.id = params['id']

        this.curso = this._service.getCurso(params['id'])

        // redirecionamento imperativo via codigo.
        // caso nenhum valor seja retornado a aplicacao ira ser redirecionada para uma pagina de nao encontrado.
        if(this.curso == null) this._router.navigate(['/nao-encontrado'])
      }
    )
  }

  ngOnDestroy(): void{
    this.inscricao.unsubscribe()
  }

}
```

No tamplete apenas uma interpolacao foi adicionada para exibir o nome do curso.

- __template de curso detalhe component__

```HTML
<p>
    id: {{ id }}
</p>
<p>
   Curso: {{ curso?.nome }}
</p>
```

Em `CursosComponent` foi adicionada uma lista de cursos utilizando o servico, note que neste caso tambem obtemos a dependencia por meio da injecao de dependencias por construtor do angular. e a chamada do metodo para retornar os cursos e feito no metodo `ngOnInit()`

```typescript
import { CursosServiceService } from './cursos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosRotasComponent implements OnInit {

  cursos: any

  // injecao de depedencias por construtor do angular.
  constructor(private _service: CursosServiceService) {

  }

  ngOnInit(): void {
    this.cursos = this._service.getCursos()
  }

}
```

No template HTML de CursosComponent foi utilizado o Materializa CSS para estilizar a lista de cursos.

```HTML
<p>Lista de Cursos</p>
<div class="collection">
    <a class="collection-item"
    *ngFor="let curso of cursos"
    [routerLink]="['/curso', curso.id]">
        {{ curso.nome }}
    </a>
</div>
```

a classe `CursoNaoEncontradoComponent` e seu template HTML nao possuem alteraceos significativas apenas o texto `curso nao encontrado`, foi adicionado ao template HTML.

No arquivo de rotas a nova rota foi inserida

```typescript
import { CursoNaoEncontradoComponent } from './_06-rotas/rotas

...

const APP_ROUTES: Routes = [
    ...
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent}
]

...
```
## Exemplo
<p align="center">
    <img src="img/rotas-imperativas.gif"><br>
</p>
