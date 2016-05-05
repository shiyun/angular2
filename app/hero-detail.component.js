System.register(['angular2/core', 'angular2/router', './hero', './hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_1, hero_service_1;
    var HeroDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetail = (function () {
                function HeroDetail(_heroService, _routeParams, _router) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                HeroDetail.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._heroService.getHero(id).then(function (hero) { _this.hero = hero; _this.pro = hero.product; });
                };
                HeroDetail.prototype.gotoThree = function (id, pro) {
                    console.log(id);
                    console.log(pro);
                    var link = ['HeroDetailThree', { id: id, sid: pro.id }];
                    this._router.navigate(link);
                };
                HeroDetail.prototype.goback = function () {
                    window.history.go(-1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', hero_1.Hero)
                ], HeroDetail.prototype, "hero", void 0);
                HeroDetail = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n    <div *ngIf=\"hero\">\n      <h2>name: {{hero.name}} !</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n      <ul class=\"list-three\">\n        <li *ngFor=\"#prod of pro\" (click)=\"gotoThree(hero.id,prod)\">{{prod.id}}-{{prod.name}}</li>\n      </ul>\n    </div>\n    <button (click)=\"goback()\">\u8FD4\u56DE</button>\n  ",
                        styles: ["\n    .list-three li{background-color:rgba(255,0,0,1);color:#fff;transition: all .3s linear;float:left;margin-right:20px;padding:10px 30px;}\n    .list-three li:hover{background-color:rgba(255,0,0,.5);}\n  "]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams, router_1.Router])
                ], HeroDetail);
                return HeroDetail;
            }());
            exports_1("HeroDetail", HeroDetail);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map