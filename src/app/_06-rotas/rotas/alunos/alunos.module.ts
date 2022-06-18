import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunoDetalheComponent,
  ],
  imports: [
    AlunosRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [],
  providers: [ AlunosService ]
})
export class AlunosModule { }
