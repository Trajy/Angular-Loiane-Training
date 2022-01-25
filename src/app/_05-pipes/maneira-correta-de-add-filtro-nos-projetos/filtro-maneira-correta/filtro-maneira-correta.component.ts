import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-maneira-correta',
  templateUrl: './filtro-maneira-correta.component.html',
  styleUrls: ['./filtro-maneira-correta.component.css']
})
export class FiltroManeiraCorretaComponent implements OnInit {

  livros: string[] = ['Angular', 'Java']

  filtro: any

  constructor() { }

  ngOnInit(): void {
  }

  addLivro(novoLivro: string){
    this.livros.push(novoLivro)
    console.log(this.livros)
  }

  filtrarCursos(){
    if(this.livros.length == 0 || this.filtro == undefined || this.filtro == ''){
      return this.livros
    }
    
    let filro = this.filtro.toLocaleString().toLocaleLowerCase()
    
    return this.livros.filter(
      (elementoASerComparado: string) => elementoASerComparado.toLocaleLowerCase().includes(this.filtro)
    );
  }

}
