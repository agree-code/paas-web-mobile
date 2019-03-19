!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AUI=e():t.AUI=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=466)}({0:function(t,e){t.exports=function(t,e,n,i,s,r){var o,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId=s);var h;if(r?(h=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=h):i&&(h=i),h){var c=l.functional,p=c?l.render:l.beforeCreate;c?(l._injectStyles=h,l.render=function(t,e){return h.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,h):[h]}return{esModule:o,exports:a,options:l}}},189:function(t,e,n){"use strict";var i=window.addEventListener?"addEventListener":"attachEvent",s=window.removeEventListener?"removeEventListener":"detachEvent",r="addEventListener"!==i?"on":"";e.bind=function(t,e,n,s){return t[i](r+e,n,s||!1),n},e.unbind=function(t,e,n,i){return t[s](r+e,n,i||!1),n}},261:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(470),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"aui-range",props:{decimal:Boolean,value:{default:0,type:Number},min:{type:Number,default:0},minHTML:String,maxHTML:String,max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,default:1},rangeHandleHeight:{type:Number,default:30}},created:function(){this.currentValue=this.value},mounted:function(){var t=this,e=this;this.$nextTick(function(){var n={callback:function(t){e.currentValue=t},decimal:t.decimal,start:t.currentValue,min:t.min,max:t.max,minHTML:t.minHTML,maxHTML:t.maxHTML,disable:t.disabled,disabledOpacity:t.disabledOpacity,initialBarWidth:window.getComputedStyle(t.$el.parentNode).width.replace("px","")-80};0!==t.step&&(n.step=t.step),t.range=new s.default(t.$el.querySelector(".aui-range-input"),n);var i=(t.rangeHandleHeight-t.rangeBarHeight)/2;t.$el.querySelector(".range-handle").style.top="-"+i+"px",t.$el.querySelector(".range-bar").style.height=t.rangeBarHeight+"px",t.handleOrientationchange=function(){t.update()},window.addEventListener("orientationchange",t.handleOrientationchange,!1)})},methods:{update:function(){console.log("update",this.currentValue);var t=this.currentValue;t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.range.reInit({min:this.min,max:this.max,step:this.step,value:t}),this.currentValue=t,this.range.setStart(this.currentValue),this.range.setStep()}},data:function(){return{currentValue:0}},watch:{currentValue:function(t){this.range&&this.range.setStart(t),this.$emit("input",t),this.$emit("change",t)},value:function(t){this.currentValue=t},min:function(){this.update()},step:function(){this.update()},max:function(){this.update()}},beforeDestroy:function(){window.removeEventListener("orientationchange",this.handleOrientationchange,!1)}}},262:function(t,e,n){"use strict";function i(t){var e=window.getComputedStyle(t,null).width;return"100%"===e||"auto"===e?0:parseInt(e,10)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1},r=function(t,e){for(var n=null,i=e[0],s=0;s<e.length;s++)n=Math.abs(t-i),Math.abs(t-e[s])<n&&(i=e[s]);return i},o={isNumber:function(t){return"number"==typeof t},of:function(t,e){if(o.isNumber(t)&&o.isNumber(e))return t/100*e},from:function(t,e){if(o.isNumber(t)&&o.isNumber(e))return t/e*100}};e.indexof=s,e.findClosest=r,e.getWidth=i,e.percentage=o},466:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(467),s=function(t){return t&&t.__esModule?t:{default:t}}(i);s.default.install=function(t){t.component(s.default.name,s.default)},e.default=s.default},467:function(t,e,n){"use strict";function i(t){n(468)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(261),r=n.n(s);for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);var a=n(479),u=n(0),l=i,h=u(r.a,a.a,!1,l,null,null);e.default=h.exports},468:function(t,e,n){var i=n(469);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(81)("79fa4805",i,!0,{})},469:function(t,e,n){e=t.exports=n(75)(),e.push([t.i,".range-bar{background-color:#a9acb1;border-radius:15px;display:block;height:1px;position:relative;width:100%}.range-bar-disabled{opacity:.5}.range-quantity{background-color:#04be02;border-radius:15px;display:block;height:100%;width:0}.range-handle{background-color:#fff;border-radius:100%;cursor:move;height:30px;left:0;top:-13px;position:absolute;width:30px;box-shadow:0 1px 3px rgba(0,0,0,.4)}.range-max,.range-min{color:#181819;font-size:12px;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:24px}.range-min{left:-30px}.range-max{right:-30px}.unselectable{-webkit-user-select:none;user-select:none}.range-disabled{cursor:default}",""])},470:function(t,e,n){"use strict";function i(t,e){this.element=t,this.options=e||{},this.slider=this.create("span","range-bar"),this.hasAppend=!1,null!==this.element&&"text"===this.element.type&&this.init(),this.options.step&&this.step(this.slider.offsetWidth||this.options.initialBarWidth,o(this.handle)),this.setStart(this.options.start)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){e=e||{};for(var n in c)null==e[n]&&(e[n]=c[n]);return new i(t,e)};var s=n(262),r=s.findClosest,o=s.getWidth,a=s.percentage,u=n(471),l=n(472),h=n(474);i.prototype.setStart=function(t){var e=null===t?this.options.min:t,n=a.from(e-this.options.min,this.options.max-this.options.min)||0,i=a.of(n,this.slider.offsetWidth-this.handle.offsetWidth),s=this.options.step?r(i,this.steps):i;this.setPosition(s),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.setStep=function(){this.step(o(this.slider)||this.options.initialBarWidth,o(this.handle))},i.prototype.setPosition=function(t){this.handle.style.left=t+"px",this.slider.querySelector(".range-quantity").style.width=t+"px"},i.prototype.onmousedown=function(t){t.touches&&(t=t.touches[0]),this.startX=t.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},i.prototype.changeEvent=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),this.element.dispatchEvent(e)}},i.prototype.onmousemove=function(t){t.preventDefault(),t.touches&&(t=t.touches[0]);var e=this.handleOffsetX+t.clientX-this.startX,n=this.steps?r(e,this.steps):e;e<=0?this.setPosition(0):e>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(n),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.unselectable=function(t,e){u(this.slider).has("unselectable")||!0!==e?u(this.slider).remove("unselectable"):u(this.slider).add("unselectable")},i.prototype.onmouseup=function(t){this.unselectable(this.slider,!1)},i.prototype.disable=function(t){(this.options.disable||t)&&(this.mouse.unbind(),this.touch.unbind()),this.options.disable&&(this.options.disableOpacity&&(this.slider.style.opacity=this.options.disableOpacity),u(this.slider).add("range-bar-disabled"))},i.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()},i.prototype.reInit=function(t){this.options.start=t.value,this.options.min=t.min,this.options.max=t.max,this.options.step=t.step,this.disable(!0),this.init()},i.prototype.checkStep=function(t){return t<0&&(t=Math.abs(t)),this.options.step=t,this.options.step},i.prototype.setValue=function(t,e){var n=a.from(parseFloat(t),e);if("0px"===t||0===e)i=this.options.min;else{var i=a.of(n,this.options.max-this.options.min)+this.options.min;i=this.options.decimal?Math.round(100*i)/100:Math.round(i),i>this.options.max&&(i=this.options.max)}var s=!1;s=this.element.value!==i,this.element.value=i,this.options.callback(i),s&&this.changeEvent()},i.prototype.checkValues=function(t){t<this.options.min&&(this.options.start=this.options.min),t>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},i.prototype.step=function(t,e){for(var n=t-e,i=a.from(this.checkStep(this.options.step),this.options.max-this.options.min),s=a.of(i,n),r=[],o=0;o<=n;o+=s)r.push(o);this.steps=r;for(var u=10;u>=0;u--)this.steps[r.length-u]=n-s*u;return this.steps},i.prototype.create=function(t,e){var n=document.createElement(t);return n.className=e,n},i.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},i.prototype.setRange=function(t,e){"number"!=typeof t||"number"!=typeof e||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||t,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||e)},i.prototype.generate=function(){var t={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var e in t)if(t.hasOwnProperty(e)){var n=this.create(t[e].type,t[e].selector);this.slider.appendChild(n)}return this.slider},i.prototype.append=function(){if(!this.hasAppend){var t=this.generate();this.insertAfter(this.element,t)}this.hasAppend=!0},i.prototype.hide=function(){this.element.style.display="none"},i.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=h(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=l(this.handle,this),this.mouse.bind()};var c={callback:function(){},decimal:!1,disable:!1,disableOpacity:null,hideRange:!1,min:0,max:100,start:null,step:null,vertical:!1}},471:function(t,e,n){"use strict";function i(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var s=n(262).indexof,r=/\s+/,o=Object.prototype.toString;t.exports=function(t){return new i(t)},i.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~s(e,t)||e.push(t),this.el.className=e.join(" "),this},i.prototype.remove=function(t){if("[object RegExp]"===o.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),n=s(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},i.prototype.removeMatching=function(t){for(var e=this.array(),n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},i.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},i.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),n=e.split(r);return""===n[0]&&n.shift(),n},i.prototype.has=i.prototype.contains=function(t){return this.list?this.list.contains(t):!!~s(this.array(),t)}},472:function(t,e,n){"use strict";function i(t,e){this.obj=e||{},this.el=t}var s=n(473),r=n(189);t.exports=function(t,e){return new i(t,e)},s(i.prototype),i.prototype.bind=function(){function t(s){n.onmouseup&&n.onmouseup(s),r.unbind(document,"mousemove",e),r.unbind(document,"mouseup",t),i.emit("up",s)}function e(t){n.onmousemove&&n.onmousemove(t),i.emit("move",t)}var n=this.obj,i=this;return i.down=function(s){n.onmousedown&&n.onmousedown(s),r.bind(document,"mouseup",t),r.bind(document,"mousemove",e),i.emit("down",s)},r.bind(this.el,"mousedown",i.down),this},i.prototype.unbind=function(){r.unbind(this.el,"mousedown",this.down),this.down=null}},473:function(t,e,n){"use strict";function i(t){if(t)return s(t)}function s(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1===arguments.length)return delete this._callbacks["$"+t],this;for(var i,s=0;s<n.length;s++)if((i=n[s])===e||i.fn===e){n.splice(s,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var i=0,s=n.length;i<s;++i)n[i].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},474:function(t,e,n){"use strict";function i(t,e){if(!(this instanceof i))return new i(t,e);if(!t)throw new Error("element required");if(!e)throw new Error("object required");this.el=t,this.obj=e,this._events={}}function s(t){var e=t.split(/ +/);return{name:e.shift(),selector:e.join(" ")}}var r=n(189),o=n(475);t.exports=i,i.prototype.sub=function(t,e,n){this._events[t]=this._events[t]||{},this._events[t][e]=n},i.prototype.bind=function(t,e){var n=s(t),i=this.el,a=this.obj,u=n.name;e=e||"on"+u;var l=[].slice.call(arguments,2),h=function(){var t=[].slice.call(arguments).concat(l);a[e].apply(a,t)};return n.selector?h=o.bind(i,n.selector,u,h):r.bind(i,u,h),this.sub(u,e,h),h},i.prototype.unbind=function(t,e){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(t);var n=this._events[t];if(n){var i=n[e];i&&r.unbind(this.el,t,i)}},i.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},i.prototype.unbindAllOf=function(t){var e=this._events[t];if(e)for(var n in e)this.unbind(t,n)}},475:function(t,e,n){"use strict";var i=n(476),s=n(189);e.bind=function(t,e,n,r,o){return s.bind(t,n,function(n){var s=n.target||n.srcElement;n.delegateTarget=i(s,e,!0,t),n.delegateTarget&&r.call(t,n)},o)},e.unbind=function(t,e,n,i){s.unbind(t,e,n,i)}},476:function(t,e,n){"use strict";function i(t,e,n){for(n=n||document.documentElement;t&&t!==n;){if(s(t,e))return t;t=t.parentNode}return s(t,e)?t:null}var s=n(477);t.exports=i},477:function(t,e,n){"use strict";function i(t,e){if(!t||1!==t.nodeType)return!1;if(o)return o.call(t,e);for(var n=s.all(e,t.parentNode),i=0;i<n.length;++i)if(n[i]===t)return!0;return!1}var s=n(478),r=window.Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector;t.exports=i},478:function(t,e,n){"use strict";function i(t,e){return e.querySelector(t)}e=t.exports=function(t,e){return e=e||document,i(t,e)},e.all=function(t,e){return e=e||document,e.querySelectorAll(t)},e.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");return e.all=t.all,e}},479:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aui-range-input-box",staticStyle:{position:"relative","margin-right":"30px","margin-left":"50px"}},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"aui-range-input",domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])},s=[],r={render:i,staticRenderFns:s};e.a=r},75:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(i[r]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},81:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=h[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(r(n.parts[s]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(r(n.parts[s]));h[n.id]={id:n.id,refs:1,parts:o}}}}function s(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function r(t){var e,n,i=document.querySelector("style["+b+'~="'+t.id+'"]');if(i){if(f)return m;i.parentNode.removeChild(i)}if(y){var r=d++;i=p||(p=s()),e=o.bind(null,i,r,!1),n=o.bind(null,i,r,!0)}else i=s(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function o(t,e,n,i){var s=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,s=e.sourceMap;if(i&&t.setAttribute("media",i),v.ssrId&&t.setAttribute(b,e.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(97),h={},c=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,f=!1,m=function(){},v=null,b="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,s){f=n,v=s||{};var r=l(t,e);return i(r),function(e){for(var n=[],s=0;s<r.length;s++){var o=r[s],a=h[o.id];a.refs--,n.push(a)}e?(r=l(t,e),i(r)):r=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete h[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},97:function(t,e){t.exports=function(t,e){for(var n=[],i={},s=0;s<e.length;s++){var r=e[s],o=r[0],a=r[1],u=r[2],l=r[3],h={id:t+":"+s,css:a,media:u,sourceMap:l};i[o]?i[o].parts.push(h):n.push(i[o]={id:o,parts:[h]})}return n}}})});