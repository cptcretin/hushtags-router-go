(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_start_start_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./start.page.html */ 8627);
/* harmony import */ var _start_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page.scss */ 1234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/app-log/app-log.service */ 8971);





let StartPage = class StartPage {
    constructor(log) {
        this.log = log;
    }
    ngOnInit() {
        let ver = window.navigator.appVersion;
        if (ver.indexOf('iPhone') >= 0) {
            this.ios = true;
        }
        else if (ver.indexOf('Android') >= 0) {
            this.android = true;
        }
        else {
            this.ios = true;
            this.android = true;
        }
    }
};
StartPage.ctorParameters = () => [
    { type: _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__.AppLogService }
];
StartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-intro {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n}\n@media (max-width: 700px) {\n  .section-intro {\n    top: -100px;\n  }\n}\n.section-intro .video-intro {\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  background: #e26326;\n  z-index: -1;\n}\n@media (max-width: 700px) {\n  .section-intro .video-intro.portrait {\n    display: unset;\n    object-fit: scale-down;\n    top: -120px;\n  }\n}\n@media (min-width: 701px) {\n  .section-intro .video-intro.landscape {\n    display: unset;\n  }\n}\n.section-title {\n  position: relative;\n}\n.section-content {\n  position: relative;\n  padding: 10px 0px;\n  height: calc(100vh - 34px);\n  padding-bottom: 10px;\n}\n.section-content h1 {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  font-size: 2.08em;\n  font-weight: 700;\n  margin: 0px;\n  padding: 7px 0px;\n  opacity: 0.95;\n  background: var(--ion-color-primary);\n}\n.section-content .section-app-download {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  padding: 5px 0px;\n  text-align: center;\n}\n.section-content .section-app-download h2 {\n  font-size: 1.5em;\n  font-weight: 600;\n  margin: 0px 5px;\n}\n.section-content .section-app-download .section-buttons {\n  display: flex;\n  justify-content: space-evenly;\n}\n.section-content .section-app-download .section-buttons .image-dl {\n  margin: 10px;\n  max-width: 350px;\n}\n@media (max-width: 700px) {\n  .section-content .section-app-download .section-buttons {\n    flex-direction: column;\n    background: var(--ion-color-primary);\n  }\n  .section-content .section-app-download .section-buttons .image-dl {\n    max-width: 90vw;\n  }\n}\n.shadow {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.2;\n  z-index: -1;\n}\n.section-footer {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100vw;\n  padding: 0px 5px;\n}\n.section-footer .shadow {\n  background: #7a1475;\n  opacity: 0.95;\n  z-index: unset;\n}\n.section-footer a, .section-footer span {\n  display: inline-block;\n  vertical-align: middle;\n  color: white;\n  text-decoration: none;\n  margin: 0px 8px;\n}\n.section-footer a:hover, .section-footer span:hover {\n  text-decoration: underline;\n}\n.section-footer .end {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n@media (max-width: 700px) {\n  .section-footer .menu-full {\n    display: none;\n  }\n  .section-footer .menu-button {\n    display: unset;\n  }\n}\n@media (min-width: 701px) {\n  .section-footer .menu-full {\n    display: unset;\n  }\n  .section-footer .menu-button {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7QUFDSjtBQUNJO0VBTko7SUFPUSxXQUFBO0VBRU47QUFDRjtBQUFJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFUjtBQUFRO0VBQ0k7SUFDSSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0VBRWQ7QUFDRjtBQUNRO0VBQ0k7SUFDSSxjQUFBO0VBQ2Q7QUFDRjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFIWjtBQU1RO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBSlo7QUFNWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQU9ZO0VBVEo7SUFVUSxzQkFBQTtJQUNBLG9DQUFBO0VBSmQ7RUFNYztJQUNJLGVBQUE7RUFKbEI7QUFDRjtBQVVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVBKO0FBVUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUEo7QUFTSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFQUjtBQVVJO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFSUjtBQVVRO0VBQ0ksMEJBQUE7QUFSWjtBQVlJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVZSO0FBYUk7RUFDSTtJQUNJLGFBQUE7RUFYVjtFQWNNO0lBQ0ksY0FBQTtFQVpWO0FBQ0Y7QUFlSTtFQUNJO0lBQ0ksY0FBQTtFQWJWO0VBZ0JNO0lBQ0ksYUFBQTtFQWRWO0FBQ0YiLCJmaWxlIjoic3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taW50cm8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHRvcDogLTEwMHB4O1xuICAgIH1cblxuICAgIC52aWRlby1pbnRybyB7ICBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZDogI2UyNjMyNjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgJi5wb3J0cmFpdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgICAgICAgICAgICAgICB0b3A6IC0xMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgICAgICYubGFuZHNjYXBlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbn1cblxuLnNlY3Rpb24tY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM0cHgpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgaDEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIuMDhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDdweCAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgXG4gICAgLnNlY3Rpb24tYXBwLWRvd25sb2FkIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5zZWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBcbiAgICAgICAgICAgIC5pbWFnZS1kbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmltYWdlLWRsIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNoYWRvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5zZWN0aW9uLWZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMHB4IDVweDtcblxuICAgIC5zaGFkb3cge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjN2ExNDc1O1xuICAgICAgICBvcGFjaXR5OiAwLjk1O1xuICAgICAgICB6LWluZGV4OiB1bnNldDtcbiAgICB9XG4gICAgXG4gICAgYSwgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMHB4IDhweDtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmVuZCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICByaWdodDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIC5tZW51LWZ1bGwge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1lbnUtYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xuICAgICAgICAubWVudS1mdWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubWVudS1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n    <div class=\"section-intro\">\n          <video class=\"video-intro landscape\" poster=\"/assets/img/poster-landscape.png\" autoplay playsinline muted loop>\n            <source src=\"/assets/video/intro-landscape.webm\" type=\"video/webm\" />\n            <source src=\"/assets/video/intro-landscape.mp4\" type=\"video/mp4\" />\n          </video>\n        \n          <video class=\"video-intro portrait\" poster=\"/assets/img/poster-portrait.png\" autoplay playsinline muted loop>\n            <source src=\"/assets/video/intro-portrait.webm\" type=\"video/webm\" />\n            <source src=\"/assets/video/intro-portrait.mp4\" type=\"video/mp4\" />\n          </video>\n    </div>\n\n    <div class=\"section-content ion-no-padding\">\n        <ion-text color=\"white\"><h1>{{ 'Page_Start.Welcome' | translate }}</h1></ion-text>\n        \n        <div class=\"section-app-download\">\n            <!--<h2>{{ 'Page_Start.Download_App' | translate }}</h2>-->\n            \n            <div class=\"section-buttons\">\n                <a *ngIf='android' href='https://hushtags.app/dowload-android'>\n                    <img class=\"image-dl play-store\" src=\"/assets/img/play-store.png\" />\n                </a>\n\n                <a *ngIf='ios' href='https://hushtags.app/dowload-ios'>\n                    <img class=\"image-dl app-store\" src=\"/assets/img/app-store.png\" />\n                </a>\n\n                <div class=\"shadow\"></div>\n            </div>\n        </div>\n    \n        <div class=\"shadow\"></div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_start_start_module_ts.js.map