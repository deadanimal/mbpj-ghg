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

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t\t<!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-content\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1 class=\"text-green\">{{ 'LOGIN.applicant' | translate }}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1>{{ 'LOGIN.applicantGreet' | translate }}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<form [formGroup]=\"loginForm\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.username' | translate }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput \n\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\tmode=\"ios\" \n\t\t\t\t\t\t\t\tplaceholder=\"910101010101 / T01012910\"\n\t\t\t\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessage.username\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('username').hasError(message.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.password' | translate }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"*******\"\n\t\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessage.password\">\n\t\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\t\tclass=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('password').hasError(message.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\tclass=\"btn-green-lg mt-1\" \n\t\t\t\t\t\t\t\t[disabled]=\"loginForm.status == 'INVALID'\"\n\t\t\t\t\t\t\t\t(click)=\"login()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ 'LOGIN.btnLoginApplicant' | translate }}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\tclass=\"btn-outline-green-lg mt-1\" \n\t\t\t\t\t\t\t\t[routerLink]=\"['/auth/register']\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ 'LOGIN.btnRegister' | translate }}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<p [routerLink]=\"['/auth/forgot']\">\n\t\t\t\t\t\t\t\t{{ 'LOGIN.btnForgot' | translate }}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login-evaluator/login-evaluator.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login-evaluator/login-evaluator.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button color=\"ghg-green\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-content\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1 class=\"text-green\">{{ 'LOGIN.evaluator' | translate }}</h1>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"section-title mt-4\">\n\t\t\t\t\t<h1>{{ 'LOGIN.applicantGreet' | translate }}</h1>\n\t\t\t\t\t<h2>\n\t\t\t\t\t\t{{ 'LOGIN.ready' | translate}}\n\t\t\t\t\t\t<span>{{ 'LOGIN.earth' | translate }}?</span>\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<form [formGroup]=\"loginForm\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">{{ 'LOGIN.username' | translate }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"910101010101 / T01012910\"\n\t\t\t\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessage.username\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('username').hasError(message.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\" mode=\"ios\">{{ 'LOGIN.password' | translate }}\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input \n\t\t\t\t\t\t\t\tclearInput\n\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\tplaceholder=\"********\"\n\t\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessage.password\">\n\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('password').hasError(message.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"error-text\"><span>*{{ message.message }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" mode=\"ios\">\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\tclass=\"btn-green-lg mt-1\"\n\t\t\t\t\t\t\t\t[disabled]=\"loginForm.status == 'INVALID'\"\n\t\t\t\t\t\t\t\t(click)=\"login()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ 'LOGIN.btnLoginEvaluator' | translate }}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<p [routerLink]=\"['/auth/forgot']\">{{ 'LOGIN.btnForgot' | translate }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _login_applicant_login_applicant_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-applicant/login-applicant.component */ "./src/app/auth/login-applicant/login-applicant.component.ts");
/* harmony import */ var _login_evaluator_login_evaluator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-evaluator/login-evaluator.component */ "./src/app/auth/login-evaluator/login-evaluator.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");















let AuthModule = class AuthModule {
};
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






const AuthRoutes = [
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

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 40vh;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9hdXRoL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmF1dGgtY29udGVudC1mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmVycm9yLXRleHQge1xuICAgIG1hcmdpbjogMDtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW1cbiAgICB9XG59IiwiLmF1dGgtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmVycm9yLXRleHQge1xuICBtYXJnaW46IDA7XG59XG4uZXJyb3ItdGV4dCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let ForgotComponent = class ForgotComponent {
    constructor(authService, notifyService, formBuilder, loadingCtrl, router) {
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
    ngOnInit() {
        this.resetForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]))
        });
    }
    reset() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingMessage = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            this.authService.resetPassword(this.resetForm.value).subscribe(() => {
                // console.log('Reset success')
                this.loadingMessage.dismiss();
            }, () => {
                // console.log('Reset unsuccessful')
                this.loadingMessage.dismiss();
            }, () => {
                // console.log('After that')
                this.successMessage();
            });
        });
    }
    successMessage() {
        let message = 'Reset password successful, a link is sent to your email';
        this.notifyService.openToastr(message);
    }
};
ForgotComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
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



/***/ }),

/***/ "./src/app/auth/login-applicant/login-applicant.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/login-applicant/login-applicant.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 40vh;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9hdXRoL2xvZ2luLWFwcGxpY2FudC9sb2dpbi1hcHBsaWNhbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4tYXBwbGljYW50L2xvZ2luLWFwcGxpY2FudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luLWFwcGxpY2FudC9sb2dpbi1hcHBsaWNhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmF1dGgtY29udGVudC1mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmVycm9yLXRleHQge1xuICAgIG1hcmdpbjogMDtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW1cbiAgICB9XG59IiwiLmF1dGgtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmVycm9yLXRleHQge1xuICBtYXJnaW46IDA7XG59XG4uZXJyb3ItdGV4dCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/ticket-questions/ticket-questions.service */ "./src/app/shared/services/ticket-questions/ticket-questions.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");









let LoginApplicantComponent = class LoginApplicantComponent {
    constructor(authService, applicationService, houseService, ticketQuestionService, formBuilder, loadingCtrl, navController, notifyService) {
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
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('931006055518', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('PabloEscobar', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
            ]))
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.loginForm)
            this.loadingMessage = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            this.authService.obtainToken(this.loginForm.value).subscribe(() => {
                // console.log('Accepted')
                // this.loadingMessage.dismiss()
            }, () => {
                // console.log('Rejected')
                this.loadingMessage.dismiss();
            }, () => {
                if (this.authService.userType == "AP") {
                    this.fetchData();
                }
                else {
                    let message = 'Not authorized';
                    this.notifyService.openToastrError(message);
                }
            });
        });
    }
    fetchData() {
        let message = 'Welcome back!';
        this.houseService.getUser(this.authService.userID).subscribe();
        this.applicationService.getApplicant(this.authService.userID).subscribe(() => { }, () => {
            this.loadingMessage.dismiss();
        }, () => {
            this.notifyService.openToastr(message);
            this.loadingMessage.dismiss();
            this.navController.navigateBack(('/applicant/home'));
        });
        this.ticketQuestionService.getUser(this.authService.userID).subscribe();
    }
};
LoginApplicantComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationsService"] },
    { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"] },
    { type: src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_7__["TicketQuestionsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"] }
];
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



/***/ }),

/***/ "./src/app/auth/login-evaluator/login-evaluator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/login-evaluator/login-evaluator.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 50%;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9hdXRoL2xvZ2luLWV2YWx1YXRvci9sb2dpbi1ldmFsdWF0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4tZXZhbHVhdG9yL2xvZ2luLWV2YWx1YXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luLWV2YWx1YXRvci9sb2dpbi1ldmFsdWF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmF1dGgtY29udGVudC1mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbVxuICAgIH1cbn0iLCIuYXV0aC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNvbnRlbnQtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgbWFyZ2luOiAwO1xufVxuLmVycm9yLXRleHQgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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















let LoginEvaluatorComponent = class LoginEvaluatorComponent {
    constructor(authService, applicationService, applicationAssessmentService, assessmentAspectService, evaluationService, evaluationScheduleService, houseService, ticketAnswerService, ticketQuestionService, formBuilder, loadingCtrl, notifyService, router
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
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('931006055519', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(12),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('PabloEscobar', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
            ]))
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.loginForm)
            this.loadingMessage = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            this.authService.obtainToken(this.loginForm.value).subscribe(() => {
                // console.log('Accepted')
            }, () => {
                // console.log('Rejected')
                this.loadingMessage.dismiss();
            }, () => {
                // console.log('After that')
                if (this.authService.userType == "EV") {
                    this.fetchData();
                }
                else {
                    //console.log('Salah type')
                    this.loadingMessage.dismiss();
                    let message = 'Not authorized';
                    this.notifyService.openToastrError(message);
                }
            });
        });
    }
    fetchData() {
        let message = 'Welcome back!';
        this.applicationService.getApplicant(this.authService.userID).subscribe(() => { }, () => {
            this.loadingMessage.dismiss();
        }, () => {
            this.notifyService.openToastr(message);
            this.loadingMessage.dismiss();
            this.router.navigate(['/evaluator/home']);
        });
        this.applicationAssessmentService.get().subscribe();
        this.assessmentAspectService.get().subscribe();
        this.evaluationService.get().subscribe();
        this.evaluationScheduleService.get().subscribe();
        this.houseService.getUser(this.authService.userID).subscribe();
        this.ticketAnswerService.getUser(this.authService.userID).subscribe();
        this.ticketQuestionService.getUser(this.authService.userID).subscribe();
        this.applicationService.getEvaluator(this.authService.userID).subscribe();
    }
};
LoginEvaluatorComponent.ctorParameters = () => [
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
];
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



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  height: 100vh;\n  max-height: 100vh;\n  min-height: 100vh;\n  --background: #fff url('bg-mbpj.JPG') no-repeat 50% 20%;\n  text-align: center;\n  -ms-background-size: cover;\n  background-size: cover;\n  z-index: 9999;\n}\n\n.login-bg {\n  background-image: url('mbpj-tower-2.png');\n  z-index: 1;\n}\n\n.login-logo {\n  margin-top: 18vh;\n  max-width: 6rem;\n}\n\n.house-img {\n  max-width: 50vw;\n}\n\n.login-title {\n  margin-top: 2vh;\n  margin-bottom: 2vh;\n}\n\n.login-title h2 {\n  font-size: 1.5em;\n  color: white;\n}\n\n.login-selector {\n  margin-top: 4vh;\n  padding-right: 5vh;\n  padding-left: 5vh;\n}\n\n.login-selector ion-item {\n  --border-radius: 1rem;\n  --background: rgb(255, 255, 255);\n}\n\n.login-selector ion-button {\n  margin-top: 2vh;\n}\n\n.login-footer {\n  bottom: 1rem;\n  position: absolute;\n  width: 100%;\n}\n\n.login-footer p {\n  color: white;\n}\n\n.login-footer span {\n  font-size: 0.8rem;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFJQSxzQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURBSTtFQUNJLHFCQUFBO0VBQ0EsZ0NBQUE7QUNFUjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURDSTtFQUNJLFlBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybCgnc3JjL2Fzc2V0cy9pbWcvY3VzdG9tL2JnLW1icGouSlBHJykgbm8tcmVwZWF0IDUwJSAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG4ubG9naW4tYmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWcvY3VzdG9tL21icGotdG93ZXItMi5wbmcnKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMTh2aDtcbiAgICBtYXgtd2lkdGg6IDZyZW07XG59XG5cbi5ob3VzZS1pbWcge1xuICAgIG1heC13aWR0aDogNTB2dztcbn1cblxuLmxvZ2luLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLmxvZ2luLXNlbGVjdG9yIHtcbiAgICBtYXJnaW4tdG9wOiA0dmg7XG4gICAgcGFkZGluZy1yaWdodDogNXZoO1xuICAgIHBhZGRpbmctbGVmdDogNXZoO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICB9XG59XG5cbi5sb2dpbi1mb290ZXIge1xuICAgIGJvdHRvbTogMXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufSIsIi5sb2dpbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwic3JjL2Fzc2V0cy9pbWcvY3VzdG9tL2JnLW1icGouSlBHXCIpIG5vLXJlcGVhdCA1MCUgMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvZ2luLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWcvY3VzdG9tL21icGotdG93ZXItMi5wbmdcIik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgbWFyZ2luLXRvcDogMTh2aDtcbiAgbWF4LXdpZHRoOiA2cmVtO1xufVxuXG4uaG91c2UtaW1nIHtcbiAgbWF4LXdpZHRoOiA1MHZ3O1xufVxuXG4ubG9naW4tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cbi5sb2dpbi10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLXNlbGVjdG9yIHtcbiAgbWFyZ2luLXRvcDogNHZoO1xuICBwYWRkaW5nLXJpZ2h0OiA1dmg7XG4gIHBhZGRpbmctbGVmdDogNXZoO1xufVxuLmxvZ2luLXNlbGVjdG9yIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cbi5sb2dpbi1zZWxlY3RvciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4ubG9naW4tZm9vdGVyIHtcbiAgYm90dG9tOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ2luLWZvb3RlciBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLWZvb3RlciBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


















let LoginComponent = class LoginComponent {
    constructor(authService, applicationService, applicationAssessmentService, assessmentAspectService, evaluationService, evaluationScheduleService, faqService, houseService, mediaService, organisationService, organisationTypeService, rebateService, ticketAnswerService, ticketQuestionService, translateServices, router) {
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
    ngOnInit() {
        this.authService.userType = '';
        this.authService.tokenAccess = '';
        this.authService.tokenRefresh = '';
        this.authService.token = '';
        this.authService.userID = '';
    }
    initServices() {
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
    }
    changeLanguageBM() {
        this.translateServices.setLanguage('my');
    }
    changeLanguageEN() {
        this.translateServices.setLanguage('en');
    }
    goToUserLogin() {
        // console.log('Login button clicked')
        // console.log(this.selectedUserType)
        if (this.selectedUserType == 'AP') {
            this.router.navigate(['/auth/login-applicant']);
        }
        else if (this.selectedUserType == 'EV') {
            this.router.navigate(['/auth/login-evaluator']);
        }
    }
};
LoginComponent.ctorParameters = () => [
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
];
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



/***/ }),

/***/ "./src/app/auth/logout/logout.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 40vh;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmF1dGgtY29udGVudC1mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmVycm9yLXRleHQge1xuICAgIG1hcmdpbjogMDtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW1cbiAgICB9XG59IiwiLmF1dGgtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmVycm9yLXRleHQge1xuICBtYXJnaW46IDA7XG59XG4uZXJyb3ItdGV4dCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoutComponent = class LogoutComponent {
    constructor() { }
    ngOnInit() { }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/auth/logout/logout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoutComponent);



/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-content {\n  --background: #fff !important;\n}\n\n.auth-content-form {\n  padding-top: 40vh;\n}\n\n.error-text {\n  margin: 0;\n}\n\n.error-text span {\n  color: red;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmF1dGgtY29udGVudC1mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmVycm9yLXRleHQge1xuICAgIG1hcmdpbjogMDtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW1cbiAgICB9XG59IiwiLmF1dGgtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50LWZvcm0ge1xuICBwYWRkaW5nLXRvcDogNDB2aDtcbn1cblxuLmVycm9yLXRleHQge1xuICBtYXJnaW46IDA7XG59XG4uZXJyb3ItdGV4dCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







let RegisterComponent = class RegisterComponent {
    constructor(authService, loadingCtrl, router, formBuilder, notifyService) {
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
    ngOnInit() {
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
    }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingMessage = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield this.loadingMessage.present();
            console.log(this.registerForm);
            if (this.registerForm.value.password1 != this.registerForm.value.password2) {
                this.passwordError();
                this.loadingMessage.dismiss();
            }
            else {
                this.authService.register(this.registerForm.value).subscribe(() => {
                    // console.log('Registration success')
                    // this.successfulToast()
                }, () => {
                    // console.log('Registration unsuccessful')
                    this.loadingMessage.dismiss();
                }, () => {
                    // console.log('After that')
                    this.loadingMessage.dismiss();
                    let message = 'Registration successful. You may now login';
                    this.notifyService.openToastr(message);
                });
            }
        });
    }
    passwordError() {
        let message = 'Password and confirm password do not match';
        this.notifyService.openToastrError(message);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MediasService = class MediasService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlMedia = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/medias/';
    }
    get() {
        return this.http.get(this.urlMedia).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.medias = res;
            console.log('Medias: ', this.medias);
        }));
    }
};
MediasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MediasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], MediasService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let OrganisationTypesService = class OrganisationTypesService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlTypes = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/organisation-types/';
        // Data
        this.types = [];
    }
    create(body) {
        return this.http.post(this.urlTypes, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create organisation type: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlTypes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.types = res;
            console.log('Organisation types: ', this.types);
        }));
    }
};
OrganisationTypesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OrganisationTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], OrganisationTypesService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let OrganisationsService = class OrganisationsService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlOrganisation = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/organisations/';
        // Data
        this.organisations = [];
    }
    create(body) {
        return this.http.post(this.urlOrganisation, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create organisation: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlOrganisation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.organisations = res;
            console.log('Organisations: ', this.organisations);
        }));
    }
};
OrganisationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OrganisationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], OrganisationsService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RebatesService = class RebatesService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlRebate = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/rebates/';
        // Data
        this.rebates = [];
    }
    create(body) {
        return this.http.post(this.urlRebate, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create rebate: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlRebate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.rebates = res;
            console.log('Rebate types: ', this.rebates);
        }));
    }
};
RebatesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RebatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], RebatesService);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map