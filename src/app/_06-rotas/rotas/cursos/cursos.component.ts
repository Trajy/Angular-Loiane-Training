import { Subscription } from 'rxjs';
import { CursosServiceService } from './cursos-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosRotasComponent implements OnInit {

  cursos: any
  pagina: number = 0
  inscricao: Subscription

  constructor(
    private _service: CursosServiceService,
    private _route: ActivatedRoute,
    private _router: Router) {

  }

  ngOnInit(): void {
    this.cursos = this._service.getCursos()

    this.inscricao = this._route.queryParams.subscribe( 
      (queryParams: any) => {
        this.pagina = queryParams['pagina']
      }

    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  proximaPagina(): void {
    this._router.navigate(
      ['/cursos'],
      {
        queryParams: {
          'pagina': ++this.pagina
        }
      }
    )
  }

}
