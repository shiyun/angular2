System.register(['angular2/core', '../footerDown/footerDown.component', './orderList.service'], function(exports_1, context_1) {
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
    var core_1, footerDown_component_1, orderList_service_1;
    var OrderListComponent, meow_iter;
    function quips(name) {
        yield "hello " + name + "!";
        yield "i hope you are enjoying the blog posts";
        if (name.toLowerCase().startsWith("x")) {
            yield "hey, it's cool how your name starts with an X, " + name;
        }
        yield "see you later!";
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (footerDown_component_1_1) {
                footerDown_component_1 = footerDown_component_1_1;
            },
            function (orderList_service_1_1) {
                orderList_service_1 = orderList_service_1_1;
            }],
        execute: function() {
            OrderListComponent = (function () {
                function OrderListComponent(_orderService) {
                    this._orderService = _orderService;
                }
                OrderListComponent = __decorate([
                    core_1.Component({
                        selector: 'orderList',
                        templateUrl: 'app/orderList/orderList.html',
                        styleUrls: ['app/orderList/orderList.css'],
                        directives: [footerDown_component_1.FooterDownComponent],
                        providers: [orderList_service_1.OrderListService]
                    }), 
                    __metadata('design:paramtypes', [orderList_service_1.OrderListService])
                ], OrderListComponent);
                return OrderListComponent;
            }());
            exports_1("OrderListComponent", OrderListComponent);
            meow_iter = quips("Xingu");
        }
    }
});
//# sourceMappingURL=orderList.component.js.map