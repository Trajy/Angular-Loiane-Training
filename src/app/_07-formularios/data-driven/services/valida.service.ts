import { FormControl, FormGroup } from '@angular/forms';

export class ValidaService {

  public static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if(otherField == null || otherField == '') {
        throw new Error('E necessario um campo valido para comparacao');
      }
      const value = formControl.value;
      const otherValue = (<FormGroup>formControl.root).get(otherField)?.value;
      return value != otherValue ? { notEquals: otherField } : null;
    }
    return validator;
  }

  public static getErrorMesage(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} e obrigatorio`,
      'minlength': `${fieldName} necessita ter no minimo ${validatorValue.requiredLength}`,
      'maxlength': `${fieldName} necessita ter no maximo ${validatorValue.requiredLength}`,
      'cepInvalido': 'cep invalido',
    }
    return config[validatorName];
  }
}
