import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';

const ALUNOS_ROUTES: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      { path: 'novo', component:  AlunosFormComponent},
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunosFormComponent }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(ALUNOS_ROUTES) ],
  exports: [ RouterModule ]
})
export class AlunosRoutingModule { }
