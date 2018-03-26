webpackJsonp(["iku.module"],{

/***/ "./src/app/pages/iku/iku.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    Input IKU\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <div class=\"holdertable\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n      </ng2-smart-table>\r\n    </div>\r\n\r\n    <div class=\"container-btn mt-2\">\r\n      <button class=\"btn btn-success btn-demo\" [routerLink]=\"['./iku-header']\" routerLinkActive=\"disableInput\" [disabled]=\"disableInput\">Input New Period</button>\r\n    </div>\r\n\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/iku/iku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IkuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IkuComponent = /** @class */ (function () {
    function IkuComponent(service) {
        this.service = service;
        this.settings = {
            sort: true,
            hideSubHeader: true,
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            pager: {
                display: false,
                perPage: 30
            },
            columns: {
                YEAR: {
                    title: "Year",
                    type: "string",
                    filter: false
                },
                NO_IKU: {
                    title: "No Of Iku",
                    type: "number",
                    filter: false
                },
                INPUT: {
                    title: "Inputed",
                    type: "string",
                    filter: false
                },
                REV: {
                    title: "Revision",
                    type: "string",
                    filter: false
                },
                DATE_CREATED: {
                    title: "Date Created",
                    type: "date-time",
                    filter: false,
                    valuePrepareFunction: function (value) {
                        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format("DD/MM/YYYY");
                    }
                },
                DATE_MODIFIED: {
                    title: "Date Modified",
                    type: "date-time",
                    filter: false,
                    valuePrepareFunction: function (value) {
                        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format("DD/MM/YYYY");
                    }
                }
            }
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();
        this.loadData();
    }
    IkuComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("TRN_IKU_HDs").subscribe(function (response) {
            var data = response;
            for (var item in data) {
                data[item].YEAR == __WEBPACK_IMPORTED_MODULE_1_moment__().format("YYYY")
                    ? (_this.disableInput = true)
                    : (_this.disableInput = false);
            }
            console.log(JSON.stringify(data));
            _this.source.load(data);
            (function (error) {
                console.log(error);
            });
        });
    };
    IkuComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm("Are you sure you want to delete?")) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    IkuComponent.prototype.searchRange = function (beginDate, endDate) {
        if (!(!beginDate && !endDate)) {
            this.source
                .setFilter([
                {
                    field: "dateTimeCreate",
                    search: "endDate",
                    filter: function (value, endValue) {
                        return new Date(value) >= new Date(endValue);
                    }
                }
            ], true)
                .setFilter([
                {
                    field: "dateTimeCreate",
                    search: "beginDate",
                    filter: function (value, beginValue) {
                        return new Date(value) >= new Date(beginValue);
                    }
                }
            ]);
        }
        else {
            return this.source;
        }
    };
    IkuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ngx-iku",
            template: __webpack_require__("./src/app/pages/iku/iku.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_data_backend_service__["a" /* BackendService */]])
    ], IkuComponent);
    return IkuComponent;
}());



/***/ }),

/***/ "./src/app/pages/iku/iku.header/iku.header.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Input New Periode</nb-card-header>\r\n  <nb-card-body>\r\n    <form #myForm=\"ngForm\" (ngSubmit)=\"register(myForm)\">\r\n      <div class=\"form-group\">\r\n        <label>Periode</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"yearPeriode\" placeholder=\"2018\" disabled>\r\n      </div>\r\n      <!-- <div class=\"form-group\">\r\n          <input type=\"text\" maxlength=\"3\" oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\" class=\"form-control\" name=\"noiku\" ngModel placeholder=\"Number of IKU\" >\r\n        </div> -->\r\n      <div ngModelGroup=\"iku\">\r\n        <div *ngFor=\"let ikuId of ikuIds; let i=index;\">\r\n          <div ngModelGroup=\"{{ikuId}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n\r\n                <div class=\"form-group\">\r\n                  <label>IKU {{i + 1}}</label>\r\n                  <select class=\"form-control\" name=\"type\" #iku=\"ngModel\" ngModel required>\r\n                    <option *ngFor=\"let data of ikuData\" value=\"{{data.NO_IKU}}\">{{data.DESCRIPTION}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Percentage IKU {{i + 1}}</label>\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">%</span>\r\n                    <input type=\"text\" maxlength=\"3\" oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\" class=\"form-control\" name=\"percentage\"\r\n                      #iku=\"ngModel\" ngModel required placeholder=\"Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-auto mt-1 pt-4 pb-4 mb-1\">\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" class=\"btn btn-success btn-demo\" (click)=\"showLargeModal(ikuId)\">Input RBB</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-auto mt-1 pt-4 pb-4 mb-1 \">\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" class=\"btn btn-danger btn-demo\" (click)=\"remove(i); myForm.control.markAsTouched()\">remove</button>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <show-errors [control]=\"phoneNumber\"></show-errors> -->\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-auto\">\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-demo\" (click)=\"add(); myForm.control.markAsTouched()\">Add IKU</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-auto\">\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success \">Submit</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </nb-card-body>\r\n\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/iku/iku.header/iku.header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RbbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IkuHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var RbbComponent = /** @class */ (function () {
    function RbbComponent(activeModal, service) {
        this.activeModal = activeModal;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["a" /* LocalDataSource */]();
        this.settings = {
            mode: "inline",
            sort: true,
            hideSubHeader: true,
            actions: {
                add: false,
                edit: true,
                delete: false
            },
            pager: {
                display: false,
                perPage: 30
            }
        };
        this.loadData();
    }
    RbbComponent.prototype.closeModal = function () {
        this.activeModal.close(this.tableData);
    };
    RbbComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("M_BANKS").subscribe(function (response) {
            var bank = response;
            var tempTable = [];
            console.log(JSON.stringify(response));
            _this.service
                .postreq("TRN_IKU_DTS/iku", {
                year: _this.modalData.year,
                no_iku: _this.modalData.no_iku
            })
                .subscribe(function (res) {
                var iku = res;
                console.log(JSON.stringify(res));
                var _loop_1 = function (data) {
                    var LST_YEAR_TW3 = function () {
                        for (var ikuData in iku.data) {
                            if (iku.data[ikuData].BANK == bank[data].BANK_NO) {
                                return iku.data[ikuData].TW3;
                            }
                        }
                    };
                    var LST_YEAR_TW4 = function () {
                        for (var ikuData in iku.data) {
                            if (iku.data[ikuData].BANK == bank[data].BANK_NO) {
                                return iku.data[ikuData].TW4;
                            }
                        }
                    };
                    var tempData = {
                        NO_IKU: _this.ikuNo,
                        NO: Number(data) + 1,
                        BANK: bank[data].DESCRIPTION,
                        BANK_NO: bank[data].BANK_NO,
                        LST_YEAR_TW3: LST_YEAR_TW3(),
                        LST_YEAR_TW4: LST_YEAR_TW4(),
                        TW1: "",
                        TW2: "",
                        TW3: "",
                        TW4: "",
                        GROWTH_PERCENTAGE: 0,
                        GROWTH: 0
                    };
                    tempTable.push(tempData);
                    _this.resume ? null : (_this.tableData = tempTable);
                };
                for (var data in bank) {
                    _loop_1(data);
                }
                _this.settings = {
                    mode: "inline",
                    sort: true,
                    hideSubHeader: true,
                    actions: {
                        add: false,
                        edit: true,
                        delete: false
                    },
                    pager: {
                        display: false,
                        perPage: 30
                    },
                    columns: {
                        NO: {
                            title: "No",
                            type: "number",
                            filter: false,
                            editable: false
                        },
                        BANK: {
                            title: "Bank",
                            type: "string",
                            filter: false,
                            editable: false
                        },
                        LST_YEAR_TW3: {
                            title: "TW 3 " + (Number(_this.modalData.year) - 1).toString(),
                            type: "number",
                            filter: false,
                            editable: false,
                            valuePrepareFunction: function (value) {
                                if (isNaN(value)) {
                                    return 0;
                                }
                                else {
                                    return value
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                }
                            }
                        },
                        LST_YEAR_TW4: {
                            title: "TW 4 " + (Number(_this.modalData.year) - 1).toString(),
                            type: "number",
                            filter: false,
                            editable: false,
                            valuePrepareFunction: function (value) {
                                if (isNaN(value)) {
                                    return 0;
                                }
                                else {
                                    return value
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                }
                            }
                        },
                        TW1: {
                            title: "TW1",
                            type: "number",
                            filter: false,
                            editable: true,
                            valuePrepareFunction: function (value) {
                                if (isNaN(value)) {
                                    return 0;
                                }
                                else {
                                    return Number(value)
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                }
                            }
                        },
                        TW2: {
                            title: "TW2",
                            type: "number",
                            filter: false,
                            editable: true,
                            valuePrepareFunction: function (value) {
                                if (isNaN(value)) {
                                    return 0;
                                }
                                else {
                                    return Number(value)
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                }
                            }
                        },
                        TW3: {
                            title: "TW3",
                            type: "number",
                            filter: false,
                            editable: true,
                            valuePrepareFunction: function (value) {
                                if (isNaN(value)) {
                                    return 0;
                                }
                                else {
                                    return Number(value)
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                }
                            }
                        },
                        TW4: {
                            title: "TW4",
                            type: "number",
                            filter: false,
                            editable: true,
                            valuePrepareFunction: function (value) {
                                if (isNaN(value)) {
                                    return 0;
                                }
                                else {
                                    return Number(value)
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                }
                            }
                        },
                        GROWTH_PERCENTAGE: {
                            title: "GROWTH %",
                            type: "number",
                            filter: false,
                            editable: false,
                            valuePrepareFunction: function (value) {
                                if (isNaN(value)) {
                                    return 0;
                                }
                                else {
                                    return value
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                }
                            }
                        },
                        GROWTH: {
                            title: "GROWTH AMOUNT",
                            type: "number",
                            filter: false,
                            editable: false,
                            valuePrepareFunction: function (value) {
                                if (isNaN(value)) {
                                    return 0;
                                }
                                else {
                                    return value
                                        .toString()
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                }
                            }
                        }
                    }
                };
                _this.source.load(_this.tableData);
            });
        }, function (error) {
            console.log(error);
        });
    };
    RbbComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm("Are you sure you want to delete?")) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    RbbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ngx-modal",
            template: __webpack_require__("./src/app/pages/iku/iku.header/rbb.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__["a" /* BackendService */]])
    ], RbbComponent);
    return RbbComponent;
}());

var IkuHeaderComponent = /** @class */ (function () {
    function IkuHeaderComponent(modalService, service, route) {
        this.modalService = modalService;
        this.service = service;
        this.route = route;
        this.count = 1;
        this.yearPeriode = __WEBPACK_IMPORTED_MODULE_3_moment__().format("YYYY");
        this.ikuIds = [1];
        this.tableData = new Array();
        this.loadData();
    }
    IkuHeaderComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("M_IKUS").subscribe(function (response) {
            _this.ikuData = response;
            console.log(JSON.stringify(_this.ikuData));
            (function (error) {
                console.log(error);
            });
        });
    };
    IkuHeaderComponent.prototype.showLargeModal = function (no_iku) {
        var _this = this;
        var data = {
            year: this.yearPeriode,
            no_iku: this.myForm.value.iku[no_iku].type
        };
        this.activeModal = this.modalService.open(RbbComponent, {
            windowClass: "xlModal",
            container: "nb-layout",
            backdrop: "static"
        });
        var a = {
            iku: {
                "iku[1]": {
                    type: "7",
                    percentage: ""
                },
                "iku[2]": {
                    type: "",
                    percentage: ""
                }
            }
        };
        this.tableData.forEach(function (data, i) {
            if (data[0].NO_IKU == _this.myForm.value.iku[no_iku].type) {
                _this.activeModal.componentInstance.resume = true;
                _this.activeModal.componentInstance.tableData = _this.tableData[i];
            }
        });
        this.activeModal.componentInstance.modalHeader = "Large Modal";
        this.activeModal.componentInstance.modalData = data;
        this.activeModal.componentInstance.ikuNo = this.myForm.value.iku[no_iku].type;
        this.activeModal.result.then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ini no" + response[0].NO_IKU);
                        if (!(response[0].NO_IKU !== "")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.tableData.forEach(function (element, i) {
                                if (element[0].NO_IKU == response[0].NO_IKU ||
                                    element[0].NO_IKU == "") {
                                    _this.tableData.splice(i, 1);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.tableData.push(response)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        console.log(JSON.stringify(this.tableData));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    IkuHeaderComponent.prototype.remove = function (i) {
        this.ikuIds.splice(i, 1);
    };
    IkuHeaderComponent.prototype.add = function () {
        this.ikuIds.push(++this.count);
    };
    IkuHeaderComponent.prototype.register = function (myForm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var a, lengthData, _a, _b, _i, data, trnHdTargetPost, trnHdPost;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        a = [];
                        lengthData = 0;
                        _a = [];
                        for (_b in this.myForm.value.iku)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        data = _a[_i];
                        if (!(this.myForm.value.iku[data].type !== "")) return [3 /*break*/, 3];
                        console.log(this.myForm.value.iku[data]);
                        lengthData++;
                        a.push(this.myForm.value.iku[data].type);
                        trnHdTargetPost = {
                            YEAR: this.yearPeriode,
                            IKU_TYPE: this.myForm.value.iku[data].type,
                            PERCENTAGE: Number(this.myForm.value.iku[data].percentage),
                            DATE_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__(),
                            DATE_MODIFIED: __WEBPACK_IMPORTED_MODULE_3_moment__()
                        };
                        return [4 /*yield*/, this.service
                                .postreq("trn_iku_hd_targets/posttarget", trnHdTargetPost)
                                .subscribe(function (response) {
                                console.log(JSON.stringify(response));
                            }, function (error) {
                                console.log(error);
                            })];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log(a);
                        console.log(this.tableData);
                        trnHdPost = {
                            YEAR: this.yearPeriode,
                            NO_IKU: lengthData,
                            INPUT: 0,
                            REV: 0,
                            DATE_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__(),
                            DATE_MODIFIED: __WEBPACK_IMPORTED_MODULE_3_moment__()
                        };
                        return [4 /*yield*/, this.service
                                .postreq("trn_iku_hds/replaceorcreate", trnHdPost)
                                .subscribe(function (response) {
                                console.log(JSON.stringify(response));
                            }, function (error) {
                                console.log(error);
                            })];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, this.tableData.forEach(function (data, i) {
                                if (a.find(function (item) { return item === data[0].NO_IKU; })) {
                                    data.forEach(function (item, i) {
                                        var dataPost = {
                                            YEAR: _this.yearPeriode,
                                            NO_IKU: item.NO_IKU,
                                            BANK: item.BANK_NO,
                                            TW1: Number(item.TW1),
                                            TW2: Number(item.TW2),
                                            TW3: Number(item.TW3),
                                            TW4: Number(item.TW4),
                                            DATE_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__(),
                                            DATE_MODIFIED: __WEBPACK_IMPORTED_MODULE_3_moment__()
                                        };
                                        console.log(dataPost);
                                        _this.service.postreq("trn_iku_dts/postdt", dataPost).subscribe(function (response) {
                                            console.log(JSON.stringify(response));
                                        }, function (error) {
                                            console.log(error);
                                        });
                                    });
                                }
                            })];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, this.tableData.forEach(function (data, i) {
                                if (a.find(function (item) { return item === data[0].NO_IKU; })) {
                                    data.forEach(function (item, i) {
                                        var dataPost = {
                                            YEAR: _this.yearPeriode,
                                            NO_IKU: item.NO_IKU,
                                            BANK: item.BANK_NO,
                                            TW1: 0,
                                            TW2: 0,
                                            TW3: 0,
                                            TW4: 0,
                                            DATE_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__(),
                                            DATE_MODIFIED: __WEBPACK_IMPORTED_MODULE_3_moment__()
                                        };
                                        console.log(dataPost);
                                        _this.service.postreq("trn_realisasi_ikus/postdt", dataPost).subscribe(function (response) {
                                            console.log(JSON.stringify(response));
                                        }, function (error) {
                                            console.log(error);
                                        });
                                    });
                                }
                            })];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, this.route.navigateByUrl("/pages")];
                    case 8:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], IkuHeaderComponent.prototype, "myForm", void 0);
    IkuHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ngx-iku-header",
            template: __webpack_require__("./src/app/pages/iku/iku.header/iku.header.component.html"),
            styles: [
                "\n    nb-card {\n      transform: translate3d(0, 0, 0);\n \n    },\n  \n  "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__["a" /* BackendService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]])
    ], IkuHeaderComponent);
    return IkuHeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/iku/iku.header/rbb.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    Input RBB\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <div class=\"holdertable\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n      </ng2-smart-table>\r\n    </div>\r\n    \r\n    <button type=\"button\" class=\"btn btn-primary btn-block mt-3\" (click)=\"closeModal()\">Submit</button>\r\n\r\n  </nb-card-body>\r\n\r\n<!-- \r\n  <pre>{{tableData | json}}</pre> -->\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/iku/iku.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IkuModule", function() { return IkuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iku_router_module__ = __webpack_require__("./src/app/pages/iku/iku.router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iku_header_iku_header_component__ = __webpack_require__("./src/app/pages/iku/iku.header/iku.header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var IkuModule = /** @class */ (function () {
    function IkuModule() {
    }
    IkuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */], __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */], __WEBPACK_IMPORTED_MODULE_2__iku_router_module__["a" /* IkuRouterModule */]],
            declarations: __WEBPACK_IMPORTED_MODULE_2__iku_router_module__["b" /* routedComponents */].concat([__WEBPACK_IMPORTED_MODULE_4__iku_header_iku_header_component__["b" /* RbbComponent */]]),
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__iku_header_iku_header_component__["b" /* RbbComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__["a" /* BackendService */]]
        })
    ], IkuModule);
    return IkuModule;
}());



/***/ }),

/***/ "./src/app/pages/iku/iku.router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IkuRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iku_component__ = __webpack_require__("./src/app/pages/iku/iku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iku_header_iku_header_component__ = __webpack_require__("./src/app/pages/iku/iku.header/iku.header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__iku_component__["a" /* IkuComponent */],
        children: [
            {
                path: "iku-header",
                component: __WEBPACK_IMPORTED_MODULE_3__iku_header_iku_header_component__["a" /* IkuHeaderComponent */],
            }
        ]
    }
];
var IkuRouterModule = /** @class */ (function () {
    function IkuRouterModule() {
    }
    IkuRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], IkuRouterModule);
    return IkuRouterModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_3__iku_header_iku_header_component__["a" /* IkuHeaderComponent */], __WEBPACK_IMPORTED_MODULE_2__iku_component__["a" /* IkuComponent */]];


/***/ })

});
//# sourceMappingURL=iku.module.chunk.js.map