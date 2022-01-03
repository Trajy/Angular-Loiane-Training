/* To create componet from automatic way, insert the command ng g c <component-name> or ng g component <component-name>
  in angular CLI

  All files inside path component-creating-automatically was create automatically

  app modules declaration was update automatically too (vide file app.modules.ts)
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-creating-automatically',
  templateUrl: './component-creating-automatically.component.html',
  styleUrls: ['./component-creating-automatically.component.css']
})
export class ComponentCreatingAutomaticallyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
