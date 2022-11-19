import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string) {
    return this.http.get('assets/dados/validacao-assincrona/verificar-email.json')
      .pipe(
        delay(5000),
        map((dados: any) => dados.emails),
        tap(console.log),
        map((dados: { email: string }[]) => dados.filter(valor => valor.email === email)),
        tap(console.log),
        map((dados: Array<any>) => dados.length > 0)
      )
  }

}
