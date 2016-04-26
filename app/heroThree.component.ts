import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="prod">
      <h2>name: {{prod.name}} !</h2>
      <div><label>id: </label>{{prod.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="prod.name" placeholder="name"/>
      </div>
    </div>
    <button (click)="goback()">返回</button>
  `
})
export class HeroDetailThree implements OnInit {
  @Input() 
  prod: Hero;
  
  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams
  ){}
  
  ngOnInit(){
    let id = +this._routeParams.get('id');
    let sid = +this._routeParams.get('sid');
    this._heroService.getPro(id, sid).then(prod=>this.prod = prod);    
  }
  goback(){
    window.history.go(-1);
  }
}
