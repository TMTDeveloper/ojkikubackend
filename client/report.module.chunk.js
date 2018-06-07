webpackJsonp(["report.module"],{

/***/ "./src/app/pages/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nb-card>\n  <nb-card-header>\n    View Report\n  </nb-card-header>\n\n  <nb-card-body>\n    <div class=\"holdertable\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\n      </ng2-smart-table>\n    </div>\n\n\n\n  </nb-card-body>\n</nb-card> -->\n\n<nb-card>\n  <nb-card-body>\n    On Progress\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = /** @class */ (function () {
    function ReportComponent(service) {
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
                DESCRIPTION: {
                    title: "Description",
                    type: "string",
                    filter: false
                },
                PERCENTAGE: {
                    title: "Target",
                    type: "number",
                    filter: false
                },
                TW1: {
                    title: "TW 1",
                    type: "string",
                    filter: false
                },
                TW2: {
                    title: "TW 2",
                    type: "string",
                    filter: false
                },
                TW3: {
                    title: "TW 3",
                    type: "string",
                    filter: false
                },
                TW4: {
                    title: "TW 4",
                    type: "string",
                    filter: false
                }
            }
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.loadData();
    }
    ReportComponent.prototype.loadData = function () {
        var _this = this;
        console.log("why tho");
        this.service.getreq("reports").subscribe(function (response) {
            var data = response;
            console.log(JSON.stringify(data));
            _this.source.load(data);
        }, function (error) {
            console.log(error);
        });
    };
    ReportComponent.prototype.searchRange = function (beginDate, endDate) {
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
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-report",
            template: __webpack_require__("./src/app/pages/report/report.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_backend_service__["a" /* BackendService */]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_router_module__ = __webpack_require__("./src/app/pages/report/report.router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */], __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */], __WEBPACK_IMPORTED_MODULE_2__report_router_module__["a" /* ReportRouterModule */]],
            declarations: __WEBPACK_IMPORTED_MODULE_2__report_router_module__["b" /* routedComponents */].slice(),
            entryComponents: [],
            providers: [__WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__["a" /* BackendService */]]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/pages/report/report.router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_component__ = __webpack_require__("./src/app/pages/report/report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */],
    }
];
var ReportRouterModule = /** @class */ (function () {
    function ReportRouterModule() {
    }
    ReportRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ReportRouterModule);
    return ReportRouterModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */]];


/***/ })

});
//# sourceMappingURL=report.module.chunk.js.map