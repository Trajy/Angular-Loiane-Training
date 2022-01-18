import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criando-um-pipe',
  templateUrl: './criando-um-pipe.component.html',
  styleUrls: ['./criando-um-pipe.component.css']
})
export class CriandoUmPipeComponent implements OnInit {

  livro: any = {
    titulo: 'Typescript Gerando O Javascript Do Futuro',
    numeroPaginas: 288,
    rating: 4.678567,
    dataLancamento: new Date(2021, 4, 3),
    preco: 71.77
  }

  constructor() { }

  ngOnInit(): void {
  }

}
