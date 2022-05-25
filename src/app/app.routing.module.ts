import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './_06-rotas/rotas/home/home.component';
import { LoginComponent } from './_06-rotas/rotas/login/login.component';
import { CursosRotasComponent } from './_06-rotas/rotas/cursos/cursos.component';
import { CursoDetalheComponent } from './_06-rotas/rotas/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './_06-rotas/rotas/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosRotasComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}