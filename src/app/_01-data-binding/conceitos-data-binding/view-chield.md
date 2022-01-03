# View Child
utilizando o decorator view child e possivel associar elementos HTML a uma variavel no component. Como visto em exemplos anteriores e possivel criar uma referencia a um elemento utilizando #nomeReferencia. Conforme o exemplo a seguir.

```HTML
<input #referenciaInput>
```
Para receber o elemento no component basta utilizar o decorator.

```typescript
@ViewChild('referenciaInput') campoValorInput: HTMLElment
```
note que o decorator recebe o nome da referencia como argumento, para relacionar o elemento a variavel.

nao esquece de declarar o tipo de objeto correto, e importar ViewChiel do pacote angular core.
```typescript
import {  } from '@angular/core'
```

Neste exemplo foi utilizado o tipo HTMLElement pois e possivel descobrir o tipo correto utilizando outros tipos. Verificando o console do navegador, nota-se que o objeto e do tipo ElementRef. 
![consele]()
Declarando o tipo correto e possivel acessar os atributos desejados.