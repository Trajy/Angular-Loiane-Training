import { AuthService } from './_06-rotas/rotas/login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto01';

  valorParaOCicloDeVida: number = 5 //variavel com valor passado ao app-ciclo-de-vida por meio do template app.component.html
  deletarCiclo: boolean = false

  mostrarMenu: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe((mostrar => {
      this.mostrarMenu = mostrar
      //console.log(mostrar)
    }))
  }

  mudarValor(){
    this.valorParaOCicloDeVida++
  }

  destruirCiclo(){
    this.deletarCiclo = true
  }
}
