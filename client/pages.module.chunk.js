webpackJsonp(["pages.module"],{

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nb-card>\n    <nb-card-header>IKU Project</nb-card-header>\n  </nb-card>\n</div>\n "

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-dashboard",
            template: __webpack_require__("./src/app/pages/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: "Dashboard",
        icon: "nb-home",
        link: "/pages/dashboard",
        home: true
    },
    {
        title: "Reporting",
        icon: "nb-bar-chart",
        link: "/pages/report"
    },
    {
        title: "Master",
        icon: "nb-locked",
        children: [
            {
                title: "Bank",
                link: "/pages/master/master-bank"
            },
            {
                title: "User",
                link: "/pages/master/master-user"
            },
            {
                title: "User Bank",
                link: "/pages/master/user-bank"
            },
            {
                title: "Iku",
                link: "/pages/master/iku"
            }
        ]
    },
    {
        title: "Transaction",
        icon: "nb-compose",
        children: [
            {
                title: "Indicator Quantitative",
                link: "/pages/transaction/indicator-quantitative"
            },
            {
                title: "Realisasi Quantitative",
                link: "/pages/transaction/realisasi-quantitative"
            },
            {
                title: "Indicator Qualitative",
                link: "/pages/transaction/indicator-qualitative"
            },
            {
                title: "Realisasi Qualitative",
                link: "/pages/transaction/realisasi-qualitative"
            }
        ]
    }
];
// {
//   title: 'FEATURES',
//   group: true,
// },
// {
//   title: 'Auth',
//   icon: 'nb-locked',
//   children: [
//     {
//       title: 'Login',
//       link: '/auth/login',
//     },
//     {
//       title: 'Register',
//       link: '/auth/register',
//     },
//     {
//       title: 'Request Password',
//       link: '/auth/request-password',
//     },
//     {
//       title: 'Reset Password',
//       link: '/auth/reset-password',
//     },
//   ],
// },


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("./src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [
            {
                path: "report",
                loadChildren: "./report/report.module#ReportModule"
            },
            {
                path: "dashboard",
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]
            },
            {
                path: "iku",
                loadChildren: "./iku/iku.module#IkuModule"
            },
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full"
            },
            {
                path: "realisasi",
                loadChildren: "./realisasi/realisasi.module#RealisasiModule"
            },
            {
                path: "master",
                loadChildren: "./master/master.module#MasterModule"
            },
            {
                path: "transaction",
                loadChildren: "./transaction/transaction.module#TransactionModule"
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("./src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
    }
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-pages",
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  "
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("./src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__("./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__ = __webpack_require__("./src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PAGES_COMPONENTS = [__WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */]];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* PagesRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */], __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */]],
            declarations: PAGES_COMPONENTS.slice()
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map