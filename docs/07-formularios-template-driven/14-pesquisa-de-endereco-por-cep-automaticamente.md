# Pesquisa de Endereco por Cep Automaticamente

o Angular possui a classe `HttpClient` que possui metodos para realizar os verbos `HTTP`, este sera explicado em mais detalhes no modulo de `Http`, neste momento iremos apenas utiliza-lo para realizar uma requisicao para o web service [ViaCep](https://viacep.com.br/), um servico gratuito para consulta de enderecos atraves do cep.

para utilizar um objeto do tipo `HttpClient` em nosso _component_ e necessario incluir o `HttpClientModule` ao modulo no qual sera utilizado.

```typescript
//...demais imports
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    //...declarations
  ],
  imports: [
    //...demais imports
    HttpClientModule
  ],
})
export class FormsAngularModule { }
```

No _component_ e implementado o metodo para realizar a requisicao http, lembrando de injetar um objetos do tipo `HttpClient` atraves da injecao de dependencias do Angular.

```typescript
//...demais imports
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  //...demais atributos

  constructor(private readonly http: HttpClient) { }

  //...demais metodos

  public consultaCep(cep: string) {
    const SOMENTE_DIGITOS_REGEX: RegExp = /\D/g
    const VALIDA_CEP_REGEX: RegExp = /^[0-9]{8}$/
    cep = cep.replace(SOMENTE_DIGITOS_REGEX, "")
    if(cep !== "" && VALIDA_CEP_REGEX.test(cep)) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(map(dados => dados))
        .subscribe(dados => {
          console.log(dados);
        })
    }

  }
}
```

para este exemplo iremos apenas exibir o resultado no console.

por fim no template `HTML` utiliza-se o event binding blur para realizar a chamada do metodo `consultaCep` quando o campo Cep perder o foco.

```HTML
<!--demais codigo do template-->

<div class="col-md-3">
  <label for="cep" class="control-label">Cep</label>
  <input type="text" class="form-control" id="cep" name="cep" ngModel  required (blur)="consultaCep($any($event.target).value)" #cep="ngModel" />
  <app-campo-erro [mostrarErro]="validaCampo(cep)" mensagemErro="O campo cep e obrigatorio"></app-campo-erro>
</div>

<!--demais codigo do template-->
```

<p align="center"> 
  <img src="img/consultando-cep-web-service.gif"><br>
    consultando endereco via cep
</p>
