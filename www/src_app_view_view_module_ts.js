(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["src_app_view_view_module_ts"],{

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

/***/ 1597:
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageRoutingModule": () => (/* binding */ ViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page */ 127);




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
    },
    {
        path: ':tag',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
    },
    {
        path: ':tag/:archive',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
    },
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewPageRoutingModule);



/***/ }),

/***/ 3070:
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageModule": () => (/* binding */ ViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../include/api-client/api-client.module */ 1210);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-routing.module */ 1597);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.page */ 127);









let ViewPageModule = class ViewPageModule {
};
ViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _view_routing_module__WEBPACK_IMPORTED_MODULE_2__.ViewPageRoutingModule
        ],
        providers: [
            _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_0__.ApiClientModule,
        ],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_3__.ViewPage]
    })
], ViewPageModule);



/***/ }),

/***/ 127:
/*!***********************************!*\
  !*** ./src/app/view/view.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPage": () => (/* binding */ ViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view.page.html */ 292);
/* harmony import */ var _view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page.scss */ 6270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 2590);
/* harmony import */ var _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/api-client/api-client.module */ 1210);
/* harmony import */ var _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../include/app-log/app-log.service */ 8971);
/* harmony import */ var _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../include/app-settings/app-settings.module */ 6279);
/* harmony import */ var _include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../include/app-settings/app-settings.service */ 9675);
/* harmony import */ var _include_google_analytics_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../include/google-analytics/google-analytics.service */ 5887);
/* harmony import */ var _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../include/i18n/i18n.module */ 1477);
/* harmony import */ var _dialog_create_dialog_create_dialog_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/create-dialog/create-dialog.page */ 6598);
/* harmony import */ var _dialog_media_dialog_media_dialog_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog/media-dialog/media-dialog.page */ 5353);
















let ViewPage = class ViewPage {
    constructor(route, alert, api, log, ga, modal, nav, settings, translations) {
        this.route = route;
        this.alert = alert;
        this.api = api;
        this.log = log;
        this.ga = ga;
        this.modal = modal;
        this.nav = nav;
        this.settings = settings;
        this.translations = translations;
        this.backHref = '/';
        this.translations.ready([
            Translation.Alert_Flag_Title,
            Translation.Alert_Flag_Message,
            Translation.Alert_Flagged_Title,
            Translation.Alert_Flagged_Message,
            Translation.Button_Yes,
            Translation.Button_No,
            Translation.Button_OK,
        ]).then();
    }
    ngOnInit() {
        let params = this.route.snapshot.paramMap;
        this.tagHandle = params.get('tag');
        this.arkHandle = params.get('archive');
    }
    ionViewWillEnter() {
        let ignore = this.settings.get(_include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingKey.ignore);
        if ((ignore && ignore.tag && ignore.tag.indexOf(this.tagHandle) >= 0)
            || !this.tagHandle
            || this.tagHandle.length == 0) {
            this.nav.navigate(['/']);
            return;
        }
        this.ga.pageView(this.nav.url);
        if (!this.arkHandle || this.arkHandle.length == 0) {
            this.loadArchives();
        }
        else {
            this.loadContent();
        }
    }
    open(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let isMedia = /(audio|video|image)/.test(item.mime);
            if (!item.isContent) {
                this.nav.navigate([`view/${this.tagHandle}/${item.handle}`]);
            }
            else if (isMedia) {
                let dialog = yield this.modal.create({
                    cssClass: 'dialog-media',
                    component: _dialog_media_dialog_media_dialog_page__WEBPACK_IMPORTED_MODULE_9__.MediaDialogPage,
                    componentProps: {
                        uri: this.api.url(`/ark/${this.tagHandle}/${this.arkHandle}/${item.fileName}`),
                        mime: item.mime,
                        title: item.title,
                    }
                });
                yield dialog.present();
            }
            else {
                window.open(this.api.url(`/ark/${this.tagHandle}/${this.arkHandle}/${item.fileName}`), '_blank');
            }
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let dialog = yield this.modal.create({
                cssClass: _dialog_create_dialog_create_dialog_page__WEBPACK_IMPORTED_MODULE_8__.CssClass,
                component: _dialog_create_dialog_create_dialog_page__WEBPACK_IMPORTED_MODULE_8__.CreateDialogPage,
            });
            yield dialog.present();
        });
    }
    flag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let msg = yield this.alert.create({
                header: this.translations.get(Translation.Alert_Flag_Title),
                message: this.translations.get(Translation.Alert_Flag_Message),
                buttons: [
                    { text: this.translations.get(Translation.Button_Yes), handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () { return yield this.removeItem(); }) },
                    { text: this.translations.get(Translation.Button_No), role: 'cancel' },
                ]
            });
            yield msg.present();
        });
    }
    loadArchives() {
        let ignore = this.settings.get(_include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingKey.ignore);
        this.api
            .get(`/tag/${this.tagHandle}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(res => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(res.contents.filter(x => !ignore || !ignore.ark || ignore.ark.indexOf(x.handle) === -1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.flatMap)(ark => this.api.get(`/ark/${this.tagHandle}/${ark.handle}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_15__.EMPTY)), ark => ark), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(ark => {
            return {
                handle: ark.handle,
                cover: _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__.DefaultCoverPhoto,
                isContent: false,
                title: ark.title,
                description: ark.description,
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.toArray)())
            .subscribe(list => {
            list.forEach(x => this.coverImage(x).subscribe(src => x.cover = src));
            this.items = list;
            this.locked = false;
        });
    }
    loadContent() {
        this.api
            .get(`/tag/${this.tagHandle}/${this.arkHandle}`)
            .subscribe(ark => {
            this.title = ark.title;
            this.message = ark.description;
            this.showMessage = true;
            this.cover = _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__.DefaultCoverPhoto;
            let item = {
                handle: ark.handle,
                isContent: false,
            };
            this.coverImage(item).subscribe(src => this.cover = src);
        });
        this.api
            .get(`/ark/${this.tagHandle}/${this.arkHandle}`)
            .subscribe(res => {
            let list = res.manifest.items.map(i => {
                return {
                    handle: this.arkHandle,
                    cover: _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__.DefaultCoverPhoto,
                    icon: this.iconImage(i.mime),
                    isContent: true,
                    title: i.title,
                    description: i.description,
                    fileName: i.fileName,
                    mime: i.mime,
                    default: i.default,
                };
            });
            list.forEach(i => this.coverImage(i).subscribe(src => i.cover = src));
            this.items = list;
            let item = this.items.find(i => i.default);
            if (item) {
                this.open(item);
            }
            if (res.author) {
                this.author = res.author.handle;
                if (res.author.avatar) {
                    this.avatar = `data:image/png;base64,${res.author.avatar}`;
                }
                else {
                    this.avatar = _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__.DefaultAvatarPhoto;
                }
                this.hasAuthor = true;
            }
            else {
                this.author = "Anonymous";
                this.avatar = _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__.DefaultAvatarPhoto;
            }
        });
        this.api
            .get(`/tag/${this.tagHandle}`)
            .subscribe(tag => {
            this.locked = tag.locked;
            if (tag.contents.length > 1) {
                this.backHref = `/view/${this.tagHandle}`;
            }
        });
    }
    removeItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let isContent = this.arkHandle && this.arkHandle.length > 0;
            let uri = isContent ? `/ark/${this.tagHandle}/${this.arkHandle}/flag` : `/tag/${this.tagHandle}/flag`;
            // this.api
            //     .put(uri)
            //     .subscribe(
            //         async () => {
            let ignore = this.settings.get(_include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingKey.ignore);
            if (!ignore) {
                ignore = {
                    tag: [],
                    ark: [],
                };
            }
            if (isContent) {
                ignore.ark.push(this.arkHandle);
            }
            else {
                ignore.tag.push(this.tagHandle);
            }
            this.log.trace("ignoring", ignore);
            this.settings.set(_include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingKey.ignore, { value: ignore });
            let msg = yield this.alert.create({
                header: this.translations.get(Translation.Alert_Flagged_Title),
                message: this.translations.get(Translation.Alert_Flagged_Message),
                buttons: [
                    { text: this.translations.get(Translation.Button_OK) }
                ]
            });
            msg.onDidDismiss().then(() => this.nav.navigate([this.backHref]));
            yield msg.present();
            //     }
            // );
        });
    }
    coverImage(item) {
        return rxjs__WEBPACK_IMPORTED_MODULE_18__.Observable.create(o => {
            if (!item.isContent) {
                let img = new Image();
                let src = this.api.url(`/ark/${this.tagHandle}/${item.handle}/_cover`);
                item.cover = _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__.DefaultCoverPhoto;
                img.onload = () => { o.next(src); o.complete(); };
                img.onerror = () => { o.next(_include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_4__.DefaultCoverPhoto); o.complete(); };
                img.src = src;
            }
            else {
                let src = '';
                if (item.mime.indexOf("image") >= 0) {
                    src = this.api.url(`/ark/${this.tagHandle}/${this.arkHandle}/${item.fileName}`);
                }
                else if (item.mime.indexOf("text") >= 0 || item.mime.indexOf("pdf") >= 0) {
                    src = "/assets/img/content/pen.png";
                }
                else if (item.mime.indexOf("audio") >= 0) {
                    src = "/assets/img/content/audio.png";
                }
                else if (item.mime.indexOf("video") >= 0) {
                    if (item.mime === "video/youtube") {
                        let id = item.fileName.split('/').pop().split('.').shift();
                        src = `http://img.youtube.com/vi/${id}/mqdefault.jpg`;
                    }
                    src = "/assets/img/content/video.png";
                }
                o.next(src);
                o.complete();
            }
        });
    }
    iconImage(mime) {
        if (mime.indexOf("image") >= 0) {
            return "/assets/img/overlay/image.png";
        }
        else if (mime.indexOf("audio") >= 0) {
            return "/assets/img/overlay/audio.png";
        }
        else if (mime.indexOf("video") >= 0) {
            return "/assets/img/overlay/video.png";
        }
        else if (mime.indexOf("pdf") >= 0) {
            return "/assets/img/overlay/pdf.png";
        }
        else {
            return "/assets/img/overlay/document.png";
        }
    }
};
ViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController },
    { type: _include_api_client_api_client_module__WEBPACK_IMPORTED_MODULE_2__.ApiClientModule },
    { type: _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_3__.AppLogService },
    { type: _include_google_analytics_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__.GoogleAnalyticsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
    { type: _include_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_5__.AppSettingsService },
    { type: _include_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__.Translations }
];
ViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-view',
        template: _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewPage);

const Translation = {
    Alert_Flag_Title: 'Page_View.Alert_Flag_Title',
    Alert_Flag_Message: 'Page_View.Alert_Flag_Message',
    Alert_Flagged_Title: 'Page_View.Alert_Flagged_Title',
    Alert_Flagged_Message: 'Page_View.Alert_Flagged_Message',
    Button_Yes: 'Common.Button_Yes',
    Button_No: 'Common.Button_No',
    Button_OK: 'Common.Button_OK',
};


/***/ }),

/***/ 6270:
/*!*************************************!*\
  !*** ./src/app/view/view.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-cover {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  z-index: -1;\n}\n.section-cover .image-cover {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n}\n.section-cover .shadow {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  background: #000;\n  opacity: 0.7;\n}\nion-toolbar ion-title {\n  padding-inline: 0px;\n  text-align: left;\n}\n.section-content-list {\n  position: relative;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  max-width: 900px;\n}\n.section-message {\n  position: fixed;\n  bottom: 120px;\n  left: 10px;\n  padding: 5px;\n  background: var(--ion-color-light);\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n}\n.mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: black;\n  opacity: 0.4;\n  z-index: -1;\n}\n.coverPhoto {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  max-width: 200%;\n}\n.description {\n  font-size: medium;\n  margin: 20px 0px;\n  padding: 8px;\n}\nion-grid ion-card .contentPreview {\n  position: relative;\n  min-height: 180px;\n  min-width: 180px;\n}\nion-grid ion-card .contentPreview .preview {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\nion-grid ion-card .contentPreview .overlay {\n  position: absolute;\n  top: 47px;\n  left: 50%;\n  margin-left: -45px;\n  width: 95px;\n  z-index: 3;\n}\nion-grid ion-card .contentPreview .mask {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUtDO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQUZGO0FBTUE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhEO0FBT0E7RUFDQyxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBSkQ7QUFPQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFKRDtBQU9BO0VBQ0MsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpEO0FBT0E7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpEO0FBU0U7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOSDtBQVFHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTko7QUFTRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBUEo7QUFVRztFQUNDLFVBQUE7QUFSSiIsImZpbGUiOiJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWNvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgLmltYWdlLWNvdmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2hhZG93IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcblx0aW9uLXRpdGxlIHtcclxuXHRcdHBhZGRpbmctaW5saW5lOiAwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxufVxyXG5cclxuLnNlY3Rpb24tY29udGVudC1saXN0IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHJpZ2h0OiAwcHg7XHJcblx0bWFyZ2luOiAwcHggYXV0bztcclxuXHRtYXgtd2lkdGg6IDkwMHB4O1xyXG5cclxufVxyXG5cclxuLnNlY3Rpb24tbWVzc2FnZSB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMTIwcHg7XHJcblx0bGVmdDogMTBweDtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1hc2sge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dG9wOiAwcHg7XHJcblx0bGVmdDogMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdG9wYWNpdHk6IDAuNDtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNvdmVyUGhvdG8ge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDBweDtcclxuXHRsZWZ0OiAwcHg7XHJcblx0cmlnaHQ6IDBweDtcclxuXHRtYXJnaW46IDBweCBhdXRvO1xyXG5cdG1heC13aWR0aDogMjAwJTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuXHRmb250LXNpemU6IG1lZGl1bTtcclxuXHRtYXJnaW46IDIwcHggMHB4O1xyXG5cdHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG5cdGlvbi1jYXJkIHtcclxuXHRcdC5jb250ZW50UHJldmlldyB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0bWluLWhlaWdodDogMTgwcHg7XHJcblx0XHRcdG1pbi13aWR0aDogMTgwcHg7XHJcblxyXG5cdFx0XHQucHJldmlldyB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm92ZXJsYXkge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6IDQ3cHg7XHJcblx0XHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtNDVweDtcclxuXHRcdFx0XHR3aWR0aDogOTVweDtcclxuXHRcdFx0XHR6LWluZGV4OiAzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFzayB7XHJcblx0XHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */");

/***/ }),

/***/ 292:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <app-header></app-header>\n</ion-header>\n\n<ion-toolbar>\n    <ion-item lines=\"none\">\n        <ion-button [href]=\"backHref\" color=\"dark\" fill=\"clear\" slot=\"start\"><ion-icon slot=\"icon-only\" name='arrow-back-outline'></ion-icon></ion-button>\n        <ion-title>{{ title }}</ion-title>\n    </ion-item>\n</ion-toolbar>\n\n<ion-content [fullscreen]=\"true\">\n    <div *ngIf=\"showMessage\" class=\"section-cover\">\n        <img [src]=\"cover\" class=\"image-cover\" />\n        <div class=\"shadow\"></div>\n    </div>\n\n\n    <div class=\"section-content-list\">\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngFor=\"let item of items\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\">\n            <ion-card (click)=\"open(item)\">\n              <ion-card-content>\n                <div class=\"contentPreview\">\n                  <img [src]=\"item.cover\" class=\"preview\" />\n                  <img *ngIf=\"item.isContent\" [src]=\"item.icon\" class=\"overlay\" />\n                  <div class=\"mask\"></div>\n                </div>\n\n                <ion-card-title>{{item.title}}</ion-card-title>\n\n                {{item.description}}\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=\"showMessage\" class=\"section-message\">\n        <ion-chip>\n            <ion-avatar *ngIf=\"avatar\">\n                <img [src]=\"avatar\" />\n            </ion-avatar>\n            <ion-label>{{ author }}</ion-label>\n        </ion-chip>\n\n        <div>{{ message }}</div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button *ngIf=\"!locked\" (click)=\"create()\" fill=\"clear\" color=\"dark\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"flag()\" fill=\"clear\" color=\"dark\"><ion-icon name=\"alert\"></ion-icon></ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <app-footer></app-footer>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_view_view_module_ts.js.map