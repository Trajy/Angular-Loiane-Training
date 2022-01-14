import { Component, OnInit } from '@angular/core';

import { ServiceSingletonService } from '../service-singleton.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
  providers: [ServiceSingletonService]
})
export class ComponentBComponent implements OnInit {
  
  cursos: string[] = []

  constructor(private cursosService: ServiceSingletonService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }
}
