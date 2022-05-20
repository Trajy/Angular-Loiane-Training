# Diretiva ngClass

Vamos tomar como exemplo um icone de favorito no qual ao clicar sobre o elemento o atributo class e alterado para modificar a aparencia, vamos utilizar os icones do bootstrap framework neste exemplo.

vamos utilizar o class binding como exemplo.

```HTML
<h1>
    <i
        class="bi"
        [class.bi-star]="!meuFavorito"
        [class.bi-star-fill]="meuFavorito"
        (click)="onFavoritar()"
    ></i>
</h1>
```
no exemplo acima, a tag i possui a class bi comum a ambos os  elementos, e logo em seguida o class binding ira atribuir outra classe ao icone de acordo com o estado da variavel meuFavorito (booleana), declarada no typescript do component

porem podemos utilizar o ngClass para tornar o codigo mais limpo e organizado, a diretiva ngClass recebe um objeto que contem as classes e suas respectivas logicas, coforme o exemplo a seguir

```HTML
<h1>
    <i
        class="bi"
        [ngClass]="{
            'bi-star': !meuFavorito,
            'bi-star-fill': meuFavorito
        }"
        (click)="onFavoritar()"
    ></i>
</h1>
```