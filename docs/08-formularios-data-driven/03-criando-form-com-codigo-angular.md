# Criando Form com Codigo Angular

Os formularios sao agrupados em um objeto do tipo `FormGroup`, para este exemplo o formulario sera inicializado no metodo `ngOnInit` (life ciclehook do angular), recebe como argumento, um objeto que possui os campos do formulario, inicialmente o objeto possuira apenas os campo nome e email. Cada campo e um objeto do tipo `FormControl`, logo um `FormGroup`, possui varios `FormControl` em sua instancia.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  public formulario: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(),
      email: new FormControl()
    })
  }

}
```
Este modo de declarar os formularios costuma ser verboso, existe uma forma menos verbosa para realizar a instancia de um `FormGroup` utilizando o proprio construtor de formularios do Angular `FormBuilder`

desta forma e possivel intanciar um formulario e ao inves de declarar instancias de de `FormControl` para cada campo, e passada um array com as configuracoes desejadas,
o primeiro argumento passado ao array representa o valor inicial.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  public formulario: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }

}
```
