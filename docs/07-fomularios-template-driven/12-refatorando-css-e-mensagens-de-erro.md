# Refatorando CSS e mensagens de erro

Note que o codigo apresentado no documento [Adicionando campos de endereco: form Layout Bootstrap 3](./11-adicionando-campos-de-endereco.md) tornou-se extenso, podemos diminuir a quantidade de linhas fazendo o reaproveitamento de codigo, para isto iremos criar um novo component responsavel por exibir o erro e metodos para validar cada campo.

inicialmente iremos declarar dois metodos para realizar a validacao dos campos no codigo typescript de nosso _component_

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
    email: "teste_email@dominio.com"
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(formulario: any): void {
    console.log(formulario);
    console.log(this.usuario);
  }

  public aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.validaCampo(campo),
      'has-feedback': this.validaCampo(campo)
    }
  }

  public validaCampo(campo: any): boolean {
    return campo.invalid && campo.touched
  }

}
```

Em seguida criar um component com o template da mensagem de erro, que ira receber os argumentos respectivos a cada campo.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-erro',
  templateUrl: './campo-erro.component.html',
  styleUrls: ['./campo-erro.component.css']
})
export class CampoErroComponent {

  @Input() mostrarErro: boolean;
  @Input() mensagemErro: string;

}
```

```HTML
<div *ngIf="mostrarErro">
  <div class="alert alert-danger" role="alert">{{ mensagemErro }}</div>
</div>
```
Por fim a refatoracao do template do formulario

```HTML
<form #formulario="ngForm" class="form-horizontal" (ngSubmit)="onSubmit(formulario)">
  <div class="form-group">
    <div class="col-sm-12">
      <label for="nome">Nome</label>
      <input type="text" class="form-control" [ngClass]="aplicaCssErro(nome)" id="nome" placeholder="Insira o nome" name="nome"
        [(ngModel)]="usuario.nome" required #nome="ngModel" />
      <app-campo-erro [mostrarErro]="validaCampo(nome)" mensagemErro="O campo nome e obrigatorio"></app-campo-erro>
    </div>
    <div class="col-sm-12">
      <label for="email">E-mail</label>
      <input type="email" class="form-control" [ngClass]="aplicaCssErro(email)" id="email" placeholder="Insira o e-mail"
        name="email" [(ngModel)]="usuario.email" required email #email="ngModel" />
      <app-campo-erro [mostrarErro]="validaCampo(email)" mensagemErro="O campo email e obrigatorio"></app-campo-erro>
    </div>
    <div class="col-md-3">
      <label for="cep" class="control-label">Cep</label>
      <input type="text" class="form-control" id="cep" name="cep" ngModel required #cep="ngModel" />
      <app-campo-erro [mostrarErro]="validaCampo(cep)" mensagemErro="O campo cep e obrigatorio"></app-campo-erro>
    </div>
    <div class="col-md-3">
      <label for="numero" class="control-label">Numero</label>
      <input type="text" class="form-control" id="numero" name="numero" ngModel required #numero="ngModel" />
      <app-campo-erro [mostrarErro]="validaCampo(numero)" mensagemErro="O campo numero e obrigatorio"></app-campo-erro>
    </div>
    <div class="col-md-6">
      <label for="complemento" class="control-label">Complemento</label>
      <input type="text" class="form-control" id="complemento" name="complemento" ngModel required
        #complemento="ngModel" />
    </div>
    <div class="col-md-12">
      <label for="rua" class="control-label">Rua</label>
      <input type="text" class="form-control" id="rua" name="rua" ngModel required #rua="ngModel" />
      <app-campo-erro [mostrarErro]="validaCampo(rua)" mensagemErro="O campo rua e obrigatorio"></app-campo-erro>
    </div>
    <div class="col-md-5">
      <label for="bairro" class="control-label">Bairro</label>
      <input type="text" class="form-control" id="bairro" name="bairro" ngModel required #bairro="ngModel" />
      <app-campo-erro [mostrarErro]="validaCampo(bairro)" mensagemErro="O campo bairro e obrigatorio"></app-campo-erro>
    </div>
    <div class="col-md-4">
      <label for="complemento" class="control-label">Cidade</label>
      <input type="text" class="form-control" id="cidade" name="cidade" ngModel required
        #cidade="ngModel" />
        <app-campo-erro [mostrarErro]="validaCampo(cidade)" mensagemErro="O campo cidade e obrigatorio"></app-campo-erro>
    </div>
    <div class="col-md-3">
      <label for="estado" class="control-label">Estado</label>
      <input type="text" class="form-control" id="estado" name="estado" ngModel required #estado="ngModel" />
      <app-campo-erro [mostrarErro]="validaCampo(estado)" mensagemErro="O campo estado e obrigatorio"></app-campo-erro>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" [disabled]="formulario.invalid">
    Submit
  </button>
</form>
<app-form-debug [formulario]="formulario"></app-form-debug>
```
deste modo o codigo fica com maior legibilidade, e correcoes podem ser aplicadas uma unica vez.
