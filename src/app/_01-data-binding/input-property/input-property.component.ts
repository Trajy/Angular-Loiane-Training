import { Component, Input, OnInit } from '@angular/core'; //import Input from angular core

@Component({
  selector: 'app-curso', //original selector 'app-input-property'
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  /* existe tambem outra forma nao usual de declarar as properties (propriedades), que queremos expor atraves do meta-dado inputs
     que e um array.
     inputs:[nome] para expor a variavel nome como propriedade nome deste component
     inputs [nome: nomeCurso] para expor a variavel nome como a propriedade nomeCurso neste component*/
})
export class InputPropertyComponent implements OnInit {

  @Input() nome: string = '' /* o decorator @input() ira expor a propriedade nome para o selector <app-curso> no HTML 
                                caso a propriedade possua um nome diferente da variavel basta declarar declarar da
                                seguinte forma @Input('nome-da-propriedade') nomeDaVariavel = '' */

  constructor() { }

  ngOnInit(): void {
  }

}
