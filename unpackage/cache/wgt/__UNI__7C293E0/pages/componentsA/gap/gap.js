!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=955)}({0:function(e,t,r){"use strict";function o(e,t,r,o,n,i,a,u,l,d){var s,c="function"==typeof e?e.options:e;if(l){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var p in l)f.call(l,p)&&!f.call(c.components,p)&&(c.components[p]=l[p])}if(d&&("function"==typeof d.beforeCreate&&(d.beforeCreate=[d.beforeCreate]),(d.beforeCreate||(d.beforeCreate=[])).unshift((function(){this[d.__module]=this})),(c.mixins||(c.mixins=[])).push(d)),t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):n&&(s=u?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(c.functional){c._injectStyles=s;var g=c.render;c.render=function(e,t){return s.call(t),g(e,t)}}else{var b=c.beforeCreate;c.beforeCreate=b?[].concat(b,s):[s]}return{exports:e,options:c}}r.d(t,"a",(function(){return o}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},10:function(e,t,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(11).default,Vue.prototype.__$appStyle__)},11:function(e,t,r){"use strict";r.r(t);var o=r(2),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(i);t.default=n.a},12:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},2:function(e,t){e.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},25:function(e,t,r){"use strict";r.r(t);var o=r(26),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(i);t.default=n.a},26:function(e,t,r){"use strict";var o=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(92)),i={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{gapStyle:function(){var e={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}}};t.default=i},27:function(e,t){e.exports={"@VERSION":2}},28:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;return(this._self._c||e)("view",{staticClass:["u-gap"],style:[this.gapStyle]})},n=[]},300:function(e,t,r){"use strict";var o=r(700),n=r(368),i=r(0);var a=Object(i.a)(n.default,o.b,o.c,!1,null,null,"338cc1a6",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(a),t.default=a.exports},368:function(e,t,r){"use strict";var o=r(369),n=r.n(o);t.default=n.a},369:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={}},45:function(e,t,r){"use strict";r.r(t);var o=r(27),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(i);t.default=n.a},700:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return o}));var o={uGap:r(91).default},n=function(){var e=this.$createElement,t=this._self._c||e;return t("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[t("view",{staticClass:["u-page"]},[t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u57fa\u672c\u6848\u5217")]),t("view",{staticClass:["u-page__gap-item"]},[t("u-gap",{attrs:{bgColor:"#f3f4f6"}})],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u989c\u8272")]),t("view",{staticClass:["u-page__gap-item"]},[t("u-gap",{attrs:{bgColor:"#2979ff"}})],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u9ad8\u5ea6")]),t("view",{staticClass:["u-page__gap-item"]},[t("u-gap",{attrs:{bgColor:"#f3f4f6",height:"40"}})],1)]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u8fb9\u8ddd")]),t("view",{staticClass:["u-page__gap-item"]},[t("u-gap",{attrs:{bgColor:"#f3f4f6",marginTop:"20",marginBottom:"20"}})],1)])])])},i=[]},91:function(e,t,r){"use strict";r.r(t);var o=r(28),n=r(25);for(var i in n)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(i);var a=r(0);var u=Object(a.a)(n.default,o.b,o.c,!1,null,"72836044","087f05a5",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(45).default,this.options.style):Object.assign(this.options.style,r(45).default)}).call(u),t.default=u.exports},92:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}};t.default=o},955:function(e,t,r){"use strict";r.r(t);r(10),r(12);var o=r(300);o.default.mpType="page",o.default.route="pages/componentsA/gap/gap",o.default.el="#root",new Vue(o.default)}});