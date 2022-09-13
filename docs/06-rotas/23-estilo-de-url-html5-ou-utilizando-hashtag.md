Estilo de url: Html 5 ou utilizando #

Ao trabalhar com projetos que utilizando comunicacao com servidores, uma forma de diferenciar as rotas de roteamento e as chamadas para o servidor e utlizar `/#/` como rota raiz da aplicacao, ou seja, todas as rotas de roteamento para _compoenents_ irao iniciar com este prefixo, entretando ao nao utilizar o prefixo estamos utilizando o padrao de url HTML 5.

para utilizar o padrao com o prefixo, basta adicionar um objeto com o atributo `useHash` ao metodo `forRoot` da aplicacao.

```typescript
//...imports

//... constante APP_ROUTES

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, { useHash: true }),
        RotasRoutingModule
    ],
    exports:[
        RouterModule
    ]
})

//...assinatura da classe
```


<p align="center"> 
  <img src="img/rotas-com-hashtag.gif"><br>
    Utilizando # nas rotas.
</p>

<p align="center"> 
  <img src="img/rotas-padrao-html5.gif"><br>
    rotas padrao html5.
</p>


