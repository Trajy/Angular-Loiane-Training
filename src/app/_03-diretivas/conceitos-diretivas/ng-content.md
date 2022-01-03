# ng-content

Uma forma de passar conteudo para o interior de um component e por meio de input property, entretanto quando o tamanho desse conteudo e maior exite uma forma mais conveniente, por meio da diretiva ng-content. Para este exemplo iremos utilizar um painel disponivel no bootstap 3 para exemplificar um cenario onde queremos passar um titulo e um corpo para o component.
OBS: as informacoes passadas ao compoenet sao pequenas apenas para exemplo.

Inicialmente temos um exemplo no qual os conteudos do titulo e o conteudo do painel estao inseridos de forma direta (hard coded).

```HTML
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Titulo do Painel</h3>
    </div>
    <div class="panel-body">
      Conteudo para ser exibito no corpo
    </div>
  </div>
```

para tornar os conteudos variaveis vamos utilizar a diretiva ng content.

```HTML
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">Titulo do Painel</h3>
    </div>
    <div class="panel-body">
        <ng-content></ng-content>
    </div>
</div>
```

Deste modo ao declarar o component em outro template basta declarar seu conteuto entre as tags seletoras.

```HTML
<app-ng-content-exemplo>
    Conteudo para ser exibito no corpo
</app-ng-content-exemplo>
```

tambem e possivel passar outros components entre as tags seletoras, utilizando o elvis operator component como exemplo.

```HTML
<app-ng-content-exemplo>
    Conteudo para ser exibito no corpo
    <app-elvis-operator></app-elvis-operator>
</app-ng-content-exemplo>
```

Para casos onde sao necessario a passagem de mais de um conteudo, e possivel utilizar seletores para identificar para qual diretiva ng-content o conteudo se destina.

```HTML
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">
            <ng-content select=".titulo"></ng-content>
        </h3>
    </div>
    <div class="panel-body">
        <ng-content select=".corpo"></ng-content>
    </div>
</div>
```

e para passagem do conteuto basta separar utilizando a tag div com a class relativa ao select do ng-content

```HTML
<app-ng-content-exemplo>
    <div class="titulo">
        Titulo do painel
    </div>
    <div class="corpo">
        Conteudo para ser exibito no corpo
        <app-elvis-operator></app-elvis-operator>
    </div>
</app-ng-content-exemplo>
```



