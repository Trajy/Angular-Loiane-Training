import { Component, OnInit, ViewChild } from '@angular/core';

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
    console.log(formulario.value);
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
