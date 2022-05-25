import { NgModule } from "@angular/core";
import { CursosModule } from './rotas/cursos/cursos.module';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
   CursosModule
  ],
})
export class RotasModule {}
