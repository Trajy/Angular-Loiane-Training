## Validacoes Assincronas

Exitem alguns cenarios, onde as validaceos serao feitas em outra aplicacao, como exemplo podemos ter determinadas validacoes feitas pelo back-end, neste caso utilizaremos validacoes assincronas para que a aplicacao nao necessite esperar a resposta do servidor continuar a execucao do seu algoritmo.

para este exemplo iremos trabalhar com dados mockados em um arquivo `json` para simular a requisicao para uma api. 

os metodos da classa `HttpClient` (`get`, `post` etc.) retornam o tipo `Observable`, os quais necessitam de uma inscricao atravez do metodo `subscribe` para que o algoritmo declarado como argumento seja executado, toda vez que uma solicitacao get for retornada.

deste modo iremos criar um servico apenas para representar este cenario, iremos chamalo de `AsyncValidatorService` e no corpo da classe iremos declarar o metodo `verificarEmail` que ira realizar a requisicao para os dados mockados no arquivo `.json`

```json
{
  "emails": [
    { "email": "email@email.com" },
    { "email": "email1@email.com" },
    { "email": "email2@email.com" },
    { "email": "email3@email.com" },
    { "email": "email4@email.com" },
    { "email": "email5@email.com" }
  ]
}
```

```typescript
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string) {
    return this.http.get('assets/dados/validacao-assincrona/verificar-email.json')
      .pipe(
        delay(5000),
        map((dados: any) => dados.emails),
        tap(console.log),
        map((dados: { email: string }[]) => dados.filter(valor => valor.email === email)),
        tap(console.log),
        map((dados: Array<any>) => dados.length > 0)
      )
  }

}
```

note que no metodo `pipe` encadeado na implementacao de `verificaEmail` e utilizado como argumento o metodo `delay` (operador do pacote `rxjs`), isto e necessario para que a aplicacao na faca uma requisicao para o back-end a cada alteracao, ou seja, todo caracter inserido enquanto o usuario digita o email sera uma nova requisicao para realizar uma validacao, uma solucao e esperar o tempo (neste exemplo 5s ou 5000 ms), para que o usuario digite o email, desta forma as requisicoes sao reduzidas e evita a sobrecarga do back-end com requisicoes desnecessarias.

no arquivo typescript do component que possui o fomulario declarado, iremos incluir a implementacao do metodo que ira relizar a chamada para o servico de validacao e os validators para o campo que ira realizar a validacao assincrona, na declaracao do formulario no metodo `formBuilder`, o metodo de validacao - `validaEmail` - e passado como argumento por meio de callback, para que a referencia para o servico - `AsyncValidatorService` - nao seja perdida sera utilizado o metodo da biblioteca padrao do javascript `bind`, que recebe o proprio _component_ como contexto para utilizacao do metodo ([vide: JavaScript Function bind()](https://www.w3schools.com/js/js_function_bind.asp)).

```typescript
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { delay, map } from 'rxjs/operators';
import { DadosService } from '../../../shared/dropdown/dados.service';
import { AsyncValidatorService } from '../services/async-validator.service';
import { ValidaService } from '../services/valida.service';
import { EstadoBr } from './../../../../assets/dados/estados/estados.model';
import { CepService } from './../../../shared/cep/cep.service';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  public formulario: FormGroup;

  // ...demais atributos

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dadosService: DadosService,
    private cepService: CepService,
    private asyncService: AsyncValidatorService // injecao de dependencia do angular injeta um objeto do tipo AsyncService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      /* 
      os arrays para criacao dos FormControl recebem como terceiro argumento as
       validacoes assincronas, note que o terceiro argumento (this.verificaEmail) e
       uma passagem do metodo por meio de callback e o metodo bind e utilizado para
       passar o component como contexto para que a referencia para o servico de
       validacao nao seja perdida ao executar o metodo verificaEmail. 
      */
      email: [null, [Validators.required, Validators.email], this.validaEmail.bind(this)],
      confirmarEmail: [null, [Validators.required, Validators.email, ValidaService.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, this.validarCep]],
        numero: [null, Validators.required],
        rua: [null, Validators.required],
        complemento: null,
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      tecnologias: null,
      newsLetter: null,
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFormArray()
    })
    this.dadosService.getEstadosBr().subscribe(
      estados => this.estados = estados
    )
    console.log(this.formulario.get('frameworks'));

  // ...demais metodos

  public validaEmail(formControl: FormControl) {
    return this.asyncService.verificarEmail(formControl.value)
      .pipe(
        // verifica se email existe e caso true retorna o objeto contendo o erro.
        map(emailExiste => emailExiste ? { emailInvalido: true } : null)
      )
  }
}
```

por fim iremos adicionar os varificacoes para checar se a validacao esta em processamento pelo back-end, se houve sucesso, ou se contem erros, os formControls contem a propriedade `status` que podem assumir alguns valores, para este exemplo, os pertinentes sao `PENDING` que sera o valor do status quando a validacao estiver ocorrendo e `VALID` no caso de nao houverem erros ao fim da validacao, por fim para exibir a mensagem de erro, e utilizado o metodo `hasError` passando como argumento a chave para o erro retornado caso a validacao nao obtenha sucesso (neste exemplo `hasError('emailInvalido')`)

```HTML
<form class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">
  <div class="form-group">
    
    <!-- demais campos do formulario -->

    <div class="col-sm-12" [ngClass]="aplicaCssErro('email')">
      <label for="email">E-mail</label>
      <input type="email" class="form-control" id="email" placeholder="Insira o e-mail" formControlName="email" />
      <app-campo-erro [mostrarErro]="verificaValidAndTouched('email')" mensagemErro="O campo email e obrigatorio">

      <!-- validacoes para verificar status ou se o formControl de email contem o
      erro 'emailInvalido' -->
      </app-campo-erro>
      <app-campo-erro [mostrarErro]="formulario.get('email')?.status === 'PENDING'" mensagemErro="Validando email">
      </app-campo-erro>
      <app-campo-erro [mostrarErro]="formulario.get('email')?.status === 'VALID'" mensagemErro="Email valido">
      </app-campo-erro>
      <app-campo-erro [mostrarErro]="formulario.get('email')?.hasError('emailInvalido')" mensagemErro="Email ja cadastrado">
      </app-campo-erro>
    </div>
    
    <!-- demais campos do formulario -->

  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<app-form-debug [formulario]="formulario"></app-form-debug>
```

<p align="center">
  <img src="img/validacao-assincrona.gif"><br>
    validacao assincrona.
</p>
