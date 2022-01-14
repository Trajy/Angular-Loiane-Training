import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceSingletonService } from './../service-singleton.service';
import { ComponentAComponent } from './component-a.component';

@NgModule({
  declarations: [
    ComponentAComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentAComponent
  ],
  // providers: [ServiceSingletonService]
})
export class ComponentAModule { }
