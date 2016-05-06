System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var OrderListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            OrderListService = (function () {
                function OrderListService(_http) {
                    this._http = _http;
                }
                OrderListService.prototype.getOrderListParentId = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var _url = '/api/getParentId';
                    var getPid = new Promise(function (resolve, reject) {
                        _this._http.post(_url, {}, { headers: headers })
                            .subscribe(function (data) { return resolve(data.json()); }, function (err) { return reject(err); }, function () { return console.log('get pid complete'); });
                    });
                    return getPid;
                };
                OrderListService.prototype.getQuan = function (cb) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Content-Type', 'application/json');
                    var _url = '/api/product';
                    function getPidFun() {
                        yield this.getOrderListParentId().then(function (res) { return res; });
                    }
                    ;
                    var obj = getPidFun().next();
                    var pro = new Promise(function (resolve, reject) {
                        _this._http.post(_url, obj, { headers: headers })
                            .subscribe(function (data) { return resolve(data.json()); }, function (err) { return reject(err); }, function () { return console.log('get complete'); });
                    });
                    return pro;
                };
                OrderListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OrderListService);
                return OrderListService;
            }());
            exports_1("OrderListService", OrderListService);
        }
    }
});
//# sourceMappingURL=orderList.service.js.map