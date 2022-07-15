# Guarda Rotas: CanActivateChield

De forma similar ao [`CanActivate`](16-guarda-rotas-canactivate.md) o `CanActivateChield` tambem e uma interface que necessita que seu motodo `canActivateChield` seja implementado, porem neste caso o guarda rotas ira verificar cada nova chamada entre as rotas filhas.

Vamos tomar como exemplo `AlunosComponent` que possui a rota `/alunos` e as seguintes rotas filhas `/novo`, `/:id`, `:id/editar`.

- implementacao do metodo canActivateChield

OBS: neste caso apenas iremos retornar true e exibir uma mensagem no console para identificar a chamada do metodo.

```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('guarda rotas filhas')
    return true
  }

}
```

no modulo `app.routing.module.js` sera adicionado o atributo `canActivateChield`

```typescript
// ...imports

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
      canActivate: [AuthGuard],
      canActivateChild: [AlunosGuard]
  }
]

// ...decorator ngModuel
// ...assinatura da classe
```

Para exemplificar um `console.log('guarda rotas pai')` foi adicionado ao guarda rotas do tipo `CanActivate` assim ambos os guarda rotas irao apresentar uma mensagem no console quando verificarem uma rota. 
note no exemplo que ao acessar a rota `/alunos` ambos os metodos sao chamado, porem ao navegar entre as rotas filhas apenas `AlunosGuard` realiza uma nova verificacao.

<p align="center">
    <img src="img/guarda-rotas-canactivatechield.gif"><br>
    guarda rotas CanActivate.
</p>


