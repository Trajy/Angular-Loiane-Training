import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosServiceService } from './cursos-service.service';
import { CursosRotasComponent } from './cursos.component';

@NgModule({
    declarations: [
        CursosRotasComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    imports: [
      CommonModule, // possui as diretivas ngIf ngFor, validaceos e etc.
      RouterModule
    ],
    exports: [],
    providers:[CursosServiceService]
})
export class CursosModule {}
