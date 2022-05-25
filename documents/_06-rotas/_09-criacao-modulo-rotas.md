# Criacao Modulo Rotas

Podemos organizar as rotas em modulos (modularizacao do angular), deste modo o codigo fonte da aplicacao fica organizado. Similar os modulos ja vistos antes um modulo de rotas possui a mesma estrutura.

```typescript
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './_06-rotas/rotas/home/home.component';
import { LoginComponent } from './_06-rotas/rotas/login/login.component';
import { CursosRotasComponent } from './_06-rotas/rotas/cursos/cursos.component';
import { CursoDetalheComponent } from './_06-rotas/rotas/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './_06-rotas/rotas/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosRotasComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}
```

note que foram mantidas as rotas declaradas no documento [Configurando Rotas Simples](_02-configurando-rotas-simples.md), no meta-dado `imports` e declarada a configuracao, ou seja `ModuleWithProviders` que e o retorno do metodo `forRoot()` e no meta-dado `exports` e decalra a classe `RouterModule`.

#
## Incluindo o modulo de rotas no modulo principal, `app.module.ts`

para que o modulo de rotas seja disponibilizado para a aplicacao e necessario inclui-lo no modulo principal da aplicacao.

```typescript
...

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    ...
  ],
  imports: [ 
     ...
     AppRoutingModule
  ],
  providers: [
    ...
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
```