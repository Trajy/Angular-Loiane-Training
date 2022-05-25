import { RotasRoutingModule } from './_06-rotas/rotas.routing.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [

]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES),
        RotasRoutingModule
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}
