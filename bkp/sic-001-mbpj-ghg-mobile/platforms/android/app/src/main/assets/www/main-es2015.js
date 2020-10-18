(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"default~auth-auth-module~core-applicant-applicant-module~core-evaluator-evaluator-module",
		"common",
		"auth-auth-module"
	],
	"./core/applicant/applicant.module": [
		"./src/app/core/applicant/applicant.module.ts",
		"default~auth-auth-module~core-applicant-applicant-module~core-evaluator-evaluator-module",
		"default~core-applicant-applicant-module~core-evaluator-evaluator-module",
		"common",
		"core-applicant-applicant-module"
	],
	"./core/evaluator/evaluator.module": [
		"./src/app/core/evaluator/evaluator.module.ts",
		"default~auth-auth-module~core-applicant-applicant-module~core-evaluator-evaluator-module",
		"default~core-applicant-applicant-module~core-evaluator-evaluator-module",
		"common",
		"core-evaluator-evaluator-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		1
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		2
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		3
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		4
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		5
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		7
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		8
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		9
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		10
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		11
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		12
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		13
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		14
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		15
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		16
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		17
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		18
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		19
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		20
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		21
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		22
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		23
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		24
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		25
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		26
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		27
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		28
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		29
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		31
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		32
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		33
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		34
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		35
	],
	"./ion-menu_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js",
		"common",
		36
	],
	"./ion-menu_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js",
		"common",
		37
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		38
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		39
	],
	"./ion-nav_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		40
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		41
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		42
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		44
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		45
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		46
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		47
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		48
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		50
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		52
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		53
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		54
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		55
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		56
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		57
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		58
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		59
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		60
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		61
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		62
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		63
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		64
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		65
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		66
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		67
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		68
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		69
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		70
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		71
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		72
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		73
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		74
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		75
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		76
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>\n    \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/applicant-layout/applicant-layout.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/applicant-layout/applicant-layout.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane contentId=\"main-content\">\n  <ion-menu contentId=\"main-content\" type=\"overlay\">\n    <ion-header mode=\"ios\">\n      <ion-toolbar class=\"text-center\">\n        <ion-img style=\"max-width: 5rem; margin: 1rem auto\" [src]=\"imgLogo\"></ion-img>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list class=\"side-menu\" lines=\"full\">\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n          <ion-item [routerDirection]=\"'forward'\" routerLinkActive=\"menu-active\" [routerLink]=\"[p.url]\">\n            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label>\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/evaluator-layout/evaluator-layout.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/evaluator-layout/evaluator-layout.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane contentId=\"main-content\">\n  <ion-menu contentId=\"main-content\" type=\"overlay\">\n    <ion-header mode=\"ios\">\n      <ion-toolbar class=\"text-center\">\n        <ion-img style=\"max-width: 5rem; margin: 1rem auto\" [src]=\"imgLogo\"></ion-img>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list class=\"side-menu\" lines=\"full\">\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n          <ion-item [routerDirection]=\"'forward'\" routerLinkActive=\"menu-active\" [routerLink]=\"[p.url]\">\n            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label>\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_applicant_layout_applicant_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/applicant-layout/applicant-layout.component */ "./src/app/layouts/applicant-layout/applicant-layout.component.ts");
/* harmony import */ var _layouts_evaluator_layout_evaluator_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/evaluator-layout/evaluator-layout.component */ "./src/app/layouts/evaluator-layout/evaluator-layout.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");






const routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _layouts_applicant_layout_applicant_layout_component__WEBPACK_IMPORTED_MODULE_3__["ApplicantLayoutComponent"],
        children: [
            {
                path: 'applicant',
                loadChildren: './core/applicant/applicant.module#ApplicantModule',
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: {
                    role: 'AP'
                }
            }
        ]
    },
    {
        path: '',
        component: _layouts_evaluator_layout_evaluator_layout_component__WEBPACK_IMPORTED_MODULE_4__["EvaluatorLayoutComponent"],
        children: [
            {
                path: 'evaluator',
                loadChildren: './core/evaluator/evaluator.module#EvaluatorModule',
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: {
                    role: 'EV'
                }
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");
/* harmony import */ var _shared_services_translate_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/translate-config.service */ "./src/app/shared/services/translate-config.service.ts");








let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authService, translateServices) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.translateServices = translateServices;
        this.appPages = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_6__["Applicant"];
        this.initializeApp();
        this.translateServices.getDefaultLanguage();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            //this.statusBar.styleDefault();
            //this.statusBar.styleBlackOpaque();
            //this.statusBar.styleLightContent();
            //this.statusBar.backgroundColorByHexString('#fff');
            this.statusBar.overlaysWebView(false);
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByName("white");
            this.splashScreen.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _shared_services_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _shared_services_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: LanguageLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_applicant_layout_applicant_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/applicant-layout/applicant-layout.component */ "./src/app/layouts/applicant-layout/applicant-layout.component.ts");
/* harmony import */ var _layouts_evaluator_layout_evaluator_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/evaluator-layout/evaluator-layout.component */ "./src/app/layouts/evaluator-layout/evaluator-layout.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");
/* harmony import */ var _shared_interceptor_http_token_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/interceptor/http.token.interceptor */ "./src/app/shared/interceptor/http.token.interceptor.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["fab"]);
















function LanguageLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _layouts_applicant_layout_applicant_layout_component__WEBPACK_IMPORTED_MODULE_8__["ApplicantLayoutComponent"],
            _layouts_evaluator_layout_evaluator_layout_component__WEBPACK_IMPORTED_MODULE_9__["EvaluatorLayoutComponent"]
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_22__["IonicStorageModule"].forRoot(),
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_24__["LeafletModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateLoader"],
                    useFactory: (LanguageLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
                }
            })
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_20__["FilePath"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_21__["WebView"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_23__["Base64"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_25__["Geolocation"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_28__["OneSignal"],
            _shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_29__["JwtService"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_31__["NativeStorage"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"], useClass: _shared_interceptor_http_token_interceptor__WEBPACK_IMPORTED_MODULE_30__["HttpTokenInterceptor"], multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layouts/applicant-layout/applicant-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/applicant-layout/applicant-layout.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXBwbGljYW50LWxheW91dC9hcHBsaWNhbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/applicant-layout/applicant-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/applicant-layout/applicant-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: ApplicantLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantLayoutComponent", function() { return ApplicantLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");



let ApplicantLayoutComponent = class ApplicantLayoutComponent {
    constructor() {
        this.appPages = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__["Applicant"];
        this.imgLogo = 'assets/img/logo/mbpj-emblem.png';
    }
    ngOnInit() { }
};
ApplicantLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-applicant-layout',
        template: __webpack_require__(/*! raw-loader!./applicant-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/applicant-layout/applicant-layout.component.html"),
        styles: [__webpack_require__(/*! ./applicant-layout.component.scss */ "./src/app/layouts/applicant-layout/applicant-layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ApplicantLayoutComponent);



/***/ }),

/***/ "./src/app/layouts/evaluator-layout/evaluator-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/evaluator-layout/evaluator-layout.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZXZhbHVhdG9yLWxheW91dC9ldmFsdWF0b3ItbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/evaluator-layout/evaluator-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/evaluator-layout/evaluator-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: EvaluatorLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorLayoutComponent", function() { return EvaluatorLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");



let EvaluatorLayoutComponent = class EvaluatorLayoutComponent {
    constructor() {
        this.appPages = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__["Evaluator"];
        this.imgLogo = 'assets/img/logo/mbpj-emblem.png';
    }
    ngOnInit() { }
};
EvaluatorLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-evaluator-layout',
        template: __webpack_require__(/*! raw-loader!./evaluator-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/evaluator-layout/evaluator-layout.component.html"),
        styles: [__webpack_require__(/*! ./evaluator-layout.component.scss */ "./src/app/layouts/evaluator-layout/evaluator-layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EvaluatorLayoutComponent);



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    /*canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
    }*/
    canActivate(route) {
        const expectedRole = route.data.role;
        console.log('expected: ', expectedRole);
        if (this.auth.userType == expectedRole) {
            //console.log('Authenticated')
            return true;
        }
        else {
            //console.log('Not Authenticated')
            return this.router.navigate(['/auth/login']);
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/handler/jwt/jwt.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/handler/jwt/jwt.service.ts ***!
  \***************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");




let JwtService = class JwtService {
    constructor(storage, authService // debuging purposes
    ) {
        this.storage = storage;
        this.authService = authService;
    }
    getToken(title) {
        // return this.storage.getItem(title)
        return window.localStorage[title];
    }
    saveToken(title, token) {
        window.localStorage[title] = token;
        // this.storage.setItem(title, token)
    }
    destroyToken() {
        // this.storage.clear()
        window.localStorage.clear();
    }
    getTokenDebug() {
        return this.authService.tokenAccess;
    }
};
JwtService.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] // debuging purposes
     }
];
JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] // debuging purposes
    ])
], JwtService);



/***/ }),

/***/ "./src/app/shared/handler/notify/notify.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/handler/notify/notify.service.ts ***!
  \*********************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let NotifyService = class NotifyService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    openToastrConnection() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let message = 'No connection';
            const toast = yield this.toastr.create({
                message: message,
                duration: 3000,
                position: 'top',
                color: 'warning'
            });
            toast.present();
        });
    }
    openToastrError(statusText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let message = statusText;
            const toast = yield this.toastr.create({
                message: message,
                duration: 3000,
                position: 'top',
                color: 'danger'
            });
            toast.present();
        });
    }
    openToastr(statusText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let message = statusText;
            const toast = yield this.toastr.create({
                message: message,
                duration: 3000,
                position: 'top',
                color: 'primary'
            });
            toast.present();
        });
    }
};
NotifyService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], NotifyService);



/***/ }),

/***/ "./src/app/shared/interceptor/http.token.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/interceptor/http.token.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");
/* harmony import */ var _handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







let HttpTokenInterceptor = class HttpTokenInterceptor {
    constructor(jwtHandler, notificationHandler) {
        this.jwtHandler = jwtHandler;
        this.notificationHandler = notificationHandler;
    }
    handleError(error) {
        let data = {};
        data = {
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status
        };
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            // Server or connection error happened
            if (!navigator.onLine) {
                this.notificationHandler.openToastrConnection();
                // this.notificationHandler.openToastrConnection() <--
                // Handle offline error
            }
            else {
                this.notificationHandler.openToastrError(error.statusText);
                // this.notificationHandler.openToastrHttp(error.status, error.statusText) <--
                // Handle Http Error (error.status === 403, 404...)
            }
        }
        else {
            // Handle Client Error (Angular Error, ReferenceError...)     
        }
        console.error('It happens: ', error);
        // console.log('Error: ', error)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
    intercept(req, next) {
        // console.log('//...///')
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        };
        // const token = this.jwtHandler.getToken('accessToken'); // uncomment this later 
        const token = this.jwtHandler.getTokenDebug(); // comment this after debuging
        if (token) {
            headersConfig['Authorization'] = `Bearer ${token}`;
        }
        // console.log ('conf: ', headersConfig)
        // console.log('Token: ', token)
        // console.log('Intercepting...')
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // console.log('Event: ', event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
    }
};
HttpTokenInterceptor.ctorParameters = () => [
    { type: _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"] },
    { type: _handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] }
];
HttpTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"],
        _handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"]])
], HttpTokenInterceptor);



/***/ }),

/***/ "./src/app/shared/menu/menu-items.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/menu/menu-items.ts ***!
  \*******************************************/
/*! exports provided: Applicant, Evaluator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Applicant", function() { return Applicant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evaluator", function() { return Evaluator; });
const Applicant = [
    {
        title: 'Home',
        url: '/applicant/home',
        icon: 'today'
    },
    {
        title: 'MyHome',
        url: '/applicant/house',
        icon: 'home'
    },
    /*{
      title: 'Apply eRebate',
      url: '/applicant/application',
      icon: 'clipboard'
    },*/
    {
        title: 'Apply eRebate',
        url: '/applicant/apply-start',
        icon: 'clipboard'
    },
    {
        title: 'History',
        url: '/applicant/history',
        icon: 'list'
    },
    {
        title: 'Notification',
        url: '/applicant/notification',
        icon: 'notifications'
    },
    {
        title: 'Profile',
        url: '/applicant/profile',
        icon: 'person'
    },
    {
        title: 'Helpdesk',
        url: '/applicant/helpdesk',
        icon: 'help-buoy'
    },
    {
        title: 'FAQ',
        url: '/applicant/faq',
        icon: 'help-circle-outline'
    },
    /*{
      title: 'Guideline',
      url: '/applicant/guideline',
      icon: 'bookmarks'
    },*/
    {
        title: 'Logout',
        url: '/auth/login',
        icon: 'log-out'
    }
];
const Evaluator = [
    {
        title: 'Home',
        url: '/evaluator/home',
        icon: 'today'
    },
    {
        title: 'Notification',
        url: '/evaluator/notification',
        icon: 'clipboard'
    },
    {
        title: 'To evaluate',
        url: '/evaluator/application',
        icon: 'clipboard'
    },
    {
        title: 'Past evaluation',
        url: '/evaluator/history',
        icon: 'notifications'
    },
    {
        title: 'Helpdesk',
        url: '/evaluator/helpdesk',
        icon: 'help-buoy'
    },
    {
        title: 'Profile',
        url: '/evaluator/profile',
        icon: 'person'
    },
    {
        title: 'Logout',
        url: '/auth/login',
        icon: 'log-out'
    }
];


/***/ }),

/***/ "./src/app/shared/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/users/';
        this.urlRegister = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/registration/';
        this.urlReset = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/password/reset/';
        this.urlTokenObtain = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/obtain/';
        this.urlTokenRefresh = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/refresh/';
        this.urlTokenVerify = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/verify/';
        // Data
        this.users = [];
        this.occupations = [];
        this.isLoginSuccessful = false;
    }
    register(body) {
        return this.http.post(this.urlRegister, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            console.log('Registration: ', res);
            let urlUpdateUser = this.urlUser + res.user.pk + '/';
            let bodyUpdateUser = {
                new_nric: res.user.username
            };
            return this.http.put(urlUpdateUser, bodyUpdateUser).subscribe((res) => { console.log('Update registered user: ', res); }, (err) => { console.log('Error update registered user: ', err); });
        }));
    }
    resetPassword(body) {
        return this.http.post(this.urlReset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            console.log('Reset password response: ', res);
        }));
    }
    obtainToken(body) {
        let jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        return this.http.post(this.urlTokenObtain, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            this.token = res;
            this.tokenRefresh = res.refresh;
            this.tokenAccess = res.access;
            let decodedToken = jwtHelper.decodeToken(this.tokenAccess);
            this.email = decodedToken.email;
            this.username = decodedToken.username;
            this.userID = decodedToken.user_id;
            this.userType = decodedToken.user_type;
            // console.log('Decoded token: ', decodedToken)
            // console.log('Post response: ', res)
            // console.log('Token refresh', this.tokenRefresh)
            // console.log('Token access', this.tokenAccess)
            // console.log('Token: ', this.token)
            // console.log('Email: ', this.email)
            // console.log('Username: ', this.username)
            // console.log('User ID: ', this.userID)
            // console.log('User type: ', this.userType)
            this.isLoginSuccessful = true;
            this.getUserDetail().subscribe();
        }));
    }
    refreshToken(body) {
        return this.http.post(this.urlTokenRefresh, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            console.log('Token refresh: ', res);
            // this.token = res
        }));
    }
    getUsers() {
        return this.http.get(this.urlUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            this.users = res;
            console.log('Users: ', this.users);
        }));
    }
    update(body) {
        let urlUpdate = this.urlUser + this.userID + '/';
        return this.http.put(urlUpdate, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            console.log(res);
            this.getUserDetail().subscribe();
        }));
    }
    getUserDetail() {
        return this.http.get(this.urlUser + this.userID + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            console.log('Self detail: ', res);
            this.userSelfDetail = res;
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/translate-config.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/translate-config.service.ts ***!
  \*************************************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let TranslateConfigService = class TranslateConfigService {
    constructor(translate) {
        this.translate = translate;
    }
    getDefaultLanguage() {
        let language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        return language;
    }
    setLanguage(setLang) {
        this.translate.use(setLang);
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslateConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], TranslateConfigService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://127.0.0.1:8000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/syafiqbasri/Development/Project/SIC001/sic-001-mbpj-ghg-mobile/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map