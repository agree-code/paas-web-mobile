!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AUI=t():e.AUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=351)}({0:function(e,t){e.exports=function(e,t,n,i,r,o){var u,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(u=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=i),c){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(e,t){return c.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:u,exports:a,options:l}}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(77),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var u=n(102),a=n(0),s=a(r.a,u.a,!1,null,null,null);t.default=s.exports},102:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{class:[e.className,e.isMsg?"aui-icon_msg":""]})},r=[],o={render:i,staticRenderFns:r};t.a=o},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(93),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var u=n(123),a=n(0),s=a(r.a,u.a,!1,null,null,null);t.default=s.exports},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(94),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var u=n(124),a=n(0),s=a(r.a,u.a,!1,null,null,null);t.default=s.exports},123:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"aui-flexbox",class:{"aui-flex-col":"vertical"===e.orient,"aui-flex-row":"horizontal"===e.orient},style:e.styles,on:{click:e.onClick}},[e._t("default")],2)},r=[],o={render:i,staticRenderFns:r};t.a=o},124:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"aui-flexbox-item",style:e.style,on:{click:e.onClick}},[e._t("default")],2)},r=[],o={render:i,staticRenderFns:r};t.a=o},213:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(82),o=i(r),u=n(117),a=i(u),s=n(118),l=i(s),c={large:40,middle:30,small:20};t.default={name:"aui-color-picker",components:{Icon:o.default,Flexbox:a.default,FlexboxItem:l.default},created:function(){this.currentValue=this.value},props:{colors:{type:Array,required:!0},size:{type:String,default:"large"},value:String},computed:{width:function(){return c[this.size]}},data:function(){return{currentValue:""}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("change",e),this.$emit("input",e)}},methods:{change:function(e){this.currentValue=e}}}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(352),r=function(e){return e&&e.__esModule?e:{default:e}}(i);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(213),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var u=n(353),a=n(0),s=a(r.a,u.a,!1,null,null,null);t.default=s.exports},353:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aui-color-picker"},[n("flexbox",e._l(e.colors,function(t){return n("flexbox-item",{key:t,staticClass:"aui-color-box"},[n("span",{staticClass:"aui-color-item",class:{"aui-color-white":"#fff"===t||"#fff"===t,"aui-color-picker-small":"small"===e.size,"aui-color-picker-middle":"middle"===e.size},style:{borderRadius:e.width/2+"px",backgroundColor:t,width:e.width+"px",height:e.width+"px"},on:{click:function(n){e.change(t)}}},[t===e.value?n("icon",{staticClass:"aui-color-checked",style:{lineHeight:e.width+"px"},attrs:{type:"success-no-circle"}}):e._e()],1)])}))],1)},r=[],o={render:i,staticRenderFns:r};t.a=o},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"aui-icon",props:{type:String,isMsg:Boolean},computed:{className:function(){return"aui-icon aui_icon_"+this.type+" aui-icon-"+this.type.replace(/_/g,"-")}}}},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(101),r=function(e){return e&&e.__esModule?e:{default:e}}(i);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"aui-flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},methods:{onClick:function(e){this.$emit("click",e)}},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=["-moz-box-","-webkit-box-",""];t.default={name:"aui-flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{onClick:function(e){this.$emit("click",e)},buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={},t="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(e[t]=this.$parent.gutter+"px"),this.span)for(var n=0;n<i.length;n++)e[i[n]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:0}}}}})});