(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_help_help_module_ts"],{

/***/ 5282:
/*!*********************************************!*\
  !*** ./src/app/help/help-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageRoutingModule": () => (/* binding */ HelpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.page */ 6633);




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_0__.HelpPage
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ 6700:
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageModule": () => (/* binding */ HelpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../include/api-client/api-client.module */ 1210);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-routing.module */ 5282);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help.page */ 6633);










let HelpPageModule = class HelpPageModule {
};
HelpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_0__.ApiClientModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__.Translations,
            _help_routing_module__WEBPACK_IMPORTED_MODULE_3__.HelpPageRoutingModule
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_4__.HelpPage]
    })
], HelpPageModule);



/***/ }),

/***/ 6633:
/*!***********************************!*\
  !*** ./src/app/help/help.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPage": () => (/* binding */ HelpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_help_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./help.page.html */ 5338);
/* harmony import */ var _help_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.page.scss */ 551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/api-client/api-client.module */ 1210);
/* harmony import */ var _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../include/app-log/app-log.service */ 8971);
/* harmony import */ var _include_location_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../include/location/location.service */ 7927);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);












let HelpPage = class HelpPage {
    constructor(api, alert, log, gps, dialog, nav, toast, translations) {
        this.api = api;
        this.alert = alert;
        this.log = log;
        this.gps = gps;
        this.dialog = dialog;
        this.nav = nav;
        this.toast = toast;
        this.translations = translations;
        this.referer = '/';
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.translations.ready([
            Translation.FormTitle,
            Translation.FormName,
            Translation.FormEmail,
            Translation.FormSubject,
            Translation.FormMessage,
            Translation.Alert_Missing_Title,
            Translation.Alert_Missing_Message,
            Translation.Toast_Sent,
            Translation.Button_OK,
        ]).then();
    }
    ngOnInit() {
        let nav = this.nav.getCurrentNavigation();
        if (nav.extras && nav.extras.state) {
            this.log.trace("got state", nav.extras.state);
            this.referer = nav.extras.state.referer;
        }
    }
    ionViewWillEnter() {
        this.recordHelpRequest();
    }
    back() {
        this.nav.navigate([this.referer]);
    }
    send() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let name = (this.name || '').trim();
            let email = (this.email || '').trim();
            let subject = (this.subject || '').trim();
            let message = (this.message || '').trim();
            let missing = [];
            if (name.length === 0) {
                missing.push(`<li>${this.translations.get(Translation.FormName)}</li>`);
            }
            if (email.length === 0) {
                missing.push(`<li>${this.translations.get(Translation.FormEmail)}</li>`);
            }
            if (subject.length === 0) {
                missing.push(`<li>${this.translations.get(Translation.FormSubject)}</li>`);
            }
            if (message.length === 0) {
                missing.push(`<li>${this.translations.get(Translation.FormMessage)}</li>`);
            }
            if (missing.length > 0) {
                let list = `<ul>${missing.join('')}</ul>`;
                let msg = yield this.alert.create({
                    header: this.translations.get(Translation.Alert_Missing_Title),
                    message: this.translations.get(Translation.Alert_Missing_Message).replace('{{missing}}', list),
                    buttons: [
                        { text: this.translations.get(Translation.Button_OK) },
                    ]
                });
                yield msg.present();
                return;
            }
            this.api
                .post('/help/request', {
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
                .subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                let msg = yield this.toast.create({
                    message: this.translations.get(Translation.Toast_Sent),
                    duration: 2000,
                    animated: true,
                    translucent: true,
                });
                yield msg.present();
                setTimeout(() => {
                    this.nav.navigate([this.referer]);
                }, 1300);
            }));
        });
    }
    recordHelpRequest() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.gps.getLocation())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(pos => this.api.post('/help', {
            location: { lat: pos.lat, long: pos.lon },
            referer: this.referer,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
            this.log.warn("help request not recorded", err);
            return rxjs__WEBPACK_IMPORTED_MODULE_10__.EMPTY;
        }))
            .subscribe();
    }
};
HelpPage.ctorParameters = () => [
    { type: _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__.ApiClientModule },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_3__.AppLogService },
    { type: _include_location_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_5__.Translations }
];
HelpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-help',
        template: _raw_loader_help_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_help_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HelpPage);

const Translation = {
    FormTitle: 'Page_Help.Form.Title',
    FormName: 'Page_Help.Form.Name',
    FormEmail: 'Page_Help.Form.Email',
    FormSubject: 'Page_Help.Form.Subject',
    FormMessage: 'Page_Help.Form.Message',
    Alert_Missing_Title: 'Page_Help.Alert_Missing_Title',
    Alert_Missing_Message: 'Page_Help.Alert_Missing_Message',
    Toast_Sent: 'Page_Help.Toast_Sent',
    Button_OK: 'Common.Button_OK',
};


/***/ }),

/***/ 551:
/*!*************************************!*\
  !*** ./src/app/help/help.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-heading {\n  min-height: 50vh;\n}\n.section-heading .text-page-title {\n  display: block;\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  padding: 20px 0px 50px 0px;\n  border-bottom: 2px solid var(--ion-color-dark);\n  font-size: 2.25em;\n  font-weight: 600;\n}\n.section-heading .help-message {\n  padding: 50px 0px;\n}\n.section-heading .help-message .text-page-subtitle {\n  font-size: 1.5em;\n  font-weight: 500;\n}\n.section-contact-form {\n  background: var(--ion-color-primary);\n}\n.section-contact-form .field {\n  --background: transparent;\n}\n.section-contact-form .field ion-input, .section-contact-form .field ion-textarea {\n  --background: var(--ion-color-secondary);\n  --padding-start: 5px;\n}\n.section-contact-form .buttons {\n  --background: transparent;\n}\n.section-contact-form .buttons ion-button {\n  margin-top: 20px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7QUFDRDtBQUNDO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUM7RUFDQyxpQkFBQTtBQUFGO0FBRUU7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FBQUg7QUFLQTtFQUNDLG9DQUFBO0FBRkQ7QUFJQztFQUNDLHlCQUFBO0FBRkY7QUFJRTtFQUNDLHdDQUFBO0VBQ0Esb0JBQUE7QUFGSDtBQU1DO0VBQ0MseUJBQUE7QUFKRjtBQU1FO0VBQ0MsZ0JBQUE7RUFDQSxvQkFBQTtBQUpIIiwiZmlsZSI6ImhlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGluZyB7XHJcblx0bWluLWhlaWdodDogNTB2aDtcclxuXHJcblx0LnRleHQtcGFnZS10aXRsZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHRcdGxlZnQ6IDBweDtcclxuXHRcdHJpZ2h0OiAwcHg7XHJcblx0XHRtYXJnaW46IDBweCBhdXRvO1xyXG5cdFx0cGFkZGluZzogMjBweCAwcHggNTBweCAwcHg7XHJcblx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdFx0Zm9udC1zaXplOiAyLjI1ZW07XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdH1cclxuXHJcblx0LmhlbHAtbWVzc2FnZSB7XHJcblx0XHRwYWRkaW5nOiA1MHB4IDBweDtcclxuXHJcblx0XHQudGV4dC1wYWdlLXN1YnRpdGxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNvbnRhY3QtZm9ybSB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuXHQuZmllbGQge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcblx0XHRpb24taW5wdXQsIGlvbi10ZXh0YXJlYSB7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblx0XHRcdC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmJ1dHRvbnMge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcblx0XHRpb24tYnV0dG9uIHtcclxuXHRcdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */");

/***/ }),

/***/ 5338:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <app-header></app-header>\n\n    <ion-toolbar>\n        <ion-button (click)=\"back()\" color=\"dark\" fill=\"clear\" slot=\"start\"><ion-icon slot=\"icon-only\" name='arrow-back-outline'></ion-icon></ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <div class=\"section-heading\">\n        <ion-label class=\"text-page-title ion-text-wrap\">{{ 'Page_Help.Title' | translate }}</ion-label>\n\n        <div class=\"ion-margin ion-padding help-message\">\n            <ion-text class=\"text-page-subtitle\">{{ 'Page_Help.SubTitle' | translate }}</ion-text>\n        </div>\n    </div>\n\n    <div class=\"section-contact-form\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" size-sm=\"6\">\n                    <ion-title>{{ 'Page_Help.Form.Title' | translate }}</ion-title>\n                </ion-col>\n\n                <ion-col>\n                    <form>\n                        <ion-item class=\"field\" lines=\"none\">\n                            <ion-input [(ngModel)]=\"name\" [placeholder]=\"'Page_Help.Form.Name' | translate\" name=\"name\"></ion-input>\n                        </ion-item>\n\n                        <ion-item class=\"field\" lines=\"none\">\n                            <ion-input [(ngModel)]=\"email\" [placeholder]=\"'Page_Help.Form.Email' | translate\" name=\"email\"></ion-input>\n                        </ion-item>\n\n                        <ion-item class=\"field\" lines=\"none\">\n                            <ion-input [(ngModel)]=\"subject\" [placeholder]=\"'Page_Help.Form.Subject' | translate\" name=\"subject\"></ion-input>\n                        </ion-item>\n\n                        <ion-item class=\"field\" lines=\"none\">\n                            <ion-textarea [(ngModel)]=\"message\" [placeholder]=\"'Page_Help.Form.Message' | translate\" name=\"message\"></ion-textarea>\n                        </ion-item>\n\n                        <ion-item class=\"buttons\" lines=\"none\">\n                            <ion-button (click)=\"send()\" slot=\"end\" size=\"large\" color=\"secondary\">{{ 'Page_Help.Form.Send' | translate }}</ion-button>\n                        </ion-item>\n                    </form>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_help_help_module_ts.js.map