!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AUI=t():e.AUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=443)}({0:function(e,t){e.exports=function(e,t,n,r,u,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),u&&(c._scopeId=u);var f;if(o?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,d=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(e,t){return f.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:i,exports:a,options:c}}},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"aui-checker",props:{defaultItemClass:{type:String,default:"aui-checker-item-default"},selectedItemClass:{type:String,default:"aui-checker-item-selected-default"},disabledItemClass:{type:String,default:"aui-checker-item-disabled-default "},type:{type:String,default:"radio"},value:[String,Number,Array,Object],max:Number,radioRequired:Boolean},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e),this.$emit("change",e)}},data:function(){return{currentValue:this.value}}}},443:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(444),u=function(e){return e&&e.__esModule?e:{default:e}}(r);u.default.install=function(e){e.component(u.default.name,u.default)},t.default=u.default},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(248),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var i=n(445),a=n(0),s=a(u.a,i.a,!1,null,null,null);t.default=s.exports},445:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"aui-checker-box"},[e._t("default")],2)},u=[],o={render:r,staticRenderFns:u};t.a=o}})});