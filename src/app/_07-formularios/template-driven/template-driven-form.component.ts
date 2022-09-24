import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  usuario: any = {
    nome: "teste_nome",
    email: "teste_email"
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(formulario: any): void {
    console.log(formulario);
    console.log(this.usuario);
  }

}
