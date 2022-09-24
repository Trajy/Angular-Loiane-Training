# Controles: ngForm, ngSubmit, ngModel

Ao utilizar os formularios do tipo template-driven, na verdade o angular cria um formulario do tipo data-driven (form reativo) automaticamente (os formularios estao abstraidos pelo framework), para identificar o formulario utiliza-se uma variavel local no template - lembre que variaveis locais no template sao precedidas por `#` - passando como falor a diretiva ngForm. Um ponto importante a ser observado e se o `FormsModule` do angular core esta importado no respectivo modulo.
para receber os valores de cada campo do formulario utiliza-se o atributo `name` para nomear a chave do campo e a diretiva `ngModel` para obter os valores de cada campo.
Por fim como ja existe um botao com `type="submit"` basta apenas utilizar o event bindind `ngSubmit` na tag `form` e quando o evento de submit for disparado o angular ira executar o algoritmo declarado.

```HTML
<form #formulario="ngForm" (ngSubmit)="onSubmit(formulario)">
  <div class="form-group">
      <label for="nome">Nome</label>
      <input type="text" class="form-control" id="nome" placeholder="Insira o nome" name="nome" ngModel>
  </div>
  <div class="form-group">
    <label for="email">E-mail</label>
    <input type="email" class="form-control" id="email" placeholder="Insira o e-mail" name="email" ngModel>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
```

na classe do component foi adicionado apenas o metodo `onSubmit` que ira exibir no console o resultado da variavel `formulario` declarada no template.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(formulario: any): void {
    console.log(formulario);
  }

}
```

<p align="center"> 
  <img src="img/controles-formulario-template-driven.gif"><br>
    controles em formulario template-driven.
</p>
