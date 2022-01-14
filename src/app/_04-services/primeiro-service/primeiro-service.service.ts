import { Injectable } from "@angular/core";

@Injectable()
export class PrimeiroService {

constructor(){ }

    getCursos(){
        return ['angular 2', 'Java', 'NodeJs']
    }
}