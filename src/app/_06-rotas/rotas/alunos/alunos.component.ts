import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: any[]

  constructor(private _service: AlunosService) { 
    this.alunos = _service.getAlunos()
  }

  ngOnInit(): void {
  }

}
