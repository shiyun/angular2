import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>name: {{hero.name}} !</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <ul class="list-three">
        <li *ngFor="#prod of pro" (click)="gotoThree(hero.id,prod)">{{prod.id}}-{{prod.name}}</li>
      </ul>
    </div>
    <button (click)="goback()">返回</button>
  `,
  styles: [`
    .list-three li{background-color:rgba(255,0,0,1);color:#fff;transition: all .3s linear;float:left;margin-right:20px;padding:10px 30px;}
    .list-three li:hover{background-color:rgba(255,0,0,.5);}
  `]
})
export class HeroDetail implements OnInit {
  @Input() 
  hero: Hero;
  
  @Input() pro: Hero;
  
  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams,
    private _router: Router
  ){}
  
  ngOnInit(){    
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id).then(hero=>{this.hero = hero; this.pro = hero.product}) 
  }
  gotoThree(id: number, pro: Hero){
    console.log(id);
    console.log(pro);
    let link = ['HeroDetailThree', {id: id, sid: pro.id}];
    this._router.navigate(link);
  }
  goback(){
    window.history.go(-1);
  }
}
