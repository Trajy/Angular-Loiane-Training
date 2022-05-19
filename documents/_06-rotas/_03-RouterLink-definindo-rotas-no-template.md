# __Router Link - Definindo rotas no template__

As rotas sao definidas diretamente no template html por meio da diretiva `routerLink` declarada nas tags. Para exemplificar vamos utilizar o framework de CSS, [Materialize](http://archives.materializecss.com/0.100.2/), para criar um [menu](http://archives.materializecss.com/0.100.2/navbar.html) e redirecionar para cada _compoenent_ por meio de um botao (lembrando que as rotas ja estao declaradas no conteudo do arquivo `app.routing.ts`, vide [CONFIGURANDO ROTAS SIMPLES](_02-configurando-rotas-simples.md)).

```HTML
<nav>
    <div class="nav-wrapper">
        <!-- note qua as tags ancora (a), possuem a diretiva routerLink
        com o caminho para o component -->
        <a routerLink="" class="brand-logo right">Rotas Ng2</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a routerLink="/login">Login</a></li>
        <li><a routerLink="/cursos">Cursos</a></li>
        </ul>
    </div>
</nav>
<div class="container">
    <router-outlet></router-outlet>
</div>
```

logo abaixo do menu de navegacao esta declarada uma div com a tag `<router-outlet>` (responsavel por renderizar os components por meio de seus caminhos), logo apenas o conteudo da div sera alterado ao clicar nos elementos do menu.