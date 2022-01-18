import { PipePersonalizadoPipe } from './pipe-personalizado/pipe-personalizado.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriandoUmPipeComponent } from './criando-um-pipe.component';

@NgModule({
  declarations: [
    CriandoUmPipeComponent,
    PipePersonalizadoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CriandoUmPipeComponent
  ]
})
export class CriandoUmPipeModule { }
