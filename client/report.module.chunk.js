webpackJsonp(["report.module"],{

/***/ "./node_modules/angular2-csv/Angular2-csv.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var CsvConfigConsts = (function () {
    function CsvConfigConsts() {
    }
    return CsvConfigConsts;
}());
CsvConfigConsts.EOL = "\r\n";
CsvConfigConsts.BOM = "\ufeff";
CsvConfigConsts.DEFAULT_FIELD_SEPARATOR = ',';
CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR = '.';
CsvConfigConsts.DEFAULT_QUOTE = '"';
CsvConfigConsts.DEFAULT_SHOW_TITLE = false;
CsvConfigConsts.DEFAULT_TITLE = 'My Report';
CsvConfigConsts.DEFAULT_FILENAME = 'mycsv.csv';
CsvConfigConsts.DEFAULT_SHOW_LABELS = false;
CsvConfigConsts.DEFAULT_USE_BOM = true;
CsvConfigConsts.DEFAULT_HEADER = [];
exports.CsvConfigConsts = CsvConfigConsts;
exports.ConfigDefaults = {
    filename: CsvConfigConsts.DEFAULT_FILENAME,
    fieldSeparator: CsvConfigConsts.DEFAULT_FIELD_SEPARATOR,
    quoteStrings: CsvConfigConsts.DEFAULT_QUOTE,
    decimalseparator: CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR,
    showLabels: CsvConfigConsts.DEFAULT_SHOW_LABELS,
    showTitle: CsvConfigConsts.DEFAULT_SHOW_TITLE,
    title: CsvConfigConsts.DEFAULT_TITLE,
    useBom: CsvConfigConsts.DEFAULT_USE_BOM,
    headers: CsvConfigConsts.DEFAULT_HEADER
};
var Angular2Csv = (function () {
    function Angular2Csv(DataJSON, filename, options) {
        this.csv = "";
        var config = options || {};
        this.data = typeof DataJSON != 'object' ? JSON.parse(DataJSON) : DataJSON;
        this._options = objectAssign({}, exports.ConfigDefaults, config);
        if (this._options.filename) {
            this._options.filename = filename;
        }
        this.generateCsv();
    }
    /**
     * Generate and Download Csv
     */
    Angular2Csv.prototype.generateCsv = function () {
        if (this._options.useBom) {
            this.csv += CsvConfigConsts.BOM;
        }
        if (this._options.showTitle) {
            this.csv += this._options.title + '\r\n\n';
        }
        this.getHeaders();
        this.getBody();
        if (this.csv == '') {
            console.log("Invalid data");
            return;
        }
        var blob = new Blob([this.csv], { "type": "text/csv;charset=utf8;" });
        if (navigator.msSaveBlob) {
            var filename = this._options.filename.replace(/ /g, "_") + ".csv";
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var uri = 'data:attachment/csv;charset=utf-8,' + encodeURI(this.csv);
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.setAttribute('visibility', 'hidden');
            link.download = this._options.filename.replace(/ /g, "_") + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    /**
     * Create Headers
     */
    Angular2Csv.prototype.getHeaders = function () {
        if (this._options.headers.length > 0) {
            var row = "";
            for (var _i = 0, _a = this._options.headers; _i < _a.length; _i++) {
                var column = _a[_i];
                row += column + this._options.fieldSeparator;
            }
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Create Body
     */
    Angular2Csv.prototype.getBody = function () {
        for (var i = 0; i < this.data.length; i++) {
            var row = "";
            for (var index in this.data[i]) {
                row += this.formartData(this.data[i][index]) + this._options.fieldSeparator;
                ;
            }
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Format Data
     * @param {any} data
     */
    Angular2Csv.prototype.formartData = function (data) {
        if (this._options.decimalseparator === 'locale' && this.isFloat(data)) {
            return data.toLocaleString();
        }
        if (this._options.decimalseparator !== '.' && this.isFloat(data)) {
            return data.toString().replace('.', this._options.decimalseparator);
        }
        if (typeof data === 'string') {
            data = data.replace(/"/g, '""');
            if (this._options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
                data = this._options.quoteStrings + data + this._options.quoteStrings;
            }
            return data;
        }
        if (typeof data === 'boolean') {
            return data ? 'TRUE' : 'FALSE';
        }
        return data;
    };
    /**
     * Check if is Float
     * @param {any} input
     */
    Angular2Csv.prototype.isFloat = function (input) {
        return +input === input && (!isFinite(input) || Boolean(input % 1));
    };
    return Angular2Csv;
}());
exports.Angular2Csv = Angular2Csv;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
 * Convet to Object
 * @param {any} val
 */
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
/**
 * Assign data  to new Object
 * @param {any}   target
 * @param {any[]} ...source
 */
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}


/***/ }),

/***/ "./src/app/pages/report/report-iku/report.iku.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Report IKU\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-1 col-form-label\">Tahun</label>\n      <div class=\"col-sm-2\">\n        <input class=\"form-control\" [(ngModel)]=\"formData.TahunSelected\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-1\">Periode</label>\n      <div class=\"col-sm-2\">\n        <select class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\" required>\n          <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-sm-auto\">\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"getReport()\" [disabled]=\"!formData.TahunSelected||!formData.periodeSelected\">Submit</button>\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"generateCSV()\" [disabled]=\"!tabledata\">Download</button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n\n<nb-card>\n  <nb-card-body>\n    <div class=\"holdertable\">\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>Kode IKU</th>\n            <th>Nilai Realisasi</th>\n            <th>Indikator</th>\n            <th>Realisasi</th>\n            <th>Target</th>\n            <th>Pencapaian</th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of tabledata\">\n                <td>{{ item.KODE_IKU}}</td>\n                <td>{{ item.NILAI_REALISASI | number }}</td>\n                <td>{{ item.INDICATOR | number }}</td>\n                <td>{{ item.REALISASI | number }}</td>\n                <td>{{ item.TARGET }}</td>\n                <td>{{ item.PENCAPAIAN | number }}</td>\n              </tr>\n        </tbody>\n      </table>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/report/report-iku/report.iku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportIkuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__ = __webpack_require__("./node_modules/angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportIkuComponent = /** @class */ (function () {
    function ReportIkuComponent(service) {
        this.service = service;
        this.formData = {
            periode: [
                {
                    id: "TW1",
                    desc: "Triwulan 1"
                },
                {
                    id: "TW2",
                    desc: "Triwulan 2"
                },
                {
                    id: "TW3",
                    desc: "Triwulan 3"
                },
                {
                    id: "TW4",
                    desc: "Triwulan 4"
                }
            ],
            periodeSelected: "",
            TahunSelected: __WEBPACK_IMPORTED_MODULE_1_moment__().format("YYYY")
        };
    }
    ReportIkuComponent.prototype.getReport = function () {
        var _this = this;
        this.service.getreq("ikureports").subscribe(function (res) {
            if (res != null) {
                var arr = res.filter(function (item) {
                    return (item.TAHUN_REALISASI == _this.formData.TahunSelected &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                console.log(arr);
                if (arr != null) {
                    _this.tabledata = res;
                }
            }
        });
    };
    ReportIkuComponent.prototype.generateCSV = function () {
        var filename = "Report IKU " + this.formData.TahunSelected + " " + this.formData.periodeSelected;
        var csvSetting = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            useBom: true,
            noDownload: true,
            headers: ["Kode IKU", "TAHUN_REALISASI", "PERIODE", "Nilai Realisasi", "Indikator", "Realisasi", "Target", "Pencapaian"]
        };
        new __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__["Angular2Csv"](this.tabledata, filename, csvSetting);
        console.log("Generate CSV");
    };
    ReportIkuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-report-iku",
            template: __webpack_require__("./src/app/pages/report/report-iku/report.iku.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_backend_service__["a" /* BackendService */]])
    ], ReportIkuComponent);
    return ReportIkuComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/report-mona/report.mona.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nb-card>\n  <nb-card-header>\n    View Report\n  </nb-card-header>\n\n  <nb-card-body>\n    <div class=\"holdertable\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\n      </ng2-smart-table>\n    </div>\n\n\n\n  </nb-card-body>\n</nb-card> -->\n\n<nb-card>\n  <nb-card-body>\n    On Progress\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/report/report-mona/report.mona.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMonaComponent; });
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



var ReportMonaComponent = /** @class */ (function () {
    function ReportMonaComponent(service) {
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
    ReportMonaComponent.prototype.loadData = function () {
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
    ReportMonaComponent.prototype.searchRange = function (beginDate, endDate) {
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
    ReportMonaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-report-mona",
            template: __webpack_require__("./src/app/pages/report/report-mona/report.mona.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_backend_service__["a" /* BackendService */]])
    ], ReportMonaComponent);
    return ReportMonaComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__["a" /* BackendService */]
            ]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_iku_report_iku_component__ = __webpack_require__("./src/app/pages/report/report-iku/report.iku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_mona_report_mona_component__ = __webpack_require__("./src/app/pages/report/report-mona/report.mona.component.ts");
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
        children: [
            {
                path: "report-iku",
                component: __WEBPACK_IMPORTED_MODULE_3__report_iku_report_iku_component__["a" /* ReportIkuComponent */]
            },
            {
                path: "report-mona",
                component: __WEBPACK_IMPORTED_MODULE_4__report_mona_report_mona_component__["a" /* ReportMonaComponent */]
            }
        ]
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

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */],
    __WEBPACK_IMPORTED_MODULE_3__report_iku_report_iku_component__["a" /* ReportIkuComponent */],
    __WEBPACK_IMPORTED_MODULE_4__report_mona_report_mona_component__["a" /* ReportMonaComponent */]
];


/***/ })

});
//# sourceMappingURL=report.module.chunk.js.map