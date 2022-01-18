import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usando-pipes-parametros-e-pipes-aninhados',
  templateUrl: './usando-pipes-parametros-e-pipes-aninhados.component.html',
  styleUrls: ['./usando-pipes-parametros-e-pipes-aninhados.component.css']
})
export class UsandoPipesParametrosEPipesAninhadosComponent implements OnInit {

  livro: any = {
    titulo: 'Typescript – Gerando O Javascript Do Futuro',
    numeroPaginas: 288,
    rating: 4.678567,
    dataLancamento: new Date(2021, 4, 3),
    preco: 71.77
  }

  constructor() { }

  ngOnInit(): void {
  }
}
