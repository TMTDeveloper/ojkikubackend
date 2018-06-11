webpackJsonp(["transaction.module"],{

/***/ "./node_modules/ng2-currency-mask/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./node_modules/ng2-currency-mask/src/currency-mask.directive.js"));
__export(__webpack_require__("./node_modules/ng2-currency-mask/src/currency-mask.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
exports.CURRENCY_MASK_CONFIG = new core_1.InjectionToken("currency.mask.config");
//# sourceMappingURL=currency-mask.config.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var currency_mask_config_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/currency-mask.config.js");
var input_handler_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/input.handler.js");
exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CurrencyMaskDirective; }),
    multi: true
};
var CurrencyMaskDirective = (function () {
    function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ","
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create();
    }
    CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
    };
    CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    };
    CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new input_handler_1.InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    };
    CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
    };
    CurrencyMaskDirective.prototype.handleClick = function (event) {
        this.inputHandler.handleClick(event, this.isChromeAndroid());
    };
    CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleCut(event);
        }
    };
    CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
            this.inputHandler.handleInput(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeydown(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeypress(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeyup = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeyup(event);
        }
    };
    CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handlePaste(event);
        }
    };
    CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    };
    CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    };
    CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    };
    CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
    };
    CurrencyMaskDirective.prototype.validate = function (abstractControl) {
        var result = {};
        if (abstractControl.value > this.max) {
            result.max = true;
        }
        if (abstractControl.value < this.min) {
            result.min = true;
        }
        return result != {} ? result : null;
    };
    CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
    };
    return CurrencyMaskDirective;
}());
CurrencyMaskDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[currencyMask]",
                providers: [
                    exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR,
                    { provide: forms_1.NG_VALIDATORS, useExisting: CurrencyMaskDirective, multi: true }
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [currency_mask_config_1.CURRENCY_MASK_CONFIG,] },] },
    { type: core_1.ElementRef, },
    { type: core_1.KeyValueDiffers, },
]; };
CurrencyMaskDirective.propDecorators = {
    'max': [{ type: core_1.Input },],
    'min': [{ type: core_1.Input },],
    'options': [{ type: core_1.Input },],
    'handleBlur': [{ type: core_1.HostListener, args: ["blur", ["$event"],] },],
    'handleClick': [{ type: core_1.HostListener, args: ["click", ["$event"],] },],
    'handleCut': [{ type: core_1.HostListener, args: ["cut", ["$event"],] },],
    'handleInput': [{ type: core_1.HostListener, args: ["input", ["$event"],] },],
    'handleKeydown': [{ type: core_1.HostListener, args: ["keydown", ["$event"],] },],
    'handleKeypress': [{ type: core_1.HostListener, args: ["keypress", ["$event"],] },],
    'handleKeyup': [{ type: core_1.HostListener, args: ["keyup", ["$event"],] },],
    'handlePaste': [{ type: core_1.HostListener, args: ["paste", ["$event"],] },],
};
exports.CurrencyMaskDirective = CurrencyMaskDirective;
//# sourceMappingURL=currency-mask.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var currency_mask_directive_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/currency-mask.directive.js");
var CurrencyMaskModule = (function () {
    function CurrencyMaskModule() {
    }
    return CurrencyMaskModule;
}());
CurrencyMaskModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ],
                exports: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskModule.ctorParameters = function () { return []; };
exports.CurrencyMaskModule = CurrencyMaskModule;
//# sourceMappingURL=currency-mask.module.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.handler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_service_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/input.service.js");
var InputHandler = (function () {
    function InputHandler(htmlInputElement, options) {
        this.inputService = new input_service_1.InputService(htmlInputElement, options);
        this.htmlInputElement = htmlInputElement;
    }
    InputHandler.prototype.handleClick = function (event, chromeAndroid) {
        var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
        //if there is no selection and the value is not null, the cursor position will be fixed. if the browser is chrome on android, the cursor will go to the end of the number.
        if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
            this.inputService.fixCursorPosition(chromeAndroid);
        }
    };
    InputHandler.prototype.handleCut = function (event) {
        var _this = this;
        if (this.isReadOnly()) {
            return;
        }
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 0);
    };
    InputHandler.prototype.handleInput = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = this.getNewKeyCode(this.inputService.storedRawValue, this.inputService.rawValue);
        var rawValueLength = this.inputService.rawValue.length;
        var rawValueSelectionEnd = this.inputService.inputSelection.selectionEnd;
        var rawValueWithoutSuffixEndPosition = this.inputService.getRawValueWithoutSuffixEndPosition();
        var storedRawValueLength = this.inputService.storedRawValue.length;
        this.inputService.rawValue = this.inputService.storedRawValue;
        if ((rawValueSelectionEnd != rawValueWithoutSuffixEndPosition || Math.abs(rawValueLength - storedRawValueLength) != 1) && storedRawValueLength != 0) {
            this.setCursorPosition(event);
            return;
        }
        if (rawValueLength < storedRawValueLength) {
            if (this.inputService.value != 0) {
                this.inputService.removeNumber(8);
            }
            else {
                this.setValue(null);
            }
        }
        if (rawValueLength > storedRawValueLength) {
            switch (keyCode) {
                case 43:
                    this.inputService.changeToPositive();
                    break;
                case 45:
                    this.inputService.changeToNegative();
                    break;
                default:
                    if (!this.inputService.canInputMoreNumbers || (isNaN(this.inputService.value) && String.fromCharCode(keyCode).match(/\d/) == null)) {
                        return;
                    }
                    this.inputService.addNumber(keyCode);
            }
        }
        this.setCursorPosition(event);
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeydown = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
            if (selectionRangeLength == this.inputService.rawValue.length || this.inputService.value == 0) {
                this.setValue(null);
                this.onModelChange(this.inputService.value);
            }
            if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
            if ((keyCode === 8 || keyCode === 46) && selectionRangeLength != 0 && !isNaN(this.inputService.value)) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
        }
    };
    InputHandler.prototype.handleKeypress = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == undefined || [9, 13].indexOf(keyCode) != -1 || this.isArrowEndHomeKeyInFirefox(event)) {
            return;
        }
        switch (keyCode) {
            case 43:
                this.inputService.changeToPositive();
                break;
            case 45:
                this.inputService.changeToNegative();
                break;
            default:
                if (this.inputService.canInputMoreNumbers && (!isNaN(this.inputService.value) || String.fromCharCode(keyCode).match(/\d/) != null)) {
                    this.inputService.addNumber(keyCode);
                }
        }
        event.preventDefault();
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeyup = function (event) {
        this.inputService.fixCursorPosition();
    };
    InputHandler.prototype.handlePaste = function (event) {
        var _this = this;
        if (this.isReadOnly()) {
            return;
        }
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 1);
    };
    InputHandler.prototype.updateOptions = function (options) {
        this.inputService.updateOptions(options);
    };
    InputHandler.prototype.getOnModelChange = function () {
        return this.onModelChange;
    };
    InputHandler.prototype.setOnModelChange = function (callbackFunction) {
        this.onModelChange = callbackFunction;
    };
    InputHandler.prototype.getOnModelTouched = function () {
        return this.onModelTouched;
    };
    InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
        this.onModelTouched = callbackFunction;
    };
    InputHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
    };
    InputHandler.prototype.getNewKeyCode = function (oldString, newString) {
        if (oldString.length > newString.length) {
            return null;
        }
        for (var x = 0; x < newString.length; x++) {
            if (oldString.length == x || oldString[x] != newString[x]) {
                return newString.charCodeAt(x);
            }
        }
    };
    InputHandler.prototype.isArrowEndHomeKeyInFirefox = function (event) {
        if ([35, 36, 37, 38, 39, 40].indexOf(event.keyCode) != -1 && (event.charCode == undefined || event.charCode == 0)) {
            return true;
        }
        return false;
    };
    InputHandler.prototype.isReadOnly = function () {
        return this.htmlInputElement && this.htmlInputElement.readOnly;
    };
    InputHandler.prototype.setCursorPosition = function (event) {
        var rawValueWithoutSuffixEndPosition = this.inputService.getRawValueWithoutSuffixEndPosition();
        setTimeout(function () {
            event.target.setSelectionRange(rawValueWithoutSuffixEndPosition, rawValueWithoutSuffixEndPosition);
        }, 0);
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;
//# sourceMappingURL=input.handler.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.manager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = (function () {
    function InputManager(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    InputManager.prototype.setCursorAt = function (position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            var textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    };
    InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        var newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    };
    Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function () {
            var haventReachedMaxLength = !(this.rawValue.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
            var selectionStart = this.inputSelection.selectionStart;
            var selectionEnd = this.inputSelection.selectionEnd;
            var haveNumberSelected = (selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/\d/)) ? true : false;
            var startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
            return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function () {
            var selectionStart = 0;
            var selectionEnd = 0;
            if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
                selectionStart = this.htmlInputElement.selectionStart;
                selectionEnd = this.htmlInputElement.selectionEnd;
            }
            else {
                var range = document.getSelection().baseNode;
                if (range && range.firstChild == this.htmlInputElement) {
                    var lenght = this.htmlInputElement.value.length;
                    var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                    var startRange = this.htmlInputElement.createTextRange();
                    var endRange = this.htmlInputElement.createTextRange();
                    endRange.collapse(false);
                    if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                        selectionStart = selectionEnd = lenght;
                    }
                    else {
                        selectionStart = -startRange.moveStart("character", -lenght);
                        selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                        if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                            selectionEnd = lenght;
                        }
                        else {
                            selectionEnd = -startRange.moveEnd("character", -lenght);
                            selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                        }
                    }
                }
            }
            return {
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function () {
            return this.htmlInputElement && this.htmlInputElement.value;
        },
        set: function (value) {
            this._storedRawValue = value;
            if (this.htmlInputElement) {
                this.htmlInputElement.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "storedRawValue", {
        get: function () {
            return this._storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    return InputManager;
}());
exports.InputManager = InputManager;
//# sourceMappingURL=input.manager.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_manager_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/input.manager.js");
var InputService = (function () {
    function InputService(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.inputManager = new input_manager_1.InputManager(htmlInputElement);
    }
    InputService.prototype.addNumber = function (keyCode) {
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, "0");
        }
        var keyChar = String.fromCharCode(keyCode);
        var selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + keyChar + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart + 1);
    };
    InputService.prototype.applyMask = function (isNumber, rawValue) {
        var _a = this.options, allowNegative = _a.allowNegative, decimal = _a.decimal, precision = _a.precision, prefix = _a.prefix, suffix = _a.suffix, thousands = _a.thousands;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        var onlyNumbers = rawValue.replace(/[^0-9]/g, "");
        if (!onlyNumbers) {
            return "";
        }
        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^0*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        if (integerPart == "") {
            integerPart = "0";
        }
        var newRawValue = integerPart;
        var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        if (precision > 0) {
            decimalPart = "0".repeat(precision - decimalPart.length) + decimalPart;
            newRawValue += decimal + decimalPart;
        }
        var isZero = parseInt(integerPart) == 0 && (parseInt(decimalPart) == 0 || decimalPart == "");
        var operator = (rawValue.indexOf("-") > -1 && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    };
    InputService.prototype.clearMask = function (rawValue) {
        if (rawValue == null || rawValue == "") {
            return null;
        }
        var value = rawValue.replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        return parseFloat(value);
    };
    InputService.prototype.changeToNegative = function () {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            var selectionStart = this.inputSelection.selectionStart;
            this.rawValue = "-" + this.rawValue;
            this.updateFieldValue(selectionStart + 1);
        }
    };
    InputService.prototype.changeToPositive = function () {
        var selectionStart = this.inputSelection.selectionStart;
        this.rawValue = this.rawValue.replace("-", "");
        this.updateFieldValue(selectionStart - 1);
    };
    InputService.prototype.fixCursorPosition = function (forceToEndPosition) {
        var currentCursorPosition = this.inputSelection.selectionStart;
        //if the current cursor position is after the number end position, it is moved to the end of the number, ignoring the prefix or suffix. this behavior can be forced with forceToEndPosition flag
        if (currentCursorPosition > this.getRawValueWithoutSuffixEndPosition() || forceToEndPosition) {
            this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition());
            //if the current cursor position is before the number start position, it is moved to the start of the number, ignoring the prefix or suffix
        }
        else if (currentCursorPosition < this.getRawValueWithoutPrefixStartPosition()) {
            this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition());
        }
    };
    InputService.prototype.getRawValueWithoutSuffixEndPosition = function () {
        return this.rawValue.length - this.options.suffix.length;
    };
    InputService.prototype.getRawValueWithoutPrefixStartPosition = function () {
        return this.value != null && this.value < 0 ? this.options.prefix.length + 1 : this.options.prefix.length;
    };
    InputService.prototype.removeNumber = function (keyCode) {
        var _a = this.options, decimal = _a.decimal, thousands = _a.thousands;
        var selectionEnd = this.inputSelection.selectionEnd;
        var selectionStart = this.inputSelection.selectionStart;
        if (selectionStart > this.rawValue.length - this.options.suffix.length) {
            selectionEnd = this.rawValue.length - this.options.suffix.length;
            selectionStart = this.rawValue.length - this.options.suffix.length;
        }
        //there is no selection
        if (selectionEnd == selectionStart) {
            //delete key and the target digit is a number
            if ((keyCode == 46 || keyCode == 63272) && /^\d+$/.test(this.rawValue.substring(selectionStart, selectionEnd + 1))) {
                selectionEnd = selectionEnd + 1;
            }
            //delete key and the target digit is the decimal or thousands divider
            if ((keyCode == 46 || keyCode == 63272) && (this.rawValue.substring(selectionStart, selectionEnd + 1) == decimal || this.rawValue.substring(selectionStart, selectionEnd + 1) == thousands)) {
                selectionEnd = selectionEnd + 2;
                selectionStart = selectionStart + 1;
            }
            //backspace key and the target digit is a number
            if (keyCode == 8 && /^\d+$/.test(this.rawValue.substring(selectionStart - 1, selectionEnd))) {
                selectionStart = selectionStart - 1;
            }
            //backspace key and the target digit is the decimal or thousands divider
            if (keyCode == 8 && (this.rawValue.substring(selectionStart - 1, selectionEnd) == decimal || this.rawValue.substring(selectionStart - 1, selectionEnd) == thousands)) {
                selectionStart = selectionStart - 2;
                selectionEnd = selectionEnd - 1;
            }
        }
        this.rawValue = this.rawValue.substring(0, selectionStart) + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart);
    };
    InputService.prototype.updateFieldValue = function (selectionStart) {
        var newRawValue = this.applyMask(false, this.rawValue || "");
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    };
    InputService.prototype.updateOptions = function (options) {
        var value = this.value;
        this.options = options;
        this.value = value;
    };
    Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
        get: function () {
            return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "inputSelection", {
        get: function () {
            return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "rawValue", {
        get: function () {
            return this.inputManager.rawValue;
        },
        set: function (value) {
            this.inputManager.rawValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "storedRawValue", {
        get: function () {
            return this.inputManager.storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "value", {
        get: function () {
            return this.clearMask(this.rawValue);
        },
        set: function (value) {
            this.rawValue = this.applyMask(true, "" + value);
        },
        enumerable: true,
        configurable: true
    });
    return InputService;
}());
exports.InputService = InputService;
//# sourceMappingURL=input.service.js.map

/***/ }),

/***/ "./src/app/pages/transaction/indicator-qualitative/indicator.qualitative.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>IKU</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">IKU\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-6\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-2\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Periode\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-3\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n              <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"generateDetail()\">Get Data</button>\n      </div>\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" (click)=\"showModal()\">Add Data</button>\n    </div>\n    \n    </div>\n\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"editConfirm($event)\" >\n      </ng2-smart-table>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"updateData()\">Update Data</button>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/transaction/indicator-qualitative/indicator.qualitative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorQualitativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_indicator_qualitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-qualitative/modal/indicator.qualitative.modal.component.ts");
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








var IndicatorQualitativeComponent = /** @class */ (function () {
    function IndicatorQualitativeComponent(modalService, toastr, service) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tabledata = [];
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: false
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: false
            },
            mode: "inline",
            sort: true,
            hideSubHeader: true,
            actions: {
                add: false,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                NO_DETAIL: {
                    title: "No",
                    type: "number",
                    filter: true,
                    editable: true,
                    width: "10%"
                },
                TIPE_DATA: {
                    title: "Type Data",
                    type: "html",
                    editor: {
                        type: "list",
                        config: {
                            list: [{ title: 'String', value: 'string' }, { title: 'Date', value: 'date' }, { title: 'Number', value: 'number' }]
                        }
                    },
                    filter: false,
                    editable: true,
                    width: "10%"
                },
                DESKRIPSI: {
                    title: "Deskripsi",
                    type: "string",
                    filter: false,
                    editable: true,
                    width: "70%"
                }
            }
        };
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
            ikuData: [],
            ikuSelected: "",
            indicatorQualitativeData: [],
            yearPeriode: __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY")
        };
        this.loadData();
    }
    IndicatorQualitativeComponent.prototype.showModal = function () {
        var _this = this;
        this.activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__modal_indicator_qualitative_modal_component__["a" /* IndicatorQualitativeModalComponent */], {
            windowClass: "xlModal",
            container: "nb-layout",
            backdrop: "static"
        });
        this.activeModal.componentInstance.formData.ikuData = this.formData.ikuData;
        this.activeModal.componentInstance.formData.periodeSelectedParent = this.formData.periodeSelected;
        this.activeModal.componentInstance.formData.ikuSelectedParent = this.formData.ikuSelected;
        this.activeModal.componentInstance.formData.yearPeriodeParent = this.formData.yearPeriode;
        this.activeModal.result.then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(response);
                if (response != null) {
                    this.tabledata = response.indicatorDetail;
                    //this.formData.indicatorDetail = response.indicatorDetail;
                    //this.formData.indicatorId = response.indicatorId;
                    this.source.load(this.tabledata);
                }
                return [2 /*return*/];
            });
        }); }, function (error) { });
    };
    IndicatorQualitativeComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_ikus").subscribe(function (response) {
            if (response != null) {
                _this.formData.ikuData = response;
            }
        });
    };
    IndicatorQualitativeComponent.prototype.submit = function (event) {
        var _this = this;
        this.tabledata.forEach(function (element, ind) {
            if (element.KODE_IKU == event.newData.KODE_IKU) {
                element.KODE_IKU = event.newData.KODE_IKU;
                element.DESKRIPSI = event.newData.DESKRIPSI;
                element.TIPE_IKU = event.newData.TIPE_IKU;
                _this.service
                    .patchreq("mst_ikus", _this.tabledata[ind])
                    .subscribe(function (response) {
                    console.log(JSON.stringify(response));
                    event.confirm.resolve(event.newData);
                    _this.toastr.success("Data Updated!");
                });
            }
        });
    };
    IndicatorQualitativeComponent.prototype.generateDetail = function () {
        var _this = this;
        this.service.getreq("trn_indicator_qls").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                if (arr[0] != null) {
                    _this.formData.indicatorQualitativeData = arr;
                    _this.source.load(_this.formData.indicatorQualitativeData);
                }
                else {
                    _this.toastr.error("Data Not Found!");
                    _this.tabledata = [];
                    _this.source.load(_this.tabledata);
                }
            }
        });
    };
    IndicatorQualitativeComponent.prototype.updateData = function () {
        var _this = this;
        console.log(this.formData.indicatorQualitativeData);
        this.formData.indicatorQualitativeData.forEach(function (element) {
            console.log(element);
            _this.service.postreq("trn_indicator_qls/crud", element).subscribe(function (response) {
                console.log(response);
            }, function (error) {
                //console.log("indicator detail");
                console.log(error);
            });
        });
        this.toastr.success("Data Saved!");
    };
    IndicatorQualitativeComponent.prototype.editConfirm = function (event) {
        console.log(event.newData);
        event.confirm.resolve(event.newData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], IndicatorQualitativeComponent.prototype, "myForm", void 0);
    IndicatorQualitativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-indicator-qualitative",
            template: __webpack_require__("./src/app/pages/transaction/indicator-qualitative/indicator.qualitative.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], IndicatorQualitativeComponent);
    return IndicatorQualitativeComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/indicator-qualitative/modal/indicator.qualitative.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Input New Data</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    \n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">IKU\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-6\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n            <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">Tahun\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-1\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">Periode\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-2\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n            <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">Tipe Data\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-2\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.tipeDataSelected\">\n            <option *ngFor=\"let data of formData.tipeData\" value=\"{{data.id}}\">{{data.desc}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">Deskripsi\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-6\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.descriptionIndicator\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-auto\">\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"generateDetail()\">Add New Data</button>\n      <button type=\"submit\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/transaction/indicator-qualitative/modal/indicator.qualitative.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorQualitativeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IndicatorQualitativeModalComponent = /** @class */ (function () {
    function IndicatorQualitativeModalComponent(activeModal, toastr, service) {
        this.activeModal = activeModal;
        this.toastr = toastr;
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
            tipeData: [
                {
                    id: "string",
                    desc: "String"
                },
                {
                    id: "date",
                    desc: "Date"
                },
                {
                    id: "number",
                    desc: "Number"
                }
            ],
            periodeSelected: "",
            tipeDataSelected: "",
            ikuData: [],
            ikuSelected: "",
            noDetail: 1,
            yearPeriode: __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY"),
            descriptionIndicator: "",
            indicatorQualitativeData: [],
            indicatorDetail: [],
            periodeSelectedParent: "",
            ikuSelectedParent: "",
            yearPeriodeParent: ""
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__["a" /* LocalDataSource */]();
    }
    IndicatorQualitativeModalComponent.prototype.generateDetail = function () {
        var _this = this;
        console.log("no detail sebelum", this.formData.noDetail);
        this.service.getreq("trn_indicator_qls").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                console.log("total output api", arr.length);
                if (Array.isArray(arr) && arr.length) {
                    _this.formData.noDetail = arr.length + 1;
                    console.log("no detail sesudah", _this.formData.noDetail);
                }
                else {
                    console.log('arr respon = 0');
                }
                var header = {
                    KODE_IKU: _this.formData.ikuSelected,
                    TAHUN_INDICATOR: _this.formData.yearPeriode,
                    PERIODE: _this.formData.periodeSelected,
                    NO_DETAIL: _this.formData.noDetail,
                    TIPE_DATA: _this.formData.tipeDataSelected,
                    DESKRIPSI: _this.formData.descriptionIndicator,
                    USER_CREATED: "Admin",
                    DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
                    USER_UPDATED: "Admin",
                    DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_2_moment__().format()
                };
                console.log(header);
                _this.service.postreq("trn_indicator_qls/crud", header).subscribe(function (response) {
                    if (response != null) {
                    }
                });
                _this.formData.noDetail = 1;
                _this.generateTable();
            }
        });
    };
    IndicatorQualitativeModalComponent.prototype.generateTable = function () {
        var _this = this;
        this.service.getreq("trn_indicator_qls").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                var data = arr;
                if (arr[0] != null) {
                    _this.toastr.success("New Data Added!");
                    _this.activeModal.close(data);
                }
                else {
                    _this.toastr.error("Data Not Found!");
                    _this.activeModal.close(data);
                }
            }
        });
    };
    IndicatorQualitativeModalComponent.prototype.refreshSelected = function (event) {
        // this.selectedData = event.data;
    };
    IndicatorQualitativeModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    IndicatorQualitativeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "ngx-indicator-qualitative-modal",
            template: __webpack_require__("./src/app/pages/transaction/indicator-qualitative/modal/indicator.qualitative.modal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__["a" /* BackendService */]])
    ], IndicatorQualitativeModalComponent);
    return IndicatorQualitativeModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/indicator-quantitative/indicator.quantitative.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>IKU</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-5\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">IKU\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Periode\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-6\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n              <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Threshold\n              <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-3\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.threshold\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Indicator ID\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicatorId\" readonly=\"true\" disabled>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-7\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Indicator 1 Description\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\"  [(ngModel)]=\"formData.indicator1\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Indicator 2 Description\n\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicator2\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Indicator 3 Description\n\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicator3\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Realisasi 1 Description\n\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [class.green]=\"isDisabled\" [disabled]=\"!formData.indicator1\" [(ngModel)]=\"formData.realisasi1\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Realisasi 2 Description\n\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [disabled]=\"!formData.indicator2\" [(ngModel)]=\"formData.realisasi2\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Realisasi 3 Description\n\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [disabled]=\"!formData.indicator3\" [(ngModel)]=\"formData.realisasi3\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" (click)=\"showModal()\" >Fetch</button>\n      </div>\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"generateDetail()\">Input Detail</button>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"submit($event)\" (createConfirm)=\"addData($event)\">\n      </ng2-smart-table>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected||!formData.threshold||!formData.indicator1||!formData.realisasi1\"\n          (click)=\"save()\">Submit</button>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/transaction/indicator-quantitative/indicator.quantitative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorQuantitativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_indicator_quantitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-quantitative/modal/indicator.quantitative.modal.component.ts");
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








var IndicatorQuantitativeComponent = /** @class */ (function () {
    function IndicatorQuantitativeComponent(modalService, toastr, service) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tabledata = [];
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: false
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: false
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: false
            },
            mode: "inline",
            sort: true,
            hideSubHeader: true,
            actions: {
                add: false,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                DESC_BANK: {
                    title: "Bank",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "25%"
                },
                NILAI_INDICATOR_1: {
                    title: "Nilai 1",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "25%"
                },
                NILAI_INDICATOR_2: {
                    title: "Nilai 2",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "25%"
                },
                NILAI_INDICATOR_3: {
                    title: "Nilai 3",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "25%"
                }
            }
        };
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
            ikuData: [],
            ikuSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY"),
            threshold: 0,
            indicatorId: "",
            indicator1: "",
            indicator2: "",
            indicator3: "",
            realisasi1: "",
            realisasi2: "",
            realisasi3: "",
            bankData: [],
            indicatorDetail: []
        };
        this.loadData();
    }
    IndicatorQuantitativeComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_ikus").subscribe(function (response) {
            if (response != null) {
                _this.formData.ikuData = response;
            }
        });
    };
    IndicatorQuantitativeComponent.prototype.showModal = function () {
        var _this = this;
        this.activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__modal_indicator_quantitative_modal_component__["a" /* IndicatorQuantitativeModalComponent */], {
            windowClass: "xlModal",
            container: "nb-layout",
            backdrop: "static"
        });
        this.activeModal.componentInstance.formData.ikuData = this.formData.ikuData;
        this.activeModal.componentInstance.formData.periodeSelectedParent = this.formData.periodeSelected;
        this.activeModal.componentInstance.formData.ikuSelectedParent = this.formData.ikuSelected;
        this.activeModal.componentInstance.formData.yearPeriodeParent = this.formData.yearPeriode;
        this.activeModal.result.then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(response);
                if (response != null) {
                    this.tabledata = response.indicatorDetail;
                    this.formData.indicatorDetail = response.indicatorDetail;
                    this.formData.indicatorId = response.indicatorId;
                    this.source.load(this.tabledata);
                }
                return [2 /*return*/];
            });
        }); }, function (error) { });
    };
    IndicatorQuantitativeComponent.prototype.submit = function (event) {
        var _this = this;
        this.tabledata.forEach(function (element, ind) {
            if (element.KODE_IKU == event.newData.KODE_IKU) {
                element.KODE_IKU = event.newData.KODE_IKU;
                element.DESKRIPSI = event.newData.DESKRIPSI;
                element.TIPE_IKU = event.newData.TIPE_IKU;
                _this.service
                    .patchreq("mst_ikus", _this.tabledata[ind])
                    .subscribe(function (response) {
                    console.log(JSON.stringify(response));
                    event.confirm.resolve(event.newData);
                    _this.toastr.success("Data Updated!");
                });
            }
        });
    };
    IndicatorQuantitativeComponent.prototype.generateDetail = function () {
        var _this = this;
        this.service.getreq("mst_banks").subscribe(function (response) {
            if (response != null) {
                _this.formData.bankData = response;
                var indicatorDetail_1 = [];
                _this.formData.bankData.forEach(function (element, ind) {
                    var detail = {
                        KODE_IKU: _this.formData.ikuSelected,
                        TAHUN_INDICATOR: _this.formData.yearPeriode,
                        PERIODE: _this.formData.periodeSelected,
                        KODE_BANK: element.ID_BANK,
                        NILAI_INDICATOR_1: 0,
                        NILAI_INDICATOR_2: 0,
                        NILAI_INDICATOR_3: 0,
                        USER_CREATED: "Admin",
                        DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                        USER_UPDATED: "Admin",
                        DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                        DESC_BANK: element.DESCRIPTION
                    };
                    indicatorDetail_1.push(detail);
                });
                _this.tabledata = indicatorDetail_1;
                _this.formData.indicatorDetail = indicatorDetail_1;
                _this.formData.indicatorId =
                    "RBB" +
                        _this.formData.ikuSelected +
                        _this.formData.yearPeriode +
                        _this.formData.periodeSelected;
                _this.source.load(_this.tabledata);
            }
            // error => {
            //   console.log(error);
            // };
        });
    };
    IndicatorQuantitativeComponent.prototype.save = function () {
        var _this = this;
        var header = {
            KODE_IKU: this.formData.ikuSelected,
            TAHUN_INDICATOR: this.formData.yearPeriode,
            PERIODE: this.formData.periodeSelected,
            KODE_INDIKATOR: this.formData.indicatorId,
            THRESHOLD: this.formData.threshold,
            INDIKATOR_1_DESC: this.formData.indicator1,
            INDIKATOR_2_DESC: this.formData.indicator2,
            INDIKATOR_3_DESC: this.formData.indicator3,
            REALISASI_1_DESC: this.formData.realisasi1,
            REALISASI_2_DESC: this.formData.realisasi2,
            REALISASI_3_DESC: this.formData.realisasi3,
            USER_CREATED: "Admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
            USER_UPDATED: "Admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
        };
        this.service.postreq("trn_indicator_qns/crud", header).subscribe(function (response) {
            console.log(response);
            _this.formData.indicatorDetail.forEach(function (element, ind) {
                _this.service.postreq("trn_indicator_qn_dtls/crud", element).subscribe(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log("indicator detail");
                    console.log(error);
                });
            });
            _this.toastr.success("Data Saved!");
        }, function (error) {
            console.log("indicator header");
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], IndicatorQuantitativeComponent.prototype, "myForm", void 0);
    IndicatorQuantitativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-indicator-quantitative",
            template: __webpack_require__("./src/app/pages/transaction/indicator-quantitative/indicator.quantitative.component.html"),
            styles: ["\n  input:disabled {\n    background-color: rgba(211,211,211, 0.6);\n }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], IndicatorQuantitativeComponent);
    return IndicatorQuantitativeComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/indicator-quantitative/modal/indicator.quantitative.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Input Accident</nb-card-header>\n  <nb-card-body>\n\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">IKU\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-6\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-6\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Periode\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-6\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n              <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-auto\">\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"loadData()\">Select</button>\n\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n\n<!-- { COUNTER_NO: 1, YEAR_ACTIVE: \"2018\", DESCRIPTION: \"hehehe\", CONDITION: \"IMP\", INDICATOR_name: \"IMP001\", SCORE: 123 }, -->\n"

/***/ }),

/***/ "./src/app/pages/transaction/indicator-quantitative/modal/indicator.quantitative.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorQuantitativeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndicatorQuantitativeModalComponent = /** @class */ (function () {
    function IndicatorQuantitativeModalComponent(activeModal, service) {
        this.activeModal = activeModal;
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
            ikuData: [],
            ikuSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY"),
            bankData: [],
            indicatorDetail: [],
            periodeSelectedParent: "",
            ikuSelectedParent: "",
            yearPeriodeParent: ""
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__["a" /* LocalDataSource */]();
    }
    IndicatorQuantitativeModalComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_banks").subscribe(function (response) {
            if (response != null) {
                _this.formData.bankData = response;
                _this.service.getreq("trn_realization_qn_dtls").subscribe(function (response) {
                    if (response != null) {
                        _this.formData.bankData.forEach(function (element, ind) {
                            var arr = response.filter(function (item) {
                                return (item.KODE_IKU == _this.formData.ikuSelected &&
                                    item.TAHUN_REALISASI == _this.formData.yearPeriode &&
                                    item.PERIODE == _this.formData.periodeSelected &&
                                    item.KODE_BANK == element.ID_BANK);
                            });
                            console.log(arr);
                            if (arr[0] == null) {
                                var detail = {
                                    KODE_IKU: _this.formData.ikuSelectedParent,
                                    TAHUN_INDICATOR: _this.formData.yearPeriodeParent,
                                    PERIODE: _this.formData.periodeSelectedParent,
                                    KODE_BANK: element.ID_BANK,
                                    NILAI_INDICATOR_1: 0,
                                    NILAI_INDICATOR_2: 0,
                                    NILAI_INDICATOR_3: 0,
                                    USER_CREATED: "Admin",
                                    DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
                                    USER_UPDATED: "Admin",
                                    DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
                                    DESC_BANK: element.DESCRIPTION
                                };
                                _this.formData.indicatorDetail.push(detail);
                            }
                            else {
                                console.log(arr);
                                var detail = {
                                    KODE_IKU: _this.formData.ikuSelectedParent,
                                    TAHUN_INDICATOR: _this.formData.yearPeriodeParent,
                                    PERIODE: _this.formData.periodeSelectedParent,
                                    KODE_BANK: element.ID_BANK,
                                    NILAI_INDICATOR_1: arr[0].NILAI_REALISASI_1,
                                    NILAI_INDICATOR_2: arr[0].NILAI_REALISASI_2,
                                    NILAI_INDICATOR_3: arr[0].NILAI_REALISASI_3,
                                    USER_CREATED: "Admin",
                                    DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
                                    USER_UPDATED: "Admin",
                                    DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
                                    DESC_BANK: element.DESCRIPTION
                                };
                                _this.formData.indicatorDetail.push(detail);
                            }
                        });
                        var data = {
                            indicatorDetail: _this.formData.indicatorDetail,
                            indicatorId: "FET" +
                                _this.formData.ikuSelected +
                                _this.formData.yearPeriode +
                                _this.formData.periodeSelected
                        };
                        _this.activeModal.close(data);
                    }
                    // error => {
                    //   console.log(error);
                    // };
                });
            }
            // error => {
            //   console.log(error);
            // };
        });
    };
    IndicatorQuantitativeModalComponent.prototype.refreshSelected = function (event) {
        // this.selectedData = event.data;
    };
    IndicatorQuantitativeModalComponent.prototype.submit = function () { };
    IndicatorQuantitativeModalComponent.prototype.closeModal = function () {
        this.activeModal.close(false);
    };
    IndicatorQuantitativeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "ngx-indicator-quantitative-modal",
            template: __webpack_require__("./src/app/pages/transaction/indicator-quantitative/modal/indicator.quantitative.modal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__["a" /* BackendService */]])
    ], IndicatorQuantitativeModalComponent);
    return IndicatorQuantitativeModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/realisasi-qualitative/realisasi.qualitative.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>IKU</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">IKU\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-6\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-2\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Periode\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-3\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n              <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Bank\n\n          </label>\n          <div class=\"col-sm-3\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.threshold\">\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"generateDetail()\">Input Detail</button>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"editConfirm($event)\" >\n      </ng2-smart-table>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"save()\">Submit</button>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>\n\n"

/***/ }),

/***/ "./src/app/pages/transaction/realisasi-qualitative/realisasi.qualitative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealisasiQualitativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
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







var RealisasiQualitativeComponent = /** @class */ (function () {
    function RealisasiQualitativeComponent(modalService, toastr, service) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tabledata = [];
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: false
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: false
            },
            mode: "inline",
            sort: true,
            hideSubHeader: true,
            actions: {
                add: false,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                NO: {
                    title: "No",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "10%"
                },
                DETAIL: {
                    title: "Detail",
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "10%",
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
                KETERANGAN: {
                    title: "Keterangan",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "70%",
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
                }
            }
        };
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
            ikuData: [],
            ikuSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY"),
            threshold: 0,
            indicatorId: "",
            bankData: [],
            realisasiDetail: []
        };
        this.loadData();
    }
    RealisasiQualitativeComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_ikus").subscribe(function (response) {
            if (response != null) {
                _this.formData.ikuData = response;
                _this.service.getreq("mst_banks").subscribe(function (response) {
                    if (response != null) {
                        _this.formData.bankData = response;
                    }
                });
            }
        });
    };
    RealisasiQualitativeComponent.prototype.submit = function (event) {
        var _this = this;
        this.tabledata.forEach(function (element, ind) {
            if (element.KODE_IKU == event.newData.KODE_IKU) {
                element.KODE_IKU = event.newData.KODE_IKU;
                element.DESKRIPSI = event.newData.DESKRIPSI;
                element.TIPE_IKU = event.newData.TIPE_IKU;
                _this.service
                    .patchreq("mst_ikus", _this.tabledata[ind])
                    .subscribe(function (response) {
                    console.log(JSON.stringify(response));
                    event.confirm.resolve(event.newData);
                    _this.toastr.success("Data Updated!");
                });
            }
        });
    };
    RealisasiQualitativeComponent.prototype.generateDetail = function () {
        var _this = this;
        this.service.getreq("trn_indicator_qns").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                if (arr[0] != null) {
                    _this.formData.indicatorId = arr[0].KODE_INDIKATOR;
                    _this.service.getreq("trn_indicator_qn_dtls").subscribe(function (response) {
                        if (response != null) {
                            var arrDtl = response.filter(function (item) {
                                return (item.KODE_IKU == _this.formData.ikuSelected &&
                                    item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                                    item.PERIODE == _this.formData.periodeSelected);
                            });
                            if (arrDtl[0] != null) {
                                var realisasiDetail_1 = [];
                                arrDtl.forEach(function (element, ind) {
                                    var detail = {
                                        KODE_IKU: _this.formData.ikuSelected,
                                        TAHUN_REALISASI: _this.formData.yearPeriode,
                                        PERIODE: _this.formData.periodeSelected,
                                        KODE_BANK: element.KODE_BANK,
                                        NILAI_INDICATOR_1: element.NILAI_INDICATOR_1,
                                        NILAI_INDICATOR_2: element.NILAI_INDICATOR_2,
                                        NILAI_INDICATOR_3: element.NILAI_INDICATOR_3,
                                        NILAI_REALISASI_1: 0,
                                        NILAI_REALISASI_2: 0,
                                        NILAI_REALISASI_3: 0,
                                        RESULT1: "0%",
                                        RESULT2: "0%",
                                        RESULT3: "0%",
                                        PENCAPAIAN: 0,
                                        USER_CREATED: "Admin",
                                        DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                        USER_UPDATED: "Admin",
                                        DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                        DESC_BANK: _this.formData.bankData.filter(function (item) {
                                            return item.ID_BANK == element.KODE_BANK;
                                        })[0].DESCRIPTION
                                    };
                                    realisasiDetail_1.push(detail);
                                });
                                _this.tabledata = realisasiDetail_1;
                                _this.formData.realisasiDetail = realisasiDetail_1;
                                _this.source.load(_this.tabledata);
                            }
                        }
                    });
                }
                else {
                    _this.toastr.error("Data Not Found!");
                    _this.tabledata = [];
                    _this.source.load(_this.tabledata);
                }
            }
        });
    };
    RealisasiQualitativeComponent.prototype.save = function () {
        var _this = this;
        var header = {
            KODE_IKU: this.formData.ikuSelected,
            TAHUN_REALISASI: this.formData.yearPeriode,
            PERIODE: this.formData.periodeSelected,
            KODE_INDIKATOR: this.formData.indicatorId,
            PENCAIPAIAN: 0,
            USER_CREATED: "Admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
            USER_UPDATED: "Admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
        };
        this.service.postreq("trn_realization_qns/crud", header).subscribe(function (response) {
            console.log(response);
            _this.formData.realisasiDetail.forEach(function (element, ind) {
                _this.service
                    .postreq("trn_realization_qn_dtls/crud", element)
                    .subscribe(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log("indicator detail");
                    console.log(error);
                });
            });
            _this.toastr.success("Data Saved!");
        }, function (error) {
            console.log("indicator header");
            console.log(error);
        });
    };
    RealisasiQualitativeComponent.prototype.editConfirm = function (event) {
        event.newData.RESULT1 =
            (event.newData.NILAI_REALISASI_1 /
                event.newData.NILAI_INDICATOR_1 *
                100).toFixed(2) + "%";
        event.newData.RESULT2 =
            (event.newData.NILAI_REALISASI_2 /
                event.newData.NILAI_INDICATOR_2 *
                100).toFixed(2) + "%";
        event.newData.RESULT3 =
            (event.newData.NILAI_REALISASI_3 /
                event.newData.NILAI_INDICATOR_3 *
                100).toFixed(2) + "%";
        console.log(event.newData.RESULT1);
        event.confirm.resolve(event.newData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], RealisasiQualitativeComponent.prototype, "myForm", void 0);
    RealisasiQualitativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-realisasi-qualitative",
            template: __webpack_require__("./src/app/pages/transaction/realisasi-qualitative/realisasi.qualitative.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], RealisasiQualitativeComponent);
    return RealisasiQualitativeComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/realisasi-quantitative/realisasi.quantitative.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>IKU</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">IKU\n            <span>\n              <font color=\"red\">*</font>\n            </span>\n          </label>\n          <div class=\"col-sm-9\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\">Tahun\n              <span><font color=\"red\">*</font></span>\n            </label>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\">Periode\n                <span><font color=\"red\">*</font></span>\n              </label>\n              <div class=\"col-sm-9\">\n                <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n                  <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n                </select>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-sm-6\">\n          <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\">Threshold\n              </label>\n              <div class=\"col-sm-6\">\n                <input class=\"form-control\" [(ngModel)]=\"formData.threshold\" readonly=\"true\" disabled>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Indicator ID\n                </label>\n                <div class=\"col-sm-6\">\n                  <input class=\"form-control\" [(ngModel)]=\"formData.indicatorId\" readonly=\"true\" disabled>\n                </div>\n              </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"generateDetail()\">Input Detail</button>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"editConfirm($event)\">\n      </ng2-smart-table>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"save()\">Submit</button>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/transaction/realisasi-quantitative/realisasi.quantitative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealisasiQuantitativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
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







var RealisasiQuantitativeComponent = /** @class */ (function () {
    function RealisasiQuantitativeComponent(modalService, toastr, service) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tabledata = [];
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: false
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: false
            },
            mode: "inline",
            sort: true,
            hideSubHeader: true,
            actions: {
                add: false,
                edit: true,
                delete: false,
                position: "right",
                columnTitle: "Modify",
                width: "10%"
            },
            pager: {
                display: true,
                perPage: 30
            },
            columns: {
                DESC_BANK: {
                    title: "Bank",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                NILAI_INDICATOR_1: {
                    title: "Indikator 1",
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "30%",
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
                NILAI_REALISASI_1: {
                    title: "Realisasi 1",
                    type: "number",
                    filter: false,
                    editable: true,
                    width: "30%",
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
                RESULT1: {
                    title: "Result 1",
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                PENCAPAIAN: {
                    title: "Pencapaian",
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "30%"
                }
            }
        };
        this.formData = {
            periode: [{
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
            ikuData: [],
            ikuSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY"),
            threshold: 0,
            indicatorId: "",
            bankData: [],
            realisasiDetail: []
        };
        this.nilaiIndicatorCheck = {
            indicatorbool1: false,
            indicatorbool2: false,
            indicatorbool3: false,
        };
        this.loadData();
    }
    RealisasiQuantitativeComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_ikus").subscribe(function (response) {
            if (response != null) {
                _this.formData.ikuData = response;
                _this.service.getreq("mst_banks").subscribe(function (response) {
                    if (response != null) {
                        _this.formData.bankData = response;
                    }
                });
            }
        });
    };
    RealisasiQuantitativeComponent.prototype.submit = function (event) {
        var _this = this;
        this.tabledata.forEach(function (element, ind) {
            if (element.KODE_IKU == event.newData.KODE_IKU) {
                element.KODE_IKU = event.newData.KODE_IKU;
                element.DESKRIPSI = event.newData.DESKRIPSI;
                element.TIPE_IKU = event.newData.TIPE_IKU;
                _this.service
                    .patchreq("mst_ikus", _this.tabledata[ind])
                    .subscribe(function (response) {
                    console.log(JSON.stringify(response));
                    event.confirm.resolve(event.newData);
                    _this.toastr.success("Data Updated!");
                });
            }
        });
    };
    RealisasiQuantitativeComponent.prototype.generateDetail = function () {
        var _this = this;
        this.service.getreq("trn_indicator_qns").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                if (arr[0] != null) {
                    var defaultValueSettings = {
                        indikator1: "Indikator 1",
                        indikator2: "Indikator 2",
                        indikator3: "Indikator 3",
                        realisasi1: "Realisasi 1",
                        realisasi2: "Realisasi 2",
                        realisasi3: "Realisasi 3",
                    };
                    if (arr[0].INDIKATOR_1_DESC != "") {
                        defaultValueSettings.indikator1 = arr[0].INDIKATOR_1_DESC;
                        _this.nilaiIndicatorCheck.indicatorbool1 = true;
                    }
                    else {
                        _this.nilaiIndicatorCheck.indicatorbool1 = false;
                    }
                    if (arr[0].INDIKATOR_2_DESC != "") {
                        defaultValueSettings.indikator2 = arr[0].INDIKATOR_2_DESC;
                        _this.nilaiIndicatorCheck.indicatorbool2 = true;
                    }
                    else {
                        _this.nilaiIndicatorCheck.indicatorbool2 = false;
                    }
                    if (arr[0].INDIKATOR_3_DESC != "") {
                        defaultValueSettings.indikator3 = arr[0].INDIKATOR_3_DESC;
                        _this.nilaiIndicatorCheck.indicatorbool3 = true;
                    }
                    else {
                        _this.nilaiIndicatorCheck.indicatorbool3 = false;
                    }
                    _this.settings = {
                        add: {
                            addButtonContent: '<i class="nb-plus"></i>',
                            createButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmCreate: false
                        },
                        edit: {
                            editButtonContent: '<i class="nb-edit"></i>',
                            saveButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmSave: true
                        },
                        delete: {
                            deleteButtonContent: '<i class="nb-trash"></i>',
                            confirmDelete: false
                        },
                        mode: "inline",
                        sort: true,
                        hideSubHeader: true,
                        actions: {
                            add: false,
                            edit: true,
                            delete: false,
                            position: "right",
                            columnTitle: "Modify",
                            width: "10%"
                        },
                        pager: {
                            display: true,
                            perPage: 30
                        },
                        columns: {
                            DESC_BANK: {
                                title: "Bank",
                                type: "string",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            NILAI_INDICATOR_1: {
                                title: defaultValueSettings.indikator1,
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%",
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
                            NILAI_REALISASI_1: {
                                title: defaultValueSettings.realisasi1,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "30%",
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
                            RESULT1: {
                                title: "Result 1",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            PENCAPAIAN: {
                                title: "Pencapaian",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            }
                        }
                    };
                    var satuColumn = {
                        add: {
                            addButtonContent: '<i class="nb-plus"></i>',
                            createButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmCreate: false
                        },
                        edit: {
                            editButtonContent: '<i class="nb-edit"></i>',
                            saveButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmSave: true
                        },
                        delete: {
                            deleteButtonContent: '<i class="nb-trash"></i>',
                            confirmDelete: false
                        },
                        mode: "inline",
                        sort: true,
                        hideSubHeader: true,
                        actions: {
                            add: false,
                            edit: true,
                            delete: false,
                            position: "right",
                            columnTitle: "Modify",
                            width: "10%"
                        },
                        pager: {
                            display: true,
                            perPage: 30
                        },
                        columns: {
                            DESC_BANK: {
                                title: "Bank",
                                type: "string",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            NILAI_INDICATOR_1: {
                                title: defaultValueSettings.indikator1,
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%",
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
                            NILAI_REALISASI_1: {
                                title: defaultValueSettings.realisasi1,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "30%",
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
                            RESULT1: {
                                title: "Result 1",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            PENCAPAIAN: {
                                title: "Pencapaian",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            }
                        }
                    };
                    var duaColumn = {
                        add: {
                            addButtonContent: '<i class="nb-plus"></i>',
                            createButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmCreate: false
                        },
                        edit: {
                            editButtonContent: '<i class="nb-edit"></i>',
                            saveButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmSave: true
                        },
                        delete: {
                            deleteButtonContent: '<i class="nb-trash"></i>',
                            confirmDelete: false
                        },
                        mode: "inline",
                        sort: true,
                        hideSubHeader: true,
                        actions: {
                            add: false,
                            edit: true,
                            delete: false,
                            position: "right",
                            columnTitle: "Modify",
                            width: "10%"
                        },
                        pager: {
                            display: true,
                            perPage: 30
                        },
                        columns: {
                            DESC_BANK: {
                                title: "Bank",
                                type: "string",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            NILAI_INDICATOR_1: {
                                title: defaultValueSettings.indikator1,
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%",
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
                            NILAI_REALISASI_1: {
                                title: defaultValueSettings.realisasi1,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "30%",
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
                            RESULT1: {
                                title: "Result 1",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            NILAI_INDICATOR_2: {
                                title: defaultValueSettings.indikator2,
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%",
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
                            NILAI_REALISASI_2: {
                                title: defaultValueSettings.realisasi2,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "30%",
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
                            RESULT2: {
                                title: "Result 2",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            PENCAPAIAN: {
                                title: "Pencapaian",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            }
                        }
                    };
                    var tigaColumn = {
                        add: {
                            addButtonContent: '<i class="nb-plus"></i>',
                            createButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmCreate: false
                        },
                        edit: {
                            editButtonContent: '<i class="nb-edit"></i>',
                            saveButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmSave: true
                        },
                        delete: {
                            deleteButtonContent: '<i class="nb-trash"></i>',
                            confirmDelete: false
                        },
                        mode: "inline",
                        sort: true,
                        hideSubHeader: true,
                        actions: {
                            add: false,
                            edit: true,
                            delete: false,
                            position: "right",
                            columnTitle: "Modify",
                            width: "10%"
                        },
                        pager: {
                            display: true,
                            perPage: 30
                        },
                        columns: {
                            DESC_BANK: {
                                title: "Bank",
                                type: "string",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            NILAI_INDICATOR_1: {
                                title: defaultValueSettings.indikator1,
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%",
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
                            NILAI_REALISASI_1: {
                                title: defaultValueSettings.realisasi1,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "30%",
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
                            RESULT1: {
                                title: "Result 1",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            NILAI_INDICATOR_2: {
                                title: defaultValueSettings.indikator2,
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%",
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
                            NILAI_REALISASI_2: {
                                title: defaultValueSettings.realisasi2,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "30%",
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
                            RESULT2: {
                                title: "Result 2",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            NILAI_INDICATOR_3: {
                                title: defaultValueSettings.indikator3,
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%",
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
                            NILAI_REALISASI_3: {
                                title: defaultValueSettings.realisasi3,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "30%",
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
                            RESULT3: {
                                title: "Result 3",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            },
                            PENCAPAIAN: {
                                title: "Pencapaian",
                                type: "number",
                                filter: false,
                                editable: false,
                                width: "30%"
                            }
                        }
                    };
                    if (arr[0].INDIKATOR_2_DESC != "") {
                        _this.settings = Object.assign(_this.settings, duaColumn);
                    }
                    if (arr[0].INDIKATOR_3_DESC != "") {
                        _this.settings = Object.assign(_this.settings, tigaColumn);
                    }
                    _this.formData.indicatorId = arr[0].KODE_INDIKATOR;
                    _this.formData.threshold = arr[0].THRESHOLD;
                    _this.service.getreq("trn_indicator_qn_dtls").subscribe(function (response) {
                        if (response != null) {
                            var arrDtl = response.filter(function (item) {
                                return (item.KODE_IKU == _this.formData.ikuSelected &&
                                    item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                                    item.PERIODE == _this.formData.periodeSelected);
                            });
                            if (arrDtl[0] != null) {
                                var realisasiDetail_1 = [];
                                arrDtl.forEach(function (element, ind) {
                                    var detail = {
                                        KODE_IKU: _this.formData.ikuSelected,
                                        TAHUN_REALISASI: _this.formData.yearPeriode,
                                        PERIODE: _this.formData.periodeSelected,
                                        KODE_BANK: element.KODE_BANK,
                                        NILAI_INDICATOR_1: element.NILAI_INDICATOR_1,
                                        NILAI_INDICATOR_2: element.NILAI_INDICATOR_2,
                                        NILAI_INDICATOR_3: element.NILAI_INDICATOR_3,
                                        NILAI_REALISASI_1: 0,
                                        NILAI_REALISASI_2: 0,
                                        NILAI_REALISASI_3: 0,
                                        RESULT1: "0%",
                                        RESULT2: "0%",
                                        RESULT3: "0%",
                                        PENCAPAIAN: element.PENCAPAIAN,
                                        USER_CREATED: "Admin",
                                        DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                        USER_UPDATED: "Admin",
                                        DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                        DESC_BANK: _this.formData.bankData.filter(function (item) {
                                            return item.ID_BANK == element.KODE_BANK;
                                        })[0].DESCRIPTION
                                    };
                                    if (detail.PENCAPAIAN == null) {
                                        detail.PENCAPAIAN = 0;
                                    }
                                    realisasiDetail_1.push(detail);
                                });
                                _this.service.getreq("trn_realization_qn_dtls").subscribe(function (response) {
                                    if (response != null) {
                                        var arrReaDtl = response.filter(function (item) {
                                            return (item.KODE_IKU == _this.formData.ikuSelected &&
                                                item.TAHUN_REALISASI == _this.formData.yearPeriode &&
                                                item.PERIODE == _this.formData.periodeSelected);
                                        });
                                        if (arrReaDtl[0] != null) {
                                            console.log("realisasidetail", typeof realisasiDetail_1);
                                            console.log("jsonres arrredtl", arrReaDtl);
                                            arrReaDtl.forEach(function (el, i) {
                                                //console.log(el.NILAI_REALISASI_1)
                                                realisasiDetail_1[i].NILAI_REALISASI_1 = el.NILAI_REALISASI_1;
                                                realisasiDetail_1[i].NILAI_REALISASI_2 = el.NILAI_REALISASI_2;
                                                realisasiDetail_1[i].NILAI_REALISASI_3 = el.NILAI_REALISASI_3;
                                            });
                                            console.log("setelah di tiban", realisasiDetail_1);
                                        }
                                    }
                                    ;
                                });
                                _this.tabledata = realisasiDetail_1;
                                _this.formData.realisasiDetail = realisasiDetail_1;
                                _this.source.load(_this.tabledata);
                            }
                        }
                    });
                }
                else {
                    _this.toastr.error("Data Not Found!");
                    _this.tabledata = [];
                    _this.source.load(_this.tabledata);
                }
            }
        });
    };
    RealisasiQuantitativeComponent.prototype.save = function () {
        var _this = this;
        var header = {
            KODE_IKU: this.formData.ikuSelected,
            TAHUN_REALISASI: this.formData.yearPeriode,
            PERIODE: this.formData.periodeSelected,
            KODE_INDIKATOR: this.formData.indicatorId,
            //PENCAPAIAN: 1,
            USER_CREATED: "Admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
            USER_UPDATED: "Admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
        };
        this.service.postreq("trn_realization_qns/crud", header).subscribe(function (response) {
            console.log(response);
            _this.formData.realisasiDetail.forEach(function (element, ind) {
                _this.service.postreq("trn_realization_qn_dtls/crud", element)
                    .subscribe(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log("indicator detail");
                    console.log(error);
                });
            });
            _this.toastr.success("Data Saved!");
        }, function (error) {
            console.log("indicator header");
            console.log(error);
        });
    };
    RealisasiQuantitativeComponent.prototype.editConfirm = function (event) {
        event.newData.RESULT1 = (event.newData.NILAI_REALISASI_1 / event.newData.NILAI_INDICATOR_1 * 100).toFixed(2) + "%";
        event.newData.RESULT2 = (event.newData.NILAI_REALISASI_2 / event.newData.NILAI_INDICATOR_2 * 100).toFixed(2) + "%";
        event.newData.RESULT3 = (event.newData.NILAI_REALISASI_3 / event.newData.NILAI_INDICATOR_3 * 100).toFixed(2) + "%";
        if (parseInt(event.newData.RESULT1) > this.formData.threshold && parseInt(event.newData.RESULT2) > this.formData.threshold && parseInt(event.newData.RESULT3) > this.formData.threshold) {
            event.newData.PENCAPAIAN = 1;
        }
        else {
            event.newData.PENCAPAIAN = 0;
        }
        if (this.nilaiIndicatorCheck.indicatorbool1 === true) {
            if (parseInt(event.newData.RESULT1) > this.formData.threshold) {
                event.newData.PENCAPAIAN = 1;
            }
            else {
                event.newData.PENCAPAIAN = 0;
            }
        }
        if (this.nilaiIndicatorCheck.indicatorbool2 === true) {
            if (parseInt(event.newData.RESULT1) > this.formData.threshold && parseInt(event.newData.RESULT2) > this.formData.threshold) {
                event.newData.PENCAPAIAN = 1;
            }
            else {
                event.newData.PENCAPAIAN = 0;
            }
        }
        if (this.nilaiIndicatorCheck.indicatorbool3 === true) {
            if (parseInt(event.newData.RESULT1) > this.formData.threshold && parseInt(event.newData.RESULT2) > this.formData.threshold && parseInt(event.newData.RESULT3) > this.formData.threshold) {
                event.newData.PENCAPAIAN = 1;
            }
            else {
                event.newData.PENCAPAIAN = 0;
            }
        }
        console.log(this.formData.realisasiDetail);
        event.confirm.resolve(event.newData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], RealisasiQuantitativeComponent.prototype, "myForm", void 0);
    RealisasiQuantitativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-realisasi-quantitative",
            template: __webpack_require__("./src/app/pages/transaction/realisasi-quantitative/realisasi.quantitative.component.html"),
            styles: ["input:disabled {\n    background-color: rgba(211,211,211, 0.6);\n }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], RealisasiQuantitativeComponent);
    return RealisasiQuantitativeComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionComponent = /** @class */ (function () {
    function TransactionComponent() {
    }
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-transaction",
            template: __webpack_require__("./src/app/pages/transaction/transaction.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/transaction.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_router_module__ = __webpack_require__("./src/app/pages/transaction/transaction.router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_currency_mask__ = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__indicator_quantitative_modal_indicator_quantitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-quantitative/modal/indicator.quantitative.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__indicator_qualitative_modal_indicator_qualitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-qualitative/modal/indicator.qualitative.modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TransactionModule = /** @class */ (function () {
    function TransactionModule() {
    }
    TransactionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__transaction_router_module__["a" /* TransactionRouterModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_currency_mask__["CurrencyMaskModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__transaction_router_module__["b" /* routedComponents */].slice(),
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__indicator_quantitative_modal_indicator_quantitative_modal_component__["a" /* IndicatorQuantitativeModalComponent */], __WEBPACK_IMPORTED_MODULE_8__indicator_qualitative_modal_indicator_qualitative_modal_component__["a" /* IndicatorQualitativeModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__["a" /* BackendService */]]
        })
    ], TransactionModule);
    return TransactionModule;
}());



/***/ }),

/***/ "./src/app/pages/transaction/transaction.router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_component__ = __webpack_require__("./src/app/pages/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__indicator_quantitative_indicator_quantitative_component__ = __webpack_require__("./src/app/pages/transaction/indicator-quantitative/indicator.quantitative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indicator_quantitative_modal_indicator_quantitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-quantitative/modal/indicator.quantitative.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__realisasi_quantitative_realisasi_quantitative_component__ = __webpack_require__("./src/app/pages/transaction/realisasi-quantitative/realisasi.quantitative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__realisasi_qualitative_realisasi_qualitative_component__ = __webpack_require__("./src/app/pages/transaction/realisasi-qualitative/realisasi.qualitative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__indicator_qualitative_indicator_qualitative_component__ = __webpack_require__("./src/app/pages/transaction/indicator-qualitative/indicator.qualitative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__indicator_qualitative_modal_indicator_qualitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-qualitative/modal/indicator.qualitative.modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__transaction_component__["a" /* TransactionComponent */],
        children: [
            {
                path: "indicator-quantitative",
                component: __WEBPACK_IMPORTED_MODULE_3__indicator_quantitative_indicator_quantitative_component__["a" /* IndicatorQuantitativeComponent */]
            },
            {
                path: "realisasi-quantitative",
                component: __WEBPACK_IMPORTED_MODULE_5__realisasi_quantitative_realisasi_quantitative_component__["a" /* RealisasiQuantitativeComponent */]
            },
            {
                path: "realisasi-qualitative",
                component: __WEBPACK_IMPORTED_MODULE_6__realisasi_qualitative_realisasi_qualitative_component__["a" /* RealisasiQualitativeComponent */]
            },
            {
                path: "indicator-qualitative",
                component: __WEBPACK_IMPORTED_MODULE_7__indicator_qualitative_indicator_qualitative_component__["a" /* IndicatorQualitativeComponent */]
            }
        ]
    }
];
var TransactionRouterModule = /** @class */ (function () {
    function TransactionRouterModule() {
    }
    TransactionRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TransactionRouterModule);
    return TransactionRouterModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_7__indicator_qualitative_indicator_qualitative_component__["a" /* IndicatorQualitativeComponent */],
    __WEBPACK_IMPORTED_MODULE_8__indicator_qualitative_modal_indicator_qualitative_modal_component__["a" /* IndicatorQualitativeModalComponent */],
    __WEBPACK_IMPORTED_MODULE_6__realisasi_qualitative_realisasi_qualitative_component__["a" /* RealisasiQualitativeComponent */],
    __WEBPACK_IMPORTED_MODULE_3__indicator_quantitative_indicator_quantitative_component__["a" /* IndicatorQuantitativeComponent */],
    __WEBPACK_IMPORTED_MODULE_4__indicator_quantitative_modal_indicator_quantitative_modal_component__["a" /* IndicatorQuantitativeModalComponent */],
    __WEBPACK_IMPORTED_MODULE_5__realisasi_quantitative_realisasi_quantitative_component__["a" /* RealisasiQuantitativeComponent */],
    __WEBPACK_IMPORTED_MODULE_2__transaction_component__["a" /* TransactionComponent */]
];


/***/ })

});
//# sourceMappingURL=transaction.module.chunk.js.map