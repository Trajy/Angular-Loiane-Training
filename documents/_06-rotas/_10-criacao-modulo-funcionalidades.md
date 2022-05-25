# Criacao Modulo de Funcionalidades

Com o aumento da dimensao do codigo fonte, torna-se interesante a organizacao do projeto em modulos, isto torna a interpretacao e manutencao do codigo fonte mais facies.

Para exemplificar a organizacao do projeto em modulos, vamos neste exemplo criar um modulo para cursos, este contem as classes relativos aos cursos, a organizacao dos diretorios estas conforme o diagrama.

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
```

No arquivo `cursos.module.ts`, o decorator `@NgModule` contem os meta-dados, em `declarations` estaram as classes dos _components_, em `imports` estao os modulos base do angular (contem diretivas ngIf, ngFor, validacoes etc.), e em `providers` estao os servicos utilizados pelos _components_ do modulo.

```typescript
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosServiceService } from './cursos-service.service';
import { CursosRotasComponent } from './cursos.component';

@NgModule({
    declarations: [
        CursosRotasComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    imports: [
      CommonModule, // possui as diretivas ngIf ngFor, validaceos e etc.
      RouterModule
    ],
    exports: [],
    providers:[CursosServiceService]
})
export class CursosModule {}
```

OBS: neste repositorio, a estrutura de pastas do codigo fonte esta de acordo com as secoes do curso,

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
```

 iremos aproveitar este cenario para organizar os modulos, todos os codigos relativos a rotas estao no diretorio `_06-rotas`, podemos criar um modulo relativo a esta secao do curso, `rotas.module.ts`, que contera as declaracoes de `HomeComponent`, `LoginComponent` e os codigos fonte relativos a cursos ja estao organizados em `cursos.module.ts`, logo basta importa-lo.

```typescript
import { HomeComponent } from './rotas/home/home.component';
import { NgModule } from "@angular/core";
import { CursosModule } from './rotas/cursos/cursos.module';
import { LoginComponent } from './rotas/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
   CursosModule
  ],
})
export class RotasModule {}
```

e por fim declarar o `RotasModule` no modulo raiz para diponibiliza-lo para toda a aplicacao.

```typescript
...

import { RotasModule } from './_06-rotas/rotas.module';

@NgModule({
  ...

  imports: [
  
   ...

   RodasModule
  ],

  ...
})
export class AppModule {}
