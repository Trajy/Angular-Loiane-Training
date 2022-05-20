# Diretiva de estrutura (Realiza alteracoes no DOM) customizada

como visto anteriormente o angular possui diversas diretivas as quais possuem o comportamento de estruturas comuns em diversas linguagens de programacao como exemplo ngIf e ngFor, entretando nao possui uma diretiva que possua o comportamento da estrutura else, tambem presente em diversas linguagens de programacao, para exemplicar a criacao de diretivas que alteram o DOM (estrutura do template) iremos criar uma diretiva chamada ngElse. Vamos utilizar um template com ngIf e implementar ngElse como complemento.

Template com ngIf sem alteracoes.
```HTML
<div *ngIf="mostrarCursos">
    Lista de cursos
</div>
<div *ngIf="!mostrarCursos">
    Nao existem cursos na lista
</div>
<button (click)="mudarMostrarCursos()">Mostar/Ocultar lista de cursos</button>
```
vamos analisar o exemplo acima em sua forma desestruturada, ou seja sem utilizar o sintax sugar *

```HTML
<template [ngIf]="mostrarCursos">
    <div>
        Lista de cursos
    </div>
</template>
```
note que ngIf nao e um atributo da tag template e sim um atributo da diretiva ngIf, logo pode ser declarado apenas como o propertyBinding, pois a inteligencia do angular detecta que o atributo e o selector da diretiva possuem o mesmo nome tornando possivel a declaracao apenas da propertyBinding. Essa analise e importante pois sera utilizado o inputProperty para receber o valor da expressao passada no template para a diretiva ngElse. Para implementar a diretiva estrutural e necessario utilizar outras classes do packege angular core, sao elas TemplateRef, que ira fazer referencia a tag template (lembre que estamos analisando a forma desestruturada da diretiva), e ViewContainerRef que ira fazer referencia ao container da view. Lembrando que para receber os valores do template e da view sera por meio de injecao de dependencia.

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

// a diretiva ngElse nao existe no angular, entao vamos criar uma
@Directive({
  selector: '[ngElse]'
})
export class DiretivaDeEstruturaDirective {

  @Input() set ngElse(condition: boolean) {
    if(!condition){ // como estamos trabalhando com ngElse, queremos o caso em que a condicao e negada
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    }
    else{
      this._viewContainerRef.clear()
    }

  }

  constructor(
    private _templateRef: TemplateRef<any>, 
    private _viewContainerRef: ViewContainerRef
  ) { 

  }

}
```
para renderizar o conteudo de acordo com a expressao iremos utilizar o metodo createEmbeddedView() resposavel por renderizar a view embutida no template, recebe como parametro a referencia do template. e para o caso else (caso a condicao seja verdadeira), entao utilizatemos o metodo clear() e ira destruir a view.

aplicando a diretiva criada no template.

```HTML
<template [ngIf]="mostrarCursos">
    <div>
        Lista de cursos
    </div>
</template>

<!-- note que mostrarCursos nao possui negacao "!" em sua declaracao -->
<template [ngElse]="mostrarCursos">
    <div>
        Nao existem cursos na lista
    </div>
</template>
<button (click)="mudarMostrarCursos()">Mostar/Ocultar lista de cursos</button>
```

tambem pode ser utilizado o sintax sugar com a diretiva estrutural criada.

```HTML
<div *ngIf="mostrarCursos">
    Lista de cursos
</div>
<div *ngElse="mostrarCursos">
    Nao existem cursos na lista
</div>
<button (click)="mudarMostrarCursos()">Mostar/Ocultar lista de cursos</button>
```
A [diretiva ngIf](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_if.ts) pode ser consultada no [repositorio oficial do Angular](https://github.com/angular)

