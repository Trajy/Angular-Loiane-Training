import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

// a diretiva ngElse nao existe no angular, entao vamos criar uma
@Directive({
  selector: '[ngElse]'
})
export class DiretivaDeEstruturaDirective {

  @Input() set ngElse(condition: boolean) {
    if(!condition){ // como estamos trabalhando com ngElse, queremos o caso em que a condicao e negada
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    }
    else{
      this._viewContainerRef.clear()
    }

  }

  constructor(
    private _templateRef: TemplateRef<any>, 
    private _viewContainerRef: ViewContainerRef
  ) { 

  }

}