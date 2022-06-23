import { Router } from '@angular/router';
import { Usuario } from './usuario.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false
  mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  autenticar(usuario: Usuario): void {
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '1234') {
      this.usuarioAutenticado = true
      this.mostrarMenuEmitter.emit(true)
      this.router.navigate(['/'])
      return
    }
    this.mostrarMenuEmitter.emit(false)
    this.usuarioAutenticado = false
  }
}
