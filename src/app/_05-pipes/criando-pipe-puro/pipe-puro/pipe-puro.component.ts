import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-puro',
  templateUrl: './pipe-puro.component.html',
  styleUrls: ['./pipe-puro.component.css']
})
export class PipePuroComponent implements OnInit {

  livros: string[] = ['Angular', 'Java']

  filtro: any

  constructor() { }

  ngOnInit(): void {
  }

  addLivro(novoLivro: string){
    this.livros.push(novoLivro)
    console.log(this.livros)
  }

}
