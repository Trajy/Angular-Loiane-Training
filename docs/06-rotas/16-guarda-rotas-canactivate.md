# Guarda Rotas: CanActivate

Guarda rotas sao servicos nativos do framework Angular que implementa um determinado metodo que sera chamado pela aplicacao sempre que as rotas que sao protegidas pelo guarda rotas recebem uma requisicao, este metodo ira permitir ou recusar o acesso.

uma sugestao para boa organizacao do projeto e ter um diretorio especifico para os guarda rotas.

O que define um guarda rotas no angular e a implementacao da interface `CanActivated` e seu metodo `canActivate` (exitem outras interfaces que guardam rotas, serao vistas em outros topicos), a assinatura do metodo possui 2 parametros, dos tipos `ActivatedRouteSnapshot` e `RouteStateSnapshot` e pode retornar `boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>`, para este exemplo iremos tipar o retorno apenas como `Observable<boolean>`

```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../rotas/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this._authService.usuarioAutenticado) return true
    this._router.navigate(['/login'])
    return false
  }
}
```

para aplicar o `AuthGuard` (guarda rotas) a uma rota especifica, basta adicionar o atributo `canActive` nas rotas que necessitam de verificacao, para o nosso exemplo iremos aplicar a todas as rotas exeto a pagina de login, ou seja, qualquer tentativa de acesso a qualquer rota sem que o usuario esteja autenticado ira redirecionar para a tela de login.

app.routing.module.ts
```typescript
// ...demais imports
import { AuthGuard } from './_06-rotas/guards/auth.guard';

const APP_ROUTES: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./_06-rotas/rotas/cursos/cursos.module').
      then(mod => mod.CursosModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./_06-rotas/rotas/alunos/alunos.module').
      then(mod => mod.AlunosModule),
      canActivate: [AuthGuard]
  }
]

// ...decorator ngModule
// ...assinatura da classe

```

rotas.routing.module.ts
```typescript
// ...demais imports
import { AuthGuard } from './guards/auth.guard';

const ROTAS_ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
]

// ...decorator ngModule
// ... assinatura da classe
```

OBS: as rotas filhas tambem passam pela verificacao do guarda rotas.

<p align="center">
    <img src="img/guarda-rotas-canactivate.gif"><br>
    guarda rotas CanActivate.
</p>
