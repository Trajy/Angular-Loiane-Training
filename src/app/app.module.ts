import { ComponentBModule } from './_04-services/escopo-de-instancias/component-b/component-b.module';
import { ComponentAModule } from './_04-services/escopo-de-instancias/component-a/component-a.module';
// O comando para gerar um módulo automaticamente no angular CLI é ng g m <nome-do-modulo> ou ng g module <nome-do-modulo>
// - this is the main application module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './_00-introducao/component-creating-manualy/01-my-first-component'; // import da classe criada manualmente (MyFirstComponent)
import { ComponentCreatingAutomaticallyComponent } from './_00-introducao/component-creating-automatically/component-creating-automatically.component';
import { CursosModule } from './_00-introducao/cursos/cursos.module';
import { DataBindingModule } from './_01-data-binding/data-binding/data-binding.module';
import { CicloDeVidaComponent } from './_01-data-binding/ciclo-de-vida/ciclo-de-vida.component';
import { DiretivaNgIfComponent } from './_03-diretivas/diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgSwitchComponent } from './_03-diretivas/diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgForComponent } from './_03-diretivas/diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgClassComponent } from './_03-diretivas/diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgStyleComponent } from './_03-diretivas/diretiva-ng-style/diretiva-ng-style.component';
import { ElvisOperatorComponent } from './_03-diretivas/elvis-operator/elvis-operator.component';
import { NgContentExempleComponent } from './_03-diretivas/ng-content-exemple/ng-content-exemple.component';
import { FundoAmareloDirective } from './_03-diretivas/ElementRef-Renderer/fundo-amarelo/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './_03-diretivas/ElementRef-Renderer/diretivas-customizadas/diretivas-customizadas.component';
import { HighLightMouseDirective } from './_03-diretivas/HostListener-e-HostBinding/highLight-mouse/high-light-mouse.directive';
import { ComponentParaTestarDiretivaComponent } from './_03-diretivas/HostListener-e-HostBinding/component-para-testar-diretiva/component-para-testar-diretiva.component';
import { DiretivasComInputEPropertyBindingDirective } from './_03-diretivas/diretivas-com-input-e-propertyBinding/diretiva/diretivas-com-input-e-property-binding.directive';
import { ComponentParaTestarDiretivaInputEPropertyBindingComponent } from './_03-diretivas/diretivas-com-input-e-propertyBinding/component-para-testar-diretiva-input-e-property-binding/component-para-testar-diretiva-input-e-property-binding.component';
import { DiretivaDeEstruturaDirective } from './_03-diretivas/criando-diretiva-de-estrutura/diretiva/diretiva-de-estrutura.directive';
import { ComponentParaTestarDiretivaDeEstruturaComponent } from './_03-diretivas/criando-diretiva-de-estrutura/component-para-testar-diretiva-de-estrutura/component-para-testar-diretiva-de-estrutura.component';
import { CursosComponent } from './_04-services/criacao-primeiro-service/cursos/cursos.component';
import { PrimeiroService } from './_04-services/primeiro-service/primeiro-service.service';
import { ComponentAComponent } from './_04-services/escopo-de-instancias/component-a/component-a.component';
import { ComponentBComponent } from './_04-services/escopo-de-instancias/component-b/component-b.component';
import { ServiceSingletonService } from './_04-services/escopo-de-instancias/service-singleton.service';

@NgModule({
  declarations: [ // meta-dado para declarar componentes, diretivas e pipes.
    AppComponent,
    MyFirstComponent, // declaração da classe MyFisrtCompoenet no módulo.
    ComponentCreatingAutomaticallyComponent, // auto-update from automatic component create. 
    CicloDeVidaComponent,   // para exemplificar outra forma de relacionar os modulos aos componentes, o component ciclo-de-vida nao possui um modulo e foi declaro diretamento no app.modulo (modulo raiz).
    DiretivaNgIfComponent, 
    DiretivaNgSwitchComponent, 
    DiretivaNgForComponent, 
    DiretivaNgClassComponent, 
    DiretivaNgStyleComponent, 
    ElvisOperatorComponent, 
    NgContentExempleComponent, 
    FundoAmareloDirective, 
    DiretivasCustomizadasComponent, 
    HighLightMouseDirective, 
    ComponentParaTestarDiretivaComponent, 
    DiretivasComInputEPropertyBindingDirective, 
    ComponentParaTestarDiretivaInputEPropertyBindingComponent, 
    DiretivaDeEstruturaDirective, 
    ComponentParaTestarDiretivaDeEstruturaComponent, 
    CursosComponent,
  ],
  imports: [ // meta-dado para declarar outros módulos, a fim de utilizar neste módulo ou nos componentes.
    BrowserModule,
    CursosModule, // import do modulo de cursos.module
    DataBindingModule,
    FormsModule,
    ComponentAModule,
    ComponentBModule,
  ],
  //providers: [PrimeiroService, ServiceSingletonService], // meta-dado para declarar os serviços disponíveis aos componentes deste módulo, como esse é o AppModule (modulo pricipal), os serviçõs aqui declarados estaram disponíveis para toda a aplicação.
  bootstrap: [AppComponent] // meta-dado presente somente no modulo raiz ou seja AppModule, aqui esta declarado o componente que deve ser instanciado ao executar a aplicação.
                            // OBS: como no angular 2 trabalhamos com o conceito de SPA (Single Page Application), aqui sera declarado o compoenente que servirá de container para a nossa aplicação.
})
export class AppModule { }
