import { Injectable } from '@angular/core';

@Injectable(
  //{providedIn: 'root'}
  )
export class ServiceSingletonService {

  constructor() { 
    console.log('Instancia do Service')
  }

  getCursos(){
    return ['Angular', 'NodeJs']
  }
}
