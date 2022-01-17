import { Component, OnInit } from '@angular/core';

import { ComumService } from './../comum.service';

@Component({
  selector: 'app-component-comunicacao-b',
  templateUrl: './component-comunicacao-b.component.html',
  styleUrls: ['./component-comunicacao-b.component.css'],
  providers: [ComumService]
})
export class ComponentComunicacaoBComponent implements OnInit {

  cursos: string[] = []

  constructor(private comumService: ComumService) { }

  ngOnInit(): void {
    this.cursos = this.comumService.getCursos()
    

    ComumService.emitirCursoCriadoEstatico.subscribe(
      cursoCriado => this.cursos.push(cursoCriado)
    )
  }

  onSalvarCurso(curso: string){
    this.comumService.addCurso(curso)
  }

}
