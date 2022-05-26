(self["webpackChunk_slidebean_html_player"] = self["webpackChunk_slidebean_html_player"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _slidebean_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @slidebean/render */ 87548);



function AppComponent_sb_slide_player_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sb-slide-player", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hiRes", true)("embedded", true)("keyboardEnabled", true)("nonNativeFullScreenEnabled", false)("presentation", ctx_r0.presentation);
} }
function AppComponent_sb_evo_slide_player_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sb-evo-slide-player", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("embedded", true)("keyboardEnabled", true)("nonNativeFullScreenEnabled", false)("presentation", ctx_r1.presentation);
} }
class AppComponent {
    constructor() {
        try {
            const { presentation } = window['__sb__'];
            this.presentation = presentation;
        }
        catch (error) {
            console.error('Fatal: __sb__ not found in window');
            throw error;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[3, "hiRes", "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation", 4, "ngIf"], [3, "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation", 4, "ngIf"], [3, "hiRes", "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation"], [3, "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_sb_slide_player_0_Template, 1, 5, "sb-slide-player", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_sb_evo_slide_player_1_Template, 1, 4, "sb-evo-slide-player", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.presentation == null ? null : ctx.presentation.layoutId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.presentation == null ? null : ctx.presentation.layoutId));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _slidebean_render__WEBPACK_IMPORTED_MODULE_2__.SlidePlayerComponent, _slidebean_render__WEBPACK_IMPORTED_MODULE_2__.EvoSlidePlayerComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\nsb-slide-player[_ngcontent-%COMP%], sb-evo-slide-player[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5zYi1zbGlkZS1wbGF5ZXIsXG5zYi1ldm8tc2xpZGUtcGxheWVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _slidebean_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @slidebean/render */ 87548);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ 20190);
/* harmony import */ var _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @slidebean/pusher */ 17501);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.HammerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__.PusherModule.forRoot({
                key: '',
                authEndpoint: '',
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot(),
            _slidebean_render__WEBPACK_IMPORTED_MODULE_8__.RenderModule,
            _slidebean_render__WEBPACK_IMPORTED_MODULE_8__.RenderEvoModule.forRoot({
                slideHeight: _plugins__WEBPACK_IMPORTED_MODULE_1__.SLIDE_HEIGHT,
                slideWidth: _plugins__WEBPACK_IMPORTED_MODULE_1__.SLIDE_WIDTH,
            }),
            _plugins__WEBPACK_IMPORTED_MODULE_1__.RenderPluginsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.HammerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__.PusherModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _slidebean_render__WEBPACK_IMPORTED_MODULE_8__.RenderModule, _slidebean_render__WEBPACK_IMPORTED_MODULE_8__.RenderEvoModule, _plugins__WEBPACK_IMPORTED_MODULE_1__.RenderPluginsModule] }); })();


/***/ }),

/***/ 20190:
/*!**********************************!*\
  !*** ./src/app/plugins/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPluginsModule": function() { return /* reexport safe */ _render_render_plugins_module__WEBPACK_IMPORTED_MODULE_0__.RenderPluginsModule; },
/* harmony export */   "SLIDE_HEIGHT": function() { return /* reexport safe */ _render_render_plugins_module__WEBPACK_IMPORTED_MODULE_0__.SLIDE_HEIGHT; },
/* harmony export */   "SLIDE_WIDTH": function() { return /* reexport safe */ _render_render_plugins_module__WEBPACK_IMPORTED_MODULE_0__.SLIDE_WIDTH; }
/* harmony export */ });
/* harmony import */ var _render_render_plugins_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/render-plugins.module */ 3826);



/***/ }),

/***/ 3826:
/*!*********************************************************!*\
  !*** ./src/app/plugins/render/render-plugins.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLIDE_HEIGHT": function() { return /* binding */ SLIDE_HEIGHT; },
/* harmony export */   "SLIDE_WIDTH": function() { return /* binding */ SLIDE_WIDTH; },
/* harmony export */   "RenderPluginsModule": function() { return /* binding */ RenderPluginsModule; }
/* harmony export */ });
/* harmony import */ var _slidebean_slide_elements_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @slidebean/slide-elements/heading */ 52736);
/* harmony import */ var _slidebean_slide_elements_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @slidebean/slide-elements/audio */ 5493);
/* harmony import */ var _slidebean_slide_elements_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @slidebean/slide-elements/background */ 32722);
/* harmony import */ var _slidebean_slide_elements_bar_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @slidebean/slide-elements/bar-chart */ 52406);
/* harmony import */ var _slidebean_slide_elements_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @slidebean/slide-elements/circle */ 19791);
/* harmony import */ var _slidebean_slide_elements_code__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @slidebean/slide-elements/code */ 30700);
/* harmony import */ var _slidebean_slide_elements_cover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @slidebean/slide-elements/cover */ 44363);
/* harmony import */ var _slidebean_slide_elements_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @slidebean/slide-elements/footer */ 76694);
/* harmony import */ var _slidebean_slide_elements_funnel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @slidebean/slide-elements/funnel */ 30002);
/* harmony import */ var _slidebean_slide_elements_google_doc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @slidebean/slide-elements/google-doc */ 86421);
/* harmony import */ var _slidebean_slide_elements_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @slidebean/slide-elements/icon */ 86003);
/* harmony import */ var _slidebean_slide_elements_image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @slidebean/slide-elements/image */ 60902);
/* harmony import */ var _slidebean_slide_elements_line__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @slidebean/slide-elements/line */ 92105);
/* harmony import */ var _slidebean_slide_elements_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @slidebean/slide-elements/number */ 52249);
/* harmony import */ var _slidebean_slide_elements_paragraph__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @slidebean/slide-elements/paragraph */ 39923);
/* harmony import */ var _slidebean_slide_elements_pie_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @slidebean/slide-elements/pie-chart */ 6809);
/* harmony import */ var _slidebean_slide_elements_quote__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @slidebean/slide-elements/quote */ 32614);
/* harmony import */ var _slidebean_slide_elements_square__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @slidebean/slide-elements/square */ 79584);
/* harmony import */ var _slidebean_slide_elements_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @slidebean/slide-elements/table */ 89341);
/* harmony import */ var _slidebean_slide_elements_timeline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @slidebean/slide-elements/timeline */ 75490);
/* harmony import */ var _slidebean_slide_elements_venn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @slidebean/slide-elements/venn */ 22384);
/* harmony import */ var _slidebean_slide_elements_video__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @slidebean/slide-elements/video */ 98646);
/* harmony import */ var _slidebean_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @slidebean/chart */ 23265);
/* harmony import */ var _slidebean_noun_project_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @slidebean/noun-project-icon */ 71567);
/* harmony import */ var _slidebean_slide_elements_line_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @slidebean/slide-elements/line-chart */ 97287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



















































const SLIDE_HEIGHT = 1000;
const SLIDE_WIDTH = 1600;
class RenderPluginsModule {
}
RenderPluginsModule.ɵfac = function RenderPluginsModule_Factory(t) { return new (t || RenderPluginsModule)(); };
RenderPluginsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RenderPluginsModule });
RenderPluginsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _slidebean_noun_project_icon__WEBPACK_IMPORTED_MODULE_1__.NounProjectIconModule.forRoot(),
            _slidebean_chart__WEBPACK_IMPORTED_MODULE_2__.ChartModule.forRoot(),
            _slidebean_slide_elements_heading__WEBPACK_IMPORTED_MODULE_3__.HeadingPluginModule.forRoot(),
            _slidebean_slide_elements_audio__WEBPACK_IMPORTED_MODULE_4__.AudioPluginModule.forRoot(),
            _slidebean_slide_elements_background__WEBPACK_IMPORTED_MODULE_5__.BackgroundPluginModule.forRoot(),
            _slidebean_slide_elements_bar_chart__WEBPACK_IMPORTED_MODULE_6__.BarChartPluginModule.forRoot(),
            _slidebean_slide_elements_line_chart__WEBPACK_IMPORTED_MODULE_7__.LineChartPluginModule.forRoot(),
            _slidebean_slide_elements_pie_chart__WEBPACK_IMPORTED_MODULE_8__.PieChartPluginModule.forRoot(),
            _slidebean_slide_elements_circle__WEBPACK_IMPORTED_MODULE_9__.CirclePluginModule.forRoot(),
            _slidebean_slide_elements_code__WEBPACK_IMPORTED_MODULE_10__.CodePluginModule.forRoot(),
            _slidebean_slide_elements_cover__WEBPACK_IMPORTED_MODULE_11__.CoverPluginModule.forRoot(),
            _slidebean_slide_elements_footer__WEBPACK_IMPORTED_MODULE_12__.FooterPluginModule.forRoot(),
            _slidebean_slide_elements_funnel__WEBPACK_IMPORTED_MODULE_13__.FunnelPluginModule.forRoot(),
            _slidebean_slide_elements_google_doc__WEBPACK_IMPORTED_MODULE_14__.GoogleDocPluginModule.forRoot(),
            _slidebean_slide_elements_icon__WEBPACK_IMPORTED_MODULE_15__.IconPluginModule.forRoot(),
            _slidebean_slide_elements_image__WEBPACK_IMPORTED_MODULE_16__.ImagePluginModule.forRoot(),
            _slidebean_slide_elements_line__WEBPACK_IMPORTED_MODULE_17__.LinePluginModule.forRoot({
                slideHeight: SLIDE_HEIGHT,
                slideWidth: SLIDE_WIDTH,
            }),
            _slidebean_slide_elements_number__WEBPACK_IMPORTED_MODULE_18__.NumberPluginModule.forRoot(),
            _slidebean_slide_elements_paragraph__WEBPACK_IMPORTED_MODULE_19__.ParagraphPluginModule.forRoot(),
            _slidebean_slide_elements_quote__WEBPACK_IMPORTED_MODULE_20__.QuotePluginModule.forRoot(),
            _slidebean_slide_elements_square__WEBPACK_IMPORTED_MODULE_21__.SquarePluginModule.forRoot(),
            _slidebean_slide_elements_table__WEBPACK_IMPORTED_MODULE_22__.TablePluginModule.forRoot(),
            _slidebean_slide_elements_timeline__WEBPACK_IMPORTED_MODULE_23__.TimelinePluginModule.forRoot(),
            _slidebean_slide_elements_venn__WEBPACK_IMPORTED_MODULE_24__.VennPluginModule.forRoot(),
            _slidebean_slide_elements_video__WEBPACK_IMPORTED_MODULE_25__.VideoPluginModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RenderPluginsModule, { imports: [_slidebean_noun_project_icon__WEBPACK_IMPORTED_MODULE_1__.NounProjectIconModule, _slidebean_chart__WEBPACK_IMPORTED_MODULE_2__.ChartModule, _slidebean_slide_elements_heading__WEBPACK_IMPORTED_MODULE_3__.HeadingPluginModule, _slidebean_slide_elements_audio__WEBPACK_IMPORTED_MODULE_4__.AudioPluginModule, _slidebean_slide_elements_background__WEBPACK_IMPORTED_MODULE_5__.BackgroundPluginModule, _slidebean_slide_elements_bar_chart__WEBPACK_IMPORTED_MODULE_6__.BarChartPluginModule, _slidebean_slide_elements_line_chart__WEBPACK_IMPORTED_MODULE_7__.LineChartPluginModule, _slidebean_slide_elements_pie_chart__WEBPACK_IMPORTED_MODULE_8__.PieChartPluginModule, _slidebean_slide_elements_circle__WEBPACK_IMPORTED_MODULE_9__.CirclePluginModule, _slidebean_slide_elements_code__WEBPACK_IMPORTED_MODULE_10__.CodePluginModule, _slidebean_slide_elements_cover__WEBPACK_IMPORTED_MODULE_11__.CoverPluginModule, _slidebean_slide_elements_footer__WEBPACK_IMPORTED_MODULE_12__.FooterPluginModule, _slidebean_slide_elements_funnel__WEBPACK_IMPORTED_MODULE_13__.FunnelPluginModule, _slidebean_slide_elements_google_doc__WEBPACK_IMPORTED_MODULE_14__.GoogleDocPluginModule, _slidebean_slide_elements_icon__WEBPACK_IMPORTED_MODULE_15__.IconPluginModule, _slidebean_slide_elements_image__WEBPACK_IMPORTED_MODULE_16__.ImagePluginModule, _slidebean_slide_elements_line__WEBPACK_IMPORTED_MODULE_17__.LinePluginModule, _slidebean_slide_elements_number__WEBPACK_IMPORTED_MODULE_18__.NumberPluginModule, _slidebean_slide_elements_paragraph__WEBPACK_IMPORTED_MODULE_19__.ParagraphPluginModule, _slidebean_slide_elements_quote__WEBPACK_IMPORTED_MODULE_20__.QuotePluginModule, _slidebean_slide_elements_square__WEBPACK_IMPORTED_MODULE_21__.SquarePluginModule, _slidebean_slide_elements_table__WEBPACK_IMPORTED_MODULE_22__.TablePluginModule, _slidebean_slide_elements_timeline__WEBPACK_IMPORTED_MODULE_23__.TimelinePluginModule, _slidebean_slide_elements_venn__WEBPACK_IMPORTED_MODULE_24__.VennPluginModule, _slidebean_slide_elements_video__WEBPACK_IMPORTED_MODULE_25__.VideoPluginModule] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map