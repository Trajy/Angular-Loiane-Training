# Pre-Processadores (Sass, Less, Stylus)

Ao gerar um novo projeto, o Angular ira perguntar se deseja-se utilizar algum pre processador, porem caso o projeto ja seja iniciado, e possivel alterar essa configuracao atraves do seguinte comando, que exemplifica a alteracao para Sass.

```batch
$ ng set defaults.styleExt scss
```

Lembrando que os arquivos de style existentes irao manter sua extensao original e necessitam ser alterados a mao, apenas os novos componentes irao possuir o arquivo de style na nova extensao.