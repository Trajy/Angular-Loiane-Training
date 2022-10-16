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

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dadosService: DadosService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        rua: [null, Validators.required],
        complemento: null,
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })
    this.dadosService.getEstadosBr().subscribe(
      estados => {this.estados = estados; console.log(this.estados);}

    )
  }

  public onSubmit(): void {
    console.log(this.estados);

    console.log(this.formulario);
    console.log(this.formulario.value);
    if(this.formulario.valid) {
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
    } else {
      this.markControlAsTouched(this.formulario)
    }
  }

  private markControlAsTouched(formulario: FormGroup) {
    Object.keys(formulario.controls).forEach(key => {
      const control = formulario.get(key)
      control!.markAllAsTouched()
      if(control instanceof FormGroup) this.markControlAsTouched(control)
    })
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

  public consultaCep() {
    console.log('entrei');
    const SOMENTE_DIGITOS_REGEX: RegExp = /\D/g
    const VALIDA_CEP_REGEX: RegExp = /^[0-9]{8}$/
    const cep =this.formulario.get('endereco.cep')
    console.log(cep);
    cep?.setValue(cep.value.replace(SOMENTE_DIGITOS_REGEX, ""))
    if(cep?.value !== "" && VALIDA_CEP_REGEX.test(cep?.value)) {
      this.http.get(`https://viacep.com.br/ws/${cep?.value}/json/`).pipe(map(dados => dados))
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
