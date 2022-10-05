import { FormDebugComponent } from './template-driven/form-debug/form-debug.component';
import { FormsAngularRoutingModule } from './forms-angular.routing.module';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { DataDrivenFormComponent } from './data-driven/data-driven-form/data-driven-form.component';
import { CommonModule } from '@angular/common';
import { CampoErroComponent } from './template-driven/campo-erro/campo-erro/campo-erro.component';

@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    DataDrivenFormComponent,
    FormDebugComponent,
    CampoErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormsAngularRoutingModule
  ],
})
export class FormsAngularModule { }
