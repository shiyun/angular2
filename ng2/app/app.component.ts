import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HeroComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {HeroDetail} from './hero-detail.component';
import {HeroDetailThree} from './heroThree.component';
import {LoginComponent} from './Login/login.component';
import {IndexComponent} from './index/index.component';
import {OrderListComponent} from './orderList/orderList.component';

const isLogin = false;

@Component({
  selector: 'my-app',
  template:`
    <!--<h1>this page from {{title}}</h1>   
    <a [routerLink]="['Index']">Index</a> 
    <a [routerLink]="['MyDashboard']">MyDashboard</a>
    <a [routerLink]="['Heroes']">heroes</a>
    <indexPage (updateTitle)="changeTitle($event)"></indexPage>-->
    <router-outlet></router-outlet>
    
  `,                                                                                                                                                                                                                                                                    
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]  
})

@RouteConfig([
  {
    path: '/ng/index',
    name: 'Index',                                                                                                                                         
    component: IndexComponent,
    useAsDefault: !isLogin
  },
  {
    path: '/ng/login',
    name: 'Login',                                                                                                                                         
    component: LoginComponent,
    useAsDefault: isLogin
  },
  {
    path: '/ng/heroes',
    name: 'Heroes',                                                                                                                                         
    component: HeroComponent
  },
  {
    path: '/ng/dashboard',
    name: 'MyDashboard',
    component: DashboardComponent
  },
  {
    path: '/ng/heroDetail/:id',
    name: 'HeroDetail',
    component: HeroDetail
  },
  {
    path: '/ng/heroDetail/:id/:sid',
    name: 'HeroDetailThree',
    component: HeroDetailThree
  },
  {
    path: '/ng/orderList',
    name: 'OrderList',
    component: OrderListComponent
  }
])

export class AppComponent {
  title: string;
  changeTitle(title: string){
    this.title = title;
    console.log(title)
  }
}