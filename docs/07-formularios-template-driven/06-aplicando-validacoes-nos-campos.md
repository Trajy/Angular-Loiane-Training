# Aplicando validacoes nos campos

O HTML5 ja possui algumas validacoes de campos, e o Angular tambem possui suas validacoes. podemos verificar as validacoes do Angular na [documentacao oficial](https://angular.io/api?query=validator), as validacoes do Angular sao aplicadas como diretivas no template HTML, inicialmente iremos apenas adicionar as diretivas aos campos, porem como nenhum controle foi implementado, as validacoes nao irao realizar nenhum algoritmo, nos documentos posteriores as validacoes serao utilizadas para aplicacao de CSS e exibir as devidas mensagens de erro.

para este exemplo vamos aplicar as validacoes de `email` e `required`.

```HTML
<form #formulario="ngForm" (ngSubmit)="onSubmit(formulario)">
  <div class="form-group">
      <label for="nome">Nome</label>
      <input type="text" class="form-control" id="nome" placeholder="Insira o nome" name="nome" [(ngModel)]="usuario.nome"
        required
      >
  </div>
  <div class="form-group">
    <label for="email">E-mail</label>
    <input type="email" class="form-control" id="email" placeholder="Insira o e-mail" name="email" [(ngModel)]="usuario.email"
      required email
    >
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
```
