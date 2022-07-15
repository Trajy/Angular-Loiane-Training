# Guarda Rotas: CanDeactivate

De forma similar a [`CanActivate`](16-guarda-rotas-canactivate.md) o guarda rotas `CanDeactivate` ira monitorar as rotas, porem neste caso, a verificacao sera se o usuario pode desativar determinada rota. A implementacao segue o mesmo _boilerplate_ das demais classes de guarda rotas, A implementacao do metodo `canDeactivate` oriundo da Interface `CanDeactivate`, a diferencao e que esta interface recebe um tipo generico que neste caso e o _component_ que sera verificado (neste exemplo `AlunosComponent`).

```typescript
import { AlunosFormComponent } from './../rotas/alunos/alunos-form/alunos-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<AlunosFormComponent> {

  canDeactivate(_component: AlunosFormComponent, _currentRoute: ActivatedRouteSnapshot, _currentState: RouterStateSnapshot, _nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('guarda de desativacao da rota')
    return true;
  }
}
```

no modulo de rotas e necessario declarar as o guarda rotas `CanDeactivate` no atributo `canDeactivate`

```typescript
// ...demais imports
import { AlunosDeactivateGuard } from './_06-rotas/guards/alunos-deactivate.guard';

const APP_ROUTES: Routes = [
  
  // ...demais rotas

  {
    path: 'alunos',
    loadChildren: () =>
      import('./_06-rotas/rotas/alunos/alunos.module').
      then(mod => mod.AlunosModule),
      canActivate: [AuthGuard],
      canActivateChild: [AlunosGuard],
      canDeactivate: [AlunosDeactivateGuard]
  }
]

// ... decorator ngModule
// ... assinatura da classe
```

note que o console ira exibir a mensagem passada como argumeto para o metodo `log` apenas ao sair da rota.

<p align="center">
    <img src="img/guarda-rotas-candeactivate.gif"><br>
    guarda rotas CanDeactivate.
</p>

