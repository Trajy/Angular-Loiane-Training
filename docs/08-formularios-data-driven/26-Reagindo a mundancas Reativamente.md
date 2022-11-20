# Reagindo a mudancas Reativamente

Os formularios reativos do Angular recebem esse nome, pois possuem uma api responsavel pelos eventos emitidos pelos tipos `FormControl`, `FormGroup`, `FormArray`, esses tipos possuem quatro atributos que observam mudancas nos valores do control, sao eles, `status`, `statusChanges`, `value`, e `valueChanges`. deste modo e possivel inscrever-se nesses atributos, pois sao do tipo `Observable`.

A documentacao oficial do angular, recomenda que as inscricoes para as mudancas sejam realizadas no metodo `ngOnInit`, neste exemplo iremos realizar a inscricao no `Observable` `status` changes do campo `cep`, deste modo a solicitacao para a api de busca dos dados sera realizada apenas quando um cep valido for informado, noto que temos a chamada do metodo `pipe` antes de realizar o `subscribe` para que possamos utilizar os operadores do `rxjs`, o primeiro e `distinctUntilChange`, que ira continuar o fluxo do algoritmo apenas se o status for diferente do valor anterior, o segundo e `tap` (antigo `do`) que ira exibir o valor do cep, no console (este e apenas para fins de depuracao e testes, em producao este log no console nao deve ser exibido), e por fim `switchMap`, pois para realizar o subscribe apenas no observable desejado, podemos utilizar este metodo para retornar o observable da chamada para a api diretamente e realizar o algoritmo para popular os dados do formulario diretamente.

```typescript

// ...imports

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
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email], this.validaEmail.bind(this)],
      confirmarEmail: [null, [Validators.required, Validators.email, ValidaService.equalsTo('email')]],
      endereco: this.formBuilder.group({
        // noto que o cep possui os validadores necessarios.
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
    
    // ...demais chamadas para metodos

    // A inscricao no observable de consultaCep deve ocorrer apenas quando
    // statusChanges mudar, o metodo distinctUntilChange garante isso
    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log(`valor CEP: ${value}`)),
        switchMap(status => status === 'VALID' ? this.cepService.consultaCep(this.formulario.get('endereco.cep').value) : EMPTY)
      )
      .subscribe(dados => {
        dados ? this.populaDadosForm(dados) : { };
      });
  }

  // ...demais metodos

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
}
```

<p align="center">
  <img src="img/consultando-cep-reativamente.gif"><br>
    consultando cep reativamente.
</p>


