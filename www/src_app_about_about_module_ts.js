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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about.page.html */ 866);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 7629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AboutPage = class AboutPage {
    constructor() { }
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
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutPage);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-frame {\n  position: relative;\n  font-family: Roboto;\n  padding: 0px;\n  margin: 0px;\n  min-height: 100px;\n}\n.section-frame h1 {\n  font-size: 1.5em;\n  font-weight: 700;\n}\n.section-frame h1, .section-frame p {\n  padding: 0px 20px;\n}\n.section-frame .landscape, .section-frame .portrait {\n  display: none;\n}\n.section-frame .text-caption {\n  text-align: center;\n}\n.section-frame .text-aside {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 20px;\n  right: auto;\n  margin: auto 0px;\n  max-width: 75%;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.25em;\n  font-weight: 500;\n  font-style: italic;\n}\n.section-frame .buttons-download a {\n  margin: 0px 10px;\n}\n.section-frame.parallax {\n  /* Set a specific height */\n  min-height: 50vh;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media (max-width: 700px) {\n  .section-frame.portrait, .section-frame .portrait {\n    display: unset;\n  }\n  .section-frame.parallax {\n    min-height: 33vh;\n  }\n}\n@media (min-width: 701px) {\n  .section-frame.landscape, .section-frame .landscape {\n    display: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUQ7QUFLQztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQU1DO0VBQ0MsaUJBQUE7QUFKRjtBQU9DO0VBQ0MsYUFBQTtBQUxGO0FBUUM7RUFDQyxrQkFBQTtBQU5GO0FBU0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJGO0FBWUU7RUFDQyxnQkFBQTtBQVZIO0FBY0M7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBRUEseUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQWJIO0FBZ0JJO0VBQ0k7SUFDSSxjQUFBO0VBZFY7RUFpQk07SUFDQyxnQkFBQTtFQWZQO0FBQ0Y7QUFrQkk7RUFDSTtJQUNJLGNBQUE7RUFoQlY7QUFDRiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1mcmFtZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcblxyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46IDBweDtcclxuXHRtaW4taGVpZ2h0OiAxMDBweDtcclxuXHJcblx0aW1nIHtcclxuXHR9XHJcblxyXG5cdGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMS41ZW07XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHJcblx0aDEsIHAge1xyXG5cdFx0cGFkZGluZzogMHB4IDIwcHg7XHJcblx0fVxyXG5cclxuXHQubGFuZHNjYXBlLCAucG9ydHJhaXQge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWNhcHRpb24ge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRleHQtYXNpZGUge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwcHg7XHJcblx0XHRib3R0b206IDBweDtcclxuXHRcdGxlZnQ6IDIwcHg7XHJcblx0XHRyaWdodDogYXV0bztcclxuXHRcdG1hcmdpbjogYXV0byAwcHg7XHJcblx0XHRtYXgtd2lkdGg6IDc1JTtcclxuXHRcdGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG5cdFx0Zm9udC1zaXplOiAxLjI1ZW07XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdH1cclxuXHJcblx0LmJ1dHRvbnMtZG93bmxvYWQge1xyXG5cdFx0YSB7XHJcblx0XHRcdG1hcmdpbjogMHB4IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmLnBhcmFsbGF4IHtcclxuXHQgIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xyXG5cdCAgbWluLWhlaWdodDogNTB2aDtcclxuXHJcblx0ICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cclxuXHQgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0ICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0ICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdCAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHR9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgJi5wb3J0cmFpdCwgLnBvcnRyYWl0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnBhcmFsbGF4IHtcclxuICAgICAgICBcdG1pbi1oZWlnaHQ6IDMzdmg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xyXG4gICAgICAgICYubGFuZHNjYXBlLCAubGFuZHNjYXBlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <app-header></app-header>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <div class=\"section-frame\">\n        <img class='image-poster landscape' src=\"/assets/img/poster-landscape.png\" />\n        <img class='image-poster portrait' src=\"/assets/img/poster-portrait.png\" />\n    </div>\n\n    <div class=\"section-frame\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" size-sm=\"6\">\n                    <img src=\"/assets/img/about/app.jpg\" />\n                </ion-col>\n                <ion-col>\n                    <ion-text color=\"primary\"><h1>Turn shares into taps</h1></ion-text>\n                    <p>Hold a phone near a HushTag sticker to read the message it contains.</p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div class=\"section-frame\">\n        <img class=\"ion-margin\" src='/assets/img/about/options.png' />\n        <p class=\"text-caption\">One sticker. Endless possibilities.</p>\n\n        <ion-text color=\"primary\"><h1>If it lives on your phone, it can be added to a HushTag sticker.</h1></ion-text>\n\n        <p>Use a combination of simple text, photos, videos, music, or voice clips to create your perfect message. Share what you want with anyone. Share what you want with everyone.</p>\n    </div>\n\n    <div class=\"section-frame parallax\" [style.backgroundImage]=\"'url(/assets/img/about/privacy.png)'\">\n        <ion-card class=\"text-aside\">\n            <ion-card-content>We have no idea who you are, and isn't that refreshing?</ion-card-content>\n        </ion-card>\n    </div>\n\n    <div class=\"section-frame\">\n        <ion-text color=\"primary\"><h1>HushTags are private and anonymous, allowing anyone to share messages with anyone nearby in complete confidence.</h1></ion-text>\n        <p>Share with a community you may never know or never actually meet. Safely, and securely.</p>\n\n        <img src=\"/assets/img/about/shared.png\" />\n        <p class=\"text-caption\">Share in private between two or more people</p>\n\n        <ion-text color=\"primary\"><h1>Use HushTags to create private shares that only an intended person can receive.</h1></ion-text>\n    </div>\n\n    <div class=\"section-frame parallax landscape\" [style.backgroundImage]=\"'url(/assets/img/about/intro-landscape.gif)'\">\n    </div>\n\n    <div class=\"section-frame parallax portrait\" [style.backgroundImage]=\"'url(/assets/img/about/intro-portrait.gif)'\">\n    </div>\n\n    <div class=\"section-frame\">\n        <ion-text color=\"primary\"><h1>Get the app today, and start sharing with the world around you.</h1></ion-text>\n\n        <ion-item class=\"buttons-download ion-padding-top ion-padding-bottom\" lines=\"none\">\n            <a *ngIf=\"android\" href=\"https://hushtags.app/download-android\">\n                <img class=\"image-dl play-store\" src=\"/assets/img/play-store.png\" />\n            </a>\n\n            <a *ngIf=\"ios\" href=\"https://hushtags.app/download-ios\">\n                <img class=\"image-dl app-store\" src=\"/assets/img/app-store.png\" />\n            </a>\n        </ion-item>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map