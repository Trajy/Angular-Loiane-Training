import { PaginaNaoEncontradaComponent } from './rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';

const ROTAS_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PaginaNaoEncontradaComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(ROTAS_ROUTES),
  ]
})
export class RotasRoutingModule {}
