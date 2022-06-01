# Instalacao e Criacao de Projetos

## Instalacao

E possivel utilizar o gerenciador de pacotes npm (gerenciador de pacotes do nodeJs), ou seja e necessario ter o nodeJs instalado localmente na versao 4 ou superior.

para verificar a versao altual do nodeJS, basta utilizar o seguinte comando

```batch
$ node -v
```

e para instalar o angular

<!-- varificar pois pode haver alteracoes na linha de comando em novas versoes do angular, vide a documentacao oficial -->
```batch
$ npm install -g angular-cli
```
## Criacao de projetos

 Ao criar um novo projeto os arquivos fundamentais e as dependencias basicas para o funciomento do escopo incial serao criados, basta navegar ate o diretorio desejado e utilizar o seguinte comando.

 ```batch
 $ ng new NomeProjeto
 ```
 este comando ira criar um novo diretorio com o nome NomeProjeto e em seu interior irao ser criados os arquivos do projeto angular. Caso ja exista um diretorio no qual seja necessario criar apenas os arquivos iniciais do projeto em seu interior, utiliza-se.

```batch
# ng init
```

 Uma observacao importante e que os nomes dos projetos podem comecar apenas com letras ou underscore, "_", conforme os exemplos.
 - NomeProjeto
 - nome01
 - _01-projeto

 para iniciar o projeto localmente, basta utilizar

```batch
$ ng s
```
ou
```batch
$ ng serve
```
e importante notar que por padrao o angular inicia o projeto na porta 4200, caso seja necessario alterar a porta basta utilizar alterando as portas padroes para as desejadas.

```batch
$ ng serve --port 4200 --live-reload-port 49153
```
