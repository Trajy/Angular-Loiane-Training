# Campo Input Customizado

confome nosso formulario e desenvolvido, novos campos sao inseridos, podemos notar que a estrutura do DOM e a implementacao destes campos e semelhante em diversos pontos, devido isto e possivel criar um _component_ em um input customizado, que ira receber as os parametros necessarios para configurar o input desejado.

O primeiro passo e implementar a interface [`ControlValueAccessor`](https://angular.io/api/forms/ControlValueAccessor) que contem os metodos necessarios para que o angular possa manipular o valor do input, neste exemplo armazenado na variavel de membro `innerValue`, os metodos `onChqangeCallback` e `onTouchedCallback` sao apenas implementacoes de metodos que nao fazem nada, apenas para que o angular possa setar as funcoes pertinenetes atraves dos metodos `registerOnChange` e `registerOnTouched`, e o metodo setDisabled ir definir um campo como apenas leitura, alem destes metodos implementados a partir das interfaces oriundas de `ControlValueAccessor` alguns `@Input()` foram inseridos para tornar o input configuravel, note tambem que a annotation `@Component` contem o atributo `provaders` recebendo o valor `INPUT_FIELD_VALUE_ACCESSOR` que e uma constante que contem as configuracoes para que o angular interprete o @Component como um input.

```typescript
import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
};

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() classeCss;
  @Input() id: string;
  @Input() label;
  @Input() type = 'text';
  @Input() placeholder: string = null;
  @Input() control: AbstractControl | null;
  private innerValue: any;
  public isDisabled: boolean = false;

  get value() {
    return this.innerValue
  }

  set value(value: any) {
    if(value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  onChangeCallback: (_: any) => void = () => {}

  onTouchedCallback: (_: any) => void = () => {}

  writeValue(value: any): void {
    this.value = value;
    console.log(this.innerValue);

  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
```

## Utilizando Input personalizado.

Para utilizar o input personalizado basta utilizar a respectiva tag do _component_ e realizar o set dos atributos necessarios. deste modo o DOM ira interpretar o proprio component como um input e os atributos como touched, valid, dirt etc. pertencem diretamente ao component.

## OBS: Verificar como implementar no angular atual.

