(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ 2267);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__.Translations,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__.HomePage],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA,
        ],
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _include_google_analytics_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/google-analytics/google-analytics.service */ 5887);






let HomePage = class HomePage {
    constructor(ga, nav) {
        this.ga = ga;
        this.nav = nav;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.ga.pageView(this.nav.url);
    }
};
HomePage.ctorParameters = () => [
    { type: _include_google_analytics_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__.GoogleAnalyticsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 5887:
/*!**********************************************************************!*\
  !*** ./src/app/include/google-analytics/google-analytics.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAnalyticsService": () => (/* binding */ GoogleAnalyticsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-log/app-log.service */ 8971);
/* harmony import */ var _app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-settings/app-settings.module */ 6279);




let GoogleAnalyticsService = class GoogleAnalyticsService {
    constructor(log) {
        this.log = log;
        this.enabled = _app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsSettings.enabled;
    }
    pageView(page) {
        if (this.enabled) {
            try {
                ga('set', 'page', page);
            }
            catch (err) {
                this.log.warn("error recording page", page, err);
            }
        }
        else {
            this.log.warn('GA not enabled');
        }
    }
};
GoogleAnalyticsService.ctorParameters = () => [
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__.AppLogService }
];
GoogleAnalyticsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GoogleAnalyticsService);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".image-poster {\n  display: none;\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n}\n@media (max-width: 700px) {\n  .image-poster.portrait {\n    display: unset;\n  }\n}\n@media (min-width: 701px) {\n  .image-poster.landscape {\n    display: unset;\n  }\n}\n.animation-sparkles {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0csaUJBQUE7QUFDSjtBQUNJO0VBQ0k7SUFDSSxjQUFBO0VBQ1Y7QUFDRjtBQUVJO0VBQ0k7SUFDSSxjQUFBO0VBQVY7QUFDRjtBQUlBO0VBQ0MsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERCIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1wb3N0ZXIge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMHB4O1xyXG5cdGJvdHRvbTogMHB4O1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgJi5wb3J0cmFpdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAxcHgpIHtcclxuICAgICAgICAmLmxhbmRzY2FwZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFuaW1hdGlvbi1zcGFya2xlcyB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMHB4O1xyXG5cdGxlZnQ6IDBweDtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <app-header></app-header>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <img class='image-poster landscape' src='/assets/img/poster-landscape.png' />\n    <img class='image-poster portrait' src='/assets/img/poster-portrait.png' />\n\n    <lottie-player class=\"animation-sparkles\" src=\"/assets/json/75758-background-sparkles.json\"  background=\"transparent\"  speed=\"1\"  loop autoplay></lottie-player>\n</ion-content>\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map