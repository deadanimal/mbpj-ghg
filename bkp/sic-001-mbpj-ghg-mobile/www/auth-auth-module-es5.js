(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/forgot/forgot.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-content\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1 class=\"text-green\"> :( </h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1>{{ 'LOGIN.resetHere' | translate}}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<form [formGroup]=\"resetForm\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">{{ 'LOGIN.email' | translate}}</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"email\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"example@exampler.com.my\"\n\t\t\t\t\t\t\t\tformControlName=\"email\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of resetFormMessage.email\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"resetForm.get('email').hasError(message.type) && (resetForm.get('email').dirty || resetForm.get('email').touched)\">\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\tclass=\"btn-green-lg mt-1\"\n\t\t\t\t\t\t\t\t[disabled]=\"resetForm.status == 'INVALID'\"\n\t\t\t\t\t\t\t\t(click)=\"reset()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ 'LOGIN.resetPassword' | translate }}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login-applicant/login-applicant.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login-applicant/login-applicant.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t\t<!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-content\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1 class=\"text-green\" (click)=\"loginDebug()\">{{ 'LOGIN.applicant' | translate }}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1>{{ 'LOGIN.applicantGreet' | translate }}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<form [formGroup]=\"loginForm\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.username' | translate }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput \n\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\tmode=\"ios\" \n\t\t\t\t\t\t\t\tplaceholder=\"910101010101 / T01012910\"\n\t\t\t\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessage.username\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('username').hasError(message.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.password' | translate }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"*******\"\n\t\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessage.password\">\n\t\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\t\tclass=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('password').hasError(message.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\tclass=\"btn-green-lg mt-1\" \n\t\t\t\t\t\t\t\t[disabled]=\"loginForm.status == 'INVALID'\"\n\t\t\t\t\t\t\t\t(click)=\"login()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ 'LOGIN.btnLoginApplicant' | translate }}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\tclass=\"btn-outline-green-lg mt-1\" \n\t\t\t\t\t\t\t\t[routerLink]=\"['/auth/register']\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ 'LOGIN.btnRegister' | translate }}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<p [routerLink]=\"['/auth/forgot']\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.btnForgot' | translate }}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login-evaluator/login-evaluator.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login-evaluator/login-evaluator.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-content\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1 class=\"text-green\" (click)=\"loginDebug()\">{{ 'LOGIN.evaluator' | translate }}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1>{{ 'LOGIN.applicantGreet' | translate }}</h1>\n\t\t\t\t\t<h2>\n\t\t\t\t\t\t{{ 'LOGIN.ready' | translate}}\n\t\t\t\t\t\t<span (click)=\"loginDebug1()\">{{ 'LOGIN.earth' | translate }}?</span>\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<form [formGroup]=\"loginForm\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">{{ 'LOGIN.username' | translate }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"910101010101 / T01012910\"\n\t\t\t\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessage.username\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('username').hasError(message.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">{{ 'LOGIN.password' | translate }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"********\"\n\t\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessage.password\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('password').hasError(message.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\tclass=\"btn-green-lg mt-1\"\n\t\t\t\t\t\t\t\t[disabled]=\"loginForm.status == 'INVALID'\"\n\t\t\t\t\t\t\t\t(click)=\"login()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ 'LOGIN.btnLoginEvaluator' | translate }}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<p [routerLink]=\"['/auth/forgot']\">{{ 'LOGIN.btnForgot' | translate }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-content\" slot=\"fixed\">\n\t<div class=\"login-bg\"></div>\n\t<img class=\"login-logo\" [src]=\"imgMBPJ\">\n\t<img class=\"login-logo\" [src]=\"imgSmartPJ\">\n\t<div class=\"login-title\">\n\t\t<h2>Skim Rebat Cukai Taksiran Rumah Mesra Alam Hijau Petaling Jaya</h2>\n\t</div>\n\t<div class=\"login-selector\">\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label position=\"stacked\">{{ 'LOGIN.line1' | translate}}</ion-label>\n\t\t\t<ion-select [(ngModel)]=\"selectedUserType\" interface=\"alert\" placeholder=\"{{ 'LOGIN.applicant' | translate}}\">\n\t\t\t\t<ion-select-option selected value=\"AP\">{{ 'LOGIN.applicant' | translate}}</ion-select-option>\n\t\t\t\t<ion-select-option value=\"EV\">{{ 'LOGIN.evaluator' | translate}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-button class=\"btn-green-lg\" (click)=\"goToUserLogin()\">{{ 'LOGIN.btnLogin' | translate}}</ion-button>\n\t</div>\n\t<div class=\"login-footer\">\n\t\t<p>\n\t\t\t<span (click)=\"changeLanguageBM()\">Bahasa Melayu</span> | <span (click)=\"changeLanguageEN()\">English</span>\n\t\t</p>\n\t\t<span>Hak cipta terpelihara Majlis Bandaraya Petaling Jaya</span>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/logout/logout.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/logout/logout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-content\">\n  <ion-grid>\n    <ion-row>\n      <div class=\"section-title mt-4\">\n        <h1 class=\"text-green\">Successful</h1>\n      </div>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title mt-4\">\n          <h1>You have successfully logged out</h1>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" mode=\"ios\">\n          <ion-button \n            class=\"btn-green-lg mt-1\"\n            >\n              Back to login page\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t\t<!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-content\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1 class=\"text-green\">{{ 'LOGIN.applicant' | translate}}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1>{{ 'LOGIN.regHere' | translate}}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<form [formGroup]=\"registerForm\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.username' | translate}}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\t\tclearInput \n\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"910102110101\"\n\t\t\t\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of registerFormMessage.username\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"registerForm.get('username').hasError(message.type) && (registerForm.get('username').dirty || registerForm.get('username').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.password' | translate}}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"********\"\n\t\t\t\t\t\t\t\tformControlName=\"password1\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of registerFormMessage.password\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"registerForm.get('password1').hasError(message.type) && (registerForm.get('password1').dirty || registerForm.get('password1').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.confirmPassword' | translate}}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"********\"\n\t\t\t\t\t\t\t\tformControlName=\"password2\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\tclass=\"btn-green-lg mt-1\"\n\t\t\t\t\t\t\t\t[disabled]=\"registerForm.status == 'INVALID'\"\n\t\t\t\t\t\t\t\t(click)=\"register()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ 'LOGIN.regApplicant' | translate }}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<p [routerLink]=\"['/auth/forgot']\">{{ 'LOGIN.btnForgot' | translate }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _login_applicant_login_applicant_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-applicant/login-applicant.component */ "./src/app/auth/login-applicant/login-applicant.component.ts");
/* harmony import */ var _login_evaluator_login_evaluator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-evaluator/login-evaluator.component */ "./src/app/auth/login-evaluator/login-evaluator.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_13__["ForgotComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _login_applicant_login_applicant_component__WEBPACK_IMPORTED_MODULE_11__["LoginApplicantComponent"],
                _login_evaluator_login_evaluator_component__WEBPACK_IMPORTED_MODULE_12__["LoginEvaluatorComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutes"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forChild()
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.routing.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/*! exports provided: AuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _login_applicant_login_applicant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-applicant/login-applicant.component */ "./src/app/auth/login-applicant/login-applicant.component.ts");
/* harmony import */ var _login_evaluator_login_evaluator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-evaluator/login-evaluator.component */ "./src/app/auth/login-evaluator/login-evaluator.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");






var AuthRoutes = [
    {
        path: 'forgot',
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__["ForgotComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    },
    {
        path: 'login-applicant',
        component: _login_applicant_login_applicant_component__WEBPACK_IMPORTED_MODULE_3__["LoginApplicantComponent"]
    },
    {
        path: 'login-evaluator',
        component: _login_evaluator_login_evaluator_component__WEBPACK_IMPORTED_MODULE_4__["LoginEvaluatorComponent"]
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__["LogoutComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }
];


/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 40vh;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbVxuICAgIH1cbn0iLCIuYXV0aC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNvbnRlbnQtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIG1hcmdpbjogMDtcbn1cbi5lcnJvci10ZXh0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.ts ***!
  \*************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");







var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(authService, notifyService, formBuilder, loadingCtrl, router) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        // Data
        this.email = '';
        this.resetFormMessage = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'A valid email is required' }
            ]
        };
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]))
        });
    };
    ForgotComponent.prototype.reset = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.authService.resetPassword(this.resetForm.value).subscribe(function () {
                            // console.log('Reset success')
                            _this.loadingMessage.dismiss();
                        }, function () {
                            // console.log('Reset unsuccessful')
                            _this.loadingMessage.dismiss();
                        }, function () {
                            // console.log('After that')
                            _this.successMessage();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotComponent.prototype.successMessage = function () {
        var message = 'Reset password successful, a link is sent to your email';
        this.notifyService.openToastr(message);
    };
    ForgotComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/app/auth/forgot/forgot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/auth/login-applicant/login-applicant.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/login-applicant/login-applicant.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 40vh;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2F1dGgvbG9naW4tYXBwbGljYW50L2xvZ2luLWFwcGxpY2FudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi1hcHBsaWNhbnQvbG9naW4tYXBwbGljYW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4tYXBwbGljYW50L2xvZ2luLWFwcGxpY2FudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbVxuICAgIH1cbn0iLCIuYXV0aC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNvbnRlbnQtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIG1hcmdpbjogMDtcbn1cbi5lcnJvci10ZXh0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login-applicant/login-applicant.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/login-applicant/login-applicant.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginApplicantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginApplicantComponent", function() { return LoginApplicantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/ticket-questions/ticket-questions.service */ "./src/app/shared/services/ticket-questions/ticket-questions.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");









var LoginApplicantComponent = /** @class */ (function () {
    function LoginApplicantComponent(authService, applicationService, houseService, ticketQuestionService, formBuilder, loadingCtrl, navController, notifyService) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.houseService = houseService;
        this.ticketQuestionService = ticketQuestionService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.notifyService = notifyService;
        this.loginFormMessage = {
            'username': [
                { type: 'required', message: 'Your NRIC/passport is required' },
                { type: 'minlength', message: 'Passport must be 9 characters long' },
                { type: 'maxlength', message: 'NRIC cannot be more than 12 characters long' },
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Password is too short' }
            ]
        };
    }
    LoginApplicantComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
            ]))
        });
    };
    LoginApplicantComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // console.log(this.loginForm)
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        // console.log(this.loginForm)
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.authService.obtainToken(this.loginForm.value).subscribe(function () {
                            // console.log('Accepted')
                            // this.loadingMessage.dismiss()
                        }, function () {
                            // console.log('Rejected')
                            _this.loadingMessage.dismiss();
                        }, function () {
                            if (_this.authService.userType == "AP") {
                                _this.fetchData();
                            }
                            else {
                                var message = 'Not authorized';
                                _this.notifyService.openToastrError(message);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginApplicantComponent.prototype.loginDebug = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loginForm.value.username = '919191019191';
                        this.loginForm.value.password = 'poopoo1230';
                        // console.log('Cheating here')
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        // console.log('Cheating here')
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.authService.obtainToken(this.loginForm.value).subscribe(function () {
                            //console.log('Accepted')
                        }, function () {
                            //console.log('Rejected')
                            _this.loadingMessage.dismiss();
                        }, function () {
                            if (_this.authService.userType == 'AP') {
                                _this.fetchData();
                            }
                            else {
                                var message = 'Not authorized';
                                _this.notifyService.openToastrError(message);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginApplicantComponent.prototype.fetchData = function () {
        var _this = this;
        var message = 'Welcome back!';
        this.houseService.getUser(this.authService.userID).subscribe();
        this.applicationService.getApplicant(this.authService.userID).subscribe(function () { }, function () {
            _this.loadingMessage.dismiss();
        }, function () {
            _this.notifyService.openToastr(message);
            _this.loadingMessage.dismiss();
            _this.navController.navigateBack(('/applicant/home'));
        });
        this.ticketQuestionService.getUser(this.authService.userID).subscribe();
    };
    LoginApplicantComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationsService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"] },
        { type: src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_7__["TicketQuestionsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"] }
    ]; };
    LoginApplicantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-applicant',
            template: __webpack_require__(/*! raw-loader!./login-applicant.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login-applicant/login-applicant.component.html"),
            styles: [__webpack_require__(/*! ./login-applicant.component.scss */ "./src/app/auth/login-applicant/login-applicant.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationsService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"],
            src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_7__["TicketQuestionsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"]])
    ], LoginApplicantComponent);
    return LoginApplicantComponent;
}());



/***/ }),

/***/ "./src/app/auth/login-evaluator/login-evaluator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/login-evaluator/login-evaluator.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 50%;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2F1dGgvbG9naW4tZXZhbHVhdG9yL2xvZ2luLWV2YWx1YXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi1ldmFsdWF0b3IvbG9naW4tZXZhbHVhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4tZXZhbHVhdG9yL2xvZ2luLWV2YWx1YXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA1MCU7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtXG4gICAgfVxufSIsIi5hdXRoLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmF1dGgtY29udGVudC1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDUwJTtcbn1cblxuLmVycm9yLXRleHQge1xuICBtYXJnaW46IDA7XG59XG4uZXJyb3ItdGV4dCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/login-evaluator/login-evaluator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/login-evaluator/login-evaluator.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginEvaluatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEvaluatorComponent", function() { return LoginEvaluatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/application-assessments/application-assessments.service */ "./src/app/shared/services/application-assessments/application-assessments.service.ts");
/* harmony import */ var src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/assessment-aspects/assessment-aspects.service */ "./src/app/shared/services/assessment-aspects/assessment-aspects.service.ts");
/* harmony import */ var src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/evaluation-schedules/evaluation-schedules.service */ "./src/app/shared/services/evaluation-schedules/evaluation-schedules.service.ts");
/* harmony import */ var src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/evaluations/evaluations.service */ "./src/app/shared/services/evaluations/evaluations.service.ts");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/ticket-answers/ticket-answers.service */ "./src/app/shared/services/ticket-answers/ticket-answers.service.ts");
/* harmony import */ var src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/ticket-questions/ticket-questions.service */ "./src/app/shared/services/ticket-questions/ticket-questions.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");















var LoginEvaluatorComponent = /** @class */ (function () {
    function LoginEvaluatorComponent(authService, applicationService, applicationAssessmentService, assessmentAspectService, evaluationService, evaluationScheduleService, houseService, ticketAnswerService, ticketQuestionService, formBuilder, loadingCtrl, notifyService, router
    //private applicationEvaluationService: ApplicationEvaluationsService,
    //private applicationEvaluationAssessmentService: ApplicationEvaluationAssessmentsService,
    //private applicationEvaluationScheduleService: ApplicationEvaluationsService,
    ) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.applicationAssessmentService = applicationAssessmentService;
        this.assessmentAspectService = assessmentAspectService;
        this.evaluationService = evaluationService;
        this.evaluationScheduleService = evaluationScheduleService;
        this.houseService = houseService;
        this.ticketAnswerService = ticketAnswerService;
        this.ticketQuestionService = ticketQuestionService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.notifyService = notifyService;
        this.router = router;
        this.loginFormMessage = {
            'username': [
                { type: 'required', message: 'Your NRIC/passport is required' },
                { type: 'minlength', message: 'NRIC must be 12 characters long.' },
                { type: 'maxlength', message: 'NRIC cannot be more than 12 characters long.' },
                { type: 'pattern', message: 'Please enter NRIC without (-)' },
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minLength', message: 'Password is too short' }
            ]
        };
    }
    LoginEvaluatorComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(12),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
            ]))
        });
    };
    LoginEvaluatorComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // console.log(this.loginForm)
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        // console.log(this.loginForm)
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.authService.obtainToken(this.loginForm.value).subscribe(function () {
                            // console.log('Accepted')
                        }, function () {
                            // console.log('Rejected')
                            _this.loadingMessage.dismiss();
                        }, function () {
                            // console.log('After that')
                            if (_this.authService.userType == "EV") {
                                _this.fetchData();
                            }
                            else {
                                //console.log('Salah type')
                                _this.loadingMessage.dismiss();
                                var message = 'Not authorized';
                                _this.notifyService.openToastrError(message);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginEvaluatorComponent.prototype.loginDebug = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loginForm.value.username = '998877665544';
                        this.loginForm.value.password = 'poopoo1230';
                        // console.log('Sorry termalas')
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        // console.log('Sorry termalas')
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.authService.obtainToken(this.loginForm.value).subscribe(function () {
                            // console.log('Accepted')
                            // this.successfulToast()
                        }, function () {
                            // console.log('Rejected')
                            _this.loadingMessage.dismiss();
                            // this.unsuccessfulLoginAlert()
                        }, function () {
                            if (_this.authService.userType == "EV") {
                                _this.fetchData();
                            }
                            else {
                                _this.loadingMessage.dismiss();
                                var message = 'Not authorized';
                                _this.notifyService.openToastrError(message);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginEvaluatorComponent.prototype.loginDebug1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loginForm.value.username = 'sb@prototype.com.my';
                        this.loginForm.value.password = 'poopoo1230';
                        // console.log('Sorry termalas')
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        // console.log('Sorry termalas')
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.authService.obtainToken(this.loginForm.value).subscribe(function () {
                            // console.log('Accepted')
                            // this.successfulToast()
                        }, function () {
                            // console.log('Rejected')
                            _this.loadingMessage.dismiss();
                            // this.unsuccessfulLoginAlert()
                        }, function () {
                            if (_this.authService.userType == "EV") {
                                _this.fetchData();
                            }
                            else {
                                _this.loadingMessage.dismiss();
                                var message = 'Not authorized';
                                _this.notifyService.openToastrError(message);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginEvaluatorComponent.prototype.fetchData = function () {
        var _this = this;
        var message = 'Welcome back!';
        this.applicationService.getApplicant(this.authService.userID).subscribe(function () { }, function () {
            _this.loadingMessage.dismiss();
        }, function () {
            _this.notifyService.openToastr(message);
            _this.loadingMessage.dismiss();
            _this.router.navigate(['/evaluator/home']);
        });
        this.applicationAssessmentService.get().subscribe();
        this.assessmentAspectService.get().subscribe();
        this.evaluationService.get().subscribe();
        this.evaluationScheduleService.get().subscribe();
        this.houseService.getUser(this.authService.userID).subscribe();
        this.ticketAnswerService.getUser(this.authService.userID).subscribe();
        this.ticketQuestionService.getUser(this.authService.userID).subscribe();
    };
    LoginEvaluatorComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationsService"] },
        { type: src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationAssessmentsService"] },
        { type: src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_8__["AssessmentAspectsService"] },
        { type: src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_10__["EvaluationsService"] },
        { type: src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_9__["EvaluationSchedulesService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_11__["HousesService"] },
        { type: src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_12__["TicketAnswersService"] },
        { type: src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_13__["TicketQuestionsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_14__["NotifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginEvaluatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-evaluator',
            template: __webpack_require__(/*! raw-loader!./login-evaluator.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login-evaluator/login-evaluator.component.html"),
            styles: [__webpack_require__(/*! ./login-evaluator.component.scss */ "./src/app/auth/login-evaluator/login-evaluator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationsService"],
            src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationAssessmentsService"],
            src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_8__["AssessmentAspectsService"],
            src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_10__["EvaluationsService"],
            src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_9__["EvaluationSchedulesService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_11__["HousesService"],
            src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_12__["TicketAnswersService"],
            src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_13__["TicketQuestionsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_14__["NotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            //private applicationEvaluationService: ApplicationEvaluationsService,
            //private applicationEvaluationAssessmentService: ApplicationEvaluationAssessmentsService,
            //private applicationEvaluationScheduleService: ApplicationEvaluationsService,
        ])
    ], LoginEvaluatorComponent);
    return LoginEvaluatorComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  height: 100vh;\n  max-height: 100vh;\n  min-height: 100vh;\n  --background: #fff url('bg-mbpj.JPG') no-repeat 50% 20%;\n  text-align: center;\n  -ms-background-size: cover;\n  background-size: cover;\n  z-index: 9999;\n}\n\n.login-bg {\n  background-image: url('mbpj-tower-2.png');\n  z-index: 1;\n}\n\n.login-logo {\n  margin-top: 18vh;\n  max-width: 6rem;\n}\n\n.house-img {\n  max-width: 50vw;\n}\n\n.login-title {\n  margin-top: 2vh;\n  margin-bottom: 2vh;\n}\n\n.login-title h2 {\n  font-size: 1.5em;\n  color: white;\n}\n\n.login-selector {\n  margin-top: 4vh;\n  padding-right: 5vh;\n  padding-left: 5vh;\n}\n\n.login-selector ion-item {\n  --border-radius: 1rem;\n  --background: rgb(255, 255, 255);\n}\n\n.login-selector ion-button {\n  margin-top: 2vh;\n}\n\n.login-footer {\n  bottom: 1rem;\n  position: absolute;\n  width: 100%;\n}\n\n.login-footer p {\n  color: white;\n}\n\n.login-footer span {\n  font-size: 0.8rem;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUlBLHNCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDRVI7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREFJO0VBQ0kscUJBQUE7RUFDQSxnQ0FBQTtBQ0VSOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBREdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRENJO0VBQ0ksWUFBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgLy8tLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCdzcmMvYXNzZXRzL2ltZy9jdXN0b20vYmctbWJwai5KUEcnKSBuby1yZXBlYXQgNTAlIDIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgei1pbmRleDogOTk5OTtcbn1cbi5sb2dpbi1iZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltZy9jdXN0b20vbWJwai10b3dlci0yLnBuZycpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAxOHZoO1xuICAgIG1heC13aWR0aDogNnJlbTtcbn1cblxuLmhvdXNlLWltZyB7XG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xufVxuXG4ubG9naW4tdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4ubG9naW4tc2VsZWN0b3Ige1xuICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1dmg7XG4gICAgcGFkZGluZy1sZWZ0OiA1dmg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIH1cbn1cblxuLmxvZ2luLWZvb3RlciB7XG4gICAgYm90dG9tOiAxcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59IiwiLmxvZ2luLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9jdXN0b20vYmctbWJwai5KUEdcIikgbm8tcmVwZWF0IDUwJSAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9naW4tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9jdXN0b20vbWJwai10b3dlci0yLnBuZ1wiKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBtYXJnaW4tdG9wOiAxOHZoO1xuICBtYXgtd2lkdGg6IDZyZW07XG59XG5cbi5ob3VzZS1pbWcge1xuICBtYXgtd2lkdGg6IDUwdnc7XG59XG5cbi5sb2dpbi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xufVxuLmxvZ2luLXRpdGxlIGgyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tc2VsZWN0b3Ige1xuICBtYXJnaW4tdG9wOiA0dmg7XG4gIHBhZGRpbmctcmlnaHQ6IDV2aDtcbiAgcGFkZGluZy1sZWZ0OiA1dmg7XG59XG4ubG9naW4tc2VsZWN0b3IgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLmxvZ2luLXNlbGVjdG9yIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi5sb2dpbi1mb290ZXIge1xuICBib3R0b206IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9naW4tZm9vdGVyIHAge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4tZm9vdGVyIHNwYW4ge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/translate-config.service */ "./src/app/shared/services/translate-config.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/application-assessments/application-assessments.service */ "./src/app/shared/services/application-assessments/application-assessments.service.ts");
/* harmony import */ var src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/assessment-aspects/assessment-aspects.service */ "./src/app/shared/services/assessment-aspects/assessment-aspects.service.ts");
/* harmony import */ var src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/evaluations/evaluations.service */ "./src/app/shared/services/evaluations/evaluations.service.ts");
/* harmony import */ var src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/evaluation-schedules/evaluation-schedules.service */ "./src/app/shared/services/evaluation-schedules/evaluation-schedules.service.ts");
/* harmony import */ var src_app_shared_services_faqs_faqs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/faqs/faqs.service */ "./src/app/shared/services/faqs/faqs.service.ts");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var src_app_shared_services_organisations_organisations_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/organisations/organisations.service */ "./src/app/shared/services/organisations/organisations.service.ts");
/* harmony import */ var src_app_shared_services_organisation_types_organisation_types_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/organisation-types/organisation-types.service */ "./src/app/shared/services/organisation-types/organisation-types.service.ts");
/* harmony import */ var src_app_shared_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/medias/medias.service */ "./src/app/shared/services/medias/medias.service.ts");
/* harmony import */ var src_app_shared_services_rebates_rebates_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/rebates/rebates.service */ "./src/app/shared/services/rebates/rebates.service.ts");
/* harmony import */ var src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/ticket-answers/ticket-answers.service */ "./src/app/shared/services/ticket-answers/ticket-answers.service.ts");
/* harmony import */ var src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/ticket-questions/ticket-questions.service */ "./src/app/shared/services/ticket-questions/ticket-questions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


















var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, applicationService, applicationAssessmentService, assessmentAspectService, evaluationService, evaluationScheduleService, faqService, houseService, mediaService, organisationService, organisationTypeService, rebateService, ticketAnswerService, ticketQuestionService, translateServices, router) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.applicationAssessmentService = applicationAssessmentService;
        this.assessmentAspectService = assessmentAspectService;
        this.evaluationService = evaluationService;
        this.evaluationScheduleService = evaluationScheduleService;
        this.faqService = faqService;
        this.houseService = houseService;
        this.mediaService = mediaService;
        this.organisationService = organisationService;
        this.organisationTypeService = organisationTypeService;
        this.rebateService = rebateService;
        this.ticketAnswerService = ticketAnswerService;
        this.ticketQuestionService = ticketQuestionService;
        this.translateServices = translateServices;
        this.router = router;
        this.imgMBPJ = 'assets/img/logo/mbpj-logo.png';
        this.imgSmartPJ = 'assets/img/logo/smart-pj.png';
        this.imgHouse = 'assets/img/custom/green-house.png';
        this.selectedUserType = 'AP';
        this.initServices();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.userType = '';
        this.authService.tokenAccess = '';
        this.authService.tokenRefresh = '';
        this.authService.token = '';
        this.authService.userID = '';
    };
    LoginComponent.prototype.initServices = function () {
        this.authService.getUsers().subscribe();
        this.applicationService.get().subscribe();
        this.applicationAssessmentService.get().subscribe();
        this.assessmentAspectService.get().subscribe();
        this.evaluationService.get().subscribe();
        this.evaluationScheduleService.get().subscribe();
        this.faqService.get().subscribe();
        this.houseService.get().subscribe();
        this.mediaService.get().subscribe();
        this.organisationService.get().subscribe();
        this.organisationTypeService.get().subscribe();
        this.rebateService.get().subscribe();
        this.ticketAnswerService.get().subscribe();
        this.ticketQuestionService.get().subscribe();
    };
    LoginComponent.prototype.changeLanguageBM = function () {
        this.translateServices.setLanguage('my');
    };
    LoginComponent.prototype.changeLanguageEN = function () {
        this.translateServices.setLanguage('en');
    };
    LoginComponent.prototype.goToUserLogin = function () {
        // console.log('Login button clicked')
        // console.log(this.selectedUserType)
        if (this.selectedUserType == 'AP') {
            this.router.navigate(['/auth/login-applicant']);
        }
        else if (this.selectedUserType == 'EV') {
            this.router.navigate(['/auth/login-evaluator']);
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationsService"] },
        { type: src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationAssessmentsService"] },
        { type: src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentAspectsService"] },
        { type: src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_7__["EvaluationsService"] },
        { type: src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_8__["EvaluationSchedulesService"] },
        { type: src_app_shared_services_faqs_faqs_service__WEBPACK_IMPORTED_MODULE_9__["FaqsService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__["HousesService"] },
        { type: src_app_shared_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_13__["MediasService"] },
        { type: src_app_shared_services_organisations_organisations_service__WEBPACK_IMPORTED_MODULE_11__["OrganisationsService"] },
        { type: src_app_shared_services_organisation_types_organisation_types_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationTypesService"] },
        { type: src_app_shared_services_rebates_rebates_service__WEBPACK_IMPORTED_MODULE_14__["RebatesService"] },
        { type: src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_15__["TicketAnswersService"] },
        { type: src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_16__["TicketQuestionsService"] },
        { type: src_app_shared_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationsService"],
            src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationAssessmentsService"],
            src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentAspectsService"],
            src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_7__["EvaluationsService"],
            src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_8__["EvaluationSchedulesService"],
            src_app_shared_services_faqs_faqs_service__WEBPACK_IMPORTED_MODULE_9__["FaqsService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__["HousesService"],
            src_app_shared_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_13__["MediasService"],
            src_app_shared_services_organisations_organisations_service__WEBPACK_IMPORTED_MODULE_11__["OrganisationsService"],
            src_app_shared_services_organisation_types_organisation_types_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationTypesService"],
            src_app_shared_services_rebates_rebates_service__WEBPACK_IMPORTED_MODULE_14__["RebatesService"],
            src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_15__["TicketAnswersService"],
            src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_16__["TicketQuestionsService"],
            src_app_shared_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 40vh;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbVxuICAgIH1cbn0iLCIuYXV0aC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNvbnRlbnQtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIG1hcmdpbjogMDtcbn1cbi5lcnJvci10ZXh0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () { };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/auth/logout/logout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 40vh;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm9qZWN0L1NJQzAwMS9zaWMtMDAxLW1icGotZ2hnLW1vYmlsZS9zcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURBSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbVxuICAgIH1cbn0iLCIuYXV0aC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNvbnRlbnQtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIG1hcmdpbjogMDtcbn1cbi5lcnJvci10ZXh0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, loadingCtrl, router, formBuilder, notifyService) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.notifyService = notifyService;
        // Form
        this.email = '';
        this.pwd = '';
        this.pwdConfirm = '';
        this.registerFormMessage = {
            'username': [
                { type: 'required', message: 'Your NRIC/passport is required' },
                { type: 'minlength', message: 'Passport must be 9 characters long' },
                { type: 'maxlength', message: 'NRIC cannot be more than 12 characters long' },
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Password is too short' }
            ]
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12),
            ])),
            password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
            ])),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
            ]))
        });
    };
    RegisterComponent.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        console.log(this.registerForm);
                        if (this.registerForm.value.password1 != this.registerForm.value.password2) {
                            this.passwordError();
                            this.loadingMessage.dismiss();
                        }
                        else {
                            this.authService.register(this.registerForm.value).subscribe(function () {
                                // console.log('Registration success')
                                // this.successfulToast()
                            }, function () {
                                // console.log('Registration unsuccessful')
                                _this.loadingMessage.dismiss();
                            }, function () {
                                // console.log('After that')
                                _this.loadingMessage.dismiss();
                                var message = 'Registration successful. You may now login';
                                _this.notifyService.openToastr(message);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.passwordError = function () {
        var message = 'Password and confirm password do not match';
        this.notifyService.openToastrError(message);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/medias/medias.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/medias/medias.service.ts ***!
  \**********************************************************/
/*! exports provided: MediasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediasService", function() { return MediasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MediasService = /** @class */ (function () {
    function MediasService(http) {
        this.http = http;
        // URL
        this.urlMedia = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/medias/';
    }
    MediasService.prototype.get = function () {
        var _this = this;
        return this.http.get(this.urlMedia).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.medias = res;
            console.log('Medias: ', _this.medias);
        }));
    };
    MediasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    MediasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MediasService);
    return MediasService;
}());



/***/ }),

/***/ "./src/app/shared/services/organisation-types/organisation-types.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/services/organisation-types/organisation-types.service.ts ***!
  \**********************************************************************************/
/*! exports provided: OrganisationTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationTypesService", function() { return OrganisationTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OrganisationTypesService = /** @class */ (function () {
    function OrganisationTypesService(http) {
        this.http = http;
        // URL
        this.urlTypes = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/organisation-types/';
        // Data
        this.types = [];
    }
    OrganisationTypesService.prototype.create = function (body) {
        return this.http.post(this.urlTypes, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Create organisation type: ', res);
        }));
    };
    OrganisationTypesService.prototype.get = function () {
        var _this = this;
        return this.http.get(this.urlTypes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.types = res;
            console.log('Organisation types: ', _this.types);
        }));
    };
    OrganisationTypesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    OrganisationTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OrganisationTypesService);
    return OrganisationTypesService;
}());



/***/ }),

/***/ "./src/app/shared/services/organisations/organisations.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/organisations/organisations.service.ts ***!
  \************************************************************************/
/*! exports provided: OrganisationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationsService", function() { return OrganisationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OrganisationsService = /** @class */ (function () {
    function OrganisationsService(http) {
        this.http = http;
        // URL
        this.urlOrganisation = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/organisations/';
        // Data
        this.organisations = [];
    }
    OrganisationsService.prototype.create = function (body) {
        return this.http.post(this.urlOrganisation, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Create organisation: ', res);
        }));
    };
    OrganisationsService.prototype.get = function () {
        var _this = this;
        return this.http.get(this.urlOrganisation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.organisations = res;
            console.log('Organisations: ', _this.organisations);
        }));
    };
    OrganisationsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    OrganisationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OrganisationsService);
    return OrganisationsService;
}());



/***/ }),

/***/ "./src/app/shared/services/rebates/rebates.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/rebates/rebates.service.ts ***!
  \************************************************************/
/*! exports provided: RebatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RebatesService", function() { return RebatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var RebatesService = /** @class */ (function () {
    function RebatesService(http) {
        this.http = http;
        // URL
        this.urlRebate = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/rebates/';
        // Data
        this.rebates = [];
    }
    RebatesService.prototype.create = function (body) {
        return this.http.post(this.urlRebate, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Create rebate: ', res);
        }));
    };
    RebatesService.prototype.get = function () {
        var _this = this;
        return this.http.get(this.urlRebate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.rebates = res;
            console.log('Rebate types: ', _this.rebates);
        }));
    };
    RebatesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    RebatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RebatesService);
    return RebatesService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es5.js.map