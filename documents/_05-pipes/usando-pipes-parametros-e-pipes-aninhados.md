# __USANDO PIPES, PARAMETROS E PIPES ANINHADOS__

pipes sao filtros para realizar a formatacao de dados nos _templates_, existem diversos casos, vamos tomar alguns exemplos. para mais informacoes sobre pipes nativos do `Angular` consulte [angular commom packge](https://angular.io/api/common) na secao pipes.

vamos criar uma classe que contem um objeto livro que contem alguns atributos como, titulo, numero de paginas, rating, data de lancamento, preco, e aplicar alguns pipes para exibir o conteudo. 

___component___:
```typescript
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
```

___template_ do _component___
```HTML
<p>Exemplos de Pipes</p>
<p>Titulo: {{ livro.titulo | uppercase}}</p>
<p>Numero de Paginas: {{ livro.numeroPaginas | number}}</p>
<p>Classificacao: {{ livro.rating | number:'1.1-1'}}</p>
<p>Data de lancamento: {{ livro.dataLancamento | date:'dd/MM/yyyy' }}</p>
<p>Preco {{ livro.preco | currency:'BRL':true}}</p>
```

<p align="center">
    <img src="img/usando-pipes.png"><br>
    figura 1 - aplicacao de pipes no template
</p>



