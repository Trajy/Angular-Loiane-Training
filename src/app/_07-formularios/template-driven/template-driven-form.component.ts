import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private readonly http: HttpClient) { }

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

  public consultaCep(cep: string, form: NgForm) {
    const SOMENTE_DIGITOS_REGEX: RegExp = /\D/g
    const VALIDA_CEP_REGEX: RegExp = /^[0-9]{8}$/
    cep = cep.replace(SOMENTE_DIGITOS_REGEX, "")
    if(cep !== "" && VALIDA_CEP_REGEX.test(cep)) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(map(dados => dados))
        .subscribe(dados => {
          console.log(dados)
          this.populaDadosForm(dados, form)
        })
    }
  }

  private populaDadosForm(dados: any, formulario: NgForm) {
    formulario.form.patchValue({
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
