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
