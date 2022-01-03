import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.css']
})
export class DiretivaNgIfComponent implements OnInit {

  cursos: string[] = ['java']
  mostrarCursos: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  mudarMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }

}
