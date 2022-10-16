# Migrando formulario template driven para um formulario data driven

Os formularios do tipo template driven e data driven possuem uma estrutura muito similar, deferenciando-se apenas nas implementacoes referentes ao framework - Angular - para ver a estrutura do formulario template driven com os campos de endereco vide [Adicionando campos de endereco: form Layout Bootstrap 3](../07-formularios-template-driven/11-adicionando-campos-de-endereco.md).
No exemplo da documentacao acima, os campos relativos a endereco estao agrupado, neste exemplo para facilitar a compreensao os campos nao estao agrupados, para agrupar os campos vide [FormGroups: Agrupando Dados]().

```HTML
<form class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <div class="col-sm-12" [ngClass]="aplicaCssErro('nome')">
      <label for="nome">Nome</label>
      <input type="text" class="form-control" id="nome" placeholder="Insira o nome"
        formControlName="nome"/>
        <app-campo-erro [mostrarErro]="verificaValidAndTouched('nome')" mensagemErro="O campo nome e obrigatorio"></app-campo-erro>
    </div>
    <div class="col-sm-12" [ngClass]="aplicaCssErro('email')">
      <label for="email">E-mail</label>
      <input type="email" class="form-control" id="email" placeholder="Insira o e-mail"
        formControlName="email"/>
        <app-campo-erro [mostrarErro]="verificaValidAndTouched('email')" mensagemErro="O campo email e obrigatorio"></app-campo-erro>
    </div>
      <div class="col-md-3" [ngClass]="aplicaCssErro('cep')">
        <label for="cep" class="control-label">Cep</label>
        <input type="text" class="form-control" id="cep" formControlName="cep"/>
        <app-campo-erro [mostrarErro]="verificaValidAndTouched('cep')" mensagemErro="O campo cep e obrigatorio"></app-campo-erro>
      </div>
      <div class="col-md-3" [ngClass]="aplicaCssErro('numero')">
        <label for="numero" class="control-label">Numero</label>
        <input type="text" class="form-control" id="numero" formControlName="numero"/>
        <app-campo-erro [mostrarErro]="verificaValidAndTouched('numero')" mensagemErro="O campo numero e obrigatorio"></app-campo-erro>
      </div>
      <div class="col-md-6" [ngClass]="aplicaCssErro('complemento')">
        <label for="complemento" class="control-label">Complemento</label>
        <input type="text" class="form-control" id="complemento" formControlName="complemento"/>
      </div>
      <div class="col-md-12" [ngClass]="aplicaCssErro('rua')">
        <label for="rua" class="control-label">Rua</label>
        <input type="text" class="form-control" id="rua" formControlName="rua"/>
        <app-campo-erro [mostrarErro]="verificaValidAndTouched('rua')" mensagemErro="O campo rua e obrigatorio"></app-campo-erro>
      </div>
      <div class="col-md-5" [ngClass]="aplicaCssErro('bairro')">
        <label for="bairro" class="control-label">Bairro</label>
        <input type="text" class="form-control" id="bairro" formControlName="bairro"/>
        <app-campo-erro [mostrarErro]="verificaValidAndTouched('bairro')" mensagemErro="O campo rua e obrigatorio"></app-campo-erro>
      </div>
      <div class="col-md-4" [ngClass]="aplicaCssErro('cidade')">
        <label for="complemento" class="control-label">Cidade</label>
        <input type="text" class="form-control" id="cidade" formControlName="cidade"/>
        <app-campo-erro [mostrarErro]="verificaValidAndTouched('cidade')" mensagemErro="O campo cidade e obrigatorio">
        </app-campo-erro>
      </div>
      <div class="col-md-3">
        <label for="estado" class="control-label">Estado</label>
        <input type="text" class="form-control" id="estado" formControlName='estado'/>
        <app-campo-erro [mostrarErro]="verificaValidAndTouched('estado')" mensagemErro="O campo estado e obrigatorio">
        </app-campo-erro>
      </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<app-form-debug [formulario]="formulario"></app-form-debug>
```

no codigo typescrip do component, foram adicionados os novos `FormControl` ao `FormBuilder`

```typescript
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  public formulario: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      // novos campos adicionados ao template HTML
      cep: [null, Validators.required],
      numero: [null, Validators.required],
      rua: [null, Validators.required],
      complemento: null,
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required]
    })
  }

  public onSubmit(): void {
    console.log(this.formulario);
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(
        response => {
          console.log(response)
          this.resetForm()
        },
        error => {
          console.log('Erro na requisicao')
        }
      )
  }

  public resetForm(): void {
    this.formulario.reset()
  }

  public aplicaCssErro(nomeCampo: string) {
    return {
      'has-error': this.verificaValidAndTouched(nomeCampo),
      'has-feedback': this.verificaValidAndTouched(nomeCampo)
    }
  }

  public verificaValidAndTouched(nomeCampo: string): boolean {
    return this.formulario.get(nomeCampo)!.invalid && this.formulario.get(nomeCampo)!.touched
  }
}
```

OBS: Visualmente ambos os formularios continuam iguais.
