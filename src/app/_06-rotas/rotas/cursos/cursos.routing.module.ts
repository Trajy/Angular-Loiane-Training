import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRotasComponent } from './cursos.component';

import { NgModule } from "@angular/core";

const CURSOS_ROUTES: Routes = [
  { path: '', component: CursosRotasComponent },
  { path: ':id', component: CursoDetalheComponent },
  { path: 'nao-encontrado', component: CursoNaoEncontradoComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(CURSOS_ROUTES),
  ],
  exports: [ RouterModule ]
})
export class CursosRoutingModule {}
