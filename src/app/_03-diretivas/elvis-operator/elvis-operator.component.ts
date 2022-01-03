import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {

  tarefa:any = {
    desc: 'Descricao da tarefa',
    resposavel: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
