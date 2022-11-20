import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidaService } from './../../services/valida.service';

@Component({
  selector: 'app-error-mesage',
  templateUrl: './error-mesage.component.html'
})
export class ErrorMesageComponent {

  @Input() control: AbstractControl | null;
  @Input() label: string;

  get errorMesage() {
    for(const propertyName in this.control.errors) {
      if(
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ValidaService.getErrorMesage(this.label, propertyName, this.control.errors[propertyName])
      }
    }
    return null;
  }
}
