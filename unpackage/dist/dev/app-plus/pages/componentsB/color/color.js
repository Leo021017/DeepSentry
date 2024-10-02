"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 666);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!**********************************************************!*\
  !*** D:/AndroidApp/app-demo/main.js?{"type":"appStyle"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 17:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!***********************************************************************!*\
  !*** D:/AndroidApp/app-demo/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/App.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "u-line-1": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "flex": 1
  },
  "u-line-2": {
    "lines": 2,
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "flex": 1
  },
  "u-line-3": {
    "lines": 3,
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "flex": 1
  },
  "u-line-4": {
    "lines": 4,
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "flex": 1
  },
  "u-line-5": {
    "lines": 5,
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "flex": 1
  },
  "u-border": {
    "borderWidth": "0.5",
    "borderColor": "#dadbde",
    "borderStyle": "solid"
  },
  "u-border-top": {
    "borderTopWidth": "0.5",
    "borderColor": "#dadbde",
    "borderTopStyle": "solid"
  },
  "u-border-left": {
    "borderLeftWidth": "0.5",
    "borderColor": "#dadbde",
    "borderLeftStyle": "solid"
  },
  "u-border-right": {
    "borderRightWidth": "0.5",
    "borderColor": "#dadbde",
    "borderRightStyle": "solid"
  },
  "u-border-bottom": {
    "borderBottomWidth": "0.5",
    "borderColor": "#dadbde",
    "borderBottomStyle": "solid"
  },
  "u-border-top-bottom": {
    "borderTopWidth": "0.5",
    "borderBottomWidth": "0.5",
    "borderColor": "#dadbde",
    "borderTopStyle": "solid",
    "borderBottomStyle": "solid"
  },
  "u-reset-button": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundColor": "rgba(0,0,0,0)",
    "borderWidth": 0
  },
  "u-hover-class": {
    "opacity": 0.7
  },
  "u-primary-light": {
    "color": "#ecf5ff"
  },
  "u-warning-light": {
    "color": "#fdf6ec"
  },
  "u-success-light": {
    "color": "#f5fff0"
  },
  "u-error-light": {
    "color": "#fef0f0"
  },
  "u-info-light": {
    "color": "#f4f4f5"
  },
  "u-primary-light-bg": {
    "backgroundColor": "#ecf5ff"
  },
  "u-warning-light-bg": {
    "backgroundColor": "#fdf6ec"
  },
  "u-success-light-bg": {
    "backgroundColor": "#f5fff0"
  },
  "u-error-light-bg": {
    "backgroundColor": "#fef0f0"
  },
  "u-info-light-bg": {
    "backgroundColor": "#f4f4f5"
  },
  "u-primary-dark": {
    "color": "#398ade"
  },
  "u-warning-dark": {
    "color": "#f1a532"
  },
  "u-success-dark": {
    "color": "#53c21d"
  },
  "u-error-dark": {
    "color": "#e45656"
  },
  "u-info-dark": {
    "color": "#767a82"
  },
  "u-primary-dark-bg": {
    "backgroundColor": "#398ade"
  },
  "u-warning-dark-bg": {
    "backgroundColor": "#f1a532"
  },
  "u-success-dark-bg": {
    "backgroundColor": "#53c21d"
  },
  "u-error-dark-bg": {
    "backgroundColor": "#e45656"
  },
  "u-info-dark-bg": {
    "backgroundColor": "#767a82"
  },
  "u-primary-disabled": {
    "color": "#9acafc"
  },
  "u-warning-disabled": {
    "color": "#f9d39b"
  },
  "u-success-disabled": {
    "color": "#a9e08f"
  },
  "u-error-disabled": {
    "color": "#f7b2b2"
  },
  "u-info-disabled": {
    "color": "#c4c6c9"
  },
  "u-primary": {
    "color": "#3c9cff"
  },
  "u-warning": {
    "color": "#f9ae3d"
  },
  "u-success": {
    "color": "#5ac725"
  },
  "u-error": {
    "color": "#f56c6c"
  },
  "u-info": {
    "color": "#909399"
  },
  "u-primary-bg": {
    "backgroundColor": "#3c9cff"
  },
  "u-warning-bg": {
    "backgroundColor": "#f9ae3d"
  },
  "u-success-bg": {
    "backgroundColor": "#5ac725"
  },
  "u-error-bg": {
    "backgroundColor": "#f56c6c"
  },
  "u-info-bg": {
    "backgroundColor": "#909399"
  },
  "u-main-color": {
    "color": "#303133"
  },
  "u-content-color": {
    "color": "#606266"
  },
  "u-tips-color": {
    "color": "#909193"
  },
  "u-light-color": {
    "color": "#c0c4cc"
  },
  "u-block": {
    "paddingTop": "14",
    "paddingRight": "14",
    "paddingBottom": "14",
    "paddingLeft": "14"
  },
  "u-block__section": {
    "marginBottom": "10"
  },
  "u-block__title": {
    "marginTop": "10",
    "fontSize": "15",
    "color": "#606266",
    "marginBottom": "10"
  },
  "u-cell-icon": {
    "width": "36rpx",
    "height": "36rpx",
    "marginRight": "8rpx"
  },
  "u-page": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "40",
    "paddingLeft": "15"
  },
  "u-demo-block": {
    "flex": 1,
    "marginBottom": "23"
  },
  "u-demo-block__content": {
    "flexDirection": "column"
  },
  "u-demo-block__title": {
    "fontSize": "14",
    "color": "#8f9ca2",
    "marginBottom": "8",
    "flexDirection": "row"
  },
  "@VERSION": 2
}

/***/ }),

/***/ 4:
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),

/***/ 666:
/*!*************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/main.js?{"page":"pages%2FcomponentsB%2Fcolor%2Fcolor"} ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_componentsB_color_color_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/componentsB/color/color.nvue?mpType=page */ 667);\n\n        \n        \n        \n        \n        _pages_componentsB_color_color_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_componentsB_color_color_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/componentsB/color/color'\n        _pages_componentsB_color_color_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_componentsB_color_color_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBMEU7QUFDMUUsUUFBUSx1RkFBRztBQUNYLFFBQVEsdUZBQUc7QUFDWCxRQUFRLHVGQUFHO0FBQ1gsZ0JBQWdCLHVGQUFHIiwiZmlsZSI6IjY2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2NvbXBvbmVudHNCL2NvbG9yL2NvbG9yLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2NvbXBvbmVudHNCL2NvbG9yL2NvbG9yJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///666\n");

/***/ }),

/***/ 667:
/*!*****************************************************************************!*\
  !*** D:/AndroidApp/app-demo/pages/componentsB/color/color.nvue?mpType=page ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.nvue?vue&type=template&id=f7f82cba&mpType=page */ 668);\n/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\nvar script = {}\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./color.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 670).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./color.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 670).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"c682bc9c\",\n  false,\n  _color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/componentsB/color/color.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUE4SDtBQUM5SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyxvRUFBMkQ7QUFDL0csYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLG9FQUEyRDtBQUNwSDs7QUFFQTs7QUFFQTtBQUM0TDtBQUM1TCxnQkFBZ0IsbU1BQVU7QUFDMUI7QUFDQSxFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjY2Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY29sb3IubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mN2Y4MmNiYSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbnZhciBzY3JpcHQgPSB7fVxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2NvbG9yLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY29sb3IubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vTXlEb3dubG9hZHMvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJjNjgyYmM5Y1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jb21wb25lbnRzQi9jb2xvci9jb2xvci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///667\n");

/***/ }),

/***/ 668:
/*!***********************************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/pages/componentsB/color/color.nvue?vue&type=template&id=f7f82cba&mpType=page ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./color.nvue?vue&type=template&id=f7f82cba&mpType=page */ 669);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_template_id_f7f82cba_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 669:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/pages/componentsB/color/color.nvue?vue&type=template&id=f7f82cba&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c("view", { staticClass: ["u-page"] }, [
        _c("view", { staticClass: ["u-page__item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-page__item__title"],
              staticStyle: { marginTop: "0" },
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("主色调")]
          ),
          _c("view", { staticClass: ["u-page__item__color-box"] }, [
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#3c9cff" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Primary")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#3c9cff")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#398ade" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Dark")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#398ade")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#9acafc" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Disabled")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#9acafc")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#ecf5ff" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__title",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Light")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__value",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#ecf5ff")]
                ),
              ]
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-page__item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-page__item__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("Error")]
          ),
          _c("view", { staticClass: ["u-page__item__color-box"] }, [
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#f56c6c" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Error")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#f56c6c")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#e45656" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Dark")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#e45656")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#f7b2b2" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Disabled")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#f7b2b2")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#fef0f0" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__title",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Light")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__value",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#fef0f0")]
                ),
              ]
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-page__item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-page__item__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("Warning")]
          ),
          _c("view", { staticClass: ["u-page__item__color-box"] }, [
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#f9ae3d" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Warning")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#f9ae3d")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#f1a532" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Dark")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#f1a532")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#f9d39b" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Disabled")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#f9d39b")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#fdf6ec" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__title",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Light")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__value",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#fdf6ec")]
                ),
              ]
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-page__item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-page__item__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("Info")]
          ),
          _c("view", { staticClass: ["u-page__item__color-box"] }, [
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#909399" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Info")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#909399")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#767a82" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Dark")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#767a82")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#c4c6c9" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Disabled")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#c4c6c9")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#f4f4f5" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__title",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Light")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__value",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#f4f4f5")]
                ),
              ]
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-page__item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-page__item__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("Success")]
          ),
          _c("view", { staticClass: ["u-page__item__color-box"] }, [
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#5ac725" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Success")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#5ac725")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#53c21d" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Dark")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#53c21d")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#a9e08f" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Disabled")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#a9e08f")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#f5fff0" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__title",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("Light")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__value",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#f5fff0")]
                ),
              ]
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-page__item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-page__item__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("文字颜色")]
          ),
          _c("view", { staticClass: ["u-page__item__color-box"] }, [
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#303133" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("主要文字")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#303133")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#606266" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("常规文字")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#606266")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#909399" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("次要文字")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#909399")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#c0c4cc" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("占位文字")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#c0c4cc")]
                ),
              ]
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-page__item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-page__item__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("边框颜色")]
          ),
          _c("view", { staticClass: ["u-page__item__color-box"] }, [
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#9a9998" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("一级边框")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#9a9998")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#b4b3b1" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("二级边框")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#b4b3b1")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#ceccca" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__title"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("三级边框")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["u-page__item__color-box__item__value"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#ceccca")]
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#e7e6e4" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__title",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("四级边框")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__value",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#e7e6e4")]
                ),
              ]
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-page__item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-page__item__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("背景颜色")]
          ),
          _c("view", { staticClass: ["u-page__item__color-box"] }, [
            _c(
              "view",
              {
                staticClass: ["u-page__item__color-box__item"],
                staticStyle: { backgroundColor: "#f3f4f6" },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__title",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("背景颜色")]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: [
                      "u-page__item__color-box__item__value",
                      "u-tips-color",
                    ],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("#f3f4f6")]
                ),
              ]
            ),
          ]),
        ]),
      ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 670:
/*!**************************************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/pages/componentsB/color/color.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./color.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 671);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_color_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 671:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/pages/componentsB/color/color.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "u-page": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15"
  },
  "u-page__item__title": {
    "fontSize": "15",
    "color": "#606266",
    "marginTop": "16",
    "marginBottom": "4"
  },
  "u-page__item__color-box": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "u-page__item__color-box__item": {
    "width": "160rpx",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "5",
    "paddingRight": 0,
    "paddingBottom": "5",
    "paddingLeft": 0,
    "borderRadius": "3"
  },
  "u-page__item__color-box__item__title": {
    "fontSize": "13",
    "color": "#ffffff"
  },
  "u-page__item__color-box__item__value": {
    "fontSize": "14",
    "color": "#ffffff"
  },
  "u-tips-color": {
    "color": "#909193"
  },
  "@VERSION": 2
}

/***/ })

/******/ });