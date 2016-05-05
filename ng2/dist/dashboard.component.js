System.register(['angular2/core', 'angular2/router', './hero.service'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _heroService) {
                    this._router = _router;
                    this._heroService = _heroService;
                    this.title = 'My Dashboard';
                    this.tops = [];
                }
                ;
                DashboardComponent.prototype.getHeros = function () {
                    var _this = this;
                    this._heroService.getHerosSlowly().then(function (result) { return _this.tops = result.slice(0, 4); });
                };
                DashboardComponent.prototype.ngOnInit = function () {
                    this.getHeros();
                };
                DashboardComponent.prototype.gotoDetail = function (hero) {
                    console.log(hero);
                    var link = ['HeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        template: "\n        <h2>{{title}}</h2>\n        <ul class=\"list-top\">\n            <li *ngFor=\"#hero of tops;\" (click)=\"gotoDetail(hero)\">{{hero.name}}</li>\n        </ul>\n    ",
                        styles: ["\n        .list-top {list-type:none;}\n        .list-top li {cursor:pointer;height: 50px; width: 160px;line-height:50px;text-align:center;color:#fff;font-size:18px;display:inline-block;vertical-align: top;margin:0 20px 20px 0;background-color:#607D8B;cursor:pointer;transition: all .3s linear;}\n        .list-top li:hover{background-color:#eee;}\n    "],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map