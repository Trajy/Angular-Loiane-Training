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

  mudarValor(){
    this.valorParaOCicloDeVida++
  }

  destruirCiclo(){
    this.deletarCiclo = true
  }
}
