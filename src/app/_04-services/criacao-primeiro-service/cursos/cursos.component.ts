import { Component, OnInit } from '@angular/core';

import { PrimeiroService } from '../../primeiro-service/primeiro-service.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = []

  constructor(private cursosService: PrimeiroService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

}
