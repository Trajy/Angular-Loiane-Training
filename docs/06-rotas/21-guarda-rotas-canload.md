# Guarda Rotas: Can Load

Este guarda rotas permite apenas o download dos arquivos fonte do codigo apos a verificacao do guarda rotas, os demais guarda rotas permitem o download do codigo mesmo que nao haja permissao para acessar deteminada rota.

Iremos aproveitar o codigo desenvolvido no documento [Guarda Rotas: CanActivate](./16-guarda-rotas-canactivate.md) e implementar o metodo `canLoad` da interface `CanLoad`

Iremos utilizar a mesma implementacao utilizada no metodo `canActivate`

```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../rotas/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.verificarUsuarioLogado()
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.verificarUsuarioLogado()
  }

  verificarUsuarioLogado() {
    console.log('verificando permissao de login do usuario');

    if(this._authService.usuarioAutenticado) {
      //console.log('guarda rotas pai')
      return true
    }
    this._router.navigate(['/login'])
    return false
  }
}
```

Observe que o codigo implementado anteriormente gera o log duplicado, pois primeiro e exercutada a verificacao se o arquivo pode ser carregado pelo `CanLoad` e posteriormente se o usuario pode acessar a rota pelo `CanActivate`

<p align="center">
    
<img src="img/guarda-rotas-canload.gif"><br>
    guarda rotas Resolve.
</p>
