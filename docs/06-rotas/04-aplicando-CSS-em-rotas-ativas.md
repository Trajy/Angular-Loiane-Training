# Aplicando CSS em rotas ativas

A api de rodas to angular possui a diretiva `routerLinkActive`, aplica as classes passadas como valor para o component que estiver ativo, utilizando o exemplo do documento [Router Link - Definindo rotas no template](03-RouterLink-definindo-rotas-no-template.md), basta adicionar a diretivas nas tags, conforme o exemplo

```HTML
<a routerLinkActive="active" routerLink="/login">Login</a>
```
deste modo quando a rota `/login` estiver ativa, a classe active (classe do [Materialize](http://archives.materializecss.com/0.100.2/)) sera aplicada a tag `<a>` correspondente.
