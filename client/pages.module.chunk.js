webpackJsonp(["pages.module"],{

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nb-card>\n    <nb-card-header>OJK Dashboard</nb-card-header>\n  </nb-card>\n</div>\n "

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEM_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MENU_ITEM_USER; });
var MENU_ITEM_ADMIN = [
    {
        title: "Dashboard",
        icon: "nb-home",
        link: "/pages/dashboard",
        home: true
    },
    {
        title: "Reporting",
        icon: "nb-bar-chart",
        children: [
            {
                title: "Report IKU",
                link: "/pages/report/report-iku"
            },
            {
                title: "Report MOKA",
                link: "/pages/report/report-moka"
            }
        ]
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
                title: "User Log",
                link: "/pages/master/master-log-user"
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
        title: "Transaction IKU",
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
            },
            {
                title: "Indicator Strategic",
                link: "/pages/transaction/indicator-strategic"
            },
            {
                title: "Realisasi Strategic",
                link: "/pages/transaction/realisasi-strategic"
            }
        ]
    },
    {
        title: "Transaction MOKA",
        icon: "nb-compose",
        children: [
            {
                title: "Target MOKA",
                link: "/pages/transaction/moka-target"
            },
            {
                title: "Realisasi MOKA",
                link: "/pages/transaction/moka-realisasi"
            }
        ]
    }
];
var MENU_ITEM_USER = [
    {
        title: "Dashboard",
        icon: "nb-home",
        link: "/pages/dashboard",
        home: true
    },
    {
        title: "Reporting",
        icon: "nb-bar-chart",
        children: [
            {
                title: "Report IKU",
                link: "/pages/report/report-iku"
            },
            {
                title: "Report MOKA",
                link: "/pages/report/report-moka"
            }
        ]
    },
    {
        title: "Transaction IKU",
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
            },
            {
                title: "Indicator Strategic",
                link: "/pages/transaction/indicator-strategic"
            },
            {
                title: "Realisasi Strategic",
                link: "/pages/transaction/realisasi-strategic"
            }
        ]
    },
    {
        title: "Transaction MOKA",
        icon: "nb-compose",
        children: [
            {
                title: "Target MOKA",
                link: "/pages/transaction/moka-target"
            },
            {
                title: "Realisasi MOKA",
                link: "/pages/transaction/moka-realisasi"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__ = __webpack_require__("./src/app/security/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "",
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [
            {
                path: "report",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "./report/report.module#ReportModule"
            },
            {
                path: "dashboard",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__["a" /* AuthGuard */]],
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]
            },
            {
                path: "iku",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "./iku/iku.module#IkuModule"
            },
            {
                path: "",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__["a" /* AuthGuard */]],
                redirectTo: "dashboard",
                pathMatch: "full"
            },
            {
                path: "realisasi",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "./realisasi/realisasi.module#RealisasiModule"
            },
            {
                path: "master",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "./master/master.module#MasterModule"
            },
            {
                path: "transaction",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4__security_auth_guard_service__["a" /* AuthGuard */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesComponent = /** @class */ (function () {
    function PagesComponent(authService) {
        this.authService = authService;
        this.getUserInfo();
    }
    PagesComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.authService.onTokenChange().subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
            }
        });
    };
    PagesComponent.prototype.ngOnInit = function () {
        console.log('ini menu');
        console.log(this.user);
        if (this.user.TEAM != "admin") {
            this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["b" /* MENU_ITEM_USER */];
        }
        else {
            this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEM_ADMIN */];
        }
    };
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-pages",
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["e" /* NbAuthService */]])
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