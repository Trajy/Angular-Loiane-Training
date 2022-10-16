# Servico de Consulta de Cep

Vamos abstrair a consulta de cep para um service, de modo que este seja reutilizavel em outros _components_. A partir do Angular 6 a anotation `@Injectible` pode receber o atributo `provideIn`, deste modo e possivel declarar a qual escopo o servico pertence sem a necessidade de declara-lo em um component ou em um modulo. isto e chamado de [Tree Shakeable Providers](https://angular.io/guide/providers).

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public consultaCep(cep: string) {
    console.log('entrei');
    const SOMENTE_DIGITOS_REGEX: RegExp = /\D/g
    const VALIDA_CEP_REGEX: RegExp = /^[0-9]{8}$/
    cep = cep.replace(SOMENTE_DIGITOS_REGEX, "")
    if(cep !== "" && VALIDA_CEP_REGEX.test(cep)) {
      return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    }
    return of({})
  }
}
```

alterando a implementacao no _component_ para utilizar o service criado

```typescript
import { CepService } from './../../../shared/cep/cep.service';
import { EstadoBr } from './../../../../assets/dados/estados/estados.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DadosService } from '../../../shared/dropdown/dados.service';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  public formulario: FormGroup
  public estados: EstadoBr[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dadosService: DadosService, private cepService: CepService) { }
  
  // ...demais metodos

  public consultaCep() {
    const cep =this.formulario.get('endereco.cep')
    if(cep?.value != null && cep?.value !== '') {
      this.cepService.consultaCep(cep?.value)!.pipe(map(dados => dados))
        .subscribe(dados => {
          console.log(dados)
          this.populaDadosForm(dados)
        })
    }
  }

  private populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }
}
```
