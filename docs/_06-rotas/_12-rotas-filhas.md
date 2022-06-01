# Rotas Filhas

Um cenario amigavel para utilizacao de rotas filhas serge quando queremos renderizar um _component_ pai e um _component_ filho ao mesmo tempo na tela de nessa aplicacao. Alem dos atributos ja vistos nos documentos anteriores, as rotas podem conter o atributo `children`, que ira conter um array com as sub-rotas pertencentes ao _component_ principal em questao.

Neste exemplo iremos criar um _component_ principal chamado `alunos`, e 2 sub _components_ (alunos-form e aluno-detalhe).

```
alunos
  |
  |-- alunos-form
  |         |
  |         |-- alunos-form.component.css
  |         |-- alunos-form.component.html
  |         |-- alunos-form.component.ts
  |
  |
  |-- alunos-detalhe
  |         |-- alunos-detalhe.component.css
  |         |-- alunos-detalhe.component.html
  |         |-- alunos-detalhe.component.ts
  |
  |
  |-- alunos.component.css
  |-- alunos.component.html
  |-- alunos.component.ts
  |-- alunos.module.ts
  |-- alunos.routing.module.ts
```
#
## Organizacao dos modulos


### alunos.module.ts

```typescript
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunoDetalheComponent,
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  exports: []
})
export class AlunosModule { }
```

note que neste exemplo o modulo `AlunosRoutingModule`, esta declarado no meta-dado `imports`, isto ocorre pois e necessario que haja o import do `RouterModule` para este modulo para que possamos utilizar as diretivas do Angular relativas as rotas, portanto e mais conveniente importar os modulos de rotas em seus respectivos modulos.

#
### alunos.routing.module.ts

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';

const ALUNOS_ROUTES: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      { path: 'novo', component:  AlunosFormComponent},
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunosFormComponent }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(ALUNOS_ROUTES) ],
  exports: [ RouterModule ]
})
export class AlunosRoutingModule { }
```

note que este modulo de rotas contem `RouterModule`, no meta-dado `exports`, isto o torna disponivel para os modulos que o importarem. Utilizando o atributo `children`, sao declaradas as rotas filhas do _component_ principal, lembrando que para renderizar os sub _components_ no principal, e necessario utilizar a tag `<router-outlet>` no mesmo.

#
## HTML
### aluno.component.html

```HTML
<p>alunos works!</p>
<router-outlet></router-outlet>
```

os demais components, nao foram alterados.

<p align="center">
    <img src="img/rotas-filhas.gif"><br>
    exemplo de rotas filhas.
</p>






