(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 1705:
/*!****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFooterComponent": () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app-footer.component.html */ 4529);
/* harmony import */ var _app_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-footer.component.scss */ 1301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_modal_menu_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-modal/menu-modal.page */ 9881);






let AppFooterComponent = class AppFooterComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() { }
    showMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modal.create({
                component: _menu_modal_menu_modal_page__WEBPACK_IMPORTED_MODULE_2__.MenuModalPage,
                cssClass: "app-menu-modal"
            });
            modal.present();
        });
    }
};
AppFooterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
AppFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-footer',
        template: _raw_loader_app_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppFooterComponent);



/***/ }),

/***/ 1224:
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app-header.component.html */ 4933);
/* harmony import */ var _app_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-header.component.scss */ 535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppHeaderComponent = class AppHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
AppHeaderComponent.ctorParameters = () => [];
AppHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _raw_loader_app_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppHeaderComponent);



/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-header/app-header.component */ 1224);
/* harmony import */ var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-footer/app-footer.component */ 1705);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.Translations,
        ],
        declarations: [
            _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__.AppHeaderComponent,
            _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_2__.AppFooterComponent,
        ],
        exports: [
            _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__.AppHeaderComponent,
            _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_2__.AppFooterComponent,
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 9881:
/*!***********************************************!*\
  !*** ./src/app/menu-modal/menu-modal.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModalPage": () => (/* binding */ MenuModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_menu_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu-modal.page.html */ 8245);
/* harmony import */ var _menu_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-modal.page.scss */ 7671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/app-log/app-log.service */ 8971);
/* harmony import */ var _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../include/app-settings/app-settings.module */ 6279);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);









let MenuModalPage = class MenuModalPage {
    constructor(log, modal, nav, translate) {
        this.log = log;
        this.modal = modal;
        this.nav = nav;
        this.navigating = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.hostDomain = _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_3__.HostDomain;
        this.items = [];
        translate.ready([
            Translation.Home,
            Translation.About,
            Translation.Help,
            Translation.Terms,
            Translation.Shop,
        ]).then(() => {
            let route = this.nav.url;
            this.items.push({ title: translate.get(Translation.Home), route: "/home", active: false });
            this.items.push({ title: translate.get(Translation.Shop), route: "/shop", active: false });
            this.items.push({ title: translate.get(Translation.About), route: "/about", active: false });
            this.items.push({ title: translate.get(Translation.Terms), route: "/terms", active: false });
            this.items.push({ title: translate.get(Translation.Help), route: "/help", active: false });
            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                item.active = item.route === route;
            }
        });
    }
    ngOnInit() {
    }
    navigate(item) {
        if (item.route == "/terms") {
            window.open(`https://${_include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_3__.HostDomain}/terms.html`, "_blank");
        }
        else {
            this.nav.navigate([item.route]);
            this.navigating.emit();
        }
        setTimeout(() => this.modal.dismiss(), 500);
    }
    close() {
        this.modal.dismiss();
    }
};
MenuModalPage.ctorParameters = () => [
    { type: _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__.AppLogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__.Translations }
];
MenuModalPage.propDecorators = {
    navigating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
MenuModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'menu-modal',
        template: _raw_loader_menu_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuModalPage);

const Translation = {
    Home: "App_Menu.Home",
    About: "App_Menu.About",
    Help: "App_Menu.Help",
    Terms: "App_Menu.Terms",
    Shop: "App_Menu.Shop",
};


/***/ }),

/***/ 1301:
/*!******************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-footer {\n  padding: 0px 5px;\n}\n.section-footer .shadow {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: var(--ion-color-tertiary);\n  opacity: 0.95;\n  z-index: -1;\n}\n.section-footer a, .section-footer span {\n  display: inline-block;\n  vertical-align: middle;\n  color: white;\n  text-decoration: none;\n  margin: 0px 8px;\n}\n.section-footer a:hover, .section-footer span:hover {\n  text-decoration: underline;\n}\n.section-footer .end {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n@media (max-width: 700px) {\n  .section-footer .menu-full {\n    display: none;\n  }\n  .section-footer .menu-button {\n    display: unset;\n  }\n}\n@media (min-width: 701px) {\n  .section-footer .menu-full {\n    display: unset;\n  }\n  .section-footer .menu-button {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ1I7QUFFSTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQVI7QUFFUTtFQUNJLDBCQUFBO0FBQVo7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFGUjtBQUtJO0VBQ0k7SUFDSSxhQUFBO0VBSFY7RUFNTTtJQUNJLGNBQUE7RUFKVjtBQUNGO0FBT0k7RUFDSTtJQUNJLGNBQUE7RUFMVjtFQVFNO0lBQ0ksYUFBQTtFQU5WO0FBQ0YiLCJmaWxlIjoiYXBwLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG5cclxuICAgIC5zaGFkb3cge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgICAgb3BhY2l0eTogMC45NTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBhLCBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDhweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZW5kIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIC5tZW51LWZ1bGwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xyXG4gICAgICAgIC5tZW51LWZ1bGwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 535:
/*!******************************************************!*\
  !*** ./src/app/app-header/app-header.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-header .banner {\n  --background: var(--ion-color-primary);\n}\n.section-header .banner ion-title {\n  text-align: left;\n  padding-inline-start: 40px;\n  padding-inline-end: 40px;\n}\n.section-header .image-logo {\n  width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyxzQ0FBQTtBQURGO0FBR0U7RUFDQyxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFESDtBQUtDO0VBQ0MsV0FBQTtBQUhGIiwiZmlsZSI6ImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFkZXIge1xyXG5cclxuXHQuYmFubmVyIHtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuXHRcdGlvbi10aXRsZSB7XHJcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xyXG5cdFx0XHRwYWRkaW5nLWlubGluZS1lbmQ6IDQwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuaW1hZ2UtbG9nbyB7XHJcblx0XHR3aWR0aDogMzJweDtcclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ 7671:
/*!*************************************************!*\
  !*** ./src/app/menu-modal/menu-modal.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background: none;\n}\nion-header .logo {\n  width: 32px;\n}\nion-content {\n  --background: transparent;\n}\nion-content ion-list {\n  --ion-item-background: transparent;\n}\nion-content ion-list ion-item a {\n  display: block;\n  color: var(--ion-text-heavy);\n  text-decoration: none;\n}\nion-content ion-list ion-item a .app-icon {\n  color: #6A6E7C;\n  margin-right: 10px;\n}\nion-content ion-list ion-item.active {\n  border-left: 2px solid var(--ion-color-primary);\n}\nion-content ion-list ion-item.active a {\n  color: var(--ion-color-primary);\n}\nion-content ion-list ion-item.active a .app-icon {\n  color: var(--ion-color-primary);\n}\nion-content ion-list ion-item ion-list {\n  font-size: 16px;\n  line-height: 18px;\n}\nion-footer .user ion-label {\n  font-size: 16px;\n  line-height: 21px;\n  font-weight: bold;\n}\nion-footer .user ion-avatar {\n  margin-right: 10px;\n  width: 32px;\n  height: 32px;\n}\nion-footer .user ion-avatar img {\n  background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsZ0JBQUE7QUFBRjtBQUdDO0VBQ0MsV0FBQTtBQURGO0FBS0E7RUFDSSx5QkFBQTtBQUZKO0FBSUM7RUFDQyxrQ0FBQTtBQUZGO0FBS0c7RUFDQyxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUhKO0FBS0k7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7QUFITDtBQVFHO0VBQ0MsK0NBQUE7QUFOSjtBQVFJO0VBQ0MsK0JBQUE7QUFOTDtBQVFLO0VBQ0MsK0JBQUE7QUFOTjtBQVdHO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FBVEo7QUFpQkU7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWRIO0FBa0JFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCSDtBQWtCRztFQUNDLG9DQUFBO0FBaEJKIiwiZmlsZSI6Im1lbnUtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG5cdCY6OmFmdGVyIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHR9XG5cblx0LmxvZ28ge1xuXHRcdHdpZHRoOiAzMnB4O1xuXHR9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcblx0aW9uLWxpc3Qge1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XG5cdFx0aW9uLWl0ZW0ge1xuXHRcdFx0YSB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLXRleHQtaGVhdnkpO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XG5cdFx0XHRcdC5hcHAtaWNvbiB7XG5cdFx0XHRcdFx0Y29sb3I6ICM2QTZFN0M7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHR9XG5cdFx0XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0XHRcdFxuXHRcdFx0XHRcdC5hcHAtaWNvbiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW9uLWxpc3Qge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5pb24tZm9vdGVyIHtcblx0LnVzZXIge1xuXHRcdGlvbi1sYWJlbCB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMjFweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdH1cblxuXG5cdFx0aW9uLWF2YXRhciB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHR3aWR0aDogMzJweDtcblx0XHRcdGhlaWdodDogMzJweDtcblx0XHRcdFxuXHRcdFx0aW1nIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4iXX0= */");

/***/ }),

/***/ 4529:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-footer/app-footer.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section-footer\">\n    <ion-item lines=\"none\" color=\"clear\" class=\"ion-no-padding\">\n        <div slot=\"start\" class=\"menu-full\">\n            <a href=\"javascript:void(0)\">Home</a>\n            <a href=\"javascript:void(0)\">About</a>\n            <a href=\"javascript:void(0)\">Help</a>\n        </div>\n\n        <a (click)=\"showMenu()\" href=\"javascript:void(0);\" class=\"menu-button ion-padding-start ion-margin-start\" slot=\"start\">\n            <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </a>\n\n        <div slot=\"end\">\n            <span>Creative Cretin · 2021</span>\n        </div>\n    </ion-item>\n    <div class=\"shadow\"></div>\n</div>\n");

/***/ }),

/***/ 4933:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-header/app-header.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section-header\">\n    <ion-item class=\"banner\" lines=\"none\">\n        <img class=\"image-logo\" src=\"/assets/img/logo.png\" />\n        <ion-title color=\"white\">{{ 'Common.App_Title' | translate }}</ion-title>\n    </ion-item>\n</div>");

/***/ }),

/***/ 8245:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-modal/menu-modal.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\t<ion-item lines=\"none\">\n\t\t<a href=\"https://{{ hostDomain }}/\"><img class=\"logo\" src=\"/assets/img/logo.png\" slot=\"start\" /></a>\n\n\t\t<ion-button slot=\"end\" (click)=\"close()\" fill=\"clear\" color=\"white\">\n\t\t  <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n\t\t</ion-button>\n\t</ion-item>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let item of items\" [ngClass]=\"{'active': item.active}\">\n\t\t\t<a href=\"javascript:void(0)\" (click)=\"navigate(item)\"><span class=\"app-icon {{item.cssClass}}\"></span>{{item.title}}</a>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map