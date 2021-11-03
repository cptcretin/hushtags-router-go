(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_discover_discover_module_ts"],{

/***/ 9257:
/*!*****************************************************!*\
  !*** ./src/app/discover/discover-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageRoutingModule": () => (/* binding */ DiscoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover.page */ 3861);




const routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_0__.DiscoverPage
    },
    {
        path: ':tag',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_0__.DiscoverPage
    }
];
let DiscoverPageRoutingModule = class DiscoverPageRoutingModule {
};
DiscoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscoverPageRoutingModule);



/***/ }),

/***/ 4636:
/*!*********************************************!*\
  !*** ./src/app/discover/discover.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageModule": () => (/* binding */ DiscoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../include/api-client/api-client.module */ 1210);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover-routing.module */ 9257);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover.page */ 3861);










let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__.Translations,
            _discover_routing_module__WEBPACK_IMPORTED_MODULE_3__.DiscoverPageRoutingModule
        ],
        providers: [
            _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_0__.ApiClientModule,
        ],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_4__.DiscoverPage]
    })
], DiscoverPageModule);



/***/ }),

/***/ 3861:
/*!*******************************************!*\
  !*** ./src/app/discover/discover.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPage": () => (/* binding */ DiscoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_discover_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./discover.page.html */ 2310);
/* harmony import */ var _discover_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page.scss */ 9579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/api-client/api-client.module */ 1210);
/* harmony import */ var _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../include/app-log/app-log.service */ 8971);
/* harmony import */ var _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../include/app-settings/app-settings.module */ 6279);
/* harmony import */ var _include_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../include/location/location.service */ 7927);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);












let DiscoverPage = class DiscoverPage {
    constructor(route, api, log, gps, translate) {
        this.route = route;
        this.api = api;
        this.log = log;
        this.gps = gps;
        this.translate = translate;
        this.coverPhoto = _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__.DefaultCoverPhoto;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let tag = this.route.snapshot.paramMap.get('tag');
            if (tag && tag.length > 0) {
                yield this.readTag(tag);
            }
        });
    }
    readTag(tagHandle) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let pos = undefined;
            try {
                pos = yield this.gps.getLocation();
            }
            catch (_a) { }
            let point = pos ? `${pos.lat},${pos.lon}` : '';
            let req = new _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__.ApiRequest(`/tag/${tagHandle}`)
                .addHeaders([{ name: 'x-hushtags-tapLocation', value: point }]);
            this.api.get(req)
                .subscribe(res => {
                this.title = res.title;
                this.tagHandle = tagHandle;
                this.arkHandle = res.contents.length == 1 ? res.contents[0].handle : '';
                this.isAvailable = res.status == _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__.TagStatus.Unassigned;
                (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(res.contents)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(ark => this.api.get(new _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__.ApiRequest(`/ark/${tagHandle}/${ark.handle}`)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY)), ark => ark), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.first)())
                    .subscribe(ark => {
                    let img = new Image();
                    let coverPhoto = this.api.url(`/ark/${tagHandle}/${ark.handle}/_cover`);
                    img.onload = () => this.coverPhoto = coverPhoto;
                    img.src = coverPhoto;
                }, err => {
                    this.log.ex("got error", err);
                });
            });
        });
    }
};
DiscoverPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__.ApiClientModule },
    { type: _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_3__.AppLogService },
    { type: _include_location_location_service__WEBPACK_IMPORTED_MODULE_5__.LocationService },
    { type: _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__.Translations }
];
DiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-discover',
        template: _raw_loader_discover_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_discover_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DiscoverPage);



/***/ }),

/***/ 7927:
/*!******************************************************!*\
  !*** ./src/app/include/location/location.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-log/app-log.service */ 8971);
/* harmony import */ var _app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-settings/app-settings.service */ 9675);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/i18n.module */ 1477);






let LocationService = class LocationService {
    constructor(alert, log, settings, translations) {
        this.alert = alert;
        this.log = log;
        this.settings = settings;
        this.translations = translations;
        this.translations.ready([
            Translation.Alert_Permission_Title,
            Translation.Alert_Permission_Message,
            Translation.Button_Casual_Deny,
        ]).then();
    }
    getLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((res, rej) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield this.translations.ready([]);
                let pos = this.settings.get(_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingKey.location);
                let prompt = this.settings.get(_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingKey.locationPrompt) == undefined;
                if (pos) {
                    res(pos);
                    return;
                }
                if (!window.navigator.geolocation || !prompt) {
                    rej();
                    return;
                }
                let msg = yield this.alert.create({
                    header: this.translations.get(Translation.Alert_Permission_Title),
                    message: this.translations.get(Translation.Alert_Permission_Message),
                    cssClass: 'alert-location-permission',
                    buttons: [
                        { text: this.translations.get(Translation.Button_Casual_Deny), handler: () => {
                                this.settings.set(_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingKey.locationPrompt, { value: false });
                                msg.dismiss();
                                rej();
                            }
                        }
                    ],
                });
                let alertTimeout = setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    if (prompt) {
                        yield msg.present();
                    }
                }), 1500);
                window.navigator.geolocation.getCurrentPosition(pos => {
                    this.log.trace("got geo-location", pos);
                    clearTimeout(alertTimeout);
                    msg.dismiss();
                    let point = {
                        lat: pos.coords.latitude,
                        lon: pos.coords.longitude,
                    };
                    let exp = new Date();
                    exp.setMinutes(exp.getMinutes() + 3);
                    this.settings.set(_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingKey.location, { value: point, expire: exp });
                    res(point);
                }, err => {
                    this.log.warn("could not get position", err);
                    clearTimeout(alertTimeout);
                    msg.dismiss();
                    if (err.code === 1) { // Denied GPS permisison
                        this.settings.set(_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingKey.locationPrompt, { value: false });
                    }
                    rej();
                });
            }));
        });
    }
};
LocationService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__.AppLogService },
    { type: _app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService },
    { type: _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__.Translations }
];
LocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], LocationService);

const Translation = {
    Alert_Permission_Title: 'Service_Location.Alert_Permission_Title',
    Alert_Permission_Message: 'Service_Location.Alert_Permission_Message',
    Button_Casual_Deny: 'Common.Button_Casual_Deny',
};


/***/ }),

/***/ 9579:
/*!*********************************************!*\
  !*** ./src/app/discover/discover.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-cover {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  z-index: -1;\n}\n.section-cover .image-cover {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n}\n.section-cover .shadow {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  background: #000;\n  opacity: 0.7;\n}\n.prompt-show-content {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: min-content;\n  width: min-content;\n  margin: auto;\n}\n.prompt-show-content .learn-more {\n  --background: var(--ion-color-light);\n}\n.prompt-show-content .learn-more ion-button {\n  text-transform: none;\n}\n.text-title h1 {\n  font-size: 1.15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksb0NBQUE7QUFEUjtBQUdRO0VBQ0ksb0JBQUE7QUFEWjtBQU9JO0VBQ0ksaUJBQUE7QUFKUiIsImZpbGUiOiJkaXNjb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1jb3ZlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTE7XG5cbiAgICAuaW1hZ2UtY292ZXIge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICBcbiAgICAuc2hhZG93IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG59XG5cbi5wcm9tcHQtc2hvdy1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgLmxlYXJuLW1vcmUge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRleHQtdGl0bGUge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 2310:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <app-header></app-header>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <div class=\"section-cover\">\n        <img [src]=\"coverPhoto\" class=\"image-cover\" />\n        <div class=\"shadow\"></div>\n    </div>\n    \n    <ion-card class=\"prompt-show-content\">\n        <ion-card-header>\n            <ion-card-title>{{ title }}</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>{{ 'Page_Discover.Tag_Found' | translate }}</ion-card-content>\n\n        <ion-item lines=\"none\">\n            <ion-button [href]=\"'/view/'+tagHandle+'/'+arkHandle\" class=\"ion-margin\" expand=\"block\" size=\"large\" color=\"primary\" slot=\"start\">{{ 'Common.Button_Casual_Confirm' | translate }}</ion-button>\n            <ion-button href=\"/\" class=\"ion-margin\" expand=\"block\" size=\"large\" fill=\"clear\" slot=\"end\">{{ 'Common.Button_Casual_Deny' | translate }}</ion-button>\n        </ion-item>\n\n    <ion-item lines=\"none\" class=\"learn-more\">\n            <ion-button href=\"/start\" fill=\"clear\" color=\"primary\" slot=\"end\">{{ 'Page_Discover.Learn_More' | translate }}</ion-button>\n        </ion-item>\n    </ion-card>\n</ion-content>\n\n<ion-footer>\n    <app-footer></app-footer>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_discover_discover_module_ts.js.map