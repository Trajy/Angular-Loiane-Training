import { Usuario } from './usuario.model';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario()

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }

  fazerLogin(){
    this.auth.autenticar(this.usuario)
  }

}
