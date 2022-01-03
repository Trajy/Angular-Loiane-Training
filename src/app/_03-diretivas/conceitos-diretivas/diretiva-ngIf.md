# Diretiva ngIf

possui o comportamento da condicinal if tradicional nas linguagens de programacao coforme o exemplo a seguir.

```typescript
var cursos = [];

if(cursos.lenght > 0){
    // alguma logica de programacao
}
else {
    // outra logica de programacao
}
```
recebe uma um valor booleano que pode ser fornecido de modo literal, por meio de uma variavel ou expressao booleana (com operadores de comparacao ou operadores logicos), entretanto e implementada no template (codigo HTML), conforme o exemplo a seguir.
```HTML
<div *ngIf="cursos.length > 0">
    Lista de Cursos Aqui
</div>
<div *ngIf="cursos.length == 0">
    Nao existem cursos na lista
</div>
```
no exemplo, existe um array com o identificador cursos no component corresponedente a este template HTML, a expressao passada a diretiva ngIf no primeiro caso ira comparar se existem valores no array (seu tamanho e maior do que 0), caso true sera exibido o texto no interior da div, caso false a div nao sera exibida, no segundo caso a comparacao e se o array cursos esta vazio, caso true a div e exibida e caso possuam elementos no array seu tamanho sera diferente de 0 retornando false para a expressao e a div nao sera exibida.

ao utilizar o ngIf e necessario manter atencao a questoes de desempenho, pois quando seu resultado varia de falso para verdadeiro o componente e renderizado novamento, e quando varia de verdadeiro para falso o component e destruido (o conteudo nao pode ser visto no console).

uma alternativa ao ngIf neste caso e o a propriedade hidden dos elementos HTML, mas mesmo que o conteudo nao esteja visivel na tela ainda pode ser vizualizado por meio do inspecionador do navegador, portanto em casos onde o conteudo nao pode ser exibido, deve-se utilizar o ngIf. segue exemplo de implementacao da propriedade hidden na tag div utilizando property biding.

```HTML
<div [hidden]="!(cursos.length > 0)">
    Lista de Cursos Aqui
</div>
<div [hidden]="!(cursos.length == 0)">
    Nao existem cursos na lista
</div>
```
a negacao do valor da expressao deve-se ao fato de que se retornado true a propriedade hidden esconde o elemento html. Outra recomendacao e a utilizacao da propriedade hidden em arvores de elementos pequenas (poucos components aninhados), para o caso de arvores grandes e recomendado o uso do ngIf. porem no caso de listas que possuem arvores grandes como por exemplo uma lista de postagens na qual ir conter Lista > post > nome-do-autor > ... hidden pode ser usado, pois o custo de performace e menor neste caso.


