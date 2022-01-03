import { OutputPropertyModule } from '../output-property/output-property.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //modulo para utilizar a diretiva ngModel com formularios

import { InputPropertyModule } from '../input-property/input-property.module';
import { DataBindingComponent } from './data-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputPropertyModule, // declaracao dos modulos input e output property, como o DataBindingModule esta declarado no app.module (modulo raiz), os components possuem escopo global.
    OutputPropertyModule
  ],
  exports: [
    DataBindingComponent
  ],
  providers: [
    
  ]
})
export class DataBindingModule { }
