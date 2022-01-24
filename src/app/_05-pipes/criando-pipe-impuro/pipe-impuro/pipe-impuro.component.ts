import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-impuro',
  templateUrl: './pipe-impuro.component.html',
  styleUrls: ['./pipe-impuro.component.css']
})
export class PipeImpuroComponent implements OnInit {

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
