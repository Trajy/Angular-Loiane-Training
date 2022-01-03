# Criacao de Components e Services

## Criacao de Components

para criar um component, basta estar na raiz do projeto e utilizar o comando.
```batch
$ ng generate component <nome-do-component>
```
ou
```batch
$ ng g c <nome-do-component>
```
sera gerado um diretorio com todos os arquivos relativos ao compoenent (component ,template, style, tests).

Ao gerar um component ele sera adicionado automaticamente ao app.module, caso seja necessario adicionar um modulo relativo ao component para organizar melhor o projeto, basta utilizar estar na raiz do projeto o seguinte comando e corrigir as importacoes no metadados de cada modulo.

```batch
$ ng g m <nome-do-component>
```
ou
```batch
$ ng generate module <nome-do-component>
```
o modulo sera adicionado junto ao diretorio do component

Um caso diferente ocorre ao tentar criar uma classe Seervice (classe de servicos), pois o componente nao e adicionado automaticamente ao diretorio do component, logo e necessario especificar o caminho do Service, conforme o exemplo.

```batch
$ ng g service <diretorio-do-component/nome-do-component>
```
desta forma a classe de servico sera adicionada junto ao diretorio contendo todos os arquivos relativos ao component, tambem e possivel especificar um caminho diferente para o Service caso desejado. Caso nenhum diretorio seja especificado, o Service sera gerado no diretorio app.

Outros comandos podem ser digitados no terminal para gerar outros tipos de arquivo, segue a tabela contendo todos os tipos e seu comando.

Tipo de arquivo | Comando
----------------|---------
Component | ng g component meu-component
Service | ng g service meu-servico
Directive | ng g directive minha-diretiva
Pipe | ng g pipe meu-pipe
Class | ng g class minha-classe
Interface | ng g interface minha-interface
Enum | ng g enum meu-enum

