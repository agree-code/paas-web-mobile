!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AUI=e():t.AUI=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=153)}({0:function(t,e){t.exports=function(t,e,i,o,n,s){var r,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),i&&(l.functional=!0),n&&(l._scopeId=n);var c;if(s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=o),c){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:a,options:l}}},146:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(181),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={mixins:[n.default],name:"aui-toast",props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"aui-slide-from-top":"bottom"===this.position?"aui-slide-from-bottom":"aui-fade"},toastClass:function(){return{"aui-toast_forbidden":"warn"===this.type,"aui-toast_cancel":"cancel"===this.type,"aui-toast_success":"success"===this.type,"aui-toast_text":"text"===this.type,"aui-toast-top":"top"===this.position,"aui-toast-bottom":"bottom"===this.position,"aui-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},153:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(180),n=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default.install=function(t){t.component(n.default.name,n.default)},e.default=n.default},180:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(146),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);var r=i(182),a=i(0),u=a(n.a,r.a,!1,null,null,null);e.default=u.exports},181:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){this.$overflowScrollingList=document.querySelectorAll(".aui-fix-safari-overflow-scrolling")},methods:{fixSafariOverflowScrolling:function(t){if(this.$overflowScrollingList.length)for(var e=0;e<this.$overflowScrollingList.length;e++)this.$overflowScrollingList[e].style.webkitOverflowScrolling=t}}}},182:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agree-aui-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"aui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"aui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"aui-icon-success-no-circle aui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"aui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.$t(t.text))}}):i("p",{staticClass:"aui-toast__content",style:t.style},[t._t("default")],2)])])],1)},n=[],s={render:o,staticRenderFns:n};e.a=s}})});