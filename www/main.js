(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'start',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_start_start_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./start/start.module */ 8030)).then(m => m.StartPageModule)
    },
    {
        path: 'discover',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_discover_discover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./discover/discover.module */ 4636)).then(m => m.DiscoverPageModule)
    },
    {
        path: 'menu-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_menu-modal_menu-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menu-modal/menu-modal.module */ 1130)).then(m => m.MenuModalPageModule)
    },
    {
        path: 'view',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/view.module */ 3070)).then(m => m.ViewPageModule)
    },
    {
        path: 'media-dialog',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_media-dialog_media-dialog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./media-dialog/media-dialog.module */ 8849)).then(m => m.MediaDialogPageModule)
    },
    {
        path: 'create-dialog',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_create-dialog_create-dialog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-dialog/create-dialog.module */ 2976)).then(m => m.CreateDialogPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _include_app_log_app_log_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./include/app-log/app-log.module */ 6800);
/* harmony import */ var _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./include/app-settings/app-settings.module */ 6279);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./include/i18n/i18n.module */ 1477);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 158);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forRoot({
                loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader, useFactory: (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, 'assets/i18n/'), deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient] }
            }),
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__.I18nModule,
            _include_app_log_app_log_module__WEBPACK_IMPORTED_MODULE_0__.AppLogModule.forRoot(),
            _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_1__.AppSettingsModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule
        ],
        providers: [
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__.Translations,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6800:
/*!***************************************************!*\
  !*** ./src/app/include/app-log/app-log.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogModule": () => (/* binding */ AppLogModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-log.service */ 8971);
var AppLogModule_1;



let AppLogModule = AppLogModule_1 = class AppLogModule {
    constructor() {
    }
    static forRoot() {
        return {
            ngModule: AppLogModule_1,
            providers: [_app_log_service__WEBPACK_IMPORTED_MODULE_0__.AppLogService]
        };
    }
};
AppLogModule.ctorParameters = () => [];
AppLogModule = AppLogModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)()
], AppLogModule);



/***/ }),

/***/ 8971:
/*!****************************************************!*\
  !*** ./src/app/include/app-log/app-log.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogService": () => (/* binding */ AppLogService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-settings/app-settings.module */ 6279);



let AppLogService = class AppLogService {
    constructor() {
    }
    ex(err, ...extra) {
        console.error(err, ...extra);
    }
    write(message, ...extra) {
        console.log(message, ...extra);
    }
    warn(message, ...extra) {
        console.warn(message, ...extra);
    }
    trace(message, ...extra) {
        if (_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_0__.EnableTrace) {
            console.log(message, ...extra);
        }
    }
};
AppLogService.ctorParameters = () => [];
AppLogService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AppLogService);



/***/ }),

/***/ 6279:
/*!*************************************************************!*\
  !*** ./src/app/include/app-settings/app-settings.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettingsModule": () => (/* binding */ AppSettingsModule),
/* harmony export */   "ApiSettings": () => (/* binding */ ApiSettings),
/* harmony export */   "EnableTrace": () => (/* binding */ EnableTrace),
/* harmony export */   "DefaultAvatarPhoto": () => (/* binding */ DefaultAvatarPhoto),
/* harmony export */   "HostDomain": () => (/* binding */ HostDomain),
/* harmony export */   "RecaptchaKey": () => (/* binding */ RecaptchaKey),
/* harmony export */   "StripeKey": () => (/* binding */ StripeKey),
/* harmony export */   "YouTubeApiKey": () => (/* binding */ YouTubeApiKey),
/* harmony export */   "YouTubeClientId": () => (/* binding */ YouTubeClientId),
/* harmony export */   "DefaultCoverPhoto": () => (/* binding */ DefaultCoverPhoto)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-settings.service */ 9675);
var AppSettingsModule_1;





let AppSettingsModule = AppSettingsModule_1 = class AppSettingsModule {
    static forRoot() {
        return {
            ngModule: AppSettingsModule_1,
            providers: [_app_settings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService]
        };
    }
};
AppSettingsModule = AppSettingsModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ]
    })
], AppSettingsModule);

class ApiSettings {
}
ApiSettings.host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.host;
ApiSettings.apiVer = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.version;
ApiSettings.clientKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.clientKey;
ApiSettings.clientSecret = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.clientSecret;
const EnableTrace = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enableTrace;
const DefaultAvatarPhoto = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultAvatarPhoto;
const HostDomain = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hostDomain;
const RecaptchaKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.recaptchaKey;
const StripeKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stripeKey;
const YouTubeApiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.youTubeApiKey;
const YouTubeClientId = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.youTubeClientId;
const DefaultCoverPhoto = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultCoverPhoto;


/***/ }),

/***/ 9675:
/*!**************************************************************!*\
  !*** ./src/app/include/app-settings/app-settings.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettingsService": () => (/* binding */ AppSettingsService),
/* harmony export */   "AppSetting": () => (/* binding */ AppSetting),
/* harmony export */   "SettingKey": () => (/* binding */ SettingKey)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let AppSettingsService = class AppSettingsService {
    constructor() {
    }
    get(key) {
        let v = JSON.parse(localStorage.getItem(key));
        if (v) {
            if (v.expire) {
                let expire = new Date(v.expire);
                if (expire > new Date()) {
                    return v.value;
                }
            }
            else {
                return v.value;
            }
        }
        this.remove(key);
        return null;
    }
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
};
AppSettingsService.ctorParameters = () => [];
AppSettingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], AppSettingsService);

class AppSetting {
}
const SettingKey = {
    ignore: 'ignore',
};


/***/ }),

/***/ 1477:
/*!*********************************************!*\
  !*** ./src/app/include/i18n/i18n.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nModule": () => (/* binding */ I18nModule),
/* harmony export */   "availableLanguages": () => (/* binding */ availableLanguages),
/* harmony export */   "defaultLanguage": () => (/* binding */ defaultLanguage),
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "Translations": () => (/* binding */ Translations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9719);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2590);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-log/app-log.service */ 8971);






let I18nModule = class I18nModule {
    constructor(log, translate) {
        this.log = log;
        this.translate = translate;
        this.readyPromise = new Promise(res => this.res = res);
        this.translate.setDefaultLang(defaultLanguage);
        let language = this.getSuitableLanguage(this.translate.getBrowserLang());
        this.log.trace("Browser set to language: " + language);
        this.translate.use(language);
        Settings.systemLanguage = language;
        this.res();
    }
    ready() {
        return this.readyPromise;
    }
    getTranslations(keys) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(keys)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinct)())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.flatMap)(key => this.translate.get(key), (key, translation) => {
            return { key: key, translation: translation };
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.toArray)());
    }
    getSuitableLanguage(language) {
        language = language.substring(0, 2).toLowerCase();
        return availableLanguages.some(x => x.code == language) ? language : defaultLanguage;
    }
};
I18nModule.ctorParameters = () => [
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__.AppLogService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
I18nModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)()
], I18nModule);

const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
];
const defaultLanguage = 'en';
const Settings = {
    systemLanguage: defaultLanguage
};
let Translations = class Translations {
    constructor(log, i18n) {
        this.log = log;
        this.i18n = i18n;
        this.translations = [];
    }
    ready(keys) {
        return new Promise(res => {
            if (!keys)
                keys = [];
            if (keys.indexOf(App_Translation_Missing) < 0) {
                keys.push(App_Translation_Missing);
            }
            this.i18n.ready().then(() => {
                this.i18n.getTranslations(keys)
                    .subscribe(translations => this.translations = [...translations, ...this.translations], () => { }, () => {
                    let missing = this.translations.find(t => t.key === App_Translation_Missing).translation;
                    this.translations
                        .filter(t => t.key === t.translation)
                        .forEach(t => t.translation = missing);
                    res();
                });
            });
        });
    }
    get(key) {
        let found = this.translations.find(x => x.key == key);
        if (found) {
            return found.translation;
        }
        else {
            this.log.warn("no translation for", key);
            return this.translations.find(x => x.key == App_Translation_Missing).translation;
        }
    }
};
Translations.ctorParameters = () => [
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__.AppLogService },
    { type: I18nModule }
];
Translations = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
    })
], Translations);

const App_Translation_Missing = "App_Translation_Missing";


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    enableTrace: true,
    defaultAvatarPhoto: "/assets/img/avatar.png",
    hostDomain: "staging.hushtagsapp.com",
    recaptchaKey: "6LcuO98UAAAAAJWtI76x_OpH-DyBXvB-O1sFJq1N",
    stripeKey: "pk_test_51GrnLBDXx6cLvgJUuRE0CxQyU1fTm12m0OH6Y5rmpO0iEpgp8W0Ti1XIcAtRpi3Pfm1T4SIdAaAGAeeBugwd168f00ZquZhSAs",
    youTubeApiKey: "AIzaSyDj7FJZktjgoBAWOv3nvDwxLwOhxPSqAhY",
    youTubeClientId: '818534056228-t3js0c97co2v550d1u2r46bmjo8bh31k.apps.googleusercontent.com',
    defaultCoverPhoto: "/assets/img/cover.png",
    api: {
        host: "https://staging-bff.hushtagsapp.com",
        version: "current",
        clientKey: "hatclientapp",
        clientSecret: "54c2d7f5ef21910ea9d53522abbe6f76",
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("menu-modal ion-content {\n  --background: var(--ion-color-tertiary);\n}\n\n@media only screen and (orientation: landscape) {\n  body {\n    height: 100vw;\n    transform: rotate(90deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHVDQUFBO0FBQVI7O0FBSUE7RUFDSTtJQUNJLGFBQUE7SUFDQSx3QkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWVudS1tb2RhbCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcbiAgICBib2R5IHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2dztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map