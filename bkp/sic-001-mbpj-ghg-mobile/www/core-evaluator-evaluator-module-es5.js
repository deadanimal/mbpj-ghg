(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-evaluator-evaluator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/application-assessment/application-assessment.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/application-assessment/application-assessment.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar></ion-toolbar>\n  <ion-title></ion-title>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"settings\">\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>Test Title</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item mode=\"ios\">\n          <ion-label position=\"stacked\">Test</ion-label>\n          <ion-input clearInput type=\"text\" placeholder=\"test\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/application-detail/application-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/application-detail/application-detail.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n      <!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    Application\n  </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"settings\">\n    <div class=\"section-title\">\n      <p>House</p>\n    </div>\n    <ion-row>\n      <ion-col>\n        \n        <ion-item >\n            <ion-label class=\"ion-text-wrap\">\n              <h3>Applicant</h3>\n              <p> {{tempApplicant.full_name}}</p>\n            </ion-label>\n        </ion-item>\n        <ion-item >\n            <ion-label class=\"ion-text-wrap\">\n              <h3>Address</h3>\n              <p> {{tempHouse.address}}</p>\n            </ion-label>\n        </ion-item>\n        <ion-item >\n            <ion-label class=\"ion-text-wrap\">\n              <h3>Assessment Tax Account</h3>\n              <p> {{tempHouse.assessment_tax_account}}</p>\n            </ion-label>\n        </ion-item>\n        <ion-item >\n            <ion-label class=\"ion-text-wrap\">\n              <h3>Date Applied</h3>\n              <p> {{tempApplication.date_submitted}}</p>\n            </ion-label>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <div class=\"section-title\">\n      <p>Set evaluation appointment</p>\n    </div>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"evaluationForm\">\n          <ion-item>\n            <ion-label position=\"stacked\" mode=\"ios\">Date</ion-label>\n            <ion-datetime \n                displayFormat=\"YYYY-MM-DD\" \n                pickerFormat=\"YYYY-MM-DD\"\n                formControlName=\"date\"\n              >\n            </ion-datetime>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"stacked\" mode=\"ios\">Session</ion-label>\n            <ion-select placeholder=\"Select session\" formControlName=\"session\">\n              <ion-select-option *ngFor=\"let session of session_type\" value=\"{{session.value}}\">{{session.text}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </form>\n        <ion-item lines=\"none\">\n          <ion-button class=\"btn-green-lg mt-1\" (click)=\"doSetEvaluation()\">Set appointment</ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/application-evaluation/application-evaluation.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/application-evaluation/application-evaluation.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  application-evaluation works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/application/application.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/application/application.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    Evaluation\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>To evaluate list</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"!isGotApplication; else gotApplication\" class=\"error-home-section\">\n      <ion-img [src]=\"imgNotFound\"></ion-img>\n      <p>No nominated application yet</p>\n    </div>\n\n    <ng-template #gotApplication>\n      <ion-row *ngFor=\"let application of mergedNominatedApplications\">\n        <ion-col>\n          <ion-card mode=\"ios\">\n            <ion-card-header color=\"light\">\n              <ion-card-subtitle>\n                <ion-row>\n                  <ion-col>\n                    <p class=\"m-0\">\n                      {{application.schedule_date}}\n                    </p>\n                  </ion-col>\n                  <ion-col class=\"text-right\">\n                    <div *ngIf=\"application.schedule_session == 'AM'\">\n                      <p class=\"m-0\">Morning</p>\n                    </div>\n                    <div *ngIf=\"application.schedule_date == 'PM'\">\n                      <p class=\"m-0\">Evening</p>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item class=\"evaluation=list\"lines=\"none\">\n                <ion-label  class=\"ion-text-wrap\">\n                  <p>{{application.applicant_full_name}}</p>\n                  <h5>{{application.applied_house_address}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-red\" (click)=\"doStartEvaluate(application.applied_house)\">Evaluate</ion-chip>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/evaluate/evaluate.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/evaluate/evaluate.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n      <!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    Evaluation\n  </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"settings\" *ngIf=\"!isConfirm\">\n\n    <div class=\"section-title\">\n      <h2>Application</h2>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"ion-text-wrap\">A</ion-label>\n          <ion-input type=\"text\" ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"ion-text-wrap\">B</ion-label>\n          <ion-input type=\"text\" ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"ion-text-wrap\">C</ion-label>\n          <ion-input type=\"text\" ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"ion-text-wrap\">D</ion-label>\n          <ion-input type=\"text\" ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"section-title\">\n      <h2>Evaluation</h2>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-slides pager=\"true\" [options]=\"slidesOptions\">\n\n          <ion-slide>\n            <ion-card>\n              <div class=\"section-title\">\n                <p>Energy</p>\n              </div>\n\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title  class=\"text-left\">\n                      Solar water heater\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"a1Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n\n\n                  </form>\n              \n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Solar panel / Other renewable energy source\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"a2Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      70 % > = LED light / light saving light\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"a3Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      5 star electrical appliances except fan\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"a4Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Roof insulation\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"a5Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Energy usage < 112 kW / hour / capita / month\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      25%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"a6Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n              </mat-accordion>\n              \n            </ion-card>\n          </ion-slide>\n\n          <ion-slide>\n            <ion-card>\n              <div class=\"section-title\">\n                <p>Water</p>\n              </div>\n\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title  class=\"text-left\">\n                      Rainwater collection system\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"b1Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n              \n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Waste water recycle\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"b2Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Water usage < 202 litre / capita / day\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      25%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"b3Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Water saving tools\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"b4Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Flush box < 6 litre\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <form [formGroup]=\"b5Form\">\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"equipment\" placeholder=\"Type equipment marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"system\" placeholder=\"Type system marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                      <ion-input type=\"number\" formControlName=\"efficiency\" placeholder=\"Type efficiency marks here\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                      <ion-input type=\"text\" formControlName=\"remarks\" placeholder=\"Type remarks\"></ion-input>\n                    </ion-item>\n                  </form>\n\n                </mat-expansion-panel>\n\n              </mat-accordion>\n            </ion-card>\n          </ion-slide>\n\n          <ion-slide>\n            <ion-card>\n              <div class=\"section-title\">\n                <p>Waste</p>\n              </div>\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title  class=\"text-left\">\n                      Compose foodwaste\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      25%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n              \n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Waste recycle\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      25%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Reuse\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      25%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Reduce\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      25%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n\n                </mat-expansion-panel>\n\n              </mat-accordion>\n            </ion-card>\n          </ion-slide>\n\n          <ion-slide>\n            <ion-card>\n              <div class=\"section-title\">\n                <p>Transportation</p>\n              </div>\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title  class=\"text-left\">\n                      Own & use hybrid / electric / NGV or electric motorcycle for work / activity\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n              \n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Using public transportation / walking  / riding bicycle to work & other activites\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n\n                </mat-expansion-panel>\n\n              </mat-accordion>\n            </ion-card>\n          </ion-slide>\n\n          <ion-slide>\n            <ion-card>\n              <div class=\"section-title\">\n                <p>Biodiversity</p>\n              </div>\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title  class=\"text-left\">\n                      >= 50% green house area landscape (landed property)\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n              \n                </mat-expansion-panel>\n                \n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Significant planting (terrace house)\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      Perimeter planting\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      20%\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Equipment (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type equipment marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">System (30%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type system marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Efficiency (40%)</ion-label>\n                    <ion-input type=\"number\" placeholder=\"Type efficiency marks here\"></ion-input>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"ion-text-wrap\">Remarks</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Type remarks\"></ion-input>\n                  </ion-item>\n\n                </mat-expansion-panel>\n\n              </mat-accordion>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n\n        <ion-item lines=\"none\">\n          <ion-button class=\"btn-green-lg mt-1\" (click)=\"previewEvaluation()\">Submit</ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"settings\" *ngIf=\"isConfirm\">\n    <div class=\"section-title\">\n      <h2>Please confirm marks below</h2>\n      <div class=\"btn-back-item\">\n        <div class=\"btn-back ion-activatable\">\n          <button (click)=\"backToEvaluation()\">\n            <ion-ripple-effect></ion-ripple-effect> Back to evaluation\n          </button>\n        </div>\n      </div>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">A1. Solar water heater</ion-label>\n          <ion-text>{{totalA1}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">A2. Solar panel / Other renewable energy source</ion-label>\n          <ion-text>{{totalA2}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">A3. 70 % > = LED light / light saving light</ion-label>\n          <ion-text>{{totalA3}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">A4. 5 star electrical appliances except fan</ion-label>\n          <ion-text>{{totalA4}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">A5. Roof insulation</ion-label>\n          <ion-text>{{totalA5}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">A6. Energy usage < 112 kW/hour/capita/month</ion-label>\n          <ion-text>{{totalA6}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">B1. Rainwater collection system</ion-label>\n          <ion-text>{{totalB1}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">B2. Waste water recycle</ion-label>\n          <ion-text>{{totalB2}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">B3. Water saving tools</ion-label>\n          <ion-text>{{totalB3}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">B4. Water saving tools</ion-label>\n          <ion-text>{{totalB4}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">B5. Flush box < 6 litre</ion-label>\n          <ion-text>{{totalB5}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">C1. Compose foodwaste</ion-label>\n          <ion-text>{{totalC1}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">C2. Waste recycle</ion-label>\n          <ion-text>{{totalC2}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">C3. Waste recycle</ion-label>\n          <ion-text>{{totalC3}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">C4. Reduce</ion-label>\n          <ion-text>{{totalC4}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">D1. Own & use hybrid/electric/NGV or electric motorcycle for work/acitivity</ion-label>\n          <ion-text>{{totalD1}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">D2. Using public transportation / walking  / riding bicycle to work & other activites</ion-label>\n          <ion-text>{{totalD2}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">E1. >= 50% green house area landscape (landed property)</ion-label>\n          <ion-text>{{totalE1}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">E2. Significant planting (terrace house)</ion-label>\n          <ion-text>{{totalE2}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\">E3. Perimeter planting</ion-label>\n          <ion-text>{{totalE3}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap ion-text-bold\">Total applied by applicant</ion-label>\n          <ion-text class=\"ion-text-bold\">100%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap ion-text-bold\">Total evaluated</ion-label>\n          <ion-text class=\"ion-text-bold\">{{totalAll | number}}%</ion-text>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label class=\"ion-text-wrap\" position=\"stacked\">Remarks</ion-label>\n          <ion-input placeholder=\"Please enter remarks\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-button class=\"btn-green-lg mt-1\" (click)=\"doSubmit()\">Confirm & submit</ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/helpdesk/helpdesk.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/helpdesk/helpdesk.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    {{'HELPDESK.helpdesk'| translate}}\n  </ion-title>\n</ion-header>\n\n<ion-content class=\"settings\">\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'HELPDESK.title'| translate}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"ticketQuestionForm\">\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\" mode=\"ios\">{{'HELPDESK.comment'| translate}}</ion-label>\n            <ion-textarea placeholder=\"{{'HELPDESK.commentBox'| translate}}\" formControlName=\"question\">\n            </ion-textarea>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-button class=\"btn-green-lg mt-1\" (click)=\"submitQuestion()\">{{'HELPDESK.submit'| translate}}</ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let ticket of loadedTicketQuestions\">\n      <ion-col>\n        <ion-card>\n          <ion-card-header color=\"light\">\n            <ion-card-subtitle>\n              <p class=\"m-0\">{{ticket.date_submitted}}</p>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item class=\"ticket-list\">\n              <ion-text class=\"ion-text-wrap\">\n                <h5 style=\"color: #a9a9a9;\">{{'HELPDESK.question'| translate}}</h5>\n                <p>{{ticket.question}}</p>\n              </ion-text>\n            </ion-item>\n            <div *ngFor=\"let reply of loadedTicketAnswers\">\n              <div *ngIf=\"ticket.id == reply.question_id\">\n                <ion-item lines=\"none\" class=\"ticket-list\">\n                  <ion-text class=\"ion-text-wrap\">\n                    <h5 style=\"color: #a9a9a9;\">{{'HELPDESK.reply'| translate}}</h5>\n                    <p>{{reply.answer}}</p>\n                  </ion-text>\n                </ion-item>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/history/history.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/history/history.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    History\n  </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>Past evaluation</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header color=\"light\">\n            <ion-card-subtitle>\n              <p class=\"m-0\">16 December 2019</p>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item lines=\"none\" class=\"history-list\">\n              <ion-thumbnail slot=\"start\">\n                <img [src]=\"imgHistoryThumbnail\">\n              </ion-thumbnail>\n              <ion-label class=\"ion-text-wrap\">\n                <p>Syafiq Basri</p>\n                <h5>No. 420, Tingkat 5,  Flat A1, Petaling Jaya</h5>\n              </ion-label>\n            </ion-item>\n            <ion-chip class=\"chip-dark-green\">\n              <ion-icon name=\"checkmark-circle-outline\" color=\"white\" disabled></ion-icon>\n              <ion-label>Evaluated</ion-label>\n            </ion-chip>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/home/home.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/home/home.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"ghg-green\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    Home\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>Welcome!</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n        <ion-card mode=\"ios\" [routerLink]=\"['/evaluator/notification']\" routerDirection=\"forward\">\n          <img src=\"assets/img/card/notification.jpg\">\n          <ion-card-content>\n            <p class=\"text-center text-bold\">Notification</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card mode=\"ios\" [routerLink]=\"['/evaluator/application']\" routerDirection=\"forward\">\n          <img src=\"assets/img/card/form.jpg\">\n          <ion-card-content>\n            <p class=\"text-center text-bold\">To evaluate</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n        <ion-card mode=\"ios\" [routerLink]=\"['/evaluator/history']\" routerDirection=\"forward\">\n          <img src=\"assets/img/card/schedule.jpg\">\n          <ion-card-content>\n            <p class=\"text-center text-bold\">Past evaluation</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card mode=\"ios\" [routerLink]=\"['/evaluator/helpdesk']\" routerDirection=\"forward\">\n          <img src=\"assets/img/card/helpdesk.jpg\">\n          <ion-card-content>\n            <p class=\"text-center text-bold\">Helpdesk</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/notification/notification.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/notification/notification.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n    <!--<ion-buttons slot=\"end\">\n      <fa-icon [icon]=\"['fas','info-circle']\"></fa-icon>\n    </ion-buttons>-->\n  </ion-toolbar>\n  <ion-title>\n    Notification\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!isGotNotification; else gotNotification\" class=\"error-section\">\n    <ion-img [src]=\"imgNotFound\"></ion-img>\n    <p>No notification found</p>\n  </div>\n  <ng-template #gotNotification>\n    <ion-row>\n      <ion-col>\n        <ion-card mode=\"ios\">\n          <ion-card-content>\n            <ion-item class=\"history\">\n              <ion-label class=\"ion-text-wrap\">\n                <p>#421231</p>\n                <p>You has been nominated to evaluate an application, please check on To Evaluate page</p>\n              </ion-label>\n              <ion-thumbnail slot=\"end\">\n                <img [src]=\"imgNotiThumbnail\">\n              </ion-thumbnail>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ng-template>\n</ion-content>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/profile/profile.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/profile/profile.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    {{'PROFILE.profile' | translate}}\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  \n  <ion-grid class=\"settings\">\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>{{'PROFILE.editInfo' | translate}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"userForm\">\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.fullName' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.full_name\"\n              formControlName=\"full_name\"\n              placeholder=\"{{'PROFILE.fullNamePlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.newNRIC' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.new_nric\"\n              formControlName=\"new_nric\"\n              placeholder=\"{{'PROFILE.newNRICPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.oldNRIC' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.old_nric\"\n              formControlName=\"old_nric\"\n              placeholder=\"{{'PROFILE.oldNRICPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n          \n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.occupation' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.occupation\"\n              formControlName=\"occupation\"\n              placeholder=\"{{'PROFILE.occupationPlaceholder' | translate}}\"\n              \n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.tel' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.tel\"\n              formControlName=\"tel\"\n              placeholder=\"{{'PROFILE.telPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.phone' | translate}} *</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.phone\"\n              formControlName=\"phone\"\n              placeholder=\"{{'PROFILE.phonePlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\">\n            <ion-label position=\"stacked\">{{'PROFILE.email' | translate}}</ion-label>\n            <ion-input \n              clearInput \n              type=\"text\"\n              [value]=\"user.email\"\n              formControlName=\"email\"\n              placeholder=\"{{'PROFILE.emailPlaceholder' | translate}}\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item mode=\"ios\" lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <div class=\"btn-upload-item\">\n                  <div class=\"btn-upload ion-activatable\">\n                    <button (click)=\"openUploadSheet()\">\n                      <ion-ripple-effect></ion-ripple-effect> {{'PROFILE.uploadNRIC' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </form>\n\n        <ion-item lines=\"none\">\n          <ion-button class=\"btn-green-lg mt-1\" (click)=\"update()\">{{'PROFILE.update' | translate}}</ion-button>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/schedule/schedule.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/schedule/schedule.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    Schedule\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"section-title\">\n          <h3>To schedule list</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"!isGotApplication; else gotApplication\" class=\"error-home-section\">\n      <ion-img [src]=\"imgNotFound\"></ion-img>\n      <p>No nominated application yet</p>\n    </div>\n\n    <ng-template #gotApplication>\n      <ion-row *ngFor=\"let house of loadedNominatedHouses\">\n        <ion-col>\n          <ion-card mode=\"ios\">\n            <ion-card-header color=\"light\">\n              <ion-card-subtitle>\n                <p class=\"m-0\">16 December 2019</p>\n              </ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item lines=\"none\">\n                <ion-label class=\"ion-text-wrap\">\n                  <p>Syafiq Basri</p>\n                  <h5>{{house.address}}</h5>\n                </ion-label>\n                <ion-chip class=\"chip-blue\" (click)=\"setDate(house)\">View</ion-chip>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/test/test.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/evaluator/test/test.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"ghg-green\"></ion-back-button>\n      <!--<ion-menu-button color=\"ghg-green\"></ion-menu-button>-->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>\n    Evaluation\n  </ion-title>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"settings\" *ngIf=\"!isConfirm\">\n    <div class=\"section-title\">\n      <h2>Assessment</h2>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-slides pager=\"true\">\n          <ion-slide>\n            <ion-card>\n              <div class=\"section-title\">\n                <p>Energy</p>\n              </div>\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header collapsedHeight=\"*\" expandedHeight=\"*\">\n                    <mat-panel-title class=\"text-left\">\n                      \n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n                </mat-expansion-panel>\n              </mat-accordion>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/core/evaluator/application-assessment/application-assessment.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/core/evaluator/application-assessment/application-assessment.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL2FwcGxpY2F0aW9uLWFzc2Vzc21lbnQvYXBwbGljYXRpb24tYXNzZXNzbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/evaluator/application-assessment/application-assessment.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/evaluator/application-assessment/application-assessment.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ApplicationAssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationAssessmentComponent", function() { return ApplicationAssessmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplicationAssessmentComponent = /** @class */ (function () {
    function ApplicationAssessmentComponent() {
    }
    ApplicationAssessmentComponent.prototype.ngOnInit = function () { };
    ApplicationAssessmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-assessment',
            template: __webpack_require__(/*! raw-loader!./application-assessment.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/application-assessment/application-assessment.component.html"),
            styles: [__webpack_require__(/*! ./application-assessment.component.scss */ "./src/app/core/evaluator/application-assessment/application-assessment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplicationAssessmentComponent);
    return ApplicationAssessmentComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/application-detail/application-detail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/core/evaluator/application-detail/application-detail.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL2FwcGxpY2F0aW9uLWRldGFpbC9hcHBsaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/evaluator/application-detail/application-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/evaluator/application-detail/application-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApplicationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDetailComponent", function() { return ApplicationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");




//import { ApplicationEvaluationSchedulesService } from 'src/app/shared/services/application-evaluation-schedules/application-evaluation-schedules.service';





var ApplicationDetailComponent = /** @class */ (function () {
    function ApplicationDetailComponent(authService, applicationService, 
    //private applicationEvaluationScheduleService: ApplicationEvaluationSchedulesService,
    houseService, alertController, loadingController, router, toastController) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.houseService = houseService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.toastController = toastController;
        this.session_type = [
            { value: 'AM', text: 'Morning' },
            { value: 'PM', text: 'Evening' }
        ];
        this.evaluationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            session: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.tempApplication = this.router.getCurrentNavigation().extras;
        console.log(this.tempApplication);
        this.initData();
    }
    ApplicationDetailComponent.prototype.ngOnInit = function () { };
    ApplicationDetailComponent.prototype.ionViewDidEnter = function () {
        this.initData();
    };
    ApplicationDetailComponent.prototype.initData = function () {
        var _this = this;
        this.houseService.houses.forEach(function (data) {
            if (_this.tempApplication.applied_house == data.id) {
                _this.tempHouse = data;
            }
        });
        this.authService.users.forEach(function (data) {
            if (_this.tempApplication.applicant == data.id) {
                _this.tempApplicant = data;
            }
        });
    };
    ApplicationDetailComponent.prototype.doSetEvaluation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, formatedDate;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.evaluationForm.value.application_id = this.tempApplication.id;
                        formatedDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(this.evaluationForm.value.date)).format("YYYY-MM-DD");
                        this.evaluationForm.value.date = formatedDate;
                        console.log(formatedDate);
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationDetailComponent.prototype.successfulToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Set appointment successful',
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationDetailComponent.prototype.unsuccessfulToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Set appointment unsuccessful',
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationDetailComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationsService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_8__["HousesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
    ApplicationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-detail',
            template: __webpack_require__(/*! raw-loader!./application-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/application-detail/application-detail.component.html"),
            styles: [__webpack_require__(/*! ./application-detail.component.scss */ "./src/app/core/evaluator/application-detail/application-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationsService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_8__["HousesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], ApplicationDetailComponent);
    return ApplicationDetailComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/application-evaluation/application-evaluation.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/core/evaluator/application-evaluation/application-evaluation.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL2FwcGxpY2F0aW9uLWV2YWx1YXRpb24vYXBwbGljYXRpb24tZXZhbHVhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/evaluator/application-evaluation/application-evaluation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/evaluator/application-evaluation/application-evaluation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ApplicationEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationEvaluationComponent", function() { return ApplicationEvaluationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplicationEvaluationComponent = /** @class */ (function () {
    function ApplicationEvaluationComponent() {
    }
    ApplicationEvaluationComponent.prototype.ngOnInit = function () { };
    ApplicationEvaluationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-evaluation',
            template: __webpack_require__(/*! raw-loader!./application-evaluation.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/application-evaluation/application-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./application-evaluation.component.scss */ "./src/app/core/evaluator/application-evaluation/application-evaluation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplicationEvaluationComponent);
    return ApplicationEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/application/application.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/core/evaluator/application/application.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".evaluation-list {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9jb3JlL2V2YWx1YXRvci9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9ldmFsdWF0b3IvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ldmFsdWF0b3IvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZhbHVhdGlvbi1saXN0IHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0iLCIuZXZhbHVhdGlvbi1saXN0IHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/evaluator/application/application.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/evaluator/application/application.component.ts ***!
  \*********************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/evaluation-schedules/evaluation-schedules.service */ "./src/app/shared/services/evaluation-schedules/evaluation-schedules.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var MergedNominatedApplication = /** @class */ (function () {
    function MergedNominatedApplication(id, applicant, evaluator_nominated, applied_house, status, date_submitted, applied_house_address, applicant_full_name, schedule_date, schedule_session) {
        this.id = id;
        this.applicant = applicant;
        this.evaluator_nominated = evaluator_nominated;
        this.applied_house = applied_house;
        this.status = status;
        this.date_submitted = date_submitted;
        this.applied_house_address = applied_house_address;
        this.applicant_full_name = applicant_full_name;
        this.schedule_date = schedule_date;
        this.schedule_session = schedule_session;
    }
    MergedNominatedApplication.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return MergedNominatedApplication;
}());
var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(authService, applicationService, evaluationScheduleService, houseService, alertController, router) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.evaluationScheduleService = evaluationScheduleService;
        this.houseService = houseService;
        this.alertController = alertController;
        this.router = router;
        this.imgScheduleThumbnail = 'assets/icon/results.svg';
        this.isGotApplication = false;
        this.imgNotFound = 'assets/icon/error-404.svg';
        this.loadedNominatedApplications = [];
        this.loadedNominatedHouses = [];
        this.loadedNominatedApplicant = [];
        this.loadedNominatedSchedule = [];
        this.mergedNominatedApplications = [];
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.loadedNominatedApplications = this.applicationService.applicationsEvaluatorNominated;
        if (this.loadedNominatedApplications.length != 0) {
            this.isGotApplication = true;
        }
        this.loadedNominatedApplications.forEach(function (application) {
            application.date_submitted = moment__WEBPACK_IMPORTED_MODULE_8__(application.date_submitted, 'YYYY-MM-DD').format('DD-MM-YYYY');
        });
    };
    ApplicationComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mergedNominatedApplications = [];
        this.loadedNominatedHouses = [];
        this.loadedNominatedApplications = this.applicationService.applicationsEvaluatorNominated;
        //this.loadedNominatedHouses = this.houseService.retrievedHouses
        this.loadedNominatedApplications.forEach(function (application) {
            _this.houseService.houses.forEach(function (house) {
                if (application.applied_house == house.id) {
                    if (application.status == 'IE') {
                        //this.loadedNominatedHouses.push(house)
                        //console.log(this.loadedNominatedHouses)
                        _this.authService.users.forEach(function (applicant) {
                            if (applicant.id == application.applicant) {
                                //this.loadedNominatedApplicant.push(applicant)
                                _this.evaluationScheduleService.schedules.forEach(function (schedule) {
                                    if (schedule.application == application.id) {
                                        //this.loadedNominatedSchedule.push(schedule)
                                        _this.mergedNominatedApplications.push({
                                            id: application.id,
                                            applicant: application.applicant,
                                            evaluator_nominated: application.evaluator_nominated,
                                            applied_house: application.applied_house,
                                            status: application.status,
                                            date_submitted: application.date_submitted,
                                            applied_house_address: house.address,
                                            applicant_full_name: applicant.full_name,
                                            schedule_date: schedule.date,
                                            schedule_session: schedule.session
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            });
        });
    };
    ApplicationComponent.prototype.doStartEvaluate = function (house) {
        console.log(house);
        var application;
        this.loadedNominatedApplications.forEach(function (data) {
            if (data.applied_house == house) {
                application = data;
                console.log(application);
            }
        });
        this.router.navigate(['/evaluator/evaluate'], application);
    };
    ApplicationComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationsService"] },
        { type: src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_7__["EvaluationSchedulesService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! raw-loader!./application.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.scss */ "./src/app/core/evaluator/application/application.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationsService"],
            src_app_shared_services_evaluation_schedules_evaluation_schedules_service__WEBPACK_IMPORTED_MODULE_7__["EvaluationSchedulesService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/evaluate/evaluate.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/evaluator/evaluate/evaluate.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL2V2YWx1YXRlL2V2YWx1YXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/evaluator/evaluate/evaluate.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/evaluator/evaluate/evaluate.component.ts ***!
  \***************************************************************/
/*! exports provided: EvaluateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateComponent", function() { return EvaluateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/application-assessments/application-assessments.service */ "./src/app/shared/services/application-assessments/application-assessments.service.ts");
/* harmony import */ var src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/evaluations/evaluations.service */ "./src/app/shared/services/evaluations/evaluations.service.ts");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");











//import { ApplicationEvaluationsService } from 'src/app/shared/services/application-evaluations/application-evaluations.service';

var EvaluateComponent = /** @class */ (function () {
    function EvaluateComponent(authService, applicationService, applicationAssessmentService, evaluationService, houseService, camera, alertController, router, toastr) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.applicationAssessmentService = applicationAssessmentService;
        this.evaluationService = evaluationService;
        this.houseService = houseService;
        this.camera = camera;
        this.alertController = alertController;
        this.router = router;
        this.toastr = toastr;
        this.isDoneSubmit = false;
        this.isConfirm = false;
        this.panelOpenState = false;
        this.a1Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('be6ef279-0439-4da3-b1ee-c29396dc7404')
        });
        this.a2Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('425ca387-702e-4972-86ff-69ebed10d45a')
        });
        this.a3Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('9c18a34e-21d9-4b1d-88c1-f3d19b5bfbe2')
        });
        this.a4Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('7fa64288-0d73-4593-b1d8-4b47a448c273')
        });
        this.a5Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('b23d0e1d-9bab-49b7-b755-ca70ffa2722f')
        });
        this.a6Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('f651cbd1-03b3-49f1-9cba-892b9dd9285a')
        });
        this.b1Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('6e055614-c429-4051-b6da-ed96246aabd6')
        });
        this.b2Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('75bebeee-3233-46d7-ad20-4e7deb43d10f')
        });
        this.b3Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('4391e0e3-52dd-4d70-9697-b80329681d5e')
        });
        this.b4Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('49c98768-c26e-40bb-86c1-d82c645dc0d5')
        });
        this.b5Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0eeb7912-4be7-4e4a-99f5-e97c4a7fbae2')
        });
        this.c1Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('be6ef279-0439-4da3-b1ee-c29396dc7404')
        });
        this.c2Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('425ca387-702e-4972-86ff-69ebed10d45a')
        });
        this.c3Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('9c18a34e-21d9-4b1d-88c1-f3d19b5bfbe2')
        });
        this.c4Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('7fa64288-0d73-4593-b1d8-4b47a448c273')
        });
        this.d1Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            application_assessment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('49c98768-c26e-40bb-86c1-d82c645dc0d5')
        });
        this.d2Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            application_assessment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0eeb7912-4be7-4e4a-99f5-e97c4a7fbae2')
        });
        this.e1Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            application_assessment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('49c98768-c26e-40bb-86c1-d82c645dc0d5')
        });
        this.e2Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            application_assessment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0eeb7912-4be7-4e4a-99f5-e97c4a7fbae2')
        });
        this.e3Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //id: new FormControl(''),
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            application_assessment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0eeb7912-4be7-4e4a-99f5-e97c4a7fbae2')
        });
        this.totalA1 = 0;
        this.totalA2 = 0;
        this.totalA3 = 0;
        this.totalA4 = 0;
        this.totalA5 = 0;
        this.totalA6 = 0;
        this.totalB1 = 0;
        this.totalB2 = 0;
        this.totalB3 = 0;
        this.totalB4 = 0;
        this.totalB5 = 0;
        this.totalC1 = 0;
        this.totalC2 = 0;
        this.totalC3 = 0;
        this.totalC4 = 0;
        this.totalD1 = 0;
        this.totalD2 = 0;
        this.totalE1 = 0;
        this.totalE2 = 0;
        this.totalE3 = 0;
        this.totalAll = 0; // new
        this.slidesOptions = {
            initialSlide: 0,
            speed: 400
        };
        this.tempApplicationAssessment = [];
        this.tempApplication = this.router.getCurrentNavigation().extras;
        console.log('application: ', this.tempApplication);
    }
    EvaluateComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    EvaluateComponent.prototype.initData = function () {
        var _this = this;
        this.houseService.houses.forEach(function (data) {
            if (data.id == _this.tempApplication.applied_house) {
                _this.tempHouse = data;
                console.log('house: ', _this.tempHouse);
            }
        });
        this.authService.users.forEach(function (data) {
            if (data.id == _this.tempHouse.applicant) {
                _this.tempApplicant = data;
                console.log('user: ', _this.tempApplicant);
            }
        });
        this.applicationAssessmentService.assessments.forEach(function (data) {
            if (data.application == _this.tempApplication.id) {
                _this.tempApplicationAssessment.push(data);
                console.log(_this.tempApplicationAssessment);
            }
        });
    };
    EvaluateComponent.prototype.previewEvaluation = function () {
        this.totalA1 = (this.a1Form.value.equipment + this.a1Form.value.system + this.a1Form.value.efficiency) / 100 * 20;
        this.totalA2 = this.a2Form.value.equipment + this.a2Form.value.system + this.a2Form.value.efficiency / 100 * 20;
        this.totalA3 = this.a3Form.value.equipment + this.a3Form.value.system + this.a3Form.value.efficiency / 100 * 20;
        this.totalA4 = this.a4Form.value.equipment + this.a4Form.value.system + this.a4Form.value.efficiency / 100 * 20;
        this.totalA5 = this.a5Form.value.equipment + this.a5Form.value.system + this.a5Form.value.efficiency / 100 * 20;
        this.totalA6 = this.a6Form.value.equipment + this.a6Form.value.system + this.a6Form.value.efficiency / 100 * 25;
        this.totalB1 = this.b1Form.value.equipment + this.b1Form.value.system + this.b1Form.value.efficiency / 100 * 20;
        this.totalB2 = this.b2Form.value.equipment + this.b2Form.value.system + this.b2Form.value.efficiency / 100 * 20;
        this.totalB3 = this.b3Form.value.equipment + this.b3Form.value.system + this.b3Form.value.efficiency / 100 * 25;
        this.totalB4 = this.b4Form.value.equipment + this.b4Form.value.system + this.b4Form.value.efficiency / 100 * 20;
        this.totalB5 = this.b5Form.value.equipment + this.b5Form.value.system + this.b5Form.value.efficiency / 100 * 20;
        this.totalC1 = this.c1Form.value.equipment + this.c1Form.value.system + this.c1Form.value.efficiency / 100 * 25;
        this.totalC2 = this.c2Form.value.equipment + this.c2Form.value.system + this.c2Form.value.efficiency / 100 * 25;
        this.totalC3 = this.c3Form.value.equipment + this.c3Form.value.system + this.c3Form.value.efficiency / 100 * 25;
        this.totalC3 = this.c4Form.value.equipment + this.c4Form.value.system + this.c4Form.value.efficiency / 100 * 25;
        this.totalD1 = this.d1Form.value.equipment + this.d1Form.value.system + this.d1Form.value.efficiency / 100 * 20;
        this.totalD2 = this.d2Form.value.equipment + this.d2Form.value.system + this.d2Form.value.efficiency / 100 * 20;
        this.totalE1 = this.e1Form.value.equipment + this.e1Form.value.system + this.e1Form.value.efficiency / 100 * 20;
        this.totalE2 = this.e2Form.value.equipment + this.e2Form.value.system + this.e2Form.value.efficiency / 100 * 20;
        this.totalE3 = this.e3Form.value.equipment + this.e3Form.value.system + this.e3Form.value.efficiency / 100 * 20;
        var sumA = (this.totalA1 + this.totalA2 + this.totalA3 + this.totalA4 + this.totalA5 + this.totalA6) / 125 * 100;
        var sumB = (this.totalB1 + this.totalB2 + this.totalB3 + this.totalB4 + this.totalB5) / 105 * 100;
        var sumC = (this.totalC1 + this.totalC2 + this.totalC3 + this.totalC4);
        var sumD = (this.totalD1 + this.totalD2) / 40 * 100;
        var sumE = (this.totalE1 + this.totalE2 + this.totalE3) / 60 * 100;
        this.totalAll = (sumA + sumB + sumC + sumD + sumE) / 180 * 100;
        this.isConfirm = true;
    };
    EvaluateComponent.prototype.doEvalute = function () {
        var todayDate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY-MM-DD");
        /*this.evaluateForm.value.date_evaluated = todayDate
        this.evaluateForm.value.assessment_id = this.tempAssessment.id
        console.log(this.evaluateForm.value)
        this.applicationEvaluationService.doCreateApplicationEvaluation(this.evaluateForm.value).subscribe(
          () => {
            this.successfulToast()
          },
          () => {
            this.unsuccessfulToast()
          }
        )*/
        this.successfulToast();
        this.router.navigate(['/evaluator/home']);
    };
    EvaluateComponent.prototype.successfulToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('successfultoast');
                        return [4 /*yield*/, this.toastr.create({
                                message: 'Submit evaluation successful',
                                duration: 4000,
                                position: 'top'
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EvaluateComponent.prototype.unsuccessfulToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastr.create({
                            message: 'Submit evaluation unsuccessful',
                            duration: 3000,
                            position: 'top',
                            color: 'ghg-green'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EvaluateComponent.prototype.selectAttachment = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) {
            _this.imageSrc = 'data:image/jpeg;base64,' + file_uri;
        }, function (err) {
            console.log(err);
        });
        /**/
    };
    EvaluateComponent.prototype.doSubmit = function () {
        /*const alert = await this.alertController.create({
          header: 'Confirm!',
          message: 'Confirm to send the evaluation?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Confirm',
              handler: () => {
                console.log('Confirm Okay');
                this.isDoneSubmit = true
              }
            }
          ]
        });
    
        await alert.present();*/
        this.a1Form.value.assessment_id; //= this.tempAssessment.id
        this.a2Form.value.assessment_id; //= this.tempAssessment.id
        this.a3Form.value.assessment_id; //= this.tempAssessment.id
        this.a4Form.value.assessment_id; //= this.tempAssessment.id
        this.a5Form.value.assessment_id; //= this.tempAssessment.id
        this.a6Form.value.assessment_id; //= this.tempAssessment.id
        this.b1Form.value.assessment_id; //= this.tempAssessment.id
        this.b2Form.value.assessment_id; //= this.tempAssessment.id
        this.b3Form.value.assessment_id; //= this.tempAssessment.id
        this.b4Form.value.assessment_id; //= this.tempAssessment.id
        this.b5Form.value.assessment_id; //= this.tempAssessment.id
        console.log('submitt');
        this.successfulToast();
        this.router.navigate(['/evaluator/home']);
    };
    EvaluateComponent.prototype.backToEvaluation = function () {
        this.isConfirm = false;
    };
    EvaluateComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationsService"] },
        { type: src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationAssessmentsService"] },
        { type: src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_9__["EvaluationsService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__["HousesService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    EvaluateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-evaluate',
            template: __webpack_require__(/*! raw-loader!./evaluate.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/evaluate/evaluate.component.html"),
            styles: [__webpack_require__(/*! ./evaluate.component.scss */ "./src/app/core/evaluator/evaluate/evaluate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationsService"],
            src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationAssessmentsService"],
            src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_9__["EvaluationsService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__["HousesService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], EvaluateComponent);
    return EvaluateComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/evaluator.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/evaluator/evaluator.module.ts ***!
  \****************************************************/
/*! exports provided: EvaluatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorModule", function() { return EvaluatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _evaluator_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evaluator.routing */ "./src/app/core/evaluator/evaluator.routing.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application/application.component */ "./src/app/core/evaluator/application/application.component.ts");
/* harmony import */ var _application_assessment_application_assessment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application-assessment/application-assessment.component */ "./src/app/core/evaluator/application-assessment/application-assessment.component.ts");
/* harmony import */ var _application_evaluation_application_evaluation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./application-evaluation/application-evaluation.component */ "./src/app/core/evaluator/application-evaluation/application-evaluation.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/evaluator/home/home.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/core/evaluator/notification/notification.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/evaluator/profile/profile.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/core/evaluator/schedule/schedule.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./history/history.component */ "./src/app/core/evaluator/history/history.component.ts");
/* harmony import */ var _application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./application-detail/application-detail.component */ "./src/app/core/evaluator/application-detail/application-detail.component.ts");
/* harmony import */ var _evaluate_evaluate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./evaluate/evaluate.component */ "./src/app/core/evaluator/evaluate/evaluate.component.ts");
/* harmony import */ var _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpdesk/helpdesk.component */ "./src/app/core/evaluator/helpdesk/helpdesk.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./test/test.component */ "./src/app/core/evaluator/test/test.component.ts");






















var EvaluatorModule = /** @class */ (function () {
    function EvaluatorModule() {
    }
    EvaluatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _application_application_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationComponent"],
                _application_assessment_application_assessment_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationAssessmentComponent"],
                _application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_17__["ApplicationDetailComponent"],
                _application_evaluation_application_evaluation_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationEvaluationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_16__["HistoryComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_15__["ScheduleComponent"],
                _evaluate_evaluate_component__WEBPACK_IMPORTED_MODULE_18__["EvaluateComponent"],
                _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_19__["HelpdeskComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_21__["TestComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_evaluator_routing__WEBPACK_IMPORTED_MODULE_8__["EvaluatorRoutes"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"].forChild()
            ]
        })
    ], EvaluatorModule);
    return EvaluatorModule;
}());



/***/ }),

/***/ "./src/app/core/evaluator/evaluator.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/evaluator/evaluator.routing.ts ***!
  \*****************************************************/
/*! exports provided: EvaluatorRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorRoutes", function() { return EvaluatorRoutes; });
/* harmony import */ var _application_assessment_application_assessment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-assessment/application-assessment.component */ "./src/app/core/evaluator/application-assessment/application-assessment.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application/application.component */ "./src/app/core/evaluator/application/application.component.ts");
/* harmony import */ var _application_evaluation_application_evaluation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-evaluation/application-evaluation.component */ "./src/app/core/evaluator/application-evaluation/application-evaluation.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/evaluator/home/home.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/core/evaluator/notification/notification.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/evaluator/profile/profile.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/core/evaluator/schedule/schedule.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history/history.component */ "./src/app/core/evaluator/history/history.component.ts");
/* harmony import */ var _application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application-detail/application-detail.component */ "./src/app/core/evaluator/application-detail/application-detail.component.ts");
/* harmony import */ var _evaluate_evaluate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./evaluate/evaluate.component */ "./src/app/core/evaluator/evaluate/evaluate.component.ts");
/* harmony import */ var _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpdesk/helpdesk.component */ "./src/app/core/evaluator/helpdesk/helpdesk.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test/test.component */ "./src/app/core/evaluator/test/test.component.ts");












var EvaluatorRoutes = [
    {
        path: 'application',
        component: _application_application_component__WEBPACK_IMPORTED_MODULE_1__["ApplicationComponent"]
    },
    {
        path: 'application-assessment',
        component: _application_assessment_application_assessment_component__WEBPACK_IMPORTED_MODULE_0__["ApplicationAssessmentComponent"]
    },
    {
        path: 'application-detail',
        component: _application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationDetailComponent"]
    },
    {
        path: 'application-evaluation',
        component: _application_evaluation_application_evaluation_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationEvaluationComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'history',
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"]
    },
    {
        path: 'notification',
        component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    },
    {
        path: 'schedule',
        component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"]
    },
    {
        path: 'evaluate',
        component: _evaluate_evaluate_component__WEBPACK_IMPORTED_MODULE_9__["EvaluateComponent"]
    },
    {
        path: 'helpdesk',
        component: _helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskComponent"]
    },
    {
        path: 'test',
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"]
    }
];


/***/ }),

/***/ "./src/app/core/evaluator/helpdesk/helpdesk.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/evaluator/helpdesk/helpdesk.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ticket-list {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 1rem;\n  --padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9jb3JlL2V2YWx1YXRvci9oZWxwZGVzay9oZWxwZGVzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9ldmFsdWF0b3IvaGVscGRlc2svaGVscGRlc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL2hlbHBkZXNrL2hlbHBkZXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpY2tldC1saXN0IHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAxcmVtO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn0iLCIudGlja2V0LWxpc3Qge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMXJlbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/evaluator/helpdesk/helpdesk.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/evaluator/helpdesk/helpdesk.component.ts ***!
  \***************************************************************/
/*! exports provided: HelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function() { return HelpdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/ticket-answers/ticket-answers.service */ "./src/app/shared/services/ticket-answers/ticket-answers.service.ts");
/* harmony import */ var src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/ticket-questions/ticket-questions.service */ "./src/app/shared/services/ticket-questions/ticket-questions.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var HelpdeskComponent = /** @class */ (function () {
    function HelpdeskComponent(authService, ticketAnswerService, ticketQuestionService, alertController, loadingController, toastController, router, translate) {
        this.authService = authService;
        this.ticketAnswerService = ticketAnswerService;
        this.ticketQuestionService = ticketQuestionService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.translate = translate;
        this.loadedTicketQuestions = [];
        this.loadedTicketAnswers = [];
        this.ticketQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('UR'),
            date_submitted: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            submitted_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    }
    HelpdeskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadedTicketQuestions = this.ticketQuestionService.questionsFiltered;
        this.loadedTicketQuestions.forEach(function (question) {
            question.date_submitted = moment__WEBPACK_IMPORTED_MODULE_5__(question.date_submitted, 'YYYY-MM-DD').format('DD-MM-YYYY');
            _this.ticketAnswerService.answers.forEach(function (answer) {
                if (question.id == answer.question_id) {
                    _this.loadedTicketAnswers.push(answer);
                }
            });
        });
    };
    HelpdeskComponent.prototype.submitQuestion = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.translate.instant('HELPDESK.confirmHeader'),
                            message: this.translate.instant('HELPDESK.confirmMessage'),
                            buttons: [
                                {
                                    text: this.translate.instant('HELPDESK.cancelButton'),
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        //console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: this.translate.instant('HELPDESK.confirmButton'),
                                    handler: function () {
                                        //console.log('Confirm Okay');
                                        _this.onConfirm();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpdeskComponent.prototype.onConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.ticketQuestionForm.value.date_submitted = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
                        this.ticketQuestionForm.value.submitted_by = this.authService.userID;
                        //console.log(this.ticketQuestionForm.value)
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        //console.log(this.ticketQuestionForm.value)
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.ticketQuestionService.create(this.ticketQuestionForm.value).subscribe(function () {
                            _this.refreshData();
                            _this.loadingMessage.dismiss();
                        }, function () {
                            _this.loadingMessage.dismiss();
                            _this.unsuccessfulToast();
                        }, function () {
                            _this.ticketQuestionForm.reset();
                            _this.successfulToast();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpdeskComponent.prototype.doConfirmLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: 'Are you sure you want to logout?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () {
                                        _this.router.navigate(['/auth/login']);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpdeskComponent.prototype.refreshData = function () {
        var _this = this;
        this.loadedTicketQuestions = [];
        this.loadedTicketAnswers = [];
        this.ticketQuestionService.getUser(this.authService.userID).subscribe(function () {
        }, function () {
        }, function () {
            _this.loadedTicketQuestions = _this.ticketQuestionService.questionsFiltered;
            _this.loadedTicketQuestions.forEach(function (question) {
                _this.ticketAnswerService.answersFiltered.forEach(function (answer) {
                    if (question.id == answer.question_id) {
                        _this.loadedTicketAnswers.push(answer);
                    }
                });
            });
        });
    };
    HelpdeskComponent.prototype.successfulToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: this.translate.instant('HELPDESK.successMessage'),
                            position: 'top',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpdeskComponent.prototype.unsuccessfulToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: this.translate.instant('HELPDESK.unsuccessMessage'),
                            position: 'top',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpdeskComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_7__["TicketAnswersService"] },
        { type: src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_8__["TicketQuestionsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    HelpdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-helpdesk',
            template: __webpack_require__(/*! raw-loader!./helpdesk.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/helpdesk/helpdesk.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk.component.scss */ "./src/app/core/evaluator/helpdesk/helpdesk.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_app_shared_services_ticket_answers_ticket_answers_service__WEBPACK_IMPORTED_MODULE_7__["TicketAnswersService"],
            src_app_shared_services_ticket_questions_ticket_questions_service__WEBPACK_IMPORTED_MODULE_8__["TicketQuestionsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], HelpdeskComponent);
    return HelpdeskComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/history/history.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/evaluator/history/history.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".history-list {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZml6aWh1c2FpbmkvRG9jdW1lbnRzL3BuLWdpdGh1Yi9tYnBqLWdoZy9ia3Avc2ljLTAwMS1tYnBqLWdoZy1tb2JpbGUvc3JjL2FwcC9jb3JlL2V2YWx1YXRvci9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2V2YWx1YXRvci9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdG9yeS1saXN0IHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0iLCIuaGlzdG9yeS1saXN0IHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/evaluator/history/history.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/evaluator/history/history.component.ts ***!
  \*************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");





//import { ApplicationEvaluationsService } from 'src/app/shared/services/application-evaluations/application-evaluations.service';


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(applicationService, 
    //private applicationEvaluationService: ApplicationEvaluationsService,
    //private applicationEvaluationScheduleService: ApplicationEvaluationSchedulesService,
    houseService, authService, alertController, router) {
        this.applicationService = applicationService;
        this.houseService = houseService;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.isGotHistory = true;
        this.imgNotFound = 'assets/icon/error-404.svg';
        this.imgHistoryThumbnail = 'assets/icon/results.svg';
        this.evaluatedApplications = [];
        this.loadedNominatedHouses = [];
        this.loadedNominatedApplicant = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    HistoryComponent.prototype.ionViewDidEnter = function () {
        this.initData();
    };
    HistoryComponent.prototype.initData = function () {
        var _this = this;
        // this.evaluatedApplications = this.applicationService.retrievedNominated
        if (this.evaluatedApplications.length != 0) {
            this.isGotHistory = true;
        }
        this.evaluatedApplications.forEach(function (application) {
            _this.houseService.houses.forEach(function (house) {
                if (application.applied_house == house.id) {
                    _this.loadedNominatedHouses.push(house);
                    console.log('tepi tepi:', _this.loadedNominatedHouses);
                }
            });
            _this.authService.users.forEach(function (applicant) {
                if (applicant.id == application.applicant) {
                    _this.loadedNominatedApplicant.push(applicant);
                }
            });
        });
    };
    HistoryComponent.prototype.doConfirmLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: 'Are you sure you want to logout?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () {
                                        _this.router.navigate(['/auth/login']);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationsService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_5__["HousesService"] },
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/core/evaluator/history/history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationsService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_5__["HousesService"],
            src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/home/home.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/evaluator/home/home.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/evaluator/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/evaluator/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, applicationService, houseService, alertCtrl, router) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.houseService = houseService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        // Image
        this.imgScheduleThumbnail = 'assets/icon/results.svg';
        this.imgNotFound = 'assets/icon/error-404.svg';
        // Check
        this.isGotApplication = false;
        this.applications = [];
        this.houses = [];
        this.applicants = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ionViewDidEnter = function () {
    };
    HomeComponent.prototype.setDate = function (house) {
        console.log(house);
        var application;
        this.applications.forEach(function (data) {
            if (data.applied_house == house.id) {
                application = data;
            }
        });
        this.router.navigate(['/evaluator/application-detail'], application);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationsService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/evaluator/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationsService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/notification/notification.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/evaluator/notification/notification.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/evaluator/notification/notification.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/evaluator/notification/notification.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.isGotNotification = true;
        this.imgNotFound = 'assets/icon/error-404.svg';
        this.imgNotiThumbnail = 'assets/icon/calendar.svg';
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/core/evaluator/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/profile/profile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/evaluator/profile/profile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/evaluator/profile/profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/evaluator/profile/profile.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");










var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, toastController, router, actionSheetController, alertController, base64, loadingController, camera, translate, formBuilder, notifyService) {
        this.authService = authService;
        this.toastController = toastController;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.base64 = base64;
        this.loadingController = loadingController;
        this.camera = camera;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.notifyService = notifyService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getData();
        this.userForm = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            new_nric: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            old_nric: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            profile_picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nric_picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    ProfileComponent.prototype.getData = function () {
        this.user = this.authService.userSelfDetail;
    };
    ProfileComponent.prototype.openUploadSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: this.translate.instant('PROFILE.uploadSheetHeader'),
                            buttons: [
                                {
                                    text: this.translate.instant('PROFILE.uploadCameraText'),
                                    role: 'destructive',
                                    icon: 'camera',
                                    handler: function () {
                                        console.log('Camera opened');
                                        _this.openCamera();
                                    }
                                },
                                {
                                    text: this.translate.instant('PROFILE.uploadGalleryText'),
                                    icon: 'images',
                                    handler: function () {
                                        console.log('Gallery opened');
                                        _this.openGallery();
                                    }
                                },
                                {
                                    text: this.translate.instant('PROFILE.uploadCancel'),
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.tempImageData = imageData;
            //this.tempImage = (<any>window).Ionic.WebView.convertFileSrc(imageData);
            _this.encodeFile64();
        }, function (err) {
            alert("error " + JSON.stringify(err));
        });
    };
    ProfileComponent.prototype.openGallery = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 70,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) {
            _this.tempImageData = file_uri;
            _this.encodeFile64();
        }, function (err) {
            console.log(err);
        });
        /**/
    };
    ProfileComponent.prototype.encodeFile64 = function () {
        var _this = this;
        this.base64.encodeFile(this.tempImageData).then(function (base64File) {
            _this.tempImageEncoded = base64File;
            _this.userForm.value.nric_picture = _this.tempImageEncoded;
            console.log(_this.tempImageEncoded);
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.update = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading...'
                            })];
                    case 1:
                        _a.loadingMessage = _b.sent();
                        return [4 /*yield*/, this.loadingMessage.present()];
                    case 2:
                        _b.sent();
                        this.userForm.value.id = this.user.id;
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
                        console.log('Update value: ', this.userForm.value);
                        this.authService.update(this.userForm.value).subscribe(function (res) {
                            //console.log('Update user success')
                            _this.authService.getUsers().subscribe();
                            _this.successfulToast();
                            _this.getData();
                        }, function (err) {
                            //console.log('Update user unsuccessful')
                            _this.unsuccessfulToast();
                        }, function () {
                            _this.loadingMessage.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.successfulToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: this.translate.instant('PROFILE.successMessage'),
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.unsuccessfulToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: this.translate.instant('PROFILE.unsuccessMessage'),
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/core/evaluator/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/schedule/schedule.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/evaluator/schedule/schedule.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/evaluator/schedule/schedule.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/evaluator/schedule/schedule.component.ts ***!
  \***************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");







var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(authService, applicationService, houseService, alertController, router) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.houseService = houseService;
        this.alertController = alertController;
        this.router = router;
        this.imgScheduleThumbnail = 'assets/icon/results.svg';
        this.isGotApplication = false;
        this.imgNotFound = 'assets/icon/error-404.svg';
        this.loadedNominatedApplications = [];
        this.loadedNominatedHouses = [];
        this.loadedNominatedApplicant = [];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.loadedNominatedApplications = this.applicationService.applicationsEvaluatorNominatedCurrent;
        if (this.loadedNominatedApplications.length != 0) {
            this.isGotApplication = true;
        }
        this.initData();
    };
    ScheduleComponent.prototype.initData = function () {
        var _this = this;
        this.loadedNominatedHouses = [];
        this.loadedNominatedApplications = this.applicationService.applicationsEvaluatorNominatedCurrent;
        //this.loadedNominatedHouses = this.houseService.retrievedHouses
        this.loadedNominatedApplications.forEach(function (application) {
            _this.houseService.houses.forEach(function (house) {
                if (application.applied_house == house.id) {
                    _this.loadedNominatedHouses.push(house);
                    console.log(_this.loadedNominatedHouses);
                }
            });
            _this.authService.users.forEach(function (applicant) {
                if (applicant.id == application.applicant) {
                    _this.loadedNominatedApplicant.push(applicant);
                }
            });
        });
    };
    ScheduleComponent.prototype.doConfirmLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: 'Are you sure you want to logout?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () {
                                        _this.router.navigate(['/auth/login']);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScheduleComponent.prototype.setDate = function (house) {
        console.log(house);
        var application;
        this.loadedNominatedApplications.forEach(function (data) {
            if (data.applied_house == house.id) {
                application = data;
            }
        });
        this.router.navigate(['/evaluator/application-detail'], application);
    };
    ScheduleComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationsService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! raw-loader!./schedule.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/core/evaluator/schedule/schedule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationsService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_6__["HousesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/core/evaluator/test/test.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/evaluator/test/test.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhdG9yL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/evaluator/test/test.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/evaluator/test/test.component.ts ***!
  \*******************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/applications/applications.service */ "./src/app/shared/services/applications/applications.service.ts");
/* harmony import */ var src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/application-assessments/application-assessments.service */ "./src/app/shared/services/application-assessments/application-assessments.service.ts");
/* harmony import */ var src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/assessment-aspects/assessment-aspects.service */ "./src/app/shared/services/assessment-aspects/assessment-aspects.service.ts");
/* harmony import */ var src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/evaluations/evaluations.service */ "./src/app/shared/services/evaluations/evaluations.service.ts");
/* harmony import */ var src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/houses/houses.service */ "./src/app/shared/services/houses/houses.service.ts");











var MergedApplicationAssessment = /** @class */ (function () {
    function MergedApplicationAssessment(id, application, assessment_aspect, remarks, supporting_doc, aspect_name, aspect_type, aspect_id, aspect) {
        this.id = id;
        this.application = application;
        this.assessment_aspect = assessment_aspect;
        this.remarks = remarks;
        this.supporting_doc = supporting_doc;
        this.aspect_name = aspect_name;
        this.aspect_type = aspect_type;
        this.aspect_id = aspect_id;
        this.aspect = aspect;
    }
    MergedApplicationAssessment.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return MergedApplicationAssessment;
}());
var TestComponent = /** @class */ (function () {
    function TestComponent(authService, applicationService, applicationAssessmentService, assessmentAspectService, evaluationService, houseService, alertController, router, formBuilder) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.applicationAssessmentService = applicationAssessmentService;
        this.assessmentAspectService = assessmentAspectService;
        this.evaluationService = evaluationService;
        this.houseService = houseService;
        this.alertController = alertController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isDoneSubmit = false;
        this.isConfirm = false;
        this.panelOpenState = false;
        this.slidesOptions = {
            initialSlide: 0,
            speed: 400
        };
        this.tempApplicationAssessment = [];
        this.tempApplication = this.router.getCurrentNavigation().extras;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup = this.formBuilder.group({
            form: this.formBuilder.array([this.initEvaluationForm()])
        });
        this.houseService.houses.forEach(function (data) {
            if (data.id == _this.tempApplication.applied_house) {
                _this.tempHouse = data;
                console.log('house: ', _this.tempHouse);
            }
        });
        this.authService.users.forEach(function (data) {
            if (data.id == _this.tempHouse.applicant) {
                _this.tempApplicant = data;
                console.log('user: ', _this.tempApplicant);
            }
        });
        this.applicationAssessmentService.assessments.forEach(function (data) {
            if (data.application == _this.tempApplication.id) {
                _this.assessmentAspectService.retrievedAssessmentAspects.forEach(function (aspect, index) {
                    if (data.assessment_aspect == aspect.id) {
                        _this.tempApplicationAssessment.push({
                            id: data.id,
                            application: data.application,
                            assessment_aspect: data.assessment_aspect,
                            remarks: data.remarks,
                            supporting_doc: data.supporting_doc,
                            aspect_name: aspect.name,
                            aspect_type: aspect.aspect_type,
                            aspect_id: aspect.id,
                            aspect: aspect.aspect
                        });
                    }
                    if (_this.assessmentAspectService.retrievedAssessmentAspects.length === index + 1) {
                        _this.tempApplicationAssessment.forEach(function (assessment) {
                            _this.form = _this.formGroup.get('form');
                            _this.form.push(_this.initEvaluationForm());
                        });
                    }
                });
            }
        });
    };
    TestComponent.prototype.initEvaluationForm = function () {
        return this.formBuilder.group({
            application_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            system: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            efficiency: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            evaluation_assessment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    };
    TestComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationsService"] },
        { type: src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationAssessmentsService"] },
        { type: src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_8__["AssessmentAspectsService"] },
        { type: src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_9__["EvaluationsService"] },
        { type: src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__["HousesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/evaluator/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/core/evaluator/test/test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_shared_services_applications_applications_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationsService"],
            src_app_shared_services_application_assessments_application_assessments_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationAssessmentsService"],
            src_app_shared_services_assessment_aspects_assessment_aspects_service__WEBPACK_IMPORTED_MODULE_8__["AssessmentAspectsService"],
            src_app_shared_services_evaluations_evaluations_service__WEBPACK_IMPORTED_MODULE_9__["EvaluationsService"],
            src_app_shared_services_houses_houses_service__WEBPACK_IMPORTED_MODULE_10__["HousesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ })

}]);
//# sourceMappingURL=core-evaluator-evaluator-module-es5.js.map