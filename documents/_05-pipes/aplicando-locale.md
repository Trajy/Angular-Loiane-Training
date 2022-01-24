# __APLICANDO LOCALE (INTERNACIONALIZACAO NOS PIPES)__

Uma forma de declarar a regiao (ex: data no padrao brasileiro ou americano) e utilizar o locale.


__app _module_ (modulo raiz):__
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UsandoPipesParametrosEPipesAninhadosComponent } from './_05-pipes/usando-pipes-parametros-e-pipes-aninhados/usando-pipes-parametros-e-pipes-aninhados.component';
import { CriandoUmPipeModule } from './_05-pipes/criando-um-pipe/criando-um-pipe.module';

@NgModule({
  declarations: [
    UsandoPipesParametrosEPipesAninhadosComponent, 
  ],
  imports: [ 
    CriandoUmPipeModule,
  ],
  providers: [
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

OBS: CONTEUDO INCOMPLETO, RETOMAR