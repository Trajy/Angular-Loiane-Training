import { FormsAngularModule } from './forms-angular.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DataDrivenFormComponent } from './data-driven/data-driven-form/data-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form.component';

const ROTAS_ROUTES: Routes = [
  { path: 'template-driven', component: TemplateDrivenFormComponent },
  { path: 'data-driven', component: DataDrivenFormComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(ROTAS_ROUTES),
  ]
})
export class FormsAngularRoutingModule {}
