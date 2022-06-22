# Lazy Loanding

Lazy loading e uma forma de aumentar a performance de uma aplicacao por meio do carregamento sob demanda. Outra vantagem e a segurance, pois, apenas o codigo da tela de login fica disponivel ate que o usuario insira credenciais validas.

## Carregamento sem Lazy Loading

<p align="center">
    <img src="img/carregamento-sem-lazy-loading.gif"><br>
    carragamento sem lazy loading.
</p>

Note que os arquivos que contem os codigos fonte em `javascript` foram carregados por completo trazendo todo o codigo da aplicacao.

## Carregamento com Lazy Loading

<p align="center">
    <img src="img/carregamento-com-lazy-loading.gif"><br>
    carragamento com lazy loading.
</p>

note que os arquivos principais sao carregados normalmente, entretando nao contem o codigo `javascript` dos _components_ declarados como Lazy Loading, os codigos de cada _component_ sao carregados sob demanda.

## Implementacao do Lazy Loading

As rotas que utilizaram o Lazy Loading devem ser declaradas no `app.routing.module.ts`, da seguinte forma.

```typescript
//...imports omitidos

const APP_ROUTES: Routes = [
  { path: 'cursos', loadChildren: 'app/_06-rotas/rotas/cursos/cursos.routing.module#CursosModule' }
]

@NgModule({
    //...atributos de meta-data omitidos
})
export class AppRoutingModule {}
```

Para declarar uma rota que ira utilizar o Lazy Loading e necessario passar sua rota como valor para o atributo `path` e o caminho a partir da pasta `app`, para modulo de funcionalidades para o atributo `loadChildren` separado por `#` e em seguida o nome da classe, neste caso `CursosModule`.

IMPORTANTE: ao utilizar declarar um modulo para ser carregado por Lazy Loading o mesmo nao pode ser importado em nenhum outro lugar da aplicacao (ou seja, imports em outros modulos devem ser removidos, inclusive no modulo raiz, `app.module.ts`)

Todas as rotas declaradas no arquivo no modulo que sera carregado por Lazy Loading seram sub-rotas da rota principal.

```typescript
//...imports omitidos

const CURSOS_ROUTES: Routes = [
  { path: '', component: CursosRotasComponent },
  { path: ':id', component: CursoDetalheComponent },
  { path: 'nao-encontrado', component: CursoNaoEncontradoComponent }
]

//...decorator @NgModule omitido
//...declaracao da class CursosModule omitida
```

## Refatoracao das rotas imperativas

neste exemplo, as rotas completas sao as seguintes

- CursosRotasComponent: /cursos
- CursoDetalheComponent: /cursos/:id
- CursoNaoEncontradoComponent: /cursos/nao-encontrado

logo se houverem rotas imperativas com caminhos diferentes, sera necessaria a refatoracao.

Em nosso exemplo temos as seguintes refatoracoes

- cursos.component.html

```HTML
<!-- ...codigo HTML omitido -->

    [routerLink]="['/curso', curso.id]" <!-- atributo routerLink recebendo valor de rota antigo> -->
    [routerLink]="['/cursos', curso.id]" <!-- atributo routerLink recebendo valor de rota novo> -->

<!-- ...codigo HMTL omitido -->
```

- curso.detalhe.component.ts

```typescript
//...imports omitidos

// decorator @Component omitido

//...codigo omitido

  ngOnInit(): void {
   
   //...codigo omitido

        // NAVEGACAO IMPERATIVA COM VALOR ANTIGO
        // if(this.curso == null) this._router.navigate(['/nao-encontrado'])

         // NAVEGACAO IMPERATIVA COM VALOR NOVO
        if(this.curso == null) this._router.navigate(['/cursos/nao-encontrado'])  
  }

  //...codigo omitido

}
```

## Lazy Loading com Rotas Filhas

implementar Lazy Loading em components que possuem rotas filhas e relativamente mais simples, pois, ja possuem rotas padronizadas, conforme o exemplo.

```typescript
//...imports omitidos

const ALUNOS_ROUTES: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      { path: 'novo', component:  AlunosFormComponent},
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunosFormComponent }
    ]
  },
]

//...decorator NgModule omitido
//...declaracao da classe AlunosModule omitida
```

as rotas para cada component completas estao de acordo com a lista abaixo

- AlunosComponent: /alunos
- AlunosFormComponent: /alunos/novo
- AlunosDetalheComponent: /alunos/:id
- AlunosFormComponent: /alunos/:id/editar

logo, podemos apenas declarar o modulo de alunos como Lazy Loading no modulo de rotas principal.

```typescript
//...imports omitidos

const APP_ROUTES: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./_06-rotas/rotas/cursos/cursos.module').
      then(mod => mod.CursosModule)
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./_06-rotas/rotas/alunos/alunos.module').
      then(mod => mod.AlunosModule)
  }
]

//...decorator NgModule omitido
//...declaracao da class AppRoutingModule omitida
```
