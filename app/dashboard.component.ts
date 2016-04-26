import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    template: `
        <h2>{{title}}</h2>
        <ul class="list-top">
            <li *ngFor="#hero of tops;" (click)="gotoDetail(hero)">{{hero.name}}</li>
        </ul>
    `,
    styles: [`
        .list-top {list-type:none;}
        .list-top li {cursor:pointer;height: 50px; width: 160px;line-height:50px;text-align:center;color:#fff;font-size:18px;display:inline-block;vertical-align: top;margin-left:20px;background-color:#607D8B;cursor:pointer;}
        .list-top li:hover{background-color:#eee;}
    `],
    providers: [HeroService]
})

export class DashboardComponent implements OnInit {
    private title = 'My Dashboard';
    
    private tops:Hero[] = [];
    
    constructor(
        private _router: Router, 
        private _heroService: HeroService
    ){};
    
    getHeros(){
        this._heroService.getHerosSlowly().then(result => this.tops = result.slice(0, 4));
    }
    ngOnInit(){
        this.getHeros();
    }
    gotoDetail(hero: Hero){
        console.log(hero);
        let link = ['HeroDetail', {id: hero.id}];
        this._router.navigate(link);
    }
}
