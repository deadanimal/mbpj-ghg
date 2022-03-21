(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/forgot/forgot.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar></ngx-loading-bar>\n<div class=\"main-content auth-content\">\n    <div class=\"container py-lg-8\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5 col-md-7\">\n                <div class=\"card bg-secondary border-0 mb-0\">\n                    <div class=\"card-body px-lg-5 py-lg-5\">\n                        <div class=\"client-logo-area\">\n\t\t\t\t\t\t\t<img class=\"client-logo\" src=\"assets/img/logo/mbpj-logo.png\">\n\t\t\t\t\t\t\t<h6 class=\"h2 text-default d-inline-block mt-3 mb-0\">\n\t\t\t\t\t\t\t\tSkim Rebat Cukai Taksiran Rumah Mesra Alam Hijau Petaling Jaya\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n                        <form [formGroup]=\"resetForm\">\n                            <div class=\"form-group mb-3\" [ngClass]=\"{ focused: focusEmail === true }\">\n                                <div class=\"input-group input-group-alternative\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text bg-info\">\n                                            <i class=\"ni ni-email-83 text-white\"></i>\n                                        </span>\n                                    </div>\n                                    <input \n                                        class=\"form-control text-dark\"\n                                        placeholder=\"Email\" \n                                        type=\"email\"\n                                        formControlName=\"email\"\n                                        (focus)=\"focusEmail = true\" \n                                        (blur)=\"focusEmail = false\"\n                                    />\n                                </div>\n                                <div class=\"validation-errors\">\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of resetFormMessage.email\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"error-message\"\n\t\t\t\t\t\t\t\t\t\t  *ngIf=\"resetForm.get('email').hasError(message.type) && (resetForm.get('email').dirty || resetForm.get('email').touched)\">\n\t\t\t\t\t\t\t\t\t\t  {{ message.message }}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</div>\n                            </div>\n                            <div class=\"text-center\">\n                                <button \n                                    type=\"button\"\n                                    [disabled]=\"!resetForm.valid\"\n                                    class=\"btn btn-info mt-4 mb-2\" \n                                    (click)=\"reset()\"\n                                >\n                                    Reset password\n                                </button>\n                            </div>\n                        </form>\n                        <div class=\"row mt-1\">\n                            <div class=\"col text-center\">\n                                <button class=\"btn btn-icon btn-3 btn-outline-info\" type=\"button\" [routerLink]=\"['/auth/login']\">\n                                    <span class=\"btn-inner--icon\"><i class=\"fas fa-angle-left\"></i></span>\n                                    <span class=\"btn-inner--text\">Back to login</span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar></ngx-loading-bar>\n<div class=\"main-content auth-content d-flex align-items-center\">\n  <div class=\"container py-6\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-md-7\">\n        <div class=\"card bg-secondary border-0 mb-0\">\n          <div class=\"card-body px-lg-5 py-lg-5\">\n            <div class=\"client-logo-area\">\n              <img class=\"client-logo\" src=\"assets/img/logo/logo-erebat.png\" />\n              <h6 class=\"h2 text-default d-inline-block mt-3 mb-0\">\n                Skim Rebat Cukai Taksiran Rumah Mesra Alam Hijau Petaling Jaya\n              </h6>\n            </div>\n            <form [formGroup]=\"loginForm\">\n              <div\n                class=\"form-group mb-1\"\n                [ngClass]=\"{ focused: focusUsername === true }\"\n              >\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text bg-info\">\n                      <i class=\"ni ni-email-83 text-white\"></i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    formControlName=\"username\"\n                    (focus)=\"focusUsername = true\"\n                    (blur)=\"focusUsername = false\"\n                  />\n                </div>\n                <div class=\"validation-errors\">\n                  <ng-container\n                    *ngFor=\"let message of loginFormMessage.username\"\n                  >\n                    <div\n                      class=\"error-message\"\n                      *ngIf=\"\n                        loginForm.get('username').hasError(message.type) &&\n                        (loginForm.get('username').dirty ||\n                          loginForm.get('username').touched)\n                      \"\n                    >\n                      {{ message.message }}\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n              <div\n                class=\"form-group mb-1\"\n                [ngClass]=\"{ focused: focusPassword === true }\"\n              >\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text bg-info\">\n                      <i class=\"ni ni-lock-circle-open text-white\"></i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control text-dark\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    formControlName=\"password\"\n                    (focus)=\"focusPassword = true\"\n                    (blur)=\"focusPassword = false\"\n                  />\n                </div>\n                <div class=\"validation-errors\">\n                  <ng-container\n                    *ngFor=\"let message of loginFormMessage.password\"\n                  >\n                    <div\n                      class=\"error-message\"\n                      *ngIf=\"\n                        loginForm.get('password').hasError(message.type) &&\n                        (loginForm.get('password').dirty ||\n                          loginForm.get('password').touched)\n                      \"\n                    >\n                      {{ message.message }}\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6\">\n                  <div\n                    class=\"custom-control custom-checkbox custom-checkbox-info\"\n                  >\n                    <input\n                      class=\"custom-control-input\"\n                      id=\"customCheckLogin\"\n                      type=\"checkbox\"\n                    />\n                    <label class=\"custom-control-label\" for=\"customCheckLogin\">\n                      <span>Remember me?</span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-lg-6 col-sm-6 text-right\">\n                  <label\n                    class=\"text-right forgot-label\"\n                    [routerLink]=\"['/auth/forgot']\"\n                  >\n                    <span>Forgot password</span>\n                  </label>\n                </div>\n              </div>\n              <div class=\"text-center\">\n                <button\n                  type=\"button\"\n                  [disabled]=\"!loginForm.valid\"\n                  class=\"btn btn-info my-1\"\n                  (click)=\"login()\"\n                >\n                  Sign in\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__["ForgotComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_6__["AuthRoutes"]),
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_9__["LoadingBarModule"]
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
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");


var AuthRoutes = [
    {
        path: '',
        children: [
            {
                path: 'forgot',
                component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_0__["ForgotComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-logo-area {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.client-logo-area .client-logo {\n  max-width: 40%;\n}\n.auth-content {\n  background-color: #2dce89;\n  background-image: url('green-leaf-plant.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  overflow: hidden;\n}\n.validation-errors {\n  min-height: 25px;\n}\n.error-message {\n  color: #f5365c;\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9lcmVtYmF0L2JrcC9zaWMtMDAxLW1icGotZ2hnLXdlYi9zcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURFQTtFQUNJLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkFBQTtFQUlBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLGdCQUFBO0FDQ0o7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnQtbG9nby1hcmVhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAuY2xpZW50LWxvZ28ge1xuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICB9XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGNlODk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQvZ3JlZW4tbGVhZi1wbGFudC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6ICNmNTM2NWM7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufSIsIi5jbGllbnQtbG9nby1hcmVhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNsaWVudC1sb2dvLWFyZWEgLmNsaWVudC1sb2dvIHtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRjZTg5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQvZ3JlZW4tbGVhZi1wbGFudC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZjUzNjVjO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn0iXX0= */"

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
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");






var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(authService, formBuilder, loadingBar, notifyService) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingBar = loadingBar;
        this.notifyService = notifyService;
        this.resetFormMessage = {
            'email': [
                { type: 'email', message: 'A valid email is required' },
                { type: 'required', message: 'Email is required' }
            ]
        };
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    };
    ForgotComponent.prototype.reset = function () {
        var _this = this;
        this.loadingBar.start();
        this.authService.resetPassword(this.resetForm.value).subscribe(function () {
            // Success
            _this.loadingBar.complete();
        }, function () {
            // Rejected
            _this.loadingBar.complete();
        }, function () {
            // After
            _this.resetForm.reset();
            _this.successMessage();
        });
    };
    ForgotComponent.prototype.successMessage = function () {
        var title = 'Success';
        var message = 'A reset link has been sent to your email';
        this.notifyService.openToastr(title, message);
    };
    ForgotComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] }
    ]; };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/app/auth/forgot/forgot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-logo-area {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.client-logo-area .client-logo {\n  max-width: 40%;\n}\n.auth-content {\n  background-color: #2dce89;\n  background-image: url('green-leaf-plant.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  overflow: hidden;\n}\n.forgot-label {\n  font-size: 0.875rem;\n  color: #525f7f;\n  cursor: pointer;\n}\n.validation-errors {\n  min-height: 25px;\n}\n.error-message {\n  color: #f5365c;\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9lcmVtYmF0L2JrcC9zaWMtMDAxLW1icGotZ2hnLXdlYi9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7QUNFUjtBREVBO0VBQ0kseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0VBSUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUE7RUFDSSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC1sb2dvLWFyZWEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIC5jbGllbnQtbG9nbyB7XG4gICAgICAgIG1heC13aWR0aDogNDAlO1xuICAgIH1cbn1cblxuLmF1dGgtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkY2U4OTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC9ncmVlbi1sZWFmLXBsYW50LmpwZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9yZ290LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGNvbG9yOiAjNTI1ZjdmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6ICNmNTM2NWM7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufSIsIi5jbGllbnQtbG9nby1hcmVhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNsaWVudC1sb2dvLWFyZWEgLmNsaWVudC1sb2dvIHtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRjZTg5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQvZ3JlZW4tbGVhZi1wbGFudC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9yZ290LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6ICM1MjVmN2Y7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2Y1MzY1YztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, notifyService, router, authService, loadingBar) {
        this.formBuilder = formBuilder;
        this.notifyService = notifyService;
        this.router = router;
        this.authService = authService;
        this.loadingBar = loadingBar;
        // Form
        this.email = "";
        this.pwd = "";
        this.loginFormMessage = {
            username: [
                { type: "required", message: "Email is required" },
                { type: "email", message: "A valid email is required" },
            ],
            password: [{ type: "required", message: "Password is required" }],
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // this.loginCredentials.value.username = 'admin@prototype.com.my'
        // this.loginCredentials.value.password = '4dm1nghg'
        // console.log(this.loginCredentials.value)
        this.loadingBar.start();
        this.authService.obtainToken(this.loginForm.value).subscribe(function () {
            // console.log ('Accepted')
            _this.loadingBar.complete();
        }, function () {
            // console.log ('Denied')
            _this.loadingBar.complete();
        }, function () {
            _this.getDetail();
        });
    };
    LoginComponent.prototype.debugLogin = function () {
        var _this = this;
        this.loginForm.value.username = "administrator@prototype.com.my";
        this.loginForm.value.password = "a12345678A";
        //console.log(this.loginCredentials.value)
        this.loadingBar.start();
        this.authService.obtainToken(this.loginForm.value).subscribe(function () {
            // console.log ('Accepted')
            _this.loadingBar.complete();
        }, function () {
            // console.log ('Denied')
            _this.loadingBar.complete();
        }, function () {
            _this.getDetail();
        });
    };
    LoginComponent.prototype.getDetail = function () {
        var _this = this;
        this.authService.getUserDetail().subscribe(function () {
            if (_this.authService.userType == "AD") {
                _this.successMessage();
                _this.router.navigate(["/dashboard"]);
            }
        });
    };
    LoginComponent.prototype.successMessage = function () {
        var title = "Success";
        var message = "Welcome back!";
        this.notifyService.openToastr(title, message);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map