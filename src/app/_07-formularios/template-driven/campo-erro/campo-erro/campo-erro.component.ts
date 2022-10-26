import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-erro',
  templateUrl: './campo-erro.component.html',
  styleUrls: ['./campo-erro.component.css']
})
export class CampoErroComponent {

  @Input() mostrarErro: any;
  @Input() mensagemErro: string;

}
