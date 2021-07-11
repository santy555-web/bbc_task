(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\angular Projects\air quality\airQuality\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
var environment = {
    production: false
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

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


var NewsService = /** @class */ (function () {
    function NewsService(httpClient) {
        this.httpClient = httpClient;
    }
    NewsService.prototype.getNewsDataByID = function (lang) {
        var url = "assets/data/" + lang + ".json";
        return this.httpClient.get(url);
    };
    NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });
    return NewsService;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AppComponent_section_13_p_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.city);
} }
function AppComponent_section_13_p_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("cigarette:\u00A0", ctx_r3.cigarette, "\u00A0\u00A0(", ctx_r3.aqi, ") ");
} }
function AppComponent_section_13_p_111_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} if (rf & 2) {
    var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_section_13_p_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_section_13_p_111_img_1_Template, 1, 1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.cigarette);
} }
function AppComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "news |\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onClickCity(item_r1.compare_tabs_1_city_1_name, item_r1.compare_tabs_1_city_1_aqi, item_r1.compare_tabs_1_city_1_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onClickCity(item_r1.compare_tabs_1_city_2_name, item_r1.compare_tabs_1_city_2_aqi, item_r1.compare_tabs_1_city_2_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onClickCity(item_r1.compare_tabs_1_city_3_name, item_r1.compare_tabs_1_city_3_aqi, item_r1.compare_tabs_1_city_3_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onClickCity(item_r1.compare_tabs_1_city_4_name, item_r1.compare_tabs_1_city_4_aqi, item_r1.compare_tabs_1_city_4_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onClickCity(item_r1.compare_tabs_1_city_5_name, item_r1.compare_tabs_1_city_5_aqi, item_r1.compare_tabs_1_city_5_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onClickCity(item_r1.compare_tabs_1_city_6_name, item_r1.compare_tabs_1_city_6_aqi, item_r1.compare_tabs_1_city_6_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onClickCity(item_r1.compare_tabs_1_city_7_name, item_r1.compare_tabs_1_city_7_aqi, item_r1.compare_tabs_1_city_7_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onClickCity(item_r1.compare_tabs_1_city_8_name, item_r1.compare_tabs_1_city_8_aqi, item_r1.compare_tabs_1_city_8_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onClickCity(item_r1.compare_tabs_1_city_9_name, item_r1.compare_tabs_1_city_9_aqi, item_r1.compare_tabs_1_city_9_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onClickCity(item_r1.compare_tabs_1_city_10_name, item_r1.compare_tabs_1_city_10_aqi, item_r1.compare_tabs_1_city_10_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onClickCity(item_r1.compare_tabs_1_city_11_name, item_r1.compare_tabs_1_city_11_aqi, item_r1.compare_tabs_1_city_11_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onClickCity(item_r1.compare_tabs_1_city_12_name, item_r1.compare_tabs_1_city_12_aqi, item_r1.compare_tabs_1_city_12_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onClickCity(item_r1.compare_tabs_1_city_13_name, item_r1.compare_tabs_1_city_13_aqi, item_r1.compare_tabs_1_city_13_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.onClickCity(item_r1.compare_tabs_1_city_14_name, item_r1.compare_tabs_1_city_14_aqi, item_r1.compare_tabs_1_city_14_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onClickCity(item_r1.compare_tabs_1_city_15_name, item_r1.compare_tabs_1_city_15_aqi, item_r1.compare_tabs_1_city_15_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onClickCity(item_r1.compare_tabs_1_city_16_name, item_r1.compare_tabs_1_city_16_aqi, item_r1.compare_tabs_1_city_16_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onClickCity(item_r1.compare_tabs_1_city_17_name, item_r1.compare_tabs_1_city_17_aqi, item_r1.compare_tabs_1_city_17_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onClickCity(item_r1.compare_tabs_1_city_18_name, item_r1.compare_tabs_1_city_18_aqi, item_r1.compare_tabs_1_city_18_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onClickCity(item_r1.compare_tabs_1_city_19_name, item_r1.compare_tabs_1_city_19_aqi, item_r1.compare_tabs_1_city_19_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onClickCity(item_r1.compare_tabs_1_city_20_name, item_r1.compare_tabs_1_city_20_aqi, item_r1.compare_tabs_1_city_20_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onClickCity(item_r1.compare_tabs_1_city_21_name, item_r1.compare_tabs_1_city_21_aqi, item_r1.compare_tabs_1_city_21_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onClickCity(item_r1.compare_tabs_1_city_22_name, item_r1.compare_tabs_1_city_22_aqi, item_r1.compare_tabs_1_city_22_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onClickCity(item_r1.compare_tabs_1_city_23_name, item_r1.compare_tabs_1_city_23_aqi, item_r1.compare_tabs_1_city_23_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onClickCity(item_r1.compare_tabs_1_city_24_name, item_r1.compare_tabs_1_city_24_aqi, item_r1.compare_tabs_1_city_24_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onClickCity(item_r1.compare_tabs_1_city_25_name, item_r1.compare_tabs_1_city_25_aqi, item_r1.compare_tabs_1_city_25_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.onClickCity(item_r1.compare_tabs_1_city_26_name, item_r1.compare_tabs_1_city_26_aqi, item_r1.compare_tabs_1_city_26_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onClickCity(item_r1.compare_tabs_1_city_27_name, item_r1.compare_tabs_1_city_27_aqi, item_r1.compare_tabs_1_city_27_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onClickCity(item_r1.compare_tabs_1_city_28_name, item_r1.compare_tabs_1_city_28_aqi, item_r1.compare_tabs_1_city_28_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onClickCity(item_r1.compare_tabs_1_city_29_name, item_r1.compare_tabs_1_city_29_aqi, item_r1.compare_tabs_1_city_29_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onClickCity(item_r1.compare_tabs_1_city_30_name, item_r1.compare_tabs_1_city_30_aqi, item_r1.compare_tabs_1_city_30_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.onClickCity(item_r1.compare_tabs_1_city_31_name, item_r1.compare_tabs_1_city_31_aqi, item_r1.compare_tabs_1_city_31_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_13_Template_a_click_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r1 = ctx.$implicit; var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onClickCity(item_r1.compare_tabs_1_city_32_name, item_r1.compare_tabs_1_city_32_aqi, item_r1.compare_tabs_1_city_32_cigg); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, AppComponent_section_13_p_109_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, AppComponent_section_13_p_110_Template, 2, 2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AppComponent_section_13_p_111_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.state ? ctx_r0.onText : ctx_r0.offText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.hero_1_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.hero_1_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.article_info_1_byline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.article_info_1_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.article_info_1_category_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.article_info_1_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_1_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_2_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_3_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_4_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_5_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total cities: \u00A0 ", item_r1.total_cities_1_value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_1_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_2_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_3_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_4_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_5_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_6_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_7_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_8_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_9_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_10_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_11_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_12_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_13_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_14_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_15_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_16_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_17_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_18_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_19_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_20_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_21_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_22_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_23_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_24_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_25_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_26_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_27_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_28_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_29_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_30_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_31_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.compare_tabs_1_city_32_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r1.p_6_value, "\u00A0", item_r1.compare_tabs_1_method, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cigarette);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cigarette_img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_7_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_8_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_9_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.p_10_value);
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(newsService) {
        this.newsService = newsService;
        this.title = 'BBC';
        this.data = [];
        this.img = "assets/img/ciggrette_icon.png";
        this.cigarette_img = [];
        this.config = {
            state: false,
            onText: 'English',
            offText: 'हिन्दी',
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getData("hindi");
        if (this.config !== null) {
            this.state = this.config.state;
            this.onText = this.config.onText;
            this.offText = this.config.offText;
        }
    };
    AppComponent.prototype.getData = function (lang) {
        var _this = this;
        this.newsService.getNewsDataByID(lang).subscribe(function (res) {
            _this.data = [res];
        });
    };
    AppComponent.prototype.onClickCity = function (cityName, aq, cig) {
        this.cigarette_img = [];
        this.city = cityName;
        this.aqi = aq;
        this.cigarette = cig;
        for (var i = 0; i < cig; i++) {
            this.cigarette_img.push(this.img);
        }
    };
    AppComponent.prototype.onClick = function () {
        this.state = !this.state;
        if (this.state == true) {
            this.getData('english');
        }
        else {
            this.getData('hindi');
        }
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 1, consts: [[1, "root"], ["href", "/"], ["src", "https://nav.files.bbci.co.uk/orbit/b3428ed36e7e195dbf298117ef155a8f/img/blq-orbit-blocks_grey.svg", "alt", "logo", 1, "logo"], ["href", ""], ["href", "", 1, "navbar"], [1, "clr"], [4, "ngFor", "ngForOf"], [1, "news"], [3, "click"], [1, "image-section"], ["alt", "image-pollution", 3, "src"], [1, "title"], [1, "main-section-paragraph"], [1, "p_1_byline"], ["target", "_blank", 3, "href"], [1, "p_1_value"], [1, "p_value"], [1, "select_city"], [1, "total_cities"], [1, "btns_section"], [1, "btn", 3, "click"], [1, "method_calculation"], ["class", "city", 4, "ngIf"], ["class", "cigarette", 4, "ngIf"], ["class", "cigaratte_images", 4, "ngFor", "ngForOf"], [2, "padding", "20px"], [1, "city"], [1, "cigarette"], [1, "cigaratte_images"], ["class", "cigarette_img", "alt", "cigarette_image", 3, "src", 4, "ngIf"], ["alt", "cigarette_image", 1, "cigarette_img", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "News");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Travel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Culture");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_section_13_Template, 125, 55, "section", 6);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@media screen and (max-width: 700px){\r\n.root[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  height: 50px;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  position: fixed;\r\n}\r\n.root[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  max-width: 300px;\r\n  padding: 1em 0;\r\n  vertical-align: middle;\r\n}\r\n.root[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    padding: 0.5em;\r\n  }\r\n.root[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n  .root[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-top: 0.5rem;\r\n  }\r\n.root[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  padding-left: 50px;\r\n  color: #000;\r\n  text-decoration: none;\r\n}\r\n.root[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.root[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: blueviolet;\r\n  text-decoration: none;\r\n}\r\n.news[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  background-color: #bb1919;\r\n  height: 31px;\r\n}\r\n.news[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  position: relative;\r\n  border: 0;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n.image-section[_ngcontent-%COMP%]{\r\n  box-sizing: inherit;\r\n}\r\n.image-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    object-fit: cover;\r\n    max-height: 480px;\r\n}\r\n}\r\n\r\n\r\n@media screen and (min-width: 700px){\r\n  .root[_ngcontent-%COMP%] {\r\n    background-color: #f0f0f0;\r\n    height: 50px;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    position: fixed;\r\n  }\r\n  .root[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    max-width: 300px;\r\n    padding: 1em 0;\r\n    vertical-align: middle;\r\n  }\r\n  .root[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n      padding: 0.5em;\r\n    }\r\n  .root[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n    .root[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      padding-top: 0.5rem;\r\n    }\r\n  .root[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    display: -webkit-inline-box;\r\n    padding-left: 50px;\r\n    color: #000;\r\n    text-decoration: none;\r\n  }\r\n  .root[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: blueviolet;\r\n    text-decoration: none;\r\n  }\r\n  .news[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    background-color: #bb1919;\r\n    height: 31px;\r\n  }\r\n  .news[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    position: relative;\r\n    border: 0;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .image-section[_ngcontent-%COMP%]{\r\n    box-sizing: inherit;\r\n  }\r\n  .image-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      position: relative;\r\n      width: 100%;\r\n      object-fit: cover;\r\n      max-height: 480px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 700px){\r\n  .image-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    background-color: white;\r\n   }\r\n }\r\n\r\n\r\n@media screen and (min-width: 700px){\r\n  .image-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-left: 20%;\r\n  margin-right: 20%;\r\n  margin-top: -7rem;\r\n  padding-left: 3rem;\r\n  font-size:40px;\r\n  padding-top: 1rem;\r\n  font-weight: bold;\r\n  padding-right: 3rem;\r\n  background-color: white;\r\n}\r\n}\r\n\r\n\r\n@media screen and (min-width: 700px){\r\n  .main-section-paragraph[_ngcontent-%COMP%]   .p_1_byline[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin-left: 72px;\r\n    margin-top: -15px;\r\n    line-height: 22px;\r\n  }\r\n  .main-section-paragraph[_ngcontent-%COMP%]   .p_1_byline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 700px){\r\n   .main-section-paragraph[_ngcontent-%COMP%]   .p_1_byline[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n  }\r\n  .main-section-paragraph[_ngcontent-%COMP%]   .p_1_byline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    margin-right: 2rem;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (min-width: 700px){\r\n  .main-section-paragraph[_ngcontent-%COMP%]   .p_1_value[_ngcontent-%COMP%]{\r\n    padding-left: 20%;\r\n    padding-right: 20%;\r\n    margin-top: -16px;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n }\r\n}\r\n\r\n\r\n@media screen and (max-width: 700px){\r\n  .main-section-paragraph[_ngcontent-%COMP%]   .p_1_value[_ngcontent-%COMP%]{\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    font-weight: bold;\r\n    line-height: 22px;\r\n    font-size: 1em;\r\n }\r\n}\r\n\r\n\r\n@media screen and (max-width: 700px){\r\n  .total_cities[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    font-size: 14px;\r\n    line-height: 22px;\r\n }\r\n .p_value[_ngcontent-%COMP%]{\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  font-size: 14px;\r\n  line-height: 22px;\r\n  text-align: start;\r\n }\r\n .method_calculation[_ngcontent-%COMP%]{\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-bottom: 5%;\r\n  font-size: 1em;\r\n  line-height: 29px;\r\n  font-weight: bold;\r\n  margin: 2% 5% 2% 5%;\r\n  color: rgb(62 20 20);\r\n  text-align: center;\r\n  border-bottom: 2px solid #9e9e9e;\r\n}\r\n.city[_ngcontent-%COMP%]{\r\n  -webkit-text-decoration: #9e9e9e;\r\n          text-decoration: #9e9e9e;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n  margin: 2% 5% 2% 5%;\r\n  color: rgb(62 20 20);\r\n  text-align: center;\r\n}\r\n.cigarette[_ngcontent-%COMP%]{\r\n  margin: 2% 5% 2% 5%;\r\n  color: rgb(62 20 20);\r\n  text-align: center;\r\n}\r\n.cigarette_img[_ngcontent-%COMP%]{\r\ndisplay: block;\r\nwidth: 32px;\r\nheight: auto;\r\nmargin: 0px;\r\npadding: 0px;\r\nwhite-space: nowrap;\r\n}\r\n.cigaratte_images[_ngcontent-%COMP%]{\r\ndisplay: inline-block;\r\nmargin: 0px;\r\npadding: 0px;\r\nvertical-align: middle;\r\ntext-align:justify !important;\r\n}\r\n.select_city[_ngcontent-%COMP%]{\r\n  border-bottom: 2px solid #9e9e9e;\r\n  padding: 1%;\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  font-size: 1em;\r\n  font-weight: bold;\r\n  margin: 2% 5% 2% 5%;\r\n  text-transform: uppercase;\r\n  color: #000;\r\n  text-align: center;\r\n}\r\n.btns_section[_ngcontent-%COMP%]{\r\ntext-align: -webkit-center;\r\nmargin: 2% 5% 2% 5%;\r\npadding-bottom: 1%;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\nbackground-color: #d6d6d6;\r\nborder-radius: 40px;\r\nborder: none;\r\nfont-size: small;\r\ncolor: #000;\r\ndisplay: inline-block;\r\npadding: 8px;\r\nmargin: 1%;\r\ntext-align: center;\r\noutline: none;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover{\r\nbackground-color: #4b4343;;\r\nborder-radius: 40px;\r\nborder: none;\r\ncolor: #fff;\r\npadding: 8px;\r\ntext-align: center;\r\noutline: none;\r\n}\r\n}\r\n\r\n\r\n@media screen and (min-width: 700px){\r\n  .total_cities[_ngcontent-%COMP%] {\r\n    padding-left: 20%;\r\n    padding-right: 20%;\r\n    font-size: 14px;\r\n }\r\n .p_value[_ngcontent-%COMP%]{\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  font-size: 14px;\r\n  line-height: 22px;\r\n  text-align: start;\r\n }\r\n .method_calculation[_ngcontent-%COMP%]{\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    padding-bottom: 5%;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    margin: 2% 5% 2% 5%;\r\n    color: rgb(62 20 20);\r\n    text-align: center;\r\n    border-bottom: 2px solid #9e9e9e;\r\n}\r\n.city[_ngcontent-%COMP%]{\r\n    -webkit-text-decoration: #9e9e9e;\r\n            text-decoration: #9e9e9e;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n    margin: 2% 5% 2% 5%;\r\n    color: rgb(62 20 20);\r\n    text-align: center;\r\n}\r\n.cigarette[_ngcontent-%COMP%]{\r\n    margin: 2% 5% 2% 5%;\r\n    color: rgb(62 20 20);\r\n    text-align: center;\r\n}\r\n.cigarette_img[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 32px;\r\n  height: auto;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  white-space: nowrap;\r\n}\r\n.cigaratte_images[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  vertical-align: middle;\r\n  text-align:justify !important;\r\n}\r\n .select_city[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid #9e9e9e;\r\n    padding: 1%;\r\n    padding-left: 20%;\r\n    padding-right: 20%;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    margin: 2% 5% 2% 5%;\r\n    text-transform: uppercase;\r\n    color: #000;\r\n    text-align: center;\r\n }\r\n .btns_section[_ngcontent-%COMP%]{\r\n  text-align: -webkit-center;\r\n  margin: 2% 5% 2% 5%;\r\n  padding-bottom: 1%;\r\n }\r\n .btn[_ngcontent-%COMP%]{\r\n  background-color: #d6d6d6;\r\n  border-radius: 40px;\r\n  border: none;\r\n  color: #000;\r\n  display: inline-block;\r\n  padding: 9px;\r\n  margin: 1%;\r\n  text-align: center;\r\n  outline: none;\r\n }\r\n .btn[_ngcontent-%COMP%]:hover{\r\n  background-color: #4b4343;;\r\n  border-radius: 40px;\r\n  border: none;\r\n  color: #fff;\r\n  padding: 9px;\r\n  text-align: center;\r\n  outline: none;\r\n }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDtBQUNEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xyXG4ucm9vdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5yb290IC5sb2dvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5yb290IC5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gIH1cclxuLnJvb3QgbmF2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuICAucm9vdCBuYXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICB9XHJcbi5yb290IG5hdiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucm9vdCAubmF2YmFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnJvb3QgbmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubmV3cyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiMTkxOTtcclxuICBoZWlnaHQ6IDMxcHg7XHJcbn1cclxuLm5ld3Mgc3BhbiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5pbWFnZS1zZWN0aW9ue1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuLmltYWdlLXNlY3Rpb24gaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiA0ODBweDtcclxufVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpe1xyXG4gIC5yb290IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG4gIC5yb290IC5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5yb290IC5sb2dvIHtcclxuICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICB9XHJcbiAgLnJvb3QgbmF2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgICAucm9vdCBuYXYge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgLnJvb3QgbmF2IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5yb290IG5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubmV3cyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmIxOTE5O1xyXG4gICAgaGVpZ2h0OiAzMXB4O1xyXG4gIH1cclxuICAubmV3cyBzcGFuIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLXNlY3Rpb257XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIH1cclxuICAuaW1hZ2Utc2VjdGlvbiBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgbWF4LWhlaWdodDogNDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgLmltYWdlLXNlY3Rpb24gaDF7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuIH1cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KXtcclxuICAuaW1hZ2Utc2VjdGlvbiBoMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICBtYXJnaW4tdG9wOiAtN3JlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgZm9udC1zaXplOjQwcHg7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KXtcclxuICAubWFpbi1zZWN0aW9uLXBhcmFncmFwaCAucF8xX2J5bGluZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbiAgLm1haW4tc2VjdGlvbi1wYXJhZ3JhcGggLnBfMV9ieWxpbmUgcCBzcGFue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgLm1haW4tc2VjdGlvbi1wYXJhZ3JhcGggLnBfMV9ieWxpbmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgfVxyXG4gIC5tYWluLXNlY3Rpb24tcGFyYWdyYXBoIC5wXzFfYnlsaW5lIHAgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KXtcclxuICAubWFpbi1zZWN0aW9uLXBhcmFncmFwaCAucF8xX3ZhbHVle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gIC5tYWluLXNlY3Rpb24tcGFyYWdyYXBoIC5wXzFfdmFsdWV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gIC50b3RhbF9jaXRpZXMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiB9XHJcbiAucF92YWx1ZXtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuIH1cclxuIC5tZXRob2RfY2FsY3VsYXRpb257XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAyJSA1JSAyJSA1JTtcclxuICBjb2xvcjogcmdiKDYyIDIwIDIwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5ZTllOWU7XHJcbn1cclxuLmNpdHl7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiAjOWU5ZTllO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luOiAyJSA1JSAyJSA1JTtcclxuICBjb2xvcjogcmdiKDYyIDIwIDIwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNpZ2FyZXR0ZXtcclxuICBtYXJnaW46IDIlIDUlIDIlIDUlO1xyXG4gIGNvbG9yOiByZ2IoNjIgMjAgMjApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2lnYXJldHRlX2ltZ3tcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAzMnB4O1xyXG5oZWlnaHQ6IGF1dG87XHJcbm1hcmdpbjogMHB4O1xyXG5wYWRkaW5nOiAwcHg7XHJcbndoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmNpZ2FyYXR0ZV9pbWFnZXN7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luOiAwcHg7XHJcbnBhZGRpbmc6IDBweDtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxudGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlbGVjdF9jaXR5e1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOWU5ZTllO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDIlIDUlIDIlIDUlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG5zX3NlY3Rpb257XHJcbnRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG5tYXJnaW46IDIlIDUlIDIlIDUlO1xyXG5wYWRkaW5nLWJvdHRvbTogMSU7XHJcbn1cclxuLmJ0bntcclxuYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcclxuYm9yZGVyLXJhZGl1czogNDBweDtcclxuYm9yZGVyOiBub25lO1xyXG5mb250LXNpemU6IHNtYWxsO1xyXG5jb2xvcjogIzAwMDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nOiA4cHg7XHJcbm1hcmdpbjogMSU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxub3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNGI0MzQzOztcclxuYm9yZGVyLXJhZGl1czogNDBweDtcclxuYm9yZGVyOiBub25lO1xyXG5jb2xvcjogI2ZmZjtcclxucGFkZGluZzogOHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm91dGxpbmU6IG5vbmU7XHJcbn1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgLnRvdGFsX2NpdGllcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuIH1cclxuIC5wX3ZhbHVle1xyXG4gIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiB9XHJcbiAubWV0aG9kX2NhbGN1bGF0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDIlIDUlIDIlIDUlO1xyXG4gICAgY29sb3I6IHJnYig2MiAyMCAyMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzllOWU5ZTtcclxufVxyXG4uY2l0eXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogIzllOWU5ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICBtYXJnaW46IDIlIDUlIDIlIDUlO1xyXG4gICAgY29sb3I6IHJnYig2MiAyMCAyMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNpZ2FyZXR0ZXtcclxuICAgIG1hcmdpbjogMiUgNSUgMiUgNSU7XHJcbiAgICBjb2xvcjogcmdiKDYyIDIwIDIwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2lnYXJldHRlX2ltZ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmNpZ2FyYXR0ZV9pbWFnZXN7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50O1xyXG59XHJcbiAuc2VsZWN0X2NpdHl7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzllOWU5ZTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMiUgNSUgMiUgNSU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAuYnRuc19zZWN0aW9ue1xyXG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gIG1hcmdpbjogMiUgNSUgMiUgNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gfVxyXG4gLmJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA5cHg7XHJcbiAgbWFyZ2luOiAxJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuIH1cclxuIC5idG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNDM0Mzs7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
    return AppComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map