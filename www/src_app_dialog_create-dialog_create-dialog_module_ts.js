(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_dialog_create-dialog_create-dialog_module_ts"],{

/***/ 2373:
/*!**********************************************************************!*\
  !*** ./src/app/dialog/create-dialog/create-dialog-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDialogPageRoutingModule": () => (/* binding */ CreateDialogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_dialog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dialog.page */ 6598);




const routes = [
    {
        path: '',
        component: _create_dialog_page__WEBPACK_IMPORTED_MODULE_0__.CreateDialogPage
    }
];
let CreateDialogPageRoutingModule = class CreateDialogPageRoutingModule {
};
CreateDialogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateDialogPageRoutingModule);



/***/ }),

/***/ 6170:
/*!**************************************************************!*\
  !*** ./src/app/dialog/create-dialog/create-dialog.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDialogPageModule": () => (/* binding */ CreateDialogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../include/i18n/i18n.module */ 1477);
/* harmony import */ var _create_dialog_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-dialog-routing.module */ 2373);
/* harmony import */ var _create_dialog_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-dialog.page */ 6598);








let CreateDialogPageModule = class CreateDialogPageModule {
};
CreateDialogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.Translations,
            _create_dialog_routing_module__WEBPACK_IMPORTED_MODULE_1__.CreateDialogPageRoutingModule
        ],
        declarations: [_create_dialog_page__WEBPACK_IMPORTED_MODULE_2__.CreateDialogPage]
    })
], CreateDialogPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_dialog_create-dialog_create-dialog_module_ts.js.map