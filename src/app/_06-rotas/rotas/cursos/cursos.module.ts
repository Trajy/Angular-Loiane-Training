import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosServiceService } from './cursos-service.service';
import { CursosRotasComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
    declarations: [
        CursosRotasComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    imports: [
      CommonModule, // possui as diretivas ngIf ngFor, validaceos e etc.
      CursosRoutingModule
    ],
    exports: [],
    providers:[CursosServiceService]
})
export class CursosModule {}
