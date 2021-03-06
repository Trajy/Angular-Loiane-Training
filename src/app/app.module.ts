// O comando para gerar um módulo automaticamente no angular CLI é ng g m <nome-do-modulo> ou ng g module <nome-do-modulo>
// - this is the main application module
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ComponentCreatingAutomaticallyComponent } from './_00-introducao/component-creating-automatically/component-creating-automatically.component';
import { MyFirstComponent } from './_00-introducao/component-creating-manualy/01-my-first-component'; // import da classe criada manualmente (MyFirstComponent)
import { CursosModule } from './_00-introducao/cursos/cursos.module';
import { CicloDeVidaComponent } from './_01-data-binding/ciclo-de-vida/ciclo-de-vida.component';
import { DataBindingModule } from './_01-data-binding/data-binding/data-binding.module';
import { ComponentParaTestarDiretivaDeEstruturaComponent } from './_03-diretivas/criando-diretiva-de-estrutura/component-para-testar-diretiva-de-estrutura/component-para-testar-diretiva-de-estrutura.component';
import { DiretivaDeEstruturaDirective } from './_03-diretivas/criando-diretiva-de-estrutura/diretiva/diretiva-de-estrutura.directive';
import { DiretivaNgClassComponent } from './_03-diretivas/diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './_03-diretivas/diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './_03-diretivas/diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgStyleComponent } from './_03-diretivas/diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './_03-diretivas/diretiva-ng-switch/diretiva-ng-switch.component';
import { ComponentParaTestarDiretivaInputEPropertyBindingComponent } from './_03-diretivas/diretivas-com-input-e-propertyBinding/component-para-testar-diretiva-input-e-property-binding/component-para-testar-diretiva-input-e-property-binding.component';
import { DiretivasComInputEPropertyBindingDirective } from './_03-diretivas/diretivas-com-input-e-propertyBinding/diretiva/diretivas-com-input-e-property-binding.directive';
import { DiretivasCustomizadasComponent } from './_03-diretivas/ElementRef-Renderer/diretivas-customizadas/diretivas-customizadas.component';
import { FundoAmareloDirective } from './_03-diretivas/ElementRef-Renderer/fundo-amarelo/fundo-amarelo.directive';
import { ElvisOperatorComponent } from './_03-diretivas/elvis-operator/elvis-operator.component';
import { ComponentParaTestarDiretivaComponent } from './_03-diretivas/HostListener-e-HostBinding/component-para-testar-diretiva/component-para-testar-diretiva.component';
import { HighLightMouseDirective } from './_03-diretivas/HostListener-e-HostBinding/highLight-mouse/high-light-mouse.directive';
import { NgContentExempleComponent } from './_03-diretivas/ng-content-exemple/ng-content-exemple.component';
import { ComponentComunicacaoAComponent } from './_04-services/comunicacao-entre-components-com-services/component-comunicacao-a/component-comunicacao-a.component';
import { ReceberCursoComponent } from './_04-services/comunicacao-entre-components-com-services/component-comunicacao-a/receber-curso/receber-curso.component';
import { ComponentComunicacaoBComponent } from './_04-services/comunicacao-entre-components-com-services/component-comunicacao-b/component-comunicacao-b.component';
import { CursosComponent } from './_04-services/criacao-primeiro-service/cursos/cursos.component';
import { ComponentAModule } from './_04-services/escopo-de-instancias/component-a/component-a.module';
import { ComponentBModule } from './_04-services/escopo-de-instancias/component-b/component-b.module';
import { PipeImpuroPipe } from './_05-pipes/criando-pipe-impuro/pipe-impuro.pipe';
import { PipeImpuroComponent } from './_05-pipes/criando-pipe-impuro/pipe-impuro/pipe-impuro.component';
import { PipePuroPipe } from './_05-pipes/criando-pipe-puro/pipe-puro.pipe';
import { PipePuroComponent } from './_05-pipes/criando-pipe-puro/pipe-puro/pipe-puro.component';
import { CriandoUmPipeModule } from './_05-pipes/criando-um-pipe/criando-um-pipe.module';
import { FiltroManeiraCorretaComponent } from './_05-pipes/maneira-correta-de-add-filtro-nos-projetos/filtro-maneira-correta/filtro-maneira-correta.component';
import { PipeAsyncComponent } from './_05-pipes/pipe-async/pipe-async-component/pipe-async.component';
import { PipeAsyncPipe } from './_05-pipes/pipe-async/pipe-async.pipe';
import { UsandoPipesParametrosEPipesAninhadosComponent } from './_05-pipes/usando-pipes-parametros-e-pipes-aninhados/usando-pipes-parametros-e-pipes-aninhados.component';
import { RotasModule } from './_06-rotas/rotas.module';


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
    ComponentComunicacaoAComponent,
    ComponentComunicacaoBComponent,
    ReceberCursoComponent,
    UsandoPipesParametrosEPipesAninhadosComponent,
    PipePuroComponent,
    PipePuroPipe,
    PipeImpuroPipe,
    PipeImpuroComponent,
    FiltroManeiraCorretaComponent,
    PipeAsyncComponent,
    PipeAsyncPipe,
  ],
  imports: [ // meta-dado para declarar outros módulos, a fim de utilizar neste módulo ou nos componentes.
    MaterializeModule,
    BrowserModule,
    CursosModule, // import do modulo de cursos.module da secao 00-intriducao
    DataBindingModule,
    FormsModule,
    ComponentAModule,
    ComponentBModule,
    CriandoUmPipeModule,
    // ROUTING,
    RotasModule,
    AppRoutingModule,
  ],
  providers: [
    // PrimeiroService,
    // ServiceSingletonService

    // RETOMAR E RESOLVER INCOMPATIBILIDADE (AULA 45)
    //{
    //  provide: LOCALE_ID,
    //  useValue: 'pt-PT'
    //}
  ], // meta-dado para declarar os serviços disponíveis aos componentes deste módulo, como esse é o AppModule (modulo pricipal), os serviçõs aqui declarados estaram disponíveis para toda a aplicação.
  bootstrap: [AppComponent] // meta-dado presente somente no modulo raiz ou seja AppModule, aqui esta declarado o componente que deve ser instanciado ao executar a aplicação.
                            // OBS: como no angular 2 trabalhamos com o conceito de SPA (Single Page Application), aqui sera declarado o compoenente que servirá de container para a nossa aplicação.
})
export class AppModule { }
