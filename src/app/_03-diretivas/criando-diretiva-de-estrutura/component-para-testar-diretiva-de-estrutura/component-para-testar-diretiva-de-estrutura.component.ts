import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-para-testar-diretiva-de-estrutura',
  templateUrl: './component-para-testar-diretiva-de-estrutura.component.html',
  styleUrls: ['./component-para-testar-diretiva-de-estrutura.component.css']
})
export class ComponentParaTestarDiretivaDeEstruturaComponent implements OnInit {

  mostrarCursos: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  mudarMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }

}


