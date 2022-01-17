import { Component, OnInit } from '@angular/core';

import { ComumService } from './../comum.service';

@Component({
  selector: 'app-component-comunicacao-a',
  templateUrl: './component-comunicacao-a.component.html',
  styleUrls: ['./component-comunicacao-a.component.css'],
  providers: [ComumService]
})
export class ComponentComunicacaoAComponent implements OnInit {

  cursos: string[] = []

  constructor(private comumService: ComumService) { }

  ngOnInit(): void {
    this.cursos = this.comumService.getCursos()

    // meotodo chamado quando ha alteracoes na classe ComunService
   ComumService.emitirCursoCriadoEstatico.subscribe(
      curso => this.cursos.push(curso)
    )
  }

  onSalvarCurso(curso: string){
    this.comumService.addCurso(curso)
  }
}
