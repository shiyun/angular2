System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FooterDownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FooterDownComponent = (function () {
                function FooterDownComponent() {
                }
                FooterDownComponent.prototype.appDownload = function () {
                    var qdID = "9021", apiUrl = "http://api.alpha.haolawyers.cn/", downLoadUrl = "http://app.pocketlawyer.cn/customer_ewm/" + qdID;
                    window.location.href = downLoadUrl;
                };
                FooterDownComponent = __decorate([
                    core_1.Component({
                        selector: 'footerDown',
                        template: "\n  <footer class=\"footer-index\">\n    <a href=\"javascript:;\" (click)=\"appDownload()\" class=\"downWrap\"><img src=\"/app/index/img/down.png\" width=\"100%\" /></a>\n  </footer>\n  ",
                        styles: ["\n    .footer-index {\n      position:fixed;bottom:0;right:0;left:0;\n    }\n    .downWrap {display:block;opacity:.8;}\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterDownComponent);
                return FooterDownComponent;
            }());
            exports_1("FooterDownComponent", FooterDownComponent);
        }
    }
});
//# sourceMappingURL=footerDown.component.js.map