
import { HomeComponent } from './_06-rotas/rotas-simples/home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './_06-rotas/rotas-simples/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { CursosComponent } from './_06-rotas/rotas-simples/cursos/cursos.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cursos',
        component: CursosComponent
    }
]

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);