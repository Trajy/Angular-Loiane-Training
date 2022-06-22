import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosServiceService } from '../cursos-service.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription = new Subscription()
  curso: any;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _service: CursosServiceService) {
   }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.id = params['id']

        this.curso = this._service.getCurso(params['id'])

        if(this.curso == null) this._router.navigate(['/cursos/nao-encontrado'])
      }
    )
  }

  ngOnDestroy(): void{
    this.inscricao.unsubscribe()
  }

}
