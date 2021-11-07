(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_about_about_module_ts"],{

/***/ 8057:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 4518);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 6985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ 8057);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ 4518);









let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__.Translations,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_3__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 4518:
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about.page.html */ 866);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 7629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/app-settings/app-settings.service */ 9675);
/* harmony import */ var _include_google_analytics_google_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../include/google-analytics/google-analytics.service */ 5887);







let AboutPage = class AboutPage {
    constructor(ga, settings, nav) {
        this.ga = ga;
        this.settings = settings;
        this.nav = nav;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
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
AboutPage.ctorParameters = () => [
    { type: _include_google_analytics_google_analytics_service__WEBPACK_IMPORTED_MODULE_3__.GoogleAnalyticsService },
    { type: _include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_2__.AppSettingsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutPage);



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

/***/ 7629:
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-frame {\n  position: relative;\n  padding: 0px;\n  margin: 0px;\n  min-height: 100px;\n}\n.section-frame h1 {\n  font-size: 1.5em;\n  font-weight: 700;\n}\n.section-frame h1, .section-frame p {\n  padding: 0px 20px;\n}\n.section-frame .landscape, .section-frame .portrait {\n  display: none;\n}\n.section-frame .text-caption {\n  text-align: center;\n}\n.section-frame .text-aside {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 20px;\n  right: auto;\n  margin: auto 0px;\n  max-width: 75%;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.25em;\n  font-weight: 500;\n  font-style: italic;\n}\n.section-frame .buttons-download {\n  display: flex;\n  position: relative;\n  justify-content: space-evenly;\n}\n.section-frame .buttons-download a {\n  margin: 0px 10px;\n}\n.section-frame.parallax {\n  position: relative;\n  /* Set a specific height */\n  width: 100vw;\n  min-height: 50vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n@media (max-width: 700px) {\n  .section-frame.portrait, .section-frame .portrait {\n    display: unset;\n  }\n  .section-frame.parallax {\n    min-height: 33vh;\n  }\n}\n@media (min-width: 701px) {\n  .section-frame.landscape, .section-frame .landscape {\n    display: unset;\n  }\n}\n.ios .section-frame.parallax {\n  background-attachment: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFEO0FBS0M7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQztFQUNDLGlCQUFBO0FBSkY7QUFPQztFQUNDLGFBQUE7QUFMRjtBQVFDO0VBQ0Msa0JBQUE7QUFORjtBQVNDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVdDO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFUTDtBQVdFO0VBQ0MsZ0JBQUE7QUFUSDtBQWFDO0VBQ0Msa0JBQUE7RUFDQywwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBWEg7QUFjSTtFQUNJO0lBQ0ksY0FBQTtFQVpWO0VBZU07SUFDQyxnQkFBQTtFQWJQO0FBQ0Y7QUFnQkk7RUFDSTtJQUNJLGNBQUE7RUFkVjtBQUNGO0FBbUJBO0VBQ0MsNEJBQUE7QUFoQkQiLCJmaWxlIjoiYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tZnJhbWUge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuXHRpbWcge1xyXG5cdH1cclxuXHJcblx0aDEge1xyXG5cdFx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0fVxyXG5cclxuXHRoMSwgcCB7XHJcblx0XHRwYWRkaW5nOiAwcHggMjBweDtcclxuXHR9XHJcblxyXG5cdC5sYW5kc2NhcGUsIC5wb3J0cmFpdCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0LnRleHQtY2FwdGlvbiB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGV4dC1hc2lkZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDBweDtcclxuXHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0bGVmdDogMjBweDtcclxuXHRcdHJpZ2h0OiBhdXRvO1xyXG5cdFx0bWFyZ2luOiBhdXRvIDBweDtcclxuXHRcdG1heC13aWR0aDogNzUlO1xyXG5cdFx0aGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHRcdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcblx0XHRmb250LXNpemU6IDEuMjVlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9ucy1kb3dubG9hZCB7XHJcblx0ICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG5cdFx0YSB7XHJcblx0XHRcdG1hcmdpbjogMHB4IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmLnBhcmFsbGF4IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xyXG5cdCAgd2lkdGg6IDEwMHZ3O1xyXG5cdCAgbWluLWhlaWdodDogNTB2aDtcclxuXHQgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHQgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0ICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdCAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHR9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgJi5wb3J0cmFpdCwgLnBvcnRyYWl0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnBhcmFsbGF4IHtcclxuICAgICAgICBcdG1pbi1oZWlnaHQ6IDMzdmg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xyXG4gICAgICAgICYubGFuZHNjYXBlLCAubGFuZHNjYXBlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmlvcyAuc2VjdGlvbi1mcmFtZS5wYXJhbGxheCB7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiB1bnNldDtcclxufSJdfQ== */");

/***/ }),

/***/ 866:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <app-header></app-header>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <div class=\"section-frame\">\n        <img class='image-poster landscape' src=\"/assets/img/poster-landscape.png\" />\n        <img class='image-poster portrait' src=\"/assets/img/poster-portrait.png\" />\n    </div>\n\n    <div class=\"section-frame\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" size-sm=\"6\">\n                    <img src=\"/assets/img/about/app.jpg\" />\n                </ion-col>\n                <ion-col>\n                    <ion-text color=\"primary\"><h1>Turn shares into taps</h1></ion-text>\n                    <p>Hold a phone near a HushTag sticker to read the message it contains.</p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div class=\"section-frame\">\n        <img src=\"/assets/img/about/options.png\" />\n        <p class=\"text-caption\">One sticker. Endless possibilities.</p>\n\n        <ion-text color=\"primary\"><h1>If it lives on your phone, it can be added to a HushTag sticker.</h1></ion-text>\n\n        <p>Use a combination of simple text, photos, videos, music, or voice clips to create your perfect message. Share what you want with anyone. Share what you want with everyone.</p>\n    </div>\n\n    <div class=\"section-frame parallax\" [style.backgroundImage]=\"'url(/assets/img/about/privacy.png)'\">\n        <ion-card class=\"text-aside\">\n            <ion-card-content>We have no idea who you are, and isn't that refreshing?</ion-card-content>\n        </ion-card>\n    </div>\n\n    <div class=\"section-frame\">\n        <ion-text color=\"primary\"><h1>HushTags are private and anonymous, allowing anyone to share messages with anyone nearby in complete confidence.</h1></ion-text>\n        <p>Share with a community you may never know or never actually meet. Safely, and securely.</p>\n\n        <img src=\"/assets/img/about/shared.png\" />\n        <p class=\"text-caption\">Share in private between two or more people</p>\n\n        <ion-text color=\"primary\"><h1>Use HushTags to create private shares that only an intended person can receive.</h1></ion-text>\n    </div>\n\n    <div class=\"section-frame parallax landscape\" [style.backgroundImage]=\"'url(/assets/img/about/intro-landscape.gif)'\"></div>\n\n    <div class=\"section-frame parallax portrait\" [style.backgroundImage]=\"'url(/assets/img/about/intro-portrait.gif)'\"></div>\n\n    <div class=\"section-frame\">\n        <ion-text color=\"primary\"><h1>Get the app today, and start sharing with the world around you.</h1></ion-text>\n\n        <ion-item class=\"buttons-download ion-padding-top ion-padding-bottom\" lines=\"none\">\n            <a *ngIf=\"android\" slot=\"start\" href=\"https://hushtags.app/download-android\">\n                <img class=\"image-dl play-store\" src=\"/assets/img/play-store.png\" />\n            </a>\n\n            <a *ngIf=\"ios\" slot=\"end\" href=\"https://hushtags.app/download-ios\">\n                <img class=\"image-dl app-store\" src=\"/assets/img/app-store.png\" />\n            </a>\n        </ion-item>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map