System.register(['angular2/core', '../hero-detail.component', './login.service', '../footerDown/footerDown.component'], function(exports_1, context_1) {
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
    var core_1, hero_detail_component_1, login_service_1, footerDown_component_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (footerDown_component_1_1) {
                footerDown_component_1 = footerDown_component_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_loginService) {
                    this._loginService = _loginService;
                }
                LoginComponent.prototype.getVeriCode = function (phoneNum) {
                    var data = JSON.stringify({ phone: phoneNum.value, type: 1 });
                    this._loginService.getVeriCode(data).then(function (res) { return console.log(res); });
                };
                LoginComponent.prototype.login = function (phoneNum, veriNum) {
                    var data = JSON.stringify({ phone: phoneNum.value, verifyCode: veriNum.value });
                    this._loginService.login(data).then(function (res) { return console.log(res); });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-page',
                        templateUrl: 'app/Login/login.html',
                        styleUrls: ['app/Login/login.css'],
                        directives: [hero_detail_component_1.HeroDetail, footerDown_component_1.FooterDownComponent],
                        providers: [login_service_1.LoginService]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map