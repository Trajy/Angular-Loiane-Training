# Diretiva ngFor

a diretiva ngFor possui um comportamento similar ao laco for comum em muitas linguagens de programacao, realiza a iteracao de determinada logica, segue um exemplo de um laco for em typescrypt

```typescript
for(let i = 0; i < cursos.length; i++) {
    let curso = cursos[i]
}
```
para este exemplo iremos declarar uma variavel cursos no typescipt do nosso component ngFor.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.css']
})
export class DiretivaNgForComponent implements OnInit {

  // array com elementos para iterar com ngFor
  cursos: string[] = ['angular', 'java', 'phonegap']

  constructor() { }

  ngOnInit(): void {
  }

}
```
e em nosso template iremos declarar uma lista para exibir os elementos do array.

```HTML
<h5>Diretiva ngFor</h5>

<ul>
    <li *ngFor="let curso of cursos">
        {{ curso }}
    </li>
</ul>
```
deste modo serao exibidos todos os elementos do array na lista repetindo as tags li, tambem e possivel utilizar o indice da iteracao, conforme o exemplo a seguir.

```HTML
<h5>Diretiva ngFor</h5>

<ul>
    <li *ngFor="let curso of cursos, let i = index">
        {{ i + 1 }} - {{ curso }}
    </li>
</ul>
```
note que a primeira expressao esta separa por "of" pois esta relacionando a variavel curso a um atributo do component app-ngFor e a variavel i esta recebendo sua atribuicao por "=" pois e um atributo da diretiva ngFor.


