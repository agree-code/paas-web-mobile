!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AUI=e():t.AUI=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=486)}({0:function(t,e){t.exports=function(t,e,i,s,n,o){var r,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,u=t.default);var h="function"==typeof u?u.options:u;e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0),i&&(h.functional=!0),n&&(h._scopeId=n);var d;if(o?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=d):s&&(d=s),d){var l=h.functional,f=l?h.render:h.beforeCreate;l?(h._injectStyles=d,h.render=function(t,e){return d.call(e),f(t,e)}):h.beforeCreate=f?[].concat(f,d):[d]}return{esModule:r,exports:u,options:h}}},175:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"aui-swipeout-button",props:{text:String,backgroundColor:String,type:String,width:{type:Number,default:80},keyWord:String},methods:{onButtonClick:function(){"aui-swipeout-item"===this.$parent.$options._componentTag&&this.$parent.onItemClick(this.keyWord)}}}},201:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(265),n=function(t){return t&&t.__esModule?t:{default:t}}(s);n.default.install=function(t){t.component(n.default.name,n.default)},e.default=n.default},265:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(175),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var r=i(266),u=i(0),a=u(n.a,r.a,!1,null,null,null);e.default=a.exports},266:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"aui-swipeout-button",class:{"aui-swipeout-button-primary":"primary"===t.type,"aui-swipeout-button-warn":"warn"===t.type,"aui-swipeout-button-default":"default"===t.type},style:{width:t.width+"px",backgroundColor:t.backgroundColor},attrs:{type:"button"},on:{click:t.onButtonClick}},[t._t("default",[t._v(t._s(t.text))])],2)},n=[],o={render:s,staticRenderFns:n};e.a=o},267:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(69),o=s(n),r=i(201),u=s(r);e.default={name:"aui-swipeout-item",components:{SwipeoutButton:u.default},props:{leftMenu:Array,rightMenu:Array,sensitivity:{type:Number,default:0},autoCloseOnButtonClick:{type:Boolean,default:!0},disabled:Boolean,threshold:{type:Number,default:.3},underlayColor:String,transitionMode:{type:String,default:"reveal"}},mounted:function(){var t=this;if(this.leftMenu)for(var e=0;e<this.leftMenu.length;e++)this.leftMenu[e].keyWord="left"+e;if(this.rightMenu)for(var i=0;i<this.rightMenu.length;i++)this.rightMenu[i].keyWord="right"+i;this.$nextTick(function(){t.render()})},methods:{render:function(){this.target=this.$refs.content,(this.$slots["left-menu"]||this.leftMenu)&&(this.hasLeftMenu=!0,this.caculateMenuWidth("left")),(this.$slots["right-menu"]||this.rightMenu)&&(this.hasRightMenu=!0,this.caculateMenuWidth("right"))},caculateMenuWidth:function(t){if(this.rightMenu||this.leftMenu){for(var e=0,i=this[t+"Menu"],s=0;s<i.length;s++)e+=i[s].width||80;this[t+"MenuWidth"]=e}else{var n=this.$slots[t+"-menu"][0].children.filter(function(t){return t.tag}),o=0;n.forEach(function(t){var e=t.componentOptions?t.componentOptions.propsData:{};o+=e.width||80}),this[t+"MenuWidth"]=o}},onContentClick:function(){-1===this.styles.transform.indexOf("(0px, 0, 0)")&&this._setClose(200)},onItemClick:function(t){t&&this.$emit("itemClick",t),this.autoCloseOnButtonClick&&this._setClose()},start:function(t){if(!this.disabled&&!this.isOpen&&"button"!==t.target.nodeName.toLowerCase()){if("aui-swipeout"===this.$parent.$options._componentTag){var e=this.$parent.$children.filter(function(t){return-1===t.$data.styles.transform.indexOf("(0px, 0, 0)")});if(e.length>0)return e.forEach(function(t){t.setOffset(0,!0)}),void t.preventDefault()}var i=t.touches?t.touches[0]:t;this.pageX=i.pageX,this.pageY=i.pageY}},move:function(t){if(!this.disabled){if("button"===t.target.nodeName.toLowerCase())return void t.preventDefault();if(void 0===this.pageX)return void t.preventDefault();var e=t.touches?t.touches[0]:t;if(this.distX=e.pageX-this.pageX,this.distY=e.pageY-this.pageY,this.direction||(this.direction=this.distX>0?"left":"right"),("right"===this.direction&&this.distX>0&&this.hasRightMenu||"left"===this.direction&&this.distX<0&&this.hasLeftMenu)&&(this.valid=!0,t.preventDefault()),void 0===this.valid&&(this.distX>0&&!1===this.hasLeftMenu?this.valid=!1:this.distX<0&&!1===this.hasRightMenu?this.valid=!1:Math.abs(this.distX)>this.sensitivity||Math.abs(this.distY)>this.sensitivity?this.valid=Math.abs(this.distX)>Math.abs(this.distY):t.preventDefault()),!0===this.valid){if(Math.abs(this.distX)<=this.menuWidth)this.setOffset(this.distX,!1);else{var i=.5*(Math.abs(this.distX)-this.menuWidth),s=(this.menuWidth+i)*(this.distX<0?-1:1);this.setOffset(s,!1)}t.preventDefault()}}},end:function(t){if(!this.disabled&&"button"!==t.target.nodeName.toLowerCase()){if(!0===this.valid){if(this.distX<0&&"right"===this.direction){var e=this.threshold<=1?this.rightMenuWidth*this.threshold:this.threshold;this.distX<-e?(this.setOffset(-this.rightMenuWidth,!0),this.$emit("open"),this.isOpen=!0):this._setClose()}else if(this.distX>0&&"left"===this.direction){var i=this.threshold<=1?this.leftMenuWidth*this.threshold:this.threshold;this.distX>i?(this.setOffset(this.leftMenuWidth,!0),this.$emit("open"),this.isOpen=!0):this._setClose()}}else this.pageX;this.pageX=this.pageY=this.valid=void 0,this.direction=""}},setOffset:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments[2];if(this.isAnimated=i,!this.disabled||s){if(("right"===this.direction&&t>0||"left"===this.direction&&t<0)&&(t=0),0===t&&setTimeout(function(){e.isOpen=!1},300),t<0&&Math.abs(t)===this.rightMenuWidth?this.distX=-this.rightMenuWidth:t>0&&Math.abs(t)===this.leftMenuWidth&&(this.distX=this.leftMenuWidth),i&&this.target){this.target&&this.target.classList.add("aui-swipeout-content-animated");var n=function(t,e){return function(){e.classList.remove("aui-swipeout-content-animated"),t.isAnimated=!1,e.removeEventListener("webkitTransitionEnd",n),e.removeEventListener("transitionend",n)}}(this,this.target);this.target.addEventListener("webkitTransitionEnd",n),this.target.addEventListener("transitionend",n)}this.styles.transform="translate3d("+t+"px, 0, 0)"}},_setClose:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.setOffset(0,!0),this.$emit("close"),e?setTimeout(function(){t.isOpen=!1},e):this.isOpen=!1,this.distX=0},open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right";this.setOffset("right"===t?-this.rightMenuWidth:this.leftMenuWidth,!0,!0)},close:function(){this.setOffset(0,!0,!0)}},computed:{menuWidth:function(){return!this.hasLeftMenu&&this.hasRightMenu?this.rightMenuWidth:this.hasLeftMenu&&!this.hasRightMenu?this.leftMenuWidth:this.hasLeftMenu&&this.hasRightMenu?this.distX<0?this.rightMenuWidth:this.leftMenuWidth:void 0},buttonBoxStyle:function(){return{backgroundColor:this.underlayColor}},leftButtonBoxStyle:function(){var t=JSON.parse((0,o.default)(this.buttonBoxStyle));if("follow"===this.transitionMode){var e=-1===this.styles.transform.indexOf("(0px, 0, 0)")?this.leftMenuWidth-this.distX:this.leftMenuWidth;t.transform="translate3d(-"+e+"px, 0, 0)"}return t},rightButtonBoxStyle:function(){var t=JSON.parse((0,o.default)(this.buttonBoxStyle));if("follow"===this.transitionMode){var e=-1===this.styles.transform.indexOf("(0px, 0, 0)")?this.rightMenuWidth-Math.abs(this.distX):this.rightMenuWidth;e<0&&(e=0),this.isAnimated&&(t.transition="transform 0.2s"),t.transform="translate3d("+e+"px, 0, 0)"}return t}},data:function(){return{pageX:void 0,pageY:void 0,distX:0,distY:0,hasLeftMenu:!1,hasRightMenu:!1,animated:!1,isAnimated:!1,isOpen:!1,styles:{transform:"translate3d(0px, 0, 0)"},direction:"",leftMenuWidth:160,rightMenuWidth:160}},watch:{disabled:function(t,e){!0!==t||e||this.setOffset(0,!0,!0)}}}},486:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(487),n=function(t){return t&&t.__esModule?t:{default:t}}(s);n.default.install=function(t){t.component(n.default.name,n.default)},e.default=n.default},487:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(267),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var r=i(488),u=i(0),a=u(n.a,r.a,!1,null,null,null);e.default=a.exports},488:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aui-swipeout-item",on:{touchstart:t.start,mousedown:t.start,touchmove:t.move,mousemove:t.move,touchend:t.end,mouseup:t.end,touchcancel:t.end}},[t.leftMenu?i("div",{directives:[{name:"show",rawName:"v-show",value:t.distX>=0,expression:"distX >= 0"}],staticClass:"aui-swipeout-button-box aui-swipeout-button-box-left",style:t.leftButtonBoxStyle},[t._l(t.leftMenu,function(t){return[i("swipeout-button",{attrs:{text:t.text,keyWord:t.keyWord,backgroundColor:t.backgroundColor,type:t.type,width:t.width}})]})],2):i("div",{directives:[{name:"show",rawName:"v-show",value:t.distX>=0,expression:"distX >= 0"}],staticClass:"aui-swipeout-button-box aui-swipeout-button-box-left",style:t.leftButtonBoxStyle},[t._t("left-menu")],2),t._v(" "),t.rightMenu?i("div",{directives:[{name:"show",rawName:"v-show",value:t.distX<=0,expression:"distX <= 0"}],staticClass:"aui-swipeout-button-box",style:t.rightButtonBoxStyle},[t._l(t.rightMenu,function(t){return[i("swipeout-button",{attrs:{text:t.text,keyWord:t.keyWord,backgroundColor:t.backgroundColor,type:t.type,width:t.width}})]})],2):i("div",{directives:[{name:"show",rawName:"v-show",value:t.distX<=0,expression:"distX <= 0"}],staticClass:"aui-swipeout-button-box",style:t.rightButtonBoxStyle},[t._t("right-menu")],2),t._v(" "),t.leftMenu||t.rightMenu?i("div",{ref:"content",staticClass:"aui-swipeout-content",style:t.styles,on:{mousedown:t.onContentClick,touchstart:t.onContentClick}},[t._t("default")],2):i("div",{ref:"content",staticClass:"aui-swipeout-content",style:t.styles,on:{mousedown:t.onContentClick,touchstart:t.onContentClick}},[t._t("content")],2)])},n=[],o={render:s,staticRenderFns:n};e.a=o},69:function(t,e,i){t.exports={default:i(74),__esModule:!0}},7:function(t,e){var i=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=i)},74:function(t,e,i){var s=i(7),n=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}}})});