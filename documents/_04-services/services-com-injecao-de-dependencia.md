# Services com Injecao de Dependencia

## Dependencia

rotomando o conceito de depencendia, neste caso dependencia de classes, quando uma classe A precisa de uma instancia de outra classe B para funcionar corretamente, logo a classe A possui dependencia da classe B.

<p algn="center">
    <img src="img/dependencia-entre-classes-exemplo.png"><br>
    figura 1 - dependencia entre classes.
</p>

#
## Injecao de dependencia (DI, Dependency Injection)

A injecao de dependencia ira criar uma instancia da classe B na classe A automaticamente, nao sendo necessaria instanciar explicitamente no codigo.

<p>
    <img src="img/injecao-de-dependencia-exemplo.png"><br>
    figura 2 - Injecao de dependencia
</p>

Existem 3 formas de realizar a injecao de dependencia, para mais detalhes consulte [introducao a injecao de dependencia](../_01-data-binding/injecao-dependencia.md).

no Angular 2 a injecao de dependencia e feita por meio de construtor, para exemplificar iremos utilizar o exemplo feito em [criacao do primeiro service](criacao-primeiro-service.md). O angular possui o decorator "@Injectable()" que possibilida ao angular criar uma instancia automatica por meio de construtor em outras classes (Injetar dependencia).

```typescript
import { Injectable } from '@angular/core'

@Injectable()
export class PrimeiroService {

    constructor(){

    }

    getCursos(){
        return ['angular 2', 'Java', 'NodeJs']
    }
}
```
Vamos injetar a dependencia na classe CursosComponent

```typescript
import { Component, OnInit } from '@angular/core';

import { PrimeiroService } from '../../primeiro-service/primeiro-service.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = []
  cursosService: PrimeiroService

  constructor(primeiroService: PrimeiroService) { 
    this.cursosService = primeiroService 
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

}
```
note que mantivemos a estrutura do exemplo sem injecao de dependencia, alterando apenas a atribuicao onde a variavel cursosService recebe o valor de primeiroService (Objeto Injetado Automaticamente). Entretando podemos utilizar o objeto injetado diretamente na classe, basta adicionar o modificador de acesso private para que a inteligencia do angular entenda que este e um atributo interno da classe.

```typescript
import { Component, OnInit } from '@angular/core';

import { PrimeiroService } from '../../primeiro-service/primeiro-service.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = []

  constructor(private cursosService: PrimeiroService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

}
```
