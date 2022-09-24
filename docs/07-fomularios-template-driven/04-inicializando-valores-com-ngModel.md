# Inicializando valores com ngModel (two way data binding)

Para inicializar o formulario com valores, basta utilizar o _two way data binding_ (lembre-se da sintaxe banana na caixa `[()]`), para este exemplo iremos utilizar um objeto usuario com dados mockados.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  usuario: any = {
    nome: "teste_nome",
    email: "teste_email"
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(formulario: any): void {
    console.log(formulario);
    console.log(this.usuario);
  }

}
```

note que no metodo `onSubmit` foi adicionado uma chamada para o metodo log, que ira exibir os valores alterados do objeto usuario.

```HTML
<form #formulario="ngForm" (ngSubmit)="onSubmit(formulario)">
  <div class="form-group">
      <label for="nome">Nome</label>
      <input type="text" class="form-control" id="nome" placeholder="Insira o nome" name="nome" [(ngModel)]="usuario.nome">
  </div>
  <div class="form-group">
    <label for="email">E-mail</label>
    <input type="email" class="form-control" id="email" placeholder="Insira o e-mail" name="email" [(ngModel)]="usuario.email">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
```

<p align="center"> 
  <img src="img/inicializando-valores-ngModel-two-way-data-binding.gif"><br>
    inicializando valores no form com two way data binding.
</p>
