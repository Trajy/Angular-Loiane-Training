import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from './../../../assets/dados/estados/estados.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  public getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estados/estados.json')
  }
}
