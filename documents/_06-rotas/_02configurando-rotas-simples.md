# __CONFIGURANDO ROTAS SIMPLES__

As rotas podem ser declaradas diretamente no arquivo `app.module.ts` ou organizadas em um arquivo separado (como neste exemplo), para seguir o padronizacao dos nomes iremos criar um arquivo chamado `app.routing.ts`, 2 constantes importantes necessitam ser declaradas neste arquivo.
-  APP_ROUTES: recebe um array de objetos que iram conter as rotas para cada _component_, cada objeto possui 2 atributos principais, o primeira e `path` que contem o caminho para acessar o _component_, e o segundo e `component`, que cotem o nome do _component_ para qual o caminho aponta.
- ROUTING: que recebe um objeto do tipo `ModuleWithProviders` que ira manipular as rotas declaradas, um ponto importante aqui e que para as rotas principais da aplicacao deve ser utilizado o metodo `forRoot()` da classe `RouterModule`, para o caso das funcionalidades das paginas, uma nova contante com as rotas deve ser declarada e passada como argumento para o metodo `forChield()`.

```typescript
import { HomeComponent } from './_06-rotas/rotas-simples/home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './_06-rotas/rotas-simples/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { CursosComponent } from './_06-rotas/rotas-simples/cursos/cursos.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cursos',
        component: CursosComponent
    }
]

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
```

para que a constante `ROUTING` fique disponivel para a aplicacao e necessario que sua assinatura possui `export`, e deve ser declarada na secao de `imports` do arquivo `app.module.ts`

```typescript
import { ROUTING } from './app.routing';

@NgModule({
  declarations: [],
  imports: [ 
    ROUTING
  ],
  providers: []
  bootstrap: [AppComponent] 
export class AppModule { }
```

e para que o html possa renderizar o conteudo, as tags `<router-outlet></router-outlet>` necessitam ser declaradas no _template_ HTML neste caso foram declaradas em app.component.html

```html
<router-outlet></router-outlet>
```
Apos realizar o processo de compilacao, basta acessar os enderecos para renderizar o respectivo _component_ no navegador web.
