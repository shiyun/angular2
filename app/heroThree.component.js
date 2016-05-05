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
    var HeroDetailThree;
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
            HeroDetailThree = (function () {
                function HeroDetailThree(_heroService, _routeParams) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                }
                HeroDetailThree.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    var sid = +this._routeParams.get('sid');
                    this._heroService.getPro(id, sid).then(function (prod) { return _this.prod = prod; });
                };
                HeroDetailThree.prototype.goback = function () {
                    window.history.go(-1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', hero_1.Hero)
                ], HeroDetailThree.prototype, "prod", void 0);
                HeroDetailThree = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n    <div *ngIf=\"prod\">\n      <h2>name: {{prod.name}} !</h2>\n      <div><label>id: </label>{{prod.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"prod.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n    <button (click)=\"goback()\">\u8FD4\u56DE</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
                ], HeroDetailThree);
                return HeroDetailThree;
            }());
            exports_1("HeroDetailThree", HeroDetailThree);
        }
    }
});
//# sourceMappingURL=heroThree.component.js.map