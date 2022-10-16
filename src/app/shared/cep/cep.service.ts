import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public consultaCep(cep: string) {
    console.log('entrei');
    const SOMENTE_DIGITOS_REGEX: RegExp = /\D/g
    const VALIDA_CEP_REGEX: RegExp = /^[0-9]{8}$/
    cep = cep.replace(SOMENTE_DIGITOS_REGEX, "")
    if(cep !== "" && VALIDA_CEP_REGEX.test(cep)) {
      return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    }
    return of({})
  }
}
