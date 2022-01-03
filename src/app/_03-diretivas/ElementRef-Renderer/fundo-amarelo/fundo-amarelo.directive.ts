import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    console.log(this._elementRef)
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'green'
    )
   }

}
