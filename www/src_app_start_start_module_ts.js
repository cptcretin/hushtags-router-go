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
    ngOnInit() { }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-intro {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n}\n@media (max-width: 700px) {\n  .section-intro {\n    top: -100px;\n  }\n}\n.section-intro .video-intro {\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  background: #e26326;\n  z-index: -1;\n}\n@media (max-width: 700px) {\n  .section-intro .video-intro.portrait {\n    display: unset;\n    object-fit: scale-down;\n    top: -120px;\n  }\n}\n@media (min-width: 701px) {\n  .section-intro .video-intro.landscape {\n    display: unset;\n  }\n}\n.section-title {\n  position: relative;\n}\n.section-content {\n  position: relative;\n  padding: 10px 0px;\n  height: calc(100vh - 34px);\n  padding-bottom: 10px;\n}\n.section-content h1 {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  font-size: 2.08em;\n  font-weight: 700;\n  margin: 0px;\n  padding: 7px 0px;\n  opacity: 0.95;\n  background: var(--ion-color-primary);\n}\n.section-content .section-app-download {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  padding: 5px 0px;\n  text-align: center;\n}\n.section-content .section-app-download h2 {\n  font-size: 1.5em;\n  font-weight: 600;\n  margin: 0px 5px;\n}\n.section-content .section-app-download .section-buttons {\n  display: flex;\n  justify-content: space-evenly;\n}\n.section-content .section-app-download .section-buttons .image-dl {\n  margin: 10px;\n  max-width: 350px;\n}\n@media (max-width: 700px) {\n  .section-content .section-app-download .section-buttons {\n    flex-direction: column;\n    background: var(--ion-color-primary);\n  }\n  .section-content .section-app-download .section-buttons .image-dl {\n    max-width: 100vw;\n  }\n}\n.shadow {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.2;\n  z-index: -1;\n}\n.section-footer {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100vw;\n  padding: 0px 5px;\n}\n.section-footer .shadow {\n  background: #7a1475;\n  opacity: 0.95;\n  z-index: unset;\n}\n.section-footer a, .section-footer span {\n  display: inline-block;\n  vertical-align: middle;\n  color: white;\n  text-decoration: none;\n  margin: 0px 8px;\n}\n.section-footer a:hover, .section-footer span:hover {\n  text-decoration: underline;\n}\n.section-footer .end {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n@media (max-width: 700px) {\n  .section-footer .menu-full {\n    display: none;\n  }\n  .section-footer .menu-button {\n    display: unset;\n  }\n}\n@media (min-width: 701px) {\n  .section-footer .menu-full {\n    display: unset;\n  }\n  .section-footer .menu-button {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7QUFDSjtBQUNJO0VBTko7SUFPUSxXQUFBO0VBRU47QUFDRjtBQUFJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFUjtBQUFRO0VBQ0k7SUFDSSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0VBRWQ7QUFDRjtBQUNRO0VBQ0k7SUFDSSxjQUFBO0VBQ2Q7QUFDRjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFIWjtBQU1RO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBSlo7QUFNWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQU9ZO0VBVEo7SUFVUSxzQkFBQTtJQUNBLG9DQUFBO0VBSmQ7RUFNYztJQUNJLGdCQUFBO0VBSmxCO0FBQ0Y7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFQSjtBQVVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVBKO0FBU0k7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBUFI7QUFVSTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBUlI7QUFVUTtFQUNJLDBCQUFBO0FBUlo7QUFZSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFWUjtBQWFJO0VBQ0k7SUFDSSxhQUFBO0VBWFY7RUFjTTtJQUNJLGNBQUE7RUFaVjtBQUNGO0FBZUk7RUFDSTtJQUNJLGNBQUE7RUFiVjtFQWdCTTtJQUNJLGFBQUE7RUFkVjtBQUNGIiwiZmlsZSI6InN0YXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWludHJvIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbGVmdDogMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICB0b3A6IC0xMDBweDtcbiAgICB9XG5cbiAgICAudmlkZW8taW50cm8geyAgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlMjYzMjY7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgICYucG9ydHJhaXQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gICAgICAgICAgICAgICAgdG9wOiAtMTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gICAgICAgICAgICAmLmxhbmRzY2FwZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG59XG5cbi5zZWN0aW9uLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNHB4KTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgIGgxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyLjA4ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiA3cHggMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjk1O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIFxuICAgIC5zZWN0aW9uLWFwcC1kb3dubG9hZCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuc2VjdGlvbi1idXR0b25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgXG4gICAgICAgICAgICAuaW1hZ2UtZGwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5pbWFnZS1kbCB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2hhZG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLnNlY3Rpb24tZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuXG4gICAgLnNoYWRvdyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3YTE0NzU7XG4gICAgICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgICAgIHotaW5kZXg6IHVuc2V0O1xuICAgIH1cbiAgICBcbiAgICBhLCBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwcHggOHB4O1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuZW5kIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgLm1lbnUtZnVsbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubWVudS1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gICAgICAgIC5tZW51LWZ1bGwge1xuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5tZW51LWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<ion-header [translucent]=\"true\">-->\n<!--  <ion-toolbar>-->\n<!--    <ion-title>-->\n<!--      Blank-->\n<!--    </ion-title>-->\n<!--  </ion-toolbar>-->\n<!--</ion-header>-->\n\n<ion-content [fullscreen]=\"true\" class=\"ion-no-padding\">\n  <!--<ion-header collapse=\"condense\">-->\n  <!--  <ion-toolbar>-->\n  <!--    <ion-title size=\"large\">Blank</ion-title>-->\n  <!--  </ion-toolbar>-->\n  <!--</ion-header>-->\n\n    <div class=\"section-intro\">\n          <video class=\"video-intro landscape\" poster=\"/assets/img/poster-landscape.png\" autoplay playsinline muted loop>\n            <source src=\"/assets/video/intro-landscape.webm\" type=\"video/webm\" />\n            <source src=\"/assets/video/intro-landscape.mp4\" type=\"video/mp4\" />\n          </video>\n        \n          <video class=\"video-intro portrait\" poster=\"/assets/img/poster-portrait.png\" autoplay playsinline muted loop>\n            <source src=\"/assets/video/intro-portrait.webm\" type=\"video/webm\" />\n            <source src=\"/assets/video/intro-portrait.mp4\" type=\"video/mp4\" />\n          </video>\n    </div>\n\n    <div class=\"section-content ion-no-padding\">\n        <ion-text color=\"white\"><h1>{{ 'Page_Start.Welcome' | translate }}</h1></ion-text>\n        \n        <div class=\"section-app-download\">\n            <!--<h2>{{ 'Page_Start.Download_App' | translate }}</h2>-->\n            \n            <div class=\"section-buttons\">\n                <img class=\"image-dl play-store\" src=\"/assets/img/play-store.png\" />\n                <img class=\"image-dl app-store\" src=\"/assets/img/app-store.png\" />\n                <div class=\"shadow\"></div>\n            </div>\n        </div>\n    \n        <div class=\"shadow\"></div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_start_start_module_ts.js.map