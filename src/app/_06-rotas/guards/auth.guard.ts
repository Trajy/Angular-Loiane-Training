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
