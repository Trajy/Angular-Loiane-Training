/* To create module from automatic way, insert the command ng g m <module-name> or ng g module <module-name>
  in angular CLI

  - to modularize (organize) the project, other modules can be create to contain a app part (exemple: purchashing system)
  - this modules need to be declare at main module (app.module)
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; /* pay attention, on main module (app.module) the class BrowserModule was declare,
                                                 on the other hand, this class contains the most communs funtions that are used at application. */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModuleCreatingAutomaticallyModule { }
