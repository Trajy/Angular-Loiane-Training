import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[DiretivasComInputEPropertyBinding]'
})
export class DiretivasComInputEPropertyBindingDirective implements OnInit  {

  @HostBinding('style.backgroundColor') backgroundColor: string 
  @Input() defaultColor: string = 'white'
  @Input('DiretivasComInputEPropertyBinding') highLightColor: string = 'yellow'

  constructor() { 
    this.backgroundColor = this.defaultColor
    console.log(this.backgroundColor)
  }
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
    console.log(this.backgroundColor);
  }

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highLightColor
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor
  }
}
