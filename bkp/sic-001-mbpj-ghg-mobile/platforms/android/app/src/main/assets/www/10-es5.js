(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var _index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-26ec602c.js */ "./node_modules/@ionic/core/dist/esm-es5/index-26ec602c.js");
/* harmony import */ var _ionic_global_1bf1fa84_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-1bf1fa84.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-1bf1fa84.js");
/* harmony import */ var _index_6f647ec8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-6f647ec8.js */ "./node_modules/@ionic/core/dist/esm-es5/index-6f647ec8.js");



var backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var Backdrop = /** @class */ (function () {
    function Backdrop(hostRef) {
        Object(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.blocker = _index_6f647ec8_js__WEBPACK_IMPORTED_MODULE_2__["GESTURE_CONTROLLER"].createBlocker({
            disableScroll: true
        });
        /**
         * If `true`, the backdrop will be visible.
         */
        this.visible = true;
        /**
         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdrop will stop propagation on tap.
         */
        this.stopPropagation = true;
        this.ionBackdropTap = Object(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBackdropTap", 7);
    }
    Backdrop.prototype.connectedCallback = function () {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    };
    Backdrop.prototype.disconnectedCallback = function () {
        this.blocker.unblock();
    };
    Backdrop.prototype.onMouseDown = function (ev) {
        this.emitTap(ev);
    };
    Backdrop.prototype.emitTap = function (ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    };
    Backdrop.prototype.render = function () {
        var _a;
        var mode = Object(_ionic_global_1bf1fa84_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        return (Object(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { tabindex: "-1", class: (_a = {},
                _a[mode] = true,
                _a['backdrop-hide'] = !this.visible,
                _a['backdrop-no-tappable'] = !this.tappable,
                _a) }));
    };
    return Backdrop;
}());
Backdrop.style = {
    /*STENCIL:MODE:ios*/ ios: backdropIosCss,
    /*STENCIL:MODE:md*/ md: backdropMdCss
};



/***/ })

}]);
//# sourceMappingURL=10-es5.js.map