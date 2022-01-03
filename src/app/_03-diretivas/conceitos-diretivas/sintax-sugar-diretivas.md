# sintax sugar * e tag template

Utilizar o * (asterisco), no inicio das declaracoes das diretivas e um sintax sugar (forma reduzida de um trecho de codigo), deste modo o processo de codificacao torna-se mais eficiente.

## ngIf

Vamos tomar como exemplo a diretiva ngIf, como costuma-se implementar

```HTML
<div *ngIf="mostrarCursos">
    Lista de cursos aqui.
</div>
```
entretando a estrutura na integra deste trecho utiliza a tag template e o property binding da respectiva diretiva (neste exemplo o ngIf) e em seu interior o conteudo que sera renderizado pela diretiva.

```HTML
<template [ngIf]="mostrarCursos">
    <div>
        Lista de cursos aqui.
    </div>
</template>
```

Alem das formas anteriores existe o atributo template que pode ser utilizado nas tags

```HTML
<div template="ngIf mostarCursos">
    Lista de cursos aqui.
</div>
```
## ngFor
Similar a diretiva anterior a declaracao utilizando * esta exemplificada a seguir

```HTML
<ul>
    <li *ngFor="let curso of cursos">
        {{ curso }}
    </li>
</ul>
```

utilizando a tag template

```HTML
<ul>
    <template ngFor [nfForOf]="cursos" let-curso let-i="index"> 
        <li>
            {{ i }} - {{ curso }}
        </li>
    </template>
</ul>
```

## ngSwitch

Vamos tomar o exemplo a seguir para o ngSwitch

```HTML
<div class="container" [ngSwitch]="abaSelecionada">
  <p *ngSwitchDefault>
    Tu ta na home
  </p>
  <p *ngSwitchCase="'link'">
    Tu ta na Link
  </p>
  <p *ngSwitchCase="'link 2'">
    Tu ta na Link 2
  </p>
</div>
```

note que para a tag div nao e utilizado o * antes de ngSwitch, pois ja esta na forma de property binding, entao apenas o ngSwitchCase e ngSwitchDefault estao na forma resumida (sintax sugar), na integra teremos.

```HTML
<div class="container" [ngSwitch]="abaSelecionada">
    <template [ngSwitchCase]="'home'" ngSwitchDefault>  
        <p>
            Tu ta na home
        </p>
    </template>
    <template [ngSwitchCase]="'link'">
        <p>
            Tu ta na Link
        </p>
    </template>
    <template [ngSwitch]="'link 2'">
        <p>
            Tu ta na Link 2
        </p>
    </template>
</div>
```
observe que para o caso default e possivel utlizar ngSwitchCase e ngSwitchDefault na mesma tag.