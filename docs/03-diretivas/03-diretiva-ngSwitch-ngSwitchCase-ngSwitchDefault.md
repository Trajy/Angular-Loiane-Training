# Diretivas ngSwitch, ngSwitchCase e ngSwitchDefault
A diretiva ngSwitch funciona de forma tradicional como vemos nas linguagens de programacao, conforme o exemplo abaixo.
```typescript
var viewMode = 'mapa'

switch(viewMode){
    case 'mapa': // alguma logica
        break;
    case 'lista': // outra logica
        break;
    default: // logica padrao (sera executada caso nenhuma condicao seja atendida)
}
```
A seguir temos um exemplo com complexidade maior do que os codigos abordados ate o momento. utilizando o framework de css Bootstrap para obter uma aparencia mais amigavel para o usuario no exemplo a seguir, no codigo HTML temos um menu com as opcoes e em seguida uma tag div na qual o conteudo e exibido de acordo com a opcao selecionada no menu.
```HTML
<nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Always expand</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" 
              [class.active]="abaSelecionada == 'home'"
              (click)="abaSelecionada = 'home'">
                Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" 
              [class.active]="abaSelecionada == 'link'"
              (click)="abaSelecionada = 'link'">
                Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" 
              [class.active]="abaSelecionada == 'link 2'"
              (click)="abaSelecionada = 'link 2'">
                Link 2
            </a>
          </li>
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>

<div class="container" [ngSwitch]="abaSelecionada">
  <p *ngSwitchCase="'link'">
    Tu ta na Link
  </p>
  <p *ngSwitchCase="'link 2'">
    Tu ta na Link 2
  </p>
  <p *ngSwitchDefault>
    Tu ta na home
  </p>
</div>
```

no arquivo typescript do component foi declarada uma variavel com o nome abaSelecionada que ira armazenar uma string com um valor de acordo com o elemento selecionado no menu.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-switch',
  templateUrl: './diretiva-ng-switch.component.html',
  styleUrls: ['./diretiva-ng-switch.component.css']
})
export class DiretivaNgSwitchComponent implements OnInit {

  abaSelecionada: string = 'home' //variavel para armazenar a opcao no menu

  constructor() { }

  ngOnInit(): void {
  }

}
```

vamos analisar as partes relevantes deste trecho de codigo para a diretiva ngSwitch, iniciando pelas opcoes da lista, onde para cada elemento temos um property binding responsavel por atribuir a class active (contida no bootstrap), a respectiva opcao selecionada, e um event binding responsavel por atribuir o valor da aba selecionada a variavel abaSelecionada do codigo typescript.

```HTML
<li class="nav-item">
    <a class="nav-link active" aria-current="page" 
        [class.active]="abaSelecionada == 'home'"
        (click)="abaSelecionada = 'home'">
            Home
    </a>
</li>
<li class="nav-item">
    <a class="nav-link" 
        [class.active]="abaSelecionada == 'link'"
        (click)="abaSelecionada = 'link'">
            Link
    </a>
</li>
<li class="nav-item">
    <a class="nav-link" 
        [class.active]="abaSelecionada == 'link 2'"
        (click)="abaSelecionada = 'link 2'">
            Link 2
    </a>
</li>
```
e a segunada parte relevante e a tag div onde efetivamente a diretiva ngSwitch e utilizada.

```HTML
<div class="container" [ngSwitch]="abaSelecionada">
  <p *ngSwitchCase="'link'">
    Tu ta na Link
  </p>
  <p *ngSwitchCase="'link 2'">
    Tu ta na Link 2
  </p>
  <p *ngSwitchDefault>
    Tu ta na home
  </p>
</div>
```
observe que fazemos property binding com a propriedade ngSwitch, que ira receber o valor da variavel abaSelecionada (declarada no codigo typescript do compoenent), e para cada item da lista temos a diretiva ngSwitchCase com o valor a ser comparado e para o caso default ngSwitchDefault que sera a executa no caso de nenhuma correspondencia.