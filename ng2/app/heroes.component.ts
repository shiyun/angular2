import {Component,OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetail} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero',
  template:`
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes;#i=index;"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge" #id_{{i}}>{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [HeroDetail],
  providers: [HeroService]
})
export class HeroComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  
  constructor(private _heroService: HeroService){}
  getHeros(){
    this._heroService.getHerosSlowly().then(result=>this.heroes=result);
  }
  ngOnInit(){
    this.getHeros();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
  { "id": 1, "name": "Mr. Nice", "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}] },
  { "id": 2, "name": "Narco", "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}]  },
  { "id": 3, "name": "Bombasto", "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}] },
  { "id": 4, "name": "Celeritas" , "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}] },
  { "id": 5, "name": "Magneta", "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}]  },
  { "id": 6, "name": "RubberMan" , "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}] },
  { "id": 7, "name": "Dynama", "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}] },
  { "id": 8, "name": "Dr IQ", "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}]  },
  { "id": 9, "name": "Magma" , "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}]},
  { "id": 10, "name": "Tornado", "product":[{"id": 1, "name": "手机1"}, {"id": 2, "name": "电脑1"}] }
];