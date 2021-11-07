(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["default-src_app_include_api-client_api-client_module_ts-src_app_include_google-analytics_goog-77c5e6"],{

/***/ 1210:
/*!*********************************************************!*\
  !*** ./src/app/include/api-client/api-client.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiClientModule": () => (/* binding */ ApiClientModule),
/* harmony export */   "ApiRequest": () => (/* binding */ ApiRequest),
/* harmony export */   "TagStatus": () => (/* binding */ TagStatus)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-settings/app-settings.module */ 6279);






let ApiClientModule = class ApiClientModule {
    constructor(http) {
        this.http = http;
        this._host = _app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_0__.ApiSettings.host;
        this._apiVer = _app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_0__.ApiSettings.apiVer;
    }
    get(req) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(o => {
            let uri = '';
            let headers = undefined;
            if (typeof req === 'string') {
                uri = this._uri(String(req));
            }
            else {
                let r = req;
                uri = this._uri(r.path);
                headers = this._headers(r.headers);
            }
            this.http
                .get(uri, { headers: headers })
                .subscribe((resp) => {
                if (!resp || !resp.response) {
                    o.error(new Error("Null response"));
                }
                else if (resp.response.status >= 300) {
                    o.error(resp.response);
                }
                else {
                    o.next(resp.data);
                }
            }, err => {
                if (err.error && err.error.response) {
                    o.error(err.error.response);
                }
                else {
                    o.error(err);
                }
            }, () => o.complete());
        });
    }
    post(req, body) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(o => {
            let uri = '';
            let headers = undefined;
            if (typeof req === 'string') {
                uri = this._uri(String(req));
            }
            else {
                let r = req;
                uri = this._uri(r.path);
                headers = this._headers(r.headers);
            }
            this.http
                .post(uri, body, { headers: headers })
                .subscribe((resp) => {
                if (!resp || !resp.response) {
                    o.error(new Error("Null response"));
                }
                else if (resp.response.status >= 300) {
                    o.error(resp.response.statusMessage);
                }
                else {
                    o.next(resp.data);
                }
            }, err => {
                if (err.error && err.error.response) {
                    o.error(err.error.response);
                }
                else {
                    o.error(err);
                }
            }, () => o.complete());
        });
    }
    postFile(req, body) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(o => {
            let form = new FormData();
            for (let prop in body) {
                form.append(prop, body[prop]);
            }
            this.http.post(this._uri(req.path), form, { headers: this._headers(req.headers) })
                .subscribe((resp) => {
                if (!resp || !resp.response) {
                    o.error(new Error("Null response"));
                }
                else if (resp.response.status >= 300) {
                    o.error(resp.response.statusMessage);
                }
                else {
                    o.next(resp.data);
                }
            }, err => {
                if (err.error && err.error.response) {
                    o.error(err.error.response);
                }
                else {
                    o.error(err);
                }
            }, () => o.complete());
        });
    }
    put(req, body) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(o => {
            let uri = '';
            let headers = undefined;
            if (typeof req === 'string') {
                uri = this._uri(String(req));
            }
            else {
                let r = req;
                uri = this._uri(r.path);
                headers = this._headers(r.headers);
            }
            this.http
                .put(uri, body, { headers: headers })
                .subscribe((resp) => {
                if (!resp || !resp.response) {
                    o.error(new Error("Null response"));
                }
                else if (resp.response.status >= 300) {
                    o.error(resp.response.statusMessage);
                }
                else {
                    o.next(resp.data);
                }
            }, err => {
                if (err.error && err.error.response) {
                    o.error(err.error.response);
                }
                else {
                    o.error(err);
                }
            }, () => o.complete());
        });
    }
    delete(req) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(o => {
            this.http
                .delete(this._uri(req.path), { headers: this._headers(req.headers) })
                .subscribe((resp) => {
                if (!resp || !resp.response) {
                    o.error(new Error("Null response"));
                }
                else if (resp.response.status >= 300) {
                    o.error(resp.response.statusMessage);
                }
                else {
                    o.next(resp.data);
                }
            }, err => {
                if (err.error && err.error.response) {
                    o.error(err.error.response);
                }
                else {
                    o.error(err);
                }
            }, () => o.complete());
        });
    }
    fileUrl(handle) {
        return this._uri(`/file/${handle}`);
    }
    url(path) {
        return this._uri(path);
    }
    _uri(path) {
        return `${this._host}/bff/${this._apiVer}${path}`;
    }
    _headers(headers) {
        if (typeof headers === "undefined") {
            return null;
        }
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.forEach(header => {
            httpHeaders = httpHeaders.set(header.name, header.value);
        });
        return httpHeaders;
    }
};
ApiClientModule.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ApiClientModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        ],
    })
], ApiClientModule);

class ApiRequest {
    constructor(path) {
        this.path = path;
        this.headers = [];
    }
    addHeaders(headers) {
        if (headers) {
            headers.forEach(x => this.headers.push(x));
        }
        return this;
    }
}
const TagStatus = {
    Active: "active",
    Review: "review",
    Suspended: "suspended",
    Archived: "archived",
    Unassigned: "unassigned",
    Hold: "hold",
};


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
                    rej(new Error('GPS not enabled'));
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
                                rej(new Error('user declined GPS'));
                            }
                        }
                    ],
                });
                let alertTimeout = setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    if (prompt) {
                        yield msg.present();
                    }
                }), 5000);
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
                    rej(err);
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


/***/ })

}]);
//# sourceMappingURL=default-src_app_include_api-client_api-client_module_ts-src_app_include_google-analytics_goog-77c5e6.js.map