(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-applicant-applicant-module"],{

/***/ "./node_modules/@angular/cdk/esm2015/bidi.js":
/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/bidi.js ***!
  \***************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
class Directionality {
    /**
     * @param {?=} _document
     */
    constructor(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            const bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            const value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Directionality.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
Directionality.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
];
/** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
class Dir {
    constructor() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get dir() { return this._dir; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dir(value) {
        /** @type {?} */
        const old = this._dir;
        /** @type {?} */
        const normalizedValue = value ? value.toLowerCase() : value;
        this._rawDir = value;
        this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
        if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
        }
    }
    /**
     * Current layout direction of the element.
     * @return {?}
     */
    get value() { return this.dir; }
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Dir.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[dir]',
                providers: [{ provide: Directionality, useExisting: Dir }],
                host: { '[attr.dir]': '_rawDir' },
                exportAs: 'dir',
            },] },
];
Dir.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BidiModule {
}
BidiModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                exports: [Dir],
                declarations: [Dir],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/cdk.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/cdk.js ***!
  \**************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of the Angular Component Development Kit.
 * @type {?}
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=cdk.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/stepper.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/stepper.js ***!
  \******************************************************/
/*! exports provided: StepperSelectionEvent, STEP_STATE, STEPPER_GLOBAL_OPTIONS, MAT_STEPPER_GLOBAL_OPTIONS, CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, CdkStepperModule, CdkStepHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function() { return StepperSelectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_STATE", function() { return STEP_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function() { return STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function() { return MAT_STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStep", function() { return CdkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepper", function() { return CdkStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function() { return CdkStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function() { return CdkStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function() { return CdkStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function() { return CdkStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function() { return CdkStepHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkStepHeader {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /**
     * Focuses the step header.
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
CdkStepHeader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdkStepHeader]',
                host: {
                    'role': 'tab',
                },
            },] },
];
/** @nocollapse */
CdkStepHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkStepLabel {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkStepLabel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdkStepLabel]',
            },] },
];
/** @nocollapse */
CdkStepLabel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each stepper component.
 * @type {?}
 */
let nextId = 0;
/**
 * Change event emitted on selection changes.
 */
class StepperSelectionEvent {
}
/**
 * Enum to represent the different states of the steps.
 * @type {?}
 */
const STEP_STATE = {
    NUMBER: 'number',
    EDIT: 'edit',
    DONE: 'done',
    ERROR: 'error'
};
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @type {?}
 */
const STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
 * \@breaking-change 8.0.0.
 * @type {?}
 */
const MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
class CdkStep {
    /**
     * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
     * @param {?} _stepper
     * @param {?=} stepperOptions
     */
    constructor(_stepper, stepperOptions) {
        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */
        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
    }
    /**
     * Whether the user can return to this step once it has been marked as completed.
     * @return {?}
     */
    get editable() {
        return this._editable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set editable(value) {
        this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the completion of step is optional.
     * @return {?}
     */
    get optional() {
        return this._optional;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optional(value) {
        this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether step is marked as completed.
     * @return {?}
     */
    get completed() {
        return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set completed(value) {
        this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * @private
     * @return {?}
     */
    _getDefaultCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /**
     * Whether step has an error.
     * @return {?}
     */
    get hasError() {
        return this._customError == null ? this._getDefaultError() : this._customError;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasError(value) {
        this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * @private
     * @return {?}
     */
    _getDefaultError() {
        return this.stepControl && this.stepControl.invalid && this.interacted;
    }
    /**
     * Selects this step component.
     * @return {?}
     */
    select() {
        this._stepper.selected = this;
    }
    /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    reset() {
        this.interacted = false;
        if (this._completedOverride != null) {
            this._completedOverride = false;
        }
        if (this._customError != null) {
            this._customError = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    }
}
CdkStep.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-step',
                exportAs: 'cdkStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
CdkStep.ctorParameters = () => [
    { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                     * @return {?}
                     */
                    () => CdkStepper)),] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STEPPER_GLOBAL_OPTIONS,] }] }
];
CdkStep.propDecorators = {
    stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkStepLabel, { static: false },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }],
    stepControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hasError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
class CdkStepper {
    /**
     * @param {?} _dir
     * @param {?} _changeDetectorRef
     * @param {?=} _elementRef
     * @param {?=} _document
     */
    constructor(_dir, _changeDetectorRef, _elementRef, _document) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
    }
    /**
     * The list of step components that the stepper is holding.
     * @return {?}
     */
    get steps() {
        return this._steps;
    }
    /**
     * Whether the validity of previous steps should be checked or not.
     * @return {?}
     */
    get linear() {
        return this._linear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set linear(value) {
        this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * The index of the selected step.
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set selectedIndex(index) {
        /** @type {?} */
        const newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(index);
        if (this.steps) {
            // Ensure that the index can't be out of bounds.
            if (newIndex < 0 || newIndex > this.steps.length - 1) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }
            if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) &&
                (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
            }
        }
        else {
            this._selectedIndex = newIndex;
        }
    }
    /**
     * The step that is selected.
     * @return {?}
     */
    get selected() {
        // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
        return this.steps ? this.steps.toArray()[this.selectedIndex] : (/** @type {?} */ (undefined));
    }
    /**
     * @param {?} step
     * @return {?}
     */
    set selected(step) {
        this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view chidren. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this._stepHeader)
            .withWrap()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? ((/** @type {?} */ (this._dir.change))) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        direction => this._keyManager.withHorizontalOrientation(direction)));
        this._keyManager.updateActiveItemIndex(this._selectedIndex);
        this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            if (!this.selected) {
                this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    next() {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    }
    /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    previous() {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    }
    /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    reset() {
        this._updateSelectedItemIndex(0);
        this.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        step => step.reset()));
        this._stateChanged();
    }
    /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    _getStepLabelId(i) {
        return `cdk-step-label-${this._groupId}-${i}`;
    }
    /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    _getStepContentId(i) {
        return `cdk-step-content-${this._groupId}-${i}`;
    }
    /**
     * Marks the component to be change detected.
     * @return {?}
     */
    _stateChanged() {
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    _getAnimationDirection(index) {
        /** @type {?} */
        const position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    }
    /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @param {?=} state
     * @return {?}
     */
    _getIndicatorType(index, state = STEP_STATE.NUMBER) {
        /** @type {?} */
        const step = this.steps.toArray()[index];
        /** @type {?} */
        const isCurrentStep = this._isCurrentStep(index);
        return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) :
            this._getGuidelineLogic(step, isCurrentStep, state);
    }
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @return {?}
     */
    _getDefaultIndicatorLogic(step, isCurrentStep) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
        }
        else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
    }
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @param {?=} state
     * @return {?}
     */
    _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
        }
        else if (step.completed && isCurrentStep) {
            return state;
        }
        else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
        }
        else {
            return state;
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _isCurrentStep(index) {
        return this._selectedIndex === index;
    }
    /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    _getFocusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    }
    /**
     * @private
     * @param {?} newIndex
     * @return {?}
     */
    _updateSelectedItemIndex(newIndex) {
        /** @type {?} */
        const stepsArray = this.steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.
        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
            this._keyManager.updateActiveItemIndex(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onKeydown(event) {
        /** @type {?} */
        const hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event);
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const manager = this._keyManager;
        if (manager.activeItemIndex != null && !hasModifier &&
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]) {
            manager.setFirstItemActive();
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]) {
            manager.setLastItemActive();
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _anyControlsInvalidOrPending(index) {
        /** @type {?} */
        const steps = this.steps.toArray();
        steps[this._selectedIndex].interacted = true;
        if (this._linear && index >= 0) {
            return steps.slice(0, index).some((/**
             * @param {?} step
             * @return {?}
             */
            step => {
                /** @type {?} */
                const control = step.stepControl;
                /** @type {?} */
                const isIncomplete = control ? (control.invalid || control.pending || !step.interacted) : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
            }));
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    _layoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * Checks whether the stepper contains the focused element.
     * @private
     * @return {?}
     */
    _containsFocus() {
        if (!this._document || !this._elementRef) {
            return false;
        }
        /** @type {?} */
        const stepperElement = this._elementRef.nativeElement;
        /** @type {?} */
        const focusedElement = this._document.activeElement;
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    }
}
CdkStepper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdkStepper]',
                exportAs: 'cdkStepper',
            },] },
];
/** @nocollapse */
CdkStepper.ctorParameters = () => [
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
CdkStepper.propDecorators = {
    _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStep,] }],
    _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStepHeader,] }],
    linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
class CdkStepperNext {
    /**
     * @param {?} _stepper
     */
    constructor(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */
        this.type = 'submit';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    _handleClick() {
        this._stepper.next();
    }
}
CdkStepperNext.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type',
                }
            },] },
];
/** @nocollapse */
CdkStepperNext.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperNext.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
/**
 * Button that moves to the previous step in a stepper workflow.
 */
class CdkStepperPrevious {
    /**
     * @param {?} _stepper
     */
    constructor(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */
        this.type = 'button';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    _handleClick() {
        this._stepper.previous();
    }
}
CdkStepperPrevious.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type',
                }
            },] },
];
/** @nocollapse */
CdkStepperPrevious.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperPrevious.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkStepperModule {
}
CdkStepperModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ],
                declarations: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=stepper.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/button.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/button.js ***!
  \**********************************************************/
/*! exports provided: MatButtonModule, MatButton, MatAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function() { return MatButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButton", function() { return MatButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAnchor", function() { return MatAnchor; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default color palette for round buttons (mat-fab and mat-mini-fab)
 * @type {?}
 */
const DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 * @type {?}
 */
const BUTTON_HOST_ATTRIBUTES = [
    'mat-button',
    'mat-flat-button',
    'mat-icon-button',
    'mat-raised-button',
    'mat-stroked-button',
    'mat-mini-fab',
    'mat-fab',
];
// Boilerplate for applying mixins to MatButton.
/**
 * \@docs-private
 */
class MatButtonBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/** @type {?} */
const _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatButtonBase)));
/**
 * Material design button.
 */
class MatButton extends _MatButtonMixinBase {
    /**
     * @param {?} elementRef
     * @param {?} _focusMonitor
     * @param {?} _animationMode
     */
    constructor(elementRef, _focusMonitor, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._animationMode = _animationMode;
        /**
         * Whether the button is round.
         */
        this.isRoundButton = this._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /**
         * Whether the button is icon button.
         */
        this.isIconButton = this._hasHostAttributes('mat-icon-button');
        // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                ((/** @type {?} */ (this._getHostElement()))).classList.add(attr);
            }
        }
        // Add a class that applies to all buttons. This makes it easier to target if somebody
        // wants to target all Material buttons. We do it here rather than `host` to ensure that
        // the class is applied to derived classes.
        elementRef.nativeElement.classList.add('mat-button-base');
        this._focusMonitor.monitor(this._elementRef, true);
        if (this.isRoundButton) {
            this.color = DEFAULT_ROUND_BUTTON_COLOR;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Focuses the button.
     * @param {?=} origin
     * @param {?=} options
     * @return {?}
     */
    focus(origin = 'program', options) {
        this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    }
    /**
     * @return {?}
     */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /**
     * Gets whether the button has one of the given attributes.
     * @param {...?} attributes
     * @return {?}
     */
    _hasHostAttributes(...attributes) {
        return attributes.some((/**
         * @param {?} attribute
         * @return {?}
         */
        attribute => this._getHostElement().hasAttribute(attribute)));
    }
}
MatButton.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: `button[mat-button], button[mat-raised-button], button[mat-icon-button],
             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],
             button[mat-flat-button]`,
                exportAs: 'matButton',
                host: {
                    '[attr.disabled]': 'disabled || null',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                },
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                inputs: ['disabled', 'disableRipple', 'color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"],] }] }
];
MatButton.propDecorators = {
    ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], { static: false },] }]
};
/**
 * Material design anchor button.
 */
class MatAnchor extends MatButton {
    /**
     * @param {?} focusMonitor
     * @param {?} elementRef
     * @param {?} animationMode
     */
    constructor(focusMonitor, elementRef, animationMode) {
        super(elementRef, focusMonitor, animationMode);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _haltDisabledEvents(event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
MatAnchor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: `a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],
             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]`,
                exportAs: 'matButton, matAnchor',
                host: {
                    // Note that we ignore the user-specified tabindex when it's disabled for
                    // consistency with the `mat-button` applied on native buttons where even
                    // though they have an index, they're not tabbable.
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '(click)': '_haltDisabledEvents($event)',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                },
                inputs: ['disabled', 'disableRipple', 'color'],
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatAnchor.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"],] }] }
];
MatAnchor.propDecorators = {
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatButtonModule {
}
MatButtonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                ],
                exports: [
                    MatButton,
                    MatAnchor,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                ],
                declarations: [
                    MatButton,
                    MatAnchor,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=button.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/core.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/core.js ***!
  \********************************************************/
/*! exports provided: VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return AnimationDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return MatCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return MATERIAL_SANITY_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return mixinDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return mixinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return mixinDisableRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return mixinTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return mixinErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return mixinInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return NativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return MatNativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return MAT_DATE_LOCALE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return MAT_DATE_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function() { return MAT_DATE_LOCALE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return MAT_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return NativeDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return MAT_NATIVE_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return ShowOnDirtyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return ErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function() { return MAT_HAMMER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureConfig", function() { return GestureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLines", function() { return setLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return MatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineSetter", function() { return MatLineSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return MatLineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return MatOptionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _countGroupLabelsBeforeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _getOptionScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return MatOptionSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return MAT_OPTION_PARENT_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return MatOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return MatOptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function() { return MAT_LABEL_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return MatRippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return MAT_RIPPLE_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return MatRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleState", function() { return RippleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return RippleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return defaultRippleAnimationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return RippleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return MatPseudoCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return MatPseudoCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JAN", function() { return JAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEB", function() { return FEB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAR", function() { return MAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APR", function() { return APR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAY", function() { return MAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUN", function() { return JUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUL", function() { return JUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUG", function() { return AUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEP", function() { return SEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCT", function() { return OCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOV", function() { return NOV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEC", function() { return DEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa1", function() { return MATERIAL_SANITY_CHECKS_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk */ "./node_modules/@angular/cdk/esm2015/cdk.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of Angular Material.
 * @type {?}
 */
const VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 */
class AnimationCurves {
}
AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/**
 * \@docs-private
 */
class AnimationDurations {
}
AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points
/** @type {?} */
const VERSION$2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
/**
 * \@docs-private
 * @return {?}
 */
function MATERIAL_SANITY_CHECKS_FACTORY() {
    return true;
}
/**
 * Injection token that configures whether the Material sanity checks are enabled.
 * @type {?}
 */
const MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
    providedIn: 'root',
    factory: MATERIAL_SANITY_CHECKS_FACTORY,
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */
class MatCommonModule {
    /**
     * @param {?} _sanityChecksEnabled
     * @param {?=} _hammerLoader
     */
    constructor(_sanityChecksEnabled, _hammerLoader) {
        this._sanityChecksEnabled = _sanityChecksEnabled;
        this._hammerLoader = _hammerLoader;
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        /**
         * Whether we've already checked for HammerJs availability.
         */
        this._hasCheckedHammer = false;
        /**
         * Reference to the global `document` object.
         */
        this._document = typeof document === 'object' && document ? document : null;
        /**
         * Reference to the global 'window' object.
         */
        this._window = typeof window === 'object' && window ? window : null;
        if (this._areChecksEnabled() && !this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();
            this._checkThemeIsPresent();
            this._checkCdkVersionMatch();
            this._hasDoneGlobalChecks = true;
        }
    }
    /**
     * Whether any sanity checks are enabled
     * @private
     * @return {?}
     */
    _areChecksEnabled() {
        return this._sanityChecksEnabled && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
    }
    /**
     * Whether the code is running in tests.
     * @private
     * @return {?}
     */
    _isTestEnv() {
        /** @type {?} */
        const window = (/** @type {?} */ (this._window));
        return window && (window.__karma__ || window.jasmine);
    }
    /**
     * @private
     * @return {?}
     */
    _checkDoctypeIsDefined() {
        if (this._document && !this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _checkThemeIsPresent() {
        // We need to assert that the `body` is defined, because these checks run very early
        // and the `body` won't be defined if the consumer put their scripts in the `head`.
        if (!this._document || !this._document.body || typeof getComputedStyle !== 'function') {
            return;
        }
        /** @type {?} */
        const testElement = this._document.createElement('div');
        testElement.classList.add('mat-theme-loaded-marker');
        this._document.body.appendChild(testElement);
        /** @type {?} */
        const computedStyle = getComputedStyle(testElement);
        // In some situations the computed style of the test element can be null. For example in
        // Firefox, the computed style is null if an application is running inside of a hidden iframe.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' +
                'components may not work as expected. For more info refer ' +
                'to the theming guide: https://material.angular.io/guide/theming');
        }
        this._document.body.removeChild(testElement);
    }
    /**
     * Checks whether the material version matches the cdk version
     * @private
     * @return {?}
     */
    _checkCdkVersionMatch() {
        if (VERSION$2.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
            console.warn('The Angular Material version (' + VERSION$2.full + ') does not match ' +
                'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' +
                'Please ensure the versions of these two packages exactly match.');
        }
    }
    /**
     * Checks whether HammerJS is available.
     * @return {?}
     */
    _checkHammerIsAvailable() {
        if (this._hasCheckedHammer || !this._window) {
            return;
        }
        if (this._areChecksEnabled() && !((/** @type {?} */ (this._window)))['Hammer'] && !this._hammerLoader) {
            console.warn('Could not find HammerJS. Certain Angular Material components may not work correctly.');
        }
        this._hasCheckedHammer = true;
    }
}
MatCommonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
                exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            },] },
];
/** @nocollapse */
MatCommonModule.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MATERIAL_SANITY_CHECKS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disabled = false;
        }
        /**
         * @return {?}
         */
        get disabled() { return this._disabled; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `color` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultColor
 * @return {?}
 */
function mixinColor(base, defaultColor) {
    return class extends base {
        /**
         * @return {?}
         */
        get color() { return this._color; }
        /**
         * @param {?} value
         * @return {?}
         */
        set color(value) {
            /** @type {?} */
            const colorPalette = value || defaultColor;
            if (colorPalette !== this._color) {
                if (this._color) {
                    this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
                }
                if (colorPalette) {
                    this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
                }
                this._color = colorPalette;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            // Set the default color that can be specified from the mixin.
            this.color = defaultColor;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `disableRipple` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disableRipple = false;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */
        get disableRipple() { return this._disableRipple; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `tabIndex` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultTabIndex
 * @return {?}
 */
function mixinTabIndex(base, defaultTabIndex = 0) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._tabIndex = defaultTabIndex;
        }
        /**
         * @return {?}
         */
        get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
        /**
         * @param {?} value
         * @return {?}
         */
        set tabIndex(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? value : defaultTabIndex;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinErrorState(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            /**
             * Whether the component is in an error state.
             */
            this.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */
            this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }
        /**
         * @return {?}
         */
        updateErrorState() {
            /** @type {?} */
            const oldState = this.errorState;
            /** @type {?} */
            const parent = this._parentFormGroup || this._parentForm;
            /** @type {?} */
            const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            /** @type {?} */
            const control = this.ngControl ? (/** @type {?} */ (this.ngControl.control)) : null;
            /** @type {?} */
            const newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinInitialized(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            /**
             * Whether this directive has been marked as initialized.
             */
            this._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */
            this._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */
            this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((/**
             * @param {?} subscriber
             * @return {?}
             */
            subscriber => {
                // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
                // when _markInitialized is called.
                if (this._isInitialized) {
                    this._notifySubscriber(subscriber);
                }
                else {
                    (/** @type {?} */ (this._pendingSubscribers)).push(subscriber);
                }
            }));
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */
        _markInitialized() {
            if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' +
                    'should not be called twice.');
            }
            this._isInitialized = true;
            (/** @type {?} */ (this._pendingSubscribers)).forEach(this._notifySubscriber);
            this._pendingSubscribers = null;
        }
        /**
         * Emits and completes the subscriber stream (should only emit once).
         * @param {?} subscriber
         * @return {?}
         */
        _notifySubscriber(subscriber) {
            subscriber.next();
            subscriber.complete();
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * InjectionToken for datepicker that can be used to override default locale code.
 * @type {?}
 */
const MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
    providedIn: 'root',
    factory: MAT_DATE_LOCALE_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_DATE_LOCALE_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
}
/**
 * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
 * If you are importing and providing this in your code you can simply remove it.
 * @deprecated
 * \@breaking-change 8.0.0
 * @type {?}
 */
const MAT_DATE_LOCALE_PROVIDER = { provide: MAT_DATE_LOCALE, useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"] };
/**
 * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
 * @abstract
 * @template D
 */
class DateAdapter {
    constructor() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * A stream that emits when the locale changes.
     * @return {?}
     */
    get localeChanges() { return this._localeChanges; }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value The value to be deserialized into a date object.
     * @return {?} The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param {?} locale The new locale.
     * @return {?}
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    }
    /**
     * Checks if two dates are equal.
     * @param {?} first The first date to check.
     * @param {?} second The second date to check.
     * @return {?} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    sameDate(first, second) {
        if (first && second) {
            /** @type {?} */
            let firstValid = this.isValid(first);
            /** @type {?} */
            let secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid == secondValid;
        }
        return first == second;
    }
    /**
     * Clamp the given date between min and max dates.
     * @param {?} date The date to clamp.
     * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
     * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
     * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(mmalerba): Remove when we no longer support safari 9.
/**
 * Whether the browser supports the Intl API.
 * @type {?}
 */
let SUPPORTS_INTL_API;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    SUPPORTS_INTL_API = typeof Intl != 'undefined';
}
catch (_a) {
    SUPPORTS_INTL_API = false;
}
/**
 * The default month names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
const ɵ0 = /**
 * @param {?} i
 * @return {?}
 */
i => String(i + 1);
/**
 * The default date names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DATE_NAMES = range(31, (ɵ0));
/**
 * The default day of the week names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 * @type {?}
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */
class NativeDateAdapter extends DateAdapter {
    /**
     * @param {?} matDateLocale
     * @param {?} platform
     */
    constructor(matDateLocale, platform) {
        super();
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */
        this.useUtcForDisplay = true;
        super.setLocale(matDateLocale);
        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYear(date) {
        return date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return date.getMonth();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return date.getDate();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayOfWeek(date) {
        return date.getDay();
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range(12, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1)))));
        }
        return DEFAULT_MONTH_NAMES[style];
    }
    /**
     * @return {?}
     */
    getDateNames() {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range(31, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DATE_NAMES;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range(7, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYearName(date) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return new Date(date.getTime());
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    createDate(year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        /** @type {?} */
        let result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() != month) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @return {?}
     */
    today() {
        return new Date();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    format(date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = Object.assign({}, displayFormat, { timeZone: 'utc' });
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    }
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
    }
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    addCalendarMonths(date, months) {
        /** @type {?} */
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    }
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                let date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return !isNaN(date.getTime());
    }
    /**
     * @return {?}
     */
    invalid() {
        return new Date(NaN);
    }
    /**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    _createDateWithOverflow(year, month, date) {
        /** @type {?} */
        const result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    }
    /**
     * Pads a number to make it two digits.
     * @private
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    _2digit(n) {
        return ('00' + n).slice(-2);
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    _stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @private
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
        /** @type {?} */
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    }
}
NativeDateAdapter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
NativeDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_DATE_LOCALE,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
const MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NativeDateModule {
}
NativeDateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
                providers: [
                    { provide: DateAdapter, useClass: NativeDateAdapter },
                ],
            },] },
];
const ɵ0$1 = MAT_NATIVE_DATE_FORMATS;
class MatNativeDateModule {
}
MatNativeDateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [NativeDateModule],
                providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0$1 }],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error state matcher that matches when a control is invalid and dirty.
 */
class ShowOnDirtyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
    }
}
ShowOnDirtyErrorStateMatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * Provider that defines how form controls behave with regards to displaying error messages.
 */
class ErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || (form && form.submitted)));
    }
}
ErrorStateMatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ ErrorStateMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 * @type {?}
 */
const MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
/** @type {?} */
const ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = [
    'longpress',
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft'
];
const ɵ0$2 = /**
 * @return {?}
 */
() => { }, ɵ1 = /**
 * @return {?}
 */
() => { };
/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 * @type {?}
 */
const noopHammerInstance = {
    on: (ɵ0$2),
    off: (ɵ1),
};
/**
 * Adjusts configuration of our gesture library, Hammer.
 */
class GestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    /**
     * @param {?=} _hammerOptions
     * @param {?=} commonModule
     */
    constructor(_hammerOptions, commonModule) {
        super();
        this._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */
        this.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;
        if (commonModule) {
            commonModule._checkHammerIsAvailable();
        }
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */
    buildHammer(element) {
        /** @type {?} */
        const hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
        }
        /** @type {?} */
        const mc = new hammer(element, this._hammerOptions || undefined);
        // Default Hammer Recognizers.
        /** @type {?} */
        const pan = new hammer.Pan();
        /** @type {?} */
        const swipe = new hammer.Swipe();
        /** @type {?} */
        const press = new hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        /** @type {?} */
        const slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        /** @type {?} */
        const longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Since the slide event threshold is set to zero, the slide recognizer can fire and
        // accidentally reset the longpress recognizer. In order to make sure that the two
        // recognizers can run simultaneously but don't affect each other, we allow the slide
        // recognizer to recognize while a longpress is being processed.
        // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124
        longpress.recognizeWith(slide);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return (/** @type {?} */ (mc));
    }
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @private
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    _createRecognizer(base, options, ...inheritances) {
        /** @type {?} */
        let recognizer = new ((/** @type {?} */ (base.constructor)))(options);
        inheritances.push(base);
        inheritances.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => recognizer.recognizeWith(item)));
        return recognizer;
    }
}
GestureConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
GestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_HAMMER_OPTIONS,] }] },
    { type: MatCommonModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
class MatLine {
}
MatLine.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mat-line], [matLine]',
                host: { 'class': 'mat-line' }
            },] },
];
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @param {?} lines
 * @param {?} element
 * @return {?}
 */
function setLines(lines, element) {
    // Note: doesn't need to unsubscribe, because `changes`
    // gets completed by Angular when the view is destroyed.
    lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(lines)).subscribe((/**
     * @param {?} __0
     * @return {?}
     */
    ({ length }) => {
        setClass(element, 'mat-2-line', false);
        setClass(element, 'mat-3-line', false);
        setClass(element, 'mat-multi-line', false);
        if (length === 2 || length === 3) {
            setClass(element, `mat-${length}-line`, true);
        }
        else if (length > 3) {
            setClass(element, `mat-multi-line`, true);
        }
    }));
}
/**
 * Adds or removes a class from an element.
 * @param {?} element
 * @param {?} className
 * @param {?} isAdd
 * @return {?}
 */
function setClass(element, className, isAdd) {
    /** @type {?} */
    const classList = element.nativeElement.classList;
    isAdd ? classList.add(className) : classList.remove(className);
}
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @deprecated Use `setLines` instead.
 * \@breaking-change 8.0.0
 */
class MatLineSetter {
    /**
     * @param {?} lines
     * @param {?} element
     */
    constructor(lines, element) {
        setLines(lines, element);
    }
}
class MatLineModule {
}
MatLineModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatCommonModule],
                exports: [MatLine, MatCommonModule],
                declarations: [MatLine],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
const RippleState = {
    FADING_IN: 0, VISIBLE: 1, FADING_OUT: 2, HIDDEN: 3,
};
RippleState[RippleState.FADING_IN] = 'FADING_IN';
RippleState[RippleState.VISIBLE] = 'VISIBLE';
RippleState[RippleState.FADING_OUT] = 'FADING_OUT';
RippleState[RippleState.HIDDEN] = 'HIDDEN';
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
    /**
     * @param {?} _renderer
     * @param {?} element
     * @param {?} config
     */
    constructor(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */
        this.state = RippleState.HIDDEN;
    }
    /**
     * Fades out the ripple element.
     * @return {?}
     */
    fadeOut() {
        this._renderer.fadeOutRipple(this);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 * @type {?}
 */
const defaultRippleAnimationConfig = {
    enterDuration: 450,
    exitDuration: 400
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 * @type {?}
 */
const ignoreMouseEventsTimeout = 800;
/**
 * Options that apply to all the event listeners that are bound by the ripple renderer.
 * @type {?}
 */
const passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * \@docs-private
 */
class RippleRenderer {
    /**
     * @param {?} _target
     * @param {?} _ngZone
     * @param {?} elementOrElementRef
     * @param {?} platform
     */
    constructor(_target, _ngZone, elementOrElementRef, platform) {
        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */
        this._isPointerDown = false;
        /**
         * Events to be registered on the trigger element.
         */
        this._triggerEvents = new Map();
        /**
         * Set of currently active ripple references.
         */
        this._activeRipples = new Set();
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         */
        this._onMousedown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Screen readers will fire fake mouse events for space/enter. Skip launching a
            // ripple in this case for consistency with the non-screen-reader experience.
            /** @type {?} */
            const isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);
            /** @type {?} */
            const isSyntheticEvent = this._lastTouchStartEvent &&
                Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
            if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
                this._isPointerDown = true;
                this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
            }
        });
        /**
         * Function being called whenever the trigger is being pressed using touch.
         */
        this._onTouchStart = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!this._target.rippleDisabled) {
                // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
                // events will launch a second ripple if we don't ignore mouse events for a specific
                // time after a touchstart event.
                this._lastTouchStartEvent = Date.now();
                this._isPointerDown = true;
                // Use `changedTouches` so we skip any touches where the user put
                // their finger down, but used another finger to tap the element again.
                /** @type {?} */
                const touches = event.changedTouches;
                for (let i = 0; i < touches.length; i++) {
                    this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
                }
            }
        });
        /**
         * Function being called whenever the trigger is being released.
         */
        this._onPointerUp = (/**
         * @return {?}
         */
        () => {
            if (!this._isPointerDown) {
                return;
            }
            this._isPointerDown = false;
            // Fade-out all ripples that are visible and not persistent.
            this._activeRipples.forEach((/**
             * @param {?} ripple
             * @return {?}
             */
            ripple => {
                // By default, only ripples that are completely visible will fade out on pointer release.
                // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
                /** @type {?} */
                const isVisible = ripple.state === RippleState.VISIBLE ||
                    ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
                if (!ripple.config.persistent && isVisible) {
                    ripple.fadeOut();
                }
            }));
        });
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);
            // Specify events which need to be registered on the trigger.
            this._triggerEvents
                .set('mousedown', this._onMousedown)
                .set('mouseup', this._onPointerUp)
                .set('mouseleave', this._onPointerUp)
                .set('touchstart', this._onTouchStart)
                .set('touchend', this._onPointerUp)
                .set('touchcancel', this._onPointerUp);
        }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
     * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param {?=} config Extra ripple options.
     * @return {?}
     */
    fadeInRipple(x, y, config = {}) {
        /** @type {?} */
        const containerRect = this._containerRect =
            this._containerRect || this._containerElement.getBoundingClientRect();
        /** @type {?} */
        const animationConfig = Object.assign({}, defaultRippleAnimationConfig, config.animation);
        if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        /** @type {?} */
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        /** @type {?} */
        const offsetX = x - containerRect.left;
        /** @type {?} */
        const offsetY = y - containerRect.top;
        /** @type {?} */
        const duration = animationConfig.enterDuration;
        /** @type {?} */
        const ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        // If the color is not set, the default CSS color will be used.
        ripple.style.backgroundColor = config.color || null;
        ripple.style.transitionDuration = `${duration}ms`;
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        /** @type {?} */
        const rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = RippleState.FADING_IN;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
        }
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this._runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
            rippleRef.state = RippleState.VISIBLE;
            // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.
            if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
                rippleRef.fadeOut();
            }
        }), duration);
        return rippleRef;
    }
    /**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */
    fadeOutRipple(rippleRef) {
        /** @type {?} */
        const wasActive = this._activeRipples.delete(rippleRef);
        if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
        }
        // Clear out the cached bounding rect if we have no more ripples.
        if (!this._activeRipples.size) {
            this._containerRect = null;
        }
        // For ripples that are not active anymore, don't re-run the fade-out animation.
        if (!wasActive) {
            return;
        }
        /** @type {?} */
        const rippleEl = rippleRef.element;
        /** @type {?} */
        const animationConfig = Object.assign({}, defaultRippleAnimationConfig, rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = '0';
        rippleRef.state = RippleState.FADING_OUT;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this._runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            rippleRef.state = RippleState.HIDDEN;
            (/** @type {?} */ (rippleEl.parentNode)).removeChild(rippleEl);
        }), animationConfig.exitDuration);
    }
    /**
     * Fades out all currently active ripples.
     * @return {?}
     */
    fadeOutAll() {
        this._activeRipples.forEach((/**
         * @param {?} ripple
         * @return {?}
         */
        ripple => ripple.fadeOut()));
    }
    /**
     * Sets up the trigger event listeners
     * @param {?} elementOrElementRef
     * @return {?}
     */
    setupTriggerEvents(elementOrElementRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);
        if (!element || element === this._triggerElement) {
            return;
        }
        // Remove all previously registered event listeners from the trigger element.
        this._removeTriggerEvents();
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._triggerEvents.forEach((/**
             * @param {?} fn
             * @param {?} type
             * @return {?}
             */
            (fn, type) => {
                element.addEventListener(type, fn, passiveEventOptions);
            }));
        }));
        this._triggerElement = element;
    }
    /**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @private
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    _runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout(fn, delay)));
    }
    /**
     * Removes previously registered event listeners from the trigger element.
     * @return {?}
     */
    _removeTriggerEvents() {
        if (this._triggerElement) {
            this._triggerEvents.forEach((/**
             * @param {?} fn
             * @param {?} type
             * @return {?}
             */
            (fn, type) => {
                (/** @type {?} */ (this._triggerElement)).removeEventListener(type, fn, passiveEventOptions);
            }));
        }
    }
}
/**
 * Enforces a style recalculation of a DOM element by computing its styles.
 * @param {?} element
 * @return {?}
 */
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */
function distanceToFurthestCorner(x, y, rect) {
    /** @type {?} */
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    /** @type {?} */
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify the global ripple options.
 * @type {?}
 */
const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');
class MatRipple {
    /**
     * @param {?} _elementRef
     * @param {?} ngZone
     * @param {?} platform
     * @param {?=} globalOptions
     * @param {?=} animationMode
     */
    constructor(_elementRef, ngZone, platform, globalOptions, animationMode) {
        this._elementRef = _elementRef;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */
        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        if (animationMode === 'NoopAnimations') {
            this._globalOptions.animation = { enterDuration: 0, exitDuration: 0 };
        }
    }
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     * @return {?}
     */
    get trigger() { return this._trigger || this._elementRef.nativeElement; }
    /**
     * @param {?} trigger
     * @return {?}
     */
    set trigger(trigger) {
        this._trigger = trigger;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
    }
    /**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */
    fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
    }
    /**
     * Ripple configuration from the directive's input values.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */
    get rippleConfig() {
        return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign({}, this._globalOptions.animation, this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
    }
    /**
     * Whether ripples on pointer-down are disabled or not.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */
    get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
    }
    /**
     * Sets up the trigger event listeners if ripples are enabled.
     * @private
     * @return {?}
     */
    _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
    }
    /**
     * Launches a manual ripple at the specified coordinated or just by the ripple config.
     * @param {?} configOrX
     * @param {?=} y
     * @param {?=} config
     * @return {?}
     */
    launch(configOrX, y = 0, config) {
        if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign({}, this.rippleConfig, config));
        }
        else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign({}, this.rippleConfig, configOrX));
        }
    }
}
MatRipple.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mat-ripple], [matRipple]',
                exportAs: 'matRipple',
                host: {
                    'class': 'mat-ripple',
                    '[class.mat-ripple-unbounded]': 'unbounded'
                }
            },] },
];
/** @nocollapse */
MatRipple.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
MatRipple.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleColor',] }],
    unbounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleUnbounded',] }],
    centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleCentered',] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleRadius',] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleAnimation',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleDisabled',] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleTrigger',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatRippleModule {
}
MatRippleModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
                exports: [MatRipple, MatCommonModule],
                declarations: [MatRipple],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * \@docs-private
 */
class MatPseudoCheckbox {
    /**
     * @param {?=} _animationMode
     */
    constructor(_animationMode) {
        this._animationMode = _animationMode;
        /**
         * Display state of the checkbox.
         */
        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */
        this.disabled = false;
    }
}
MatPseudoCheckbox.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'mat-pseudo-checkbox',
                styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
                template: '',
                host: {
                    'class': 'mat-pseudo-checkbox',
                    '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
                    '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
                    '[class.mat-pseudo-checkbox-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                },
            },] },
];
/** @nocollapse */
MatPseudoCheckbox.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
MatPseudoCheckbox.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatPseudoCheckboxModule {
}
MatPseudoCheckboxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                exports: [MatPseudoCheckbox],
                declarations: [MatPseudoCheckbox]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatOptgroup.
/**
 * \@docs-private
 */
class MatOptgroupBase {
}
/** @type {?} */
const _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase);
// Counter for unique group ids.
/** @type {?} */
let _uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `mat-option`.
 */
class MatOptgroup extends _MatOptgroupMixinBase {
    constructor() {
        super(...arguments);
        /**
         * Unique id for the underlying label.
         */
        this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    }
}
MatOptgroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-optgroup',
                exportAs: 'matOptgroup',
                template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}<ng-content></ng-content></label><ng-content select=\"mat-option, ng-container\"></ng-content>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled'],
                styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
                host: {
                    'class': 'mat-optgroup',
                    'role': 'group',
                    '[class.mat-optgroup-disabled]': 'disabled',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-labelledby]': '_labelId',
                }
            },] },
];
MatOptgroup.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Event object emitted by MatOption when selected or deselected.
 */
class MatOptionSelectionChange {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
/**
 * Injection token used to provide the parent component to options.
 * @type {?}
 */
const MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
/**
 * Single option inside of a `<mat-select>` element.
 */
class MatOption {
    /**
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _parent
     * @param {?} group
     */
    constructor(_element, _changeDetectorRef, _parent, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */
        this.id = `mat-option-${_uniqueIdCounter++}`;
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * Whether the wrapping component is in multiple selection mode.
     * @return {?}
     */
    get multiple() { return this._parent && this._parent.multiple; }
    /**
     * Whether or not the option is currently selected.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * Whether the option is disabled.
     * @return {?}
     */
    get disabled() { return (this.group && this.group.disabled) || this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    /**
     * Whether ripples for the option are disabled.
     * @return {?}
     */
    get disableRipple() { return this._parent && this._parent.disableRipple; }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     * @return {?}
     */
    get viewValue() {
        // TODO(kara): Add input property alternative for node envs.
        return (this._getHostElement().textContent || '').trim();
    }
    /**
     * Selects the option.
     * @return {?}
     */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /**
     * Deselects the option.
     * @return {?}
     */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /**
     * Sets focus onto this option.
     * @param {?=} _origin
     * @param {?=} options
     * @return {?}
     */
    focus(_origin, options) {
        // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
        // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
        /** @type {?} */
        const element = this._getHostElement();
        if (typeof element.focus === 'function') {
            element.focus(options);
        }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    setActiveStyles() {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    setInactiveStyles() {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    getLabel() {
        return this.viewValue;
    }
    /**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            this._selectViaInteraction();
            // Prevent the page from scrolling down and form submits.
            event.preventDefault();
        }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     * @return {?}
     */
    _selectViaInteraction() {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    }
    /**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     * @return {?}
     */
    _getAriaSelected() {
        return this.selected || (this.multiple ? false : null);
    }
    /**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /**
     * Gets the host DOM element.
     * @return {?}
     */
    _getHostElement() {
        return this._element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        // Since parent components could be using the option's label to display the selected values
        // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
        // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
        // relatively cheap, however we still limit them only to selected options in order to avoid
        // hitting the DOM too often.
        if (this._selected) {
            /** @type {?} */
            const viewValue = this.viewValue;
            if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;
                this._stateChanges.next();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * Emits the selection change event.
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
}
MatOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-option',
                exportAs: 'matOption',
                host: {
                    'role': 'option',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[class.mat-selected]': 'selected',
                    '[class.mat-option-multiple]': 'multiple',
                    '[class.mat-active]': 'active',
                    '[id]': 'id',
                    '[attr.aria-selected]': '_getAriaSelected()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[class.mat-option-disabled]': 'disabled',
                    '(click)': '_selectViaInteraction()',
                    '(keydown)': '_handleKeydown($event)',
                    'class': 'mat-option',
                },
                styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
                template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_OPTION_PARENT_COMPONENT,] }] },
    { type: MatOptgroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatOption.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onSelectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/**
 * Counts the amount of option group labels that precede the specified option.
 * \@docs-private
 * @param {?} optionIndex Index of the option at which to start counting.
 * @param {?} options Flat list of all of the options.
 * @param {?} optionGroups Flat list of all of the option groups.
 * @return {?}
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        /** @type {?} */
        let optionsArray = options.toArray();
        /** @type {?} */
        let groups = optionGroups.toArray();
        /** @type {?} */
        let groupCounter = 0;
        for (let i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * \@docs-private
 * @param {?} optionIndex Index of the option to be scrolled into the view.
 * @param {?} optionHeight Height of the options.
 * @param {?} currentScrollPosition Current scroll position of the panel.
 * @param {?} panelHeight Height of the panel.
 * @return {?}
 */
function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
    /** @type {?} */
    const optionOffset = optionIndex * optionHeight;
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatOptionModule {
}
MatOptionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule],
                exports: [MatOption, MatOptgroup],
                declarations: [MatOption, MatOptgroup]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * InjectionToken that can be used to specify the global label options.
 * @type {?}
 */
const MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * When constructing a Date, the month is zero-based. This can be confusing, since people are
 * used to seeing them one-based. So we create these aliases to make writing the tests easier.
 * \@docs-private
 * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
 * @type {?}
 */
const JAN = 0;
/** @type {?} */
const FEB = 1;
/** @type {?} */
const MAR = 2;
/** @type {?} */
const APR = 3;
/** @type {?} */
const MAY = 4;
/** @type {?} */
const JUN = 5;
/** @type {?} */
const JUL = 6;
/** @type {?} */
const AUG = 7;
/** @type {?} */
const SEP = 8;
/** @type {?} */
const OCT = 9;
/** @type {?} */
const NOV = 10;
/** @type {?} */
const DEC = 11;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=core.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/icon.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/icon.js ***!
  \********************************************************/
/*! exports provided: MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return MatIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return MAT_ICON_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return MAT_ICON_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return MatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return getMatIconNameNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return getMatIconNoHttpProviderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return getMatIconFailedToSanitizeUrlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return getMatIconFailedToSanitizeLiteralError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return MatIconRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return ICON_REGISTRY_PROVIDER; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * \@docs-private
 * @param {?} iconName
 * @return {?}
 */
function getMatIconNameNotFoundError(iconName) {
    return Error(`Unable to find icon with the name "${iconName}"`);
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including \@angular/common/http.
 * \@docs-private
 * @return {?}
 */
function getMatIconNoHttpProviderError() {
    return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
        'Please include the HttpClientModule from @angular/common/http in your ' +
        'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * \@docs-private
 * @param {?} url URL that was attempted to be sanitized.
 * @return {?}
 */
function getMatIconFailedToSanitizeUrlError(url) {
    return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` +
        `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * \@docs-private
 * @param {?} literal HTML that was attempted to be sanitized.
 * @return {?}
 */
function getMatIconFailedToSanitizeLiteralError(literal) {
    return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` +
        `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * \@docs-private
 */
class SvgIconConfig {
    /**
     * @param {?} data
     * @param {?=} options
     */
    constructor(data, options) {
        this.options = options;
        // Note that we can't use `instanceof SVGElement` here,
        // because it'll break during server-side rendering.
        if (!!((/** @type {?} */ (data))).nodeName) {
            this.svgElement = (/** @type {?} */ (data));
        }
        else {
            this.url = (/** @type {?} */ (data));
        }
    }
}
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
class MatIconRegistry {
    /**
     * @param {?} _httpClient
     * @param {?} _sanitizer
     * @param {?} document
     * @param {?=} _errorHandler
     */
    constructor(_httpClient, _sanitizer, document, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /**
         * Cache for icons loaded by direct URLs.
         */
        this._cachedIconsByUrl = new Map();
        /**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */
        this._inProgressUrlFetches = new Map();
        /**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */
        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
        this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIcon(iconName, url, options) {
        return (/** @type {?} */ (this)).addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconLiteral(iconName, literal, options) {
        return (/** @type {?} */ (this)).addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconInNamespace(namespace, iconName, url, options) {
        return (/** @type {?} */ (this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, options));
    }
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        /** @type {?} */
        const sanitizedLiteral = (/** @type {?} */ (this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        /** @type {?} */
        const svgElement = (/** @type {?} */ (this))._createSvgElementForSingleIcon(sanitizedLiteral, options);
        return (/** @type {?} */ (this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement, options));
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconSet(url, options) {
        return (/** @type {?} */ (this)).addSvgIconSetInNamespace('', url, options);
    }
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} literal SVG source of the icon set.
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconSetLiteral(literal, options) {
        return (/** @type {?} */ (this)).addSvgIconSetLiteralInNamespace('', literal, options);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconSetInNamespace(namespace, url, options) {
        return (/** @type {?} */ (this))._addSvgIconSetConfig(namespace, new SvgIconConfig(url, options));
    }
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} literal SVG source of the icon set.
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        /** @type {?} */
        const sanitizedLiteral = (/** @type {?} */ (this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        /** @type {?} */
        const svgElement = (/** @type {?} */ (this))._svgElementFromString(sanitizedLiteral);
        return (/** @type {?} */ (this))._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement, options));
    }
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} alias Alias for the font.
     * @param {?=} className Class name override to be used instead of the alias.
     * @return {THIS}
     */
    registerFontClassAlias(alias, className = alias) {
        (/** @type {?} */ (this))._fontCssClassesByAlias.set(alias, className);
        return (/** @type {?} */ (this));
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     * @param {?} alias
     * @return {?}
     */
    classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} className
     * @return {THIS}
     */
    setDefaultFontSetClass(className) {
        (/** @type {?} */ (this))._defaultFontSetClass = className;
        return (/** @type {?} */ (this));
    }
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     * @return {?}
     */
    getDefaultFontSetClass() {
        return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param {?} safeUrl URL from which to fetch the SVG icon.
     * @return {?}
     */
    getSvgIconFromUrl(safeUrl) {
        /** @type {?} */
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        /** @type {?} */
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
         * @param {?} svg
         * @return {?}
         */
        svg => this._cachedIconsByUrl.set((/** @type {?} */ (url)), svg))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svg
         * @return {?}
         */
        svg => cloneSvg(svg))));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param {?} name Name of the icon to be retrieved.
     * @param {?=} namespace Namespace in which to look for the icon.
     * @return {?}
     */
    getNamedSvgIcon(name, namespace = '') {
        // Return (copy of) cached icon if possible.
        /** @type {?} */
        const key = iconKey(namespace, name);
        /** @type {?} */
        const config = this._svgIconConfigs.get(key);
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        /** @type {?} */
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     * @private
     * @param {?} config
     * @return {?}
     */
    _getSvgFromConfig(config) {
        if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
             * @param {?} svg
             * @return {?}
             */
            svg => config.svgElement = svg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @param {?} svg
             * @return {?}
             */
            svg => cloneSvg(svg))));
        }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     * @private
     * @param {?} name
     * @param {?} iconSetConfigs
     * @return {?}
     */
    _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        /** @type {?} */
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        /** @type {?} */
        const iconSetFetchRequests = iconSetConfigs
            .filter((/**
         * @param {?} iconSetConfig
         * @return {?}
         */
        iconSetConfig => !iconSetConfig.svgElement))
            .map((/**
         * @param {?} iconSetConfig
         * @return {?}
         */
        iconSetConfig => {
            return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                /** @type {?} */
                const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.
                /** @type {?} */
                const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
                // @breaking-change 9.0.0 _errorHandler parameter to be made required
                if (this._errorHandler) {
                    this._errorHandler.handleError(new Error(errorMessage));
                }
                else {
                    console.error(errorMessage);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            })));
        }));
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
            }
            return foundIcon;
        })));
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconName
     * @param {?} iconSetConfigs
     * @return {?}
     */
    _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
            /** @type {?} */
            const config = iconSetConfigs[i];
            if (config.svgElement) {
                /** @type {?} */
                const foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config.options);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    _loadSvgIconFromConfig(config) {
        return this._fetchUrl(config.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svgText
         * @return {?}
         */
        svgText => this._createSvgElementForSingleIcon(svgText, config.options))));
    }
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    _loadSvgIconSetFromConfig(config) {
        // If the SVG for this icon set has already been parsed, do nothing.
        if (config.svgElement) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement);
        }
        return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svgText
         * @return {?}
         */
        svgText => {
            // It is possible that the icon set was parsed and cached by an earlier request, so parsing
            // only needs to occur if the cache is yet unset.
            if (!config.svgElement) {
                config.svgElement = this._svgElementFromString(svgText);
            }
            return config.svgElement;
        })));
    }
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     * @private
     * @param {?} responseText
     * @param {?=} options
     * @return {?}
     */
    _createSvgElementForSingleIcon(responseText, options) {
        /** @type {?} */
        const svg = this._svgElementFromString(responseText);
        this._setSvgAttributes(svg, options);
        return svg;
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconSet
     * @param {?} iconName
     * @param {?=} options
     * @return {?}
     */
    _extractSvgIconFromSet(iconSet, iconName, options) {
        // Use the `id="iconName"` syntax in order to escape special
        // characters in the ID (versus using the #iconName syntax).
        /** @type {?} */
        const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
        if (!iconSource) {
            return null;
        }
        // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.
        /** @type {?} */
        const iconElement = (/** @type {?} */ (iconSource.cloneNode(true)));
        iconElement.removeAttribute('id');
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes((/** @type {?} */ (iconElement)), options);
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        /** @type {?} */
        const svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
    }
    /**
     * Creates a DOM element from the given SVG string.
     * @private
     * @param {?} str
     * @return {?}
     */
    _svgElementFromString(str) {
        /** @type {?} */
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        const svg = (/** @type {?} */ (div.querySelector('svg')));
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     * @private
     * @param {?} element
     * @return {?}
     */
    _toSvgElement(element) {
        /** @type {?} */
        const svg = this._svgElementFromString('<svg></svg>');
        /** @type {?} */
        const attributes = element.attributes;
        // Copy over all the attributes from the `symbol` to the new SVG, except the id.
        for (let i = 0; i < attributes.length; i++) {
            const { name, value } = attributes[i];
            if (name !== 'id') {
                svg.setAttribute(name, value);
            }
        }
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     * @private
     * @param {?} svg
     * @param {?=} options
     * @return {?}
     */
    _setSvgAttributes(svg, options) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
        }
        return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     * @private
     * @param {?} safeUrl
     * @return {?}
     */
    _fetchUrl(safeUrl) {
        if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
        }
        if (safeUrl == null) {
            throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        /** @type {?} */
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        /** @type {?} */
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
        // Observable. Figure out why and fix it.
        /** @type {?} */
        const req = this._httpClient.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])((/**
         * @return {?}
         */
        () => this._inProgressUrlFetches.delete(url))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this._inProgressUrlFetches.set(url, req);
        return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} iconName Name under which to register the config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    _addSvgIconConfig(namespace, iconName, config) {
        (/** @type {?} */ (this))._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return (/** @type {?} */ (this));
    }
    /**
     * Registers an icon set config in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    _addSvgIconSetConfig(namespace, config) {
        /** @type {?} */
        const configNamespace = (/** @type {?} */ (this))._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            (/** @type {?} */ (this))._iconSetConfigs.set(namespace, [config]);
        }
        return (/** @type {?} */ (this));
    }
}
MatIconRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
MatIconRegistry.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
/** @nocollapse */ MatIconRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], 8)); }, token: MatIconRegistry, providedIn: "root" });
/**
 * \@docs-private
 * @param {?} parentRegistry
 * @param {?} httpClient
 * @param {?} sanitizer
 * @param {?=} document
 * @param {?=} errorHandler
 * @return {?}
 */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document, errorHandler) {
    return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/**
 * \@docs-private
 * @type {?}
 */
const ICON_REGISTRY_PROVIDER = {
    // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
    provide: MatIconRegistry,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), MatIconRegistry],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))],
    ],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};
/**
 * Clones an SVGElement while preserving type information.
 * @param {?} svg
 * @return {?}
 */
function cloneSvg(svg) {
    return (/** @type {?} */ (svg.cloneNode(true)));
}
/**
 * Returns the cache key to use for an icon namespace and name.
 * @param {?} namespace
 * @param {?} name
 * @return {?}
 */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatIcon.
/**
 * \@docs-private
 */
class MatIconBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/** @type {?} */
const _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatIconBase);
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * \@docs-private
 * @type {?}
 */
const MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-icon-location', {
    providedIn: 'root',
    factory: MAT_ICON_LOCATION_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_ICON_LOCATION_FACTORY() {
    /** @type {?} */
    const _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
    /** @type {?} */
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: (/**
         * @return {?}
         */
        () => _location ? (_location.pathname + _location.search) : '')
    };
}
/**
 * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
 * @type {?}
 */
const funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke'
];
const ɵ0 = /**
 * @param {?} attr
 * @return {?}
 */
attr => `[${attr}]`;
/**
 * Selector that can be used to find all elements that are using a `FuncIRI`.
 * @type {?}
 */
const funcIriAttributeSelector = funcIriAttributes.map((ɵ0)).join(', ');
/**
 * Regex that can be used to extract the id out of a FuncIRI.
 * @type {?}
 */
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
class MatIcon extends _MatIconMixinBase {
    /**
     * @param {?} elementRef
     * @param {?} _iconRegistry
     * @param {?} ariaHidden
     * @param {?=} _location
     * @param {?=} _errorHandler
     */
    constructor(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
        super(elementRef);
        this._iconRegistry = _iconRegistry;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._inline = false;
        // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    /**
     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
     * the element the icon is contained in.
     * @return {?}
     */
    get inline() {
        return this._inline;
    }
    /**
     * @param {?} inline
     * @return {?}
     */
    set inline(inline) {
        this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(inline);
    }
    /**
     * Font set that the icon is a part of.
     * @return {?}
     */
    get fontSet() { return this._fontSet; }
    /**
     * @param {?} value
     * @return {?}
     */
    set fontSet(value) {
        this._fontSet = this._cleanupFontValue(value);
    }
    /**
     * Name of an icon within a font set.
     * @return {?}
     */
    get fontIcon() { return this._fontIcon; }
    /**
     * @param {?} value
     * @return {?}
     */
    set fontIcon(value) {
        this._fontIcon = this._cleanupFontValue(value);
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     * @private
     * @param {?} iconName
     * @return {?}
     */
    _splitIconName(iconName) {
        if (!iconName) {
            return ['', ''];
        }
        /** @type {?} */
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]]; // Use default namespace.
            case 2: return (/** @type {?} */ (parts));
            default: throw Error(`Invalid icon name: "${iconName}"`);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
        /** @type {?} */
        const svgIconChanges = changes['svgIcon'];
        if (svgIconChanges) {
            if (this.svgIcon) {
                const [namespace, iconName] = this._splitIconName(this.svgIcon);
                this._iconRegistry.getNamedSvgIcon(iconName, namespace)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                    .subscribe((/**
                 * @param {?} svg
                 * @return {?}
                 */
                svg => this._setSvgElement(svg)), (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    /** @type {?} */
                    const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
                    // @breaking-change 9.0.0 _errorHandler parameter to be made required.
                    if (this._errorHandler) {
                        this._errorHandler.handleError(new Error(errorMessage));
                    }
                    else {
                        console.error(errorMessage);
                    }
                }));
            }
            else if (svgIconChanges.previousValue) {
                this._clearSvgElement();
            }
        }
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && this._location && cachedElements.size) {
            /** @type {?} */
            const newPath = this._location.getPathname();
            // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.
            if (newPath !== this._previousPath) {
                this._previousPath = newPath;
                this._prependPathToReferences(newPath);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _usingFontIcon() {
        return !this.svgIcon;
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    _setSvgElement(svg) {
        this._clearSvgElement();
        // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
        // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
        /** @type {?} */
        const styleTags = (/** @type {?} */ (svg.querySelectorAll('style')));
        for (let i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
        }
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        if (this._location) {
            /** @type {?} */
            const path = this._location.getPathname();
            this._previousPath = path;
            this._cacheChildrenWithExternalReferences(svg);
            this._prependPathToReferences(path);
        }
        this._elementRef.nativeElement.appendChild(svg);
    }
    /**
     * @private
     * @return {?}
     */
    _clearSvgElement() {
        /** @type {?} */
        const layoutElement = this._elementRef.nativeElement;
        /** @type {?} */
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            /** @type {?} */
            const child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
            return;
        }
        /** @type {?} */
        const elem = this._elementRef.nativeElement;
        /** @type {?} */
        const fontSetClass = this.fontSet ?
            this._iconRegistry.classNameForFontAlias(this.fontSet) :
            this._iconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
            }
            if (fontSetClass) {
                elem.classList.add(fontSetClass);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
            }
            if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    }
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     * @private
     * @param {?} value
     * @return {?}
     */
    _cleanupFontValue(value) {
        return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     * @private
     * @param {?} path
     * @return {?}
     */
    _prependPathToReferences(path) {
        /** @type {?} */
        const elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach((/**
             * @param {?} attrs
             * @param {?} element
             * @return {?}
             */
            (attrs, element) => {
                attrs.forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                attr => {
                    element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
                }));
            }));
        }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     * @private
     * @param {?} element
     * @return {?}
     */
    _cacheChildrenWithExternalReferences(element) {
        /** @type {?} */
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        /** @type {?} */
        const elements = this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map();
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
            funcIriAttributes.forEach((/**
             * @param {?} attr
             * @return {?}
             */
            attr => {
                /** @type {?} */
                const elementWithReference = elementsWithFuncIri[i];
                /** @type {?} */
                const value = elementWithReference.getAttribute(attr);
                /** @type {?} */
                const match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    /** @type {?} */
                    let attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    (/** @type {?} */ (attributes)).push({ name: attr, value: match[1] });
                }
            }));
        }
    }
}
MatIcon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{template: '<ng-content></ng-content>',
                selector: 'mat-icon',
                exportAs: 'matIcon',
                styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
                inputs: ['color'],
                host: {
                    'role': 'img',
                    'class': 'mat-icon notranslate',
                    '[class.mat-icon-inline]': 'inline',
                    '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: MatIconRegistry },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['aria-hidden',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_ICON_LOCATION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
MatIcon.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatIconModule {
}
MatIconModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                declarations: [MatIcon],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=icon.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/stepper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/stepper.js ***!
  \***********************************************************/
/*! exports provided: MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function() { return MatStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function() { return MatStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStep", function() { return MatStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function() { return MatStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function() { return MatHorizontalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function() { return MatVerticalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function() { return MatStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function() { return MatStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function() { return MatStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function() { return MAT_STEPPER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function() { return MatStepperIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function() { return MAT_STEPPER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function() { return matStepperAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function() { return MatStepperIcon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatStepLabel extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"] {
}
MatStepLabel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[matStepLabel]',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Stepper data that is required for internationalization.
 */
class MatStepperIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Label that is rendered below optional steps.
         */
        this.optionalLabel = 'Optional';
    }
}
MatStepperIntl.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ MatStepperIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/**
 * \@docs-private
 * @type {?}
 */
const MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatStepHeader extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"] {
    /**
     * @param {?} _intl
     * @param {?} _focusMonitor
     * @param {?} _elementRef
     * @param {?} changeDetectorRef
     */
    constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        super(_elementRef);
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        _focusMonitor.monitor(_elementRef, true);
        this._intlSubscription = _intl.changes.subscribe((/**
         * @return {?}
         */
        () => changeDetectorRef.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Focuses the step header.
     * @return {?}
     */
    focus() {
        this._focusMonitor.focusVia(this._elementRef, 'program');
    }
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
    }
    /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
    }
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    _getIconContext() {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    }
    /**
     * @param {?} state
     * @return {?}
     */
    _getDefaultTextForState(state$$1) {
        if (state$$1 == 'number') {
            return `${this.index + 1}`;
        }
        if (state$$1 == 'edit') {
            return 'create';
        }
        if (state$$1 == 'error') {
            return 'warning';
        }
        return state$$1;
    }
}
MatStepHeader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple\" matRipple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disableRipple\"></div><div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\"><div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides[state]\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><ng-container *ngSwitchDefault [ngSwitch]=\"state\"><span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span><mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon></ng-container></div></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\" [class.mat-step-label-error]=\"state == 'error'\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div><div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div></div>",
                styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon .mat-icon,.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatStepHeader.ctorParameters = () => [
    { type: MatStepperIntl },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
MatStepHeader.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    iconOverrides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material steppers.
 * \@docs-private
 * @type {?}
 */
const matStepperAnimations = {
    /**
     * Animation that transitions the step along the X axis in a horizontal stepper.
     */
    horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'none', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /**
     * Animation that transitions the step along the Y axis in a vertical stepper.
     */
    verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Template to be used to override the icons inside the step header.
 */
class MatStepperIcon {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
MatStepperIcon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ng-template[matStepperIcon]',
            },] },
];
/** @nocollapse */
MatStepperIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
MatStepperIcon.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matStepperIcon',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatStep extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"] {
    /**
     * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
     * @param {?} stepper
     * @param {?} _errorStateMatcher
     * @param {?=} stepperOptions
     */
    constructor(stepper, _errorStateMatcher, stepperOptions) {
        super(stepper, stepperOptions);
        this._errorStateMatcher = _errorStateMatcher;
    }
    /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        /** @type {?} */
        const customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    }
}
MatStep.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-step',
                template: "<ng-template><ng-content></ng-content></ng-template>",
                providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], useExisting: MatStep }],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matStep',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatStep.ctorParameters = () => [
    { type: MatStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                     * @return {?}
                     */
                    () => MatStepper)),] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"],] }] }
];
MatStep.propDecorators = {
    stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatStepLabel, { static: false },] }]
};
class MatStepper extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"] {
    constructor() {
        super(...arguments);
        /**
         * Event emitted when the current step is done transitioning in.
         */
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
        this._iconOverrides = {};
        /**
         * Stream of animation `done` events when the body expands/collapses.
         */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._icons.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name, templateRef }) => this._iconOverrides[name] = templateRef));
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => this._stateChanged()));
        this._animationDone.pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => x.fromState === y.fromState && x.toState === y.toState)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (((/** @type {?} */ (event.toState))) === 'current') {
                this.animationDone.emit();
            }
        }));
    }
}
MatStepper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[matStepper]', providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: MatStepper }] },] },
];
MatStepper.propDecorators = {
    _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [MatStepHeader,] }],
    _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatStep,] }],
    _icons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatStepperIcon,] }],
    animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
class MatHorizontalStepper extends MatStepper {
    constructor() {
        super(...arguments);
        /**
         * Whether the label should display in bottom or end position.
         */
        this.labelPosition = 'end';
    }
}
MatHorizontalStepper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-horizontal-stepper',
                exportAs: 'matHorizontalStepper',
                template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of steps; let i = index\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
                styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-horizontal',
                    '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
                    '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
                    'aria-orientation': 'horizontal',
                    'role': 'tablist',
                },
                animations: [matStepperAnimations.horizontalStepTransition],
                providers: [
                    { provide: MatStepper, useExisting: MatHorizontalStepper },
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: MatHorizontalStepper }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
MatHorizontalStepper.propDecorators = {
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
class MatVerticalStepper extends MatStepper {
    /**
     * @param {?} dir
     * @param {?} changeDetectorRef
     * @param {?=} elementRef
     * @param {?=} _document
     */
    constructor(dir, changeDetectorRef, 
    // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
    elementRef, _document) {
        super(dir, changeDetectorRef, elementRef, _document);
        this._orientation = 'vertical';
    }
}
MatVerticalStepper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-vertical-stepper',
                exportAs: 'matVerticalStepper',
                template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
                styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-vertical',
                    'aria-orientation': 'vertical',
                    'role': 'tablist',
                },
                animations: [matStepperAnimations.verticalStepTransition],
                providers: [
                    { provide: MatStepper, useExisting: MatVerticalStepper },
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: MatVerticalStepper }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatVerticalStepper.ctorParameters = () => [
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
class MatStepperNext extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"] {
}
MatStepperNext.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'button[matStepperNext]',
                host: {
                    '[type]': 'type',
                },
                inputs: ['type']
            },] },
];
/**
 * Button that moves to the previous step in a stepper workflow.
 */
class MatStepperPrevious extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"] {
}
MatStepperPrevious.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'button[matStepperPrevious]',
                host: {
                    '[type]': 'type',
                },
                inputs: ['type']
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatStepperModule {
}
MatStepperModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"]],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=stepper.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/apply-form/apply-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/apply-form/apply-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\t<ion-title>\n\t\t{{'APPLYFORM.applyForm' | translate}}\n\t</ion-title>\n</ion-header>\n\n<ion-content>\n\n\t<ion-grid class=\"settings\">\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title\">\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<h3>{{'APPLYFORM.title' | translate}}</h3>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"auto\">\n\t\t\t\t\t\t\t<div class=\"btn-upload-item\">\n\t\t\t\t\t\t\t\t<div class=\"btn-upload ion-activatable\">\n\t\t\t\t\t\t\t\t\t<button (click)=\"addAssessment()\">\n\t\t\t\t\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect> {{'APPLYFORM.addMoreButton' | translate}}\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<form [formGroup]=\"formGroup\">\n\t\t\t\t\t<div formArrayName=\"form\">\n\t\t\t\t\t\t<div [formGroupName]=\"i\"\n\t\t\t\t\t\t\t*ngFor=\"let ind of formGroup.get('form')?.controls; let i = index\">\n\t\t\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\">{{'APPLYFORM.assessmentAspect' | translate}}</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-select formControlName=\"assessment_aspect\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'APPLYFORM.assessmentAspectPlaceholder' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t<ion-select-option disabled>{{'APPLYFORM.energy' | translate}}</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let energy of tempAssessmentAspects\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngIf=\"energy.aspect_type == 'EN'\" value=\"{{energy.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{energy.name}}. {{energy.aspect}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ion-select-option disabled>{{'APPLYFORM.water' | translate}}</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let water of tempAssessmentAspects\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngIf=\"water.aspect_type == 'WA'\" value=\"{{water.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{water.name}}. {{water.aspect}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ion-select-option disabled>{{'APPLYFORM.waste' | translate}}</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let waste of tempAssessmentAspects\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngIf=\"waste.aspect_type == 'WE'\" value=\"{{waste.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{waste.name}}. {{waste.aspect}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ion-select-option disabled>{{'APPLYFORM.transportation' | translate}}</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let transportation of tempAssessmentAspects\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngIf=\"transportation.aspect_type == 'TR'\" value=\"{{transportation.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{transportation.name}}. {{transportation.aspect}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ion-select-option disabled>{{'APPLYFORM.biodiversity' | translate}}</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let biodiversity of tempAssessmentAspects\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngIf=\"biodiversity.aspect_type == 'BI'\" value=\"{{biodiversity.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{biodiversity.name}}. {{biodiversity.aspect}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item *ngIf=\"formGroup.value.form[i].assessment_aspect == '9c18a34e-21d9-4b1d-88c1-f3d19b5bfbe2'\">\n\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\" class=\"ion-text-wrap\">No. of lamp in house</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" formControlName=\"total_lamp\" placeholder=\"E.g.: 10\" (ionChange)=\"calculateA3(i)\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item *ngIf=\"formGroup.value.form[i].assessment_aspect == '9c18a34e-21d9-4b1d-88c1-f3d19b5bfbe2'\">\n\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\" class=\"ion-text-wrap\">No. of LED in house</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" formControlName=\"total_led\" placeholder=\"E.g.: 10\" (ionChange)=\"calculateA3(i)\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item *ngIf=\"formGroup.value.form[i].assessment_aspect == '9c18a34e-21d9-4b1d-88c1-f3d19b5bfbe2'\">\n\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\" class=\"ion-text-wrap\">Total saving (%)</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" [value]=\"energySaving.toFixed(2)\" disabled></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item *ngIf=\"formGroup.value.form[i].assessment_aspect == '4391e0e3-52dd-4d70-9697-b80329681d5e'\">\n\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\" class=\"ion-text-wrap\">Consumption of electricity (kWh/capita/month)</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" [value]=\"consumptionElectricity.toFixed(2)\" disabled></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item *ngIf=\"formGroup.value.form[i].assessment_aspect == '4391e0e3-52dd-4d70-9697-b80329681d5e'\">\n\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\" class=\"ion-text-wrap\">Consumption of water (L/capita/day)</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" [value]=\"consumptionWater.toFixed(2)\" disabled></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\">{{'APPLYFORM.remarks' | translate}}</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-input formControlName=\"remarks\" placeholder=\"{{'APPLYFORM.remarksPlaceholder' | translate}}\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item mode=\"ios\" lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-img class=\"text-center\" [src]=\"tempImageEncoded[i]\" *ngIf=\"tempImageEncoded[i]\"></ion-img>\n\t\t\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\">{{'APPLYFORM.attach' | translate}}</ion-label>\n\t\t\t\t\t\t\t\t\t<div class=\"btn-upload-item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-upload ion-activatable\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"openUploadSheet(i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect> {{'APPLYFORM.upload' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item lines=\"nones\" mode=\"ios\">\n\t\t\t\t\t\t\t\t\t<span ion-button icon-left clear *ngIf=\"formGroup.get('form')?.controls.length > 1\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"removeAssessment(i)\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t{{'APPLYFORM.remove' | translate}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t<span ion-button icon-left clear *ngIf=\"formGroup.controls.form.length > 1\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"removeAssessment(i)\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\tRemove\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ion-item-group>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t<ion-label class=\"ion-text-wrap\">{{'APPLYFORM.everSubmitted' | translate}}\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-checkbox checked=\"false\"></ion-checkbox>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t<ion-label position=\"stacked\" class=\"ion-text-wrap\">{{'APPLYFORM.specify' | translate}}</ion-label>\n\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"{{'APPLYFORM.example' | translate}}: 2015\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-button class=\"btn-green-lg mt-1\" (click)=\"confirmationAlert()\">{{'APPLYFORM.submitButton' | translate}}</ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/apply-start/apply-start.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/apply-start/apply-start.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\t<ion-title>\n\t\t{{'APPLY.apply' | translate}}\n\t</ion-title>\n</ion-header>\n\n<ion-content>\n\t<ion-grid class=\"settings\">\n\t\t<div *ngIf=\"!isStartApplication\">\n\t\t\t<ion-slides pager=\"true\" [options]=\"slidesOptions\">\n\t\t\t\t<ion-slide>\n\t\t\t\t\t<ion-card mode=\"ios\">\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col class=\"front-layer\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\n\t\t\t\t\t\t\t\t\t<path fill=\"#69bb7b\" fill-opacity=\"1\"\n\t\t\t\t\t\t\t\t\t\td=\"M0,128L48,160C96,192,192,256,288,261.3C384,267,480,213,576,176C672,139,768,117,864,106.7C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\">\n\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t<div class=\"mt-2 mb-3\">\n\t\t\t\t\t\t\t\t\t<img [src]=\"imgApplyBanner\" class=\"img-6 img-center\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"text-center pt-3 pl-3 pr-3 mb-2\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"m-0\">{{'APPLY.ad1' | translate}}</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide>\n\t\t\t\t\t<ion-card mode=\"ios\">\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\n\t\t\t\t\t\t\t\t\t<path fill=\"#69bb7b\" fill-opacity=\"1\"\n\t\t\t\t\t\t\t\t\t\td=\"M0,128L48,160C96,192,192,256,288,261.3C384,267,480,213,576,176C672,139,768,117,864,106.7C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\">\n\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t<div class=\"mt-2 mb-3\">\n\t\t\t\t\t\t\t\t\t<img [src]=\"imgApplyBanner\" class=\"img-6 img-center\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"text-center pt-3 pl-3 pr-3 mb-2\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"m-0\">{{'APPLY.ad1' | translate}}</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t\t<ion-button class=\"btn-info\" (click)=\"startApply()\">{{'APPLY.getStarted' | translate}}</ion-button>\n\t\t</div>\n\n\t\t<div *ngIf=\"isStartApplication\">\n\t\t\t<div class=\"section-title\">\n\t\t\t\t<h3>{{'APPLY.title' | translate}}</h3>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"houses\">\n\t\t\t\t<ion-row *ngFor=\"let house of houses\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-card mode=\"ios\">\n\t\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\t<ion-item class=\"history\">\n\t\t\t\t\t\t\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"imgHouseThumbnail\">\n\t\t\t\t\t\t\t\t\t</ion-thumbnail>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t\t\t\t\t<p>{{house.address}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"house.building_type == 'CD'\">{{'APPLY.cd' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"house.building_type == 'FL'\">{{'APPLY.fl' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"house.building_type == 'TO'\">{{'APPLY.to' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"house.building_type == 'TE'\">{{'APPLY.te' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"house.building_type == 'BS'\">{{'APPLY.bs' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"house.building_type == 'AS'\">{{'APPLY.as' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"house.building_type == 'OT'\">{{'APPLY.ot' | translate}}</p>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<div class=\"btn-upload-item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-upload ion-activatable\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"selectHouse(house)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect> {{'APPLY.selectButton' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</div>\n\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/apply/apply.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/apply/apply.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  apply works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/faq/faq.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/faq/faq.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\t<ion-title>\n\t\tFAQ\n\t</ion-title>\n</ion-header>\n\n<ion-content class=\"settings\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title\">\n\t\t\t\t\t<h3>FAQ</h3>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item mode=\"ios\" lines=\"none\" style=\"margin-top: 12px;\">\n\t\t\t\t\t<mat-accordion>\n\t\t\t\t\t\t<mat-expansion-panel *ngFor=\"let faq of faqs\">\n\t\t\t\t\t\t\t<mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n\t\t\t\t\t\t\t\t<mat-panel-title class=\"ion-text-justify text-bold\">\n\t\t\t\t\t\t\t\t\t{{faq.question}}\n\t\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t\t<p class=\"ion-text-justify text-light\">\n\t\t\t\t\t\t\t\t{{faq.answer}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</mat-accordion>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/guideline/guideline.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/guideline/guideline.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"ghg-green\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    Guideline\n  </ion-title>\n</ion-header>\n\n<ion-content class=\"settings\">\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3></h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/helpdesk/helpdesk.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/helpdesk/helpdesk.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    {{'HELPDESK.helpdesk'| translate}}\n  </ion-title>\n</ion-header>\n\n<ion-content class=\"settings\">\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'HELPDESK.title'| translate}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"ticketForm\">\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HELPDESK.comment'| translate}}</ion-label>\n            <ion-textarea placeholder=\"{{'HELPDESK.commentBox'| translate}}\" formControlName=\"question\">\n            </ion-textarea>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-button class=\"btn-green-lg mt-1\" (click)=\"submit()\">{{'HELPDESK.submit'| translate}}</ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let question of questions\">\n      <ion-col>\n        <ion-card>\n          <ion-card-header color=\"light\">\n            <ion-card-subtitle>\n              <p class=\"m-0\">{{question.date_submitted}}</p>\n            </ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-item class=\"ticket-list\">\n              <ion-text class=\"ion-text-wrap\">\n                <h5 style=\"color: #a9a9a9;\">{{'HELPDESK.question'| translate}}</h5>\n                <p>{{question.question}}</p>\n              </ion-text>\n            </ion-item>\n            \n            <div *ngFor=\"let answer of answers\">\n              <div *ngIf=\"question.id == answer.question_id\">\n                <ion-item lines=\"none\" class=\"ticket-list\">\n                  <ion-text class=\"ion-text-wrap\">\n                    <h5 style=\"color: #a9a9a9;\">{{'HELPDESK.reply'| translate}}</h5>\n                    <p>{{answer.answer}}</p>\n                  </ion-text>\n                </ion-item>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/history-view/history-view.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/history-view/history-view.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n      <!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    History\n  </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"settings\">\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>Application assessment detail</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form>\n          <ion-item mode=\"ios\">\n            <p>Energy</p>\n            <ion-label position=\"stacked\" mode=\"ios\">Initiative</ion-label>\n            <p>This is an initative done by me</p>\n          </ion-item>\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">Improvement</ion-label>\n            <p>This is an improvement done by me</p>\n          </ion-item>\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">Remarks by evaluator</ion-label>\n            <p>A good one</p>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form>\n          <ion-item mode=\"ios\">\n            <p>Transportation</p>\n            <ion-label position=\"stacked\" mode=\"ios\">Initiative</ion-label>\n            <p>This is an initative done by me</p>\n          </ion-item>\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">Improvement</ion-label>\n            <p>This is an improvement done by me</p>\n          </ion-item>\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">Remarks by evaluator</ion-label>\n            <p>A good one</p>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/history/history.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/history/history.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    {{'HISTORY.history' | translate}}\n  </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'HISTORY.title' | translate}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"!isGotHistory; else gotHistory\" class=\"error-section\">\n      <ion-img [src]=\"imgNotFound\"></ion-img>\n      <p>{{'HISTORY.noHistory' | translate}}</p>\n    </div>\n\n    <ng-template #gotHistory>\n      <ion-row>\n        <ion-col>\n          <ion-card *ngFor=\"let application of applications\" mode=\"ios\">\n            <ion-card-content>\n              <ion-item class=\"history\">\n                <ion-thumbnail slot=\"start\">\n                  <img [src]=\"imgHistoryThumbnail\">\n                </ion-thumbnail>\n                <ion-label class=\"ion-text-wrap\">\n                  <div *ngFor=\"let house of houses\">\n                    <p *ngIf=\"application.applied_house == house.id\">\n                      {{house.address}}, {{house.postcode}}, {{house.area}}\n                    </p>\n                  </div>\n                  \n                  <p>{{application.date_submitted}}</p>\n                  <p *ngIf=\"application.status == 'CM'\">\n                    {{'HOME.completed' | translate}}\n                  </p>\n                  <p *ngIf=\"application.status == 'CR'\">\n                    {{'HOME.created' | translate}}\n                  </p>\n                  <p *ngIf=\"application.status == 'IE'\">\n                    {{'HOME.inEvaluation' | translate}}\n                  </p>\n                  <p *ngIf=\"application.status == 'IP'\">\n                    {{'HOME.inProgress' | translate}}\n                  </p>\n                  <p *ngIf=\"application.status == 'PD'\">\n                    {{'HOME.paid' | translate}}\n                  </p>\n                  <p *ngIf=\"application.status == 'RJ'\">\n                    {{'HOME.rejected' | translate}}\n                  </p>\n                  <p *ngIf=\"application.status == 'SM'\">\n                    {{'HOME.submitted' | translate}}\n                  </p>\n                </ion-label>\n                <!--<div class=\"btn-upload-item\">\n                  <div class=\"btn-upload ion-activatable\">\n                    <button [routerLink]=\"['/applicant/history-view']\">\n                      <ion-ripple-effect></ion-ripple-effect> {{'HISTORY.viewButton' | translate}}\n                    </button>\n                  </div>\n                </div>-->\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/home/home.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/home/home.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"ghg-green\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    {{'HOME.home'| translate}}\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'HOME.welcome' | translate}}!</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card mode=\"ios\" [routerLink]=\"['/applicant/house']\" routerDirection=\"forward\">\n          <img src=\"assets/img/card/house.jpg\">\n          <ion-card-content>\n            <p class=\"text-center text-bold\">{{'HOME.house' | translate}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n      <ion-col>\n        <ion-card mode=\"ios\" [routerLink]=\"['/applicant/apply-start']\" routerDirection=\"forward\">\n          <img src=\"assets/img/card/form.jpg\">\n          <ion-card-content>\n            <p class=\"text-center text-bold\">{{'HOME.apply' | translate}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card mode=\"ios\" [routerLink]=\"['/applicant/history']\" routerDirection=\"forward\">\n          <img src=\"assets/img/card/bookshelf.jpg\">\n          <ion-card-content>\n            <p class=\"text-center text-bold\">{{'HOME.history' | translate}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card mode=\"ios\" [routerLink]=\"['/applicant/notification']\" routerDirection=\"forward\">\n          <img src=\"assets/img/card/notification.jpg\">\n          <ion-card-content>\n            <p class=\"text-center text-bold\">{{'HOME.notification' | translate}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'HOME.appStatus' | translate}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"!isGotApplication; else gotApplication\" class=\"error-home-section\">\n      <ion-img [src]=\"imgNotFound\"></ion-img>\n      <p>{{'HOME.noApplication' | translate}}</p>\n    </div>\n\n    <ng-template #gotApplication>\n      <ion-row *ngFor=\"let application of applications\">\n        <ion-col>\n          <ion-card mode=\"ios\">\n            <ion-card-content>\n              <ion-item lines=\"none\" *ngIf=\"application.status == 'CM'\">\n                <ion-label>\n                  <p>{{'HOME.submissionDate' | translate}}:</p>\n                  <h5>{{application.date_submitted}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-green\">{{'HOME.completed' | translate}}</ion-chip>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"application.status == 'CR'\">\n                <ion-label>\n                  <p>{{'HOME.submissionDate' | translate}}:</p>\n                  <h5>{{application.date_submitted}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-purple\">{{'HOME.created' | translate}}</ion-chip>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"application.status == 'IE'\">\n                <ion-label>\n                  <p>{{'HOME.submissionDate' | translate}}:</p>\n                  <h5>{{application.date_submitted}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-light-orange\">{{'HOME.inEvaluation' | translate}}</ion-chip>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"application.status == 'IP'\">\n                <ion-label>\n                  <p>{{'HOME.submissionDate' | translate}}:</p>\n                  <h5>{{application.date_submitted}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-orange\">{{'HOME.inProgress' | translate}}</ion-chip>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"application.status == 'PD'\">\n                <ion-label>\n                  <p>{{'HOME.submissionDate' | translate}}:</p>\n                  <h5>{{application.date_submitted}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-dark-green\">{{'HOME.paid' | translate}}</ion-chip>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"application.status == 'RJ'\">\n                <ion-label>\n                  <p>{{'HOME.submissionDate' | translate}}:</p>\n                  <h5>{{application.date_submitted}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-red\">{{'HOME.rejected' | translate}}</ion-chip>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"application.status == 'SM'\">\n                <ion-label>\n                  <p>{{'HOME.submissionDate' | translate}}:</p>\n                  <h5>{{application.date_submitted}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-light-orange\">{{'HOME.submitted' | translate}}</ion-chip>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/house-add-new/house-add-new.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/house-add-new/house-add-new.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    MyHome\n  </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"settings\">\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'HOUSEADD.register' | translate}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"houseForm\">\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.address' | translate}}*</ion-label>\n            <ion-textarea \n              clearInput \n              type=\"text\" \n              formControlName=\"address\"\n              placeholder=\"{{'HOUSEADD.example' | translate}}: No. 21, Jalan Margosa 18/2, Bandar Sri Damansara, 52200 Kuala Lumpur\"\n            >\n            </ion-textarea>\n          </ion-item>\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.postcode' | translate}}*</ion-label>\n            <ion-input \n              clearInput \n              type=\"number\"\n              formControlName=\"postcode\"\n              placeholder=\"{{'HOUSEADD.example' | translate}}: 47820\"\n            >\n            </ion-input>\n          </ion-item>\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.area' | translate}}*</ion-label>\n            <ion-select placeholder=\"{{'HOUSEADD.selectOne' | translate}}\" formControlName=\"area\">\n              <ion-select-option *ngFor=\"let area of areas\" value=\"{{area.value}}\">{{area.value}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          \n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.assessmentTaxAcc' | translate}}*</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\" \n              formControlName=\"assessment_tax_account\"\n              placeholder=\"{{'HOUSEADD.example' | translate}}: T10100020001000\"\n            >\n            </ion-input>\n          </ion-item>\n          \n          <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[0]\">\n            <ion-img class=\"text-center\" [src]=\"tempImageEncoded[0]\"></ion-img>\n          </ion-item>\n          \n          <ion-item mode=\"ios\" lines=\"none\">\n            <ion-row>\n              <ion-col size=\"auto\">\n                <div class=\"btn-upload-item\">\n                  <div class=\"btn-upload ion-activatable\">\n                    <button (click)=\"openUploadSheet(0)\">\n                      <ion-ripple-effect></ion-ripple-effect> {{'HOUSEADD.uploadTaxBill' | translate}}*\n                    </button>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.buildingType' | translate}}*</ion-label>\n            <ion-select placeholder=\"{{'HOUSEADD.selectOne' | translate}}\" formControlName=\"building_type\">\n              <ion-select-option *ngFor=\"let house of houses\" value=\"{{house.value}}\">{{house.text}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.stayingDuration' | translate}}*</ion-label>\n            <ion-row>\n              <ion-col>\n                <ion-input type=\"number\" placeholder=\"{{'HOUSEADD.years' | translate}}\" formControlName=\"staying_duration_years\"></ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-input type=\"number\" placeholder=\"{{'HOUSEADD.months' | translate}}\" formControlName=\"staying_duration_months\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <ion-item lines=\"inset\" class=\"ion-text-wrap\">\n            <ion-label class=\"ion-text-wrap\" position=\"stacked\" mode=\"ios\">{{'HOUSEADD.permanentOccupant' | translate}}*</ion-label>\n            <ion-input \n              clearInput \n              type=\"number\" \n              placeholder=\"2\"\n              formControlName=\"permanent_occupant\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.car' | translate}}*</ion-label>\n            <ion-select placeholder=\"{{'HOUSEADD.selectCars' | translate}}\" formControlName=\"vehicle_car\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"9\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{ 'HOUSEADD.motor' | translate}}*</ion-label>\n            <ion-select placeholder=\"{{'HOUSEADD.selectMotors' | translate}}\" formControlName=\"vehicle_motorcycle\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"9\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{ 'HOUSEADD.bicycle' | translate}}*</ion-label>\n            <ion-select placeholder=\"{{'HOUSEADD.selectBicycles' | translate}}\" formControlName=\"vehicle_bicycle\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"9\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{ 'HOUSEADD.otherVehicle' | translate}}*</ion-label>\n            <ion-select placeholder=\"{{'HOUSEADD.selectOthers' | translate}}\" formControlName=\"vehicle_other\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"9\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEADD.electricityBill1' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.electricityMonth1' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"{{'HOUSEADD.selectMonthYearBill' | translate}}\" formControlName=\"electricity_bill_1_month\" ></ion-datetime>\n            </ion-item>\n\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.electricityUsage1' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" placeholder=\"{{'HOUSEADD.example' | translate}}: 730 kWH\" formControlName=\"electricity_bill_1_usage\"></ion-input>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[1]\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[1]\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(1)\">\n                        <ion-ripple-effect></ion-ripple-effect>{{'HOUSEADD.electricityUpload1' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n          \n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEADD.electricityBill2' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.electricityMonth2' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"{{'HOUSEADD.selectMonthYearBill' | translate}}\" formControlName=\"electricity_bill_2_month\"></ion-datetime>\n            </ion-item>\n\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.electricityUsage2' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" placeholder=\"{{'HOUSEADD.example' | translate}}: 730 kWH\" formControlName=\"electricity_bill_2_usage\"></ion-input>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[2]\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[2]\"></ion-img>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(2)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEADD.electricityUpload2' | translate}}*\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEADD.electricityBill3' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.electricityMonth3' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"{{'HOUSEADD.selectMonthYearBill' | translate}}\" formControlName=\"electricity_bill_3_month\"></ion-datetime>\n            </ion-item>\n\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.electricityUsage3' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" placeholder=\"{{'HOUSEADD.example' | translate}}: 730 kWH\" formControlName=\"electricity_bill_3_usage\"></ion-input>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[3]\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[3]\"></ion-img>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(3)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEADD.electricityUpload3' | translate}}*\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEADD.waterBill1' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.waterMonth1' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"{{'HOUSEADD.selectMonthYearBill' | translate}}\" formControlName=\"water_bill_1_month\"></ion-datetime>\n            </ion-item>\n\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.waterUsage1' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" placeholder=\"{{'HOUSEADD.example' | translate}}: 20 m3\" formControlName=\"water_bill_1_usage\"></ion-input>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[4]\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[4]\"></ion-img>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(4)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEADD.waterUpload1' | translate}}*\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEADD.waterBill2' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.waterMonth2' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"{{'HOUSEADD.selectMonthYearBill' | translate}}\" formControlName=\"water_bill_2_month\"></ion-datetime>\n            </ion-item>\n\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.waterUsage2' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" placeholder=\"{{'HOUSEADD.example' | translate}}: 20 m3\" formControlName=\"water_bill_2_usage\"></ion-input>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[5]\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[5]\"></ion-img>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(5)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEADD.waterUpload2' | translate}}*\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEADD.waterBill3' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.waterMonth3' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"{{'HOUSEADD.selectMonthYearBill' | translate}}\" formControlName=\"water_bill_3_month\"></ion-datetime>\n            </ion-item>\n\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEADD.waterUsage3' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" placeholder=\"{{'HOUSEADD.example' | translate}}: 20 m3\" formControlName=\"water_bill_3_usage\"></ion-input>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[6]\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[6]\"></ion-img>\n            </ion-item>\n\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(6)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEADD.waterUpload3' | translate}}*\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n          \n        </form>\n        <ion-item lines=\"none\">\n          <ion-button \n            class=\"btn-green-lg mt-1\" \n            [disabled]=\"houseForm.status == 'INVALID'\" \n            (click)=\"addNewHouse()\">\n              {{'HOUSEADD.add' | translate}}\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/house-detail/house-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/house-detail/house-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n      <!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    MyHome\n  </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"settings\">\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'HOUSEDETAIL.detail' | translate}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"houseCredentials\">\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.address' | translate}}*</ion-label>\n            <ion-textarea \n              clearInput \n              type=\"text\"\n              [value]=\"tempHouse.address\"\n              formControlName=\"address\"\n            >\n            </ion-textarea>\n          </ion-item>\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.postcode' | translate}}*</ion-label>\n            <ion-input \n              clearInput \n              type=\"number\"\n              [value]=\"tempHouse.postcode\"\n              formControlName=\"postcode\"\n            >\n            </ion-input>\n          </ion-item>\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.area' | translate}}*</ion-label>\n            <ion-select placeholder=\"{{'HOUSEADD.selectOne' | translate}}\" [value]=\"tempHouse.area\" formControlName=\"area\">\n              <ion-select-option *ngFor=\"let area of areas\" value=\"{{area.value}}\">{{area.value}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'HOUSEDETAIL.assessmentTaxAcc' | translate}}*</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"tempHouse.assessment_tax_account\"\n              formControlName=\"assessment_tax_account\"\n            >\n            </ion-input>\n          </ion-item>\n          <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"!tempImageEncoded[0] && tempHouse.assessment_tax_doc\">\n            <ion-img class=\"text-center\" [src]=\"tempHouse.assessment_tax_doc\"></ion-img>\n          </ion-item>\n          <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[0] && !tempHouse.assessment_tax_doc\">\n            <ion-img class=\"text-center\" [src]=\"tempImageEncoded[0]\"></ion-img>\n          </ion-item>\n          <ion-item mode=\"ios\" lines=\"none\">\n            <ion-row>\n              <ion-col size=\"auto\">\n                <div class=\"btn-upload-item\">\n                  <div class=\"btn-upload ion-activatable\">\n                    <button (click)=\"openUploadSheet(0)\">\n                      <ion-ripple-effect></ion-ripple-effect> {{'HOUSEDETAIL.uploadTaxBill' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.buildingType' | translate}}*</ion-label>\n            <ion-select placeholder=\"{{'HOUSEADD.selectOne' | translate}}\" [value]=\"tempHouse.building_type\" formControlName=\"building_type\">\n              <ion-select-option mode=\"ios\" *ngFor=\"let house of houses\" value=\"{{house.value}}\">{{house.text}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.stayingDuration' | translate}}*</ion-label>\n            <ion-row>\n              <ion-col>\n                <ion-input type=\"number\" placeholder=\"Year(s)\" [value]=\"tempHouse.staying_duration_years\" formControlName=\"staying_duration_years\"></ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-input type=\"number\" placeholder=\"Month(s)\" [value]=\"tempHouse.staying_duration_months\" formControlName=\"staying_duration_months\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item lines=\"inset\" class=\"ion-text-wrap\">\n            <ion-label class=\"ion-text-wrap\" position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.permanentOccupant' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"number\" \n              placeholder=\"Eg: 2\"\n              [value]=\"tempHouse.permanent_occupant\"\n              formControlName=\"permanent_occupant\"\n            >\n            </ion-input>\n          </ion-item>\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.car' | translate}}*</ion-label>\n            <ion-select placeholder=\"Select number of car(s)\" [placeholder]=\"tempHouse.vehicle_car\" formControlName=\"vehicle_car\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"9\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.motor' | translate}}*</ion-label>\n            <ion-select placeholder=\"Select number of motorcycle(s)\" [placeholder]=\"tempHouse.vehicle_motorcycle\" formControlName=\"vehicle_motorcycle\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.bicycle' | translate}}*</ion-label>\n            <ion-select placeholder=\"Select number of bicycle(s)\" [placeholder]=\"tempHouse.vehicle_bicycle\" formControlName=\"vehicle_bicycle\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item lines=\"inset\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.otherVehicle' | translate}}*</ion-label>\n            <ion-select placeholder=\"Select number of other vehicle(s)\" [placeholder]=\"tempHouse.vehicle_other\" formControlName=\"vehicle_other\">\n              <ion-select-option value=\"0\">0</ion-select-option>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n              <ion-select-option value=\"5\">5</ion-select-option>\n              <ion-select-option value=\"6\">6</ion-select-option>\n              <ion-select-option value=\"7\">7</ion-select-option>\n              <ion-select-option value=\"8\">8</ion-select-option>\n              <ion-select-option value=\"9\">9</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEDETAIL.electricityBill1' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.electricityMonth1' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select month and year of bill\" [value]=\"tempHouse.electricity_bill_1_month\" formControlName=\"electricity_bill_1_month\"></ion-datetime>\n            </ion-item>\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.electricityUsage1' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" [value]=\"tempHouse.electricity_bill_1_usage\" formControlName=\"electricity_bill_1_usage\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"!tempImageEncoded[1] && tempHouse.electricity_bill_1_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempHouse.electricity_bill_1_doc\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[1] && !tempHouse.electricity_bill_1_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[1]\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(1)\">\n                        <ion-ripple-effect></ion-ripple-effect>{{'HOUSEDETAIL.electricityUpload1' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n          \n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEDETAIL.electricityBill2' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.electricityMonth2' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select month and year of bill\" [value]=\"tempHouse.electricity_bill_2_month\" formControlName=\"electricity_bill_2_month\"></ion-datetime>\n            </ion-item>\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.electricityUsage2' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" [value]=\"tempHouse.electricity_bill_2_usage\" formControlName=\"electricity_bill_2_usage\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"!tempImageEncoded[2] && tempHouse.electricity_bill_2_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempHouse.electricity_bill_2_doc\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[2] && !tempHouse.electricity_bill_2_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[2]\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(2)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEDETAIL.electricityUpload2' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEDETAIL.electricityBill3' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.electricityMonth3' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select month and year of bill\" [value]=\"tempHouse.electricity_bill_3_month\" formControlName=\"electricity_bill_3_month\"></ion-datetime>\n            </ion-item>\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.electricityUsage3' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" [value]=\"tempHouse.electricity_bill_3_usage\" formControlName=\"electricity_bill_3_usage\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"!tempImageEncoded[3] && tempHouse.electricity_bill_3_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempHouse.electricity_bill_3_doc\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[3] && !tempHouse.electricity_bill_3_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[3]\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(3)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEDETAIL.electricityUpload3' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEDETAIL.waterBill1' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.waterMonth1' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select month and year of bill\" [value]=\"tempHouse.water_bill_1_month\" formControlName=\"water_bill_1_month\"></ion-datetime>\n            </ion-item>\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.waterUsage1' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" [value]=\"tempHouse.water_bill_1_usage\" formControlName=\"water_bill_1_usage\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"!tempImageEncoded[4] && tempHouse.water_bill_1_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempHouse.water_bill_1_doc\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[4] && !tempHouse.water_bill_1_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[4]\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(4)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEDETAIL.waterUpload1' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEDETAIL.waterBill2' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.waterMonth2' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select month and year of bill\" [value]=\"tempHouse.water_bill_2_month\" formControlName=\"water_bill_2_month\"></ion-datetime>\n            </ion-item>\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.waterUsage2' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" [value]=\"tempHouse.water_bill_2_usage\" formControlName=\"water_bill_2_usage\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"!tempImageEncoded[5] && tempHouse.water_bill_2_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempHouse.water_bill_2_doc\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[5] && !tempHouse.water_bill_2_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[5]\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(5)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEDETAIL.waterUpload2' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider>\n              <ion-label>{{'HOUSEDETAIL.waterBill3' | translate}}</ion-label>\n            </ion-item-divider>\n          \n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.waterMonth3' | translate}}*</ion-label>\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select month and year of bill\" [value]=\"tempHouse.water_bill_3_month\" formControlName=\"water_bill_3_month\"></ion-datetime>\n            </ion-item>\n            <ion-item lines=\"inset\">\n              <ion-label position=\"stacked\" mode=\"ios\">{{'HOUSEDETAIL.waterUsage3' | translate}}*</ion-label>\n              <ion-input class=\"bill-input\" type=\"number\" [value]=\"tempHouse.water_bill_3_usage\" formControlName=\"water_bill_3_usage\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"!tempImageEncoded[6] && tempHouse.water_bill_3_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempHouse.water_bill_3_doc\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded[6] && !tempHouse.water_bill_3_doc\">\n              <ion-img class=\"text-center\" [src]=\"tempImageEncoded[6]\"></ion-img>\n            </ion-item>\n            <ion-item mode=\"ios\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <div class=\"btn-upload-item\">\n                    <div class=\"btn-upload ion-activatable\">\n                      <button (click)=\"openUploadSheet(6)\">\n                        <ion-ripple-effect></ion-ripple-effect> {{'HOUSEDETAIL.waterUpload3' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-item-group>\n\n        </form>\n        <ion-item lines=\"none\">\n          <ion-button class=\"btn-green-lg mt-1\" (click)=\"updateHouse()\">{{'HOUSEDETAIL.update' | translate}}</ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/house/house.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/house/house.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    MyHome\n  </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <ion-row>\n            <ion-col>\n              <h3>{{'HOUSE.registeredList' | translate}}</h3>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"!isGotHouse; else gotHouse\" class=\"error-section\">\n      <ion-img [src]=\"imgNotFound\"></ion-img>\n      <p>{{'HOUSE.noHouse' | translate}}</p>\n    </div>\n    <ng-template #gotHouse>\n      <ion-row *ngFor=\"let house of houses\">\n        <ion-col>\n          <ion-card mode=\"ios\">\n            <ion-card-content>\n              <ion-item class=\"history\">\n                <ion-thumbnail slot=\"start\">\n                  <img [src]=\"imgHouseThumbnail\">\n                </ion-thumbnail>\n                <ion-label class=\"ion-text-wrap\">\n                  <p>\n                    {{house.address}}<span *ngIf=\"house.postcode\">, {{house.postcode}}</span><span *ngIf=\"house.area\">{{house.area}}</span>\n                  </p>\n                  <p *ngIf=\"house.building_type == 'CD'\">{{'HOUSE.cd' | translate}}</p>\n                  <p *ngIf=\"house.building_type == 'FL'\">{{'HOUSE.fl' | translate}}</p>\n                  <p *ngIf=\"house.building_type == 'TO'\">{{'HOUSE.to' | translate}}</p>\n                  <p *ngIf=\"house.building_type == 'TE'\">{{'HOUSE.te' | translate}}</p>\n                  <p *ngIf=\"house.building_type == 'BS'\">{{'HOUSE.bs' | translate}}</p>\n                  <p *ngIf=\"house.building_type == 'AS'\">{{'HOUSE.as' | translate}}</p>\n                  <p *ngIf=\"house.building_type == 'OT'\">{{'HOUSE.ot' | translate}}</p>\n                </ion-label>\n                <div class=\"btn-upload-item\">\n                  <div class=\"btn-upload ion-activatable\">\n                    <button (click)=\"viewHouseDetail(house)\">\n                      <ion-ripple-effect></ion-ripple-effect> {{'HOUSE.view' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n    \n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addNewHouse()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/map/map.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/map/map.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n      <!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <div \n    class=\"leaflet-map\"\n    leaflet \n    [leafletOptions]=\"options\"\n    (leafletMapReady)=\"onMapReady($event)\">\n  </div>\n  <ion-grid class=\"settings\">\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-label mode=\"ios\" position=\"stacked\">Latitude</ion-label>\n          <div *ngIf=\"markerCoordinates\">\n            <p>{{markerCoordinates.lat}}</p>\n          </div>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-label mode=\"ios\" position=\"stacked\">Longitude</ion-label>\n          <div *ngIf=\"markerCoordinates\">\n            <p>{{markerCoordinates.lng}}</p>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-button class=\"btn-green-lg mt-1\">Confirm</ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/notification/notification.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/notification/notification.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    {{ 'NOTIFICATION.notification' | translate}}\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!isGotNotification; else gotNotification\" class=\"error-section\">\n    <ion-img [src]=\"imgNotFound\"></ion-img>\n    <p>{{ 'NOTIFICATION.noNotification' | translate}}</p>\n  </div>\n  <ng-template #gotNotification>\n    <ion-row>\n      <ion-col>\n        <ion-card mode=\"ios\">\n          <ion-card-content>\n            <ion-item class=\"history\">\n              <ion-label class=\"ion-text-wrap\">\n                <p>#818128</p>\n                <p>It has been 7 days, your application is still in process</p>\n              </ion-label>\n              <ion-thumbnail slot=\"end\">\n                <img [src]=\"imgNotiThumbnail\">\n              </ion-thumbnail>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ng-template>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/applicant/profile/profile.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/applicant/profile/profile.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    {{'PROFILE.profile' | translate}}\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"settings\">\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'PROFILE.editInfo' | translate}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"userForm\">\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'PROFILE.fullName' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.full_name\"\n              formControlName=\"full_name\"\n              placeholder=\"{{'PROFILE.fullNamePlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.newNRIC' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.new_nric\"\n              formControlName=\"new_nric\"\n              placeholder=\"{{'PROFILE.newNRICPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.oldNRIC' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.old_nric\"\n              formControlName=\"old_nric\"\n              placeholder=\"{{'PROFILE.oldNRICPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.occupation' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.occupation\"\n              \n              placeholder=\"{{'PROFILE.occupationPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n          <!--formControlName=\"occupation\"-->\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.tel' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.tel\"\n              formControlName=\"tel\"\n              placeholder=\"{{'PROFILE.telPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.phone' | translate}} *</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.phone\"\n              formControlName=\"phone\"\n              placeholder=\"{{'PROFILE.phonePlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.email' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.email\"\n              formControlName=\"email\"\n              placeholder=\"{{'PROFILE.emailPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">{{'PROFILE.relationship' | translate}}</ion-label>\n            <ion-select [value]=\"user.relationship_type\" formControlName=\"relationship_type\" placeholder=\"Select one\">\n              <ion-select-option *ngFor=\"let type of relationshipTypes\" value=\"{{type.value}}\">{{type.text}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item mode=\"ios\" lines=\"none\" *ngIf=\"tempImageEncoded\">\n            <ion-img class=\"text-center\" [src]=\"tempImageEncoded\"></ion-img>\n          </ion-item>\n\n          <ion-item mode=\"ios\" lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <div class=\"btn-upload-item\">\n                  <div class=\"btn-upload ion-activatable\">\n                    <button (click)=\"openUploadSheet()\">\n                      <ion-ripple-effect></ion-ripple-effect> {{'PROFILE.uploadNRIC' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </form>\n\n        <ion-item lines=\"none\">\n          <ion-button class=\"btn-green-lg mt-1\" (click)=\"update()\">{{'PROFILE.update' | translate}}</ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/core/applicant/applicant.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/applicant/applicant.module.ts ***!
  \****************************************************/
/*! exports provided: ApplicantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantModule", function() { return ApplicantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _applicant_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./applicant.routing */ "./src/app/core/applicant/applicant.routing.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/core/applicant/faq/faq.component.ts");
/* harmony import */ var _guideline_guideline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guideline/guideline.component */ "./src/app/core/applicant/guideline/guideline.component.ts");
/* harmony import */ var _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpdesk/helpdesk.component */ "./src/app/core/applicant/helpdesk/helpdesk.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./history/history.component */ "./src/app/core/applicant/history/history.component.ts");
/* harmony import */ var _history_view_history_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./history-view/history-view.component */ "./src/app/core/applicant/history-view/history-view.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/applicant/home/home.component.ts");
/* harmony import */ var _house_add_new_house_add_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./house-add-new/house-add-new.component */ "./src/app/core/applicant/house-add-new/house-add-new.component.ts");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./house/house.component */ "./src/app/core/applicant/house/house.component.ts");
/* harmony import */ var _house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./house-detail/house-detail.component */ "./src/app/core/applicant/house-detail/house-detail.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./map/map.component */ "./src/app/core/applicant/map/map.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/core/applicant/notification/notification.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/applicant/profile/profile.component.ts");
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./apply/apply.component */ "./src/app/core/applicant/apply/apply.component.ts");
/* harmony import */ var _apply_start_apply_start_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./apply-start/apply-start.component */ "./src/app/core/applicant/apply-start/apply-start.component.ts");
/* harmony import */ var _apply_form_apply_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./apply-form/apply-form.component */ "./src/app/core/applicant/apply-form/apply-form.component.ts");



























let ApplicantModule = class ApplicantModule {
};
ApplicantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _faq_faq_component__WEBPACK_IMPORTED_MODULE_12__["FaqComponent"],
            _guideline_guideline_component__WEBPACK_IMPORTED_MODULE_13__["GuidelineComponent"],
            _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_14__["HelpdeskComponent"],
            _history_history_component__WEBPACK_IMPORTED_MODULE_15__["HistoryComponent"],
            _history_view_history_view_component__WEBPACK_IMPORTED_MODULE_16__["HistoryViewComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
            _house_add_new_house_add_new_component__WEBPACK_IMPORTED_MODULE_18__["HouseAddNewComponent"],
            _house_house_component__WEBPACK_IMPORTED_MODULE_19__["HouseComponent"],
            _house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_20__["HouseDetailComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_21__["MapComponent"],
            _notification_notification_component__WEBPACK_IMPORTED_MODULE_22__["NotificationComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"],
            _apply_apply_component__WEBPACK_IMPORTED_MODULE_24__["ApplyComponent"],
            _apply_start_apply_start_component__WEBPACK_IMPORTED_MODULE_25__["ApplyStartComponent"],
            _apply_form_apply_form_component__WEBPACK_IMPORTED_MODULE_26__["ApplyFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(_applicant_routing__WEBPACK_IMPORTED_MODULE_11__["ApplicantRoutes"]),
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild()
        ]
    })
], ApplicantModule);



/***/ }),

/***/ "./src/app/core/applicant/applicant.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/applicant/applicant.routing.ts ***!
  \*****************************************************/
/*! exports provided: ApplicantRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantRoutes", function() { return ApplicantRoutes; });
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/core/applicant/faq/faq.component.ts");
/* harmony import */ var _guideline_guideline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guideline/guideline.component */ "./src/app/core/applicant/guideline/guideline.component.ts");
/* harmony import */ var _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpdesk/helpdesk.component */ "./src/app/core/applicant/helpdesk/helpdesk.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history/history.component */ "./src/app/core/applicant/history/history.component.ts");
/* harmony import */ var _history_view_history_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-view/history-view.component */ "./src/app/core/applicant/history-view/history-view.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/applicant/home/home.component.ts");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./house/house.component */ "./src/app/core/applicant/house/house.component.ts");
/* harmony import */ var _house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./house-detail/house-detail.component */ "./src/app/core/applicant/house-detail/house-detail.component.ts");
/* harmony import */ var _house_add_new_house_add_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./house-add-new/house-add-new.component */ "./src/app/core/applicant/house-add-new/house-add-new.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map.component */ "./src/app/core/applicant/map/map.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/core/applicant/notification/notification.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/applicant/profile/profile.component.ts");
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apply/apply.component */ "./src/app/core/applicant/apply/apply.component.ts");
/* harmony import */ var _apply_start_apply_start_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apply-start/apply-start.component */ "./src/app/core/applicant/apply-start/apply-start.component.ts");
/* harmony import */ var _apply_form_apply_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./apply-form/apply-form.component */ "./src/app/core/applicant/apply-form/apply-form.component.ts");















const ApplicantRoutes = [
    {
        path: '',
        children: [
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_0__["FaqComponent"]
            },
            {
                path: 'guideline',
                component: _guideline_guideline_component__WEBPACK_IMPORTED_MODULE_1__["GuidelineComponent"]
            },
            {
                path: 'helpdesk',
                component: _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_2__["HelpdeskComponent"]
            },
            {
                path: 'history',
                component: _history_history_component__WEBPACK_IMPORTED_MODULE_3__["HistoryComponent"]
            },
            {
                path: 'history-view',
                component: _history_view_history_view_component__WEBPACK_IMPORTED_MODULE_4__["HistoryViewComponent"]
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            },
            {
                path: 'house',
                component: _house_house_component__WEBPACK_IMPORTED_MODULE_6__["HouseComponent"]
            },
            {
                path: 'house-detail',
                component: _house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_7__["HouseDetailComponent"]
            },
            {
                path: 'house-add-new',
                component: _house_add_new_house_add_new_component__WEBPACK_IMPORTED_MODULE_8__["HouseAddNewComponent"]
            },
            {
                path: 'map-locate',
                component: _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"]
            },
            {
                path: 'notification',
                component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"]
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"]
            },
            {
                path: 'apply',
                component: _apply_apply_component__WEBPACK_IMPORTED_MODULE_12__["ApplyComponent"]
            },
            {
                path: 'apply-start',
                component: _apply_start_apply_start_component__WEBPACK_IMPORTED_MODULE_13__["ApplyStartComponent"]
            },
            {
                path: 'apply-form',
                component: _apply_form_apply_form_component__WEBPACK_IMPORTED_MODULE_14__["ApplyFormComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/core/applicant/apply-form/apply-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/core/applicant/apply-form/apply-form.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2FwcGx5LWZvcm0vYXBwbHktZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/applicant/apply-form/apply-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/applicant/apply-form/apply-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ApplyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyFormComponent", function() { return ApplyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/application-assessments/application-assessments.service */ "./src/app/shared/services/application-assessments/application-assessments.service.ts");
/* harmony import */ var src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/assessment-aspects/assessment-aspects.service */ "./src/app/shared/services/assessment-aspects/assessment-aspects.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");













let ApplyFormComponent = class ApplyFormComponent {
    constructor(authService, applicationService, applicationAssessmentService, assessmentAspectService, activatedRoute, actionSheetController, alertController, toastController, base64, router, formBuilder, camera, translate) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.applicationAssessmentService = applicationAssessmentService;
        this.assessmentAspectService = assessmentAspectService;
        this.activatedRoute = activatedRoute;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.base64 = base64;
        this.router = router;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.translate = translate;
        this.applicationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            date_submitted: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            applicant: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            applied_house: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
        this.tempImageData = [];
        this.tempImageEncoded = [];
        this.tempAssessmentAspects = [];
        this.energySaving = 0;
        this.consumptionElectricity = 0;
        this.consumptionWater = 0;
        this.tempSelectedHouse = this.router.getCurrentNavigation().extras;
        this.tempAssessmentAspects = this.assessmentAspectService.retrievedAssessmentAspects;
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            form: this.formBuilder.array([this.initAssessment()])
        });
        this.applicationForm.value.applicant = this.authService.userID;
        this.applicationForm.value.applied_house = this.tempSelectedHouse.id;
        this.applicationForm.value.date_submitted = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format("YYYY-MM-DD");
        this.calculateConsumption();
    }
    // Dynamic form
    initAssessment() {
        return this.formBuilder.group({
            application: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            assessment_aspect: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            supporting_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            total_led: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            total_lamp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
    }
    addAssessment() {
        this.form = this.formGroup.get('form');
        this.form.push(this.initAssessment());
        console.log(this.form.value);
    }
    removeAssessment(ind) {
        this.form.removeAt(ind);
    }
    openUploadSheet(formNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.translate.instant('APPLYFORM.uploadSheetHeader'),
                buttons: [
                    {
                        text: this.translate.instant('APPLYFORM.uploadSheetCamera'),
                        role: 'destructive',
                        icon: 'camera',
                        handler: () => {
                            console.log('Camera opened');
                            this.openCamera(formNumber);
                        }
                    },
                    {
                        text: this.translate.instant('APPLYFORM.uploadSheetGallery'),
                        icon: 'images',
                        handler: () => {
                            console.log('Gallery opened');
                            this.openGallery(formNumber);
                        }
                    },
                    {
                        text: this.translate.instant('APPLYFORM.cancelButton'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openCamera(formNumber) {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.tempImageData[formNumber] = imageData;
            //this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
            this.encodeFile64(formNumber);
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    openGallery(formNumber) {
        let cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 70,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then((file_uri) => {
            this.tempImageData[formNumber] = file_uri;
            this.encodeFile64(formNumber);
        }, (err) => {
            console.log(err);
        });
        /**/
    }
    encodeFile64(formNumber) {
        this.base64.encodeFile(this.tempImageData[formNumber]).then((base64File) => {
            this.tempImageEncoded[formNumber] = base64File;
            this.formGroup.value.form[formNumber].supporting_doc = this.tempImageEncoded[formNumber];
            console.log(this.tempImageEncoded[formNumber]);
        }, (err) => {
            console.log(err);
        });
    }
    submitApplication() {
        this.applicationForm.value.date_submitted = moment__WEBPACK_IMPORTED_MODULE_11__().format('YYYY-MM-DD');
        this.applicationService.create(this.applicationForm.value).subscribe((data) => {
            this.tempApplication = data;
            //console.log('> ', this.tempApplication)
        }, () => {
            this.unsuccessfulToast();
        }, () => {
            this.submitAssessment();
        });
    }
    submitAssessment() {
        console.log(this.formGroup);
        this.formGroup.value.form.forEach((singleForm, ind, arr) => {
            //element.supporting_doc = this.imageSrc[calc]
            singleForm.application = this.tempApplication.id;
            console.log(singleForm);
            this.applicationAssessmentService.create(singleForm).subscribe(() => {
                //this.presentToast()
                this.applicationAssessmentService.get().subscribe();
            }, () => {
                this.unsuccessfulToast();
            }, () => {
                this.successfulToast();
            });
            if (ind === arr.length - 1) {
                this.successfulToast();
                this.formGroup.reset();
                this.applicationForm.reset();
                this.router.navigate(['/applicant/home']);
            }
        });
    }
    confirmationAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant('APPLYFORM.confirmHeader'),
                message: this.translate.instant('APPLYFORM.confirmMessage'),
                buttons: [
                    {
                        text: this.translate.instant('APPLYFORM.cancelButton'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: this.translate.instant('APPLYFORM.confirmButton'),
                        handler: () => {
                            this.submitApplication();
                            //this.router.navigate(['/applicant/house-add-new'])
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    successfulToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.translate.instant('APPLYFORM.successMessage'),
                position: 'top',
                duration: 3000,
                color: 'ghg-green'
            });
            toast.present();
        });
    }
    unsuccessfulToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.translate.instant('APPLYFORM.unsuccessMessage'),
                position: 'top',
                duration: 3000,
                color: 'ghg-green'
            });
            toast.present();
        });
    }
    calculateA3(eventIndex) {
        console.log('led ', this.formGroup.value.form[eventIndex].total_led);
        console.log('lamp ', this.formGroup.value.form[eventIndex].total_lamp);
        this.energySaving = this.formGroup.value.form[eventIndex].total_led / (this.formGroup.value.form[eventIndex].total_lamp + this.formGroup.value.form[eventIndex].total_led) * 100;
        console.log(this.energySaving);
    }
    calculateConsumption() {
        let averagelectricity = (this.tempSelectedHouse.electricity_bill_1_usage + this.tempSelectedHouse.electricity_bill_2_usage + this.tempSelectedHouse.electricity_bill_3_usage) / 3;
        let averageWater = (this.tempSelectedHouse.water_bill_1_usage + this.tempSelectedHouse.water_bill_2_usage + this.tempSelectedHouse.water_bill_3_usage) / 3;
        console.log('average water ', averageWater);
        console.log('permanent occupant ', this.tempSelectedHouse.permanent_occupant);
        this.consumptionElectricity = (averagelectricity / this.tempSelectedHouse.permanent_occupant);
        this.consumptionWater = (averageWater * 1000) / (this.tempSelectedHouse.permanent_occupant * 30);
    }
};
ApplyFormComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationsService"] },
    { type: src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationAssessmentsService"] },
    { type: src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentAspectsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__["Base64"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
];
ApplyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apply-form',
        template: __webpack_require__(/*! raw-loader!./apply-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/apply-form/apply-form.component.html"),
        styles: [__webpack_require__(/*! ./apply-form.component.scss */ "./src/app/core/applicant/apply-form/apply-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationsService"],
        src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationAssessmentsService"],
        src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentAspectsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__["Base64"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
], ApplyFormComponent);



/***/ }),

/***/ "./src/app/core/applicant/apply-start/apply-start.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/core/applicant/apply-start/apply-start.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  --background: #66bb6a;\n  --color: #ffffff;\n  --border-radius: 0.8rem !important;\n  -webkit-margin-end: 16px;\n          margin-inline-end: 16px;\n  -webkit-margin-start: 16px;\n          margin-inline-start: 16px;\n  text-transform: none;\n  text-align: center;\n  width: calc(100% - 32px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2NvcmUvYXBwbGljYW50L2FwcGx5LXN0YXJ0L2FwcGx5LXN0YXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2FwcGxpY2FudC9hcHBseS1zdGFydC9hcHBseS1zdGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2FwcGxpY2FudC9hcHBseS1zdGFydC9hcHBseS1zdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5mbyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjZiYjZhO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTZweDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgXG59IiwiLmJ0bi1pbmZvIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjZiYjZhO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDAuOHJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4taW5saW5lLWVuZDogMTZweDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/applicant/apply-start/apply-start.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/applicant/apply-start/apply-start.component.ts ***!
  \*********************************************************************/
/*! exports provided: ApplyStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyStartComponent", function() { return ApplyStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let ApplyStartComponent = class ApplyStartComponent {
    constructor(houseService, alertCtrl, router, translate) {
        this.houseService = houseService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.translate = translate;
        // Image
        this.imgApplyBanner = 'assets/icon/green-city.svg';
        this.imgHouseThumbnail = 'assets/icon/house.svg';
        // Check
        this.isStartApplication = false;
        this.isApplied = false;
        // Slider
        this.slidesOptions = {
            initialSlide: 0,
            speed: 400
        };
        this.houses = this.houseService.housesFiltered;
    }
    ngOnInit() {
        // console.log(this.houses)
    }
    selectHouse(house) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.translate.instant('APPLY.confirmHeader'),
                message: this.translate.instant('APPLY.confirmMessage'),
                buttons: [
                    {
                        text: this.translate.instant('APPLY.confirmCancelButton'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: this.translate.instant('APPLY.confirmButton'),
                        handler: () => {
                            console.log('house: ', house);
                            this.router.navigate(['/applicant/apply-form'], house);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    startApply() {
        this.isStartApplication = true;
    }
};
ApplyStartComponent.ctorParameters = () => [
    { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_2__["HousesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
ApplyStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apply-start',
        template: __webpack_require__(/*! raw-loader!./apply-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/apply-start/apply-start.component.html"),
        styles: [__webpack_require__(/*! ./apply-start.component.scss */ "./src/app/core/applicant/apply-start/apply-start.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_2__["HousesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], ApplyStartComponent);



/***/ }),

/***/ "./src/app/core/applicant/apply/apply.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/applicant/apply/apply.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2FwcGx5L2FwcGx5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/applicant/apply/apply.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/applicant/apply/apply.component.ts ***!
  \*********************************************************/
/*! exports provided: ApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyComponent", function() { return ApplyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApplyComponent = class ApplyComponent {
    constructor() { }
    ngOnInit() { }
};
ApplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apply',
        template: __webpack_require__(/*! raw-loader!./apply.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/apply/apply.component.html"),
        styles: [__webpack_require__(/*! ./apply.component.scss */ "./src/app/core/applicant/apply/apply.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ApplyComponent);



/***/ }),

/***/ "./src/app/core/applicant/faq/faq.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/applicant/faq/faq.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-accordian {\n  border-radius: 0.8rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2NvcmUvYXBwbGljYW50L2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9hcHBsaWNhbnQvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYWNjb3JkaWFuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW0gIWltcG9ydGFudDtcbn0iLCIubWF0LWFjY29yZGlhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/applicant/faq/faq.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/applicant/faq/faq.component.ts ***!
  \*****************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_faqs_faqs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/faqs/faqs.service */ "./src/app/shared/services/faqs/faqs.service.ts");



let FaqComponent = class FaqComponent {
    constructor(faqService) {
        this.faqService = faqService;
        // Expansion
        this.panelOpenState = false;
        this.faqs = this.faqService.faqs;
    }
    ngOnInit() { }
};
FaqComponent.ctorParameters = () => [
    { type: src_app_shared_services_faqs_faqs_service__WEBPACK_IMPORTED_MODULE_2__["FaqsService"] }
];
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/faq/faq.component.html"),
        styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/core/applicant/faq/faq.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_faqs_faqs_service__WEBPACK_IMPORTED_MODULE_2__["FaqsService"]])
], FaqComponent);



/***/ }),

/***/ "./src/app/core/applicant/guideline/guideline.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/applicant/guideline/guideline.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2d1aWRlbGluZS9ndWlkZWxpbmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/applicant/guideline/guideline.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/applicant/guideline/guideline.component.ts ***!
  \*****************************************************************/
/*! exports provided: GuidelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelineComponent", function() { return GuidelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GuidelineComponent = class GuidelineComponent {
    constructor() { }
    ngOnInit() { }
};
GuidelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guideline',
        template: __webpack_require__(/*! raw-loader!./guideline.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/guideline/guideline.component.html"),
        styles: [__webpack_require__(/*! ./guideline.component.scss */ "./src/app/core/applicant/guideline/guideline.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GuidelineComponent);



/***/ }),

/***/ "./src/app/core/applicant/helpdesk/helpdesk.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/applicant/helpdesk/helpdesk.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ticket-list {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 1rem;\n  --padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2NvcmUvYXBwbGljYW50L2hlbHBkZXNrL2hlbHBkZXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2FwcGxpY2FudC9oZWxwZGVzay9oZWxwZGVzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9hcHBsaWNhbnQvaGVscGRlc2svaGVscGRlc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlja2V0LWxpc3Qge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDFyZW07XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufSIsIi50aWNrZXQtbGlzdCB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAxcmVtO1xuICAtLXBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/core/applicant/helpdesk/helpdesk.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/applicant/helpdesk/helpdesk.component.ts ***!
  \***************************************************************/
/*! exports provided: HelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function() { return HelpdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/ticket-answers/ticket-answers.service */ "./src/app/shared/services/ticket-answers/ticket-answers.service.ts");
/* harmony import */ var src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/ticket-questions/ticket-questions.service */ "./src/app/shared/services/ticket-questions/ticket-questions.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");











let HelpdeskComponent = class HelpdeskComponent {
    constructor(authService, notifyService, ticketAnswerService, ticketQuestionService, alertCtrl, formBuilder, loadingCtrl, router, translate) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.ticketAnswerService = ticketAnswerService;
        this.ticketQuestionService = ticketQuestionService;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.translate = translate;
        // Data
        this.questions = [];
        this.answers = [];
    }
    ngOnInit() {
        this.ticketForm = this.formBuilder.group({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('UR'),
            date_submitted: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            submitted_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.questions = this.ticketQuestionService.questionsFiltered;
        this.questions.forEach((question) => {
            question.date_submitted = moment__WEBPACK_IMPORTED_MODULE_8__(question.date_submitted, 'YYYY-MM-DD').format('DD-MM-YYYY');
            this.ticketAnswerService.answersFiltered.forEach((answer) => {
                if (question.id == answer.question_id) {
                    this.answers.push(answer);
                }
            });
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.translate.instant('HELPDESK.confirmHeader'),
                message: this.translate.instant('HELPDESK.confirmMessage'),
                buttons: [
                    {
                        text: this.translate.instant('HELPDESK.cancelButton'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: this.translate.instant('HELPDESK.confirmButton'),
                        handler: () => {
                            console.log('Confirm Okay');
                            this.confirm();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ticketForm.value.date_submitted = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD');
            this.ticketForm.value.submitted_by = this.authService.userID;
            //console.log(this.ticketForm.value)
            this.loadingMessage = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            this.ticketQuestionService.create(this.ticketForm.value).subscribe(() => {
                this.refresh();
                this.loadingMessage.dismiss();
            }, () => {
                this.loadingMessage.dismiss();
            }, () => {
                this.ticketForm.reset();
                let message = this.translate.instant('HELPDESK.successMessage');
                this.notifyService.openToastrError(message);
            });
        });
    }
    refresh() {
        this.questions = [];
        this.answers = [];
        this.ticketQuestionService.getUser(this.authService.userID).subscribe(() => {
        }, () => {
        }, () => {
            this.questions = this.ticketQuestionService.questionsFiltered;
            this.questions.forEach((question) => {
                this.ticketAnswerService.answersFiltered.forEach((answer) => {
                    if (question.id == answer.question_id) {
                        this.answers.push(answer);
                    }
                });
            });
        });
    }
};
HelpdeskComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"] },
    { type: src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_6__["TicketAnswersService"] },
    { type: src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_7__["TicketQuestionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
HelpdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk',
        template: __webpack_require__(/*! raw-loader!./helpdesk.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/helpdesk/helpdesk.component.html"),
        styles: [__webpack_require__(/*! ./helpdesk.component.scss */ "./src/app/core/applicant/helpdesk/helpdesk.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"],
        src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_6__["TicketAnswersService"],
        src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_7__["TicketQuestionsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], HelpdeskComponent);



/***/ }),

/***/ "./src/app/core/applicant/history-view/history-view.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/applicant/history-view/history-view.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2hpc3Rvcnktdmlldy9oaXN0b3J5LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/applicant/history-view/history-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/applicant/history-view/history-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: HistoryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryViewComponent", function() { return HistoryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let HistoryViewComponent = class HistoryViewComponent {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() { }
    doPrint() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirm!',
                message: 'You\'re about to download this application',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Download',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
HistoryViewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
HistoryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-view',
        template: __webpack_require__(/*! raw-loader!./history-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/history-view/history-view.component.html"),
        styles: [__webpack_require__(/*! ./history-view.component.scss */ "./src/app/core/applicant/history-view/history-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], HistoryViewComponent);



/***/ }),

/***/ "./src/app/core/applicant/history/history.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/applicant/history/history.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/applicant/history/history.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/applicant/history/history.component.ts ***!
  \*************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let HistoryComponent = class HistoryComponent {
    constructor(applicationService, houseService, router, alertCtrl) {
        this.applicationService = applicationService;
        this.houseService = houseService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        // Check
        this.isGotHistory = false;
        // Image
        this.imgNotFound = 'assets/icon/error-404.svg';
        this.imgHistoryThumbnail = 'assets/icon/results.svg';
        // Data
        this.applications = [];
        this.houses = [];
        this.applications = this.applicationService.applicationsApplicantPast;
        this.getData();
    }
    ngOnInit() {
        if (this.applications.length != 0) {
            this.isGotHistory = true;
        }
    }
    getData() {
        this.applications.forEach((application) => {
            application.date_submitted = moment__WEBPACK_IMPORTED_MODULE_6__(application.date_submitted, 'YYYY-MM-DD').format('DD-MM-YYYY');
            this.houseService.housesApplicant.forEach((house) => {
                if (house.id == application.applied_house) {
                    this.houses.push(house);
                }
            });
        });
    }
};
HistoryComponent.ctorParameters = () => [
    { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationsService"] },
    { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_5__["HousesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/history/history.component.html"),
        styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/core/applicant/history/history.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationsService"],
        src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_5__["HousesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], HistoryComponent);



/***/ }),

/***/ "./src/app/core/applicant/home/home.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/applicant/home/home.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/applicant/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/applicant/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let HomeComponent = class HomeComponent {
    constructor(authService, applicationService, alertCtrl, router) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        // Check
        this.isGotApplication = false;
        // Image
        this.imgNotFound = 'assets/icon/error-404.svg';
        // Data
        this.applications = [];
    }
    ngOnInit() {
        this.applications = this.applicationService.applicationsApplicantCurrent;
        //console.log(this.applicationService.retrievedApplicantCurrentApplications)
        if (this.applications.length != 0) {
            this.isGotApplication = true;
        }
        this.doCheckUserDetail();
        this.applications.forEach((application) => {
            application.date_submitted = moment__WEBPACK_IMPORTED_MODULE_6__(application.date_submitted, 'YYYY-MM-DD').format('DD-MM-YYYY');
        });
    }
    /*ionViewDidEnter(){
      this.applications = this.applicationService.retrievedApplicantCurrentApplications
      this.doCheckUserDetail()
    }*/
    doCheckUserDetail() {
        if (!this.authService.userSelfDetail.full_name ||
            !this.authService.userSelfDetail.gender ||
            !this.authService.userSelfDetail.new_nric ||
            !this.authService.userSelfDetail.phone) {
            this.alertDetailsIncomplete();
        }
        else {
            console.log('You are alright');
        }
    }
    alertDetailsIncomplete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Hmm',
                message: 'It seems like your details is incomplete',
                backdropDismiss: false,
                buttons: [{
                        text: 'Edit details',
                        handler: () => {
                            console.log('Going to edit');
                            this.router.navigate(['applicant/profile']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/applicant/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/core/applicant/house-add-new/house-add-new.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/core/applicant/house-add-new/house-add-new.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2hvdXNlLWFkZC1uZXcvaG91c2UtYWRkLW5ldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/applicant/house-add-new/house-add-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/applicant/house-add-new/house-add-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: HouseAddNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseAddNewComponent", function() { return HouseAddNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _assets_data_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/data/area */ "./src/assets/data/area.ts");











let HouseAddNewComponent = class HouseAddNewComponent {
    constructor(authService, houseService, actionSheetCtrl, alertCtrl, formBuilder, loadingCtrl, router, base64, camera, translate) {
        this.authService = authService;
        this.houseService = houseService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.base64 = base64;
        this.camera = camera;
        this.translate = translate;
        this.tempImageData = [null, null, null, null, null, null, null];
        this.tempImageEncoded = [null, null, null, null, null, null, null];
        this.houses = [
            { value: 'AS', text: this.translate.instant('HOUSEADD.textApartment') },
            { value: 'BS', text: this.translate.instant('HOUSEADD.textBungalow') },
            { value: 'CD', text: this.translate.instant('HOUSEADD.textCondominium') },
            { value: 'FL', text: this.translate.instant('HOUSEADD.textFlat') },
            { value: 'TE', text: this.translate.instant('HOUSEADD.textTerrace') },
            { value: 'TO', text: this.translate.instant('HOUSEADD.textTownhouse') },
            { value: 'OT', text: this.translate.instant('HOUSEADD.textOther') }
        ];
        this.areas = _assets_data_area__WEBPACK_IMPORTED_MODULE_10__["Areas"];
    }
    ngOnInit() {
        this.houseForm = this.formBuilder.group({
            applicant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            assessment_tax_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            assessment_tax_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            building_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            staying_duration_years: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            staying_duration_months: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            permanent_occupant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            vehicle_car: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            vehicle_motorcycle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            vehicle_bicycle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            vehicle_other: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_1_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_1_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_1_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            electricity_bill_2_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_2_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_2_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            electricity_bill_3_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_3_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_3_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            water_bill_1_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_1_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_1_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            water_bill_2_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_2_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_2_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            water_bill_3_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_3_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_3_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    addNewHouse() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingMessage = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            this.houseForm.value.applicant = this.authService.userID;
            console.log(this.houseForm.value);
            this.houseService.register(this.houseForm.value).subscribe((res) => {
                console.log('House registration success');
                this.houseService.getUser(this.authService.userID).subscribe(() => {
                    this.loadingMessage.dismiss();
                    this.successfulAddMessage();
                    this.router.navigate(['/applicant/house']);
                });
            }, (err) => {
                this.loadingMessage.dismiss();
                console.log('House registration not success');
                this.unsuccessfulAddMessage();
            }, () => {
            });
        });
    }
    successfulAddMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.translate.instant('HOUSEADD.successAddHeader'),
                message: this.translate.instant('HOUSEADD.successAddMessage'),
                buttons: [this.translate.instant('HOUSEADD.successAddButton')]
            });
            yield alert.present();
        });
    }
    unsuccessfulAddMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.translate.instant('HOUSEADD.unsuccessAddHeader'),
                message: this.translate.instant('HOUSEADD.unsuccessAddMessage'),
                buttons: [this.translate.instant('HOUSEADD.successAddButton')]
            });
            yield alert.present();
        });
    }
    openUploadSheet(billNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('HOUSEADD.uploadSheetHeader'),
                buttons: [
                    {
                        text: this.translate.instant('HOUSEADD.uploadCameraText'),
                        role: 'destructive',
                        icon: 'camera',
                        handler: () => {
                            console.log('Camera opened');
                            this.openCamera(billNumber);
                        }
                    },
                    {
                        text: this.translate.instant('HOUSEADD.uploadGalleryText'),
                        icon: 'images',
                        handler: () => {
                            console.log('Gallery opened');
                            this.openGallery(billNumber);
                        }
                    },
                    {
                        text: this.translate.instant('HOUSEADD.uploadCancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openCamera(billNumber) {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.tempImageData[billNumber] = imageData;
            this.encodeFile64(billNumber);
            //this.tempImage[billNumber] = (<any>window).Ionic.WebView.convertFileSrc(imageData);
        }, (err) => {
            alert("error " + JSON.stringify(err));
        });
    }
    openGallery(billNumber) {
        let cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 70,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then((file_uri) => {
            this.tempImageData[billNumber] = file_uri;
            this.encodeFile64(billNumber);
        }, (err) => {
            console.log(err);
        });
        /**/
    }
    encodeFile64(billNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingMessage = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            setTimeout(() => {
                this.loadingMessage.dismiss();
            }, 5000);
            this.base64.encodeFile(this.tempImageData[billNumber]).then((base64File) => {
                this.tempImageEncoded[billNumber] = base64File;
                if (billNumber == 0) {
                    this.houseForm.value.assessment_tax_doc = this.tempImageEncoded[billNumber];
                }
                if (billNumber == 1) {
                    this.houseForm.value.electricity_bill_1_doc = this.tempImageEncoded[billNumber];
                }
                else if (billNumber == 2) {
                    this.houseForm.value.electricity_bill_2_doc = this.tempImageEncoded[billNumber];
                }
                else if (billNumber == 3) {
                    this.houseForm.value.electricity_bill_3_doc = this.tempImageEncoded[billNumber];
                }
                else if (billNumber == 4) {
                    this.houseForm.value.water_bill_1_doc = this.tempImageEncoded[billNumber];
                }
                else if (billNumber == 5) {
                    this.houseForm.value.water_bill_2_doc = this.tempImageEncoded[billNumber];
                }
                else if (billNumber == 6) {
                    this.houseForm.value.water_bill_3_doc = this.tempImageEncoded[billNumber];
                }
                console.log(this.tempImageEncoded[billNumber]);
            }, (err) => {
                console.log(err);
            });
        });
    }
};
HouseAddNewComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__["HousesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
HouseAddNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-house-add-new',
        template: __webpack_require__(/*! raw-loader!./house-add-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/house-add-new/house-add-new.component.html"),
        styles: [__webpack_require__(/*! ./house-add-new.component.scss */ "./src/app/core/applicant/house-add-new/house-add-new.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__["HousesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], HouseAddNewComponent);



/***/ }),

/***/ "./src/app/core/applicant/house-detail/house-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/applicant/house-detail/house-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2hvdXNlLWRldGFpbC9ob3VzZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/applicant/house-detail/house-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/applicant/house-detail/house-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: HouseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseDetailComponent", function() { return HouseDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_assets_data_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/assets/data/area */ "./src/assets/data/area.ts");











let HouseDetailComponent = class HouseDetailComponent {
    constructor(authService, houseService, actionSheetController, alertController, loadingController, router, base64, camera, translate) {
        this.authService = authService;
        this.houseService = houseService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.base64 = base64;
        this.camera = camera;
        this.translate = translate;
        this.houseCredentials = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            applicant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            assessment_tax_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            assessment_tax_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            building_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            staying_duration_years: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            staying_duration_months: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            permanent_occupant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            vehicle_car: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            vehicle_motorcycle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            vehicle_bicycle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            vehicle_other: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            electricity_bill_1_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_1_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_1_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            electricity_bill_2_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_2_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_2_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            electricity_bill_3_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_3_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            electricity_bill_3_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            water_bill_1_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_1_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_1_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            water_bill_2_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_2_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_2_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            water_bill_3_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_3_usage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            water_bill_3_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.areas = src_assets_data_area__WEBPACK_IMPORTED_MODULE_10__["Areas"];
        this.houses = [
            { value: 'AS', text: this.translate.instant('HOUSEDETAIL.textApartment') },
            { value: 'BS', text: this.translate.instant('HOUSEDETAIL.textBungalow') },
            { value: 'CD', text: this.translate.instant('HOUSEDETAIL.textCondominium') },
            { value: 'FL', text: this.translate.instant('HOUSEDETAIL.textFlat') },
            { value: 'TE', text: this.translate.instant('HOUSEDETAIL.textTerrace') },
            { value: 'TO', text: this.translate.instant('HOUSEDETAIL.textTownhouse') },
            { value: 'OT', text: this.translate.instant('HOUSEDETAIL.textOther') }
        ];
        this.tempImageData = [null, null, null, null, null, null, null];
        this.tempImageEncoded = [null, null, null, null, null, null, null];
    }
    ngOnInit() {
        this.tempHouse = this.router.getCurrentNavigation().extras;
    }
    updateHouse() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingMessage = yield this.loadingController.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            this.houseCredentials.value.id = this.tempHouse.id;
            this.houseCredentials.value.applicant = this.tempHouse.applicant;
            if (!this.houseCredentials.value.address) {
                this.houseCredentials.value.address = this.tempHouse.address;
            }
            if (!this.houseCredentials.value.postcode) {
                this.houseCredentials.value.postcode = this.tempHouse.postcode;
            }
            if (!this.houseCredentials.value.area) {
                this.houseCredentials.value.area = this.tempHouse.area;
            }
            if (!this.houseCredentials.value.assessment_tax_account) {
                this.houseCredentials.value.assessment_tax_account = this.tempHouse.assessment_tax_account;
            }
            if (!this.houseCredentials.value.building_type) {
                this.houseCredentials.value.building_type = this.tempHouse.building_type;
            }
            if (!this.houseCredentials.value.staying_duration_years) {
                this.houseCredentials.value.staying_duration_years = this.tempHouse.staying_duration_years;
            }
            if (!this.houseCredentials.value.staying_duration_months) {
                this.houseCredentials.value.staying_duration_months = this.tempHouse.staying_duration_months;
            }
            if (!this.houseCredentials.value.permanent_occupant) {
                this.houseCredentials.value.permanent_occupant = this.tempHouse.permanent_occupant;
            }
            if (!this.houseCredentials.value.vehicle_car) {
                this.houseCredentials.value.vehicle_car = this.tempHouse.vehicle_car;
            }
            if (!this.houseCredentials.value.vehicle_motorcycle) {
                this.houseCredentials.value.vehicle_motorcycle = this.tempHouse.vehicle_motorcycle;
            }
            if (!this.houseCredentials.value.vehicle_bicycle) {
                this.houseCredentials.value.vehicle_bicycle = this.tempHouse.vehicle_bicycle;
            }
            if (!this.houseCredentials.value.vehicle_other) {
                this.houseCredentials.value.vehicle_other = this.tempHouse.vehicle_other;
            }
            if (!this.houseCredentials.value.electricity_bill_1_month) {
                this.houseCredentials.value.electricity_bill_1_month = this.tempHouse.electricity_bill_1_month;
            }
            if (!this.houseCredentials.value.electricity_bill_1_usage) {
                this.houseCredentials.value.electricity_bill_1_usage = this.tempHouse.electricity_bill_1_usage;
            }
            if (!this.houseCredentials.value.electricity_bill_1_doc) {
                if (this.tempHouse.electricity_bill_1_doc) {
                    this.houseCredentials.value.electricity_bill_1_doc = this.tempHouse.electricity_bill_1_doc;
                }
                else {
                    this.houseCredentials.value.electricity_bill_1_doc = '';
                }
            }
            if (!this.houseCredentials.value.electricity_bill_2_month) {
                this.houseCredentials.value.electricity_bill_2_month = this.tempHouse.electricity_bill_2_month;
            }
            if (!this.houseCredentials.value.electricity_bill_2_usage) {
                this.houseCredentials.value.electricity_bill_2_usage = this.tempHouse.electricity_bill_2_usage;
            }
            if (!this.houseCredentials.value.electricity_bill_2_doc) {
                if (this.tempHouse.electricity_bill_2_doc) {
                    this.houseCredentials.value.electricity_bill_2_doc = this.tempHouse.electricity_bill_2_doc;
                }
                else {
                    this.houseCredentials.value.electricity_bill_2_doc = '';
                }
            }
            if (!this.houseCredentials.value.electricity_bill_3_month) {
                this.houseCredentials.value.electricity_bill_3_month = this.tempHouse.electricity_bill_3_month;
            }
            if (!this.houseCredentials.value.electricity_bill_3_usage) {
                this.houseCredentials.value.electricity_bill_3_usage = this.tempHouse.electricity_bill_3_usage;
            }
            if (!this.houseCredentials.value.electricity_bill_3_doc) {
                if (this.tempHouse.electricity_bill_3_doc) {
                    this.houseCredentials.value.electricity_bill_3_doc = this.tempHouse.electricity_bill_3_doc;
                }
                else {
                    this.houseCredentials.value.electricity_bill_3_doc = '';
                }
            }
            if (!this.houseCredentials.value.water_bill_1_month) {
                this.houseCredentials.value.water_bill_1_month = this.tempHouse.water_bill_1_month;
            }
            if (!this.houseCredentials.value.water_bill_1_usage) {
                this.houseCredentials.value.water_bill_1_usage = this.tempHouse.water_bill_1_usage;
            }
            if (!this.houseCredentials.value.water_bill_1_doc) {
                if (this.tempHouse.water_bill_1_doc) {
                    this.houseCredentials.value.water_bill_1_doc = this.tempHouse.water_bill_1_doc;
                }
                else {
                    this.houseCredentials.value.water_bill_1_doc = '';
                }
            }
            if (!this.houseCredentials.value.water_bill_2_month) {
                this.houseCredentials.value.water_bill_2_month = this.tempHouse.water_bill_2_month;
            }
            if (!this.houseCredentials.value.water_bill_2_usage) {
                this.houseCredentials.value.water_bill_2_usage = this.tempHouse.water_bill_2_usage;
            }
            if (!this.houseCredentials.value.water_bill_2_doc) {
                if (this.tempHouse.water_bill_2_doc) {
                    this.houseCredentials.value.water_bill_2_doc = this.tempHouse.water_bill_2_doc;
                }
                else {
                    this.houseCredentials.value.water_bill_2_doc = '';
                }
            }
            if (!this.houseCredentials.value.water_bill_3_month) {
                this.houseCredentials.value.water_bill_3_month = this.tempHouse.water_bill_3_month;
            }
            if (!this.houseCredentials.value.water_bill_3_usage) {
                this.houseCredentials.value.water_bill_3_usage = this.tempHouse.water_bill_3_usage;
            }
            if (!this.houseCredentials.value.water_bill_3_doc) {
                if (this.tempHouse.water_bill_3_doc) {
                    this.houseCredentials.value.water_bill_3_doc = this.tempHouse.water_bill_3_doc;
                }
                else {
                    this.houseCredentials.value.water_bill_3_doc = '';
                }
            }
            console.log('Update value: ', this.houseCredentials.value);
            this.houseService.update(this.houseCredentials.value, this.tempHouse.id).subscribe((res) => {
                console.log('Update house success');
                this.houseService.getUser(this.authService.userID).subscribe(() => {
                    this.loadingMessage.dismiss();
                    this.successfulUpdateMessage();
                    this.router.navigate(['/applicant/house']);
                });
            }, (err) => {
                console.log('Update house unsuccessful');
                this.loadingMessage.dismiss();
                this.unsuccessfulUpdateMessage();
            }, () => {
            });
        });
    }
    successfulUpdateMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant('HOUSEDETAIL.successUpdateHeader'),
                message: this.translate.instant('HOUSEDETAIL.successUpdateMessage'),
                buttons: [this.translate.instant('HOUSEDETAIL.successUpdateButton')]
            });
            yield alert.present();
        });
    }
    unsuccessfulUpdateMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant('HOUSEDETAIL.unsuccessUpdateHeader'),
                message: this.translate.instant('HOUSEDETAIL.unsuccessUpdateMessage'),
                buttons: [this.translate.instant('HOUSEDETAIL.successUpdateButton')]
            });
            yield alert.present();
        });
    }
    openUploadSheet(billNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.translate.instant('HOUSEDETAIL.uploadSheetHeader'),
                buttons: [
                    {
                        text: this.translate.instant('HOUSEDETAIL.uploadCameraText'),
                        role: 'destructive',
                        icon: 'camera',
                        handler: () => {
                            console.log('Camera opened');
                            this.openCamera(billNumber);
                        }
                    },
                    {
                        text: this.translate.instant('HOUSEDETAIL.uploadGalleryText'),
                        icon: 'images',
                        handler: () => {
                            console.log('Gallery opened');
                            this.openGallery(billNumber);
                        }
                    },
                    {
                        text: this.translate.instant('HOUSEDETAIL.uploadCancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openCamera(billNumber) {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.tempImageData[billNumber] = imageData;
            this.encodeFile64(billNumber);
            //this.tempImage = (<any>window).Ionic.WebView.convertFileSrc(imageData);
        }, (err) => {
            alert("error " + JSON.stringify(err));
        });
    }
    openGallery(billNumber) {
        let cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 70,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then((file_uri) => {
            this.tempImageData[billNumber] = file_uri;
            this.encodeFile64(billNumber);
        }, (err) => {
            console.log(err);
        });
        /**/
    }
    encodeFile64(billNumber) {
        this.base64.encodeFile(this.tempImageData[billNumber]).then((base64File) => {
            this.tempImageEncoded[billNumber] = base64File;
            if (billNumber == 0) {
                this.houseCredentials.value.assessment_tax_doc = this.tempImageEncoded[billNumber];
            }
            if (billNumber == 1) {
                this.houseCredentials.value.electricity_bill_1_doc = this.tempImageEncoded[billNumber];
            }
            else if (billNumber == 2) {
                this.houseCredentials.value.electricity_bill_2_doc = this.tempImageEncoded[billNumber];
            }
            else if (billNumber == 3) {
                this.houseCredentials.value.electricity_bill_3_doc = this.tempImageEncoded[billNumber];
            }
            else if (billNumber == 4) {
                this.houseCredentials.value.water_bill_1_doc = this.tempImageEncoded[billNumber];
            }
            else if (billNumber == 5) {
                this.houseCredentials.value.water_bill_2_doc = this.tempImageEncoded[billNumber];
            }
            else if (billNumber == 6) {
                this.houseCredentials.value.water_bill_3_doc = this.tempImageEncoded[billNumber];
            }
            console.log(this.tempImageEncoded[billNumber]);
        }, (err) => {
            console.log(err);
        });
    }
};
HouseDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__["HousesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
HouseDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-house-detail',
        template: __webpack_require__(/*! raw-loader!./house-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/house-detail/house-detail.component.html"),
        styles: [__webpack_require__(/*! ./house-detail.component.scss */ "./src/app/core/applicant/house-detail/house-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__["HousesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], HouseDetailComponent);



/***/ }),

/***/ "./src/app/core/applicant/house/house.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/applicant/house/house.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L2hvdXNlL2hvdXNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/applicant/house/house.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/applicant/house/house.component.ts ***!
  \*********************************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let HouseComponent = class HouseComponent {
    constructor(router, houseService, alertCtrl) {
        this.router = router;
        this.houseService = houseService;
        this.alertCtrl = alertCtrl;
        // Check
        this.isGotHouse = false;
        // Image
        this.imgNotFound = 'assets/icon/error-404.svg';
        this.imgHouseThumbnail = 'assets/icon/house.svg';
    }
    ngOnInit() {
        this.houses = this.houseService.housesFiltered;
        if (this.houses.length != 0) {
            this.isGotHouse = true;
        }
        console.log('ngOnInit');
    }
    ionViewDidEnter() {
        this.houses = this.houseService.housesFiltered;
        console.log('ionViewDidEnter', this.houses);
    }
    addNewHouse() {
        console.log('Clicked add new house');
        this.router.navigate(['/applicant/house-add-new']);
    }
    viewHouseDetail(event) {
        console.log('Clicked view house', event);
        this.router.navigate(['/applicant/house-detail'], event);
    }
};
HouseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__["HousesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
HouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-house',
        template: __webpack_require__(/*! raw-loader!./house.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/house/house.component.html"),
        styles: [__webpack_require__(/*! ./house.component.scss */ "./src/app/core/applicant/house/house.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_3__["HousesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], HouseComponent);



/***/ }),

/***/ "./src/app/core/applicant/map/map.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/applicant/map/map.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leaflet-map {\n  height: 70vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2NvcmUvYXBwbGljYW50L21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvYXBwbGljYW50L21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9hcHBsaWNhbnQvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFmbGV0LW1hcCB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIi5sZWFmbGV0LW1hcCB7XG4gIGhlaWdodDogNzB2aDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/applicant/map/map.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/applicant/map/map.component.ts ***!
  \*****************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);




let MapComponent = class MapComponent {
    constructor(geoLocation) {
        this.geoLocation = geoLocation;
        this.options = {
            layers: [
                leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                    maxZoom: 20,
                    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                })
            ],
            zoom: 12,
            center: leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"](3.1279, 101.5945)
        };
    }
    ngOnInit() { }
    onMapReady(map) {
        console.log('map is ready');
        setTimeout(() => {
            map.invalidateSize();
        }, 0);
        this.geoLocation.getCurrentPosition().then((resp) => {
            console.log('geoloc: ', resp.coords);
            this.markerCoordinates = resp.coords;
        }).catch((error) => {
            console.log('geoloc: ', error);
        });
        map.on('click', (e) => {
            console.log(e.latlng);
            this.markerCoordinates = e.latlng;
            console.log(this.markerCoordinates);
            if (this.theMarker != undefined) {
                map.removeLayer(this.theMarker);
            }
            this.theMarker = new leaflet__WEBPACK_IMPORTED_MODULE_3__["Marker"](e.latlng, {
                icon: leaflet__WEBPACK_IMPORTED_MODULE_3__["icon"]({
                    iconSize: [30, 30],
                    iconAnchor: [13, 41],
                    iconUrl: 'assets/icon/location-pin.svg'
                })
            }).addTo(map);
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/core/applicant/map/map.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
], MapComponent);



/***/ }),

/***/ "./src/app/core/applicant/notification/notification.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/applicant/notification/notification.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGljYW50L25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/applicant/notification/notification.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/applicant/notification/notification.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationComponent = class NotificationComponent {
    constructor() {
        // Check
        this.isGotNotification = false;
        // Image
        this.imgNotFound = 'assets/icon/error-404.svg';
        this.imgNotiThumbnail = 'assets/icon/faq.svg';
        // Data 
        this.notifications = [];
    }
    ngOnInit() { }
    getData() {
        // console.log(this.notifications)
    }
};
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/notification/notification.component.html"),
        styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/core/applicant/notification/notification.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotificationComponent);



/***/ }),

/***/ "./src/app/core/applicant/profile/profile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/applicant/profile/profile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".update-btn {\n  bottom: 10px;\n  position: relative;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2NvcmUvYXBwbGljYW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9hcHBsaWNhbnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9hcHBsaWNhbnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1idG4ge1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgO1xuICAgIHotaW5kZXg6IDk5OTtcbn0iLCIudXBkYXRlLWJ0biB7XG4gIGJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/applicant/profile/profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/applicant/profile/profile.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");










let ProfileComponent = class ProfileComponent {
    constructor(authService, notifyService, actionSheetCtrl, alertCtrl, base64, camera, formBuilder, loadingCtrl, router, translate, toastCtrl) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.base64 = base64;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        // Types
        this.genders = [
            { value: 'FM', text: 'Female' },
            { value: 'ML', text: 'Male' }
        ];
        this.relationshipTypes = [
            { value: 'SL', text: 'Self' },
            { value: 'SP', text: 'Spouse' },
            { value: 'SB', text: 'Siblings' },
            { value: 'PR', text: 'Parents' },
            { value: 'CH', text: 'Children' }
        ];
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            new_nric: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            old_nric: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            profile_picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nric_picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            relationship_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.getData();
    }
    getData() {
        this.user = this.authService.userSelfDetail;
    }
    openUploadSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('PROFILE.uploadSheetHeader'),
                buttons: [
                    {
                        text: this.translate.instant('PROFILE.uploadCameraText'),
                        role: 'destructive',
                        icon: 'camera',
                        handler: () => {
                            // console.log('Camera opened')
                            this.openCamera();
                        }
                    },
                    {
                        text: this.translate.instant('PROFILE.uploadGalleryText'),
                        icon: 'images',
                        handler: () => {
                            // console.log('Gallery opened')
                            this.openGallery();
                        }
                    },
                    {
                        text: this.translate.instant('PROFILE.uploadCancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openCamera() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options)
            .then((imageData) => {
            this.tempImageData = imageData;
            // this.tempImage = (<any>window).Ionic.WebView.convertFileSrc(imageData);
            this.encodeFile64();
        }, (err) => {
            alert("error " + JSON.stringify(err));
        });
    }
    openGallery() {
        let cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 70,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then((file_uri) => {
            this.tempImageData = file_uri;
            this.encodeFile64();
        }, (err) => {
            console.log(err);
        });
        /**/
    }
    encodeFile64() {
        this.base64.encodeFile(this.tempImageData)
            .then((base64File) => {
            this.tempImageEncoded = base64File;
            this.userForm.value.nric_picture = this.tempImageEncoded;
            console.log(this.tempImageEncoded);
        }, (err) => {
            console.log(err);
        });
    }
    update() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingMessage = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            // this.userForm.value.id = this.user.id
            if (!this.userForm.value.username) {
                this.userForm.value.username = this.user.username;
            }
            if (!this.userForm.value.full_name) {
                this.userForm.value.full_name = this.user.full_name;
            }
            if (!this.userForm.value.new_nric) {
                this.userForm.value.new_nric = this.user.new_nric;
            }
            if (!this.userForm.value.old_nric) {
                this.userForm.value.old_nric = this.user.old_nric;
            }
            if (!this.userForm.value.phone) {
                this.userForm.value.phone = this.user.phone;
            }
            if (!this.userForm.value.email) {
                this.userForm.value.email = this.user.email;
            }
            if (!this.userForm.value.tel) {
                this.userForm.value.tel = this.user.tel;
            }
            if (!this.userForm.value.occupation) {
                if (this.user.occupation) {
                    this.userForm.value.occupation = this.user.occupation;
                }
                else {
                    this.userForm.value.occupation = '';
                }
            }
            if (!this.userForm.value.nric_picture) {
                if (this.user.occupation) {
                    this.userForm.value.nric_picture = this.user.nric_picture;
                }
                else {
                    this.userForm.value.nric_picture = '';
                }
            }
            if (!this.userForm.value.profile_picture) {
                if (this.user.occupation) {
                    this.userForm.value.profile_picture = this.user.profile_picture;
                }
                else {
                    this.userForm.value.profile_picture = '';
                }
            }
            if (!this.userForm.value.relationship_type) {
                this.userForm.value.relationship_type = this.user.relationship_type;
            }
            console.log('Update value: ', this.userForm.value);
            this.authService.update(this.userForm.value).subscribe((res) => {
                // console.log('res')
                this.authService.getUsers();
                this.getData();
            }, (err) => {
                // console.log('err')
                this.loadingMessage.dismiss();
            }, () => {
                this.loadingMessage.dismiss();
                let message = this.translate.instant('PROFILE.successMessage');
                this.notifyService.openToastr(message);
            });
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/applicant/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/core/applicant/profile/profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], ProfileComponent);



/***/ }),

/***/ "./src/assets/data/area.ts":
/*!*********************************!*\
  !*** ./src/assets/data/area.ts ***!
  \*********************************/
/*! exports provided: Areas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Areas", function() { return Areas; });
const Areas = [
    {
        "value": "Aman Suria"
    },
    {
        "value": "Ara Damansara"
    },
    {
        "value": "Asia Jaya"
    },
    {
        "value": "Bandar Sri Damansara"
    },
    {
        "value": "Bandar Sunway"
    },
    {
        "value": "Bandar Utama"
    },
    {
        "value": "Bukit Gasing"
    },
    {
        "value": "Damansara Damai"
    },
    {
        "value": "Damansara Jaya"
    },
    {
        "value": "Damansara Kim"
    },
    {
        "value": "Damansara Perdana"
    },
    {
        "value": "Damansara Utama"
    },
    {
        "value": "Dataran Prima"
    },
    {
        "value": "Kampung Lindungan"
    },
    {
        "value": "Kampung Medan"
    },
    {
        "value": "Kampung Sungai Kayu Ara"
    },
    {
        "value": "Kampung Tunku"
    },
    {
        "value": "Kelab Golf Negara Subang"
    },
    {
        "value": "Kelana Jaya"
    },
    {
        "value": "Kota Damansara"
    },
    {
        "value": "Kwasa Damansara"
    },
    {
        "value": "Mutiara Damansara"
    },
    {
        "value": "Petaling Utama"
    },
    {
        "value": "PJ Old Town"
    },
    {
        "value": "Sungai Way"
    },
    {
        "value": "Taman Dato' Harun"
    },
    {
        "value": "Taman Desaria"
    },
    {
        "value": "Taman Jaya"
    },
    {
        "value": "Taman Mayang"
    },
    {
        "value": "Taman Mayang Jaya"
    },
    {
        "value": "Taman Medan"
    },
    {
        "value": "Taman Sri Manja"
    },
    {
        "value": "Taman Megah"
    },
    {
        "value": "Taman Paramount"
    },
    {
        "value": "Taman Perindustrian Jaya"
    },
    {
        "value": "Taman SEA"
    },
    {
        "value": "Tropicana"
    }
];


/***/ })

}]);
//# sourceMappingURL=core-applicant-applicant-module-es2015.js.map