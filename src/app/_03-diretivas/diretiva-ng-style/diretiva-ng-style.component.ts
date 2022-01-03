import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.css']
})
export class DiretivaNgStyleComponent implements OnInit {

  ativa: boolean = false
  tamanhoFonte: number = 10

  constructor() { }

  ngOnInit(): void {
  }

  onMudarAtivo(){
    this.ativa = !this.ativa
  }

}
