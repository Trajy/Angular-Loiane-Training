import { AuthGuard } from './_06-rotas/guards/auth.guard';
import { RotasRoutingModule } from './_06-rotas/rotas.routing.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./_06-rotas/rotas/cursos/cursos.module').
      then(mod => mod.CursosModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./_06-rotas/rotas/alunos/alunos.module').
      then(mod => mod.AlunosModule),
      canActivate: [AuthGuard]
  }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES),
        RotasRoutingModule
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}
