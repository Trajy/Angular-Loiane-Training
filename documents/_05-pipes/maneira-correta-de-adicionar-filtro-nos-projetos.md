# __MANEIRA CORRETA DE ADICIONAR FILTRO NOS PROJETOS__

Como visto em [CRIANDO PIPES PUROS](criando-pipe-puro.md) e [CRIANDO PIPES IMPUROS](criando-pipe-impuro.md) os exemplos sao apenas para fins de aprendizado, em producao funcionalidades para filtrar arrays ou reorganizar elementos devem ser implementadas no codigo de _components_ ou _services_ por exemplo.

vamos tomar o mesmo exemplo, porem iremos implementar o filtro de livros diretamente no _component_, utilizando a mesma implementacao no pipe alterando apenas as referencias as variaveis para o escopo do _component_ no metodo `filtrarLivros()`.

___component:___

```typescript
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

  // medoto que recebe a logica para filtrar
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
```

___template_ do _component_:__

```HTML
<div>
    <h3>Maneira correta de adicionar filtro nos projetos</h3>
    <div>
        <input #inputLivro>
        <button (click)="addLivro(inputLivro.value)">Adicionar Livro</button>
    </div>
    <div>
        <input [(ngModel)]="filtro">
    </div>
    <ul> <!-- ngFor chama o metodo que retorna os cursos filtrados -->
        <li *ngFor="let livro of filtrarCursos()">
            - {{ livro }}
        </li>
    </ul>

</div>
```

O comportamento sera o mesmo do pipe impuro.

