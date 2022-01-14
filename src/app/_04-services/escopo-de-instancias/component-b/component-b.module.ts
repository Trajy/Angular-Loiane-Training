import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceSingletonService } from '../service-singleton.service';
import { ComponentBComponent } from './component-b.component';

@NgModule({
  declarations: [
    ComponentBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentBComponent
  ],
  // providers: [ServiceSingletonService]
})
export class ComponentBModule { }
