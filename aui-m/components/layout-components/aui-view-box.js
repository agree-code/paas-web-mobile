!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AUI=t():e.AUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=541)}({0:function(e,t){e.exports=function(e,t,n,o,r,i){var u,s=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(u=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),r&&(a._scopeId=r);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=f):o&&(f=o),f){var l=a.functional,c=l?a.render:a.beforeCreate;l?(a._injectStyles=f,a.render=function(e,t){return f.call(t),c(e,t)}):a.beforeCreate=c?[].concat(c,f):[f]}return{esModule:u,exports:s,options:a}}},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"aui-view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},541:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(542),r=function(e){return e&&e.__esModule?e:{default:e}}(o);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},542:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(289),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var u=n(543),s=n(0),d=s(r.a,u.a,!1,null,null,null);t.default=d.exports},543:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"agree-aui-tab"},[e._t("header"),e._v(" "),n("div",{ref:"viewBoxBody",staticClass:"aui-tab__panel aui-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"aui_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},r=[],i={render:o,staticRenderFns:r};t.a=i}})});