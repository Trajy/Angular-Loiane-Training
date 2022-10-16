# Resetando Formulario

Ao resetar o formulario os valores armazenados serao removidos, no exemplo a seguir iremos resetar o form ao realizar o submit com sucesso. Nao e aconselado inclui a chamada para o metodo `reset` do formulario diretamente no corpo da funcao anonima passado como argumento para o metodo `subscribe`, ao invez disso a melhor opcao e declarar um metodo para realizar a chamada do metodo `reset`, neste caso a implementacao do metodo `resetForm`.

OBS: O metodo subscribe tambem pode receber uma segunda arrow function como argumento que sera chamada nos casos de erro na requisicao.

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
      email: [null, [Validators.required, Validators.email]]
    })
  }

  public onSubmit(): void {
    console.log(this.formulario);
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(
        response => {
          console.log(response)

          //chamada para o metodo resetForm()
          this.resetForm()
        },
        error => {
          console.log('Erro na requisicao')
        }
      )
  }

  // declaracao do metodo resetForm
  public resetForm(): void {
    this.formulario.reset()
  }
}
```

<p align="center"> 
  <img src="img/resetando-formulario.gif"><br>
    Diferencas entre template driven e data driven. fonte: Loiane.training
</p>

