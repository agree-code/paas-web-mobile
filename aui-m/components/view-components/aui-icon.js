!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AUI=t():e.AUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=82)}({0:function(e,t){e.exports=function(e,t,n,r,o,i){var u,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(u=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,d=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(e,t){return f.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:u,exports:s,options:c}}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(77),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var u=n(102),s=n(0),a=s(o.a,u.a,!1,null,null,null);t.default=a.exports},102:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{class:[e.className,e.isMsg?"aui-icon_msg":""]})},o=[],i={render:r,staticRenderFns:o};t.a=i},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"aui-icon",props:{type:String,isMsg:Boolean},computed:{className:function(){return"aui-icon aui_icon_"+this.type+" aui-icon-"+this.type.replace(/_/g,"-")}}}},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(101),o=function(e){return e&&e.__esModule?e:{default:e}}(r);o.default.install=function(e){e.component(o.default.name,o.default)},t.default=o.default}})});