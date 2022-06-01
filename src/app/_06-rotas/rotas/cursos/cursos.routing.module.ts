import { CommonModule } from '@angular/common';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRotasComponent } from './cursos.component';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from "@angular/core";

const CURSOS_ROUTES: Routes = [
  { path: 'cursos', component: CursosRotasComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'nao-encontrado', component: CursoNaoEncontradoComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(CURSOS_ROUTES),
  ],
  exports: [ RouterModule ]
})
export class CursosRoutingModule {}
