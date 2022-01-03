# Diretivas Introducao

as diretivas sao components sem template (nao pussuem codigo HTML, CSS associado ao codigo typescript), porem sao usadas para passar instrucoes para os templates (codigo HTML) de outros components.
segue um exemplo de diretiva ngFor implementada em um template.
```HTML
<ul>
    <li *ngFor="let curso of cursos">
        {{ curso }}
    </li>
</ul>
```
no exemplo acima, sera executado a iteracao da tag li mostrando todos os elementos do array cursos por meio da variavel curso interpolada.

as diretivas podem ser separadas em 2 grupos

Tipo de diretiva | Descricao | nome da diretiva
-----------------|-----------|------------------
Diretivas Estruturais | Interagem com a view<br>e modificao a estrutura<br>do DOM e/ou codigo HTML | *ngFor<br>*ngIf
Diretivas de Atributos | Interagem com o elemento<br>em que foram aplicadas,<br> OBS: Nao modificam a<br>estrutura do DOM| ng-class<br>ng-style

