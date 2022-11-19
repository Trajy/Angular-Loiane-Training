import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
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
  public estados: EstadoBr[];
  public tecnologias: any[] = this.getTecnologias();
  public newsLetterOptions: any[] = this.getNewsLetter();
  public frameworks = ['Agular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dadosService: DadosService,
    private cepService: CepService,
    private asyncService: AsyncValidatorService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
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

  }

  public buildFormArray(): FormArray {
    const values = this.frameworks.map(framework => new FormControl(false));
    return this.formBuilder.array(values, this.requiredMinCheckbox());
  }

  public getFrameworksControls() {
    return this.formulario.get('frameworks') ? (<FormArray>this.formulario.get('frameworks')).controls : null;
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
    return this.formulario.get(nomeCampo)!.hasError('required') && this.formulario.get(nomeCampo)!.touched
  }

  public consultaCep() {
    console.log(this.formulario.get('endereco.cep'))
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

        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: {...this.estados.find(estado => estado.sigla == dados.uf)}
      }
    })
  }

  public compararEstadosNoSelector(obj1: any, obj2: any) {
    return obj1 && obj2 ? (obj1.sigla == obj2.sigla) : obj1 === obj2
  }

  public getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'Javascript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' }
    ];
  }

  public getNewsLetter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Nao' }
    ];
  }

  public requiredMinCheckbox(min = 1): ValidatorFn {
    const validator = (formulario: FormArray) => {
      const totalChecked = formulario.controls.filter(control => control.value == true).length;
      if(totalChecked < min) return { required: true }
      return null;
    };
    return <ValidatorFn> <unknown>validator
  }

  public validarCep(formControl: FormControl) {
    const cep = formControl.value;
    if(cep && cep !== '') {
      const regexCep = /^[0-9]{8}$/;
      return regexCep.test(cep) ? null : {cepInvalido: 'O cep nao e valido' }
    }
    return null;
  }

  public validaEmail(formControl: FormControl) {
    return this.asyncService.verificarEmail(formControl.value)
      .pipe(
        map(emailExiste => emailExiste ? { emailInvalido: true } : null)
      )
  }
}

