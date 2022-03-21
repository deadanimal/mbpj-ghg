(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js ***!
  \**************************************************************************/
/*! exports provided: LoadingBarModule, LoadingBarComponent, LoadingBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarModule", function() { return LoadingBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarComponent", function() { return LoadingBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarService", function() { return LoadingBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingBarService = /** @class */ (function () {
    function LoadingBarService(platformId) {
        this.platformId = platformId;
        this.progress$ = (/** @type {?} */ ((new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(0))));
        this._pendingRequests = 0;
        this._value = 0;
    }
    /**
     * @param {?=} initialValue
     * @return {?}
     */
    LoadingBarService.prototype.start = /**
     * @param {?=} initialValue
     * @return {?}
     */
    function (initialValue) {
        if (initialValue === void 0) { initialValue = 2; }
        ++this._pendingRequests;
        if (this._value === 0 || this._pendingRequests === 1) {
            // Inserts the loading bar element into the dom, and sets it to 2%
            this.set(this._pendingRequests === 1 && this._value > 0 ? this._value : initialValue);
        }
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.complete();
        while (this._pendingRequests > 0) {
            this.complete();
        }
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.complete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._pendingRequests === 0 && this._value === 0) {
            return;
        }
        if (this._pendingRequests > 0) {
            --this._pendingRequests;
        }
        if (this._pendingRequests === 0 || (this._pendingRequests === 0 && this._value > 0)) {
            if (this._value !== 100) {
                this.set(100);
            }
            // Attempt to aggregate any start/complete calls within 500ms:
            setTimeout(function () { return _this.set(0); }, 500);
        }
    };
    /**
     * Set the loading bar's width to a certain percent.
     *
     * @param n any value between 0 and 100
     */
    /**
     * Set the loading bar's width to a certain percent.
     *
     * @param {?} n any value between 0 and 100
     * @return {?}
     */
    LoadingBarService.prototype.set = /**
     * Set the loading bar's width to a certain percent.
     *
     * @param {?} n any value between 0 and 100
     * @return {?}
     */
    function (n) {
        var _this = this;
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this._pendingRequests = 0;
            return;
        }
        if (n === 0 && this._pendingRequests > 0) {
            n = 2;
        }
        this._value = n;
        this.progress$.next(n);
        if (this._pendingRequests === 0) {
            return;
        }
        // increment loadingbar to give the illusion that there is always
        // progress but make sure to cancel the previous timeouts so we don't
        // have multiple incs running at the same time.
        clearTimeout(this._incTimeout);
        if (this._value > 0 && this._value < 100) {
            this._incTimeout = setTimeout(function () { return _this.increment(); }, 250);
        }
    };
    /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     */
    /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     * @param {?=} rnd
     * @return {?}
     */
    LoadingBarService.prototype.increment = /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     * @param {?=} rnd
     * @return {?}
     */
    function (rnd) {
        if (rnd === void 0) { rnd = 0; }
        if (rnd > 0) {
            this.set(this._value + rnd);
        }
        /** @type {?} */
        var stat = this._value;
        if (stat >= 0 && stat < 25) {
            // Start out between 3 - 6% increments
            rnd = (Math.random() * (5 - 3 + 1) + 3);
        }
        else if (stat >= 25 && stat < 65) {
            // increment between 0 - 3%
            rnd = (Math.random() * 3);
        }
        else if (stat >= 65 && stat < 90) {
            // increment between 0 - 2%
            rnd = (Math.random() * 2);
        }
        else if (stat >= 90 && stat < 99) {
            // finally, increment it .5 %
            rnd = 0.5;
        }
        else {
            // after 99%, don't increment:
            rnd = 0;
        }
        this.set(this._value + rnd);
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.progress$.complete();
    };
    LoadingBarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LoadingBarService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    /** @nocollapse */ LoadingBarService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function LoadingBarService_Factory() { return new LoadingBarService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); }, token: LoadingBarService, providedIn: "root" });
    return LoadingBarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingBarComponent = /** @class */ (function () {
    function LoadingBarComponent(loader) {
        this.loader = loader;
        this.includeSpinner = true;
        this.includeBar = true;
        this.fixed = true;
        this.value = null;
    }
    LoadingBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-loading-bar',
                    template: "\n    <ng-container *ngIf=\"(value !== null ? value : loader.progress$|async) as progress\">\n      <div id=\"loading-bar-spinner\" *ngIf=\"includeSpinner\" [style.color]=\"color\">\n        <div [style.width]=\"diameter\" [style.height]=\"diameter\" class=\"spinner-icon\"></div>\n      </div>\n      <div id=\"loading-bar\" *ngIf=\"includeBar\" [style.color]=\"color\">\n        <div class=\"bar\" [style.background]=\"color\" [style.height]=\"height\" [style.width]=\"progress + '%'\">\n          <div class=\"peg\" [style.height]=\"height\"></div>\n        </div>\n      </div>\n    </ng-container>\n  ",
                    preserveWhitespaces: false,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
                    host: {
                        '[class.loading-bar-fixed]': 'fixed',
                    },
                    styles: [":host{position:relative;display:block}:host.loading-bar-fixed>div .bar{position:fixed}:host.loading-bar-fixed>div#loading-bar-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host.loading-bar-fixed>div#loading-bar-spinner{right:10px;left:unset}:host.loading-bar-fixed>div .peg{display:block}:host>div{pointer-events:none;transition:350ms linear;color:#29d}:host>div .bar{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host>div .bar{right:0;left:unset}:host>div .peg{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}:host>div#loading-bar-spinner{display:block;position:absolute;z-index:10002;top:5px;left:0}:host>div#loading-bar-spinner .spinner-icon{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    LoadingBarComponent.ctorParameters = function () { return [
        { type: LoadingBarService }
    ]; };
    LoadingBarComponent.propDecorators = {
        includeSpinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        includeBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return LoadingBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingBarModule = /** @class */ (function () {
    function LoadingBarModule() {
    }
    LoadingBarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [LoadingBarComponent],
                    exports: [LoadingBarComponent],
                },] }
    ];
    return LoadingBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-loading-bar-core.js.map

/***/ })

}]);
//# sourceMappingURL=common.js.map