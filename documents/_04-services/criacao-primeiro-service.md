# Criacao do primeiro service.

Vamos tomar o exemplo onde desejamos exibir uma lista de itens, neste caso uma lista de cursos. vamos criar um component que ira renderizar a nossa lista.

<p align="center">
    <img src="img/lista-cursos-exemplo.png"><br>
    figura 1 - Exemplo de lista de cursos
</p>

#
## Implementacao sem a classe service

Template
```HTML
<h4> criacao do primeiro service<h4>
<br>
<h5>Lista de cursos</h5>
<ul>
    <li *ngFor="let curso of cursos">
        {{ curso }}
    </li>
</ul>
```

Component
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // lista de cursos a serem exibidos.
  cursos: string[] = ['angular', 'nodeJs', 'phonegap']

  constructor() { }

  ngOnInit(): void {
  }

}
```
note que a lista de cursos em nosso exemplo esta declarada diretamente no codigo (hard coded) do component, mas no cotidiano estes dados sao variaveis resgatadas de outros locais (servidor, back-end), e para realizar essa tarefa o ideal para manter uma arquitetura de software organizada e utilizar uma classe service. Para simplificar o exemplo vamos implementar um metodo "getCursos()" no qual retorna um array contendo os nomes dos cursos, metodos Http serao vistos em outro modulo.

## Implementacao com classe service

```typescript
export class PrimeiroService {

    constructor(){

    }

    getCursos(){
        return ['angular 2', 'Java', 'NodeJs']
    }
}
```
esta e uma classe simples que utiliza apenas codigo javascript (ECMAScript2015).<br>
Vamos implementar a classe service no component, para isso devemos ter uma instancia da classe PrimeiroService na classe CursosComponent.

```typescript
import { Component, OnInit } from '@angular/core';

// import da class PrimeiroService
import { PrimeiroService } from '../../primeiro-service/primeiro-service.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // lista de cursos a serem exibidos.
  cursos: string[] = []

  // variavel do tipo PrimeiroService para guardar a instancia
  cursosService: PrimeiroService

  // construtor instancia um objeto PrimeiroService
  constructor() {
      this.cursosService = new PrimeiroService()
  }
 
  // ngOnInit() armazena os valores dos cursos recuperados pelo metodo getCursos() da classe PrimeiroService na variavel cursos do CursosComponent.
  ngOnInit(): void {
      this.cursos = cursosService.getCursos()
  }

}
```
o resultado sera o mesmo do primeiro exemplo, porem os dados sao obtidos por  meio da classe service.

#
## Problema comum
Vamos estenter nosso exemplo para o caso onde a assinatura do construtor da classe service PrimeiroService possui um parametro, conforme o exemplo a seguir.

```typescript
export class PrimeiroService {

    constructor(private http: Http2Server){
        
    }

    getCursos(){
        return ['angular 2', 'Java', 'NodeJs']
    }
}
```
para instanciar a classe PrimeiroService sera necessario fornecer ao construtor um objeto do tipo Http2Server como argumento.

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

  // variavel com objeto Http2Server para instanciar a classe PrimeiroService
  httpServer: Http2Server = new Http2Server()

  constructor() {
      // o construtor precisa receber como argumento um objeto do tipo Http2Server
      this.cursosService = new PrimeiroService(httpServer)
  }
 
  ngOnInit(): void {
      this.cursos = cursosService.getCursos()
  }

}
```

 podemos extender este exemplo para o caso onde o objeto Http2Server necessite receber um objeto do tipo HTMLElement, e assim por diante, aumentando a quantidade de dependencias entre as classes. ficaria muito complexo pois havera a necessidade de fornecer cada dependencia a sua assinatura correspondente, para resolver este problema os services do angular podem ser injetados, aplicando o conceito de [injecao de dependencia](services-com-injecao-de-dependencia.md).



