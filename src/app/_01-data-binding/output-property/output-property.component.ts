import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  /* similar a input-property e possivel declarar a(s) output-property por meio de um meta-dado
     basta declarar outputs: [mudou] ou outputs: [mudou: eventMudanca] para expor o evento com um nome diferente da variavel declarada no component
     caso mais de uma output-property necessite ser exportada basta separalas por virgula no escopo do meta-dado outputs
     outputs: [var1, var2, ...] ou outputs: [var1: nome1, var2: nome2, ...] */
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0 // declaracao da variavel valor como uma propriedade do compoenente <app-contador>
  @Output() mudou = new EventEmitter() // este decorator exporta o evento para fora component

  //view-child exemple (deu erro por algum motivo desconhecido, tentar resolver depois)
  //@ViewChild('referenciaCampoInputViewChild') campoValorInput = new HTMLElement; // declaramos como HTMLElement para descobrir o tipo do elemento atraves do console, para acessar prorpriedades mais especificas do elemento, e necessario realizar a declaracao correta, vide o arquivo markdown view-child.md
  // @ViewChild('referenciaCampoInputViewChild') campoValorInputComTipoCorreto = 

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valor++
    this.mudou.emit({novoValor: this.valor}) // e possivel passar informacoes primitivas como uma string ('exemplo de string') ou number (10), como tambem e possivel passar objetos complexos ({nome: 'fulano', idade: 20}) 
    
    // para verificar a saida do view-child vamos utilizar o console.log
    //console.log('saida com HTMLElement Generico: ' + this.campoValorInput)
    //console.log('saida com ... elemento correto apos descober: ' + )

  }

  decrementa(){
    this.valor--
    this.mudou.emit({novoValor: this.valor})

    // para verificar a saida do view-child vamos utilizar o console.log de forma similar ao metodo incrementa()
    //console.log('saida com HTMLElement Generico: ' + this.campoValorInput)
    //console.log('saida com ... elemento correto apos descober: ' + )
  }

}
