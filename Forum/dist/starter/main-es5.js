(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _dashboard_entries_entries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard/entries/entries.component */
      "./src/app/dashboard/entries/entries.component.ts");
      /* harmony import */


      var _entry_detail_entry_detail_entry_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./entry-detail/entry-detail/entry-detail.component */
      "./src/app/entry-detail/entry-detail/entry-detail.component.ts");
      /* harmony import */


      var _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login/login.component */
      "./src/app/login/login/login.component.ts");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings/settings.component */
      "./src/app/settings/settings.component.ts");

      var routes = [{
        path: '',
        component: _dashboard_entries_entries_component__WEBPACK_IMPORTED_MODULE_2__["EntriesComponent"]
      }, {
        path: 'login',
        component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'entry/:id',
        component: _entry_detail_entry_detail_entry_detail_component__WEBPACK_IMPORTED_MODULE_3__["EntryDetailComponent"]
      }, {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "./src/app/navbar/navbar.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-forum"]],
        decls: 4,
        vars: 0,
        consts: [[1, "wrapper"], [1, "main-panel"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar-cmp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".loading-indicator[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.3;\n}\n\n.spinner[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n\n    position: relative;\n    margin: 100px auto;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #FFF;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n    animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n    0%, 100% { -webkit-transform: scale(0.0) }\n    50% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bounce {\n    0%, 100% {\n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n    } 50% {\n          transform: scale(1.0);\n          -webkit-transform: scale(1.0);\n      }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPOztJQUVQLHNEQUFzRDtJQUN0RCw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVyw4QkFBOEI7SUFDekMsTUFBTSw4QkFBOEI7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQiw2QkFBNkI7SUFDakMsRUFBRTtVQUNJLHFCQUFxQjtVQUNyQiw2QkFBNkI7TUFDakM7QUFDTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5zcGlubmVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xufVxuXG4uZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmRvdWJsZS1ib3VuY2UyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgIH0gNTAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forum',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "./src/app/navbar/navbar.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/dashboard.module */
      "./src/app/dashboard/dashboard.module.ts");
      /* harmony import */


      var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.module */
      "./src/app/login/login.module.ts");
      /* harmony import */


      var _entry_detail_entry_detail_entry_detail_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./entry-detail/entry-detail/entry-detail.module */
      "./src/app/entry-detail/entry-detail/entry-detail.module.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./settings/settings.component */
      "./src/app/settings/settings.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"], _entry_detail_entry_detail_entry_detail_module__WEBPACK_IMPORTED_MODULE_8__["EntryDetailModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__["NavbarComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"], _entry_detail_entry_detail_entry_detail_module__WEBPACK_IMPORTED_MODULE_8__["EntryDetailModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"], _entry_detail_entry_detail_entry_detail_module__WEBPACK_IMPORTED_MODULE_8__["EntryDetailModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__["NavbarComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/dashboard.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardModule */

    /***/
    function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _entries_entries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entries/entries.component */
      "./src/app/dashboard/entries/entries.component.ts");
      /* harmony import */


      var _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./single-entry/single-entry.component */
      "./src/app/dashboard/single-entry/single-entry.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./entry-form/entry-form.component */
      "./src/app/dashboard/entry-form/entry-form.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_entries_entries_component__WEBPACK_IMPORTED_MODULE_2__["EntriesComponent"], _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_3__["SingleEntryComponent"], _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_5__["EntryFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          exports: [_entries_entries_component__WEBPACK_IMPORTED_MODULE_2__["EntriesComponent"], _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_3__["SingleEntryComponent"], _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_5__["EntryFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_entries_entries_component__WEBPACK_IMPORTED_MODULE_2__["EntriesComponent"], _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_3__["SingleEntryComponent"], _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_5__["EntryFormComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
            exports: [_entries_entries_component__WEBPACK_IMPORTED_MODULE_2__["EntriesComponent"], _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_3__["SingleEntryComponent"], _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_5__["EntryFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/entries/entries.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/dashboard/entries/entries.component.ts ***!
      \********************************************************/

    /*! exports provided: EntriesComponent */

    /***/
    function srcAppDashboardEntriesEntriesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntriesComponent", function () {
        return EntriesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_services_forum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/services/forum.service */
      "./src/app/shared/services/forum.service.ts");
      /* harmony import */


      var src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../single-entry/single-entry.component */
      "./src/app/dashboard/single-entry/single-entry.component.ts");
      /* harmony import */


      var _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../entry-form/entry-form.component */
      "./src/app/dashboard/entry-form/entry-form.component.ts");

      function EntriesComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntriesComponent_td_7_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.showAddEntry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntriesComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Leider wurden keine Ergebnisse gefunden! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntriesComponent_single_entry_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "single-entry", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleted", function EntriesComponent_single_entry_13_Template_single_entry_deleted_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.entryDeleted();
          })("openEdit", function EntriesComponent_single_entry_13_Template_single_entry_openEdit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.editEntry($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var e_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", e_r7.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", e_r7.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("creator", e_r7.creator);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", e_r7.id);
        }
      }

      function EntriesComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntriesComponent_div_14_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "entry-form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saved", function EntriesComponent_div_14_Template_entry_form_saved_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.entrySaved();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntriesComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntriesComponent_div_15_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "entry-form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saved", function EntriesComponent_div_15_Template_entry_form_saved_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.entrySaved();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r4.EntryToEdit.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.EntryToEdit.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx_r4.EntryToEdit.text);
        }
      }

      var EntriesComponent = /*#__PURE__*/function () {
        function EntriesComponent(forumSerivce, appstateService) {
          _classCallCheck(this, EntriesComponent);

          this.forumSerivce = forumSerivce;
          this.appstateService = appstateService;
          this.ReadOnlyEntities = [];
          this.Entries = [];
          this.IsUserLoggedIn = false;
          this.IsAddEntryPopupShown = false;
          this.IsEditEntryPopupShown = false;
          this.EntryToEdit = null;
          this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        }

        _createClass(EntriesComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.searchTermSubscription.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.searchTermSubscription = this.searchTerm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(600)).subscribe(function (x) {
              return _this.searchForEntries(x);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.IsUserLoggedIn = this.appstateService.IsUserLoggedIn();
            this.ReadEntries();
          }
        }, {
          key: "showAddEntry",
          value: function showAddEntry() {
            if (!this.IsAddEntryPopupShown) {
              this.IsAddEntryPopupShown = true;
            }
          }
        }, {
          key: "searchForEntries",
          value: function searchForEntries(x) {
            console.log(x); //this.Entries = this.ReadOnlyEntities.filter(x=> x.title.includes(this.searchTerm));
          }
        }, {
          key: "ReadEntries",
          value: function ReadEntries() {
            var _this2 = this;

            this.forumSerivce.getEntries().subscribe(function (entries) {
              _this2.Entries = entries;
              _this2.ReadOnlyEntities = entries;
            });
          }
        }, {
          key: "closePopup",
          value: function closePopup() {
            if (this.IsAddEntryPopupShown) {
              this.IsAddEntryPopupShown = false;
            }

            if (this.IsEditEntryPopupShown) {
              this.IsEditEntryPopupShown = false;
            }
          }
        }, {
          key: "entrySaved",
          value: function entrySaved() {
            this.closePopup();
            this.ReadEntries();
          }
        }, {
          key: "entryDeleted",
          value: function entryDeleted() {
            this.ReadEntries();
          }
        }, {
          key: "editEntry",
          value: function editEntry(event) {
            this.EntryToEdit = this.Entries.find(function (x) {
              return x.id == event;
            });
            this.IsEditEntryPopupShown = true;
          }
        }]);

        return EntriesComponent;
      }();

      EntriesComponent.ɵfac = function EntriesComponent_Factory(t) {
        return new (t || EntriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_4__["AppstateService"]));
      };

      EntriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EntriesComponent,
        selectors: [["app-entries"]],
        decls: 16,
        vars: 6,
        consts: [[1, "card"], [1, "header-table", "header"], [2, "width", "100%"], [1, "title"], ["align", "right", 4, "ngIf"], [1, "card", "enty-container"], [1, "search"], ["name", "searchTerm", "placeholder", "Suchen", 1, "form-control", "search-input", 3, "formControl"], [4, "ngIf"], ["class", "col-md-4 col-sm-4 col-lg-4 col-xs-6", 3, "title", "text", "creator", "id", "deleted", "openEdit", 4, "ngFor", "ngForOf"], ["class", "popup", 4, "ngIf"], ["align", "right"], ["type", "button", "value", "Eintrag hinzuf\xFCgen", 1, "btn", "btn-default", 3, "click"], [1, "col-md-4", "col-sm-4", "col-lg-4", "col-xs-6", 3, "title", "text", "creator", "id", "deleted", "openEdit"], [1, "popup"], [1, "popup-content"], [1, "popup-close", 3, "click"], [3, "saved"], [3, "id", "title", "text", "saved"]],
        template: function EntriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forum-Eintr\xE4ge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EntriesComponent_td_7_Template, 2, 0, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EntriesComponent_div_12_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EntriesComponent_single_entry_13_Template, 1, 4, "single-entry", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EntriesComponent_div_14_Template, 5, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EntriesComponent_div_15_Template, 5, 3, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsUserLoggedIn == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchTerm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Entries.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Entries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsAddEntryPopupShown == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsEditEntryPopupShown == true);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_6__["SingleEntryComponent"], _entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_7__["EntryFormComponent"]],
        styles: [".single-card[_ngcontent-%COMP%]{\r\n    background-color: #f1f1f1;\r\n    border-radius: 1.5rem;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    height: 250px;\r\n}\r\n\r\n.single-entry-footer[_ngcontent-%COMP%]{\r\n    bottom: 20px;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n.enty-container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    display: inline-table;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.header-table[_ngcontent-%COMP%]\r\n{\r\n    margin-bottom: 5px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]\r\n{   \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 100px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n}\r\n\r\n.popup-content[_ngcontent-%COMP%]\r\n{\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 0.75rem;\r\n    width: 50%;\r\n    position: relative;\r\n}\r\n\r\n.popup-close[_ngcontent-%COMP%] {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 5px;\r\n  }\r\n\r\n.popup-close[_ngcontent-%COMP%]:hover, .popup-close[_ngcontent-%COMP%]:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]{\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%]{\r\n    background-color: #f1f1f1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2VudHJpZXMvZW50cmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBOztFQUVFLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0VBQzVDLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDMUQ7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtFQUNWOztBQUVGOztJQUVJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZW50cmllcy9lbnRyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uc2luZ2xlLWVudHJ5LWZvb3RlcntcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW50eS1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRhYmxlXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucG9wdXBcclxueyAgIFxyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG59XHJcblxyXG4ucG9wdXAtY29udGVudFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBvcHVwLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuLnBvcHVwLWNsb3NlOmhvdmVyLFxyXG4ucG9wdXAtY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntriesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-entries',
            templateUrl: './entries.component.html',
            styleUrls: ['./entries.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"]
          }, {
            type: src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_4__["AppstateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/entry-form/entry-form.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/dashboard/entry-form/entry-form.component.ts ***!
      \**************************************************************/

    /*! exports provided: EntryFormComponent */

    /***/
    function srcAppDashboardEntryFormEntryFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryFormComponent", function () {
        return EntryFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/forum.service */
      "./src/app/shared/services/forum.service.ts");
      /* harmony import */


      var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_validation_censorship_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/validation/censorship-validator.directive */
      "./src/app/shared/validation/censorship-validator.directive.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function EntryFormComponent_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Titel ist ein Pflichtfeld ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntryFormComponent_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bitte dr\xFCcke dich etwas besser aus. #GoodVibesOnly ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntryFormComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntryFormComponent_div_8_div_1_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EntryFormComponent_div_8_div_2_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["title"] == null ? null : _r0.controls["title"].hasError("required")) === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["title"] == null ? null : _r0.controls["title"].hasError("censorship")) === true);
        }
      }

      function EntryFormComponent_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Text ist ein Pflichtfeld ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntryFormComponent_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bitte dr\xFCcke dich etwas besser aus. #GoodVibesOnly ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntryFormComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntryFormComponent_div_13_div_1_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EntryFormComponent_div_13_div_2_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["text"] == null ? null : _r0.controls["text"].hasError("required")) === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["text"] == null ? null : _r0.controls["text"].hasError("censorship")) === true);
        }
      }

      var EntryFormComponent = /*#__PURE__*/function () {
        function EntryFormComponent(forumService, appstateService) {
          _classCallCheck(this, EntryFormComponent);

          this.forumService = forumService;
          this.appstateService = appstateService;
          this.EntrySaved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(EntryFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "save",
          value: function save() {
            var _this3 = this;

            var user = this.appstateService.GetUser();

            if (this.id !== null && this.id !== undefined) {
              var newEntry = {
                id: this.id,
                title: this.title,
                text: this.text,
                creator: user.userName,
                creatorId: user.id
              };
              this.forumService.upateEntry(newEntry).subscribe(function (test) {
                console.log(test);

                _this3.EntrySaved.next(newEntry);
              });
            } else {
              var _newEntry = {
                id: null,
                title: this.title,
                text: this.text,
                creator: user.userName,
                creatorId: user.id
              };
              this.forumService.addEntry(_newEntry).subscribe(function (test) {
                console.log(test);

                _this3.EntrySaved.next(_newEntry);
              });
            }
          }
        }]);

        return EntryFormComponent;
      }();

      EntryFormComponent.ɵfac = function EntryFormComponent_Factory(t) {
        return new (t || EntryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__["AppstateService"]));
      };

      EntryFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EntryFormComponent,
        selectors: [["entry-form"]],
        inputs: {
          id: "id",
          title: "title",
          text: "text"
        },
        outputs: {
          EntrySaved: "saved"
        },
        decls: 16,
        vars: 5,
        consts: [[2, "margin-top", "0px"], ["form", "ngForm"], [1, "form-group"], ["name", "title", "type", "text", "censorship", "", "required", "", 1, "entry-input", "form-control", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["name", "text", "type", "text", "rows", "10", "required", "", "censorship", "", 1, "entry-input", "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-default", 3, "disabled", "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]],
        template: function EntryFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Neuen Eintrag hinzuf\xFCgen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Titel:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EntryFormComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EntryFormComponent_div_8_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Text:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EntryFormComponent_Template_textarea_ngModelChange_12_listener($event) {
              return ctx.text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EntryFormComponent_div_13_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryFormComponent_Template_button_click_14_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Speichern");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["title"] == null ? null : _r0.controls["title"].touched) === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["text"] == null ? null : _r0.controls["text"].touched) === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.title || !ctx.text || !_r0.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _shared_validation_censorship_validator_directive__WEBPACK_IMPORTED_MODULE_4__["CensorshipValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".entry-input[_ngcontent-%COMP%]{\r\n    background-color: #f1f1f1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2VudHJ5LWZvcm0vZW50cnktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2VudHJ5LWZvcm0vZW50cnktZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVudHJ5LWlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'entry-form',
            templateUrl: './entry-form.component.html',
            styleUrls: ['./entry-form.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]
          }, {
            type: _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__["AppstateService"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["id"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["title"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["text"]
          }],
          EntrySaved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["saved"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/single-entry/single-entry.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/dashboard/single-entry/single-entry.component.ts ***!
      \******************************************************************/

    /*! exports provided: SingleEntryComponent */

    /***/
    function srcAppDashboardSingleEntrySingleEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleEntryComponent", function () {
        return SingleEntryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var src_app_shared_services_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/forum.service */
      "./src/app/shared/services/forum.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SingleEntryComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleEntryComponent_div_10_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.deleteEntry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SingleEntryComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleEntryComponent_div_11_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.editEntry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/entry", a1];
      };

      var SingleEntryComponent = /*#__PURE__*/function () {
        function SingleEntryComponent(appStateService, forumService) {
          _classCallCheck(this, SingleEntryComponent);

          this.appStateService = appStateService;
          this.forumService = forumService;
          this.EntryDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.EntryEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SingleEntryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var user = this.appStateService.GetUser();
            this.IsSameUser = user !== null && user.userName === this.creator;
          }
        }, {
          key: "deleteEntry",
          value: function deleteEntry() {
            var _this4 = this;

            this.forumService.deleteEntry(this.id).subscribe(function (test) {
              console.log(test);

              _this4.EntryDeleted.next();
            });
          }
        }, {
          key: "editEntry",
          value: function editEntry() {
            this.EntryEdit.next(this.id);
          }
        }]);

        return SingleEntryComponent;
      }();

      SingleEntryComponent.ɵfac = function SingleEntryComponent_Factory(t) {
        return new (t || SingleEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]));
      };

      SingleEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SingleEntryComponent,
        selectors: [["single-entry"]],
        inputs: {
          title: "title",
          text: "text",
          creator: "creator",
          id: "id"
        },
        outputs: {
          EntryDeleted: "deleted",
          EntryEdit: "openEdit"
        },
        decls: 12,
        vars: 8,
        consts: [["id", "single-card", 1, "single-card"], [3, "routerLink"], [2, "margin-top", "1px"], [2, "color", "#666666"], [1, "single-entry-footer"], [1, "created"], ["class", "delete", 3, "click", 4, "ngIf"], ["class", "edit", 3, "click", 4, "ngIf"], [1, "delete", 3, "click"], [1, "ti-trash"], [1, "edit", 3, "click"], [1, "ti-pencil-alt"]],
        template: function SingleEntryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SingleEntryComponent_div_10_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SingleEntryComponent_div_11_Template, 2, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.id));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Erstellt von: ", ctx.creator, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsSameUser == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsSameUser == true);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".single-card[_ngcontent-%COMP%]{\r\n    background-color: #f1f1f1;\r\n    border-radius: 1.5rem;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    height: 250px;\r\n}\r\n\r\n.single-entry-footer[_ngcontent-%COMP%]{\r\n    bottom: 20px;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%]{\r\n    right: 60px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%]:hover{\r\n    color: #68B3C8;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]{\r\n    right: 90px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]:hover{\r\n    color: #68B3C8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NpbmdsZS1lbnRyeS9zaW5nbGUtZW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2luZ2xlLWVudHJ5L3NpbmdsZS1lbnRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLnNpbmdsZS1lbnRyeS1mb290ZXJ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRlbGV0ZXtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5kZWxldGU6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzY4QjNDODtcclxufVxyXG5cclxuLmVkaXR7XHJcbiAgICByaWdodDogOTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZWRpdDpob3ZlcntcclxuICAgIGNvbG9yOiAjNjhCM0M4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleEntryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'single-entry',
            templateUrl: './single-entry.component.html',
            styleUrls: ['./single-entry.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppstateService"]
          }, {
            type: src_app_shared_services_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["title"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["text"]
          }],
          creator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["creator"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["id"]
          }],
          EntryDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["deleted"]
          }],
          EntryEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["openEdit"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/entry-detail/comment-form/comment-form.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/entry-detail/comment-form/comment-form.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CommentFormComponent */

    /***/
    function srcAppEntryDetailCommentFormCommentFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function () {
        return CommentFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var _shared_services_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/entry.service */
      "./src/app/shared/services/entry.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_validation_censorship_comment_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/validation/censorship_comment-validator.directive */
      "./src/app/shared/validation/censorship_comment-validator.directive.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CommentFormComponent_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Text ist ein Pflichtfeld ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CommentFormComponent_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bitte dr\xFCcke dich etwas besser aus. #GoodVibesOnly ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CommentFormComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentFormComponent_div_8_div_1_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentFormComponent_div_8_div_2_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["text"] == null ? null : _r0.controls["text"].hasError("required")) === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["text"] == null ? null : _r0.controls["text"].hasError("censorship_comment")) === true);
        }
      }

      var CommentFormComponent = /*#__PURE__*/function () {
        function CommentFormComponent(appstateService, entryService, route) {
          _classCallCheck(this, CommentFormComponent);

          this.appstateService = appstateService;
          this.entryService = entryService;
          this.route = route;
          this.CommentSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CommentFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.route.paramMap.subscribe(function (params) {
              _this5.entry = Number(params.get('id'));
              console.log(_this5.entry);
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this6 = this;

            var user = this.appstateService.GetUser();

            if (this.id !== null && this.id !== undefined) {
              var newComment = {
                entry: this.entry,
                id: this.id,
                text: this.text,
                creator: user.userName,
                creatorId: user.id
              };
              this.entryService.upateComment(newComment).subscribe(function (test) {
                console.log(test);

                _this6.CommentSaved.next(newComment);
              });
            } else {
              var _newComment = {
                entry: this.entry,
                id: null,
                text: this.text,
                creator: user.userName,
                creatorId: user.id
              };
              this.entryService.addComment(_newComment).subscribe(function (test) {
                console.log(test);

                _this6.CommentSaved.next(_newComment);
              });
            }
          }
        }]);

        return CommentFormComponent;
      }();

      CommentFormComponent.ɵfac = function CommentFormComponent_Factory(t) {
        return new (t || CommentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      CommentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommentFormComponent,
        selectors: [["comment-form"]],
        inputs: {
          entry: "entry",
          id: "id",
          text: "text"
        },
        outputs: {
          CommentSaved: "saved"
        },
        decls: 11,
        vars: 3,
        consts: [[2, "margin-top", "0px"], ["form", "ngForm"], [1, "form-group"], ["name", "text", "type", "text", "rows", "10", "required", "", "censorship_comment", "", 1, "entry-input", "form-control", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "btn", "btn-default", 3, "disabled", "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]],
        template: function CommentFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kommentar hinzuf\xFCgen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Text:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentFormComponent_Template_textarea_ngModelChange_7_listener($event) {
              return ctx.text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CommentFormComponent_div_8_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentFormComponent_Template_button_click_9_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Speichern");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["text"] == null ? null : _r0.controls["text"].touched) === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.text || !_r0.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _shared_validation_censorship_comment_validator_directive__WEBPACK_IMPORTED_MODULE_5__["CensorshipCommentValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".entry-input[_ngcontent-%COMP%]{\n    background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktZGV0YWlsL2NvbW1lbnQtZm9ybS9jb21tZW50LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LWRldGFpbC9jb21tZW50LWZvcm0vY29tbWVudC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW50cnktaW5wdXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'comment-form',
            templateUrl: './comment-form.component.html',
            styleUrls: ['./comment-form.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppstateService"]
          }, {
            type: _shared_services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, {
          entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["entry"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["id"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["text"]
          }],
          CommentSaved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["saved"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/entry-detail/entry-detail/entry-detail.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/entry-detail/entry-detail/entry-detail.component.ts ***!
      \*********************************************************************/

    /*! exports provided: EntryDetailComponent */

    /***/
    function srcAppEntryDetailEntryDetailEntryDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryDetailComponent", function () {
        return EntryDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var _shared_services_entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/services/entry.service */
      "./src/app/shared/services/entry.service.ts");
      /* harmony import */


      var _shared_services_forum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/forum.service */
      "./src/app/shared/services/forum.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../single-comment/single-comment.component */
      "./src/app/entry-detail/single-comment/single-comment.component.ts");
      /* harmony import */


      var _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../comment-form/comment-form.component */
      "./src/app/entry-detail/comment-form/comment-form.component.ts");

      function EntryDetailComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryDetailComponent_td_16_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.showAddComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntryDetailComponent_app_single_comment_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-single-comment", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleted", function EntryDetailComponent_app_single_comment_19_Template_app_single_comment_deleted_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.commentDeleted();
          })("liked", function EntryDetailComponent_app_single_comment_19_Template_app_single_comment_liked_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.commentLiked();
          })("openEdit", function EntryDetailComponent_app_single_comment_19_Template_app_single_comment_openEdit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.editComment($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", c_r6.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("creator", c_r6.creator);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", c_r6.id);
        }
      }

      function EntryDetailComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryDetailComponent_div_20_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "comment-form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saved", function EntryDetailComponent_div_20_Template_comment_form_saved_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.commentSaved();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EntryDetailComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryDetailComponent_div_21_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "comment-form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saved", function EntryDetailComponent_div_21_Template_comment_form_saved_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.commentSaved();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r3.CommentToEdit.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx_r3.CommentToEdit.text);
        }
      }

      var EntryDetailComponent = /*#__PURE__*/function () {
        function EntryDetailComponent(route, appstateService, entryService, forumSerivce) {
          _classCallCheck(this, EntryDetailComponent);

          this.route = route;
          this.appstateService = appstateService;
          this.entryService = entryService;
          this.forumSerivce = forumSerivce;
          this.IsUserLoggedIn = false;
          this.IsAddCommentPopupShown = false;
          this.IsEditCommentPopupShown = false;
          this.CommentToEdit = null;
          this.IsEditEntryPopupShown = false;
          this.Comments = [];
        }

        _createClass(EntryDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.route.paramMap.subscribe(function (params) {
              _this7.entry_id = Number(params.get('id'));
              console.log(_this7.entry_id);
            });
            this.forumSerivce.getEntries().forEach(function (obj) {
              obj.forEach(function (child) {
                if (child.id == _this7.entry_id) {
                  _this7.entry = child;
                  _this7.title = _this7.entry.title;
                  _this7.text = _this7.entry.text;
                  _this7.creator = _this7.entry.creator;
                }
              });
            });
            this.IsUserLoggedIn = this.appstateService.IsUserLoggedIn();
            this.ReadComments();
          }
        }, {
          key: "showAddComment",
          value: function showAddComment() {
            if (!this.IsAddCommentPopupShown) {
              this.IsAddCommentPopupShown = true;
            }
          }
        }, {
          key: "ReadComments",
          value: function ReadComments() {
            var _this8 = this;

            this.entryService.getComment(this.entry_id).subscribe(function (comments) {
              _this8.Comments = comments;
            });
          }
        }, {
          key: "closePopup",
          value: function closePopup() {
            if (this.IsAddCommentPopupShown) {
              this.IsAddCommentPopupShown = false;
            }

            if (this.IsEditCommentPopupShown) {
              this.IsEditCommentPopupShown = false;
            }
          }
        }, {
          key: "commentSaved",
          value: function commentSaved() {
            this.closePopup();
            this.ReadComments();
          }
        }, {
          key: "commentDeleted",
          value: function commentDeleted() {
            this.ReadComments();
          }
        }, {
          key: "commentLiked",
          value: function commentLiked() {
            this.ReadComments();
          }
        }, {
          key: "editComment",
          value: function editComment(event) {
            this.CommentToEdit = this.Comments.find(function (x) {
              return x.id == event;
            });
            this.IsEditCommentPopupShown = true;
          }
        }]);

        return EntryDetailComponent;
      }();

      EntryDetailComponent.ɵfac = function EntryDetailComponent_Factory(t) {
        return new (t || EntryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__["AppstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_forum_service__WEBPACK_IMPORTED_MODULE_4__["ForumService"]));
      };

      EntryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EntryDetailComponent,
        selectors: [["app-entry-detail"]],
        inputs: {
          title: "title",
          text: "text",
          creator: "creator"
        },
        decls: 22,
        vars: 7,
        consts: [["id", "single-card", 1, "single-card"], [2, "margin-top", "1px"], [2, "color", "#666666"], [1, "created"], [1, "card"], [1, "header-table", "header"], [2, "width", "100%"], [1, "title"], ["align", "right", 4, "ngIf"], [1, "card", "enty-container"], ["class", "col-md-12", 3, "text", "creator", "id", "deleted", "liked", "openEdit", 4, "ngFor", "ngForOf"], ["class", "popup", 4, "ngIf"], ["align", "right"], ["type", "button", "value", "Kommentar hinzuf\xFCgen", 1, "btn", "btn-default", 3, "click"], [1, "col-md-12", 3, "text", "creator", "id", "deleted", "liked", "openEdit"], [1, "popup"], [1, "popup-content"], [1, "popup-close", 3, "click"], [3, "saved"], [3, "id", "text", "saved"]],
        template: function EntryDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Kommentare");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EntryDetailComponent_td_16_Template, 2, 0, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EntryDetailComponent_app_single_comment_19_Template, 1, 3, "app-single-comment", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EntryDetailComponent_div_20_Template, 5, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EntryDetailComponent_div_21_Template, 5, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Erstellt von: ", ctx.creator, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsUserLoggedIn == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Comments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsAddCommentPopupShown == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsEditCommentPopupShown == true);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_6__["SingleCommentComponent"], _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_7__["CommentFormComponent"]],
        styles: [".popup[_ngcontent-%COMP%]\n{   \n  position: fixed; \n  z-index: 1; \n  padding-top: 100px; \n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4); \n}\n\n.popup-content[_ngcontent-%COMP%]\n{\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    border-radius: 0.75rem;\n    width: 50%;\n    position: relative;\n}\n\n.popup-close[_ngcontent-%COMP%] {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n.popup-close[_ngcontent-%COMP%]:hover, .popup-close[_ngcontent-%COMP%]:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.single-card[_ngcontent-%COMP%]{\n  background-color: #f1f1f1;\n  border-radius: 1.5rem;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktZGV0YWlsL2VudHJ5LWRldGFpbC9lbnRyeS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtFQUM1QyxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7RUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0FBQzFEOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7RUFDVjs7QUFFRjs7SUFFSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1kZXRhaWwvZW50cnktZGV0YWlsL2VudHJ5LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwXG57ICAgXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4ucG9wdXAtY29udGVudFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucG9wdXAtY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNXB4O1xuICB9XG4gIFxuLnBvcHVwLWNsb3NlOmhvdmVyLFxuLnBvcHVwLWNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2luZ2xlLWNhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-entry-detail',
            templateUrl: './entry-detail.component.html',
            styleUrls: ['./entry-detail.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__["AppstateService"]
          }, {
            type: _shared_services_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"]
          }, {
            type: _shared_services_forum_service__WEBPACK_IMPORTED_MODULE_4__["ForumService"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["title"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["text"]
          }],
          creator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["creator"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/entry-detail/entry-detail/entry-detail.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/entry-detail/entry-detail/entry-detail.module.ts ***!
      \******************************************************************/

    /*! exports provided: EntryDetailModule */

    /***/
    function srcAppEntryDetailEntryDetailEntryDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryDetailModule", function () {
        return EntryDetailModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _entry_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entry-detail.component */
      "./src/app/entry-detail/entry-detail/entry-detail.component.ts");
      /* harmony import */


      var _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../comment-form/comment-form.component */
      "./src/app/entry-detail/comment-form/comment-form.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../single-comment/single-comment.component */
      "./src/app/entry-detail/single-comment/single-comment.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var EntryDetailModule = function EntryDetailModule() {
        _classCallCheck(this, EntryDetailModule);
      };

      EntryDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EntryDetailModule
      });
      EntryDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EntryDetailModule_Factory(t) {
          return new (t || EntryDetailModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EntryDetailModule, {
          declarations: [_entry_detail_component__WEBPACK_IMPORTED_MODULE_2__["EntryDetailComponent"], _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_3__["CommentFormComponent"], _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__["SingleCommentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
          exports: [_entry_detail_component__WEBPACK_IMPORTED_MODULE_2__["EntryDetailComponent"], _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_3__["CommentFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__["SingleCommentComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryDetailModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_entry_detail_component__WEBPACK_IMPORTED_MODULE_2__["EntryDetailComponent"], _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_3__["CommentFormComponent"], _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__["SingleCommentComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            exports: [_entry_detail_component__WEBPACK_IMPORTED_MODULE_2__["EntryDetailComponent"], _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_3__["CommentFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _single_comment_single_comment_component__WEBPACK_IMPORTED_MODULE_5__["SingleCommentComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/entry-detail/single-comment/single-comment.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/entry-detail/single-comment/single-comment.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SingleCommentComponent */

    /***/
    function srcAppEntryDetailSingleCommentSingleCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleCommentComponent", function () {
        return SingleCommentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var _shared_services_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/entry.service */
      "./src/app/shared/services/entry.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SingleCommentComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleCommentComponent_div_11_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.deleteComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SingleCommentComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleCommentComponent_div_12_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.editComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SingleCommentComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleCommentComponent_div_13_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.likeComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SingleCommentComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleCommentComponent_div_14_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.unlikeComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SingleCommentComponent = /*#__PURE__*/function () {
        function SingleCommentComponent(appStateService, entryService) {
          _classCallCheck(this, SingleCommentComponent);

          this.appStateService = appStateService;
          this.entryService = entryService;
          this.CommentDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.CommentLike = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.CommentEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.IsLiked = false;
        }

        _createClass(SingleCommentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.likes = 0;
            var user = this.appStateService.GetUser();
            this.IsSameUser = user !== null && user.userName === this.creator;

            if (user == null) {
              this.IsUser = false;
            } else {
              this.IsUser = true;
              console.log(user.id);
              console.log(this.id);
              this.entryService.getLike(user.id, this.id).forEach(function (obj) {
                obj.forEach(function (child) {
                  _this9.like = child;
                  _this9.IsLiked = true;
                });
              });
            }

            this.entryService.getLikesAll(this.id).forEach(function (obj) {
              obj.forEach(function (child) {
                _this9.likes = _this9.likes + 1;
                console.log(_this9.likes);
              });
              console.log(_this9.likes);
            });
            console.log('Anzahl Likes:');
            console.log(this.likes);
          }
        }, {
          key: "deleteComment",
          value: function deleteComment() {
            var _this10 = this;

            this.entryService.deleteComment(this.id).subscribe(function (test) {
              console.log(test);

              _this10.CommentDeleted.next();
            });
          }
        }, {
          key: "editComment",
          value: function editComment() {
            this.CommentEdit.next(this.id);
          }
        }, {
          key: "likeComment",
          value: function likeComment() {
            var _this11 = this;

            var user = this.appStateService.GetUser();
            var newLike = {
              comment: this.id,
              id: null,
              creator: user.userName,
              creatorId: user.id
            };
            this.entryService.likeComment(newLike).subscribe(function (test) {
              _this11.CommentLike.next();
            });
            console.log('LIKE');
            console.log(this.id);
          }
        }, {
          key: "unlikeComment",
          value: function unlikeComment() {
            var _this12 = this;

            this.entryService.unlikeComment(this.like.id).subscribe(function (test) {
              console.log(test);

              _this12.CommentLike.next();
            });
            console.log('UNLIKE');
            console.log(this.id);
          }
        }]);

        return SingleCommentComponent;
      }();

      SingleCommentComponent.ɵfac = function SingleCommentComponent_Factory(t) {
        return new (t || SingleCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]));
      };

      SingleCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SingleCommentComponent,
        selectors: [["app-single-comment"]],
        inputs: {
          entry: "entry",
          text: "text",
          creator: "creator",
          id: "id",
          likes: "likes"
        },
        outputs: {
          CommentDeleted: "deleted",
          CommentLike: "liked",
          CommentEdit: "openEdit"
        },
        decls: 15,
        vars: 8,
        consts: [["id", "single-card", 1, "single-card"], [2, "color", "#666666"], [1, "created"], ["hidden", ""], ["id", "single-footer", 1, "single-entry-footer"], ["class", "delete", 3, "click", 4, "ngIf"], ["class", "edit", 3, "click", 4, "ngIf"], ["class", "like", 3, "click", 4, "ngIf"], ["class", "unlike", 3, "click", 4, "ngIf"], [1, "delete", 3, "click"], [1, "ti-trash"], [1, "edit", 3, "click"], [1, "ti-pencil-alt"], [1, "like", 3, "click"], [1, "ti-thumb-up"], [1, "unlike", 3, "click"], [1, "ti-thumb-down"]],
        template: function SingleCommentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SingleCommentComponent_div_11_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SingleCommentComponent_div_12_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SingleCommentComponent_div_13_Template, 2, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SingleCommentComponent_div_14_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.creator, " hat kommentiert: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dieser Kommentar gef\xE4llt: ", ctx.likes, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsSameUser == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsSameUser == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsUser == true && ctx.IsSameUser == false && ctx.IsLiked == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsUser == true && ctx.IsSameUser == false && ctx.IsLiked == true);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".single-card[_ngcontent-%COMP%]{\n    background-color: #f1f1f1;\n    border-radius: 1.5rem;\n    padding: 10px;\n    margin-bottom: 10px;\n}\n\n.single-entry-footer[_ngcontent-%COMP%]{\n    bottom: 20px;\n    position: absolute;\n    width: 100%;\n}\n\n.delete[_ngcontent-%COMP%]{\n    right: 60px;\n    position: absolute;\n    bottom: 0px;\n}\n\n.delete[_ngcontent-%COMP%]:hover{\n    color: #68B3C8;\n}\n\n.edit[_ngcontent-%COMP%]{\n    right: 90px;\n    position: absolute;\n    bottom: 0px;\n}\n\n.edit[_ngcontent-%COMP%]:hover{\n    color: #68B3C8;\n}\n\n.like[_ngcontent-%COMP%]{\n    right: 90px;\n    position: absolute;\n    bottom: 0px;\n}\n\n.like[_ngcontent-%COMP%]:hover{\n    color: #68B3C8;\n}\n\n.unlike[_ngcontent-%COMP%]{\n    right: 90px;\n    position: absolute;\n    bottom: 0px;\n}\n\n.unlike[_ngcontent-%COMP%]:hover{\n    color: #68B3C8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktZGV0YWlsL3NpbmdsZS1jb21tZW50L3NpbmdsZS1jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LWRldGFpbC9zaW5nbGUtY29tbWVudC9zaW5nbGUtY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNpbmdsZS1lbnRyeS1mb290ZXJ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmRlbGV0ZXtcbiAgICByaWdodDogNjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG59XG5cbi5kZWxldGU6aG92ZXJ7XG4gICAgY29sb3I6ICM2OEIzQzg7XG59XG5cbi5lZGl0e1xuICAgIHJpZ2h0OiA5MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbn1cblxuLmVkaXQ6aG92ZXJ7XG4gICAgY29sb3I6ICM2OEIzQzg7XG59XG5cbi5saWtle1xuICAgIHJpZ2h0OiA5MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbn1cblxuLmxpa2U6aG92ZXJ7XG4gICAgY29sb3I6ICM2OEIzQzg7XG59XG5cbi51bmxpa2V7XG4gICAgcmlnaHQ6IDkwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xufVxuXG4udW5saWtlOmhvdmVye1xuICAgIGNvbG9yOiAjNjhCM0M4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleCommentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-single-comment',
            templateUrl: './single-comment.component.html',
            styleUrls: ['./single-comment.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppstateService"]
          }, {
            type: _shared_services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]
          }];
        }, {
          entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["entry"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["text"]
          }],
          creator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["creator"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["id"]
          }],
          likes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["likes"]
          }],
          CommentDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["deleted"]
          }],
          CommentLike: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["liked"]
          }],
          CommentEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["openEdit"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login/login.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LoginModule
      });
      LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LoginModule_Factory(t) {
          return new (t || LoginModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/login/login/login.component.ts":
    /*!************************************************!*\
      !*** ./src/app/login/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/services/user.service */
      "./src/app/shared/services/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function LoginComponent_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_8_div_1_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0 == null ? null : _r0.controls["inputUsername"] == null ? null : _r0.controls["inputUsername"].errors.required);
        }
      }

      function LoginComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0 == null ? null : _r0.controls["inputPassword"] == null ? null : _r0.controls["inputPassword"].errors.required);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(appstateService, userService, router) {
          _classCallCheck(this, LoginComponent);

          this.appstateService = appstateService;
          this.userService = userService;
          this.router = router;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.appstateService.IsUserLoggedIn()) {
              this.router.navigate(['/']);
            }
          }
        }, {
          key: "signInUser",
          value: function signInUser() {
            var _this13 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('username', this.username).set('password', this.password);
            this.userService.getUser(params).subscribe(function (users) {
              // If user is not found show error message
              if (users.length === 0) {
                console.error('No user found');

                _this13.showErrorDiv('User / Password combination not found');

                return;
              }

              _this13.clearErrorDiv(); // Set user information in appstateService


              _this13.appstateService.SetUser(users[0].id, users[0].username);

              _this13.router.navigate(['/']);
            }, function (errResp) {
              console.error('Error loading user', errResp);
            });
          }
        }, {
          key: "registerUser",
          value: function registerUser() {
            var _this14 = this;

            var getParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('username', this.username);
            this.userService.getUser(getParams).subscribe(function (users) {
              // If user with same username is found, show error message
              if (users.length > 0) {
                console.error('Username already in use');

                _this14.showErrorDiv('Username already in use');

                return;
              }

              _this14.userService.addUser(_this14.username, _this14.password).subscribe(function (user) {
                _this14.clearErrorDiv(); // Set user information in appstateService


                _this14.appstateService.SetUser(user.id, user.username);

                _this14.router.navigate(['/']);
              }, function (errResp) {
                console.error('Error creating user', errResp);
              });
            }, function (errResp) {
              console.error('Error loading user', errResp);
            });
          }
        }, {
          key: "clearErrorDiv",
          value: function clearErrorDiv() {
            document.getElementById('errorDiv').getElementsByTagName('p')[0].innerHTML = '';
            document.getElementById('errorDiv').classList.add('hidden');
          }
        }, {
          key: "showErrorDiv",
          value: function showErrorDiv(message) {
            document.getElementById('errorDiv').getElementsByTagName('p')[0].innerHTML = message;
            document.getElementById('errorDiv').classList.remove('hidden');
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__["AppstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 26,
        vars: 6,
        consts: [[1, "container"], ["form", "ngForm"], ["for", "inputUsername", 1, "sr-only"], ["type", "text", "id", "inputUsername", "name", "inputUsername", "placeholder", "Username", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "name", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "errorDiv", "role", "alert", 1, "alert", "alert-danger", "hidden"], ["type", "button", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 3, "click"], [1, "row"], [1, "col-md-6"], [1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "alert", "alert-danger"], [4, "ngIf"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_15_listener() {
              return ctx.clearErrorDiv();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User / Password combination not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
              return ctx.signInUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
              return ctx.registerUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["inputUsername"] == null ? null : _r0.controls["inputUsername"].invalid) && ((_r0 == null ? null : _r0.controls["inputUsername"] == null ? null : _r0.controls["inputUsername"].dirty) || (_r0 == null ? null : _r0.controls["inputUsername"] == null ? null : _r0.controls["inputUsername"].touched)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.controls["inputPassword"] == null ? null : _r0.controls["inputPassword"].invalid) && ((_r0 == null ? null : _r0.controls["inputPassword"] == null ? null : _r0.controls["inputPassword"].dirty) || (_r0 == null ? null : _r0.controls["inputPassword"] == null ? null : _r0.controls["inputPassword"].touched)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (_r0 == null ? null : _r0.controls["inputUsername"] == null ? null : _r0.controls["inputUsername"].invalid) || (_r0 == null ? null : _r0.controls["inputPassword"] == null ? null : _r0.controls["inputPassword"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (_r0 == null ? null : _r0.controls["inputUsername"] == null ? null : _r0.controls["inputUsername"].invalid) || (_r0 == null ? null : _r0.controls["inputPassword"] == null ? null : _r0.controls["inputPassword"].invalid));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__["AppstateService"]
          }, {
            type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/navbar/navbar.component.ts":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NavbarComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login/Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_8_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.logOutUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Log out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hallo ", ctx_r1.UserName, " ");
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(appstateService, router) {
          _classCallCheck(this, NavbarComponent);

          this.appstateService = appstateService;
          this.router = router;
          this.isUserLoggedIn = false;
          this.UserName = '';
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userLoggedInSubscription.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.userLoggedInSubscription = this.appstateService.UserChanged.subscribe(function (value) {
              console.log(value);
              _this15.isUserLoggedIn = value !== null && value.id !== 0;
              _this15.UserName = value.userName;
            });
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            var body = document.getElementsByTagName('body')[0];

            if (this.sidebarVisible === false) {
              body.classList.add('nav-open');
              this.sidebarVisible = true;
            } else {
              this.sidebarVisible = false;
              body.classList.remove('nav-open');
            }
          }
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            this.appstateService.SetUser(0, null);
            this.router.navigate(['/login']);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar-cmp"]],
        decls: 9,
        vars: 2,
        consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["routerLink", "/", 1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], [4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["routerLink", "/login"], [1, "ti-user"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], ["routerLink", "/settings"], [3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "StackUnderStop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_li_7_Template, 5, 0, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_li_8_Template, 12, 1, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn === true);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar-cmp',
            templateUrl: 'navbar.component.html'
          }]
        }], function () {
          return [{
            type: _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppstateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/settings/settings.component.ts":
    /*!************************************************!*\
      !*** ./src/app/settings/settings.component.ts ***!
      \************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function srcAppSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/appstate.service */
      "./src/app/shared/services/appstate.service.ts");
      /* harmony import */


      var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/services/user.service */
      "./src/app/shared/services/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_validation_new_password_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/validation/new-password.directive */
      "./src/app/shared/validation/new-password.directive.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SettingsComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Willst du deinen kompletten account l\xF6schen?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_32_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.increaseDeletionState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Account l\xF6schen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingsComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bist du dir sicher?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_33_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.resetDeletionState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nein");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_33_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.increaseDeletionState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingsComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Komm schon! Bist du dir wirklich sicher?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_34_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.resetDeletionState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nein");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_34_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.deleteAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "JA!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(appstateService, userService, router) {
          _classCallCheck(this, SettingsComponent);

          this.appstateService = appstateService;
          this.userService = userService;
          this.router = router;
          this.deletionState = 0;
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.appstateService.IsUserLoggedIn()) {
              this.router.navigate(['/login']);
            }
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            var _this16 = this;

            // Check if both password values match
            if (this.passwordNew !== this.passwordNew2) {
              this.showMessageDiv('passwordErrorDiv', 'The two password values must match');
              return;
            }

            var curUser = this.appstateService.GetUser();
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('username', curUser.userName).set('password', this.passwordNew);
            this.userService.updateUser(curUser.id, params).subscribe(function (user) {
              _this16.showMessageDiv('passwordSuccessDiv');

              console.log(user);
            }, function (errResp) {
              console.error('Error creating user', errResp);
            });
          }
        }, {
          key: "deleteAccount",
          value: function deleteAccount() {
            var _this17 = this;

            console.log('delete start');
            this.userService.deleteUser(this.appstateService.GetUser().id).subscribe(function (user) {
              console.log(user);

              _this17.appstateService.SetUser(0, null);

              _this17.router.navigate(['/login']);
            }, function (errResp) {
              console.error('Error deleting user', errResp);
            });
          }
        }, {
          key: "increaseDeletionState",
          value: function increaseDeletionState() {
            this.deletionState++;
          }
        }, {
          key: "resetDeletionState",
          value: function resetDeletionState() {
            this.deletionState = 0;
          }
        }, {
          key: "hideMessageDiv",
          value: function hideMessageDiv(elementId) {
            var doClearDiv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (doClearDiv) {
              document.getElementById(elementId).getElementsByTagName('p')[0].innerHTML = '';
            }

            document.getElementById(elementId).classList.add('hidden');
          }
        }, {
          key: "showMessageDiv",
          value: function showMessageDiv(elementId) {
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (message) {
              document.getElementById(elementId).getElementsByTagName('p')[0].innerHTML = message;
            }

            document.getElementById(elementId).classList.remove('hidden');
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__["AppstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        decls: 35,
        vars: 6,
        consts: [[1, "container"], [1, "panel", "panel-default"], [1, "panel-heading"], [1, "panel-body"], ["form", "ngForm"], ["for", "inputNewPassword", 1, "sr-only"], ["type", "password", "id", "inputNewPassword", "name", "inputNewPassword", "placeholder", "New password", "required", "", "autofocus", "", "appNewPassword", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputNewPassword2", 1, "sr-only"], ["type", "password", "id", "inputNewPassword2", "name", "inputNewPassword2", "placeholder", "Repeat new password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "passwordErrorDiv", "role", "alert", 1, "alert", "alert-danger", "hidden"], ["type", "button", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 3, "click"], ["id", "passwordSuccessDiv", "role", "alert", 1, "alert", "alert-success", "hidden"], [1, "btn", "btn-primary", "pull-right", 3, "disabled", "click"], ["class", "panel-body", 4, "ngIf"], [1, "col-md-8"], [1, "col-md-4"], [1, "btn", "btn-primary", "pull-right", 3, "click"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.passwordNew = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.passwordNew2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_span_click_17_listener() {
              return ctx.hideMessageDiv("passwordErrorDiv", true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User / Password combination not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_span_click_23_listener() {
              return ctx.hideMessageDiv("passwordSuccessDiv");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password successfully updated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_27_listener() {
              return ctx.changePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Change password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SettingsComponent_div_32_Template, 6, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SettingsComponent_div_33_Template, 8, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SettingsComponent_div_34_Template, 8, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordNew);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordNew2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (_r0 == null ? null : _r0.controls["inputNewPassword"] == null ? null : _r0.controls["inputNewPassword"].invalid) || (_r0 == null ? null : _r0.controls["inputNewPassword2"] == null ? null : _r0.controls["inputNewPassword2"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletionState == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletionState == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletionState == 2);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _shared_validation_new_password_directive__WEBPACK_IMPORTED_MODULE_6__["NewPasswordDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_2__["AppstateService"]
          }, {
            type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/appstate.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/services/appstate.service.ts ***!
      \*****************************************************/

    /*! exports provided: AppstateService */

    /***/
    function srcAppSharedServicesAppstateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppstateService", function () {
        return AppstateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var AppstateService = /*#__PURE__*/function () {
        function AppstateService() {
          _classCallCheck(this, AppstateService);

          this.UserChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.UserBehavior = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }

        _createClass(AppstateService, [{
          key: "IsUserLoggedIn",
          value: function IsUserLoggedIn() {
            var user = this.GetUser();
            return user !== null && user.id !== 0;
          }
        }, {
          key: "GetUser",
          value: function GetUser() {
            return this.UserBehavior.getValue();
          }
        }, {
          key: "SetUser",
          value: function SetUser(userId, name) {
            var value = {
              id: userId,
              userName: name
            };
            this.UserBehavior.next(value);
            this.UserChanged.next(value);
          }
        }]);

        return AppstateService;
      }();

      AppstateService.ɵfac = function AppstateService_Factory(t) {
        return new (t || AppstateService)();
      };

      AppstateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppstateService,
        factory: AppstateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppstateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/defaultforum.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/services/defaultforum.service.ts ***!
      \*********************************************************/

    /*! exports provided: DefaultForumService */

    /***/
    function srcAppSharedServicesDefaultforumServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultForumService", function () {
        return DefaultForumService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DefaultForumService = /*#__PURE__*/function () {
        function DefaultForumService(http) {
          _classCallCheck(this, DefaultForumService);

          this.http = http;
          this.BaseUrl = "http://localhost:3000/";
        }

        _createClass(DefaultForumService, [{
          key: "getBlacklistedItems",
          value: function getBlacklistedItems() {
            var url = this.BaseUrl + 'blacklist';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.get(url, {
              headers: headers
            });
          }
        }, {
          key: "upateEntry",
          value: function upateEntry(entry) {
            var url = this.BaseUrl + 'entries/' + entry.id;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.put(url, entry, {
              headers: headers
            });
          }
        }, {
          key: "addEntry",
          value: function addEntry(entry) {
            var url = this.BaseUrl + 'entries';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.post(url, entry, {
              headers: headers
            });
          }
        }, {
          key: "getEntries",
          value: function getEntries() {
            var url = this.BaseUrl + 'entries';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.get(url, {
              headers: headers
            });
          }
        }, {
          key: "deleteEntry",
          value: function deleteEntry(id) {
            var url = this.BaseUrl + "entries/" + id;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http["delete"](url, {
              headers: headers
            });
          }
        }]);

        return DefaultForumService;
      }();

      DefaultForumService.ɵfac = function DefaultForumService_Factory(t) {
        return new (t || DefaultForumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      DefaultForumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DefaultForumService,
        factory: DefaultForumService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultForumService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/entry.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/entry.service.ts ***!
      \**************************************************/

    /*! exports provided: EntryService */

    /***/
    function srcAppSharedServicesEntryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryService", function () {
        return EntryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var EntryService = /*#__PURE__*/function () {
        function EntryService(http) {
          _classCallCheck(this, EntryService);

          this.http = http;
          this.BaseUrl = "http://localhost:3000/";
        }

        _createClass(EntryService, [{
          key: "upateComment",
          value: function upateComment(comment) {
            var url = this.BaseUrl + 'comments/' + comment.id;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.put(url, comment, {
              headers: headers
            });
          }
        }, {
          key: "addComment",
          value: function addComment(comment) {
            var url = this.BaseUrl + 'comments';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.post(url, comment, {
              headers: headers
            });
          }
        }, {
          key: "getComment",
          value: function getComment(entry_id) {
            var url = this.BaseUrl + 'comments?entry=' + entry_id;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.get(url, {
              headers: headers
            });
          }
        }, {
          key: "getLike",
          value: function getLike(user_id, commend_id) {
            var url = this.BaseUrl + 'likes?comment=' + commend_id + '&creatorId=' + user_id;
            console.log(url);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.get(url, {
              headers: headers
            });
          }
        }, {
          key: "getLikesAll",
          value: function getLikesAll(commend_id) {
            var url = this.BaseUrl + 'likes?comment=' + commend_id;
            console.log(url);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.get(url, {
              headers: headers
            });
          }
        }, {
          key: "likeComment",
          value: function likeComment(like) {
            var url = this.BaseUrl + 'likes';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.post(url, like, {
              headers: headers
            });
          }
        }, {
          key: "unlikeComment",
          value: function unlikeComment(id) {
            var url = this.BaseUrl + "likes/" + id;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http["delete"](url, {
              headers: headers
            });
          }
        }, {
          key: "deleteComment",
          value: function deleteComment(id) {
            var url = this.BaseUrl + "comments/" + id;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http["delete"](url, {
              headers: headers
            });
          }
        }]);

        return EntryService;
      }();

      EntryService.ɵfac = function EntryService_Factory(t) {
        return new (t || EntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      EntryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EntryService,
        factory: EntryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/forum.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/forum.service.ts ***!
      \**************************************************/

    /*! exports provided: ForumService */

    /***/
    function srcAppSharedServicesForumServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForumService", function () {
        return ForumService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _defaultforum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./defaultforum.service */
      "./src/app/shared/services/defaultforum.service.ts");

      var ForumService = function ForumService() {
        _classCallCheck(this, ForumService);
      };

      ForumService.ɵfac = function ForumService_Factory(t) {
        return new (t || ForumService)();
      };

      ForumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ForumService,
        factory: function factory(t) {
          return _defaultforum_service__WEBPACK_IMPORTED_MODULE_1__["DefaultForumService"].ɵfac(t);
        },
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root',
            useClass: _defaultforum_service__WEBPACK_IMPORTED_MODULE_1__["DefaultForumService"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/user.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/user.service.ts ***!
      \*************************************************/

    /*! exports provided: UserService */

    /***/
    function srcAppSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.url = 'http://localhost:3000/users';
        }

        _createClass(UserService, [{
          key: "getUser",
          value: function getUser(params) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
            return this.http.get(this.url, {
              headers: headers,
              params: params
            });
          }
        }, {
          key: "addUser",
          value: function addUser(username, password) {
            var newUser = {
              username: username,
              password: password
            };
            return this.http.post(this.url, newUser);
          }
        }, {
          key: "updateUser",
          value: function updateUser(userId, params) {
            return this.http.put(this.url + '/' + userId, params);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(userId) {
            return this.http["delete"](this.url + '/' + userId);
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _validation_new_password_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./validation/new-password.directive */
      "./src/app/shared/validation/new-password.directive.ts");
      /* harmony import */


      var _validation_censorship_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./validation/censorship-validator.directive */
      "./src/app/shared/validation/censorship-validator.directive.ts");
      /* harmony import */


      var _validation_censorship_comment_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./validation/censorship_comment-validator.directive */
      "./src/app/shared/validation/censorship_comment-validator.directive.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_validation_new_password_directive__WEBPACK_IMPORTED_MODULE_2__["NewPasswordDirective"], _validation_censorship_validator_directive__WEBPACK_IMPORTED_MODULE_3__["CensorshipValidatorDirective"], _validation_censorship_comment_validator_directive__WEBPACK_IMPORTED_MODULE_4__["CensorshipCommentValidatorDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_validation_new_password_directive__WEBPACK_IMPORTED_MODULE_2__["NewPasswordDirective"], _validation_censorship_validator_directive__WEBPACK_IMPORTED_MODULE_3__["CensorshipValidatorDirective"], _validation_censorship_comment_validator_directive__WEBPACK_IMPORTED_MODULE_4__["CensorshipCommentValidatorDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_validation_new_password_directive__WEBPACK_IMPORTED_MODULE_2__["NewPasswordDirective"], _validation_censorship_validator_directive__WEBPACK_IMPORTED_MODULE_3__["CensorshipValidatorDirective"], _validation_censorship_comment_validator_directive__WEBPACK_IMPORTED_MODULE_4__["CensorshipCommentValidatorDirective"]],
            exports: [_validation_new_password_directive__WEBPACK_IMPORTED_MODULE_2__["NewPasswordDirective"], _validation_censorship_validator_directive__WEBPACK_IMPORTED_MODULE_3__["CensorshipValidatorDirective"], _validation_censorship_comment_validator_directive__WEBPACK_IMPORTED_MODULE_4__["CensorshipCommentValidatorDirective"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/validation/censorship-validator.directive.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/validation/censorship-validator.directive.ts ***!
      \*********************************************************************/

    /*! exports provided: CensorshipValidatorDirective */

    /***/
    function srcAppSharedValidationCensorshipValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CensorshipValidatorDirective", function () {
        return CensorshipValidatorDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_forum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/forum.service */
      "./src/app/shared/services/forum.service.ts");

      var CensorshipValidatorDirective = /*#__PURE__*/function () {
        function CensorshipValidatorDirective(forumService) {
          _classCallCheck(this, CensorshipValidatorDirective);

          this.forumService = forumService;
        }

        _createClass(CensorshipValidatorDirective, [{
          key: "validate",
          value: function validate(control) {
            return this.forumService.getBlacklistedItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              var text = control.value;
              var hasError;

              for (var i = 0; i < response.length; i++) {
                if (text.includes(response[i].value)) {
                  return {
                    'censorship': true
                  };
                }
              }

              return null;
            }));
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {}
        }]);

        return CensorshipValidatorDirective;
      }();

      CensorshipValidatorDirective.ɵfac = function CensorshipValidatorDirective_Factory(t) {
        return new (t || CensorshipValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"]));
      };

      CensorshipValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CensorshipValidatorDirective,
        selectors: [["", "censorship", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"],
          useExisting: CensorshipValidatorDirective,
          multi: true
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CensorshipValidatorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[censorship]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"],
              useExisting: CensorshipValidatorDirective,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _services_forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/validation/censorship_comment-validator.directive.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/validation/censorship_comment-validator.directive.ts ***!
      \*****************************************************************************/

    /*! exports provided: CensorshipCommentValidatorDirective */

    /***/
    function srcAppSharedValidationCensorship_commentValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CensorshipCommentValidatorDirective", function () {
        return CensorshipCommentValidatorDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_forum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/forum.service */
      "./src/app/shared/services/forum.service.ts");

      var CensorshipCommentValidatorDirective = /*#__PURE__*/function () {
        function CensorshipCommentValidatorDirective(forumService) {
          _classCallCheck(this, CensorshipCommentValidatorDirective);

          this.forumService = forumService;
        }

        _createClass(CensorshipCommentValidatorDirective, [{
          key: "validate",
          value: function validate(control) {
            return this.forumService.getBlacklistedItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              var text = control.value;
              var hasError;

              for (var i = 0; i < response.length; i++) {
                if (text.includes(response[i].value)) {
                  return {
                    'censorship_comment': true
                  };
                }
              }

              return null;
            }));
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {}
        }]);

        return CensorshipCommentValidatorDirective;
      }();

      CensorshipCommentValidatorDirective.ɵfac = function CensorshipCommentValidatorDirective_Factory(t) {
        return new (t || CensorshipCommentValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"]));
      };

      CensorshipCommentValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CensorshipCommentValidatorDirective,
        selectors: [["", "censorship_comment", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"],
          useExisting: CensorshipCommentValidatorDirective,
          multi: true
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CensorshipCommentValidatorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[censorship_comment]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"],
              useExisting: CensorshipCommentValidatorDirective,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _services_forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/validation/new-password.directive.ts":
    /*!*************************************************************!*\
      !*** ./src/app/shared/validation/new-password.directive.ts ***!
      \*************************************************************/

    /*! exports provided: NewPasswordDirective */

    /***/
    function srcAppSharedValidationNewPasswordDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPasswordDirective", function () {
        return NewPasswordDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var NewPasswordDirective = /*#__PURE__*/function () {
        function NewPasswordDirective() {
          _classCallCheck(this, NewPasswordDirective);
        }

        _createClass(NewPasswordDirective, [{
          key: "validate",
          value: function validate(c) {
            var validCities = ['Hamburg', 'Graz'];
            console.log(c.value);

            if (c.value && validCities.indexOf(c.value) === -1) {
              return {
                city: {
                  actualValue: c.value,
                  validCities: validCities
                }
              };
            }

            return null;
          }
        }]);

        return NewPasswordDirective;
      }();

      NewPasswordDirective.ɵfac = function NewPasswordDirective_Factory(t) {
        return new (t || NewPasswordDirective)();
      };

      NewPasswordDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NewPasswordDirective,
        selectors: [["", "appNewPassword", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
          useExisting: NewPasswordDirective,
          multi: true
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPasswordDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appNewPassword]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
              useExisting: NewPasswordDirective,
              multi: true
            }]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Git\WEW-Forum\Forum\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map