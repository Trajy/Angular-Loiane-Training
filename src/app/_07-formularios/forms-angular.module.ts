import { ErrorMesageComponent } from './data-driven/error-mesage/error-mesage/error-mesage.component';
import { FormDebugComponent } from './template-driven/form-debug/form-debug.component';
import { FormsAngularRoutingModule } from './forms-angular.routing.module';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataDrivenFormComponent } from './data-driven/data-driven-form/data-driven-form.component';
import { CommonModule } from '@angular/common';
import { CampoErroComponent } from './template-driven/campo-erro/campo-erro/campo-erro.component';
import { HttpClientModule } from '@angular/common/http';
import { InputFieldComponent } from './data-driven/input-field/input-field.component';

@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    DataDrivenFormComponent,
    FormDebugComponent,
    CampoErroComponent,
    ErrorMesageComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsAngularRoutingModule,
    HttpClientModule
  ],
})
export class FormsAngularModule { }
