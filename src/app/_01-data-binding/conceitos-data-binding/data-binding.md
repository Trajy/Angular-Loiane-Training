# DATA BINDING
data binding e a maneira como sao associadas as informacoes que estao no template com o componente ou o inverso um elemento do componente e associado ao template.

Existem 4 formas porem os sentidos da troca de informacoes varia.

Nome | Sintax | Direcao
-----|--------|--------
interpolacao (Interpolation) | {{ nomeDaVariavelNoComponente }} | Component --> Template
Propriety Bindind | [propriedade] = "valor" | Component --> Template
Event Binding | (evento) = "hendler" | Tremplate --> Component
Two Way Data Biding | [(ngModel)] = "propriedade" | Component <--> Template

## Input Properties
quando exite a necessidade de realizar transferencia de dados no sentido Template -> Component e possivel utilizar o Input property, que consiste em um decorator, declarado antes da variavel na qual o dado recebido no template ira armazenar o valor, o nome da propriedade exposta varia de acordo com a forma declarada.
```typescript
@Input() nomeVariavel: tipoVariavel
```
da forma acima a propriedade sera exposta com o nome "nomeVariaval" e pode ser acessada por meio das property binding.
```HTML
<exemplo-component [nomeVariavel]="valorRecebido">
```
A propriedade tambem pode ser exposta com nome diferente ao declarado na variavel, basta adcionar o nome como argumento ao decorator.

```typescript
@Input("nomeExposto") nomeVariavel: tipoVariavel
```
para passar um valor para a variavel nomeVariavel, a declaracao deve ser feita no template conforme o exemplo.

```HTML
<exemplo-component [nomeExposto]="valorRecebido">
```
em ambos os casos o valorRecebodo sera armazenado em nomeVariavel.

nao esqueca de importar a interface Input do pacote angular core.

```typescript
import { OnInit } from '@angular/core';
```
outra forma nao usual de expor variaveis dos componentes como propriedades dos elementos HTML e por meio do metadado "inputs" que pode ser declarado no decorator @Component no inicio da classe.

```typescript
Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs:[nomeVariavel, nomeVariavel: nomeExposto] // nao usual
})
```
podem ser declarados como elementos do array inputs, e os exemplos para expor a propriedade com o nome da variavel e com um nome diferente, conforme o apresentado.

## Output properties
Similar as Input properties, porem o sentido da transferencia dos dados ocorre do component -> template. o exemplo a seguir mostra como declarar utilizando o decorator, no exemplo a seguir um evento e externalizado

```typescript
@Output() nomeVariavel: tipoVariavel = new EventEmitter()
```
e possivel retornar o valor de nomeVariavel atraves do event binding, conforme o exemplo.

```HTML
<exemplo-component (nomeVariavel)="exemploMetodo($event)">
```
conforme o exemplo em input property para expor a variavel nomeVariavel com um nome diferente basta passar como argumento ao decorator.

```typescript
@Output("nomeExposto") nomeVariavel: tipoVariavel = new EventEmitter()
```

e para acessar o valor no template HTML.

```HTML
<exemplo-component (nomeExposto)="exemploMetodo($event)">
```
outra forma de declarar as variaveis expostas e por meio do meta-dado outputs, declarado no decorator @Component.
```typescript
Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  outputs:[nomeVariavel, nomeVariavel: nomeExposto] // nao usual
})
```
e seguem a mesma logica do meta-dado inputs.

para exemplos de implementacao mais completos vide os compoenents: data-binding, input-property, output-property.