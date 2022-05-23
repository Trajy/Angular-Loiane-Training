import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './_06-rotas/rotas/login/login.component';
import { HomeComponent } from './_06-rotas/rotas/home/home.component';
import { CursoDetalheComponent } from './_06-rotas/rotas/curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './_06-rotas/rotas/cursos/cursos.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent }
]

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);