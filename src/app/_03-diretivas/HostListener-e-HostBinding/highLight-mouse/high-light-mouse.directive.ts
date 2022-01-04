import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highLightMouse]'
})
export class HighLightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor() { 
    this.backgroundColor = ''
  }

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = ''
  }

}
