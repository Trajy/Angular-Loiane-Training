import { Component, OnInit } from '@angular/core';

import { ServiceSingletonService } from '../service-singleton.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  providers: [ServiceSingletonService]
})
export class ComponentAComponent implements OnInit {

  cursos: string[] = []

  constructor(private cursosService: ServiceSingletonService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

}
