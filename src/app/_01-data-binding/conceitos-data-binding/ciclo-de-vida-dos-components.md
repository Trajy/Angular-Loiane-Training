# Ciclo de vida dos componenets 
Tambem chamados de hooks.

\# | declaracao | quando ocorre
---|-----------|--------------
1  |ngOnChanges|depois de #2 e quando o valor property binding e atualizado
2  |ngOnInit   |quando o component e atualizado
3  |ngDoCheck  |a cada ciclo de verificacao de mudancas
4  |ngAfterContentInit|depois de inserir conteudo externo na view
5  |ngAfterContentChecked |a cada verificacao de conteudo inserido
6  |ngAfterViewChecked |a cada verificacao de conteudo / conteudo filho
7  |ngOnDestroy |antes da diretiva / component ser destruido
