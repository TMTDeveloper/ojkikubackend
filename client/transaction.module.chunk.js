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

module.exports = "<nb-card>\n  <nb-card-header>IKU Indicator Qualitative</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">IKU\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-6\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-2\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Periode\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-3\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n              <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"generateDetail()\">Get Data</button>\n      </div>\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" (click)=\"showModal()\">Add Data</button>\n    </div>\n    \n    </div>\n\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"editConfirm($event)\" >\n      </ng2-smart-table>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"updateData()\">Update Data</button>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>"

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
        this.activeModal.componentInstance.formData.ikuSelected = this.formData.ikuSelected;
        this.activeModal.componentInstance.formData.yearPeriode = this.formData.yearPeriode;
        this.activeModal.componentInstance.formData.periodeSelected = this.formData.periodeSelected;
        this.activeModal.result.then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //console.log(response);
                if (response != null) {
                    this.formData.ikuSelected = response.ikuSelected;
                    this.formData.periodeSelected = response.periodeSelected;
                    this.formData.yearPeriode = response.yearPeriode;
                    this.generateDetail();
                    this.source.refresh();
                }
                return [2 /*return*/];
            });
        }); }, function (error) { });
    };
    IndicatorQualitativeComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var respIku, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getreq("mst_ikus").toPromise().then(function (response) {
                            if (response != null) {
                                respIku = response;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, respIku.filter(function (item) {
                                return (item.TIPE_IKU == "QUALITATIVE");
                            })];
                    case 2:
                        arr = _a.sent();
                        if (arr[0] != null) {
                            this.formData.ikuData = arr;
                        }
                        else {
                            this.toastr.error("Tidak Ditemukan IKU Qualitative Data");
                        }
                        return [2 /*return*/];
                }
            });
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
                    var indicatorQualitativeDetail_1 = [];
                    arr.forEach(function (element, ind) {
                        element.NO_DETAIL = ind + 1;
                        indicatorQualitativeDetail_1.push(element);
                    });
                    _this.tabledata = indicatorQualitativeDetail_1;
                    _this.formData.indicatorQualitativeData = indicatorQualitativeDetail_1;
                    _this.toastr.success("Load Data Success!");
                    _this.source.load(_this.tabledata);
                    console.log(_this.tabledata);
                }
                else {
                    _this.toastr.error("Data Not Found!");
                    _this.tabledata = [];
                    _this.source.load(_this.tabledata);
                    _this.source.refresh();
                }
            }
        });
    };
    IndicatorQualitativeComponent.prototype.updateData = function () {
        var _this = this;
        this.formData.indicatorQualitativeData.forEach(function (element) {
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

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Input New Data</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    \n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">IKU\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-6\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n            <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">Tahun\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-1\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">Periode\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-2\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n            <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">Tipe Data\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-2\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.tipeDataSelected\">\n            <option *ngFor=\"let data of formData.tipeData\" value=\"{{data.id}}\">{{data.desc}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-1 col-form-label\">Deskripsi\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-6\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.descriptionIndicator\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-auto\">\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"saveData()\">Add New Data</button>\n      <button type=\"submit\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\n    </div>\n  </div>\n</div>\n"

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
            indicatorQualitativeData: []
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__["a" /* LocalDataSource */]();
    }
    IndicatorQualitativeModalComponent.prototype.saveData = function () {
        var _this = this;
        this.service.getreq("trn_indicator_qls").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                if (arr[0] != null) {
                    _this.formData.noDetail = arr.length + 1;
                }
                else {
                    _this.formData.noDetail = 1;
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
                _this.service.postreq("trn_indicator_qls/crud", header).subscribe(function (response) {
                    if (response != null) {
                        console.log(response);
                    }
                });
                _this.toastr.success("New Data Added!");
                var data = {
                    ikuSelected: _this.formData.ikuSelected,
                    yearPeriode: _this.formData.yearPeriode,
                    periodeSelected: _this.formData.periodeSelected
                };
                _this.activeModal.close(data);
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
                if (arr[0] != null) {
                    var indicatorQualitativeModalData_1 = [];
                    arr.forEach(function (element, ind) {
                        element.NO_DETAIL = ind + 1;
                        indicatorQualitativeModalData_1.push(element);
                    });
                    var data = {
                        ikuSelected: _this.formData.ikuSelected,
                        yearPeriode: _this.formData.yearPeriode,
                        periodeSelected: _this.formData.periodeSelected,
                        indicatorQualitativeData: indicatorQualitativeModalData_1
                    };
                    _this.formData.indicatorQualitativeData = indicatorQualitativeModalData_1;
                    _this.toastr.success("New Data Added!");
                    _this.activeModal.close(data);
                }
                else {
                    var data = {
                        ikuSelected: _this.formData.ikuSelected,
                        yearPeriode: _this.formData.yearPeriode,
                        periodeSelected: _this.formData.periodeSelected,
                        indicatorQualitativeData: []
                    };
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

module.exports = "<nb-card>\n  <nb-card-header>IKU Indicator Quantitative</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">IKU\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-9\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Periode\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-9\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n              <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Threshold\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.threshold\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Indicator ID\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicatorId\" readonly=\"true\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-auto\">\n            <button type=\" button \" class=\"btn btn-success \" (click)=\"getData()\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\">Get Data</button>\n          </div>\n          <div class=\"col-sm-auto\">\n            <button type=\" button \" class=\"btn btn-success\" (click)=\"showModal()\">Add Data</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-8\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Indicator 1 Description\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicator1\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\">Realisasi 1 Description\n  \n            </label>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\" [class.green]=\"isDisabled\" [(ngModel)]=\"formData.realisasi1\" disabled>\n            </div>\n          </div>\n      \n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\" >Indicator 2 Description\n  \n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicator2\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\">Realisasi 2 Description\n  \n            </label>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\"  [(ngModel)]=\"formData.realisasi2\" disabled>\n            </div>\n          </div>\n      \n      \n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Indicator 3 Description\n  \n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicator3\" disabled>\n          </div>\n        </div>\n       \n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Realisasi 3 Description\n  \n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.realisasi3\" disabled>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Remark\n  \n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.remark\" disabled>\n          </div>\n        </div>\n      </div>\n\n      \n       \n      \n    </div>\n\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"submit($event)\" (createConfirm)=\"addData($event)\">\n      </ng2-smart-table>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected||!formData.threshold\"\n          (click)=\"save()\">Update Data</button>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>\n"

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
                    width: "25%",
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
            remark: "",
            bankData: [],
            indicatorDetail: []
        };
        this.loadData();
    }
    IndicatorQuantitativeComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var respIku, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getreq("mst_ikus").toPromise().then(function (response) {
                            if (response != null) {
                                respIku = response;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, respIku.filter(function (item) {
                                return (item.TIPE_IKU == "QUANTITATIVE");
                            })];
                    case 2:
                        arr = _a.sent();
                        if (arr[0] != null) {
                            this.formData.ikuData = arr;
                        }
                        else {
                            this.toastr.error("Tidak Ditemukan IKU Qualitative Data");
                        }
                        return [2 /*return*/];
                }
            });
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
        this.activeModal.componentInstance.formData.periodeSelected = this.formData.periodeSelected;
        this.activeModal.componentInstance.formData.ikuSelected = this.formData.ikuSelected;
        this.activeModal.componentInstance.formData.yearPeriode = this.formData.yearPeriode;
        //
        this.activeModal.componentInstance.formData.threshold = this.formData.threshold;
        this.activeModal.componentInstance.formData.indicator1 = this.formData.indicator1;
        this.activeModal.componentInstance.formData.indicator2 = this.formData.indicator2;
        this.activeModal.componentInstance.formData.indicator3 = this.formData.indicator3;
        this.activeModal.componentInstance.formData.realisasi1 = this.formData.realisasi1;
        this.activeModal.componentInstance.formData.realisasi2 = this.formData.realisasi2;
        this.activeModal.componentInstance.formData.realisasi3 = this.formData.realisasi3;
        this.activeModal.componentInstance.formData.remark = this.formData.remark;
        //
        this.activeModal.result.then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(response);
                if (response != null) {
                    this.formData.ikuSelected = response.ikuSelected;
                    this.formData.periodeSelected = response.periodeSelected;
                    this.formData.yearPeriode = response.yearPeriode;
                    this.getData();
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
    IndicatorQuantitativeComponent.prototype.getData = function () {
        var _this = this;
        var defaultTitle = {
            nilai1: "Nilai 1",
            nilai2: "Nilai 2",
            nilai3: "Nilai 3"
        };
        this.service.getreq("trn_indicator_qns").subscribe(function (response) {
            if (response != null) {
                var res = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                if (res[0] != null) {
                    _this.formData.indicator1 = res[0].INDIKATOR_1_DESC;
                    _this.formData.indicator2 = res[0].INDIKATOR_2_DESC;
                    _this.formData.indicator3 = res[0].INDIKATOR_3_DESC;
                    _this.formData.realisasi1 = res[0].REALISASI_1_DESC;
                    _this.formData.realisasi2 = res[0].REALISASI_2_DESC;
                    _this.formData.realisasi3 = res[0].REALISASI_3_DESC;
                    _this.formData.threshold = res[0].THRESHOLD;
                    _this.formData.indicatorId = res[0].KODE_INDIKATOR;
                    _this.formData.remark = res[0].REMARK;
                    if (res[0].INDIKATOR_1_DESC != "") {
                        defaultTitle.nilai1 = res[0].INDIKATOR_1_DESC;
                    }
                    if (res[0].INDIKATOR_2_DESC != "") {
                        defaultTitle.nilai2 = res[0].INDIKATOR_2_DESC;
                    }
                    if (res[0].INDIKATOR_3_DESC != "") {
                        defaultTitle.nilai3 = res[0].INDIKATOR_3_DESC;
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
                                width: "40%"
                            },
                            NILAI_INDICATOR_1: {
                                title: defaultTitle.nilai1,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "60%",
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
                                width: "30%"
                            },
                            NILAI_INDICATOR_1: {
                                title: defaultTitle.nilai1,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "35%",
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
                            NILAI_INDICATOR_2: {
                                title: defaultTitle.nilai2,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "35%",
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
                                width: "20%"
                            },
                            NILAI_INDICATOR_1: {
                                title: defaultTitle.nilai1,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "25%",
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
                            NILAI_INDICATOR_2: {
                                title: defaultTitle.nilai2,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "25%",
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
                            NILAI_INDICATOR_3: {
                                title: defaultTitle.nilai3,
                                type: "number",
                                filter: false,
                                editable: true,
                                width: "25%",
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
                    if (res[0].INDIKATOR_2_DESC != "") {
                        Object.assign(_this.settings, duaColumn);
                    }
                    if (res[0].INDIKATOR_3_DESC != "") {
                        Object.assign(_this.settings, tigaColumn);
                    }
                    _this.service.getreq("mst_banks").subscribe(function (response) {
                        if (response != null) {
                            _this.formData.bankData = response;
                            var indicatorDetail_1 = [];
                            _this.service.getreq("trn_indicator_qn_dtls").subscribe(function (responseDtl) {
                                if (responseDtl != null) {
                                    _this.formData.bankData.forEach(function (element, ind) {
                                        var arr = responseDtl.filter(function (item) {
                                            return (item.KODE_IKU == _this.formData.ikuSelected &&
                                                item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                                                item.PERIODE == _this.formData.periodeSelected &&
                                                item.KODE_BANK == element.ID_BANK);
                                        });
                                        if (arr[0] == null) {
                                            console.log(arr);
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
                                        }
                                        else {
                                            console.log(arr);
                                            var detail = {
                                                KODE_IKU: _this.formData.ikuSelected,
                                                TAHUN_INDICATOR: _this.formData.yearPeriode,
                                                PERIODE: _this.formData.periodeSelected,
                                                KODE_BANK: element.ID_BANK,
                                                NILAI_INDICATOR_1: arr[0].NILAI_INDICATOR_1,
                                                NILAI_INDICATOR_2: arr[0].NILAI_INDICATOR_2,
                                                NILAI_INDICATOR_3: arr[0].NILAI_INDICATOR_3,
                                                USER_CREATED: "Admin",
                                                DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                                USER_UPDATED: "Admin",
                                                DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                                DESC_BANK: element.DESCRIPTION
                                            };
                                            indicatorDetail_1.push(detail);
                                        }
                                    });
                                    indicatorDetail_1 = indicatorDetail_1.sort(function (a, b) { return a.KODE_BANK - b.KODE_BANK; });
                                    _this.tabledata = indicatorDetail_1;
                                    _this.formData.indicatorDetail = indicatorDetail_1;
                                    _this.formData.indicatorId =
                                        "RBB" +
                                            _this.formData.ikuSelected +
                                            _this.formData.yearPeriode +
                                            _this.formData.periodeSelected;
                                    _this.source.load(_this.tabledata);
                                }
                            });
                        }
                    });
                }
                else {
                    _this.toastr.error("Data Not Found!");
                }
            }
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

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Input Indikator</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\">IKU\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-9\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n            <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\">Tahun\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-6\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\">Periode\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-6\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n            <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\">Threshold\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-3\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.threshold\">\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Indicator 1 Description\n            <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.indicator1\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Realisasi 1 Description\n              <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [class.green]=\"isDisabled\" [(ngModel)]=\"formData.realisasi1\">\n          </div>\n        </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\" >Indicator 2 Description\n\n        </label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.indicator2\" [disabled]=\"!formData.realisasi1\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Realisasi 2 Description\n\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [disabled]=\"!formData.realisasi1\" [(ngModel)]=\"formData.realisasi2\">\n          </div>\n        </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Indicator 3 Description\n\n        </label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.indicator3\" [disabled]=\"!formData.realisasi2\">\n        </div>\n      </div>\n     \n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Realisasi 3 Description\n\n        </label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\" [disabled]=\"!formData.realisasi2\" [(ngModel)]=\"formData.realisasi3\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Remark\n          \n        </label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.remark\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-auto\">\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"addNewData()\" \n        [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected||!formData.threshold||!formData.indicator1||!formData.realisasi1\">Add New Data</button>\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=closeModal()>Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/transaction/indicator-quantitative/modal/indicator.quantitative.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorQuantitativeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
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
    function IndicatorQuantitativeModalComponent(activeModal, toastr, service) {
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
            periodeSelected: "",
            ikuData: [],
            ikuSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_3_moment__().format("YYYY"),
            bankData: [],
            indicatorDetail: [],
            threshold: 0,
            indicator1: "",
            indicator2: "",
            indicator3: "",
            realisasi1: "",
            realisasi2: "",
            realisasi3: "",
            remark: ""
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__["a" /* LocalDataSource */]();
    }
    IndicatorQuantitativeModalComponent.prototype.addNewData = function () {
        var _this = this;
        var header = {
            KODE_IKU: this.formData.ikuSelected,
            TAHUN_INDICATOR: this.formData.yearPeriode,
            PERIODE: this.formData.periodeSelected,
            KODE_INDIKATOR: "FET" +
                this.formData.ikuSelected +
                this.formData.yearPeriode +
                this.formData.periodeSelected,
            THRESHOLD: this.formData.threshold,
            INDIKATOR_1_DESC: this.formData.indicator1,
            INDIKATOR_2_DESC: this.formData.indicator2,
            INDIKATOR_3_DESC: this.formData.indicator3,
            REALISASI_1_DESC: this.formData.realisasi1,
            REALISASI_2_DESC: this.formData.realisasi2,
            REALISASI_3_DESC: this.formData.realisasi3,
            USER_CREATED: "admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
            USER_UPDATED: "admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
            REMARK: this.formData.remark
        };
        this.service.postreq("trn_indicator_qns/crud", header).subscribe(function (response) {
            if (response != null) {
                _this.toastr.success("Data Added!");
                var data = {
                    ikuSelected: _this.formData.ikuSelected,
                    periodeSelected: _this.formData.periodeSelected,
                    yearPeriode: _this.formData.yearPeriode
                };
                _this.activeModal.close(data);
            }
            else {
                _this.toastr.error("Add Data Failed!");
            }
        });
    };
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
                                    KODE_IKU: _this.formData.ikuSelected,
                                    TAHUN_INDICATOR: _this.formData.yearPeriode,
                                    PERIODE: _this.formData.periodeSelected,
                                    KODE_BANK: element.ID_BANK,
                                    NILAI_INDICATOR_1: 0,
                                    NILAI_INDICATOR_2: 0,
                                    NILAI_INDICATOR_3: 0,
                                    USER_CREATED: "Admin",
                                    DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
                                    USER_UPDATED: "Admin",
                                    DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
                                    DESC_BANK: element.DESCRIPTION
                                };
                                _this.formData.indicatorDetail.push(detail);
                            }
                            else {
                                console.log(arr);
                                var detail = {
                                    KODE_IKU: _this.formData.ikuSelected,
                                    TAHUN_INDICATOR: _this.formData.yearPeriode,
                                    PERIODE: _this.formData.periodeSelected,
                                    KODE_BANK: element.ID_BANK,
                                    NILAI_INDICATOR_1: arr[0].NILAI_REALISASI_1,
                                    NILAI_INDICATOR_2: arr[0].NILAI_REALISASI_2,
                                    NILAI_INDICATOR_3: arr[0].NILAI_REALISASI_3,
                                    USER_CREATED: "Admin",
                                    DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
                                    USER_UPDATED: "Admin",
                                    DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
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
        this.activeModal.close();
    };
    IndicatorQuantitativeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "ngx-indicator-quantitative-modal",
            template: __webpack_require__("./src/app/pages/transaction/indicator-quantitative/modal/indicator.quantitative.modal.component.html"),
            styles: ["\n  input:disabled {\n    background-color: rgba(211,211,211, 0.6);\n }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__["a" /* BackendService */]])
    ], IndicatorQuantitativeModalComponent);
    return IndicatorQuantitativeModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/indicator-strategic/indicator.strategic.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>IKU Indicator Strategic</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">IKU\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-9\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Periode\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-9\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n              <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-auto\">\n            <button type=\" button \" class=\"btn btn-success \" (click)=\"getData()\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\">Get Data</button>\n          </div>\n          <div class=\"col-sm-auto\">\n            <button type=\" button \" class=\"btn btn-success\" (click)=\"showModal()\">Add Data</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-8\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Indicator Description\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicatorDescription\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Realisasi Description\n\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [class.green]=\"isDisabled\" [(ngModel)]=\"formData.realisasiDescription\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Threshold\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.threshold\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Indicator ID\n          </label>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.indicatorId\" readonly=\"true\" disabled>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/transaction/indicator-strategic/indicator.strategic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorStrategicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_indicator_strategic_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-strategic/modal/indicator.strategic.modal.component.ts");
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







var IndicatorStrategicComponent = /** @class */ (function () {
    function IndicatorStrategicComponent(modalService, toastr, service) {
        this.modalService = modalService;
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
            ikuData: [],
            ikuSelected: "",
            periodeSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_3_moment__().format("YYYY"),
            indicatorDescription: "",
            realisasiDescription: "",
            threshold: 0,
            indicatorId: "",
        };
        this.loadData();
    }
    IndicatorStrategicComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var respIku, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getreq("mst_ikus").toPromise().then(function (response) {
                            if (response != null) {
                                respIku = response;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, respIku.filter(function (item) {
                                return (item.TIPE_IKU == "STRATEGIC");
                            })];
                    case 2:
                        arr = _a.sent();
                        if (arr[0] != null) {
                            this.formData.ikuData = arr;
                        }
                        else {
                            this.toastr.error("Tidak Ditemukan IKU Indicator Strategic Data");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndicatorStrategicComponent.prototype.getData = function () {
        var _this = this;
        this.service.getreq("trn_indicator_qns").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                if (arr[0] != null) {
                    _this.formData.indicatorDescription = arr[0].INDIKATOR_1_DESC;
                    _this.formData.realisasiDescription = arr[0].REALISASI_1_DESC;
                    _this.formData.threshold = arr[0].THRESHOLD;
                    _this.formData.indicatorId = "FET" +
                        _this.formData.ikuSelected +
                        _this.formData.yearPeriode +
                        _this.formData.periodeSelected;
                    _this.toastr.success("Get Data Success!");
                }
                else {
                    _this.toastr.error("No Data!");
                }
            }
        });
    };
    IndicatorStrategicComponent.prototype.showModal = function () {
        var _this = this;
        this.activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__modal_indicator_strategic_modal_component__["a" /* IndicatorStrategicModalComponent */], {
            windowClass: "xlModal",
            container: "nb-layout",
            backdrop: "static"
        });
        this.activeModal.componentInstance.formData.ikuData = this.formData.ikuData;
        this.activeModal.componentInstance.formData.periodeSelected = this.formData.periodeSelected;
        this.activeModal.componentInstance.formData.ikuSelected = this.formData.ikuSelected;
        this.activeModal.componentInstance.formData.yearPeriode = this.formData.yearPeriode;
        this.activeModal.componentInstance.formData.threshold = this.formData.threshold;
        this.activeModal.componentInstance.formData.indicatorDescription = this.formData.indicatorDescription;
        this.activeModal.componentInstance.formData.realisasiDescription = this.formData.realisasiDescription;
        this.activeModal.result.then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(response);
                if (response != null) {
                    this.formData.ikuSelected = response.ikuSelected;
                    this.formData.periodeSelected = response.periodeSelected;
                    this.formData.yearPeriode = response.yearPeriode;
                    this.getData();
                }
                return [2 /*return*/];
            });
        }); }, function (error) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"])
    ], IndicatorStrategicComponent.prototype, "myForm", void 0);
    IndicatorStrategicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-indicator-strategic",
            template: __webpack_require__("./src/app/pages/transaction/indicator-strategic/indicator.strategic.component.html"),
            styles: [
                "\n      input:disabled {\n        background-color: rgba(211, 211, 211, 0.6);\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__["a" /* BackendService */]])
    ], IndicatorStrategicComponent);
    return IndicatorStrategicComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/indicator-strategic/modal/indicator.strategic.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">IKU Indikator Strategic</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\">IKU\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-9\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n            <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\">Tahun\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-9\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\">Periode\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-9\">\n          <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n            <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n          </select>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Indicator Description\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.indicatorDescription\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Realisasi Description\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\" [class.green]=\"isDisabled\" [(ngModel)]=\"formData.realisasiDescription\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Threshold\n          <font color=\"red\">*</font>\n        </label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\" [(ngModel)]=\"formData.threshold\">\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-sm-auto\">\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"addNewData()\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected||!formData.threshold||!formData.indicatorDescription||!formData.realisasiDescription\">Add New Data</button>\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=closeModal()>Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/transaction/indicator-strategic/modal/indicator.strategic.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorStrategicModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
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





var IndicatorStrategicModalComponent = /** @class */ (function () {
    function IndicatorStrategicModalComponent(activeModal, toastr, service) {
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
            ikuData: [],
            periodeSelected: "",
            ikuSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY"),
            threshold: 0,
            indicatorDescription: "",
            realisasiDescription: "",
        };
    }
    IndicatorStrategicModalComponent.prototype.addNewData = function () {
        var _this = this;
        var header = {
            KODE_IKU: this.formData.ikuSelected,
            TAHUN_INDICATOR: this.formData.yearPeriode,
            PERIODE: this.formData.periodeSelected,
            KODE_INDIKATOR: "FET" +
                this.formData.ikuSelected +
                this.formData.yearPeriode +
                this.formData.periodeSelected,
            THRESHOLD: this.formData.threshold,
            INDIKATOR_1_DESC: this.formData.indicatorDescription,
            REALISASI_1_DESC: this.formData.realisasiDescription,
            INDIKATOR_2_DESC: null,
            REALISASI_2_DESC: null,
            INDIKATOR_3_DESC: null,
            REALISASI_3_DESC: null,
            USER_CREATED: "admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
            USER_UPDATED: "admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_2_moment__().format(),
            REMARK: ""
        };
        console.log(header);
        this.service.postreq("trn_indicator_qns/crud", header).subscribe(function (response) {
            if (response != null) {
                _this.toastr.success("Data Added!");
                var data = {
                    ikuSelected: _this.formData.ikuSelected,
                    periodeSelected: _this.formData.periodeSelected,
                    yearPeriode: _this.formData.yearPeriode
                };
                _this.activeModal.close(data);
            }
            else {
                _this.toastr.error("Add Data Failed!");
            }
        });
    };
    IndicatorStrategicModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    IndicatorStrategicModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-indicator-strategic-modal",
            template: __webpack_require__("./src/app/pages/transaction/indicator-strategic/modal/indicator.strategic.modal.component.html"),
            styles: ["\n  input:disabled {\n    background-color: rgba(211,211,211, 0.6);\n }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_backend_service__["a" /* BackendService */]])
    ], IndicatorStrategicModalComponent);
    return IndicatorStrategicModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/moka-realisasi/button.moka.realisasi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MokaRealisasiDatePicker; });
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

var MokaRealisasiDatePicker = /** @class */ (function () {
    function MokaRealisasiDatePicker() {
    }
    MokaRealisasiDatePicker.prototype.ngOnInit = function () {
        this.renderValue = this.value;
    };
    MokaRealisasiDatePicker.prototype.example = function () {
        alert(this.renderValue);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MokaRealisasiDatePicker.prototype, "value", void 0);
    MokaRealisasiDatePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div class=\"input-group\">\n  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d1\" [(ngModel)]=\"formData.startDate\" ngbDatepicker #d1=\"ngbDatepicker\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-outline-secondary\" (click)=\"d1.toggle()\" type=\"button\">\n      <img src=\"assets/images/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n    </button>\n  </div>\n</div>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], MokaRealisasiDatePicker);
    return MokaRealisasiDatePicker;
}());



/***/ }),

/***/ "./src/app/pages/transaction/moka-realisasi/moka.realisasi.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>MOKA Realisasi</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.years\">\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Dokumen\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.documentSelected\">\n              <option *ngFor=\"let data of formData.documentData\" value=\"{{data.id}}\">{{ data.desc }}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Bank\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.bankSelected\">\n              <option *ngFor=\"let data of formData.bankData\" value=\"{{data.ID_BANK}}\">{{data.DESCRIPTION}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.documentSelected||!formData.bankSelected\" \n        (click)=\"getData()\">Get Data</button>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"submit($event)\" (createConfirm)=\"addData($event)\">\n      </ng2-smart-table>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" \n          (click)=\"updateData()\">Update Data</button>\n      </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/transaction/moka-realisasi/moka.realisasi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MokaRealisasiComponent; });
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







var MokaRealisasiComponent = /** @class */ (function () {
    function MokaRealisasiComponent(modalService, toastr, service) {
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
                NO: {
                    title: "NO",
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "2%"
                },
                TIPE_DOKUMEN: {
                    title: "Tipe Dokumen",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "3%"
                },
                ID_BANK: {
                    title: "Bank",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "15%"
                },
                START_DATE: {
                    title: "Start Date",
                    type: "date",
                    filter: false,
                    editable: true,
                    width: "5%"
                },
                TARGET_DATE: {
                    title: "Target Date",
                    type: "date",
                    filter: false,
                    editable: false,
                    width: "5%",
                },
                REALIZATION_DATE: {
                    title: "Realization Date",
                    type: "string",
                    filter: false,
                    editable: true,
                    width: "15%",
                },
                KETERANGAN: {
                    title: "Keterangan",
                    type: "string",
                    filter: false,
                    editable: true,
                    width: "25%",
                },
                USER_REALIZATION: {
                    title: "Updated By",
                    type: "string",
                    filter: false,
                    editable: true,
                    width: "10%",
                },
            }
        };
        this.formData = {
            documentData: [
                {
                    id: "RBB",
                    desc: "RBB"
                },
                {
                    id: "Lain-lain",
                    desc: "Lain-lain"
                }
            ],
            documentSelected: "",
            bankSelected: "",
            years: __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY"),
            threshold: 0,
            bankData: [],
            monaRealisasiData: []
        };
        this.loadData();
    }
    MokaRealisasiComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_banks").subscribe(function (response) {
            if (response != null) {
                _this.formData.bankData = response;
            }
        });
    };
    MokaRealisasiComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var monaTargetData, monaRealisasi, arrMonaTargetData, monaTargetdetail_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getreq("trn_monas").toPromise().then(function (resp) {
                            if (resp != null) {
                                monaTargetData = resp;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.service.getreq("trn_mona_realizations").toPromise().then(function (res) {
                                if (res != null) {
                                    monaRealisasi = res;
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, monaTargetData.filter(function (items) {
                                return (items.ID_BANK == _this.formData.bankSelected &&
                                    items.TIPE_DOKUMEN == _this.formData.documentSelected &&
                                    items.YEAR == _this.formData.years);
                            })];
                    case 3:
                        arrMonaTargetData = _a.sent();
                        if (!(arrMonaTargetData[0] != null)) return [3 /*break*/, 5];
                        monaTargetdetail_1 = [];
                        return [4 /*yield*/, arrMonaTargetData.forEach(function (element, index) {
                                var detail = {
                                    NO: 1,
                                    KODE_BANK: 0,
                                    TIPE_DOKUMEN: "kosong",
                                    ID_BANK: "kosong",
                                    START_DATE: "kosong",
                                    TARGET_DATE: "kosong",
                                    REALIZATION_DATE: "kosong",
                                    USER_REALIZATION: "Kosong",
                                    KETERANGAN: "Belum di isi",
                                    YEAR: 0
                                };
                                detail.NO = index + 1;
                                detail.KODE_BANK = element.ID_BANK;
                                detail.TIPE_DOKUMEN = element.TIPE_DOKUMEN;
                                detail.YEAR = element.YEAR;
                                detail.START_DATE = __WEBPACK_IMPORTED_MODULE_4_moment__(element.START_DATE).format("DD/MM/YYYY");
                                detail.TARGET_DATE = __WEBPACK_IMPORTED_MODULE_4_moment__(element.TARGET_DATE).format("DD/MM/YYYY");
                                var arrBank = _this.formData.bankData.filter(function (item) {
                                    return (item.ID_BANK == element.ID_BANK);
                                });
                                if (arrBank[0] != null) {
                                    detail.ID_BANK = arrBank[0].DESCRIPTION;
                                }
                                var arrs = monaRealisasi.filter(function (items) {
                                    return (items.ID_BANK == detail.KODE_BANK &&
                                        items.TIPE_DOKUMEN == detail.TIPE_DOKUMEN &&
                                        items.YEAR == detail.YEAR);
                                });
                                if (arrs[0] != null) {
                                    if (arrs[0].REALIZATION_DATE != null) {
                                        detail.REALIZATION_DATE = __WEBPACK_IMPORTED_MODULE_4_moment__(arrs[0].REALIZATION_DATE).format("DD/MM/YYYY");
                                    }
                                    else {
                                        detail.REALIZATION_DATE = "kosong";
                                    }
                                    detail.KETERANGAN = arrs[0].KETERANGAN;
                                    detail.USER_REALIZATION = arrs[0].USER_REALIZATION;
                                    console.log(detail);
                                }
                                monaTargetdetail_1.push(detail);
                            })];
                    case 4:
                        _a.sent();
                        this.formData.monaRealisasiData = monaTargetdetail_1;
                        this.tabledata = monaTargetdetail_1;
                        this.source.load(this.tabledata);
                        this.source.refresh();
                        return [3 /*break*/, 6];
                    case 5:
                        this.toastr.error("Data Not Found!");
                        this.tabledata = [];
                        this.source.load(this.tabledata);
                        this.source.refresh();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MokaRealisasiComponent.prototype.updateData = function () {
        var _this = this;
        this.tabledata.forEach(function (element) {
            var header = {
                ID_BANK: element.KODE_BANK,
                YEAR: element.YEAR,
                TIPE_DOKUMEN: element.TIPE_DOKUMEN,
                KETERANGAN: element.KETERANGAN,
                USER_REALIZATION: "admin",
                REALIZATION_DATE: element.REALIZATION_DATE,
                USER_UPDATED: "admin",
                DATE_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
            };
            if (element.REALIZATION_DATE == "kosong") {
                header.REALIZATION_DATE = null;
            }
            else {
                header.REALIZATION_DATE = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.dateReformat(element.REALIZATION_DATE)).format();
            }
            _this.service.postreq("trn_mona_realizations/crud", header).subscribe(function (response) {
                console.log(response);
                _this.toastr.success("Data Saved!");
            }, function (error) {
                _this.toastr.error("Error, Cek kembali data!");
                console.log(error);
            });
        });
    };
    MokaRealisasiComponent.prototype.editConfirm = function (event) {
        console.log(event.newData);
        event.confirm.resolve(event.newData);
    };
    MokaRealisasiComponent.prototype.submit = function (event) {
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
    MokaRealisasiComponent.prototype.dateReformat = function (value) {
        var str = value.split("/");
        return str[2] + "-" + str[1] + "-" + str[0];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], MokaRealisasiComponent.prototype, "myForm", void 0);
    MokaRealisasiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-moka-realisasi",
            template: __webpack_require__("./src/app/pages/transaction/moka-realisasi/moka.realisasi.component.html"),
            styles: ["\n  input:disabled {\n    background-color: rgba(211,211,211, 0.6);\n }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], MokaRealisasiComponent);
    return MokaRealisasiComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/moka-target/modal/moka.target.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">MOKA TARGET</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  \n \n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Dokumen\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.documentSelected\">\n              <option *ngFor=\"let data of formData.documentData\" value=\"{{data.id}}\">{{ data.desc }}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Bank\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.bankSelected\">\n              <option *ngFor=\"let data of formData.bankData\" value=\"{{data.ID_BANK}}\">{{data.DESCRIPTION}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Start Date\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d1\" [(ngModel)]=\"formData.startDate\" ngbDatepicker #d1=\"ngbDatepicker\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"d1.toggle()\" type=\"button\">\n                  <img src=\"assets/images/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Target Date\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d2\" [(ngModel)]=\"formData.targetDate\" ngbDatepicker #d2=\"ngbDatepicker\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"d2.toggle()\" type=\"button\">\n                  <img src=\"assets/images/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Keterangan\n              <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.keterangan\">\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.documentSelected||!formData.bankSelected||!formData.startDate||!formData.targetDate||!formData.keterangan\"\n          (click)=\"addNewData()\">Save Data</button>\n          <button type=\"button\" class=\"btn btn-danger \" (click)=\"closeModal()\">CANCEL</button>\n      </div>\n    </div>\n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/transaction/moka-target/modal/moka.target.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MokaTargetModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MokaTargetModalComponent = /** @class */ (function () {
    function MokaTargetModalComponent(activeModal, toastr, service) {
        this.activeModal = activeModal;
        this.toastr = toastr;
        this.service = service;
        this.formData = {
            documentData: [
                {
                    id: "RBB",
                    desc: "RBB"
                },
                {
                    id: "Lain-lain",
                    desc: "Lain-lain"
                }
            ],
            documentSelected: "",
            bankSelected: "",
            startDate: "",
            targetDate: "",
            keterangan: "",
            year: __WEBPACK_IMPORTED_MODULE_3_moment__().format("YYYY"),
            bankData: [],
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__["a" /* LocalDataSource */]();
    }
    MokaTargetModalComponent.prototype.dateReformat = function (value) {
        return value.year + "-" + value.month + "-" + value.day;
    };
    MokaTargetModalComponent.prototype.addNewData = function () {
        var _this = this;
        var header = {
            YEAR: this.formData.year,
            ID_BANK: this.formData.bankSelected,
            TIPE_DOKUMEN: this.formData.documentSelected,
            KETERANGAN: this.formData.keterangan,
            START_DATE: __WEBPACK_IMPORTED_MODULE_3_moment__(this.dateReformat(this.formData.startDate)).format(),
            TARGET_DATE: __WEBPACK_IMPORTED_MODULE_3_moment__(this.dateReformat(this.formData.targetDate)).format(),
            USER_CREATED: "admin",
            DATE_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
            USER_UPDATED: "admin",
            DATE_UPDATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
        };
        console.log(header);
        this.service.postreq("trn_monas/crud", header).subscribe(function (response) {
            if (response != null) {
                _this.toastr.success("Data Added!");
                var data = {
                    yearPeriode: _this.formData.startDate
                };
                _this.activeModal.close(data);
            }
            else {
                _this.toastr.error("Add Data Failed!");
            }
        });
    };
    MokaTargetModalComponent.prototype.refreshSelected = function (event) {
        // this.selectedData = event.data;
    };
    MokaTargetModalComponent.prototype.submit = function () { };
    MokaTargetModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    MokaTargetModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "ngx-moka-target-modal",
            template: __webpack_require__("./src/app/pages/transaction/moka-target/modal/moka.target.modal.component.html"),
            styles: ["\n  input:disabled {\n    background-color: rgba(211,211,211, 0.6);\n }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__["a" /* BackendService */]])
    ], MokaTargetModalComponent);
    return MokaTargetModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/moka-target/moka.target.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>MOKA Target</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Tahun\n            <font color=\"red\">*</font>\n          </label>\n          <div class=\"col-sm-8\">\n            <input class=\"form-control\" [(ngModel)]=\"formData.years\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" (click)=\"getData()\">Get Data</button>\n      </div>\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" (click)=\"showModal()\">Add Data</button>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"submit($event)\" (createConfirm)=\"addData($event)\">\n      </ng2-smart-table>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/transaction/moka-target/moka.target.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MokaTargetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_moka_target_modal_component__ = __webpack_require__("./src/app/pages/transaction/moka-target/modal/moka.target.modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MokaTargetComponent = /** @class */ (function () {
    function MokaTargetComponent(modalService, toastr, service) {
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
                edit: false,
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
                TIPE_DOKUMEN: {
                    title: "Tipe Dokumen",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "15%"
                },
                ID_BANK: {
                    title: "Bank",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "20%"
                },
                START_DATE: {
                    title: "Start Date",
                    type: "date",
                    filter: false,
                    editable: true,
                    width: "15%"
                },
                TARGET_DATE: {
                    title: "Target Date",
                    type: "date",
                    filter: false,
                    editable: true,
                    width: "15%",
                },
                KETERANGAN: {
                    title: "Keterangan",
                    type: "string",
                    filter: false,
                    editable: true,
                    width: "35%",
                },
            }
        };
        this.formData = {
            documentData: [
                {
                    id: "rbp",
                    desc: "RBP"
                },
                {
                    id: "lainlain",
                    desc: "Lain-lain"
                }
            ],
            years: __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY"),
            bankData: [],
            monaDataDetail: []
        };
        this.loadData();
    }
    MokaTargetComponent.prototype.loadData = function () {
        var _this = this;
        this.service.getreq("mst_banks").subscribe(function (response) {
            if (response != null) {
                _this.formData.bankData = response;
            }
        });
    };
    MokaTargetComponent.prototype.showModal = function () {
        var _this = this;
        this.activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__modal_moka_target_modal_component__["a" /* MokaTargetModalComponent */], {
            windowClass: "xlModal",
            container: "nb-layout",
            backdrop: "static"
        });
        this.activeModal.componentInstance.formData.bankData = this.formData.bankData;
        this.activeModal.result.then(function (result) {
            _this.getData();
        }, function (reason) {
            _this.getData();
        });
    };
    MokaTargetComponent.prototype.getData = function () {
        var _this = this;
        this.service.getreq("trn_monas").subscribe(function (response) {
            if (response != null) {
                var res = response.filter(function (item) {
                    return (item.YEAR == _this.formData.years &&
                        item.REALIZATION_DATE == null);
                });
                var monaTargetdetail_1 = [];
                if (res[0] != null) {
                    res.forEach(function (element) {
                        var arr = _this.formData.bankData.filter(function (item) {
                            return (item.ID_BANK == element.ID_BANK);
                        });
                        var detail = {};
                        if (arr[0] != null) {
                            detail = {
                                TIPE_DOKUMEN: element.TIPE_DOKUMEN,
                                ID_BANK: arr[0].DESCRIPTION,
                                START_DATE: __WEBPACK_IMPORTED_MODULE_4_moment__(element.START_DATE).format("DD MMMM YYYY"),
                                TARGET_DATE: __WEBPACK_IMPORTED_MODULE_4_moment__(element.TARGET_DATE).format("DD MMMM YYYY"),
                                KETERANGAN: element.KETERANGAN
                            };
                            monaTargetdetail_1.push(detail);
                        }
                    });
                    _this.toastr.success("Get Data Success!");
                    _this.formData.monaDataDetail = monaTargetdetail_1;
                    _this.tabledata = monaTargetdetail_1;
                    _this.source.load(_this.tabledata);
                    _this.source.refresh();
                }
                else {
                    _this.toastr.error("Data Not Found!");
                    _this.tabledata = [];
                    _this.source.load(_this.tabledata);
                    _this.source.refresh();
                }
            }
        });
    };
    MokaTargetComponent.prototype.save = function () {
        console.log("SAVE");
    };
    MokaTargetComponent.prototype.submit = function (event) {
        console.log("Submited");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], MokaTargetComponent.prototype, "myForm", void 0);
    MokaTargetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-moka-target",
            template: __webpack_require__("./src/app/pages/transaction/moka-target/moka.target.component.html"),
            styles: ["\n  input:disabled {\n    background-color: rgba(211,211,211, 0.6);\n }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], MokaTargetComponent);
    return MokaTargetComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/realisasi-qualitative/button.realisasi.quantitative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_realisasi_qualitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/realisasi-qualitative/modal/realisasi.qualitative.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonRenderComponent = /** @class */ (function () {
    function ButtonRenderComponent(modalService) {
        this.modalService = modalService;
    }
    ButtonRenderComponent.prototype.ngOnInit = function () {
        this.realisasiData = this.value;
        //console.log(this.realisasiData);
    };
    ButtonRenderComponent.prototype.showModal = function () {
        this.activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_1__modal_realisasi_qualitative_modal_component__["a" /* RealisasiQualitativeModalComponent */], {
            windowClass: "xlModal",
            container: "nb-layout",
            backdrop: "static"
        });
        this.activeModal.componentInstance.formData.ikuSelected = this.realisasiData.KODE_IKU;
        this.activeModal.componentInstance.formData.tahunSelected = this.realisasiData.TAHUN_REALISASI;
        this.activeModal.componentInstance.formData.periodeSelected = this.realisasiData.PERIODE;
        this.activeModal.componentInstance.formData.bankSelected = this.realisasiData.KODE_BANK;
        this.activeModal.componentInstance.formData.noUrut = this.realisasiData.NO;
    };
    ButtonRenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"showModal()\">Detail</button>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ButtonRenderComponent);
    return ButtonRenderComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/realisasi-qualitative/modal/realisasi.qualitative.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Realisasi Qualitative Detail</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"form-group\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"editConfirm($event)\">\n    </ng2-smart-table>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-auto\">\n      <button type=\" button \" class=\"btn btn-success \" (click)=\"save()\">Submit</button>\n      <button type=\"button\" class=\"btn btn-danger \" (click)=\"closeModal()\">CANCEL</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/transaction/realisasi-qualitative/modal/realisasi.qualitative.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealisasiQualitativeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__ = __webpack_require__("./src/app/@core/data/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RealisasiQualitativeModalComponent = /** @class */ (function () {
    function RealisasiQualitativeModalComponent(activeModal, toastr, service) {
        this.activeModal = activeModal;
        this.toastr = toastr;
        this.service = service;
        this.source = new __WEBPACK_IMPORTED_MODULE_0_ng2_smart_table__["a" /* LocalDataSource */]();
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
                    editable: false,
                    width: "5%",
                    sortDirection: 'asc'
                },
                TIPE_DATA: {
                    title: "Tipe Data",
                    type: "string",
                    editable: false,
                    filter: false,
                    width: "10%",
                },
                JUDUL: {
                    title: "Judul",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "45%"
                },
                DESKRIPSI: {
                    title: "Deskripsi",
                    type: "string",
                    filter: false,
                    editable: true,
                    width: "45%"
                }
            }
        };
        this.formData = {
            ikuSelected: String,
            tahunSelected: String,
            periodeSelected: String,
            bankSelected: String,
            noUrut: Number
        };
    }
    RealisasiQualitativeModalComponent.prototype.ngOnInit = function () {
        //this.source.load(this.tabledata)
        //console.log(this.formData)
        this.generateDetail();
    };
    RealisasiQualitativeModalComponent.prototype.generateDetail = function () {
        var _this = this;
        this.service.getreq("trn_indicator_qls").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_INDICATOR == _this.formData.tahunSelected &&
                        item.PERIODE == _this.formData.periodeSelected);
                });
                if (arr[0] != null) {
                    var realisasidetail_1 = [];
                    arr.forEach(function (element, index) {
                        var detail = {
                            KODE_IKU: _this.formData.ikuSelected,
                            TAHUN_REALISASI: _this.formData.tahunSelected,
                            PERIODE: _this.formData.periodeSelected,
                            KODE_BANK: _this.formData.bankSelected,
                            NO_URUT: _this.formData.noUrut,
                            NO_DETAIL: Number,
                            TIPE_DATA: String,
                            JUDUL: String,
                            DESKRIPSI: "Belum Di isi",
                            USER_CREATED: "admin",
                            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
                            USER_UPDATED: "admin",
                            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
                        };
                        detail.NO_DETAIL = element.NO_DETAIL;
                        detail.TIPE_DATA = element.TIPE_DATA;
                        detail.JUDUL = element.DESKRIPSI;
                        _this.service.getreq("trn_realization_ql_dtls").subscribe(function (res) {
                            if (res != null) {
                                var arrDtl = res.filter(function (item) {
                                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                                        item.TAHUN_REALISASI == _this.formData.tahunSelected &&
                                        item.PERIODE == _this.formData.periodeSelected &&
                                        item.KODE_BANK == _this.formData.bankSelected &&
                                        item.NO_URUT == _this.formData.noUrut &&
                                        item.NO_DETAIL == element.NO_DETAIL);
                                });
                                console.log(arrDtl);
                                if (arrDtl[0] != null) {
                                    detail.DESKRIPSI = arrDtl[0].DESKRIPSI;
                                    realisasidetail_1.push(detail);
                                    _this.tabledata = realisasidetail_1;
                                    _this.source.load(_this.tabledata);
                                    _this.source.refresh();
                                }
                                else {
                                    detail.DESKRIPSI = "Belum di isi";
                                    realisasidetail_1.push(detail);
                                    _this.tabledata = realisasidetail_1;
                                    _this.source.load(_this.tabledata);
                                    _this.source.refresh();
                                }
                            }
                        });
                    });
                }
            }
        });
    };
    RealisasiQualitativeModalComponent.prototype.save = function () {
        var _this = this;
        console.log(this.tabledata);
        this.tabledata.forEach(function (element) {
            var header = {
                KODE_IKU: _this.formData.ikuSelected,
                TAHUN_REALISASI: _this.formData.tahunSelected,
                PERIODE: _this.formData.periodeSelected,
                KODE_BANK: _this.formData.bankSelected,
                NO_URUT: _this.formData.noUrut,
                NO_DETAIL: element.NO_DETAIL,
                TIPE_DATA: element.TIPE_DATA,
                JUDUL: element.JUDUL,
                DESKRIPSI: element.DESKRIPSI,
                USER_CREATED: "admin",
                DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
                USER_UPDATED: "admin",
                DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_3_moment__().format(),
            };
            console.log(header);
            _this.service.postreq("trn_realization_ql_dtls/crud", header).subscribe(function (response) {
                if (response != null) {
                    _this.toastr.success("Data Updated!");
                    _this.closeModal();
                }
                else {
                    _this.toastr.error("Update Failed!");
                }
            });
        });
    };
    RealisasiQualitativeModalComponent.prototype.editConfirm = function (event) {
        //console.log(event.newData.RESULT1);
        event.confirm.resolve(event.newData);
    };
    RealisasiQualitativeModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    RealisasiQualitativeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "ngx-realisasi-qualitative-modal",
            template: __webpack_require__("./src/app/pages/transaction/realisasi-qualitative/modal/realisasi.qualitative.modal.component.html"),
            styles: ["\n  input:disabled {\n    background-color: rgba(211,211,211, 0.6);\n }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__["a" /* BackendService */]])
    ], RealisasiQualitativeModalComponent);
    return RealisasiQualitativeModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/realisasi-qualitative/realisasi.qualitative.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>IKU Realisasi Qualitative</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-1 col-form-label\">IKU\r\n            <font color=\"red\">*</font>\r\n          </label>\r\n          <div class=\"col-sm-7\">\r\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\r\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-1 col-form-label\">Tahun\r\n            <font color=\"red\">*</font>\r\n          </label>\r\n          <div class=\"col-sm-4\">\r\n            <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-1 col-form-label\">Periode\r\n            <font color=\"red\">*</font>\r\n          </label>\r\n          <div class=\"col-sm-4\">\r\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\r\n              <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-1 col-form-label\">Bank\r\n\r\n          </label>\r\n          <div class=\"col-sm-7\">\r\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.bankSelected\">\r\n              <option *ngFor=\"let data of formData.bankData\" value=\"{{data.ID_BANK}}\">{{data.DESCRIPTION}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-auto\">\r\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected||!formData.bankSelected\"\r\n          (click)=\"generateDetail()\">Get Data</button>\r\n          <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected||!formData.bankSelected\"\r\n          (click)=\"addData()\">Add Data</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"editConfirm($event)\" >\r\n      </ng2-smart-table>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-auto\">\r\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.realisasiDetail\"\r\n          (click)=\"updateData()\">Submit</button>\r\n      </div>\r\n\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button_realisasi_quantitative_component__ = __webpack_require__("./src/app/pages/transaction/realisasi-qualitative/button.realisasi.quantitative.component.ts");
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
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "5%"
                },
                DETAIL: {
                    title: "Detail",
                    type: "custom",
                    editable: false,
                    filter: false,
                    width: "10%",
                    valuePrepareFunction: function (cell, row) { return row; },
                    renderComponent: __WEBPACK_IMPORTED_MODULE_7__button_realisasi_quantitative_component__["a" /* ButtonRenderComponent */]
                },
                STATUS: {
                    title: "Status",
                    type: "html",
                    editor: {
                        type: "list",
                        config: {
                            list: [
                                { title: 'Selesai', value: 'Selesai' },
                                { title: 'Belum Selesai', value: 'Belum Selesai' },
                                { title: 'Pantau', value: 'Pantau' }
                            ]
                        }
                    },
                    filter: false,
                    editable: true,
                    width: "15%"
                },
                KETERANGAN: {
                    title: "Keterangan",
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
            ikuSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY"),
            periodeSelected: "",
            bankSelected: "",
            ikuData: [],
            bankData: [],
            realisasiDetail: [],
        };
        this.loadData();
    }
    RealisasiQualitativeComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var respIku, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getreq("mst_ikus").toPromise().then(function (response) {
                            if (response != null) {
                                respIku = response;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, respIku.filter(function (item) {
                                return (item.TIPE_IKU == "QUALITATIVE");
                            })];
                    case 2:
                        arr = _a.sent();
                        if (arr[0] != null) {
                            this.formData.ikuData = arr;
                        }
                        else {
                            this.toastr.error("Tidak Ditemukan IKU Qualitative Data");
                        }
                        return [4 /*yield*/, this.service.getreq("mst_banks").toPromise().then(function (response) {
                                if (response != null) {
                                    _this.formData.bankData = response;
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RealisasiQualitativeComponent.prototype.updateData = function () {
        var _this = this;
        this.tabledata.forEach(function (element) {
            if (element.STATUS == "Selesai") {
                element.STATUS = "selesai";
            }
            if (element.STATUS == "Belum Selesai") {
                element.STATUS = "blmselesai";
            }
            if (element.STATUS == "Pantau") {
                element.STATUS = "pantau";
            }
            var header = {
                KODE_IKU: element.KODE_IKU,
                TAHUN_REALISASI: element.TAHUN_REALISASI,
                PERIODE: element.PERIODE,
                KODE_BANK: element.KODE_BANK,
                NO_URUT: element.NO,
                STATUS: element.STATUS,
                KETERANGAN: element.KETERANGAN,
                USER_CREATED: "admin",
                DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                USER_UPDATED: "admin",
                DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
            };
            //console.log(header);
            _this.service.postreq("trn_realization_qls/crud", header).subscribe(function (response) {
                //console.log(response);
            }, function (error) {
                //console.log("indicator detail");
                //console.log(error);
            });
        });
        this.toastr.success("Data Updated!");
    };
    RealisasiQualitativeComponent.prototype.addData = function () {
        var _this = this;
        var header = {
            KODE_IKU: this.formData.ikuSelected,
            TAHUN_REALISASI: this.formData.yearPeriode,
            PERIODE: this.formData.periodeSelected,
            KODE_BANK: this.formData.bankSelected,
            NO_URUT: 1,
            STATUS: "blmselesai",
            KETERANGAN: "Belum Di Isi",
            USER_CREATED: "admin",
            DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
            USER_UPDATED: "admin",
            DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format()
        };
        this.service.getreq("trn_realization_qls").subscribe(function (res) {
            if (res != null) {
                header.NO_URUT = res.length + 1;
            }
        });
        console.log(header);
        this.service.postreq("trn_realization_qls", header).subscribe(function (response) {
            //console.log(header)
            if (response != null) {
                _this.toastr.success("Data Added!");
            }
            else {
                _this.toastr.error("Failed Add Data!");
            }
        });
        this.generateDetail();
    };
    RealisasiQualitativeComponent.prototype.generateDetail = function () {
        var _this = this;
        this.service.getreq("trn_realization_qls").subscribe(function (response) {
            if (response != null) {
                var arr = response.filter(function (item) {
                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                        item.TAHUN_REALISASI == _this.formData.yearPeriode &&
                        item.PERIODE == _this.formData.periodeSelected &&
                        item.KODE_BANK == _this.formData.bankSelected);
                });
                if (arr[0] != null) {
                    var realisasiDetail_1 = [];
                    arr.forEach(function (element, ind) {
                        if (element.STATUS == "selesai") {
                            element.STATUS = "Selesai";
                        }
                        if (element.STATUS == "blmselesai") {
                            element.STATUS = "Belum Selesai";
                        }
                        if (element.STATUS == "pantau") {
                            element.STATUS = "Pantau";
                        }
                        var detail = {
                            KODE_IKU: _this.formData.ikuSelected,
                            TAHUN_REALISASI: _this.formData.yearPeriode,
                            PERIODE: _this.formData.periodeSelected,
                            KODE_BANK: element.KODE_BANK,
                            NO: ind + 1,
                            STATUS: element.STATUS,
                            KETERANGAN: element.KETERANGAN,
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
                    _this.toastr.success("Get Data Success!");
                }
                else {
                    _this.toastr.error("Data Not Found!");
                    _this.tabledata = [];
                    _this.source.load(_this.tabledata);
                }
            }
        });
    };
    RealisasiQualitativeComponent.prototype.editConfirm = function (event) {
        //console.log(event.newData.RESULT1);
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

module.exports = "<nb-card>\n  <nb-card-header>IKU Realisasi Quantitative</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">IKU\n            <span>\n              <font color=\"red\">*</font>\n            </span>\n          </label>\n          <div class=\"col-sm-9\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\">Tahun\n              <span><font color=\"red\">*</font></span>\n            </label>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\">Periode\n                <span><font color=\"red\">*</font></span>\n              </label>\n              <div class=\"col-sm-9\">\n                <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n                  <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n                </select>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-sm-6\">\n          <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\">Threshold\n              </label>\n              <div class=\"col-sm-6\">\n                <input class=\"form-control\" [(ngModel)]=\"formData.threshold\" readonly=\"true\" disabled>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Indicator ID\n                </label>\n                <div class=\"col-sm-6\">\n                  <input class=\"form-control\" [(ngModel)]=\"formData.indicatorId\" readonly=\"true\" disabled>\n                </div>\n              </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"getData()\">Input Detail</button>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"editConfirm($event)\">\n      </ng2-smart-table>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"save()\">Submit</button>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>\n"

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
            sort: false,
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
                REMARK: {
                    title: "Remark",
                    type: "string",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                TARGET: {
                    title: "Target",
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
        this.nilaiIndicatorCheck = {
            indicatorbool1: false,
            indicatorbool2: false,
            indicatorbool3: false
        };
        this.loadData();
    }
    RealisasiQuantitativeComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var respIku, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getreq("mst_ikus").toPromise().then(function (response) {
                            if (response != null) {
                                respIku = response;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, respIku.filter(function (item) {
                                return (item.TIPE_IKU == "QUANTITATIVE");
                            })];
                    case 2:
                        arr = _a.sent();
                        if (arr[0] != null) {
                            this.formData.ikuData = arr;
                        }
                        else {
                            this.toastr.error("Tidak Ditemukan IKU Qualitative Data");
                        }
                        return [4 /*yield*/, this.service.getreq("mst_banks").toPromise().then(function (response) {
                                if (response != null) {
                                    _this.formData.bankData = response;
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
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
    RealisasiQuantitativeComponent.prototype.getData = function () {
        "use strict";
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var realisasiDetail, indicatorQnData, indicatorQnDtlData, realizationQnDtlData, arr, defaultValueSettings, duaColumn, tigaColumn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        realisasiDetail = [];
                        return [4 /*yield*/, this.service.getreq("trn_indicator_qns").toPromise().then(function (response) {
                                if (response != null) {
                                    indicatorQnData = response;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.service.getreq("trn_indicator_qn_dtls").toPromise().then(function (response) {
                                if (response != null) {
                                    indicatorQnDtlData = response;
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.service.getreq("trn_realization_qn_dtls").toPromise().then(function (response) {
                                if (response != null) {
                                    realizationQnDtlData = response;
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, indicatorQnData.filter(function (item) {
                                return (item.KODE_IKU == _this.formData.ikuSelected &&
                                    item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                                    item.PERIODE == _this.formData.periodeSelected);
                            })];
                    case 4:
                        arr = _a.sent();
                        if (arr[0] != null) {
                            defaultValueSettings = {
                                indikator1: "Indikator 1",
                                indikator2: "Indikator 2",
                                indikator3: "Indikator 3",
                                realisasi1: "Realisasi 1",
                                realisasi2: "Realisasi 2",
                                realisasi3: "Realisasi 3",
                                remark: "Remark"
                            };
                            if (arr[0].INDIKATOR_1_DESC != "") {
                                defaultValueSettings.indikator1 = arr[0].INDIKATOR_1_DESC;
                                defaultValueSettings.realisasi1 = arr[0].REALISASI_1_DESC;
                                this.nilaiIndicatorCheck.indicatorbool1 = true;
                            }
                            else {
                                this.nilaiIndicatorCheck.indicatorbool1 = false;
                            }
                            if (arr[0].INDIKATOR_2_DESC != "") {
                                defaultValueSettings.indikator2 = arr[0].INDIKATOR_2_DESC;
                                defaultValueSettings.realisasi2 = arr[0].REALISASI_2_DESC;
                                this.nilaiIndicatorCheck.indicatorbool2 = true;
                            }
                            else {
                                this.nilaiIndicatorCheck.indicatorbool2 = false;
                            }
                            if (arr[0].INDIKATOR_3_DESC != "") {
                                defaultValueSettings.indikator3 = arr[0].INDIKATOR_3_DESC;
                                defaultValueSettings.realisasi3 = arr[0].REALISASI_3_DESC;
                                this.nilaiIndicatorCheck.indicatorbool3 = true;
                            }
                            else {
                                this.nilaiIndicatorCheck.indicatorbool3 = false;
                            }
                            if (arr[0].REMARK != null) {
                                defaultValueSettings.remark = arr[0].REMARK;
                            }
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
                                    REMARK: {
                                        title: defaultValueSettings.remark,
                                        type: "string",
                                        filter: false,
                                        editable: true,
                                        width: "30%"
                                    },
                                    TARGET: {
                                        title: "Target",
                                        type: "number",
                                        filter: false,
                                        editable: true,
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
                            duaColumn = {
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
                                    REMARK: {
                                        title: defaultValueSettings.remark,
                                        type: "string",
                                        filter: false,
                                        editable: true,
                                        width: "30%"
                                    },
                                    TARGET: {
                                        title: "Target",
                                        type: "number",
                                        filter: false,
                                        editable: true,
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
                            tigaColumn = {
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
                                    REMARK: {
                                        title: defaultValueSettings.remark,
                                        type: "string",
                                        filter: false,
                                        editable: true,
                                        width: "30%"
                                    },
                                    TARGET: {
                                        title: "Target",
                                        type: "number",
                                        filter: false,
                                        editable: true,
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
                                this.settings = Object.assign(this.settings, duaColumn);
                            }
                            if (arr[0].INDIKATOR_3_DESC != "") {
                                this.settings = Object.assign(this.settings, tigaColumn);
                            }
                            this.formData.indicatorId = arr[0].KODE_INDIKATOR;
                            this.formData.threshold = arr[0].THRESHOLD;
                            this.formData.bankData.forEach(function (element) {
                                var detail = {
                                    KODE_IKU: _this.formData.ikuSelected,
                                    TAHUN_REALISASI: _this.formData.yearPeriode,
                                    PERIODE: _this.formData.periodeSelected,
                                    KODE_BANK: element.ID_BANK,
                                    NILAI_INDICATOR_1: 0,
                                    NILAI_INDICATOR_2: 0,
                                    NILAI_INDICATOR_3: 0,
                                    NILAI_REALISASI_1: 0,
                                    NILAI_REALISASI_2: 0,
                                    NILAI_REALISASI_3: 0,
                                    RESULT1: "0%",
                                    RESULT2: "0%",
                                    RESULT3: "0%",
                                    PENCAPAIAN: "0",
                                    USER_CREATED: "Admin",
                                    DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                    USER_UPDATED: "Admin",
                                    DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                    DESC_BANK: element.DESCRIPTION,
                                    REMARK: "",
                                    TARGET: _this.formData.threshold
                                };
                                if (arr[0] != null) {
                                    detail.REMARK = arr[0].REMARK;
                                }
                                var arrIndicatorDtlData = indicatorQnDtlData.filter(function (item) {
                                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                                        item.PERIODE == _this.formData.periodeSelected &&
                                        item.KODE_BANK == element.ID_BANK);
                                });
                                if (arrIndicatorDtlData[0] != null) {
                                    detail.NILAI_INDICATOR_1 = arrIndicatorDtlData[0].NILAI_INDICATOR_1;
                                    detail.NILAI_INDICATOR_2 = arrIndicatorDtlData[0].NILAI_INDICATOR_2;
                                    detail.NILAI_INDICATOR_3 = arrIndicatorDtlData[0].NILAI_INDICATOR_3;
                                }
                                var arrRealizationDtlData = realizationQnDtlData.filter(function (item) {
                                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                                        item.TAHUN_REALISASI == _this.formData.yearPeriode &&
                                        item.PERIODE == _this.formData.periodeSelected &&
                                        item.KODE_BANK == element.ID_BANK);
                                });
                                if (arrRealizationDtlData[0] != null) {
                                    detail.NILAI_REALISASI_1 = arrRealizationDtlData[0].NILAI_REALISASI_1;
                                    detail.NILAI_REALISASI_2 = arrRealizationDtlData[0].NILAI_REALISASI_2;
                                    detail.NILAI_REALISASI_3 = arrRealizationDtlData[0].NILAI_REALISASI_3;
                                    detail.PENCAPAIAN = arrRealizationDtlData[0].PENCAPAIAN;
                                    if (arrRealizationDtlData[0].TARGET != null) {
                                        detail.TARGET = arrRealizationDtlData[0].TARGET;
                                    }
                                    if (arrRealizationDtlData[0].REMARK != null) {
                                        detail.REMARK = arrRealizationDtlData[0].REMARK;
                                    }
                                }
                                detail.RESULT1 = ((detail.NILAI_REALISASI_1 / detail.NILAI_INDICATOR_1) * 100).toFixed(2) + "%";
                                detail.RESULT2 = ((detail.NILAI_REALISASI_2 / detail.NILAI_INDICATOR_2) * 100).toFixed(2) + "%";
                                detail.RESULT3 = ((detail.NILAI_REALISASI_3 / detail.NILAI_INDICATOR_3) * 100).toFixed(2) + "%";
                                if (detail.RESULT1 === "NaN%" || detail.RESULT1 === "Infinity%") {
                                    detail.RESULT1 = "0%";
                                }
                                ;
                                if (detail.RESULT2 === "NaN%" || detail.RESULT2 === "Infinity%") {
                                    detail.RESULT2 = "0%";
                                }
                                ;
                                if (detail.RESULT3 === "NaN%" || detail.RESULT3 === "Infinity%") {
                                    detail.RESULT3 = "0%";
                                }
                                ;
                                realisasiDetail.push(detail);
                            });
                            realisasiDetail = realisasiDetail.sort(function (a, b) { return a.KODE_BANK - b.KODE_BANK; });
                            this.tabledata = realisasiDetail;
                            this.formData.realisasiDetail = realisasiDetail;
                            this.source.load(this.formData.realisasiDetail);
                            this.source.refresh();
                            console.log(this.tabledata);
                            this.toastr.success("Get Data Sucess!");
                        }
                        else {
                            this.tabledata = [];
                            this.formData.realisasiDetail = this.tabledata;
                            this.source.load(this.formData.realisasiDetail);
                            this.source.refresh();
                            this.toastr.error("Data Indikator Belum di isi!");
                        }
                        return [2 /*return*/];
                }
            });
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
        }, function (error) {
            console.log("indicator header");
            console.log(error);
        });
        this.formData.realisasiDetail.forEach(function (element, ind) {
            console.log(element);
            var headerdtl = {
                KODE_IKU: element.KODE_IKU,
                TAHUN_REALISASI: element.TAHUN_REALISASI,
                PERIODE: element.PERIODE,
                KODE_BANK: element.KODE_BANK,
                NILAI_REALISASI_1: element.NILAI_REALISASI_1,
                NILAI_REALISASI_2: element.NILAI_REALISASI_2,
                NILAI_REALISASI_3: element.NILAI_REALISASI_3,
                PENCAPAIAN: element.PENCAPAIAN.toString(),
                USER_CREATED: "admin",
                DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                USER_UPDATED: "admin",
                DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                REMARK: element.REMARK,
                TARGET: element.TARGET
            };
            if (element.NILAI_REALISASI_2 == 0) {
                headerdtl.NILAI_REALISASI_2 = element.NILAI_REALISASI_1;
            }
            if (element.NILAI_REALISASI_3 == 0) {
                headerdtl.NILAI_REALISASI_3 = element.NILAI_REALISASI_1;
            }
            _this.service.postreq("trn_realization_qn_dtls/crud", headerdtl).subscribe(function (response) {
                console.log(response);
            }, function (error) {
                console.log("indicator detail");
                console.log(error);
            });
        });
        this.toastr.success("Data Saved!");
    };
    RealisasiQuantitativeComponent.prototype.editConfirm = function (event) {
        event.newData.RESULT1 =
            ((event.newData.NILAI_REALISASI_1 / event.newData.NILAI_INDICATOR_1) *
                100).toFixed(2) + "%";
        event.newData.RESULT2 =
            ((event.newData.NILAI_REALISASI_2 / event.newData.NILAI_INDICATOR_2) *
                100).toFixed(2) + "%";
        event.newData.RESULT3 =
            ((event.newData.NILAI_REALISASI_3 / event.newData.NILAI_INDICATOR_3) *
                100).toFixed(2) + "%";
        if (event.data.TARGET == event.newData.TARGET) {
            console.log("data sama coy");
            if (this.nilaiIndicatorCheck.indicatorbool1 === true) {
                if (parseInt(event.newData.RESULT1) >= event.data.TARGET) {
                    event.newData.PENCAPAIAN = "1";
                }
                else {
                    event.newData.PENCAPAIAN = "0";
                }
            }
            if (this.nilaiIndicatorCheck.indicatorbool2 === true && event.newData.PENCAPAIAN != "1") {
                if (parseInt(event.newData.RESULT2) >= event.data.TARGET) {
                    event.newData.PENCAPAIAN = "1";
                }
                else {
                    event.newData.PENCAPAIAN = "0";
                }
            }
            if (this.nilaiIndicatorCheck.indicatorbool3 === true && event.newData.PENCAPAIAN != "1") {
                if (parseInt(event.newData.RESULT3) >= event.data.TARGET) {
                    event.newData.PENCAPAIAN = "1";
                }
                else {
                    event.newData.PENCAPAIAN = "0";
                }
            }
            event.confirm.resolve(event.newData);
        }
        else {
            console.log("data enggak sama");
            if (this.nilaiIndicatorCheck.indicatorbool1 === true) {
                if (parseInt(event.newData.RESULT1) >= event.newData.TARGET) {
                    event.newData.PENCAPAIAN = "1";
                }
                else {
                    event.newData.PENCAPAIAN = "0";
                }
            }
            if (this.nilaiIndicatorCheck.indicatorbool2 === true && event.newData.PENCAPAIAN != "1") {
                if (parseInt(event.newData.RESULT2) >= event.newData.TARGET) {
                    event.newData.PENCAPAIAN = "1";
                }
                else {
                    event.newData.PENCAPAIAN = "0";
                }
            }
            if (this.nilaiIndicatorCheck.indicatorbool3 === true && event.newData.PENCAPAIAN != "1") {
                if (parseInt(event.newData.RESULT3) >= event.newData.TARGET) {
                    event.newData.PENCAPAIAN = "1";
                }
                else {
                    event.newData.PENCAPAIAN = "0";
                }
            }
            if (event.newData.RESULT1 == "NaN%") {
                event.newData.RESULT1 = "0%";
            }
            if (event.newData.RESULT2 == "NaN%") {
                event.newData.RESULT2 = "0%";
            }
            if (event.newData.RESULT3 == "NaN%") {
                event.newData.RESULT3 = "0%";
            }
            event.confirm.resolve(event.newData);
        }
    };
    RealisasiQuantitativeComponent.prototype.refresh = function () {
        this.source.refresh();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], RealisasiQuantitativeComponent.prototype, "myForm", void 0);
    RealisasiQuantitativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-realisasi-quantitative",
            template: __webpack_require__("./src/app/pages/transaction/realisasi-quantitative/realisasi.quantitative.component.html"),
            styles: [
                "\n      input:disabled {\n        background-color: rgba(211, 211, 211, 0.6);\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], RealisasiQuantitativeComponent);
    return RealisasiQuantitativeComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/realisasi-strategic/realisasi.strategic.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>IKU Realisasi Strategic</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">IKU\n            <span>\n              <font color=\"red\">*</font>\n            </span>\n          </label>\n          <div class=\"col-sm-9\">\n            <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.ikuSelected\">\n              <option *ngFor=\"let data of formData.ikuData\" value=\"{{data.KODE_IKU}}\">{{data.KODE_IKU+\" \"+data.DESKRIPSI}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\">Tahun\n              <span><font color=\"red\">*</font></span>\n            </label>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\" [(ngModel)]=\"formData.yearPeriode\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\">Periode\n                <span><font color=\"red\">*</font></span>\n              </label>\n              <div class=\"col-sm-9\">\n                <select name=\"risk_level\" class=\"form-control\" [(ngModel)]=\"formData.periodeSelected\">\n                  <option *ngFor=\"let data of formData.periode\" value=\"{{data.id}}\">{{data.desc}}</option>\n                </select>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-sm-6\">\n          <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\">Threshold\n              </label>\n              <div class=\"col-sm-6\">\n                <input class=\"form-control\" [(ngModel)]=\"formData.threshold\" readonly=\"true\" disabled>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Indicator ID\n                </label>\n                <div class=\"col-sm-6\">\n                  <input class=\"form-control\" [(ngModel)]=\"formData.indicatorId\" readonly=\"true\" disabled>\n                </div>\n              </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success\" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"getData()\">Input Detail</button>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"editConfirm($event)\">\n      </ng2-smart-table>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-auto\">\n        <button type=\" button \" class=\"btn btn-success \" [disabled]=\"!formData.ikuSelected||!formData.yearPeriode||!formData.periodeSelected\"\n          (click)=\"save()\">Submit</button>\n      </div>\n\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/transaction/realisasi-strategic/realisasi.strategic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealisasiStrategicComponent; });
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







var RealisasiStrategicComponent = /** @class */ (function () {
    function RealisasiStrategicComponent(modalService, toastr, service) {
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
            sort: false,
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
                    title: "Indikator",
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
                    title: "Realisasi",
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
                    title: "Result",
                    type: "number",
                    filter: false,
                    editable: false,
                    width: "30%"
                },
                TARGET: {
                    title: "Target",
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
            bankData: [
                {
                    ID_BANK: "000",
                    INISIAL: "OJK",
                    DESCRIPTION: "Otorisasi Jasa Keuangan",
                }
            ],
            periodeSelected: "",
            ikuData: [],
            ikuSelected: "",
            yearPeriode: __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY"),
            threshold: 0,
            indicatorId: "",
            realisasiDetail: []
        };
        this.loadData();
    }
    RealisasiStrategicComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var respIku, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getreq("mst_ikus").toPromise().then(function (response) {
                            if (response != null) {
                                respIku = response;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, respIku.filter(function (item) {
                                return (item.TIPE_IKU == "STRATEGIC");
                            })];
                    case 2:
                        arr = _a.sent();
                        if (arr[0] != null) {
                            this.formData.ikuData = arr;
                        }
                        else {
                            this.toastr.error("Tidak Ditemukan IKU Qualitative Data");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RealisasiStrategicComponent.prototype.submit = function (event) {
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
    RealisasiStrategicComponent.prototype.getData = function () {
        "use strict";
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var realisasiDetail, indicatorQnData, indicatorQnDtlData, realizationQnDtlData, arr, defaultValueSettings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        realisasiDetail = [];
                        return [4 /*yield*/, this.service.getreq("trn_indicator_qns").toPromise().then(function (response) {
                                if (response != null) {
                                    indicatorQnData = response;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.service.getreq("trn_indicator_qn_dtls").toPromise().then(function (response) {
                                if (response != null) {
                                    indicatorQnDtlData = response;
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.service.getreq("trn_realization_qn_dtls").toPromise().then(function (response) {
                                if (response != null) {
                                    realizationQnDtlData = response;
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, indicatorQnData.filter(function (item) {
                                return (item.KODE_IKU == _this.formData.ikuSelected &&
                                    item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                                    item.PERIODE == _this.formData.periodeSelected);
                            })];
                    case 4:
                        arr = _a.sent();
                        if (arr[0] != null) {
                            defaultValueSettings = {
                                indikator1: "Indikator 1",
                                realisasi1: "Realisasi 1",
                            };
                            if (arr[0].INDIKATOR_1_DESC != "") {
                                defaultValueSettings.indikator1 = arr[0].INDIKATOR_1_DESC;
                                defaultValueSettings.realisasi1 = arr[0].REALISASI_1_DESC;
                            }
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
                                        title: "Result",
                                        type: "number",
                                        filter: false,
                                        editable: false,
                                        width: "30%"
                                    },
                                    TARGET: {
                                        title: "Target",
                                        type: "number",
                                        filter: false,
                                        editable: true,
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
                            this.formData.indicatorId = arr[0].KODE_INDIKATOR;
                            this.formData.threshold = arr[0].THRESHOLD;
                            this.formData.bankData.forEach(function (element) {
                                var detail = {
                                    KODE_IKU: _this.formData.ikuSelected,
                                    TAHUN_REALISASI: _this.formData.yearPeriode,
                                    PERIODE: _this.formData.periodeSelected,
                                    KODE_BANK: element.ID_BANK,
                                    NILAI_INDICATOR_1: 100,
                                    NILAI_INDICATOR_2: null,
                                    NILAI_INDICATOR_3: null,
                                    NILAI_REALISASI_1: 0,
                                    NILAI_REALISASI_2: null,
                                    NILAI_REALISASI_3: null,
                                    RESULT1: "0%",
                                    RESULT2: null,
                                    RESULT3: null,
                                    PENCAPAIAN: "0",
                                    USER_CREATED: "Admin",
                                    DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                    USER_UPDATED: "Admin",
                                    DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                                    DESC_BANK: element.DESCRIPTION,
                                    REMARK: null,
                                    TARGET: _this.formData.threshold
                                };
                                var arrIndicatorDtlData = indicatorQnDtlData.filter(function (item) {
                                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                                        item.TAHUN_INDICATOR == _this.formData.yearPeriode &&
                                        item.PERIODE == _this.formData.periodeSelected &&
                                        item.KODE_BANK == element.ID_BANK);
                                });
                                if (arrIndicatorDtlData[0] != null) {
                                    detail.NILAI_INDICATOR_1 = arrIndicatorDtlData[0].NILAI_INDICATOR_1;
                                }
                                var arrRealizationDtlData = realizationQnDtlData.filter(function (item) {
                                    return (item.KODE_IKU == _this.formData.ikuSelected &&
                                        item.TAHUN_REALISASI == _this.formData.yearPeriode &&
                                        item.PERIODE == _this.formData.periodeSelected &&
                                        item.KODE_BANK == element.ID_BANK);
                                });
                                if (arrRealizationDtlData[0] != null) {
                                    detail.NILAI_REALISASI_1 = arrRealizationDtlData[0].NILAI_REALISASI_1;
                                    detail.NILAI_REALISASI_2 = arrRealizationDtlData[0].NILAI_REALISASI_2;
                                    detail.NILAI_REALISASI_3 = arrRealizationDtlData[0].NILAI_REALISASI_3;
                                    detail.PENCAPAIAN = arrRealizationDtlData[0].PENCAPAIAN;
                                    if (arrRealizationDtlData[0].TARGET != null) {
                                        detail.TARGET = arrRealizationDtlData[0].TARGET;
                                    }
                                    if (arrRealizationDtlData[0].REMARK != null) {
                                        detail.REMARK = arrRealizationDtlData[0].REMARK;
                                    }
                                }
                                detail.RESULT1 = ((detail.NILAI_REALISASI_1 / detail.NILAI_INDICATOR_1) * 100).toFixed(2) + "%";
                                detail.RESULT2 = ((detail.NILAI_REALISASI_2 / detail.NILAI_INDICATOR_2) * 100).toFixed(2) + "%";
                                detail.RESULT3 = ((detail.NILAI_REALISASI_3 / detail.NILAI_INDICATOR_3) * 100).toFixed(2) + "%";
                                if (detail.RESULT1 === "NaN%" || detail.RESULT1 === "Infinity%") {
                                    detail.RESULT1 = "0%";
                                }
                                ;
                                if (detail.RESULT2 === "NaN%" || detail.RESULT2 === "Infinity%") {
                                    detail.RESULT2 = "0%";
                                }
                                ;
                                if (detail.RESULT3 === "NaN%" || detail.RESULT3 === "Infinity%") {
                                    detail.RESULT3 = "0%";
                                }
                                ;
                                realisasiDetail.push(detail);
                            });
                            realisasiDetail = realisasiDetail.sort(function (a, b) { return a.KODE_BANK - b.KODE_BANK; });
                            this.tabledata = realisasiDetail;
                            this.formData.realisasiDetail = realisasiDetail;
                            this.source.load(this.formData.realisasiDetail);
                            this.source.refresh();
                            console.log(this.tabledata);
                            this.toastr.success("Get Data Sucess!");
                        }
                        else {
                            this.tabledata = [];
                            this.formData.realisasiDetail = this.tabledata;
                            this.source.load(this.formData.realisasiDetail);
                            this.source.refresh();
                            this.toastr.error("Data Indikator Belum di isi!");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RealisasiStrategicComponent.prototype.save = function () {
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
        }, function (error) {
            console.log("indicator header");
            console.log(error);
        });
        this.formData.realisasiDetail.forEach(function (element, ind) {
            console.log(element);
            var headerdtl = {
                KODE_IKU: element.KODE_IKU,
                TAHUN_REALISASI: element.TAHUN_REALISASI,
                PERIODE: element.PERIODE,
                KODE_BANK: element.KODE_BANK,
                NILAI_REALISASI_1: element.NILAI_REALISASI_1,
                NILAI_REALISASI_2: null,
                NILAI_REALISASI_3: null,
                PENCAPAIAN: element.PENCAPAIAN.toString(),
                USER_CREATED: "admin",
                DATETIME_CREATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                USER_UPDATED: "admin",
                DATETIME_UPDATED: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                REMARK: null,
                TARGET: element.TARGET
            };
            if (element.NILAI_REALISASI_2 == 0) {
                headerdtl.NILAI_REALISASI_2 = element.NILAI_REALISASI_1;
            }
            if (element.NILAI_REALISASI_3 == 0) {
                headerdtl.NILAI_REALISASI_3 = element.NILAI_REALISASI_1;
            }
            _this.service.postreq("trn_realization_qn_dtls/crud", headerdtl).subscribe(function (response) {
                console.log(response);
            }, function (error) {
                console.log("indicator detail");
                console.log(error);
            });
        });
        this.toastr.success("Data Saved!");
    };
    RealisasiStrategicComponent.prototype.editConfirm = function (event) {
        event.newData.RESULT1 =
            ((event.newData.NILAI_REALISASI_1 / event.newData.NILAI_INDICATOR_1) *
                100).toFixed(2) + "%";
        event.newData.RESULT2 =
            ((event.newData.NILAI_REALISASI_2 / event.newData.NILAI_INDICATOR_2) *
                100).toFixed(2) + "%";
        event.newData.RESULT3 =
            ((event.newData.NILAI_REALISASI_3 / event.newData.NILAI_INDICATOR_3) *
                100).toFixed(2) + "%";
        if (event.data.TARGET == event.newData.TARGET) {
            console.log("data sama coy");
            if (parseInt(event.newData.RESULT1) >= event.data.TARGET) {
                event.newData.PENCAPAIAN = "1";
            }
            else {
                event.newData.PENCAPAIAN = "0";
            }
            event.confirm.resolve(event.newData);
        }
        else {
            console.log("data enggak sama");
            if (parseInt(event.newData.RESULT1) >= event.newData.TARGET) {
                event.newData.PENCAPAIAN = "1";
            }
            else {
                event.newData.PENCAPAIAN = "0";
            }
            if (event.newData.RESULT1 == "NaN%") {
                event.newData.RESULT1 = "0%";
            }
            if (event.newData.RESULT2 == "NaN%") {
                event.newData.RESULT2 = "0%";
            }
            if (event.newData.RESULT3 == "NaN%") {
                event.newData.RESULT3 = "0%";
            }
            event.confirm.resolve(event.newData);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"])
    ], RealisasiStrategicComponent.prototype, "myForm", void 0);
    RealisasiStrategicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ngx-realisasi-strategic",
            template: __webpack_require__("./src/app/pages/transaction/realisasi-strategic/realisasi.strategic.component.html"),
            styles: [
                "\n      input:disabled {\n        background-color: rgba(211, 211, 211, 0.6);\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__core_data_backend_service__["a" /* BackendService */]])
    ], RealisasiStrategicComponent);
    return RealisasiStrategicComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__realisasi_qualitative_button_realisasi_quantitative_component__ = __webpack_require__("./src/app/pages/transaction/realisasi-qualitative/button.realisasi.quantitative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__moka_realisasi_button_moka_realisasi_component__ = __webpack_require__("./src/app/pages/transaction/moka-realisasi/button.moka.realisasi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__moka_target_modal_moka_target_modal_component__ = __webpack_require__("./src/app/pages/transaction/moka-target/modal/moka.target.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__realisasi_qualitative_modal_realisasi_qualitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/realisasi-qualitative/modal/realisasi.qualitative.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__indicator_strategic_modal_indicator_strategic_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-strategic/modal/indicator.strategic.modal.component.ts");
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
            declarations: __WEBPACK_IMPORTED_MODULE_2__transaction_router_module__["b" /* routedComponents */].concat([__WEBPACK_IMPORTED_MODULE_9__realisasi_qualitative_button_realisasi_quantitative_component__["a" /* ButtonRenderComponent */], __WEBPACK_IMPORTED_MODULE_10__moka_realisasi_button_moka_realisasi_component__["a" /* MokaRealisasiDatePicker */]]),
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__moka_target_modal_moka_target_modal_component__["a" /* MokaTargetModalComponent */],
                __WEBPACK_IMPORTED_MODULE_12__realisasi_qualitative_modal_realisasi_qualitative_modal_component__["a" /* RealisasiQualitativeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__indicator_quantitative_modal_indicator_quantitative_modal_component__["a" /* IndicatorQuantitativeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__indicator_qualitative_modal_indicator_qualitative_modal_component__["a" /* IndicatorQualitativeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__realisasi_qualitative_button_realisasi_quantitative_component__["a" /* ButtonRenderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__moka_realisasi_button_moka_realisasi_component__["a" /* MokaRealisasiDatePicker */],
                __WEBPACK_IMPORTED_MODULE_13__indicator_strategic_modal_indicator_strategic_modal_component__["a" /* IndicatorStrategicModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__core_data_backend_service__["a" /* BackendService */],
            ]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__moka_target_moka_target_component__ = __webpack_require__("./src/app/pages/transaction/moka-target/moka.target.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__moka_target_modal_moka_target_modal_component__ = __webpack_require__("./src/app/pages/transaction/moka-target/modal/moka.target.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__moka_realisasi_moka_realisasi_component__ = __webpack_require__("./src/app/pages/transaction/moka-realisasi/moka.realisasi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__realisasi_qualitative_modal_realisasi_qualitative_modal_component__ = __webpack_require__("./src/app/pages/transaction/realisasi-qualitative/modal/realisasi.qualitative.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__indicator_strategic_indicator_strategic_component__ = __webpack_require__("./src/app/pages/transaction/indicator-strategic/indicator.strategic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__realisasi_strategic_realisasi_strategic_component__ = __webpack_require__("./src/app/pages/transaction/realisasi-strategic/realisasi.strategic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__indicator_strategic_modal_indicator_strategic_modal_component__ = __webpack_require__("./src/app/pages/transaction/indicator-strategic/modal/indicator.strategic.modal.component.ts");
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
            },
            {
                path: "indicator-strategic",
                component: __WEBPACK_IMPORTED_MODULE_13__indicator_strategic_indicator_strategic_component__["a" /* IndicatorStrategicComponent */]
            },
            {
                path: "realisasi-strategic",
                component: __WEBPACK_IMPORTED_MODULE_14__realisasi_strategic_realisasi_strategic_component__["a" /* RealisasiStrategicComponent */]
            },
            {
                path: "moka-target",
                component: __WEBPACK_IMPORTED_MODULE_9__moka_target_moka_target_component__["a" /* MokaTargetComponent */]
            },
            {
                path: "moka-realisasi",
                component: __WEBPACK_IMPORTED_MODULE_11__moka_realisasi_moka_realisasi_component__["a" /* MokaRealisasiComponent */]
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
    __WEBPACK_IMPORTED_MODULE_2__transaction_component__["a" /* TransactionComponent */],
    __WEBPACK_IMPORTED_MODULE_9__moka_target_moka_target_component__["a" /* MokaTargetComponent */],
    __WEBPACK_IMPORTED_MODULE_10__moka_target_modal_moka_target_modal_component__["a" /* MokaTargetModalComponent */],
    __WEBPACK_IMPORTED_MODULE_11__moka_realisasi_moka_realisasi_component__["a" /* MokaRealisasiComponent */],
    __WEBPACK_IMPORTED_MODULE_12__realisasi_qualitative_modal_realisasi_qualitative_modal_component__["a" /* RealisasiQualitativeModalComponent */],
    __WEBPACK_IMPORTED_MODULE_13__indicator_strategic_indicator_strategic_component__["a" /* IndicatorStrategicComponent */],
    __WEBPACK_IMPORTED_MODULE_15__indicator_strategic_modal_indicator_strategic_modal_component__["a" /* IndicatorStrategicModalComponent */],
    __WEBPACK_IMPORTED_MODULE_14__realisasi_strategic_realisasi_strategic_component__["a" /* RealisasiStrategicComponent */]
];


/***/ })

});
//# sourceMappingURL=transaction.module.chunk.js.map