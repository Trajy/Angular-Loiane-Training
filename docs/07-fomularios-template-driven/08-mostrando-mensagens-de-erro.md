# Monstrando Mensagens de Erro

cada campo do formulario e abstraido pelo Angular para um objeto do tipo `formControl`, deste modo, podemos acessar seus atributos de validacao, e utilizar a diretiva ngIf para apresentar uma mensagem de erro ao usuario.

```HTML
<form #formulario="ngForm" (ngSubmit)="onSubmit(formulario)">
  <div class="form-group">
      <label for="nome">Nome</label>
      <input type="text" class="form-control" id="nome" placeholder="Insira o nome" name="nome" [(ngModel)]="usuario.nome"
        required
        [class.has-error]="nome.touched && nome.invalid"
        #nome="ngModel"
      >
      <div *ngIf="nome.touched && nome.invalid" class="alert alert-danger">
        O nome e obrigatorio
      </div>
  </div>
  <div class="form-group">
    <label for="email">E-mail</label>
    <input type="email" class="form-control" id="email" placeholder="Insira o e-mail" name="email" [(ngModel)]="usuario.email"
      required email
    >
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
```

<p align="center"> 
  <img src="img/monstrando-mensagens-erro.gif"><br>
    exibindo mensagens de erro.
</p>


