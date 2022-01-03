import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loiane.training/'
  cursoAngular: boolean = true

  urlImagem: string = 'http://lorempixel.com.br/500/400/?1'

  valorAtualCampoInput: string = ''
  valorSalvoCampoInput: string = ''

  isMouseOver: boolean = false

  nome: string = 'abc'

  // declaracao de um objeto
  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso = 'Angular' // input properties, queremos passar a variavel nomeDoCurso para InputPropertyComponent (<app-curso>)
  nomeDoSegundoCurso = 'JavaScript'
  // como estamos utilizando ECMAScript 2015 nesta classe e o typeScrip nao e necessario inserir "function" antes do nome do metodo
  getValor(){
    return 3
  }

  getNaoCurtirCurso(){
    return false
  }

  botaoClicado(){
    alert('botao clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
    // para verificar as propriedades do evento basta acessar o console no navegador
    console.log(evento) //deste modo ira passar o objeto KeyboardEvent inteiro
    console.log('last key: ' + evento.key + '\nnew value: ' + (<HTMLInputElement>evento.target).value) 
    // note que para recuperar o valor da propriedade value de input e necessario utilizar a interface <HTMLInputElement>, pois evento.target e uma propiedade do tipo HTMLInputEvent

    // vamos aramazenar o conteudo do input em uma variavel e exibir no template (HTML) por meio de interpolacao
    this.valorAtualCampoInput = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string){
    this.valorSalvoCampoInput = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  // evento que recebe a saida do output-property do component
  onMudouValor(evento: any){
    console.log(evento) // desta forma o objeto inteiro sera mostrado no console
    console.log(evento.novoValor) // desta forma apenas o valor sera passado ao console
  }

  constructor() { }

  ngOnInit(): void {
  }

}
