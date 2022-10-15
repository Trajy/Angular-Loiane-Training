# Submetendo Valores com Http Post

a classe `HttpClient` do angular, possui o metodo `post` que utilizado para realizar o verbo `HTTP POST`, este metodo recebe dois argumentos, o primeiro e o endereco ao qual sera enviado os dados e o segundo e o corpo, em geral quando utilizamos transferencia de dados entre aplicacoes e preferivel que trabalhemos com formatos de dados padronizados, a biblioteca padrao do `javascript` possui a classe `JSON` que possui dois metodos, `stringfy` que ira transformar um objeto em uma string com formatacao json e o caminho inverso e realizado pelo metodo `parse`, este ira tornar uma string no formato json em um objeto javascript.

neste exemplo apenas adicionamos a chamada ao metodo `post` atraves do objeto `http` injetado em nossa classe, o endereco e meramente ficticio e nao ira direcionar a nenhum servico existente, esta implementacao e apenas para exemplificar a implementacao.

```typescript

// ...imports

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  // ...atributos

  // ...demais metodos

  public onSubmit(formulario: any): void {
    console.log(formulario);
    console.log(formulario.value);

    // chamada ao metodo post para exemplificar a implementacao
    this.http.post('enderecoServidos/formUsuario', JSON.stringify(formulario.value))
      .subscribe(response => console.log(response))
  }
```

<p align="center"> 
  <img src="img/http-post.gif"><br>
    chamada do metodo post da classe HttpClient
</p>
