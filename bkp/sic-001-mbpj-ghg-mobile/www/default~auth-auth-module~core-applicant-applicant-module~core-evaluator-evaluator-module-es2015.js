(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-auth-module~core-applicant-applicant-module~core-evaluator-evaluator-module"],{

/***/ "./src/app/shared/services/application-assessments/application-assessments.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/services/application-assessments/application-assessments.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ApplicationAssessmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationAssessmentsService", function() { return ApplicationAssessmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ApplicationAssessmentsService = class ApplicationAssessmentsService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlAssessment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/application-assessments/';
        // Data
        this.assessments = [];
        this.assessmentsFiltered = [];
    }
    create(body) {
        return this.http.post(this.urlAssessment, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create application assessment response: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlAssessment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.assessments = res;
            console.log('Application assessments: ', this.assessments);
        }));
    }
    filter(filterField) {
        let urlFilter = this.urlAssessment + '?' + filterField;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.assessmentsFiltered = res;
            console.log('Filtered application assessments: ', this.assessmentsFiltered);
        }));
    }
};
ApplicationAssessmentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApplicationAssessmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ApplicationAssessmentsService);



/***/ }),

/***/ "./src/app/shared/services/applications/applications.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/applications/applications.service.ts ***!
  \**********************************************************************/
/*! exports provided: ApplicationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsService", function() { return ApplicationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ApplicationsService = class ApplicationsService {
    // public deleteItems: Application[] = []
    constructor(http) {
        this.http = http;
        // URL
        this.urlApplication = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/applications/';
        // Data
        this.applications = [];
        this.applicationsFiltered = [];
        // Applicant
        this.applicationsApplicant = [];
        this.applicationsApplicantCurrent = [];
        this.applicationsApplicantPast = [];
        // Evaluator
        this.applicationsEvaluatorNominated = [];
        this.applicationsEvaluatorNominatedCurrent = [];
        this.applicationsEvaluatorNominatedPast = [];
    }
    get() {
        return this.http.get(this.urlApplication).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.applications = res;
            console.log('Applications: ', this.applications);
        }));
    }
    filter(filterField) {
        let filterUrl = this.urlApplication + '?' + filterField + '/';
        return this.http.get(filterUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.applicationsFiltered = res;
            console.log('Filtered applications: ', this.applicationsFiltered);
        }));
    }
    assign(body, appID) {
        let urlAssign = this.urlApplication + appID + '/';
        return this.http.put(urlAssign, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create application response: ', res);
        }));
    }
    // Applicant
    create(body) {
        return this.http.post(this.urlApplication, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create application: ', res);
        }));
    }
    getApplicant(id) {
        //let filterUrl = this.urlApplication + '?applicant=' + this.authService.userID
        let urlFilter = this.urlApplication + '?applicant=' + id;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.applicationsApplicant = res;
            console.log('Applicant applications: ', this.applicationsApplicant);
            this.filterApplicant();
        }));
    }
    filterApplicant() {
        this.applicationsApplicant.forEach((application) => {
            if (application.status === 'CM' || application.status === 'RJ' || application.status === 'PD') {
                this.applicationsApplicantPast.push(application);
            }
            else {
                this.applicationsApplicantCurrent.push(application);
            }
        });
    }
    // Evaluator 
    getEvaluator(id) {
        // let filterUrl = this.urlApplication + '?evaluator_nominated=' + this.authService.userID + '&status=IE'
        let urlFilter = this.urlApplication + '?evaluator_nominated=' + id + '&status=IE';
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.applicationsEvaluatorNominated = res;
            console.log('Nominated applications: ', this.applicationsEvaluatorNominated);
            this.filterEvaluator();
        }));
    }
    filterEvaluator() {
        this.applicationsEvaluatorNominated.forEach((application) => {
            if (application.status === 'CM' || application.status === 'RJ' || application.status === 'PD') {
                this.applicationsEvaluatorNominatedPast.push(application);
            }
            else {
                this.applicationsEvaluatorNominatedCurrent.push(application);
            }
        });
    }
    getApplicantDetail() {
        return this.http.get(this.urlApplication + 'get_application_details/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Applications: ', this.applications);
        }));
    }
};
ApplicationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApplicationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ApplicationsService);



/***/ }),

/***/ "./src/app/shared/services/assessment-aspects/assessment-aspects.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/services/assessment-aspects/assessment-aspects.service.ts ***!
  \**********************************************************************************/
/*! exports provided: AssessmentAspectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentAspectsService", function() { return AssessmentAspectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");






let AssessmentAspectsService = class AssessmentAspectsService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        // URL
        this.urlAspect = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/assessment-aspects/';
        // Data
        this.retrievedAssessmentAspects = [];
        this.retrievedFilteredAssessmentAspects = [];
    }
    create(body) {
        return this.http.post(this.urlAspect, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create assessment aspect response: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlAspect + '?ordering=name').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.retrievedAssessmentAspects = res;
            console.log('Assessment aspects: ', this.retrievedAssessmentAspects);
        }));
    }
    filter(filterField) {
        let urlFilter = this.urlAspect + '?' + filterField;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.retrievedFilteredAssessmentAspects = res;
            console.log('Filtered assessment aspects: ', this.retrievedFilteredAssessmentAspects);
        }));
    }
};
AssessmentAspectsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AssessmentAspectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], AssessmentAspectsService);



/***/ }),

/***/ "./src/app/shared/services/evaluations/evaluations.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/evaluations/evaluations.service.ts ***!
  \********************************************************************/
/*! exports provided: EvaluationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationsService", function() { return EvaluationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EvaluationsService = class EvaluationsService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlEvaluation = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/evaluations/';
        // Data
        this.evaluations = [];
        this.evalutionsFiltered = [];
    }
    create(body) {
        return this.http.post(this.urlEvaluation, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create evaluation response: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlEvaluation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.evaluations = res;
            console.log('Evaluations: ', this.evaluations);
        }));
    }
    filter(filterField) {
        let urlFilter = this.urlEvaluation + '?' + filterField;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.evalutionsFiltered = res;
            console.log('Filtered evaluations: ', this.evalutionsFiltered);
        }));
    }
};
EvaluationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EvaluationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], EvaluationsService);



/***/ }),

/***/ "./src/app/shared/services/houses/houses.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/houses/houses.service.ts ***!
  \**********************************************************/
/*! exports provided: HousesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesService", function() { return HousesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HousesService = class HousesService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlHouses = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/houses/';
        // Data
        this.houses = [];
        this.housesApplicant = [];
        this.housesFiltered = [];
    }
    get() {
        return this.http.get(this.urlHouses).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.houses = res;
            console.log('Houses: ', this.houses);
        }));
    }
    filterApplicant(id) {
        this.houses.forEach((data) => {
            console.log('masuk');
            if (data.applicant == id) {
                this.housesApplicant.push(data);
                console.log(data);
            }
        });
    }
    getUser(id) {
        let urlFilter = this.urlHouses + '?applicant=' + id;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.housesFiltered = res;
            console.log('Filtered houses: ', this.housesFiltered);
        }));
    }
    register(body) {
        return this.http.post(this.urlHouses, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log(res);
        }));
    }
    update(body, currentHouseID) {
        let urlUpdate = this.urlHouses + currentHouseID + '/';
        return this.http.put(urlUpdate, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log(res);
            this.get().subscribe();
        }));
    }
};
HousesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HousesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], HousesService);



/***/ }),

/***/ "./src/app/shared/services/ticket-answers/ticket-answers.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/ticket-answers/ticket-answers.service.ts ***!
  \**************************************************************************/
/*! exports provided: TicketAnswersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketAnswersService", function() { return TicketAnswersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TicketAnswersService = class TicketAnswersService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlAnswer = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/ticket-answers/';
        // Data
        this.answers = [];
        this.answersFiltered = [];
        this.answersUser = [];
    }
    create(body) {
        return this.http.post(this.urlAnswer, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create ticket answer: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlAnswer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.answers = res;
            console.log('Ticket answers: ', this.answers);
        }));
    }
    filter(filterField) {
        let urlFilter = this.urlAnswer + '?' + filterField + '/';
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.answersFiltered = res;
            console.log('Filtered ticket answers: ', this.answersFiltered);
        }));
    }
    getUser(id) {
        let urlFilter = this.urlAnswer + '?submitted_by=' + id;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.answersUser = res;
            console.log('Filtered ticket answers: ', this.answersUser);
        }));
    }
};
TicketAnswersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TicketAnswersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TicketAnswersService);



/***/ }),

/***/ "./src/app/shared/services/ticket-questions/ticket-questions.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/ticket-questions/ticket-questions.service.ts ***!
  \******************************************************************************/
/*! exports provided: TicketQuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketQuestionsService", function() { return TicketQuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TicketQuestionsService = class TicketQuestionsService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlQuestion = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/ticket-questions/';
        // Data
        this.questions = [];
        this.questionsFiltered = [];
        this.questionsUser = [];
    }
    create(body) {
        return this.http.post(this.urlQuestion, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Create ticket question: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlQuestion).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.questions = res;
            console.log('Ticket questions: ', this.questions);
        }));
    }
    filter(filterField) {
        let urlFilter = this.urlQuestion + '?' + filterField + '/';
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.questionsFiltered = res;
            console.log('Filtered ticket questions: ', this.questionsFiltered);
        }));
    }
    update(body, id) {
        let updateUrl = this.urlQuestion + id + '/';
        return this.http.put(updateUrl, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            //console.log('Updated user: ', res)
        }));
    }
    getUser(id) {
        let urlFilter = this.urlQuestion + '?submitted_by=' + id;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.questionsUser = res;
            console.log('Filtered ticket questions: ', this.questionsUser);
        }));
    }
};
TicketQuestionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TicketQuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TicketQuestionsService);



/***/ })

}]);
//# sourceMappingURL=default~auth-auth-module~core-applicant-applicant-module~core-evaluator-evaluator-module-es2015.js.map