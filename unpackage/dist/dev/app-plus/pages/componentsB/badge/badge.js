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
/******/ 	return __webpack_require__(__webpack_require__.s = 610);
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

/***/ 13:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ 465:
/*!**********************************************************************************!*\
  !*** D:/AndroidApp/app-demo/uni_modules/uview-ui/components/u-badge/u-badge.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-badge.vue?vue&type=template&id=13728ffe&scoped=true& */ 466);\n/* harmony import */ var _u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-badge.vue?vue&type=script&lang=js& */ 468);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./u-badge.vue?vue&type=style&index=0&id=13728ffe&lang=scss&scoped=true& */ 471).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./u-badge.vue?vue&type=style&index=0&id=13728ffe&lang=scss&scoped=true& */ 471).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"13728ffe\",\n  \"8ec95b82\",\n  false,\n  _u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uview-ui/components/u-badge/u-badge.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtGQUF5RTtBQUM3SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0ZBQXlFO0FBQ2xJOztBQUVBOztBQUVBO0FBQytMO0FBQy9MLGdCQUFnQixtTUFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0NjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3UtYmFkZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzNzI4ZmZlJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdS1iYWRnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3UtYmFkZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdS1iYWRnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzcyOGZmZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3UtYmFkZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM3MjhmZmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vTXlEb3dubG9hZHMvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMzcyOGZmZVwiLFxuICBcIjhlYzk1YjgyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1iYWRnZS91LWJhZGdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///465\n");

/***/ }),

/***/ 466:
/*!*****************************************************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/uni_modules/uview-ui/components/u-badge/u-badge.vue?vue&type=template&id=13728ffe&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-badge.vue?vue&type=template&id=13728ffe&scoped=true& */ 467);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_template_id_13728ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 467:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/uni_modules/uview-ui/components/u-badge/u-badge.vue?vue&type=template&id=13728ffe&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.show &&
    ((Number(_vm.value) === 0 ? _vm.showZero : true) || _vm.isDot)
    ? _c(
        "u-text",
        {
          staticClass: ["u-badge"],
          class: [
            _vm.isDot ? "u-badge--dot" : "u-badge--not-dot",
            _vm.inverted && "u-badge--inverted",
            _vm.shape === "horn" && "u-badge--horn",
            "u-badge--" + _vm.type + (_vm.inverted ? "--inverted" : ""),
          ],
          style: [_vm.$u.addStyle(_vm.customStyle), _vm.badgeStyle],
          appendAsTree: true,
          attrs: { append: "tree" },
        },
        [_vm._v(_vm._s(_vm.isDot ? "" : _vm.showValue))]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 468:
/*!***********************************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/uni_modules/uview-ui/components/u-badge/u-badge.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-badge.vue?vue&type=script&lang=js& */ 469);\n/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBmLENBQWdCLDZnQkFBRyxFQUFDIiwiZmlsZSI6IjQ2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vTXlEb3dubG9hZHMvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uL015RG93bmxvYWRzL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uL015RG93bmxvYWRzL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91LWJhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9NeURvd25sb2Fkcy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vTXlEb3dubG9hZHMvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vTXlEb3dubG9hZHMvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3UtYmFkZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///468\n");

/***/ }),

/***/ 469:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/uni_modules/uview-ui/components/u-badge/u-badge.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 13);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 470));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * badge 徽标数\n * @description 该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。\n * @tutorial https://uviewui.com/components/badge.html\n * \n * @property {Boolean} \t\t\tisDot \t\t是否显示圆点 （默认 false ）\n * @property {String | Number} \tvalue \t\t显示的内容\n * @property {Boolean} \t\t\tshow \t\t是否显示 （默认 true ）\n * @property {String | Number} \tmax \t\t最大值，超过最大值会显示 '{max}+'  （默认999）\n * @property {String} \t\t\ttype \t\t主题类型，error|warning|success|primary （默认 'error' ）\n * @property {Boolean} \t\t\tshowZero\t当数值为 0 时，是否展示 Badge （默认 false ）\n * @property {String} \t\t\tbgColor \t背景颜色，优先级比type高，如设置，type参数会失效\n * @property {String} \t\t\tcolor \t\t字体颜色 （默认 '#ffffff' ）\n * @property {String} \t\t\tshape \t\t徽标形状，circle-四角均为圆角，horn-左下角为直角 （默认 'circle' ）\n * @property {String} \t\t\tnumberType\t设置数字的显示方式，overflow|ellipsis|limit  （默认 'overflow' ）\n * @property {Array}} \t\t\toffset\t\t设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效\n * @property {Boolean} \t\t\tinverted\t是否反转背景和字体颜色（默认 false ）\n * @property {Boolean} \t\t\tabsolute\t是否绝对定位（默认 false ）\n * @property {Object}\t\t\tcustomStyle\t定义需要用到的外部样式\n * @example <u-badge :type=\"type\" :count=\"count\"></u-badge>\n */\nvar _default = {\n  name: 'u-badge',\n  mixins: [uni.$u.mpMixin, _props.default, uni.$u.mixin],\n  computed: {\n    // 是否将badge中心与父组件右上角重合\n    boxStyle: function boxStyle() {\n      var style = {};\n      return style;\n    },\n    // 整个组件的样式\n    badgeStyle: function badgeStyle() {\n      var style = {};\n      if (this.color) {\n        style.color = this.color;\n      }\n      if (this.bgColor && !this.inverted) {\n        style.backgroundColor = this.bgColor;\n      }\n      if (this.absolute) {\n        style.position = 'absolute';\n        // 如果有设置offset参数\n        if (this.offset.length) {\n          // top和right分为为offset的第一个和第二个值，如果没有第二个值，则right等于top\n          var top = this.offset[0];\n          var right = this.offset[1] || top;\n          style.top = uni.$u.addUnit(top);\n          style.right = uni.$u.addUnit(right);\n        }\n      }\n      return style;\n    },\n    showValue: function showValue() {\n      switch (this.numberType) {\n        case \"overflow\":\n          return Number(this.value) > Number(this.max) ? this.max + \"+\" : this.value;\n          break;\n        case \"ellipsis\":\n          return Number(this.value) > Number(this.max) ? \"...\" : this.value;\n          break;\n        case \"limit\":\n          return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + \"w\" : Math.floor(this.value / 1e3 * 100) / 100 + \"k\" : this.value;\n          break;\n        default:\n          return Number(this.value);\n      }\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWJhZGdlL3UtYmFkZ2UudnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJtaXhpbnMiLCJjb21wdXRlZCIsImJveFN0eWxlIiwiYmFkZ2VTdHlsZSIsInN0eWxlIiwic2hvd1ZhbHVlIiwiTWF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVVBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBLGVBcUJBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQUM7TUFDQTtNQUNBO1FBQ0FBO01BQ0E7TUFDQTtRQUNBQTtRQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQUE7VUFDQUE7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E7VUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1FBQ0E7VUFDQSwrREFDQUMseUVBQ0E7VUFDQTtRQUNBO1VBQ0E7TUFBQTtJQUVBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjQ2OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHRleHRcblx0XHR2LWlmPVwic2hvdyAmJiAoKE51bWJlcih2YWx1ZSkgPT09IDAgPyBzaG93WmVybyA6IHRydWUpIHx8IGlzRG90KVwiXG5cdFx0OmNsYXNzPVwiW2lzRG90ID8gJ3UtYmFkZ2UtLWRvdCcgOiAndS1iYWRnZS0tbm90LWRvdCcsIGludmVydGVkICYmICd1LWJhZGdlLS1pbnZlcnRlZCcsIHNoYXBlID09PSAnaG9ybicgJiYgJ3UtYmFkZ2UtLWhvcm4nLCBgdS1iYWRnZS0tJHt0eXBlfSR7aW52ZXJ0ZWQgPyAnLS1pbnZlcnRlZCcgOiAnJ31gXVwiXG5cdFx0OnN0eWxlPVwiWyR1LmFkZFN0eWxlKGN1c3RvbVN0eWxlKSwgYmFkZ2VTdHlsZV1cIlxuXHRcdGNsYXNzPVwidS1iYWRnZVwiXG5cdD57eyBpc0RvdCA/ICcnIDpzaG93VmFsdWUgfX08L3RleHQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgcHJvcHMgZnJvbSAnLi9wcm9wcy5qcyc7XG5cdC8qKlxuXHQgKiBiYWRnZSDlvr3moIfmlbBcblx0ICogQGRlc2NyaXB0aW9uIOivpee7hOS7tuS4gOiIrOeUqOS6juWbvuagh+WPs+S4iuinkuaYvuekuuacquivu+eahOa2iOaBr+aVsOmHj++8jOaPkOekuueUqOaIt+eCueWHu++8jOacieWchueCueWSjOWchuWMheWQq+aWh+Wtl+S4pOenjeW9ouW8j+OAglxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly91dmlld3VpLmNvbS9jb21wb25lbnRzL2JhZGdlLmh0bWxcblx0ICogXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gXHRcdFx0aXNEb3QgXHRcdOaYr+WQpuaYvuekuuWchueCuSDvvIjpu5jorqQgZmFsc2Ug77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfSBcdHZhbHVlIFx0XHTmmL7npLrnmoTlhoXlrrlcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBcdFx0XHRzaG93IFx0XHTmmK/lkKbmmL7npLog77yI6buY6K6kIHRydWUg77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfSBcdG1heCBcdFx05pyA5aSn5YC877yM6LaF6L+H5pyA5aSn5YC85Lya5pi+56S6ICd7bWF4fSsnICDvvIjpu5jorqQ5OTnvvIlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IFx0XHRcdHR5cGUgXHRcdOS4u+mimOexu+Wei++8jGVycm9yfHdhcm5pbmd8c3VjY2Vzc3xwcmltYXJ5IO+8iOm7mOiupCAnZXJyb3InIO+8iVxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IFx0XHRcdHNob3daZXJvXHTlvZPmlbDlgLzkuLogMCDml7bvvIzmmK/lkKblsZXnpLogQmFkZ2Ug77yI6buY6K6kIGZhbHNlIO+8iVxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gXHRcdFx0YmdDb2xvciBcdOiDjOaZr+minOiJsu+8jOS8mOWFiOe6p+avlHR5cGXpq5jvvIzlpoLorr7nva7vvIx0eXBl5Y+C5pWw5Lya5aSx5pWIXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdFx0XHRjb2xvciBcdFx05a2X5L2T6aKc6ImyIO+8iOm7mOiupCAnI2ZmZmZmZicg77yJXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBcdFx0XHRzaGFwZSBcdFx05b695qCH5b2i54q277yMY2lyY2xlLeWbm+inkuWdh+S4uuWchuinku+8jGhvcm4t5bem5LiL6KeS5Li655u06KeSIO+8iOm7mOiupCAnY2lyY2xlJyDvvIlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IFx0XHRcdG51bWJlclR5cGVcdOiuvue9ruaVsOWtl+eahOaYvuekuuaWueW8j++8jG92ZXJmbG93fGVsbGlwc2lzfGxpbWl0ICDvvIjpu5jorqQgJ292ZXJmbG93JyDvvIlcblx0ICogQHByb3BlcnR5IHtBcnJheX19IFx0XHRcdG9mZnNldFx0XHTorr7nva5iYWRnZeeahOS9jee9ruWBj+enu++8jOagvOW8j+S4uiBbeCwgeV3vvIzkuZ/ljbPorr7nva7nmoTkuLp0b3DlkoxyaWdodOeahOWAvO+8jGFic29sdXRl5Li6dHJ1ZeaXtuacieaViFxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IFx0XHRcdGludmVydGVkXHTmmK/lkKblj43ovazog4zmma/lkozlrZfkvZPpopzoibLvvIjpu5jorqQgZmFsc2Ug77yJXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gXHRcdFx0YWJzb2x1dGVcdOaYr+WQpue7neWvueWumuS9je+8iOm7mOiupCBmYWxzZSDvvIlcblx0ICogQHByb3BlcnR5IHtPYmplY3R9XHRcdFx0Y3VzdG9tU3R5bGVcdOWumuS5iemcgOimgeeUqOWIsOeahOWklumDqOagt+W8j1xuXHQgKiBAZXhhbXBsZSA8dS1iYWRnZSA6dHlwZT1cInR5cGVcIiA6Y291bnQ9XCJjb3VudFwiPjwvdS1iYWRnZT5cblx0ICovXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndS1iYWRnZScsXG5cdFx0bWl4aW5zOiBbdW5pLiR1Lm1wTWl4aW4sIHByb3BzLCB1bmkuJHUubWl4aW5dLFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHQvLyDmmK/lkKblsIZiYWRnZeS4reW/g+S4jueItue7hOS7tuWPs+S4iuinkumHjeWQiFxuXHRcdFx0Ym94U3R5bGUoKSB7XG5cdFx0XHRcdGxldCBzdHlsZSA9IHt9O1xuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5pW05Liq57uE5Lu255qE5qC35byPXG5cdFx0XHRiYWRnZVN0eWxlKCkge1xuXHRcdFx0XHRjb25zdCBzdHlsZSA9IHt9XG5cdFx0XHRcdGlmKHRoaXMuY29sb3IpIHtcblx0XHRcdFx0XHRzdHlsZS5jb2xvciA9IHRoaXMuY29sb3Jcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5iZ0NvbG9yICYmICF0aGlzLmludmVydGVkKSB7XG5cdFx0XHRcdFx0c3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5iZ0NvbG9yXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuYWJzb2x1dGUpIHtcblx0XHRcdFx0XHRzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcblx0XHRcdFx0XHQvLyDlpoLmnpzmnInorr7nva5vZmZzZXTlj4LmlbBcblx0XHRcdFx0XHRpZih0aGlzLm9mZnNldC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdC8vIHRvcOWSjHJpZ2h05YiG5Li65Li6b2Zmc2V055qE56ys5LiA5Liq5ZKM56ys5LqM5Liq5YC877yM5aaC5p6c5rKh5pyJ56ys5LqM5Liq5YC877yM5YiZcmlnaHTnrYnkuo50b3Bcblx0XHRcdFx0XHRcdGNvbnN0IHRvcCA9IHRoaXMub2Zmc2V0WzBdXG5cdFx0XHRcdFx0XHRjb25zdCByaWdodCA9IHRoaXMub2Zmc2V0WzFdIHx8IHRvcFxuXHRcdFx0XHRcdFx0c3R5bGUudG9wID0gdW5pLiR1LmFkZFVuaXQodG9wKVxuXHRcdFx0XHRcdFx0c3R5bGUucmlnaHQgPSB1bmkuJHUuYWRkVW5pdChyaWdodClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHN0eWxlXG5cdFx0XHR9LFxuXHRcdFx0c2hvd1ZhbHVlKCkge1xuXHRcdFx0XHRzd2l0Y2ggKHRoaXMubnVtYmVyVHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgXCJvdmVyZmxvd1wiOlxuXHRcdFx0XHRcdFx0cmV0dXJuIE51bWJlcih0aGlzLnZhbHVlKSA+IE51bWJlcih0aGlzLm1heCkgPyB0aGlzLm1heCArIFwiK1wiIDogdGhpcy52YWx1ZVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImVsbGlwc2lzXCI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gTnVtYmVyKHRoaXMudmFsdWUpID4gTnVtYmVyKHRoaXMubWF4KSA/IFwiLi4uXCIgOiB0aGlzLnZhbHVlXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwibGltaXRcIjpcblx0XHRcdFx0XHRcdHJldHVybiBOdW1iZXIodGhpcy52YWx1ZSkgPiA5OTkgPyBOdW1iZXIodGhpcy52YWx1ZSkgPj0gOTk5OSA/XG5cdFx0XHRcdFx0XHRcdE1hdGguZmxvb3IodGhpcy52YWx1ZSAvIDFlNCAqIDEwMCkgLyAxMDAgKyBcIndcIiA6IE1hdGguZmxvb3IodGhpcy52YWx1ZSAvXG5cdFx0XHRcdFx0XHRcdFx0MWUzICogMTAwKSAvIDEwMCArIFwia1wiIDogdGhpcy52YWx1ZVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBOdW1iZXIodGhpcy52YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdEBpbXBvcnQgXCIuLi8uLi9saWJzL2Nzcy9jb21wb25lbnRzLnNjc3NcIjtcblxuXHQkdS1iYWRnZS1wcmltYXJ5OiAkdS1wcmltYXJ5ICFkZWZhdWx0O1xuXHQkdS1iYWRnZS1lcnJvcjogJHUtZXJyb3IgIWRlZmF1bHQ7XG5cdCR1LWJhZGdlLXN1Y2Nlc3M6ICR1LXN1Y2Nlc3MgIWRlZmF1bHQ7XG5cdCR1LWJhZGdlLWluZm86ICR1LWluZm8gIWRlZmF1bHQ7XG5cdCR1LWJhZGdlLXdhcm5pbmc6ICR1LXdhcm5pbmcgIWRlZmF1bHQ7XG5cdCR1LWJhZGdlLWRvdC1yYWRpdXM6IDEwMHB4ICFkZWZhdWx0O1xuXHQkdS1iYWRnZS1kb3Qtc2l6ZTogOHB4ICFkZWZhdWx0O1xuXHQkdS1iYWRnZS1kb3QtcmlnaHQ6IDRweCAhZGVmYXVsdDtcblx0JHUtYmFkZ2UtZG90LXRvcDogMCAhZGVmYXVsdDtcblx0JHUtYmFkZ2UtdGV4dC1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cdCR1LWJhZGdlLXRleHQtcmlnaHQ6IDEwcHggIWRlZmF1bHQ7XG5cdCR1LWJhZGdlLXRleHQtcGFkZGluZzogMnB4IDVweCAhZGVmYXVsdDtcblx0JHUtYmFkZ2UtdGV4dC1hbGlnbjogY2VudGVyICFkZWZhdWx0O1xuXHQkdS1iYWRnZS10ZXh0LWNvbG9yOiAjRkZGRkZGICFkZWZhdWx0O1xuXG5cdC51LWJhZGdlIHtcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHUtYmFkZ2UtZG90LXJhZGl1cztcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdS1iYWRnZS1kb3QtcmFkaXVzO1xuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR1LWJhZGdlLWRvdC1yYWRpdXM7XG5cdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR1LWJhZGdlLWRvdC1yYWRpdXM7XG5cdFx0QGluY2x1ZGUgZmxleDtcblx0XHRsaW5lLWhlaWdodDogJHUtYmFkZ2UtdGV4dC1mb250LXNpemU7XG5cdFx0dGV4dC1hbGlnbjogJHUtYmFkZ2UtdGV4dC1hbGlnbjtcblx0XHRmb250LXNpemU6ICR1LWJhZGdlLXRleHQtZm9udC1zaXplO1xuXHRcdGNvbG9yOiAkdS1iYWRnZS10ZXh0LWNvbG9yO1xuXG5cdFx0Ji0tZG90IHtcblx0XHRcdGhlaWdodDogJHUtYmFkZ2UtZG90LXNpemU7XG5cdFx0XHR3aWR0aDogJHUtYmFkZ2UtZG90LXNpemU7XG5cdFx0fVxuXHRcdFxuXHRcdCYtLWludmVydGVkIHtcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHR9XG5cdFx0XG5cdFx0Ji0tbm90LWRvdCB7XG5cdFx0XHRwYWRkaW5nOiAkdS1iYWRnZS10ZXh0LXBhZGRpbmc7XG5cdFx0fVxuXG5cdFx0Ji0taG9ybiB7XG5cdFx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuXHRcdH1cblxuXHRcdCYtLXByaW1hcnkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHUtYmFkZ2UtcHJpbWFyeTtcblx0XHR9XG5cdFx0XG5cdFx0Ji0tcHJpbWFyeS0taW52ZXJ0ZWQge1xuXHRcdFx0Y29sb3I6ICR1LWJhZGdlLXByaW1hcnk7XG5cdFx0fVxuXG5cdFx0Ji0tZXJyb3Ige1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHUtYmFkZ2UtZXJyb3I7XG5cdFx0fVxuXHRcdFxuXHRcdCYtLWVycm9yLS1pbnZlcnRlZCB7XG5cdFx0XHRjb2xvcjogJHUtYmFkZ2UtZXJyb3I7XG5cdFx0fVxuXG5cdFx0Ji0tc3VjY2VzcyB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdS1iYWRnZS1zdWNjZXNzO1xuXHRcdH1cblx0XHRcblx0XHQmLS1zdWNjZXNzLS1pbnZlcnRlZCB7XG5cdFx0XHRjb2xvcjogJHUtYmFkZ2Utc3VjY2Vzcztcblx0XHR9XG5cblx0XHQmLS1pbmZvIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR1LWJhZGdlLWluZm87XG5cdFx0fVxuXHRcdFxuXHRcdCYtLWluZm8tLWludmVydGVkIHtcblx0XHRcdGNvbG9yOiAkdS1iYWRnZS1pbmZvO1xuXHRcdH1cblxuXHRcdCYtLXdhcm5pbmcge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHUtYmFkZ2Utd2FybmluZztcblx0XHR9XG5cdFx0XG5cdFx0Ji0td2FybmluZy0taW52ZXJ0ZWQge1xuXHRcdFx0Y29sb3I6ICR1LWJhZGdlLXdhcm5pbmc7XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///469\n");

/***/ }),

/***/ 470:
/*!*******************************************************************************!*\
  !*** D:/AndroidApp/app-demo/uni_modules/uview-ui/components/u-badge/props.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  props: {\n    // 是否显示圆点\n    isDot: {\n      type: Boolean,\n      default: uni.$u.props.badge.isDot\n    },\n    // 显示的内容\n    value: {\n      type: [Number, String],\n      default: uni.$u.props.badge.value\n    },\n    // 是否显示\n    show: {\n      type: Boolean,\n      default: uni.$u.props.badge.show\n    },\n    // 最大值，超过最大值会显示 '{max}+'\n    max: {\n      type: [Number, String],\n      default: uni.$u.props.badge.max\n    },\n    // 主题类型，error|warning|success|primary\n    type: {\n      type: String,\n      default: uni.$u.props.badge.type\n    },\n    // 当数值为 0 时，是否展示 Badge\n    showZero: {\n      type: Boolean,\n      default: uni.$u.props.badge.showZero\n    },\n    // 背景颜色，优先级比type高，如设置，type参数会失效\n    bgColor: {\n      type: [String, null],\n      default: uni.$u.props.badge.bgColor\n    },\n    // 字体颜色\n    color: {\n      type: [String, null],\n      default: uni.$u.props.badge.color\n    },\n    // 徽标形状，circle-四角均为圆角，horn-左下角为直角\n    shape: {\n      type: String,\n      default: uni.$u.props.badge.shape\n    },\n    // 设置数字的显示方式，overflow|ellipsis|limit\n    // overflow会根据max字段判断，超出显示`${max}+`\n    // ellipsis会根据max判断，超出显示`${max}...`\n    // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数\n    numberType: {\n      type: String,\n      default: uni.$u.props.badge.numberType\n    },\n    // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效\n    offset: {\n      type: Array,\n      default: uni.$u.props.badge.offset\n    },\n    // 是否反转背景和字体颜色\n    inverted: {\n      type: Boolean,\n      default: uni.$u.props.badge.inverted\n    },\n    // 是否绝对定位\n    absolute: {\n      type: Boolean,\n      default: uni.$u.props.badge.absolute\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWJhZGdlL3Byb3BzLmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaXNEb3QiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ1bmkiLCIkdSIsImJhZGdlIiwidmFsdWUiLCJOdW1iZXIiLCJTdHJpbmciLCJzaG93IiwibWF4Iiwic2hvd1plcm8iLCJiZ0NvbG9yIiwiY29sb3IiLCJzaGFwZSIsIm51bWJlclR5cGUiLCJvZmZzZXQiLCJBcnJheSIsImludmVydGVkIiwiYWJzb2x1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztlQUFlO0VBQ1hBLEtBQUssRUFBRTtJQUNIO0lBQ0FDLEtBQUssRUFBRTtNQUNIQyxJQUFJLEVBQUVDLE9BQU87TUFDYkMsT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxLQUFLLENBQUNOO0lBQ2hDLENBQUM7SUFDRDtJQUNBTyxLQUFLLEVBQUU7TUFDSE4sSUFBSSxFQUFFLENBQUNPLE1BQU0sRUFBRUMsTUFBTSxDQUFDO01BQ3RCTixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLEtBQUssQ0FBQ0M7SUFDaEMsQ0FBQztJQUNEO0lBQ0FHLElBQUksRUFBRTtNQUNGVCxJQUFJLEVBQUVDLE9BQU87TUFDYkMsT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxLQUFLLENBQUNJO0lBQ2hDLENBQUM7SUFDRDtJQUNBQyxHQUFHLEVBQUU7TUFDRFYsSUFBSSxFQUFFLENBQUNPLE1BQU0sRUFBRUMsTUFBTSxDQUFDO01BQ3RCTixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLEtBQUssQ0FBQ0s7SUFDaEMsQ0FBQztJQUNEO0lBQ0FWLElBQUksRUFBRTtNQUNGQSxJQUFJLEVBQUVRLE1BQU07TUFDWk4sT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxLQUFLLENBQUNMO0lBQ2hDLENBQUM7SUFDRDtJQUNBVyxRQUFRLEVBQUU7TUFDTlgsSUFBSSxFQUFFQyxPQUFPO01BQ2JDLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sS0FBSyxDQUFDTTtJQUNoQyxDQUFDO0lBQ0Q7SUFDQUMsT0FBTyxFQUFFO01BQ0xaLElBQUksRUFBRSxDQUFDUSxNQUFNLEVBQUUsSUFBSSxDQUFDO01BQ3BCTixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLEtBQUssQ0FBQ087SUFDaEMsQ0FBQztJQUNEO0lBQ0FDLEtBQUssRUFBRTtNQUNIYixJQUFJLEVBQUUsQ0FBQ1EsTUFBTSxFQUFFLElBQUksQ0FBQztNQUNwQk4sT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxLQUFLLENBQUNRO0lBQ2hDLENBQUM7SUFDRDtJQUNBQyxLQUFLLEVBQUU7TUFDSGQsSUFBSSxFQUFFUSxNQUFNO01BQ1pOLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sS0FBSyxDQUFDUztJQUNoQyxDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0E7SUFDQUMsVUFBVSxFQUFFO01BQ1JmLElBQUksRUFBRVEsTUFBTTtNQUNaTixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLEtBQUssQ0FBQ1U7SUFDaEMsQ0FBQztJQUNEO0lBQ0FDLE1BQU0sRUFBRTtNQUNKaEIsSUFBSSxFQUFFaUIsS0FBSztNQUNYZixPQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLEtBQUssQ0FBQ1c7SUFDaEMsQ0FBQztJQUNEO0lBQ0FFLFFBQVEsRUFBRTtNQUNObEIsSUFBSSxFQUFFQyxPQUFPO01BQ2JDLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sS0FBSyxDQUFDYTtJQUNoQyxDQUFDO0lBQ0Q7SUFDQUMsUUFBUSxFQUFFO01BQ05uQixJQUFJLEVBQUVDLE9BQU87TUFDYkMsT0FBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxLQUFLLENBQUNjO0lBQ2hDO0VBQ0o7QUFDSixDQUFDO0FBQUEiLCJmaWxlIjoiNDcwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIC8vIOaYr+WQpuaYvuekuuWchueCuVxuICAgICAgICBpc0RvdDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5iYWRnZS5pc0RvdFxuICAgICAgICB9LFxuICAgICAgICAvLyDmmL7npLrnmoTlhoXlrrlcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYmFkZ2UudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5piv5ZCm5pi+56S6XG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYmFkZ2Uuc2hvd1xuICAgICAgICB9LFxuICAgICAgICAvLyDmnIDlpKflgLzvvIzotoXov4fmnIDlpKflgLzkvJrmmL7npLogJ3ttYXh9KydcbiAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJhZGdlLm1heFxuICAgICAgICB9LFxuICAgICAgICAvLyDkuLvpopjnsbvlnovvvIxlcnJvcnx3YXJuaW5nfHN1Y2Nlc3N8cHJpbWFyeVxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYmFkZ2UudHlwZVxuICAgICAgICB9LFxuICAgICAgICAvLyDlvZPmlbDlgLzkuLogMCDml7bvvIzmmK/lkKblsZXnpLogQmFkZ2VcbiAgICAgICAgc2hvd1plcm86IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYmFkZ2Uuc2hvd1plcm9cbiAgICAgICAgfSxcbiAgICAgICAgLy8g6IOM5pmv6aKc6Imy77yM5LyY5YWI57qn5q+UdHlwZemrmO+8jOWmguiuvue9ru+8jHR5cGXlj4LmlbDkvJrlpLHmlYhcbiAgICAgICAgYmdDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgbnVsbF0sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYmFkZ2UuYmdDb2xvclxuICAgICAgICB9LFxuICAgICAgICAvLyDlrZfkvZPpopzoibJcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIG51bGxdLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJhZGdlLmNvbG9yXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOW+veagh+W9oueKtu+8jGNpcmNsZS3lm5vop5LlnYfkuLrlnIbop5LvvIxob3JuLeW3puS4i+inkuS4uuebtOinklxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLmJhZGdlLnNoYXBlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOiuvue9ruaVsOWtl+eahOaYvuekuuaWueW8j++8jG92ZXJmbG93fGVsbGlwc2lzfGxpbWl0XG4gICAgICAgIC8vIG92ZXJmbG935Lya5qC55o2ubWF45a2X5q615Yik5pat77yM6LaF5Ye65pi+56S6YCR7bWF4fStgXG4gICAgICAgIC8vIGVsbGlwc2lz5Lya5qC55o2ubWF45Yik5pat77yM6LaF5Ye65pi+56S6YCR7bWF4fS4uLmBcbiAgICAgICAgLy8gbGltaXTkvJrkvp3mja4xMDAw5L2c5Li65Yik5pat5p2h5Lu277yM6LaF5Ye6MTAwMO+8jOaYvuekumAke3ZhbHVlLzEwMDB9S2DvvIzmr5TlpoIyLjJr44CBMy4zNHfvvIzmnIDlpJrkv53nlZky5L2N5bCP5pWwXG4gICAgICAgIG51bWJlclR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5iYWRnZS5udW1iZXJUeXBlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOiuvue9rmJhZGdl55qE5L2N572u5YGP56e777yM5qC85byP5Li6IFt4LCB5Xe+8jOS5n+WNs+iuvue9rueahOS4unRvcOWSjHJpZ2h055qE5YC877yMYWJzb2x1dGXkuLp0cnVl5pe25pyJ5pWIXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYmFkZ2Uub2Zmc2V0XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaYr+WQpuWPjei9rOiDjOaZr+WSjOWtl+S9k+minOiJslxuICAgICAgICBpbnZlcnRlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5iYWRnZS5pbnZlcnRlZFxuICAgICAgICB9LFxuICAgICAgICAvLyDmmK/lkKbnu53lr7nlrprkvY1cbiAgICAgICAgYWJzb2x1dGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuYmFkZ2UuYWJzb2x1dGVcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///470\n");

/***/ }),

/***/ 471:
/*!********************************************************************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/uni_modules/uview-ui/components/u-badge/u-badge.vue?vue&type=style&index=0&id=13728ffe&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_style_index_0_id_13728ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-badge.vue?vue&type=style&index=0&id=13728ffe&lang=scss&scoped=true& */ 472);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_style_index_0_id_13728ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_style_index_0_id_13728ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_style_index_0_id_13728ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_style_index_0_id_13728ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_badge_vue_vue_type_style_index_0_id_13728ffe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 472:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/uni_modules/uview-ui/components/u-badge/u-badge.vue?vue&type=style&index=0&id=13728ffe&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "u-badge": {
    "borderTopRightRadius": "100",
    "borderTopLeftRadius": "100",
    "borderBottomLeftRadius": "100",
    "borderBottomRightRadius": "100",
    "flexDirection": "row",
    "lineHeight": "11",
    "textAlign": "center",
    "fontSize": "11",
    "color": "#FFFFFF"
  },
  "u-badge--dot": {
    "height": "8",
    "width": "8"
  },
  "u-badge--inverted": {
    "fontSize": "13"
  },
  "u-badge--not-dot": {
    "paddingTop": "2",
    "paddingRight": "5",
    "paddingBottom": "2",
    "paddingLeft": "5"
  },
  "u-badge--horn": {
    "borderBottomLeftRadius": 0
  },
  "u-badge--primary": {
    "backgroundColor": "#3c9cff"
  },
  "u-badge--primary--inverted": {
    "color": "#3c9cff"
  },
  "u-badge--error": {
    "backgroundColor": "#f56c6c"
  },
  "u-badge--error--inverted": {
    "color": "#f56c6c"
  },
  "u-badge--success": {
    "backgroundColor": "#5ac725"
  },
  "u-badge--success--inverted": {
    "color": "#5ac725"
  },
  "u-badge--info": {
    "backgroundColor": "#909399"
  },
  "u-badge--info--inverted": {
    "color": "#909399"
  },
  "u-badge--warning": {
    "backgroundColor": "#f9ae3d"
  },
  "u-badge--warning--inverted": {
    "color": "#f9ae3d"
  },
  "@VERSION": 2
}

/***/ }),

/***/ 610:
/*!*************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/main.js?{"page":"pages%2FcomponentsB%2Fbadge%2Fbadge"} ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_componentsB_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/componentsB/badge/badge.nvue?mpType=page */ 611);\n\n        \n        \n        \n        \n        _pages_componentsB_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_componentsB_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/componentsB/badge/badge'\n        _pages_componentsB_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_componentsB_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBMEU7QUFDMUUsUUFBUSx1RkFBRztBQUNYLFFBQVEsdUZBQUc7QUFDWCxRQUFRLHVGQUFHO0FBQ1gsZ0JBQWdCLHVGQUFHIiwiZmlsZSI6IjYxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2NvbXBvbmVudHNCL2JhZGdlL2JhZGdlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2NvbXBvbmVudHNCL2JhZGdlL2JhZGdlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///610\n");

/***/ }),

/***/ 611:
/*!*****************************************************************************!*\
  !*** D:/AndroidApp/app-demo/pages/componentsB/badge/badge.nvue?mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge.nvue?vue&type=template&id=d0955dba&mpType=page */ 612);\n/* harmony import */ var _badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge.nvue?vue&type=script&lang=js&mpType=page */ 614);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./badge.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 616).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./badge.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 616).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"9f1fed9c\",\n  false,\n  _badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/componentsB/badge/badge.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9FQUEyRDtBQUMvRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0VBQTJEO0FBQ3BIOztBQUVBOztBQUVBO0FBQzRMO0FBQzVMLGdCQUFnQixtTUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI2MTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2JhZGdlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDA5NTVkYmEmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2JhZGdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vYmFkZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vYmFkZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9iYWRnZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9NeURvd25sb2Fkcy9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjlmMWZlZDljXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbXBvbmVudHNCL2JhZGdlL2JhZGdlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///611\n");

/***/ }),

/***/ 612:
/*!***********************************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/pages/componentsB/badge/badge.nvue?vue&type=template&id=d0955dba&mpType=page ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./badge.nvue?vue&type=template&id=d0955dba&mpType=page */ 613);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_d0955dba_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 613:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/pages/componentsB/badge/badge.nvue?vue&type=template&id=d0955dba&mpType=page ***!
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
try {
  components = {
    uBadge: __webpack_require__(/*! @/uni_modules/uview-ui/components/u-badge/u-badge.vue */ 465)
      .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
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
        _c("view", { staticClass: ["u-demo-block"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-demo-block__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("直角边形状")]
          ),
          _c("view", { staticClass: ["u-demo-block__content"] }, [
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [_c("u-badge", { attrs: { value: 1500, shape: "horn" } })],
              1
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-demo-block"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-demo-block__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("徽标数显示方式")]
          ),
          _c("view", { staticClass: ["u-demo-block__content"] }, [
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [
                _c("u-badge", {
                  attrs: { value: 5132, numberType: "ellipsis" },
                }),
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [
                _c("u-badge", {
                  attrs: { value: 1011, numberType: "overflow" },
                }),
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [_c("u-badge", { attrs: { value: 1500, numberType: "limit" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [_c("u-badge", { attrs: { value: 45187, numberType: "limit" } })],
              1
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-demo-block"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-demo-block__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("显示圆点")]
          ),
          _c("view", { staticClass: ["u-demo-block__content"] }, [
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [
                _c("u-badge", {
                  attrs: { value: 1011, numberType: "overflow", isDot: true },
                }),
              ],
              1
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-demo-block"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-demo-block__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("自定义主题")]
          ),
          _c("view", { staticClass: ["u-demo-block__content"] }, [
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [_c("u-badge", { attrs: { value: 9, type: "error" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [_c("u-badge", { attrs: { value: 9, type: "warning" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [_c("u-badge", { attrs: { value: 9, type: "success" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [_c("u-badge", { attrs: { value: 9, type: "primary" } })],
              1
            ),
          ]),
        ]),
        _c("view", { staticClass: ["u-demo-block"] }, [
          _c(
            "u-text",
            {
              staticClass: ["u-demo-block__title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("反转色")]
          ),
          _c("view", { staticClass: ["u-demo-block__content"] }, [
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [
                _c("u-badge", {
                  attrs: { value: 9, type: "error", inverted: true },
                }),
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [
                _c("u-badge", {
                  attrs: { value: 1532, inverted: true, type: "warning" },
                }),
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [
                _c("u-badge", {
                  attrs: { value: 12, inverted: true, type: "success" },
                }),
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["u-page__tag-item"] },
              [
                _c("u-badge", {
                  attrs: { value: 999, inverted: true, type: "primary" },
                }),
              ],
              1
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

/***/ 614:
/*!*****************************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/pages/componentsB/badge/badge.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./badge.nvue?vue&type=script&lang=js&mpType=page */ 615);\n/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJmLENBQWdCLHVoQkFBRyxFQUFDIiwiZmlsZSI6IjYxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vTXlEb3dubG9hZHMvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uL015RG93bmxvYWRzL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL015RG93bmxvYWRzL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYWRnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vTXlEb3dubG9hZHMvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uL015RG93bmxvYWRzL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL015RG93bmxvYWRzL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYWRnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///614\n");

/***/ }),

/***/ 615:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/pages/componentsB/badge/badge.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {};\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29tcG9uZW50c0IvYmFkZ2UvYmFkZ2UubnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFrSUE7RUFDQUE7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiI2MTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1LXBhZ2VcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidS1kZW1vLWJsb2NrXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidS1kZW1vLWJsb2NrX190aXRsZVwiPuebtOinkui+ueW9oueKtjwvdGV4dD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWRlbW8tYmxvY2tfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcGFnZV9fdGFnLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDx1LWJhZGdlXHJcblx0XHRcdFx0XHRcdDp2YWx1ZT1cIjE1MDBcIlxyXG5cdFx0XHRcdFx0XHRzaGFwZT1cImhvcm5cIlxyXG5cdFx0XHRcdFx0PjwvdS1iYWRnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidS1kZW1vLWJsb2NrXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidS1kZW1vLWJsb2NrX190aXRsZVwiPuW+veagh+aVsOaYvuekuuaWueW8jzwvdGV4dD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWRlbW8tYmxvY2tfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcGFnZV9fdGFnLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDx1LWJhZGdlXHJcblx0XHRcdFx0XHRcdDp2YWx1ZT1cIjUxMzJcIlxyXG5cdFx0XHRcdFx0XHRudW1iZXJUeXBlPVwiZWxsaXBzaXNcIlxyXG5cdFx0XHRcdFx0PjwvdS1iYWRnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXBhZ2VfX3RhZy1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8dS1iYWRnZVxyXG5cdFx0XHRcdFx0XHQ6dmFsdWU9XCIxMDExXCJcclxuXHRcdFx0XHRcdFx0bnVtYmVyVHlwZT1cIm92ZXJmbG93XCJcclxuXHRcdFx0XHRcdD48L3UtYmFkZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wYWdlX190YWctaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHUtYmFkZ2VcclxuXHRcdFx0XHRcdFx0OnZhbHVlPVwiMTUwMFwiXHJcblx0XHRcdFx0XHRcdG51bWJlclR5cGU9XCJsaW1pdFwiXHJcblx0XHRcdFx0XHQ+PC91LWJhZGdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXBhZ2VfX3RhZy1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8dS1iYWRnZVxyXG5cdFx0XHRcdFx0XHQ6dmFsdWU9XCI0NTE4N1wiXHJcblx0XHRcdFx0XHRcdG51bWJlclR5cGU9XCJsaW1pdFwiXHJcblx0XHRcdFx0XHQ+PC91LWJhZGdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1LWRlbW8tYmxvY2tcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ1LWRlbW8tYmxvY2tfX3RpdGxlXCI+5pi+56S65ZyG54K5PC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInUtZGVtby1ibG9ja19fY29udGVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wYWdlX190YWctaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHUtYmFkZ2VcclxuXHRcdFx0XHRcdFx0OnZhbHVlPVwiMTAxMVwiXHJcblx0XHRcdFx0XHRcdG51bWJlclR5cGU9XCJvdmVyZmxvd1wiXHJcblx0XHRcdFx0XHRcdGlzRG90XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8L3UtYmFkZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtZGVtby1ibG9ja1wiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInUtZGVtby1ibG9ja19fdGl0bGVcIj7oh6rlrprkuYnkuLvpopg8L3RleHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1kZW1vLWJsb2NrX19jb250ZW50XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXBhZ2VfX3RhZy1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8dS1iYWRnZVxyXG5cdFx0XHRcdFx0XHQ6dmFsdWU9XCI5XCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cImVycm9yXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvdS1iYWRnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXBhZ2VfX3RhZy1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8dS1iYWRnZVxyXG5cdFx0XHRcdFx0XHQ6dmFsdWU9XCI5XCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cIndhcm5pbmdcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PC91LWJhZGdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcGFnZV9fdGFnLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDx1LWJhZGdlXHJcblx0XHRcdFx0XHRcdDp2YWx1ZT1cIjlcIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VjY2Vzc1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8L3UtYmFkZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wYWdlX190YWctaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHUtYmFkZ2VcclxuXHRcdFx0XHRcdFx0OnZhbHVlPVwiOVwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJwcmltYXJ5XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvdS1iYWRnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cInUtZGVtby1ibG9ja1wiPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJ1LWRlbW8tYmxvY2tfX3RpdGxlXCI+5Y+N6L2s6ImyPC90ZXh0PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWRlbW8tYmxvY2tfX2NvbnRlbnRcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXBhZ2VfX3RhZy1pdGVtXCI+XG5cdFx0XHRcdFx0PHUtYmFkZ2Vcblx0XHRcdFx0XHRcdDp2YWx1ZT1cIjlcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImVycm9yXCJcblx0XHRcdFx0XHRcdGludmVydGVkXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDwvdS1iYWRnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcGFnZV9fdGFnLWl0ZW1cIj5cblx0XHRcdFx0XHQ8dS1iYWRnZVxuXHRcdFx0XHRcdFx0OnZhbHVlPVwiMTUzMlwiXG5cdFx0XHRcdFx0XHRpbnZlcnRlZFxuXHRcdFx0XHRcdFx0dHlwZT1cIndhcm5pbmdcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8L3UtYmFkZ2U+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXBhZ2VfX3RhZy1pdGVtXCI+XG5cdFx0XHRcdFx0PHUtYmFkZ2Vcblx0XHRcdFx0XHRcdDp2YWx1ZT1cIjEyXCJcblx0XHRcdFx0XHRcdGludmVydGVkXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VjY2Vzc1wiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDwvdS1iYWRnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcGFnZV9fdGFnLWl0ZW1cIj5cblx0XHRcdFx0XHQ8dS1iYWRnZVxuXHRcdFx0XHRcdFx0OnZhbHVlPVwiOTk5XCJcblx0XHRcdFx0XHRcdGludmVydGVkXG5cdFx0XHRcdFx0XHR0eXBlPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDwvdS1iYWRnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQuYm94IHtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC51LXBhZ2VfX3RhZy1pdGVtIHtcclxuXHRcdG1hcmdpbi1yaWdodDogNDBweDtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuYmFkZ2UtYm94IHtcclxuXHRcdHdpZHRoOiA0NXB4O1xyXG5cdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xyXG5cdH1cclxuXHJcblx0LnUtZGVtby1ibG9ja19fY29udGVudCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///615\n");

/***/ }),

/***/ 616:
/*!**************************************************************************************************************!*\
  !*** D:/AndroidApp/app-demo/pages/componentsB/badge/badge.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../MyDownloads/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./badge.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 617);
/* harmony import */ var _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_MyDownloads_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 617:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/AndroidApp/app-demo/pages/componentsB/badge/badge.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "box": {
    "justifyContent": "space-between"
  },
  "u-page__tag-item": {
    "marginRight": "40",
    "marginTop": "10"
  },
  "badge-box": {
    "width": "45",
    "height": "45",
    "borderTopLeftRadius": "3",
    "borderTopRightRadius": "3",
    "borderBottomLeftRadius": "3",
    "borderBottomRightRadius": "3",
    "backgroundColor": "#E6E6E6"
  },
  "u-demo-block__content": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "alignItems": "center"
  },
  "@VERSION": 2
}

/***/ })

/******/ });