# Criacao Modulo de Rotas de Funcionalidades

A organizacao das rotas em modulos ocorre de forma similar ao documentado em [Criacao Modulo de Funcionalidades](10-criacao-modulo-funcionalidades.md), vamos aproveitar a mesma estrutura de pastas e adicionar os modulos de rotas respectivos a cada modulo. note que `cursos.routing.module.ts` foi adicionado a estrutura.

```
cursos
  |
  |-- cursos.component.ts
  |-- cursos.component.html
  |-- cursos.component.css
  |-- cursos-service.service.ts
  |
  |-- curso-detalhe
  |         |
  |         |- curso-detalhe.component.ts
  |         |- curso-detalhe.component.html
  |         |- curso-detalhe.component.css
  |         
  |- curso-nao-encontrado
  |         |
  |         |-- curso-nao-encontrado.component.ts
  |         |-- curso-nao-encontrado.component.html
  |         |-- curso-nao-encontrado.component.css
  |
  |
  |-- cursos.module.ts
  |-- cursos.routing.module.ts
```

para os modulos de roteamento, nao e necessario exportar a classe `RouterModule` em todos os modulos, apenas no modulo raiz, portanto basta importar as rotas por meio da classe `RouterModule` utilizando o metodo `forChild()` (pois se tratam de rotas filhas para a aplicacao, lembre-se que o metodo `forRoot()` e `forChild` retorna um objeto do tipo `ModuleWithProviders`).

- __Modulo de cursos__

```typescript
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRotasComponent } from './cursos.component';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from "@angular/core";

const CURSOS_ROUTES: Routes = [
  { path: 'cursos', component: CursosRotasComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'nao-encontrado', component: CursoNaoEncontradoComponent }
]

@NgModule({
  imports: [RouterModule.forChild(CURSOS_ROUTES)],
})
export class CursosRoutingModule {}
```

seguindo a estrutura de diretorios, observe que o arquivo `rotas.routing.module.ts` foi adicionado a estrutura.

```
_06-rotas
    |
    |-- rotas
    |     |
    |     |-- cursos
    |     |     |
    |     |     |-- cursos.component.ts
    |     |     |-- cursos.component.html
    |     |     |-- cursos.component.css
    |     |     |-- cursos-service.service.ts
    |     |     |
    |     |     |-- curso-detalhe
    |     |     |         |
    |     |     |         |- curso-detalhe.component.ts
    |     |     |         |- curso-detalhe.component.html
    |     |     |         |- curso-detalhe.component.css
    |     |     |         
    |     |     |- curso-nao-encontrado
    |     |     |         |
    |     |     |         |-- curso-nao-encontrado.component.ts
    |     |     |         |-- curso-nao-encontrado.component.html
    |     |     |         |-- curso-nao-encontrado.component.css
    |     |     |
    |     |     |
    |     |     |-- cursos.module.ts
    |     |
    |     |
    |     |-- home
    |     |     |
    |     |     |-- home.component.ts
    |     |     |-- home.component.html
    |     |     |-- home.component.css
    |     |     
    |     |-- login
    |          |
    |          |-- login.component.ts
    |          |-- login.component.html
    |          |-- login.component.css
    |
    |-- rotas.module.ts   
    |-- rotas.routing.module.ts
```

como as rotas relativas os components de cursos estao organizadas em `cursos.routing.module.ts`, basta apenas inclui-lo no meta-dado de imports, e as demais rotas podem ser declaradas normalmente.

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CursosRoutingModule } from './rotas/cursos/cursos.routing.module';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';

const ROTAS_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(ROTAS_ROUTES),
    CursosRoutingModule
  ]
})
export class RotasRoutingModule {}
```

e por fim importar `rotas.routing.module.ts` no modulo de rotas raiz `app.routing.module.ts`

```typescript
import { RotasRoutingModule } from './_06-rotas/rotas.routing.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [

]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES),
        RotasRoutingModule
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}
```

