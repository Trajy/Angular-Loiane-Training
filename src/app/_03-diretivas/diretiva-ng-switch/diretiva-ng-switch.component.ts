import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-switch',
  templateUrl: './diretiva-ng-switch.component.html',
  styleUrls: ['./diretiva-ng-switch.component.css']
})
export class DiretivaNgSwitchComponent implements OnInit {

  abaSelecionada: string = 'home'

  constructor() { }

  ngOnInit(): void {
  }

}
