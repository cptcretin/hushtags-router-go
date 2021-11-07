(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_start_start_module_ts"],{

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

/***/ 9654:
/*!***********************************************!*\
  !*** ./src/app/start/start-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageRoutingModule": () => (/* binding */ StartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page */ 3409);




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_0__.StartPage,
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], StartPageRoutingModule);



/***/ }),

/***/ 8030:
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageModule": () => (/* binding */ StartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page */ 3409);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-routing.module */ 9654);









let StartPageModule = class StartPageModule {
};
StartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__.Translations,
            _start_routing_module__WEBPACK_IMPORTED_MODULE_3__.StartPageRoutingModule
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_0__.StartPage]
    })
], StartPageModule);



/***/ }),

/***/ 3409:
/*!*************************************!*\
  !*** ./src/app/start/start.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPage": () => (/* binding */ StartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./start.page.html */ 8627);
/* harmony import */ var _start_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page.scss */ 1234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/app-log/app-log.service */ 8971);
/* harmony import */ var _include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../include/app-settings/app-settings.service */ 9675);
/* harmony import */ var _include_google_analytics_google_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../include/google-analytics/google-analytics.service */ 5887);








let StartPage = class StartPage {
    constructor(log, settings, ga, nav) {
        this.log = log;
        this.settings = settings;
        this.ga = ga;
        this.nav = nav;
    }
    ngOnInit() {
        this.ga.pageView(this.nav.url);
        if (this.settings.usingIOS) {
            this.ios = true;
        }
        else if (this.settings.usingAndroid) {
            this.android = true;
        }
        else {
            this.ios = true;
            this.android = true;
        }
    }
};
StartPage.ctorParameters = () => [
    { type: _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__.AppLogService },
    { type: _include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_3__.AppSettingsService },
    { type: _include_google_analytics_google_analytics_service__WEBPACK_IMPORTED_MODULE_4__.GoogleAnalyticsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
StartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'start',
        template: _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_start_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StartPage);



/***/ }),

/***/ 1234:
/*!***************************************!*\
  !*** ./src/app/start/start.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-intro {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n}\n@media (max-width: 700px) {\n  .section-intro {\n    top: -80px;\n  }\n}\n.section-intro .video-intro {\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  background: #e26326;\n  z-index: -1;\n}\n@media (max-width: 700px) {\n  .section-intro .video-intro.portrait {\n    display: unset;\n    object-fit: scale-down;\n    top: -120px;\n  }\n}\n@media (min-width: 701px) {\n  .section-intro .video-intro.landscape {\n    display: unset;\n  }\n}\n.section-title {\n  position: relative;\n}\n.section-content {\n  position: relative;\n  padding: 10px 0px;\n  height: calc(100vh - 34px);\n  padding-bottom: 10px;\n}\n.section-content h1 {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  font-size: 2.08em;\n  font-weight: 700;\n  margin: 0px;\n  padding: 7px 0px;\n  opacity: 0.95;\n  background: var(--ion-color-primary);\n}\n.section-content .section-app-download {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  padding: 5px 0px;\n  text-align: center;\n}\n.section-content .section-app-download h2 {\n  font-size: 1.5em;\n  font-weight: 600;\n  margin: 0px 5px;\n}\n.shadow {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.2;\n  z-index: -1;\n}\n.section-buttons {\n  display: flex;\n  position: relative;\n  justify-content: space-evenly;\n}\n.section-buttons .shadow {\n  background: var(--ion-color-primary);\n  opacity: 0.5;\n  z-index: 1;\n}\n.section-buttons .image-dl {\n  margin: 10px;\n  max-width: 350px;\n  z-index: 2;\n}\n@media (max-width: 700px) {\n  .section-buttons {\n    flex-direction: column;\n    background: var(--ion-color-primary);\n  }\n  .section-buttons .image-dl {\n    max-width: 90vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7QUFDSjtBQUNJO0VBTko7SUFPUSxVQUFBO0VBRU47QUFDRjtBQUFJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFUjtBQUFRO0VBQ0k7SUFDSSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0VBRWQ7QUFDRjtBQUNRO0VBQ0k7SUFDSSxjQUFBO0VBQ2Q7QUFDRjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFIWjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5KO0FBU0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQU5KO0FBUUk7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBTlI7QUFVSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFSUjtBQVdJO0VBbEJKO0lBbUJRLHNCQUFBO0lBQ0Esb0NBQUE7RUFSTjtFQVVNO0lBQ0ksZUFBQTtFQVJWO0FBQ0YiLCJmaWxlIjoic3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taW50cm8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHRvcDogLTgwcHg7XG4gICAgfVxuXG4gICAgLnZpZGVvLWludHJvIHsgIFxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTI2MzI2O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICBcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAmLnBvcnRyYWl0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICAgICAgICAgICAgICAgIHRvcDogLTEyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xuICAgICAgICAgICAgJi5sYW5kc2NhcGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxufVxuXG4uc2VjdGlvbi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzRweCk7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICBoMSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4wOGVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZzogN3B4IDBweDtcbiAgICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgICBcbiAgICAuc2VjdGlvbi1hcHAtZG93bmxvYWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG59XG5cbi5zaGFkb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uc2VjdGlvbi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICAgIC5zaGFkb3cge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cblxuICAgIC5pbWFnZS1kbCB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgICAgIC5pbWFnZS1kbCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 8627:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n    <div class=\"section-intro\">\n          <video class=\"video-intro landscape\" poster=\"/assets/img/poster-landscape.png\" autoplay playsinline muted loop>\n            <source src=\"/assets/video/intro-landscape.webm\" type=\"video/webm\" />\n            <source src=\"/assets/video/intro-landscape.mp4\" type=\"video/mp4\" />\n          </video>\n        \n          <video class=\"video-intro portrait\" poster=\"/assets/img/poster-portrait.png\" autoplay playsinline muted loop>\n            <source src=\"/assets/video/intro-portrait.webm\" type=\"video/webm\" />\n            <source src=\"/assets/video/intro-portrait.mp4\" type=\"video/mp4\" />\n          </video>\n    </div>\n\n    <div class=\"section-content ion-no-padding\">\n        <ion-text color=\"white\"><h1>{{ 'Page_Start.Welcome' | translate }}</h1></ion-text>\n        <div class=\"shadow\"></div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class=\"section-buttons\">\n        <a *ngIf=\"android\" class=\"image-dl\" href=\"/download-android\" target=\"_blank\">\n            <img class=\"image-dl play-store\" src=\"/assets/img/play-store.png\" />\n        </a>\n\n        <a *ngIf=\"ios\" class=\"image-dl\" href=\"/download-ios\" target=\"_blank\">\n            <img class=\"image-dl app-store\" src=\"/assets/img/app-store.png\" />\n        </a>\n\n        <div class=\"shadow\"></div>\n    </div>\n\n    <app-footer></app-footer>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_start_start_module_ts.js.map