# Diretiva ngStyle

e possivel estilizar os elemetos html utilizando por meio de property binding, conforme o exemplo a seguir.

```HTML
<button
    [style.backgroundColor]="ativa ? 'blue' : 'gray'"
    [style.color]="ativa ? 'white':'black'"
    [style.fontWeigth]="ativa ? 'bold' : 'normal'"
    [style.fontSize]="tamanhoFonte + 'px'"
    (click)="onMudarAtivo()"
>
    Mutar atibuto 'ativo'
</button>
```

as variavels ativo e tamanhoFonte estao declaradas no typescript do component.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.css']
})
export class DiretivaNgStyleComponent implements OnInit {

  ativa: boolean = false
  tamanhoFonte: number = 10

  constructor() { }

  ngOnInit(): void {
  }

  onMudarAtivo(){
    this.ativa = !this.ativa
  }

}
```

porem para tornar o codigo mais limpo e organizado e possivel utilizar a diretiva ngClass

```HTML
<button
    [ngStyle]="{
        'backgroundColor': (ativa ? 'blue' : 'gray'),
        'color': (ativa ? 'white' : 'black'),
        'fontWeigth': (ativa ? 'bold' : 'normal'),
        'fontSize' : tamanhoFonte + 'px'
    }"
    (click)="onMudarAtivo()"
>
    Mutar atibuto 'ativo'
</button>
```

