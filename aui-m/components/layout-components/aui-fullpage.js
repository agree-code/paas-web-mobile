!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AUI=t():e.AUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=515)}({0:function(e,t){e.exports=function(e,t,n,o,r,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),r&&(d._scopeId=r);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):o&&(c=o),c){var l=d.functional,f=l?d.render:d.beforeCreate;l?(d._injectStyles=c,d.render=function(e,t){return c.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:s,options:d}}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(517),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"aui-fullpage",mounted:function(){var e=this,t=this;this.$nextTick(function(){e._fullpage=new r.default(e.$el,{dir:t.dir,loop:t.loop,drag:t.drag,start:t.start,duration:t.duration,page:t.page,der:t.der,change:function(e){t.$emit("change",e)},beforeChange:function(e){t.$emit("before-change",e)},afterChange:function(e){t.$emit("after-change",e)},orientationchange:function(e){t.$emit("orientation-change",e)}})})},props:{page:String,start:{type:Number,default:0},duration:{type:Number,default:500},loop:Boolean,drag:Boolean,dir:{type:String,default:"v"},der:{type:Number,default:.1}}}},515:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(516),r=function(e){return e&&e.__esModule?e:{default:e}}(o);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},516:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(281),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var a=n(518),s=n(0),u=s(r.a,a.a,!1,null,null,null);t.default=u.exports},517:function(e,t,n){"use strict";function o(e){e.preventDefault()}function r(e,t,n){return e<0?n?t-1:0:e>=t?n?0:t-1:e}function i(e,t,n){var o="0px",r="0px";"v"===t?r=n+"px":o=n+"px",e.style.cssText+="-webkit-transform : translate3d("+o+", "+r+", 0px);transform : translate3d("+o+", "+r+", 0px)"}function a(e){var t=e||{};for(var n in f)t.hasOwnProperty(n)||(t[n]=f[n]);var o=this;o.curIndex=-1,o.o=t,o.startY=0,o.movingFlag=!1,o.ele.classList.add(u),o.parentEle=o.ele.parentNode;var r=t.page;r&&0===r.indexOf(".")&&(r=r.substring(1,r.length),o.pageEles=o.ele.getElementsByClassName(r)),r||(o.pageEles=o.ele.children);for(var i=0;i<o.pageEles.length;i++){var a=o.pageEles[i];a.classList.add(c),a.classList.add(l+t.dir)}o.pagesLength=o.pageEles.length,o.update(),o.initEvent(),o.start()}function s(e,t){this.ele=e,a.call(this,t)}Object.defineProperty(t,"__esModule",{value:!0});var u="aui-fullpage-box",d="aui-fullpage-box-anim",c="aui-fullpage-item",l="aui-fullpage-dir",f={page:null,start:0,duration:500,loop:!1,drag:!1,dir:"v",der:.1,change:function(e){},beforeChange:function(e){},afterChange:function(e){},orientationchange:function(e){}};s.prototype.update=function(){var e=void 0;if("h"===this.o.dir){this.width=this.parentEle.offsetWidth;for(var t=0;t<this.pageEles.length;t++)e=this.pageEles[t],e.style.width=this.width+"px";this.ele.style.width=this.width*this.pagesLength+"px"}this.height=this.parentEle.offsetHeight;for(var n=0;n<this.pageEles.length;n++)e=this.pageEles[n],e.style.height=this.height+"px";this.moveTo(this.curIndex<0?this.o.start:this.curIndex)},s.prototype.initEvent=function(){var e=this,t=e.ele;t.addEventListener("touchstart",function(t){return e.status?e.movingFlag?0:(e.startX=t.targetTouches[0].pageX,void(e.startY=t.targetTouches[0].pageY)):1}),t.addEventListener("touchend",function(t){if(!e.status)return 1;if(e.movingFlag)return 0;var n="v"===e.o.dir?(t.changedTouches[0].pageY-e.startY)/e.height:(t.changedTouches[0].pageX-e.startX)/e.width,o=n>e.o.der||n<-e.o.der?n>0?-1:1:0;e.moveTo(e.curIndex+o,!0)}),e.o.drag&&t.addEventListener("touchmove",function(n){if(!e.status)return 1;if(e.movingFlag)return e.startX=n.targetTouches[0].pageX,e.startY=n.targetTouches[0].pageY,0;var o=n.changedTouches[0].pageY-e.startY;(0===e.curIndex&&o>0||e.curIndex===e.pagesLength-1&&o<0)&&(o/=2);var r=n.changedTouches[0].pageX-e.startX;(0===e.curIndex&&r>0||e.curIndex===e.pagesLength-1&&r<0)&&(r/=2);var a="v"===e.o.dir?-e.curIndex*e.height+o:-e.curIndex*e.width+r;t.classList.remove(d),i(t,e.o.dir,a)}),window.addEventListener("orientationchange",function(){180!==window.orientation&&0!==window.orientation||e.o.orientationchange("portrait"),90!==window.orientation&&-90!==window.orientation||e.o.orientationchange("landscape")},!1),window.addEventListener("resize",function(){e.update()},!1)},s.prototype.holdTouch=function(){document.addEventListener("touchmove",o)},s.prototype.unholdTouch=function(){document.removeEventListener("touchmove",o)},s.prototype.start=function(){this.status=1,this.holdTouch()},s.prototype.stop=function(){this.status=0,this.unholdTouch()},s.prototype.getCurIndex=function(){return this.curIndex},s.prototype.moveTo=function(e,t){var n=this,o=n.ele,a=n.curIndex;if(e=r(e,n.pagesLength,n.o.loop),t?o.classList.add(d):o.classList.remove(d),e!==a){if(!1===n.o.beforeChange({next:e,cur:a}))return 1}n.movingFlag=!0,n.curIndex=e,i(o,n.o.dir,-e*("v"===n.o.dir?n.height:n.width)),e!==a&&n.o.change({prev:a,cur:e}),window.setTimeout(function(){if(n.movingFlag=!1,e!==a){n.o.afterChange({prev:a,cur:e});for(var t=0;t<n.pageEles.length;t++){var o=n.pageEles[t];t===e?o.classList.add("cur"):o.classList.remove("cur")}}},n.o.duration)},s.prototype.movePrev=function(e){this.moveTo(this.curIndex-1,e)},s.prototype.moveNext=function(e){this.moveTo(this.curIndex+1,e)},t.default=s},518:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._t("default")],2)},r=[],i={render:o,staticRenderFns:r};t.a=i}})});