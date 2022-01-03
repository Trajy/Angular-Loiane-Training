/* para criar classes de servico atraves do angular CLI use o comando ng g s <nome-servico> ou ng g service <nome-servico>
OBS: no caso da geracao de classes de servico atraves do angular CLI os arquivos sao gerados na raiz do projeto para gerar
em um diretorio especifico basta especificar o caminho, como no exemplo a seguir que foi utilizado para geracao desta classe.
EX: ng g s cursos/cursos
O arquivo e gerado no seguinte caminho /cursos/cursos.service.ts

Sevices (servicos): Sao classes para declarar comportamentos que nao sao relativos a interacao com o usuario
  Ex: logica de conexao com o back-end, conexao com o banco de dados.
  
  Diagrama de exemplo
  Component --> Service --> Back-End (node.js, java, .NET, Ruby, Python)

  
*/

import { Injectable } from '@angular/core';

@Injectable({ // decorator para indicar que essa e uma classe de servico
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java do service', 'Angular do service', 'Spring do service'] // array apenas para exemplificar o retorno de dados do servidor
  }
}
