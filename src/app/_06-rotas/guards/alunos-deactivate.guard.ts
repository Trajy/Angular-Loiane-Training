import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IComponentsDeactivate } from './../general-interfaces/i-components-deactivate';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IComponentsDeactivate> {

  canDeactivate(_component: IComponentsDeactivate, _currentRoute: ActivatedRouteSnapshot, _currentState: RouterStateSnapshot, _nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //console.log('guarda de desativacao da rota')
    return _component.podeDesativar
  }
}
