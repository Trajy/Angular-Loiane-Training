import { Component, 
         OnChanges, 
         OnInit, 
         DoCheck, 
         AfterContentInit, 
         AfterContentChecked, 
         AfterViewInit, 
         AfterViewChecked, 
         OnDestroy, 
         Input} from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements 
OnChanges, 
OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy {

  @Input() valorRecebido: number = 10 // ao receber novos valores o metodo ngOnChanges e disparado

  constructor() { 
    console.log('construtor')
  }
  // para exemplificar o ciclo utilizaremos logs que poderam ser vistos no console do navegador
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(){
    console.log('ngOnChanges')
  }

  ngDoCheck(){
    console.log('ngDoCheck')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(){
    console.log('ngAterContentChecked')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

}
