import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.css']
})
export class PipeAsyncComponent implements OnInit {

  valorAsync = new Promise((resolucao, rejeicao) => 
    setTimeout(() => resolucao('valor Assincrono'), 10000)
  )

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor Assincrono'))

  constructor() { }

  ngOnInit(): void {
  }

}
