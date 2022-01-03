// Criação do primeiro componente de forma manual para entender sua estrutura e nomenclatura.

// é necessário importar a classe Component (pesquisar sobre módulos da ECMAScript 2015, funcionalidade incluída nessa versão)
import { Component } from "@angular/core"; //pacote pertencente ao Angular

// A nomenclatura das classes segue o padrão CamelCase

/* para que o compilador entenda que essa classe pertence ao Angular é necessário
    utilizar um decorator, é a mesma coisa que as anotações em JAVA.
    utiliza-se o decorator @Component({ metadados })
    a notação "{}" no escopo (parenteses) do decorator representa um objeto do JavaScript.
*/
@Component({
    selector:'my-first-component', //nome da tag HTML do nosso componente
    template: `
        <p>My First Component</p>
    `
})

/* para expor a classe para outras partes do cógico é necessario a notação "export" antes da notação "class",
    porem somente a notação irá resultar em erro de interpretação do código, componentes, pipes, serviços
    precisão ser declarados em um módulo no Angular 2 (vide o arquivo app.module.ts)
*/
export class MyFirstComponent {

}