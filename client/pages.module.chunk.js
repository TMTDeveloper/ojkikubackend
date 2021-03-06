webpackJsonp(["pages.module"],{

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <nb-card>\r\n    <nb-card-header>OJK Dashboard</nb-card-header>\r\n  </nb-card>\r\n</div>\r\n "

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MENU_MONI; });
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
                title: "User",
                link: "/pages/master/master-user"
            },
            {
                title: "User Bank",
                link: "/pages/master/user-bank"
            },
            {
                title: "Bank List",
                link: "/pages/master/master-bank"
            },
            {
                title: "IKU List",
                link: "/pages/master/iku"
            },
            {
                title: "Document List",
                link: "/pages/master/document"
            },
            {
                title: "User Log",
                link: "/pages/master/master-log-user"
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
            },
            {
                title: "Chart MOKA",
                link: "/pages/transaction/moka-chart"
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
            },
            {
                title: "Chart MOKA",
                link: "/pages/transaction/moka-chart"
            }
        ]
    }
];
var MENU_MONI = [
    {
        title: "Dashboard",
        icon: "nb-home",
        link: "/pages/dashboard",
        home: true
    },
    {
        title: "Master",
        icon: "nb-locked",
        children: [
            {
                title: "Barang",
                link: "/pages/master/master-barang"
            },
            {
                title: "Merk",
                link: "/pages/master/master-merk"
            },
            {
                title: "Log Moni",
                link: "/pages/master/master-log-moni"
            }
        ]
    },
    {
        title: "Transaction MONI",
        icon: "nb-compose",
        children: [
            {
                title: "Assignment Barang",
                link: "/pages/transaction/assignment-barang"
            },
            {
                title: "Beli Barang",
                link: "/pages/transaction/beli-barang"
            },
            {
                title: "Order Atk",
                link: "/pages/transaction/detail-atk"
            },
            {
                title: "Peminjaman Barang",
                link: "/pages/transaction/assignment-pinjam"
            },
            {
                title: "Pengembalian Barang",
                link: "/pages/transaction/assignment-kembali"
            }
        ]
    },
    {
        title: "Report MONI",
        icon: "nb-compose",
        children: [
            {
                title: "Report Assignment",
                link: "/pages/transaction/report-assignment"
            },
            {
                title: "Report Pengembalian",
                link: "/pages/transaction/report-kembali"
            },
            {
                title: "Report Peminjaman",
                link: "/pages/transaction/report-pinjam"
            },
            {
                title: "Report Beli",
                link: "/pages/transaction/report-beli"
            },
            {
                title: "Report Atk",
                link: "/pages/transaction/report-atk"
            },
            {
                title: "Report Inventory",
                link: "/pages/transaction/report-inv"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_users_service__ = __webpack_require__("./src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
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
    function PagesComponent(authService, activeRoute, backend, cookie, service) {
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.backend = backend;
        this.cookie = cookie;
        this.service = service;
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
        // let data = {
        //   USERNAME: this.user.USER_NAME,
        //   DATETIME_LOGIN: moment().format(),
        //   COMPONENT: this.cookie.get("Type") == "moni" ? "MONI" : "MOKA"
        // };
        // this.service.postreq("LOGIN_LOGS", data).subscribe(response => {
        //   console.log(response);
        // });
        console.log("ini menu");
        console.log(this.user);
        if (this.cookie.get("Type") == "moni") {
            this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["c" /* MENU_MONI */];
        }
        else {
            if (this.user.TEAM != "admin") {
                this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["b" /* MENU_ITEM_USER */];
            }
            else {
                this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEM_ADMIN */];
            }
        }
    };
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-pages",
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["e" /* NbAuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_data_module__ = __webpack_require__("./src/app/@core/data/data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
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
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* PagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_data_data_module__["a" /* DataModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
            ],
            declarations: PAGES_COMPONENTS.slice(),
            providers: [__WEBPACK_IMPORTED_MODULE_7__core_data_backend_service__["a" /* BackendService */]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map