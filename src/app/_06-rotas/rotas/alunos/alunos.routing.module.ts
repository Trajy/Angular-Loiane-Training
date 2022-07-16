import { AlunosDeactivateGuard } from './../../guards/alunos-deactivate.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';

const ALUNOS_ROUTES: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      { path: 'novo', component:  AlunosFormComponent, canDeactivate: [AlunosDeactivateGuard]},
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosDeactivateGuard]}
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(ALUNOS_ROUTES) ],
  exports: [ RouterModule ]
})
export class AlunosRoutingModule { }
