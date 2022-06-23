import { FormsModule } from '@angular/forms';
import { RotasRoutingModule } from './rotas.routing.module';
import { NgModule } from "@angular/core";
import { CursosModule } from './rotas/cursos/cursos.module';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';
import { AlunosModule } from './rotas/alunos/alunos.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
  // CursosModule, // comentado, pois esta declarado no app.routing.module.ts para utilizar o Lazy Loading
  // AlunosModule,
    FormsModule,
    RotasRoutingModule
  ],
})
export class RotasModule {}
