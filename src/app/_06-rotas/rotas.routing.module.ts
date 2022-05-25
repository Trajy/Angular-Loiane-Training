import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CursosRoutingModule } from './rotas/cursos/cursos.routing.module';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';

const ROTAS_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(ROTAS_ROUTES),
    CursosRoutingModule
  ]
})
export class RotasRoutingModule {}
