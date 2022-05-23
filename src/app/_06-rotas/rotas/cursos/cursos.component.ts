import { CursosServiceService } from './cursos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosRotasComponent implements OnInit {

  cursos: any

  constructor(private _service: CursosServiceService) {

  }

  ngOnInit(): void {
    this.cursos = this._service.getCursos()
  }

}
