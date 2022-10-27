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
}
