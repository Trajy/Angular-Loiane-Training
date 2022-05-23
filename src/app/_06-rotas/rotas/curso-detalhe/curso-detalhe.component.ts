import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string = "";
  inscricao: Subscription = new Subscription()

  constructor(private _route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.id = params['id']
      }
    )
  }

  ngOnDestroy(): void{
    this.inscricao.unsubscribe()
  }

}
