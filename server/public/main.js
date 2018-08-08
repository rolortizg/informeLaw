(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin:0 auto;\n  padding:0 auto;\n  font-family: 'Karla', sans-serif;\n}\n \n.navbar {\n  background-color:none;\n  border-bottom:1px solid black;\n  width:100vw;\n  height:57px;\n  box-shadow: 1px 1px 10px 1px black;\n}\n \n.navbar img {\n  border-radius:5%;\n}\n \n.lft {\n  margin-left:5%;\n}\n \n/* .mrleft {\n  padding-left:20%;\n} */\n \n.mrsleft {\n  position:absolute;\n  right:5%;\n  top:10%;\n}\n \n.navbar img:hover {\n  cursor:pointer;\n}\n\n\n  \n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link href=\"https://fonts.googleapis.com/css?family=Karla\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css\" integrity=\"sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B\" crossorigin=\"anonymous\">\n  <title>InformeLaw</title>\n</head>\n<body>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css\" integrity=\"sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B\" crossorigin=\"anonymous\">\n\n\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\n      <img (click)=\"home()\" src=\"../assets/small-logo.png\" width=\"30\" height=\"30\" alt=\"\" class=\"imagen\">\n\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li *ngIf=\"!user\" class=\"explr nav-item active\">\n                <a class=\"nav-link\" [routerLink]=\"['explore']\">Explora por abogado <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li *ngIf=\"!user\" class=\"explr nav-item active\">\n                <a class=\"nav-link\" [routerLink]=\"['lawyer']\">¿Eres abogado? <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li style=\"margin-left:10px\" class=\"explr nav-item active\">\n                <a class=\"nav-link\" [routerLink]=\"['ramas']\">Librería de preguntas <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"mrleft explr nav-item active\">\n                <!-- <a (click)=\"logout()\" class=\"nav-link\" href=\"#\">Logout <span class=\"sr-only\">(current)</span></a> -->\n            </li>\n            \n            \n            \n        \n          <li class=\"mrsleft dwn nav-item dropdown\">\n              <ngbd-dropdown-basic></ngbd-dropdown-basic>\n          </li>\n        \n        </ul>\n      \n      </div>\n    </nav>\n\n\n    <router-outlet></router-outlet>\n\n    \n\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js\" integrity=\"sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em\" crossorigin=\"anonymous\"></script>\n</body>\n</html>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('user');
    };
    AppComponent.prototype.home = function () {
        this.router.navigate(['home']);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _modal_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-options */ "./src/app/modal-options.ts");
/* harmony import */ var _dropdown_basic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown-basic */ "./src/app/dropdown-basic.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./private/private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _ramas_ramas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ramas/ramas.component */ "./src/app/ramas/ramas.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lawyer/lawyer.component */ "./src/app/lawyer/lawyer.component.ts");
/* harmony import */ var _browse_browse_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./browse/browse.component */ "./src/app/browse/browse.component.ts");
/* harmony import */ var _capitalizr_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./capitalizr.pipe */ "./src/app/capitalizr.pipe.ts");
/* harmony import */ var _bypass_security_bypass_security_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bypass-security/bypass-security.component */ "./src/app/bypass-security/bypass-security.component.ts");
/* harmony import */ var _inner_html_binding_inner_html_binding_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./inner-html-binding/inner-html-binding.component */ "./src/app/inner-html-binding/inner-html-binding.component.ts");
/* harmony import */ var _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ficha/ficha.component */ "./src/app/ficha/ficha.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





//routes

//services


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_8__["SignupFormComponent"],
                _private_private_component__WEBPACK_IMPORTED_MODULE_13__["PrivateComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _explore_explore_component__WEBPACK_IMPORTED_MODULE_16__["ExploreComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_17__["QuestionsComponent"],
                _modal_options__WEBPACK_IMPORTED_MODULE_9__["NgbdModalOptions"],
                _dropdown_basic__WEBPACK_IMPORTED_MODULE_10__["NgbdDropdownBasic"],
                _ramas_ramas_component__WEBPACK_IMPORTED_MODULE_19__["RamasComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_20__["DetailComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_21__["CategoryComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_22__["EditComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterPipe"],
                _lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_24__["LawyerComponent"],
                _browse_browse_component__WEBPACK_IMPORTED_MODULE_25__["BrowseComponent"],
                _capitalizr_pipe__WEBPACK_IMPORTED_MODULE_26__["CapitalizrPipe"],
                _bypass_security_bypass_security_component__WEBPACK_IMPORTED_MODULE_27__["BypassSecurityComponent"],
                _inner_html_binding_inner_html_binding_component__WEBPACK_IMPORTED_MODULE_28__["InnerHtmlBindingComponent"],
                _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_29__["FichaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_11__["routes"]),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
                // AppBootstrapModule
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_questions_service__WEBPACK_IMPORTED_MODULE_18__["QuestionsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/browse/browse.component.css":
/*!*********************************************!*\
  !*** ./src/app/browse/browse.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lawyer-box {\n  transition: box-shadow .2s;\n  border:1px solid black;\n  width:30%;\n  text-align: center;\n  margin:20px;\n  padding:10px;\n  border-radius:5px;\n  box-shadow: 0 10px 6px -6px #777;\n}\n\n.lawyer-box:hover {\n  box-shadow: 0 0 11px rgba(33,33,33,.2); \n}\n\n.organize {\n  display:flex;\n  justify-content: space-between;\n    \n  flex-wrap: wrap;\n  margin-top:50px;\n}\n\n.aligner{\n  margin-top:50px;\n  display:flex;\n  justify-content: center;\n}\n\ni {\n  color:#F9A602;\n}\n\nh1 {\n  width:40%;\n}\n\n.flx {\n  display:flex;\n  justify-content: center;\n}\n\nimg {\n  width:150px;\n  height:170px;\n  border-radius:50%;\n}"

/***/ }),

/***/ "./src/app/browse/browse.component.html":
/*!**********************************************!*\
  !*** ./src/app/browse/browse.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flx\">\n  <h1 style=\"text-align:center;color:black;padding-top:20px;border-bottom:2px dotted black;border-width:60%;\">Haz una pregunta a un abogado especializado:</h1>\n</div>\n<div class=\"aligner\">\n     <input [(ngModel)]=\"search\" style=\"width:20%;\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar por ley\" aria-label=\"Search\">\n</div>\n\n<!-- <input [(ngModel)]=\"search\" placeholder=\"Busca por tipo de ley\" type=\"text\"> -->\n<div class=\"organize\">\n        \n        <div *ngFor=\"let l of lawyers | filter:'category':search | filter:'title':searcher\" class=\"lawyer-box\">\n           <h2 style=\"border-bottom:1px solid black\"> {{l.name}}</h2>\n           \n           <img style=\"border-radius:50%\" src=\"{{l.image || 'http://www.usanetwork.com/sites/usanetwork/files/styles/629x720/public/2018/07/suits_cast_harvey_s8.jpg?itok=dfZIxggZ'}}\" alt=\"\">\n           <br>\n           <p *ngIf=\"l.category\" style=\"margin-top:10px;\"><strong>Especialidad:</strong> {{l.category | capitalizr}}</p>\n          \n            <!-- <p style=\"margin-top:-20px;\"><strong>Educación:</strong> {{l.education}}</p> -->\n            <p style=\"margin-top:0px\"><strong>Puntuación:</strong> <i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"far fa-star\"></i></p>\n\n            <a [routerLink]=\"['/browse', l._id]\">Ver ficha</a>\n          \n        </div>\n</div>"

/***/ }),

/***/ "./src/app/browse/browse.component.ts":
/*!********************************************!*\
  !*** ./src/app/browse/browse.component.ts ***!
  \********************************************/
/*! exports provided: BrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lawyer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/lawyer.service */ "./src/app/services/lawyer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { DomSanitizer } from '@angular/core'
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(lawyerService, activeRoute, router) {
        this.lawyerService = lawyerService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.search = '';
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['login']);
        this.lawyerService.getLawyers()
            .subscribe(function (lawyers) { return _this.lawyers = lawyers; });
    };
    BrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browse',
            template: __webpack_require__(/*! ./browse.component.html */ "./src/app/browse/browse.component.html"),
            styles: [__webpack_require__(/*! ./browse.component.css */ "./src/app/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lawyer_service__WEBPACK_IMPORTED_MODULE_1__["LawyerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "./src/app/bypass-security/bypass-security.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bypass-security/bypass-security.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Bypass Security Component</h3>\n\n<h4>An untrusted URL:</h4>\n<p><a class=\"e2e-dangerous-url\" [href]=\"dangerousUrl\">Click me</a></p>\n<h4>A trusted URL:</h4>\n<p><a class=\"e2e-trusted-url\" [href]=\"trustedUrl\">Click me</a></p>\n\n<h4>Resource URL:</h4>\n<p>Showing: {{dangerousVideoUrl}}</p>\n<p>Trusted:</p>\n<iframe class=\"e2e-iframe-trusted-src\" width=\"640\" height=\"390\" [src]=\"videoUrl\"></iframe>\n<p>Untrusted:</p>\n<iframe class=\"e2e-iframe-untrusted-src\" width=\"640\" height=\"390\" [src]=\"dangerousVideoUrl\"></iframe>\n"

/***/ }),

/***/ "./src/app/bypass-security/bypass-security.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bypass-security/bypass-security.component.ts ***!
  \**************************************************************/
/*! exports provided: BypassSecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BypassSecurityComponent", function() { return BypassSecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BypassSecurityComponent = /** @class */ (function () {
    function BypassSecurityComponent(sanitizer) {
        this.sanitizer = sanitizer;
        // javascript: URLs are dangerous if attacker controlled.
        // Angular sanitizes them in data binding, but you can
        // explicitly tell Angular to trust this value:
        this.dangerousUrl = 'javascript:alert("Hi there")';
        this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
        this.updateVideoUrl('PUBnlbjZFAI');
    }
    BypassSecurityComponent.prototype.updateVideoUrl = function (id) {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data so
        // that it's easier to check if the value is safe.
        this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
        this.videoUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    };
    BypassSecurityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bypass-security',
            template: __webpack_require__(/*! ./bypass-security.component.html */ "./src/app/bypass-security/bypass-security.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], BypassSecurityComponent);
    return BypassSecurityComponent;
}());



/***/ }),

/***/ "./src/app/capitalizr.pipe.ts":
/*!************************************!*\
  !*** ./src/app/capitalizr.pipe.ts ***!
  \************************************/
/*! exports provided: CapitalizrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizrPipe", function() { return CapitalizrPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizrPipe = /** @class */ (function () {
    function CapitalizrPipe() {
    }
    CapitalizrPipe.prototype.transform = function (value, args) {
        return value.split('')[0].toUpperCase() + value.substring(1);
    };
    CapitalizrPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalizr'
        })
    ], CapitalizrPipe);
    return CapitalizrPipe;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  category works!\n</p>\n"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.align {\n  text-align:center;\n  display:flex;\n  align-items:center;\n  flex-direction: column;\n}\n\nh1 {\n  border-bottom:2px dotted black;\n  margin-top:50px;\n}\n\n.ans {\n  width:40%;\n\n}\n\np {\n}\n"

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"align\">\n  <!-- {{question.created-at}}  -->\n    <h1>  {{question.title | capitalizr}}  </h1><span>by {{question.username}}</span> \n    <br>\n    <h3>  {{question.category | capitalizr}}  </h3>\n      <br>\n    <div class=\"ans\">\n      <p><strong style=\"text-decoration: underline\">Pregunta:</strong> {{question.content | capitalizr}}</p>\n      <p *ngIf=\"question.answer !== 'no'\"><strong style=\"text-decoration: underline\">Respuesta:</strong> {{question.answer}}</p>\n    </div>\n    <a *ngIf=\"user.username === question.username\" [routerLink]=\"['edit']\">Editar</a>\n    <a *ngIf=\"user.role === 'LAWYER'\" [routerLink]=\"['edit']\">Responder</a>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = /** @class */ (function () {
    function DetailComponent(router, activeRoute, questionService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.questionService = questionService;
    }
    // editOne(){
    //   this.questionService.editOneQuestion(this.id)
    //   .subscribe(question => this.question = question)
    // }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params
            .subscribe(function (params) {
            console.log(params.id);
            _this.id = params.id;
            _this.questionService.getOneQuestion(_this.id)
                .subscribe(function (question) {
                //      console.log(phone)
                _this.question = question;
            });
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['home']);
        //query
        this.activeRoute.queryParams
            .subscribe(function (query) {
            console.log(query);
        });
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/dropdown-basic.html":
/*!*************************************!*\
  !*** ./src/app/dropdown-basic.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n      <div ngbDropdown class=\"cols d-inline-block\">\n        <button *ngIf=\"user\" style=\"border:none;color:black;\" class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>{{user.username}}</button>\n        <button *ngIf=\"!user\" style=\"border:none;color:black;\" class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Bienvenido</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n          <button class=\"dropdown-item\" [routerLink]=\"['browse']\">Abogados</button>\n          <button class=\"dropdown-item\" [routerLink]=\"['ramas']\">Preguntas</button>\n          <button class=\"dropdown-item\" [routerLink]=\"['profile']\">Profile</button>\n          <a (click)=\"logout()\" class=\"nav-link\" href=\"#\">Logout <span class=\"sr-only\">(current)</span></a>\n        </div>\n      </div>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/dropdown-basic.ts":
/*!***********************************!*\
  !*** ./src/app/dropdown-basic.ts ***!
  \***********************************/
/*! exports provided: NgbdDropdownBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownBasic", function() { return NgbdDropdownBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDropdownBasic = /** @class */ (function () {
    function NgbdDropdownBasic() {
    }
    NgbdDropdownBasic.prototype.logout = function () {
        localStorage.removeItem('user');
    };
    NgbdDropdownBasic.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    NgbdDropdownBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-dropdown-basic',
            template: __webpack_require__(/*! ./dropdown-basic.html */ "./src/app/dropdown-basic.html")
        })
    ], NgbdDropdownBasic);
    return NgbdDropdownBasic;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i:hover {\n  cursor:pointer;\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role === 'USER'\">\n   <div *ngIf=\"user.username === question.username\">\n      <h2>Edita tu pregunta</h2>\n      <input placeholder=\"title\" [(ngModel)]=\"question.title\" type=\"text\">\n      <br>\n      <input placeholder=\"content\" [(ngModel)]=\"question.content\" type=\"text\">\n      <br>\n      <button (click)=\"editOne(question)\">Guardar los cambios</button>\n      <i (click)=\"removeOne(question._id)\" class=\"far fa-trash-alt\"></i>\n   </div>\n</div>\n\n<div *ngIf=\"user.role === 'LAWYER'\">\n  <h2>Responde a la pregunta</h2>\n    <input  placeholder=\"answer\" [(ngModel)]=\"question.answer\" type=\"text\">\n    <button (click)=\"editOne(question)\">Guardar los cambios</button>\n    \n</div>\n    \n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(activatedRoute, router, questionService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.questionService = questionService;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.parent.snapshot.params.id;
        this.questionService.getOneQuestion(this.id)
            .subscribe(function (question) {
            _this.question = question;
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['login']);
    };
    EditComponent.prototype.editOne = function () {
        var _this = this;
        if (!window.confirm('Estas seguro?'))
            return;
        this.questionService.editOneQuestion(this.question)
            .subscribe(function () {
            _this.counter = _this.question;
            console.log(_this.counter);
            _this.router.navigate(['/ramas', _this.question._id]);
        });
    };
    EditComponent.prototype.removeOne = function (id) {
        var _this = this;
        this.questionService.deleteQuestion(id)
            .subscribe(function () {
            _this.router.navigate(['ramas']);
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/explore/explore.component.css":
/*!***********************************************!*\
  !*** ./src/app/explore/explore.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  height:100vh;\n  margin-top:-100px;\n  padding-top:100px;\n}\n\n/* section {\n  width:100vw;\n  height:600px;\n  position:absolute;\n \n} */\n\nhr {\n  width:40%;\n  weight:5px;\n}\n\n.btnz { \n  \n  display:flex;\n  /* flex-direction:row; */\n  justify-content: center;\n  margin-left:15%;\n width:70%;\n  flex-wrap:wrap;\n \n}\n\nsection .btn {\n  display:flex;\n  /* flex-direction:row; */\n  justify-content: center;\n  margin-right:50px;\n  margin-top:30px;\n  height:60px;\n  flex-wrap:wrap;\n  padding-left:10%;\n  padding-right:10%;\n  border:1px solid black;\n  color:white;\n  background-color:rgba(0, 0, 0, 0.493);\n}\n\n.btn:hover {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(0, 163, 35);\n}\n\n.butons {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  \n}\n\n.align button {\n  margin-left:20px;\n  margin-right:20px;\n}\n\n.lawyer-box {\n  border:1px solid black;\n  width:30%;\n  text-align: center;\n  margin:20px;\n  padding:20px;\n}\n\n.organize {\n  display:flex;\n  justify-content: space-between;\n    \n  flex-wrap: wrap;\n  margin-top:50px;\n}\n\n.aligner{\n  display:flex;\n  justify-content: center;\n}"

/***/ }),

/***/ "./src/app/explore/explore.component.html":
/*!************************************************!*\
  !*** ./src/app/explore/explore.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"user.role === 'USER'\">\n    <h1 style=\"text-align:center;color:black;padding-top:20px;\">Haz una pregunta a un abogado especializado:</h1>\n    <hr>\n    <div class=\"aligner\">\n         <input [(ngModel)]=\"search\" style=\"width:20%;\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar por ley\" aria-label=\"Search\">\n    </div>\n    <!-- <input [(ngModel)]=\"search\" placeholder=\"Busca por tipo de ley\" type=\"text\"> -->\n    <div class=\"organize\">\n            \n            <div *ngFor=\"let l of lawyers | filter:'category':search\" class=\"lawyer-box\">\n               <h3> {{l.name}}</h3>\n               \n               <img width=\"100\" src=\"{{l.image || 'http://www.usanetwork.com/sites/usanetwork/files/styles/629x720/public/2018/07/suits_cast_harvey_s8.jpg?itok=dfZIxggZ'}}\" alt=\"\">\n               <br>\n               <p *ngIf=\"l.category\"> {{l.category | capitalizr}}</p>\n               <br>\n                <p>{{l.education}}</p>\n                <a href=\"#\">Ver ficha</a>\n              \n            </div>\n    </div>\n  \n  </section>\n  \n  \n  \n  \n  \n  <section *ngIf=\"user.role === 'LAWYER'\">\n      <h1 style=\"text-align:center;color:black;padding-top:20px;\">Responde preguntas por tu especialización:</h1>\n    <hr>\n    <div class=\"btnz\">\n        \n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Familiar</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Administrativo</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Mercantil</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Laboral</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Penal</a></button>\n        <!-- <button type=\"button\" class=\"btn btn-outline-dark\"></button> -->\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Fiscal</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Constitucional</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Propiedad Intelectual</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Registro de Propiedades/Mercantil</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Urbanismo</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Europeo</a></button>\n        <button type=\"button\" class=\"btn btn-outline-dark\"><a [routerLink]=\"['/browse']\" style=\"color:white\">Otro</a></button>\n\n\n\n    </div>\n  \n    \n    \n    </section>"

/***/ }),

/***/ "./src/app/explore/explore.component.ts":
/*!**********************************************!*\
  !*** ./src/app/explore/explore.component.ts ***!
  \**********************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_lawyer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/lawyer.service */ "./src/app/services/lawyer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExploreComponent = /** @class */ (function () {
    function ExploreComponent(router, authService, lService, activeRoute) {
        this.router = router;
        this.authService = authService;
        this.lService = lService;
        this.activeRoute = activeRoute;
        this.auth = {
            username: '',
            email: '',
            password: ''
        };
    }
    ExploreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['home']);
        this.lService.getLawyers()
            .subscribe(function (lawyers) { return _this.lawyers = lawyers; });
    };
    ExploreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.component.html */ "./src/app/explore/explore.component.html"),
            styles: [__webpack_require__(/*! ./explore.component.css */ "./src/app/explore/explore.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_lawyer_service__WEBPACK_IMPORTED_MODULE_3__["LawyerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/ficha/ficha.component.css":
/*!*******************************************!*\
  !*** ./src/app/ficha/ficha.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align {\n  text-align:center;\n  display:flex;\n  align-items:center;\n  flex-direction: column;\n  margin-top:-100px;\n}\n\nh1 {\n  border-bottom:2px dotted black;\n  margin-top:50px;\n}\n\n.ans {\n  width:40%;\n\n}\n\nimg {\n  margin-top:50px;\n  border-radius:50%;\n  width:400px; \n}\n\n.bton {\n  background-color:none;\n  border:1px solid #007bff;\n  font-size:1em;\n \n}"

/***/ }),

/***/ "./src/app/ficha/ficha.component.html":
/*!********************************************!*\
  !*** ./src/app/ficha/ficha.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"user.role === 'USER'\">\n    <button style=\"margin-top:5%;margin-left:50px\" type=\"button\" class=\"bton btn btn-lg\"><a [routerLink]=\"['/question', lawyer._id]\"> Haz tu pregunta </a></button>\n    <div class=\"align\">\n        <!-- {{question.created-at}}  -->\n          <h1>  {{lawyer.name| capitalizr}}  </h1><span>by {{lawyer.username}}</span> \n          <img src=\"{{lawyer.image || 'http://www.usanetwork.com/sites/usanetwork/files/styles/629x720/public/2018/07/suits_cast_harvey_s8.jpg?itok=dfZIxggZ'}}\" alt=\"\">\n          <br>\n            <br>\n          <div class=\"ans\">\n            <p><strong style=\"text-decoration: underline\">Educación:</strong><br> {{lawyer.bio | capitalizr}}</p>\n            <p><strong style=\"text-decoration: underline\">Especialidad/es:</strong><br> {{lawyer.category | capitalizr}}</p>\n            <p><strong style=\"text-decoration: underline\">Bio:</strong><br> {{lawyer.bio}}</p>\n            <p><strong style=\"text-decoration: underline\">Bufete:</strong><br> {{lawyer.bufete | capitalizr}}</p>\n            <h5>Contact:</h5>\n            <p><strong style=\"text-decoration: underline\">E-mail:</strong><br> {{lawyer.email}}</p>\n            <!-- <p><strong style=\"text-decoration: underline\">Teléfono:</strong> {{lawyer.category}}</p> -->\n            \n          </div>\n          <!-- <a *ngIf=\"user.username === question.username\" [routerLink]=\"['edit']\">Editar</a>\n          <a *ngIf=\"user.role === 'LAWYER'\" [routerLink]=\"['edit']\">Responder</a> -->\n      </div>\n      \n</section>\n<section *ngIf=\"user.role === 'LAWYER'\">\n    <button style=\"margin-top:5%;margin-left:50px\" type=\"button\" class=\"bton btn btn-lg\"><a [routerLink]=\"['/question']\"> Ver preguntas a ti </a></button>\n    <div class=\"align\">\n        <!-- {{question.created-at}}  -->\n          <h1>  {{lawyer.name| capitalizr}}  </h1><span>by {{lawyer.username}}</span> \n          <img src=\"{{lawyer.image || 'http://www.usanetwork.com/sites/usanetwork/files/styles/629x720/public/2018/07/suits_cast_harvey_s8.jpg?itok=dfZIxggZ'}}\" alt=\"\">\n          <br>\n            <br>\n          <div class=\"ans\">\n            <p><strong style=\"text-decoration: underline\">Educación:</strong><br> {{lawyer.bio | capitalizr}}</p>\n            <p><strong style=\"text-decoration: underline\">Especialidad/es:</strong><br> {{lawyer.category | capitalizr}}</p>\n            <p><strong style=\"text-decoration: underline\">Bio:</strong><br> {{lawyer.bio}}</p>\n            <p><strong style=\"text-decoration: underline\">Bufete:</strong><br> {{lawyer.bufete | capitalizr}}</p>\n            <h5>Contact:</h5>\n            <p><strong style=\"text-decoration: underline\">E-mail:</strong><br> {{lawyer.email}}</p>\n            <!-- <p><strong style=\"text-decoration: underline\">Teléfono:</strong> {{lawyer.category}}</p> -->\n            \n          </div>\n          <!-- <a *ngIf=\"user.username === question.username\" [routerLink]=\"['edit']\">Editar</a>\n          <a *ngIf=\"user.role === 'LAWYER'\" [routerLink]=\"['edit']\">Responder</a> -->\n      </div>\n      \n</section>\n\n\n"

/***/ }),

/***/ "./src/app/ficha/ficha.component.ts":
/*!******************************************!*\
  !*** ./src/app/ficha/ficha.component.ts ***!
  \******************************************/
/*! exports provided: FichaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaComponent", function() { return FichaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _services_lawyer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/lawyer.service */ "./src/app/services/lawyer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FichaComponent = /** @class */ (function () {
    function FichaComponent(router, activeRoute, questionService, lService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.questionService = questionService;
        this.lService = lService;
    }
    // editOne(){
    //   this.questionService.editOneQuestion(this.id)
    //   .subscribe(question => this.question = question)
    // }
    FichaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params
            .subscribe(function (params) {
            console.log(params.id);
            _this.id = params.id;
            _this.lService.getOneLawyer(_this.id)
                .subscribe(function (lawyer) {
                //      console.log(phone)
                _this.lawyer = lawyer;
            });
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['login']);
        //query
        this.activeRoute.queryParams
            .subscribe(function (query) {
            console.log(query);
        });
    };
    FichaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ficha',
            template: __webpack_require__(/*! ./ficha.component.html */ "./src/app/ficha/ficha.component.html"),
            styles: [__webpack_require__(/*! ./ficha.component.css */ "./src/app/ficha/ficha.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"],
            _services_lawyer_service__WEBPACK_IMPORTED_MODULE_3__["LawyerService"]])
    ], FichaComponent);
    return FichaComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (array, field, value, args) {
        if (!value)
            return array;
        var newRegx = new RegExp(value, 'i');
        return array.filter(function (obj) { return obj[field].match(newRegx); });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  margin-top:-100px;\n  padding-top:150px;\n  background-image: url(\"https://wallpapersite.com/images/pages/pic_w/3492.jpg\");\n  background-size:cover;\n  height:750px;\n  border-bottom:1px solid black;\n  width:100vw;\n  box-shadow: 1px 1px 10px 1px black;\n\n}\n\n.align {\n  display:flex;\n  flex-direction: column;\n  align-items:center;\n\n}\n\n.align button {\n  background-color:#AB0000;\n  color:white;\n  margin-top:10px;\n}\n\n.form-group {\n  text-align:center;\n}\n\ntextarea {\n  height:150px;\n}\n\n.align form {\n  width:40%;\n  margin-top:-30px;\n}\n\nimg {\n width:20%;\n height:20%;\n\n margin-bottom:50px;\n}\n\nsection {\n  width:100vw;\n  height:600px;\n  position:absolute;\n \n}\n\nhr {\nwidth:40%;\nweight:5px;\n}\n\n.btnz { \n  \n  display:flex;\n  /* flex-direction:row; */\n  justify-content: center;\n  margin-left:15%;\n width:70%;\n  flex-wrap:wrap;\n \n}\n\nsection .btn {\n  display:flex;\n  /* flex-direction:row; */\n  justify-content: center;\n  margin-right:50px;\n  margin-top:30px;\n  height:60px;\n  flex-wrap:wrap;\n  padding-left:10%;\n  padding-right:10%;\n  border:1px solid black;\n  color:white;\n  background-color:darkslategray;\n}\n\n.btn:hover {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #AB0000;\n}\n\n.butons {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  \n}\n\n.align button {\n  margin-left:20px;\n  margin-right:20px;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"align\">\n      <img src=\"../assets/medium-logo.png\">\n  \n      <form>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Tu correo electrónico:</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"nombre@ejemplo.com\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">¿Qué tipo de derecho requires?</label>\n            <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option>No sé</option>\n              <option>Familiar</option>\n              <option>Administrativo</option>\n              <option>Mercantil</option>\n              <option>Laboral</option>\n              <option>Penal</option>\n              <option>Fiscal</option>\n              <option>Constitucional</option>\n              <option>Propiedad Intelectual</option>\n              <option>Registro de Propiedades/Mercantil</option>\n              <option>Urbanismo</option>\n              <option>Europeo</option>\n              <option>Otro</option>\n             \n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlTextarea1\">Tu pregunta detallada:</label>\n            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n          </div>\n         \n        </form>\n      <div class=\"butons\">\n      \n        <button type=\"submit\"  class=\"btn\"><a [routerLink]=\"['/signup']\" style=\"color:white\">Regístrate</a></button>\n        <button class=\"btn\"><a [routerLink]=\"['/login']\" style=\"color:white\">Log in</a></button>\n      </div>\n  </div>\n\n</header>\n<section>\n    <h1 style=\"text-align:center;color:black;padding-top:20px;\">Busca por abogado</h1>\n    <hr>\n    <div class=\"btnz\">\n        \n        <button type=\"button\" class=\"btn btn-outline-dark\">Familiar</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Administrativo</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Mercantil</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Laboral</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Penal</button>\n        <!-- <button type=\"button\" class=\"btn btn-outline-dark\"></button> -->\n        <button type=\"button\" class=\"btn btn-outline-dark\">Fiscal</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Constitucional</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Propiedad Intelectual</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Registro de Propiedades/Mercantil</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Urbanismo</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Europeo</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Otro</button>\n\n\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inner-html-binding/inner-html-binding.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/inner-html-binding/inner-html-binding.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Binding innerHTML</h3>\n<p>Bound value:</p>\n<p class=\"e2e-inner-html-interpolated\">{{htmlSnippet}}</p>\n<p>Result of binding to innerHTML:</p>\n<p class=\"e2e-inner-html-bound\" [innerHTML]=\"htmlSnippet\"></p>\n"

/***/ }),

/***/ "./src/app/inner-html-binding/inner-html-binding.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/inner-html-binding/inner-html-binding.component.ts ***!
  \********************************************************************/
/*! exports provided: InnerHtmlBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerHtmlBindingComponent", function() { return InnerHtmlBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InnerHtmlBindingComponent = /** @class */ (function () {
    function InnerHtmlBindingComponent() {
        // For example, a user/attacker-controlled value from a URL.
        this.htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
    }
    InnerHtmlBindingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inner-html-binding',
            template: __webpack_require__(/*! ./inner-html-binding.component.html */ "./src/app/inner-html-binding/inner-html-binding.component.html"),
        })
    ], InnerHtmlBindingComponent);
    return InnerHtmlBindingComponent;
}());



/***/ }),

/***/ "./src/app/lawyer/lawyer.component.css":
/*!*********************************************!*\
  !*** ./src/app/lawyer/lawyer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .align {\n   text-align:center;\n   width:50%;\n margin-left:25%;\n  \n  } \n "

/***/ }),

/***/ "./src/app/lawyer/lawyer.component.html":
/*!**********************************************!*\
  !*** ./src/app/lawyer/lawyer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h1>{{form | json}}</h1>\n<section *ngIf=\"user.role === 'USER'\">\n  <h1>Lo sentimos, solo los abogados pueden subir perfiles</h1>\n  <div *ngFor=\"let lawyer of lawyers\">\n    {{lawyer.name}}\n  </div>\n    \n    \n    \n</section>\n<section *ngIf=\"user.role === 'LAWYER'\">\n    <form>\n      <div class=\"align\">\n        <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Usuario asociado:</label>\n              <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"lawyer.username\" id=\"exampleFormControlInput1\" placeholder=\"{{user.username}}\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Tu nombre:</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"lawyer.name\" id=\"exampleFormControlInput1\" placeholder=\"Nombre\">\n        </div>\n        <div>\n          <label for=\"inputfile\">Tu foto de perfil</label>\n          <input class=\"inputfile\" type=\"file\" #image name=\"image\" >\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Tu correo de trabajo:</label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"lawyer.email\" id=\"exampleFormControlInput1\" placeholder=\"nombre@bufete.com\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Educación:</label>\n            <input type=\"text\" class=\"form-control\" name=\"education\" [(ngModel)]=\"lawyer.education\" id=\"exampleFormControlInput1\" placeholder=\"Harvard\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Bufete:</label>\n            <input type=\"text\" class=\"form-control\" name=\"bufete\" [(ngModel)]=\"lawyer.bufete\" id=\"exampleFormControlInput1\" placeholder=\"Opcional\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect1\">¿Qué tipo de derecho requires?</label>\n          <select class=\"form-control\" name=\"category\" [(ngModel)]=\"lawyer.category\" id=\"exampleFormControlSelect1\">\n            <option value=\"nose\">No sé</option>\n            <option value=\"familiar\">Familiar</option>\n            <option value=\"admin\">Administrativo</option>\n            <option value=\"mercantil\">Mercantil</option>\n            <option value=\"laboral\">Laboral</option>\n            <option value=\"penal\">Penal</option>\n            <option value=\"fiscal\">Fiscal</option>\n            <option value=\"consti\">Constitucional</option>\n            <option value=\"ip\">Propiedad Intelectual</option>\n            <option value=\"registro\">Registro de Propiedades/Mercantil</option>\n            <option value=\"urban\">Urbanismo</option>\n            <option value=\"europeo\">Europeo</option>\n            <option value=\"otro\">Otro</option>\n           \n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlTextarea1\">Un poco sobre ti:</label>\n          <textarea [(ngModel)]=\"lawyer.bio\" class=\"form-control\" name=\"bio\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n          <!-- <textarea [(ngModel)]=\"question.answer\"  class=\"form-control\" name=\"answer\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea> -->\n        </div>\n        <button (click)=\"makeLawyer()\">in for me</button>\n      </div> \n      </form>\n</section>\n"

/***/ }),

/***/ "./src/app/lawyer/lawyer.component.ts":
/*!********************************************!*\
  !*** ./src/app/lawyer/lawyer.component.ts ***!
  \********************************************/
/*! exports provided: LawyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawyerComponent", function() { return LawyerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lawyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lawyer.service */ "./src/app/services/lawyer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LawyerComponent = /** @class */ (function () {
    function LawyerComponent(lawyerService, router, activeRoute) {
        this.lawyerService = lawyerService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.lawyer = {};
        this.isLogged = false;
        this.name = '';
        this.education = '';
        this.content = '';
        this.category = '';
        this.search = '';
    }
    LawyerComponent.prototype.ngAfterViewInit = function () {
    };
    LawyerComponent.prototype.makeLawyer = function () {
        var _this = this;
        this.lawyer.image = this.image.nativeElement.files[0];
        console.log(this.lawyer);
        // this.q.category = this.category;
        return this.lawyerService.postLawyer(this.lawyer)
            .subscribe(function (lawyer) {
            _this.lawyer = lawyer;
            _this.router.navigate(['browse']);
        });
        // this.username = '';
        // this.title = '';
        // this.content = '';
    };
    LawyerComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("image"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LawyerComponent.prototype, "image", void 0);
    LawyerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lawyer',
            template: __webpack_require__(/*! ./lawyer.component.html */ "./src/app/lawyer/lawyer.component.html"),
            styles: [__webpack_require__(/*! ./lawyer.component.css */ "./src/app/lawyer/lawyer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lawyer_service__WEBPACK_IMPORTED_MODULE_2__["LawyerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LawyerComponent);
    return LawyerComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-size: 1.2em;\n}\n\nsection {\n  background-image: url(\"https://wallpapersite.com/images/pages/pic_w/3492.jpg\");\n  background-size:cover;\n  height:750px;\n  margin-top:-100px;\n  padding-top:130px;\n}\n\nform {\n  height:500px;\n  width:50%;\n  display:flex;\n  flex-direction: column;\n  justify-content:center;\n  text-align:center;\n  margin-left:25%;\n\n  \n}\n\nimg {\n  width:35%;\n  \n}\n\n.form-control:focus{\n    border-color: rgb(0, 163, 35);  \n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(0, 163, 35);\n    -webkit-box-shadow: rgb(0, 163, 35);\n  }\n\n.btn {\n    /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #AB0000;\n    color:white; */\n    background-color:#36454f;\n    color:white;\n  }\n\n.btn:hover {\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(0, 163, 35);\n  }\n\n.align {\n    display:flex;\n    flex-direction: column;\n    align-items:center;\n  \n  }\n\n.f1 {\n    padding-top:50px;\n  }\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"user\">Hola {{user.email}}</h1>\n\n<section >\n  <!-- <div >\n        <h2>Inicia sesión</h2>\n        <input placeholder=\"email\" [(ngModel)]=\"auth.email\" type=\"text\">\n        <br>\n        <input placeholder=\"tu password\" [(ngModel)]=\"auth.password\"  type=\"password\">\n        <button (click)=\"login()\" >Entrar</button>\n        <p>No tienes cuenta? <span (click)=\"login=!login\" >Click aquí</span></p>\n      </div>\n       -->\n      <!-- <div *ngIf=\"!isLogged\">\n        <h2>Registrate</h2>\n        <input [(ngModel)]=\"auth.username\" placeholder=\"username\" type=\"text\">\n        <input placeholder=\"email\" [(ngModel)]=\"auth.email\" type=\"text\">\n        <br>\n        <input placeholder=\"tu password\" [(ngModel)]=\"auth.password\"  type=\"password\">\n        <button (click)=\"signup()\" >Registrarme</button>\n        <p>Ya tienes cuenta? <span (click)=\"login=!login\" >Click aquí</span></p>\n      </div> -->\n      <form>\n        <div class=\"align\">\n          <img src=\"../assets/medium-logo.png\">\n          <div class=\"f1 form-group\">\n            <label for=\"exampleInputEmail1\">Tu correo</label>\n            <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"nombre@ejemplo.com\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">Nunca compartiremos su información.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label\" for=\"exampleCheck1\">No cerrar sesión</label>\n          </div>\n          <button type=\"submit\" (click)=\"login()\"class=\"btn\">Entrar</button>\n        </div>\n      </form>\n     \n      <a [routerLink]=\"['/signup']\" style=\"color:white;text-align:center;\">No tienes cuenta?</a>\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // username: string = ''
        this.isLogged = false;
        this.email = '';
        this.password = '';
        this.auth = {
            email: '',
            password: ''
        }; //object used for all authentication
        this.user = '';
    }
    LoginComponent.prototype.signup = function () {
        var _this = this;
        this.authService.signup(this.auth)
            .subscribe(function (user) {
            _this.user = user;
            // localStorage.setItem('user', JSON.stringify(user))
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.email = this.email;
        this.auth.password = this.password;
        this.authService.login(this.auth)
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            localStorage.setItem('user', JSON.stringify(_this.user));
            _this.isLogged = true;
            _this.router.navigate(['profile']);
        });
        // this.email = '';
        // this.password = '';
    };
    LoginComponent.prototype.logout = function () {
        localStorage.removeItem('user');
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['profile']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modal-options.html":
/*!************************************!*\
  !*** ./src/app/modal-options.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <img class=\"modal-title\" style=\"width:130px;margin-left:37%;\"src=\"../assets/medium-logo.png\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      \n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <form>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Tu usuario:</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"question.username\" name=\"username\" id=\"exampleFormControlInput1\" placeholder=\"{{user.username}}\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"exampleFormControlInput1\">Título de la pregunta:</label>\n              <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"question.title\" id=\"exampleFormControlInput1\" placeholder=\"Pregunta sobre ...\">\n            </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">¿Qué rama de la ley?</label>\n            <select class=\"form-control\" name=\"content\" [(ngModel)]=\"question.category\" id=\"exampleFormControlSelect1\">\n              <option value=\"nose\">No sé</option>\n              <option value=\"familiar\">Familiar</option>\n              <option value=\"admin\">Administrativo</option>\n              <option value=\"mercantil\">Mercantil</option>\n              <option value=\"laboral\">Laboral</option>\n              <option value=\"penal\">Penal</option>\n              <option value=\"fiscal\">Fiscal</option>\n              <option value=\"consti\">Constitucional</option>\n              <option value=\"ip\">Propiedad Intelectual</option>\n              <option value=\"registro\">Registro de Propiedades/Mercantil</option>\n              <option value=\"urban\">Urbanismo</option>\n              <option value=\"europeo\">Europeo</option>\n              <option value=\"otro\">Otro</option>\n             \n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlTextarea1\">Tu pregunta detallada:</label>\n            <textarea [(ngModel)]=\"question.content\" class=\"form-control\" name=\"content\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n          </div>\n          <button style=\"margin-left:40%;\" (click)=\"makeQuestion()\">InforMe</button>\n      </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n<div class=\"btnz\">\n  <button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content)\">Haz tu pregunta</button>\n\n   \n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/modal-options.ts":
/*!**********************************!*\
  !*** ./src/app/modal-options.ts ***!
  \**********************************/
/*! exports provided: NgbdModalOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalOptions", function() { return NgbdModalOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdModalOptions = /** @class */ (function () {
    function NgbdModalOptions(modalService, qService) {
        this.modalService = modalService;
        this.qService = qService;
        this.count = 0;
        this.question = {};
        this.isLogged = false;
        this.username = '';
        this.title = '';
        this.content = '';
        this.category = '';
        this.answer = 'nada';
    }
    NgbdModalOptions.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    NgbdModalOptions.prototype.makeQuestion = function () {
        var _this = this;
        return this.qService.ask(this.question)
            .subscribe(function (question) {
            question.count += 1;
            _this.question = question;
        });
        // this.username = '';
        // this.title = '';
        // this.content = '';
    };
    NgbdModalOptions.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    NgbdModalOptions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-options',
            template: __webpack_require__(/*! ./modal-options.html */ "./src/app/modal-options.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"]])
    ], NgbdModalOptions);
    return NgbdModalOptions;
}());



/***/ }),

/***/ "./src/app/private/private.component.css":
/*!***********************************************!*\
  !*** ./src/app/private/private.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/private/private.component.html":
/*!************************************************!*\
  !*** ./src/app/private/private.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  private works!\n</p>\n"

/***/ }),

/***/ "./src/app/private/private.component.ts":
/*!**********************************************!*\
  !*** ./src/app/private/private.component.ts ***!
  \**********************************************/
/*! exports provided: PrivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateComponent", function() { return PrivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivateComponent = /** @class */ (function () {
    function PrivateComponent() {
    }
    PrivateComponent.prototype.ngOnInit = function () {
    };
    PrivateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-private',
            template: __webpack_require__(/*! ./private.component.html */ "./src/app/private/private.component.html"),
            styles: [__webpack_require__(/*! ./private.component.css */ "./src/app/private/private.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivateComponent);
    return PrivateComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  height:100vh;\n}\n.flex {\n  display:flex;\n  flex-direction: row;\n}\n.box {\n  margin-left:50%;\n}\n.pos {\n  text-align:center;\n  margin-top:50px;\n}\n.cnt{\n width:100vw;\n \n}\nh1 {\n  border-bottom:2px dotted black;\n}\n.cntr {\n  margin-top:50px;\n  margin-right:0px;\n width:40%;\n  text-align:center;\n \n}\n.cntry {\n  margin-top:50px;\n  margin-right:50px;\n width:40%;\n  text-align:center;\n \n}\n.lft {\n  text-align:left;\n  margin:50px;\n \n}\n.rte {\n  /* margin:70px; */\n  margin-top:47px;\n  margin-left:30px;\n\n}\n.answers {\n  \n  margin-top:30px;\n  display:flex;\n  align-items: center;\n  flex-direction:column-reverse;\n}\n.question-box {\n  transition: box-shadow .2s;\n  border:1px solid black;\n  border-radius:5px;\n  text-align: center;\n  margin:20px;\n  padding:20px;\n  box-shadow: 0 10px 6px -6px #777;\n}\n.question-box:hover {\n  box-shadow: 0 0 11px rgba(33,33,33,.2); \n}\n.qbox {\n  width:90%;\n}\n.rte a {\n  color:#007bff;\n}\ni{\n  color:green;\n}\nimg {\n  margin-top:30px;\n  border-radius:50%;\n  width:40%;\n}\np i {\n  color:#F9A602;\n}\n.lfty {\n  position:absolute;\n  top:45px;\n  right:6%;\n\n}\n.lfty a {\n  color:white;\n}\n.wdn {\n  /* margin-top:50px;\n  margin-right:30px;\n  width:300px; */\n}\n.bton {\n  background-color:none;\n  border:1px solid #007bff;\n  font-size:1em;\n \n}\n.btons{\n  background-color:none;\n  border:1px solid #007bff;\n  font-size:1em;\n  position:absolute;\n  top:45px;\n  right:6%;\n\n}\n.btons a {\n  color:#007bff;\n}\n.btons:hover {\n  background-color:#007bff;\n \n}\n.bton a {\n  color:#007bff;\n}\n.bton:hover {\n  background-color:#007bff;\n \n}\n.bton a:hover {\n  color:white;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"user.role === 'USER'\">\n <div class=\"cnt container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"lft col col-lg-2\">\n            <ngbd-modal-options></ngbd-modal-options> \n      </div>\n      <div class=\"cntry col-md-auto\">\n          <h1>Hola, {{user.username}}</h1>\n          <!-- <div *ngIf=\"!user.image\">\n              Cambia tu foto de perfil\n              <input type=\"file\" [(ngModel)]=\"user.image\" (click)=\"changePic()\">\n          </div> -->\n          <img src=\"{{user.image || 'http://www.usanetwork.com/sites/usanetwork/files/styles/629x720/public/2018/07/suits_cast_harvey_s8.jpg?itok=dfZIxggZ'}}\" alt=\"\">\n          <div style=\"margin-top:50px;\">\n\n                <p><strong>Preguntas:</strong>  4</p>\n                 <p style=\"margin-top:10px\"><strong>Puntuación:</strong> <i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"far fa-star\"></i></p>\n             \n            </div>\n          <h1 style=\"margin-top:50px;\">Tus preguntas</h1>\n      </div>\n      <div class=\"rte col col-lg-2\">\n          <div>\n                           \n              <button style=\"margin-top:5%\" type=\"button\" class=\"bton btn btn-lg\"><a [routerLink]=\"['/browse']\"> Elige abogado para preguntar </a></button>\n          </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"answers\">\n    \n           <div *ngFor=\"let q of questions\" class=\"qbox\">\n                  <div *ngIf=\"user.username === q.username\" class=\"question-box\">\n                    <h5>{{q.title | capitalizr}}</h5>\n                    <i *ngIf=\"q.answer !== 'no'\" class=\"fas fa-check\" ></i>\n                    <p *ngIf=\"q.lawyer\">Respuesta pendiente de: {{q.lawyer}}</p>\n                    <p *ngIf=\"q.answer !== 'no'\"><a [routerLink]=\"['/ramas', q._id]\"> Ver respuesta</a></p>\n                    <a *ngIf=\"user.username === q.username\" [routerLink]=\"['/ramas/', q._id,'edit']\"><i style=\"color:black;margin-left:90%\" class=\"fas fa-edit\"></i></a>\n                  </div>\n              \n           </div>\n  </div>\n  \n      \n\n\n</section>\n\n\n<section *ngIf=\"user.role === 'LAWYER'\">\n    <div class=\"cnt container\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"wdn col col-lg-2\">\n                <button style=\"margin-top:5%\" type=\"button\" class=\"btons btn btn-lg\"><a [routerLink]=\"['/lawyer']\"> + Crear ficha de abogado</a></button>\n          </div>\n          <div class=\"cntr col-md-auto\">\n              <h1>Hola, {{user.username}}</h1>\n              <div *ngIf=\"!user.image\">\n                  Cambia tu foto de perfil\n                  <input type=\"file\" #image (click)=\"changePic()\">\n              </div>\n              <img width=\"100\" src=\"{{'http://www.usanetwork.com/sites/usanetwork/files/styles/629x720/public/2018/07/suits_cast_harvey_s8.jpg?itok=dfZIxggZ'}}\" alt=\"\">\n              <div style=\"margin-top:50px;\">\n\n                    <p><strong>Respuestas:</strong>  4</p>\n                     <p style=\"margin-top:10px\"><strong>Puntuación:</strong> <i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"far fa-star\"></i></p>\n                 \n                </div>\n              \n          </div>\n          <div class=\"rte col col-lg-2\">\n              <div>\n                  <button type=\"button\" class=\"bton btn btn-lg\"><a [routerLink]=\"['/ramas']\">Ver todas las preguntas</a></button>\n              </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"container\">\n            <div class=\"row\">\n              <div style=\"width:40%\" class=\"col\">\n                    <h1 style=\"margin-top:70px;text-align:center\">Tus respuestas</h1>\n                    <div class=\"answers\">\n        \n                            <div *ngFor=\"let q of questions\" class=\"qbox\">\n                             <div *ngIf=\"q.role === 'USER'\">\n                              <div *ngIf=\"q.answer !== 'no'\" class=\"question-box\">\n                                 <h5 style=\"text-decoration: underline\">{{q.title  | capitalizr}}</h5>\n                                 <p>{{q.category | capitalizr}}</p>\n                                 <a [routerLink]=\"['/ramas', q._id]\">Ver respuesta</a>\n                              </div>\n                             </div>\n                            </div>\n                       \n                   </div>\n              </div>\n              <div style=\"width:40%\" class=\"col\">\n                    <h1 style=\"margin-top:70px;text-align:center\">Preguntadas a ti:</h1>\n                    <div *ngFor=\"let q of questions\" class=\"answers\">\n                \n                            <div *ngIf=\"q.lawyer === user.username\" class=\"qbox\">\n                                <div class=\"question-box\">\n                                    <h5 style=\"text-decoration: underline\">{{q.title | capitalizr}}</h5>\n                                    <p *ngIf=\"q.answer === 'no'\"><a [routerLink]=\"['/ramas/', q._id, 'edit']\">Responder</a></p>\n                                    <i *ngIf=\"q.answer !== 'no'\" class=\"fas fa-check\" ></i>\n                                    <p *ngIf=\"q.answer !== 'no'\"><a [routerLink]=\"['/ramas', q._id]\"> Ver respuesta</a></p>\n                                    <a *ngIf=\"user.username === q.username\" [routerLink]=\"['/ramas/', q._id,'edit']\"><i style=\"color:black;margin-left:90%\" class=\"fas fa-edit\"></i></a>\n                                </div>\n                            \n                    </div>\n                    </div>\n              </div>\n            </div>\n        </div>\n      \n     \n      \n  \n  \n  </section>\n  \n  \n\n<!-- usa ngIF para separar -->\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, authService, activeRoute, qService) {
        this.router = router;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.qService = qService;
        this.auth = {
            username: '',
            email: '',
            password: ''
        };
    }
    ProfileComponent.prototype.ngAfterViewInit = function () {
    };
    ProfileComponent.prototype.changePic = function () {
        var _this = this;
        var image = this.image.nativeElement.files[0];
        return this.authService.changePic(this.user._id, image)
            .subscribe(function (image) { return _this.image = image; });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['login']);
        this.qService.getQuestions()
            .subscribe(function (questions) {
            console.log(questions);
            _this.questions = questions;
            _this.count = questions.length;
        });
        // this.authService.getProfile().toPromise()
        // .then(user=>{
        //   this.user = user
        //   console.log(this.user)
        // })
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("image"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "image", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section *ngIf=\"user.role === 'USER'\">\n    <form>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlInput1\">Tu usuario:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"question.username\" name=\"username\" id=\"exampleFormControlInput1\" placeholder=\"{{user.username}}\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Usuario de abogado:</label>\n            <input type=\"text\" class=\"form-control\" name=\"lawyer\" [(ngModel)]=\"question.lawyer\" id=\"exampleFormControlInput1\" placeholder=\"{{lawyer.username}}\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Título de la pregunta:</label>\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"question.title\" id=\"exampleFormControlInput1\" placeholder=\"Pregunta sobre ...\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Pregunta a:</label>\n            <select required class=\"form-control\" aria-label=\"ngSelected\" name=\"role\" [(ngModel)]=\"question.role\" id=\"exampleFormControlSelect1\">\n              <option value=\"LAWYER\">Abogado</option>\n             \n            </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect1\">¿Qué rama de la ley?</label>\n          <select class=\"form-control\" name=\"content\" [(ngModel)]=\"question.category\" id=\"exampleFormControlSelect1\">\n            <option value=\"nose\">No sé</option>\n            <option value=\"familiar\">Familiar</option>\n            <option value=\"admin\">Administrativo</option>\n            <option value=\"mercantil\">Mercantil</option>\n            <option value=\"laboral\">Laboral</option>\n            <option value=\"penal\">Penal</option>\n            <option value=\"fiscal\">Fiscal</option>\n            <option value=\"consti\">Constitucional</option>\n            <option value=\"ip\">Propiedad Intelectual</option>\n            <option value=\"registro\">Registro de Propiedades/Mercantil</option>\n            <option value=\"urban\">Urbanismo</option>\n            <option value=\"europeo\">Europeo</option>\n            <option value=\"otro\">Otro</option>\n           \n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlTextarea1\">Tu pregunta detallada:</label>\n          <textarea [(ngModel)]=\"question.content\" class=\"form-control\" name=\"content\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n        </div>\n        <button style=\"margin-left:40%;\" (click)=\"makeQuestion()\">InforMe</button>\n    </form>\n    \n    \n</section>\n<section *ngIf=\"user.role === 'LAWYER'\">\n  <h1>Preguntas a ti</h1>\n</section>\n"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_lawyer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/lawyer.service */ "./src/app/services/lawyer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(qService, router, authService, activeRoute, lService) {
        this.qService = qService;
        this.router = router;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.lService = lService;
        this.question = {};
        this.lawyer = {};
        this.isLogged = false;
        // username: string = ''
        this.title = '';
        this.content = '';
        this.category = '';
        this.answer = '';
    }
    QuestionsComponent.prototype.makeQuestion = function () {
        var _this = this;
        // this.q.category = this.category;
        return this.qService.ask(this.question)
            .subscribe(function (question) { return _this.question = question; });
        // this.username = '';
        // this.title = '';
        // this.content = '';
    };
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['login']);
        this.activeRoute.params
            .subscribe(function (params) {
            console.log(params.id);
            _this.id = params.id;
            _this.lService.getOneLawyer(_this.id)
                .subscribe(function (lawyer) {
                //      console.log(phone)
                _this.lawyer = lawyer;
            });
        });
    };
    QuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_lawyer_service__WEBPACK_IMPORTED_MODULE_4__["LawyerService"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/ramas/ramas.component.css":
/*!*******************************************!*\
  !*** ./src/app/ramas/ramas.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background-color:whitesmoke;\n  margin-right:40px;\n  margin-left:40px;\n  /* margin-top:-150px;\n  padding-top:150px; */\n}\n\n.question-box {\n  transition: box-shadow .2s;\n  border:1px solid #777;\n  border-radius:5px;\n  text-align: center;\n  margin:20px;\n  padding:20px;\n  box-shadow: 0 10px 6px -6px #777;\n \n}\n\n.question-box:hover {\n  box-shadow: 0 0 11px rgba(33,33,33,.2); \n}\n\n.qbox {\n  width:45%;\n  margin-right:30px;\n}\n\n.organize {\n  display:flex;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  margin-top:50px;\n  padding-top:50px;\n\n}\n\n.aligner{\n  display:flex;\n  justify-content: center;\n  margin-top:50px;\n}\n\ni {\n  color:red;\n}\n\n/* section a {\n  color:green;\n} */\n\n.qbox h3 {\n  color:black;\n  text-decoration: underline;\n}\n\nh1 {\n  text-align:center;\n  margin-top:30px;\n  border-bottom:2px dotted black;\n \n}"

/***/ }),

/***/ "./src/app/ramas/ramas.component.html":
/*!********************************************!*\
  !*** ./src/app/ramas/ramas.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"width:30%;margin-left:35%;\">\n     <h1>Librería de preguntas</h1>\n</div>\n<div class=\"aligner\">\n       \n        <input [(ngModel)]=\"search\" style=\"width:35%;\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar preguntas por rama de ley\" aria-label=\"Search\">\n</div>    <!-- <h2 *ngFor=\"let q of questions | filter:'title':search\">{{q.title}}</h2> -->\n\n  <section *ngIf=\"user.role === 'USER'\"> \n     \n   <div class=\"organize\">\n        <div *ngFor=\"let q of questions | filter:'category':search\" class=\"qbox\">\n                <!-- <h3 *ngIf=\"\">PREGUNTA RESPONDIDA</h3> -->\n            <div *ngIf=\"q.answer !== 'no'\" class=\"question-box\">\n                <h3>{{q.title  | capitalizr}}</h3>\n                <p>{{q.category | capitalizr}}</p>\n                <i  style=\"margin-right:20px;color:green;\" class=\"fas fa-check\"></i>\n                <a [routerLink]=\"['/ramas', q._id]\">Ver respuesta</a>\n                <!-- <i  class=\"fas fa-check\"></i> -->\n            </div>\n            <div *ngIf=\"q.answer === 'no'\" class=\"question-box\">\n                <h3>{{q.title  | capitalizr}}</h3>\n                <p>{{q.category | capitalizr}}</p>\n                <i style=\"margin-right:20px\" class=\"r far fa-times-circle\"></i>\n                <a [routerLink]=\"['/ramas', q._id]\">Ver pregunta</a>\n                <br>\n                <a *ngIf=\"user.username === q.username\" [routerLink]=\"['/ramas/', q._id,'edit']\"><i style=\"color:black;margin-left:90%;margin-top:30px;\" class=\"fas fa-edit\"></i></a>\n            </div>\n        </div>\n   </div>\n  </section>\n\n  <section *ngIf=\"user.role === 'LAWYER'\">\n    <div class=\"organize\">\n      <div *ngFor=\"let q of questions | filter:'category':search\" class=\"qbox\">\n            <div *ngIf=\"q.answer === 'no'\" class=\"question-box\">\n                <h3>{{q.title | capitalizr}}</h3>\n                <p>{{q.category | capitalizr}}</p>\n                <i style=\"margin-right:20px\" class=\"r far fa-times-circle\"></i>\n                <a [routerLink]=\"['/ramas', q._id]\">Ver pregunta completa</a>\n            </div>\n            <div *ngIf=\"q.answer !== 'no'\" class=\"question-box\">\n                <h3>{{q.title  | capitalizr}}</h3>\n                <p>{{q.category | capitalizr}}</p>\n                <!-- <h5>Respuesta</h5>\n                <p>{{q.answer | capitalizr}}</p> -->\n                <i  style=\"margin-right:20px;color:green;\" class=\"fas fa-check\"></i>\n                <a [routerLink]=\"['/ramas', q._id]\">Mejorar respuesta</a>\n            </div>\n      </div>\n     </div>\n    </section>\n\n\n<!-- *ngIf=\"q.category === 'nose'\" -->\n\n<!-- <section *ngIf=\"user.role === 'LAWYER'\">\n    <div *ngFor=\"let q of questions\">\n      <h3>Solo que ahora eres abogado</h3>\n        <h1>{{q.title}}</h1>\n        <p>{{q.category}}</p>\n        <button></button>\n      \n    </div>\n</section> -->"

/***/ }),

/***/ "./src/app/ramas/ramas.component.ts":
/*!******************************************!*\
  !*** ./src/app/ramas/ramas.component.ts ***!
  \******************************************/
/*! exports provided: RamasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RamasComponent", function() { return RamasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RamasComponent = /** @class */ (function () {
    function RamasComponent(qService, router, authService, activeRoute) {
        this.qService = qService;
        this.router = router;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.isLogged = false;
        this.username = '';
        this.title = '';
        this.content = '';
        this.category = '';
        this.search = '';
    }
    // getAllQuestions(){
    //   return this.qService.getQuestions()
    //   .subscribe(questions => this.questions = questions)
    //   // this.username = '';
    //   // this.title = '';
    //   // this.content = '';
    // }
    RamasComponent.prototype.toDetail = function () {
        this.router.navigate(['edit']);
    };
    RamasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user)
            this.router.navigate(['login']);
        this.qService.getQuestions()
            .subscribe(function (questions) { return _this.questions = questions; });
    };
    RamasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ramas',
            template: __webpack_require__(/*! ./ramas.component.html */ "./src/app/ramas/ramas.component.html"),
            styles: [__webpack_require__(/*! ./ramas.component.css */ "./src/app/ramas/ramas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RamasComponent);
    return RamasComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _ramas_ramas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ramas/ramas.component */ "./src/app/ramas/ramas.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lawyer/lawyer.component */ "./src/app/lawyer/lawyer.component.ts");
/* harmony import */ var _browse_browse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browse/browse.component */ "./src/app/browse/browse.component.ts");
/* harmony import */ var _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ficha/ficha.component */ "./src/app/ficha/ficha.component.ts");












var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    {
        path: 'signup',
        component: _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__["SignupFormComponent"]
    },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'logout', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'explore', component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"] },
    // { path: 'question', component:QuestionsComponent},
    { path: 'question/:id', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsComponent"] },
    { path: 'ramas', component: _ramas_ramas_component__WEBPACK_IMPORTED_MODULE_6__["RamasComponent"] },
    { path: 'lawyer', component: _lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_9__["LawyerComponent"] },
    { path: 'browse', component: _browse_browse_component__WEBPACK_IMPORTED_MODULE_10__["BrowseComponent"] },
    //   {
    //     path: 'ramas/:category',
    //     component: RamasComponent,
    //     children:[
    //       // {
    //       //     path:'edit',
    //       //     component:EditRamasComponent
    //       // }
    //     ]
    // },
    {
        path: 'ramas/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"],
        children: [
            {
                path: 'edit',
                component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
            }
        ]
    },
    {
        path: 'browse/:id',
        component: _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_11__["FichaComponent"]
        // children:[
        //     {
        //         path:'edit',
        //         component:EditComponent
        //     }
        // ]
    }
    // { 
    //   path:'products', 
    //   component: ProductPageComponent,
    //   children:[
    //     {
    //       path: 'new',
    //       component: NewProductComponent
    //     }
    //   ]
    // },
    // {
    //   path: 'new',
    //   component: NewProductComponent
    // },
    // {
    //   path: 'detail/:id',
    //   component: DetailComponent,
    //   children:[
    //       {
    //           path:'edit',
    //           component:EditProductComponent
    //       }
    //   ]
    // }
];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = "https://informe-law.herokuapp.com/";
        this.RequestOptionsArgs = {
            withCredentials: true
        };
    }
    AuthService.prototype.signup = function (auth) {
        var formdata = new FormData();
        for (var key in auth) {
            formdata.append(key, auth[key]);
        }
        return this.http.post(this.url + 'signup', auth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.login = function (auth) {
        return this.http.post(this.url + 'login', auth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.changePic = function (id, img) {
        var formdata = new FormData();
        formdata.append("image", img);
        return this.http.put(this.url + 'profile/' + id, formdata)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        return this.http.get(this.url + 'profile')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    //   getOneUser(id){
    //     return this.http.get(this.url + 'profile' + id)
    //         .pipe(map((res: Response)=>res.json()));                                
    // }
    AuthService.prototype.logout = function () {
        localStorage.removeItem('user');
        console.log('removed');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/lawyer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/lawyer.service.ts ***!
  \********************************************/
/*! exports provided: LawyerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawyerService", function() { return LawyerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LawyerService = /** @class */ (function () {
    function LawyerService(http) {
        this.http = http;
        this.url = "https://informe-law.herokuapp.com/lawyer/";
        this.RequestOptionsArgs = {
            withCredentials: true
        };
    }
    LawyerService.prototype.postLawyer = function (q) {
        var formdata = new FormData();
        for (var key in q) {
            formdata.append(key, q[key]);
        }
        return this.http.post(this.url, formdata, this.RequestOptionsArgs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    LawyerService.prototype.getLawyers = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    LawyerService.prototype.getOneLawyer = function (id) {
        return this.http.get(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    LawyerService.prototype.editOneLawyer = function (obj) {
        return this.http.put(this.url + obj._id, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    LawyerService.prototype.deleteLawyer = function (id) {
        return this.http.delete(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    LawyerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LawyerService);
    return LawyerService;
}());



/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
        this.url = "https://informe-law.herokuapp.com/question/";
    }
    QuestionsService.prototype.ask = function (q) {
        return this.http.post(this.url, q)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QuestionsService.prototype.getQuestions = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QuestionsService.prototype.getOneQuestion = function (id) {
        return this.http.get(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QuestionsService.prototype.editOneQuestion = function (obj) {
        return this.http.put(this.url + obj._id, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QuestionsService.prototype.deleteQuestion = function (id) {
        return this.http.delete(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-size: 1.2em;\n}\n\nsection {\n  background-image: url(\"https://wallpapersite.com/images/pages/pic_w/3492.jpg\");\n  background-size:cover;\n  height:800px;\n  margin-top:-100px;\n  padding-top:130px;\n}\n\nform {\n  height:600px;\n  width:50%;\n  display:flex;\n  flex-direction: column;\n  justify-content:center;\n  text-align:center;\n  margin-left:25%;\n\n  \n}\n\nimg {\n  width:35%;\n\n}\n\n.form-control:focus{\n    border-color: rgb(0, 163, 35);  \n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(0, 163, 35);\n    -webkit-box-shadow: rgb(0, 163, 35);\n  }\n\n.btn {\n    /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #AB0000;\n    color:white; */\n    background-color:#36454f;\n    color:white;\n    margin-top:10px;\n    padding:5px;\n  }\n\n.btn:hover {\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(0, 163, 35);\n  }\n\n.align {\n    display:flex;\n    flex-direction: column;\n    align-items:center;\n    height:100vh;\n  \n  }\n\n.f1 {\n    padding-top:30px;\n  }\n"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n\n\n\n  <form>\n      <div class=\"align\">\n        <img src=\"../assets/medium-logo.png\">\n        <div class=\"f1 form-group\">\n          <label for=\"exampleInputEmail1\">Tu correo</label>\n          <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"nombre@ejemplo.com\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Nunca compartiremos su información.</small>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Tu usuario</label>\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Así será referido\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Mínimo 5 carácteres</small>\n        </div>\n        <div>\n            <label for=\"inputfile\">Tu foto de perfil</label>\n            <input class=\"inputfile\" type=\"file\" #image name=\"image\" >\n        </div>\n        <label for=\"exampleFormControlSelect1\">Example select</label>\n        <select [(ngModel)]=\"role\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n          <option value=\"USER\">Client</option>\n          <option value=\"LAWYER\">Lawyer</option>\n        </select>\n        <button type=\"submit\" (click)=\"signup()\"class=\"btn\">Registrarte</button>\n      </div>\n    </form>\n\n</section>\n"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {};
        this.username = '';
        this.email = '';
        this.password = '';
        this.auth = {
            role: '',
            username: '',
            email: '',
            password: '',
            image: ''
        }; //object used for all authentication
    }
    SignupFormComponent.prototype.signup = function () {
        // this.auth.image = this.image.nativeElement.files[0];
        var _this = this;
        // this.auth.image = this.image.nativeElement.files[0];
        this.auth.username = this.username;
        this.auth.email = this.email;
        this.auth.password = this.password;
        this.auth.role = this.role;
        this.authService.signup(this.auth)
            .subscribe(function (user) { return _this.user = user; });
        console.log(this.user);
        this.username = '';
        this.email = '';
        this.password = '';
    };
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rodrigoortiz/Documents/Ironhack/Angular/finalProject/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map