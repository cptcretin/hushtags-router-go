(self["webpackChunkhushtags_app"] = self["webpackChunkhushtags_app"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 3237:
/*!*****************************************************!*\
  !*** ./src/app/create-dialog/create-dialog.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDialogPage": () => (/* binding */ CreateDialogPage),
/* harmony export */   "CssClass": () => (/* binding */ CssClass)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-dialog.page.html */ 430);
/* harmony import */ var _create_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-dialog.page.scss */ 4665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/app-log/app-log.service */ 8971);






let CreateDialogPage = class CreateDialogPage {
    constructor(log, modal) {
        this.log = log;
        this.modal = modal;
        this.target = '_blank';
    }
    ngOnInit() {
        let ver = window.navigator.appVersion;
        if (ver.indexOf('iPhone') >= 0) {
            this.downloadHref = 'https://hushtags.app/ios-download';
        }
        else if (ver.indexOf('Android') >= 0) {
            this.downloadHref = 'https://hushtags.app/android-download';
        }
        else {
            this.downloadHref = '/start';
            this.target = '_self';
        }
    }
    close() {
        this.modal.dismiss();
    }
};
CreateDialogPage.ctorParameters = () => [
    { type: _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__.AppLogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
CreateDialogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-create-dialog',
        template: _raw_loader_create_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateDialogPage);

const CssClass = 'dialog-create-tag';


/***/ }),

/***/ 4911:
/*!***********************************************************!*\
  !*** ./src/app/empty-tag-dialog/empty-tag-dialog.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyTagDialogPage": () => (/* binding */ EmptyTagDialogPage),
/* harmony export */   "CssClass": () => (/* binding */ CssClass)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_empty_tag_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./empty-tag-dialog.page.html */ 6453);
/* harmony import */ var _empty_tag_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-tag-dialog.page.scss */ 4903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let EmptyTagDialogPage = class EmptyTagDialogPage {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    close() {
        this.dialog.dismiss();
    }
};
EmptyTagDialogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
EmptyTagDialogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-empty-tag-dialog',
        template: _raw_loader_empty_tag_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_empty_tag_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmptyTagDialogPage);

const CssClass = 'dialog-empty-tag';


/***/ }),

/***/ 969:
/*!***************************************************!*\
  !*** ./src/app/media-dialog/media-dialog.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaDialogPage": () => (/* binding */ MediaDialogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_media_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./media-dialog.page.html */ 9716);
/* harmony import */ var _media_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-dialog.page.scss */ 4638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/app-log/app-log.service */ 8971);
/* harmony import */ var _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../include/app-settings/app-settings.module */ 6279);








let MediaDialogPage = class MediaDialogPage {
    constructor(log, sanitizer, modal) {
        this.log = log;
        this.sanitizer = sanitizer;
        this.modal = modal;
        this.uri = '';
        this.mime = '';
        this.title = '';
        this.videoPoster = _include_app_settings_app_settings_module__WEBPACK_IMPORTED_MODULE_3__.DefaultCoverPhoto;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.log.trace("item title", this.title);
        if (this.mime.startsWith("image")) {
            this.imageSrc = this.uri;
        }
        else if (this.mime.startsWith("video")) {
            if (this.mime === 'video/youtube') {
                let id = this.uri.split('/').pop().split('.').shift();
                this.youTubeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?controls=0`);
            }
            else {
                this.videoSrc = this.uri;
            }
        }
        else if (this.mime.startsWith("audio")) {
            this.audioSrc = this.uri;
        }
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modal.dismiss();
        });
    }
};
MediaDialogPage.ctorParameters = () => [
    { type: _include_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__.AppLogService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
MediaDialogPage.propDecorators = {
    uri: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    mime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
MediaDialogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'media-dialog',
        template: _raw_loader_media_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_media_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MediaDialogPage);



/***/ }),

/***/ 4665:
/*!*******************************************************!*\
  !*** ./src/app/create-dialog/create-dialog.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".section-intro {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n}\n@media (max-width: 700px) {\n  .section-intro {\n    top: -100px;\n  }\n}\n.section-intro .video-intro {\n  display: none;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  background: #e26326;\n  z-index: -1;\n}\n@media (max-width: 700px) {\n  .section-intro .video-intro.portrait {\n    display: unset;\n    object-fit: scale-down;\n    top: -120px;\n  }\n}\n@media (min-width: 701px) {\n  .section-intro .video-intro.landscape {\n    display: unset;\n  }\n}\n.prompt-create-tag {\n  position: fixed;\n  width: 100%;\n  bottom: 33px;\n  border-radius: 0px;\n}\n.prompt-create-tag .tag-line {\n  --min-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1kaWFsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQUNKO0FBQ0k7RUFOSjtJQU9RLFdBQUE7RUFFTjtBQUNGO0FBQUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQVE7RUFDSTtJQUNJLGNBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7RUFFZDtBQUNGO0FBQ1E7RUFDSTtJQUNJLGNBQUE7RUFDZDtBQUNGO0FBSUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDSSxpQkFBQTtBQURSIiwiZmlsZSI6ImNyZWF0ZS1kaWFsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taW50cm8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHRvcDogLTEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlby1pbnRybyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2UyNjMyNjtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICYucG9ydHJhaXQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xyXG4gICAgICAgICAgICAmLmxhbmRzY2FwZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb21wdC1jcmVhdGUtdGFnIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAzM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG5cclxuICAgIC50YWctbGluZSB7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 4903:
/*!*************************************************************!*\
  !*** ./src/app/empty-tag-dialog/empty-tag-dialog.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".image-cover {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  width: 80%;\n  height: 80%;\n  margin: auto;\n  object-fit: scale-down;\n}\n\n.animation-pop {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n\n.shadow {\n  position: absolute;\n  background: #000;\n  opacity: 0.4;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n\n.section-content {\n  position: absolute;\n  bottom: 0px;\n}\n\n.section-content p {\n  font-size: 1.25em;\n  padding: 0px 20px;\n}\n\n.section-content ion-button {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LXRhZy1kaWFsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDRyxzQkFBQTtBQUNKOztBQUVBO0VBQ0MsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUM7RUFDQyxnQkFBQTtBQUFGIiwiZmlsZSI6ImVtcHR5LXRhZy1kaWFsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvdmVyIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwcHg7XHJcblx0Ym90dG9tOiAwcHg7XHJcblx0bGVmdDogMHB4O1xyXG5cdHJpZ2h0OiAwcHg7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRoZWlnaHQ6IDgwJTtcclxuXHRtYXJnaW46IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG59XHJcblxyXG4uYW5pbWF0aW9uLXBvcCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMHB4O1xyXG5cdGxlZnQ6IDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdG9wYWNpdHk6IDAuNDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dG9wOiAwcHg7XHJcblx0bGVmdDogMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1jb250ZW50IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAwcHg7XHJcblxyXG5cdHAge1xyXG5cdFx0Zm9udC1zaXplOiAxLjI1ZW07XHJcblx0XHRwYWRkaW5nOiAwcHggMjBweDtcclxuXHR9XHJcblxyXG5cdGlvbi1idXR0b24ge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ 4638:
/*!*****************************************************!*\
  !*** ./src/app/media-dialog/media-dialog.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  position: fixed;\n}\nion-toolbar ion-title {\n  padding-inline: 60px;\n  text-align: left;\n}\n.media-image {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: -1;\n}\n.media-image img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.media-video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: -1;\n}\n.media-you-tube {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLWRpYWxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7QUFDSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQU9BLFdBQUE7QUFOSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0FBSEo7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtBQUpKIiwiZmlsZSI6Im1lZGlhLWRpYWxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZTogNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVkaWEtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm1lZGlhLXZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5tZWRpYS15b3UtdHViZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 430:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-dialog/create-dialog.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n    <div class=\"section-intro\">\n          <video class=\"video-intro landscape\" poster=\"/assets/img/poster-landscape.png\" autoplay playsinline muted loop>\n            <source src=\"/assets/video/intro-landscape.webm\" type=\"video/webm\" />\n            <source src=\"/assets/video/intro-landscape.mp4\" type=\"video/mp4\" />\n          </video>\n\n          <video class=\"video-intro portrait\" poster=\"/assets/img/poster-portrait.png\" autoplay playsinline muted loop>\n            <source src=\"/assets/video/intro-portrait.webm\" type=\"video/webm\" />\n            <source src=\"/assets/video/intro-portrait.mp4\" type=\"video/mp4\" />\n          </video>\n    </div>\n\n    <ion-card class=\"prompt-create-tag ion-no-margin\">\n        <ion-card-header>\n            <ion-card-title>{{ 'Dialog_Create.Title' | translate }}</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>{{ 'Dialog_Create.Message' | translate }}</ion-card-content>\n\n        <ion-item lines=\"none\" class=\"ion-no-margin ion-padding-top ion-padding-bottom\">\n            <ion-button [href]=\"downloadHref\" [target]=\"target\" class=\"ion-no-margin\" expand=\"block\" size=\"large\" color=\"primary\" slot=\"start\">{{ 'Common.Button_Casual_Confirm' | translate }}</ion-button>\n            <ion-button (click)=\"close()\" class=\"ion-no-margin\" expand=\"block\" size=\"large\" fill=\"clear\" slot=\"end\">{{ 'Common.Button_Casual_Deny' | translate }}</ion-button>\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-item lines=\"none\" class=\"tag-line ion-no-margin ion-no-padding\">\n        <ion-label class=\"ion-margin-top\" slot=\"end\">{{ 'Dialog_Create.Tag_Line' | translate }}</ion-label>\n    </ion-item>\n</ion-footer>");

/***/ }),

/***/ 6453:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-tag-dialog/empty-tag-dialog.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>{{ 'Dialog_Empty_Tag.Title' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <img class='image-cover landscape' src='/assets/img/cover.png' />\n    <lottie-player class=\"animation-pop\" src=\"/assets/json/40514-pop.json\" background=\"transparent\"  speed=\"0.45\"  loop  autoplay></lottie-player>\n    <div class=\"shadow\"></div>\n\n    <div class=\"section-content\">\n        <ion-text color=\"white\"><p>{{ 'Dialog_Empty_Tag.Description' | translate }}</p></ion-text>\n        <ion-button (click)=\"close()\" color=\"dark\" expand=\"full\">{{ 'Common.Button_Close' | translate }}</ion-button>\n    </div>\n</ion-content>\n\n<ion-footer>\n</ion-footer>\n");

/***/ }),

/***/ 9716:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/media-dialog/media-dialog.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n\t<ion-toolbar class=\"ion-padding-top\">\n\t\t<ion-button (click)=\"close()\" color=\"dark\" fill=\"clear\" slot=\"start\"><ion-icon slot=\"icon-only\" name='arrow-back-outline'></ion-icon></ion-button>\n\t\t<ion-title>{{ title }}</ion-title>\n\t</ion-toolbar>\n\n\t<div *ngIf=\"imageSrc\" class=\"media-image\">\n\t\t<img  [src]=\"imageSrc\" />\n\t</div>\n\n\t<video *ngIf=\"videoSrc\" class=\"media-video\" [poster]=\"videoPoster\" autoplay playsinline loop>\n\t\t<source [src]=\"videoSrc\" [type]=\"mime\" />\n\t</video>\n\n\t<iframe *ngIf=\"youTubeSrc\" [src]=\"youTubeSrc\" class=\"media-you-tube\" [title]=\"title\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n\t<lottie-player *ngIf=\"audioSrc\" class=\"media-audio\" src=\"/assets/json/lf20_s0rmgmyi.json\"  background=\"transparent\"  speed=\"0.75\"  loop autoplay></lottie-player>\n\t<audio *ngIf=\"audioSrc\" autoplay loop>\n\t\t<source [src]=\"audioSrc\" [type]=\"mime\" />\n\t</audio>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map