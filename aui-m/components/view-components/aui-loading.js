!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AUI=e():t.AUI=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=205)}({0:function(t,e){t.exports=function(t,e,n,o,i,r){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var d;if(r?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=d):o&&(d=o),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(t,e){return d.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:s,options:c}}},178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"aui-loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"aui-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},205:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(306),i=function(t){return t&&t.__esModule?t:{default:t}}(o);i.default.install=function(t){t.component(i.default.name,i.default)},e.default=i.default},306:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(178),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var a=n(307),s=n(0),u=s(i.a,a.a,!1,null,null,null);e.default=u.exports},307:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"aui-loading_toast aui-agree-loading",class:t.text?"":"aui-loading-no-text"},[n("div",{staticClass:"aui-mask_transparent"}),t._v(" "),n("div",{staticClass:"aui-toast",style:{position:t.position}},[n("i",{staticClass:"aui-loading aui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"aui-toast__content"},[t._v(t._s(t.$t(t.text)||t.$t("aui.AuiLoading.loading"))),t._t("default")],2):t._e()])])])},i=[],r={render:o,staticRenderFns:i};e.a=r}})});