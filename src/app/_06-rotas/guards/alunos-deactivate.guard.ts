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
