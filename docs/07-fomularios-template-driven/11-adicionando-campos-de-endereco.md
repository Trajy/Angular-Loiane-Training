# Adicionando campos de endereco: form Layout Bootstrap 3

Vamos adicionar novos campos ao formularios existente, utilizando o sistema de [_grid_](https://getbootstrap.com/docs/4.0/layout/grid) do [Bootstrap](https://getbootstrap.com/), ao utilizar a classe `form-horizontal` a tela e dividida em 12 colunas de espacos iguais, basta adicionar a quantidade de colunas que cada `div` (ou outra tag HTML) ira preencher dentro deste range, conforme o exemplo a seguir.

```HTML
<form
  #formulario="ngForm"
  class="form-horizontal"
  (ngSubmit)="onSubmit(formulario)"
>
  <div class="form-group">
    <div class="col-sm-12">
      <label for="nome">Nome</label>
      <input
        type="text"
        class="form-control"
        id="nome"
        placeholder="Insira o nome"
        name="nome"
        [(ngModel)]="usuario.nome"
        required
        [class.has-error]="nome.touched && nome.invalid"
        #nome="ngModel"
      />
      <div *ngIf="nome.touched && nome.invalid" class="alert alert-danger">
        O nome e obrigatorio
      </div>
    </div>
    <div class="col-sm-12">
      <label for="email">E-mail</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Insira o e-mail"
        name="email"
        [(ngModel)]="usuario.email"
        required
        [class.has-error]="email.touched && email.invalid"
        email
        #email="ngModel"
      />
      <div *ngIf="email.touched && email.invalid" class="alert alert-danger">
        O e-mail invalido
      </div>
    </div>
    <div class="col-md-3">
      <label for="cep" class="control-label">Cep</label>
      <input
        type="text"
        class="form-control"
        id="cep"
        name="cep"
        ngModel
        required
        #cep="ngModel"
      />
      <div *ngIf="cep.touched && cep.invalid" class="alert alert-danger">
        O cep e obrigatorio
      </div>
    </div>
    <div class="col-md-3">
      <label for="numero" class="control-label">Numero</label>
      <input
        type="text"
        class="form-control"
        id="numero"
        name="numero"
        ngModel
        required
        #numero="ngModel"
      />
      <div *ngIf="numero.touched && numero.invalid" class="alert alert-danger">
        O numero e obrigatorio
      </div>
    </div>
    <div class="col-md-6">
      <label for="complemento" class="control-label">Complemento</label>
      <input
        type="text"
        class="form-control"
        id="complemento"
        name="complemento"
        ngModel
        required
        #complemento="ngModel"
      />
    </div>
    <div class="col-md-12">
      <label for="rua" class="control-label">Rua</label>
      <input
        type="text"
        class="form-control"
        id="rua"
        name="rua"
        ngModel
        required
        #rua="ngModel"
      />
    </div>
    <div class="col-md-5">
        <label for="bairro" class="control-label">Bairro</label>
        <input
          type="text"
          class="form-control"
          id="bairro"
          name="bairro"
          ngModel
          required
          #bairro="ngModel"
        />
    </div>
    <div class="col-md-4">
      <label for="complemento" class="control-label">Cidade</label>
      <input
        type="text"
        class="form-control"
        id="complemento"
        name="complemento"
        ngModel
        required
        #complemento="ngModel"
      />
    </div>
    <div class="col-md-3">
      <label for="estado" class="control-label">Estado</label>
      <input
        type="text"
        class="form-control"
        id="estado"
        name="estado"
        ngModel
        required
        #estado="ngModel"
      />
    </div>
  </div>
  <button type="submit" class="btn btn-primary" [disabled]="formulario.invalid">
    Submit
  </button>
</form>
<app-form-debug [formulario]="formulario"></app-form-debug>

```

Note que para os campo de Cep e Numero sao delimitadas 3 divisoes para cada, ja para o campo Complemento 6 divisoes sao delimitadas completando a tela com 12 divisoes. os demais campos Rua, Bairro, Estado, Cidade seguem o mesmo raciocinio.

<p align="center"> 
  <img src="img/adicionando-campos-endereco-ao-form.png"><br>
    adicionados campos de endereco ao formulario
</p>
