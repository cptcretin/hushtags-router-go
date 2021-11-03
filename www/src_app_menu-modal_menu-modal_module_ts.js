(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_menu-modal_menu-modal_module_ts"],{

/***/ 2905:
/*!*********************************************************!*\
  !*** ./src/app/menu-modal/menu-modal-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModalPageRoutingModule": () => (/* binding */ MenuModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _menu_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-modal.page */ 9881);




const routes = [
    {
        path: '',
        component: _menu_modal_page__WEBPACK_IMPORTED_MODULE_0__.MenuModalPage
    }
];
let MenuModalPageRoutingModule = class MenuModalPageRoutingModule {
};
MenuModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuModalPageRoutingModule);



/***/ }),

/***/ 1130:
/*!*************************************************!*\
  !*** ./src/app/menu-modal/menu-modal.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModalPageModule": () => (/* binding */ MenuModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);
/* harmony import */ var _menu_modal_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-modal-routing.module */ 2905);
/* harmony import */ var _menu_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-modal.page */ 9881);









let MenuModalPageModule = class MenuModalPageModule {
};
MenuModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__.Translations,
            _menu_modal_routing_module__WEBPACK_IMPORTED_MODULE_2__.MenuModalPageRoutingModule
        ],
        declarations: [_menu_modal_page__WEBPACK_IMPORTED_MODULE_3__.MenuModalPage]
    })
], MenuModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_menu-modal_menu-modal_module_ts.js.map