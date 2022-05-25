import { CursoNaoEncontradoComponent } from './_06-rotas/rotas/cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './_06-rotas/rotas/login/login.component';
import { HomeComponent } from './_06-rotas/rotas/home/home.component';
import { CursosRotasComponent } from './_06-rotas/rotas/cursos/cursos.component';
import { CursoDetalheComponent } from './_06-rotas/rotas/cursos/curso-detalhe/curso-detalhe.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosRotasComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent}
]

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);