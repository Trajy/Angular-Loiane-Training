import { ComumService } from './../../comum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.css'],
})
export class ReceberCursoComponent implements OnInit {

  curso: string = ""

  constructor(private comumService: ComumService) { }

  ngOnInit(): void {
    this.comumService.emitirCursoCriado.subscribe(
      curso => this.curso = curso
    )
  }

}
