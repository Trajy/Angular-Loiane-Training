import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'; // import da classe de servicos

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

// dentro das classes e feita a implementacao do codigo java script para tornar o comportamento da applicacao mais dinamico
export class CursosComponent implements OnInit {

  nomePortal: string // variavel para armazenar a url do site como exemplo para interpolacao no HTML

  cursos: string[] = ["Java", "Angular", "Spring"] // array de strings para exemplificar a diretiva ngFor do angular
  cursosService: string[] // variavel para armazenar os dados retornados do servico injetado no construtor

  constructor(private servico: CursosService) { // injecao de dependencia do angular para mais detalhes vide o arquivo em /conceitos-utilizados-no-projeto/injecao-dependencia.md
    this.nomePortal = "http://loiane.training"; // inicializacao da variavel
    this.cursosService = servico.getCursos()
  }

  ngOnInit(): void {
  }

}
