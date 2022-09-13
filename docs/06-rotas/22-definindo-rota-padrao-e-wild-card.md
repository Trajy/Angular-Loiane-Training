# Definindo Rota Padrao e Wild Card

## Definindo Rota Padrao

definir uma rota padrao para caso determinada rota nao seja encontrada e importante, pois um erro sera gerado no console se a aplicacao nao estiver configurada para realizar o redirecionamento para uma rota padrao.

Antes de configurar a rota, vamos verificar o comportamento do framework ao tentar acessar uma rota que nao existe.

<p align="center"> 
  <img src="img/rota-inexistente.gif"><br>
    Rota inexistente.
</p>

uma observao importante e que o angular ao tentar acessar uma rota compara realiza um laco de repeticao comparando qual objeto possui o atributo `path` com a rota declarada, deste modo e importante declarar o caminho vazio (ou seja raiz da applicacao) e o nao encontrado, como os ultimos objetos.

para definir a rota padrao para o angular utiliza-se `**` ou seja qualquer rota redirecione para este _component_ (por isso e importante que seja a ultima).

```typescript
import { PaginaNaoEncontradaComponent } from './rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';

const ROTAS_ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(ROTAS_ROUTES),
  ]
})
export class RotasRoutingModule {}
```

<p align="center"> 
  <img src="img/rota-padrao.gif"><br>
    Rota Padrao.
</p>

## Redirect

O redirect e util quando mais de uma rota necessita ir para o mesmo _component_, neste exemplo iremos atribuir a rota `/home` para `HomeComponent` e a rota raiz para redirecionar para `/home`

Note no codigo HTML a seguir que a opcao 'Home' foi incluida ao menu de navegacao com a rota "" (raiz)

```HTML
<nav *ngIf="mostrarMenu">
    <div class="nav-wrapper">
        <a routerLink="" class="brand-logo right">Rotas Ng2</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li routerLinkActive="active"><a routerLink="/login">Login</a></li>
        <li routerLinkActive="active"><a routerLink="">Home</a></li>
        <li routerLinkActive="active"><a routerLink="/cursos" [queryParams]="{pagina:1}">Cursos</a></li>
        <!-- <li routerLinkActive="active"><a [routerLink]="['curso', ]">Cursos com Id</a></li> -->
        <li routerLinkActive="active"><a routerLink='/alunos'>Alunos</a></li>
        </ul>
    </div>
</nav>
<div class="container">
    <!-- <p>Entre com o id do curso</p>
    <input #id_curso> -->
    <router-outlet></router-outlet>
</div>
```

e a seguinte configuracao no modulo de rotas.

```typescript
//...imports

const ROTAS_ROUTES: Routes = [
  //...demais rotas
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // lembre-se e importante que a rota vazia fique por ultimo
]

//...anotacao @NgModule
//...assinatura da classe
```

<p align="center"> 
  <img src="img/redirecionamento.gif"><br>
    Redirecionamento.
</p>




