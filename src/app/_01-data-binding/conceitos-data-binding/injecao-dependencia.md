# INJECAO DE DEPENDENCIA

O conceito de injecao de dependencias e definido como o processo de criar e prover instancias que uma determinada classe precisa
para ser instanciada e utilizada. E um design pattern (padrao de codigo) utilizado para evitar o alto nivel de acoplamento de codigo
dentro de uma aplicacao. Sistemas com baixo nivel de acoplamento apresentao as seguintes vantagens: Facilidade de manutencao, facilidade de implementacao de novas funcionalidades, habilita o uso de mocks para realizar init testes

            
## Dependencia
primeiro vamos entender o conceito de dependencia, Ao criar uma classe ela possui depedencias, que nada mais sao do que propriedades providas por elementos de fora da classe, como por exemplo os argumentos necessarios para instanciar determinado objeto de uma classe. Em outras palavras dependencia e tudo que o objeto precisa para funcionar que vem de fora da classe.

## Injecao de dependencia na pratica
Veja o caso abaixo. A classe Order irá criar uma nova instância de OrderItem toda vez que for inicializada.

```java
public class Order {

    private OrdemItem _ordemItem = new OrdemItem();

    puclic void addItem() {
        _ordemItem.add();
    }
}
```

A primeira vista, a classe Order parece normal (e é, dependendo do nível de acoplamento que você deseja). Mas você terá alguns problemas quando precisar testar esse código. A classe Order contém uma instância de OrderItem no seu escopo. Além do que, toda alteração feita no construtor de OrderItem afetará diretamente a classe Order.

### Injeção de Dependência e Inversão de Controle
Injeção de dependência é uma das duas maneiras de implementar a inversão de controle. Inversão de controle é um termo mais amplo, onde a responsabilidade de informar a implementação a ser utilizada deixa de ser da classe, e passa a ser do consumidor da classe. A segunda maneira de implementar a IoC (Inversion of Control) seria com Service Locator. Toda implementação de inversão de controle nos ajuda a seguir o primeiro e o último dos cincos princípios SOLID.

- S — Single-responsiblity principle
- O — Open-closed principle
- L — Liskov substitution principle
- I — Interface segregation principle
- D — Dependency Inversion Principle

O padrão Injeção de dependência diz: Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

Vamos implementar Injeção de Dependência na classe Order. O código deve ficar mais ou menos assim.

```java
public class Order {

    private OrderItem _orderItem;

    public void Order(OrderItem ordemItem) {
        _orderItem = orderItem;
    }

    public void addItem() {
        _ordemItem.add();
    }
}
```

Não fizemos nada além de remover a instância da classe OrderItem do escopo e adicioná-la ao construtor. Dessa maneira, enviamos a responsabilidade para quem instância a classe Order. Esse tipo de injeção é chamada de Contructor Injection. São três no total:
- Injeção por Construtor
- Injeção por Interface
- Injeção por propriedades (metodos get/set)

### Injeção por Construtor
Acontece quando a classe a ser utilizada recebe por construtor uma instância de classe que ela mesmo irá utilizar. No nosso caso, precisamos utilizar métodos de OrderItem dentro de Order, para isso, a instância de OrderItem é enviada através do construtor de Order.

```java
class Program {

    static void main(String[] args) {

        Order o = new Order(new OrderItem());
        o.addItem();

        Console.read();
    }
}
```
### Injeção por Interface
Ao invés de receber o construtor por parâmetro, agora a classe deve receber uma abstração da implementação que ela irá utilizar, através de uma interface. O grande benefício é que quem define qual implementação da abstração a ser utilizada, é quem está utilizando a classe principal.

```java
public interface OrderItemInterface {

    void add();
}

public class OrderItem : OrderItemInterface {

    public OrderItem(){ }

    public void add() {

        Console.log("Adding...");
    }
}
```
Nesse caso, podemos criar duas implementações diferentes de OrderItemInterface. Quando a classe Order é instânciada, passamos por parâmetro a implementação desejada de OrderItem.

```java
public class OrderItemExtra : OrderItemInterface {

    public OrderItemExtra() { }

    public void add() {
        Console.log("Adding Extra... \n");
    }
}

class Program {
    static void main(String[] args) {

        Order o = new Order(new OrderItem());
        o.addItem();

        Order o2 = new Order(new OrderItemExtra());
        o2.addItem();
    }

    Console.read();
}
```

### Injeção por propriedades (metodos get/set)
Ocorre quando se tem a classe a ser injetada exposta como uma propriedade.

```java
public class Order {

    private OrderItem _orderItem;

    public OrderItem OrderItem {

        get {
            if (_orderItem == null) throw new Exception("Nao Inicializado");
            return _orderItem;
        }

        set {
            _orderItem = value;
        }
    }
}
```
[Clique aquir para ler o artigo na integra](https://medium.com/@eduardolanfredi/inje%C3%A7%C3%A3o-de-depend%C3%AAncia-ff0372a1672)

[Injeção de dependência no Angular](https://angular.io/guide/dependency-injection)
