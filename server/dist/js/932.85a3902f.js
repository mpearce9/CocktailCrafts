<<<<<<< HEAD:server/dist/js/932.85a3902f.js
"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[932],{7118:(t,e,n)=>{n.d(e,{EB:()=>c});var i=n(3237),r=n(4589),s=(0,r.Ji)("v-card__actions"),o=(0,r.Ji)("v-card__subtitle"),a=(0,r.Ji)("v-card__text"),c=(0,r.Ji)("v-card__title");i.Z},6428:(t,e,n)=>{n.d(e,{Z:()=>m});var i,r=n(6210),s=n(6952),o=n(9131),a=n(8085),c=n(4589),l=n(144),u=n(3325);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var g=(0,u.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots["default"]&&(t=this.$slots["default"][0].text.trim()),(0,c.RB)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,c.XP)(t).find((function(e){return t[e]}));return e&&i[e]||(0,c.kb)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:d({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=d(d({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t["class"]=d(d({},t["class"]),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),r="material-icons",s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),v(r)&&(r="")),i["class"][r]=!0,i["class"][t]=!o;var a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});const m=l.Z.extend({name:"v-icon",$_wrapperFor:g,functional:!0,render:function(t,e){var n=e.data,i=e.children,r="";return n.domProps&&(r=n.domProps.textContent||n.domProps.innerHTML||r,delete n.domProps.textContent,delete n.domProps.innerHTML),t(g,n,r?[r]:i)}})},9330:(t,e,n)=>{n.d(e,{Z:()=>d});var i=n(5795),r=n(6952),s=n(4561),o=n(5907),a=n(6737),c=n(4589),l=n(1824),u=n(3325);function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d=(0,u.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,r=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||i?s=r+e.width/2-n.width/2:(this.left||this.right)&&(s=r+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=i+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=i+e.height/2-n.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),!1===this.attach&&(r+=this.pageYOffset),"".concat(this.calcYOverflow(r),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:(0,c.kb)(this.maxWidth),minWidth:(0,c.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===(0,c.sp)(this,"activator",!0)&&(0,l.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=i.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===c.Do.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},h(t,this.contentClass,!0),h(t,"menuable__content__active",this.isActive),h(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},8402:(t,e,n)=>{n.r(e),n.d(e,{default:()=>B});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{attrs:{"grid-list-lg":"",fluid:"","fill-height":""}},[n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v(t._s(t.curDrink.dName)+" "),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",color:"pink"},on:{click:t.favorite}},"v-btn",r,!1),i),[n("v-icon",{attrs:{dark:"",id:"favicon"}},[t._v(" "+t._s(t.curIcon)+" ")])],1)]}}])},[n("span",[t._v("Favorite Recipe")])])],1)]),n("v-row",{staticClass:"mt-12",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-card",[n("v-card-title",[t._v("Ingredients ")]),n("v-list",{attrs:{expand:""}},t._l(t.curDrink.dIngredients,(function(e){return n("v-list-item",{key:e},[t._v(t._s(e))])})),1)],1)],1),n("v-col",[n("v-card",[n("v-container",[n("h1",[t._v("Instructions")]),n("p",[t._v(t._s(t.curDrink.instructions))])])],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-img",{attrs:{src:t.curDrink.img}})],1)],1),n("v-row",{attrs:{justify:"center",align:"end"}},[n("v-btn",{on:{click:t.backToSearch}},[t._v("Back to Search")])],1)],1)],1)},r=[],s=n(7212),o=n.n(s),a=n(6665);function c(t,e,n,i,r,s,o){try{var a=t[s](o),c=a.value}catch(l){return void n(l)}a.done?e(c):Promise.resolve(c).then(i,r)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var s=t.apply(e,n);function o(t){c(s,i,r,o,a,"next",t)}function a(t){c(s,i,r,o,a,"throw",t)}o(void 0)}))}}var u=n(9669);function h(t){var e=[],n=1;do{var i="";i=null!=t["strMeasure"+n]?t["strMeasure"+n]+" "+t["strIngredient"+n]:t["strIngredient"+n],e.push(i),n++}while(null!=t["strIngredient"+n]);return{dName:t["strDrink"],category:t["strCategory"],dIngredients:e,id:t["idDrink"],img:t["strDrinkThumb"],instructions:t["strInstructions"]}}const d={props:{id:String},data:function(){return{favBoolean:"",curIcon:"",curDrink:{dName:"",category:"",dIngredients:[],id:"",img:"",instructions:""},useremail:""}},created:function(){var t=this;return l(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.get("/api/idsearch",{params:{id:t.id}}).then((function(e){return t.curDrink=h(e.data.drinks[0])}));case 2:return e.next=4,u.get("/api/logininfo").then((function(e){return console.log(e.data),e.data.email?t.useremail=e.data.email:t.useremail="UnknownUser"}));case 4:return e.next=6,u.get("/api/isfavorite/"+t.curDrink.id).then((function(e){console.log(e.data),e.data.length>0?t.favBoolean=!0:t.favBoolean=!1}));case 6:return e.abrupt("return",t.curIcon=t.favBoolean?"mdi-heart":"mdi-heart-outline");case 7:case"end":return e.stop()}}),e)})))()},methods:{backToSearch:function(){a.Z.push({name:"search"})},favorite:function(){this.favBoolean=!this.favBoolean,this.curIcon=this.favBoolean?"mdi-heart":"mdi-heart-outline",console.log(this.curDrink),console.log(this.useremail),this.favBoolean?u.post("/api/favorite",{name:this.curDrink.dName,ingredients:this.curDrink.dIngredients,category:this.curDrink.category,cocktailid:this.curDrink.id,img:this.curDrink.img,instructions:this.curDrink.instructions,useremail:this.useremail}).then((function(t){console.log(t)}))["catch"]((function(t){return console.log(t)})):u.post("/api/unfavorite",{name:this.curDrink.dName,ingredients:this.curDrink.dIngredients,category:this.curDrink.category,cocktailid:this.curDrink.id,img:this.curDrink.img,instructions:this.curDrink.instructions,useremail:this.useremail}).then((function(t){console.log(t)}))["catch"]((function(t){return console.log(t)}))}}},f=d;var v=n(3736),p=n(3453),g=n.n(p),m=n(7524),b=n(680),k=n(3237),y=n(7118),D=n(2102),x=n(9846),w=n(6428),_=n(7047),C=n(6816),S=n(7620),I=n(2877),Z=n(9330),O=(0,v.Z)(f,i,r,!1,null,null,null);const B=O.exports;g()(O,{VApp:m.Z,VBtn:b.Z,VCard:k.Z,VCardTitle:y.EB,VCol:D.Z,VContainer:x.Z,VIcon:w.Z,VImg:_.Z,VList:C.Z,VListItem:S.Z,VRow:I.Z,VTooltip:Z.Z})}}]);
//# sourceMappingURL=932.85a3902f.js.map
=======
"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[331],{7118:(t,e,n)=>{n.d(e,{EB:()=>c});var i=n(3237),r=n(4589),s=(0,r.Ji)("v-card__actions"),o=(0,r.Ji)("v-card__subtitle"),a=(0,r.Ji)("v-card__text"),c=(0,r.Ji)("v-card__title");i.Z},6428:(t,e,n)=>{n.d(e,{Z:()=>m});var i,r=n(6210),s=n(6952),o=n(9131),a=n(8085),c=n(4589),l=n(144),u=n(3325);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var g=(0,u.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots["default"]&&(t=this.$slots["default"][0].text.trim()),(0,c.RB)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,c.XP)(t).find((function(e){return t[e]}));return e&&i[e]||(0,c.kb)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:d({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=d(d({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t["class"]=d(d({},t["class"]),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),r="material-icons",s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),v(r)&&(r="")),i["class"][r]=!0,i["class"][t]=!o;var a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});const m=l.Z.extend({name:"v-icon",$_wrapperFor:g,functional:!0,render:function(t,e){var n=e.data,i=e.children,r="";return n.domProps&&(r=n.domProps.textContent||n.domProps.innerHTML||r,delete n.domProps.textContent,delete n.domProps.innerHTML),t(g,n,r?[r]:i)}})},9330:(t,e,n)=>{n.d(e,{Z:()=>d});var i=n(5795),r=n(6952),s=n(4561),o=n(5907),a=n(6737),c=n(4589),l=n(1824),u=n(3325);function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d=(0,u.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,r=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||i?s=r+e.width/2-n.width/2:(this.left||this.right)&&(s=r+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=i+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=i+e.height/2-n.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),!1===this.attach&&(r+=this.pageYOffset),"".concat(this.calcYOverflow(r),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:(0,c.kb)(this.maxWidth),minWidth:(0,c.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===(0,c.sp)(this,"activator",!0)&&(0,l.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=i.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===c.Do.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},h(t,this.contentClass,!0),h(t,"menuable__content__active",this.isActive),h(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},4039:(t,e,n)=>{n.r(e),n.d(e,{default:()=>B});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{attrs:{"grid-list-lg":"",fluid:"","fill-height":""}},[n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v(t._s(t.curDrink.dName)+" "),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",color:"pink"},on:{click:t.favorite}},"v-btn",r,!1),i),[n("v-icon",{attrs:{dark:"",id:"favicon"}},[t._v(" "+t._s(t.curIcon)+" ")])],1)]}}])},[n("span",[t._v("Favorite Recipe")])])],1)]),n("v-row",{staticClass:"mt-12",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-card",[n("v-card-title",[t._v("Ingredients ")]),n("v-list",{attrs:{expand:""}},t._l(t.curDrink.dIngredients,(function(e){return n("v-list-item",{key:e},[t._v(t._s(e))])})),1)],1)],1),n("v-col",[n("v-card",[n("v-container",[n("h1",[t._v("Instructions")]),n("p",[t._v(t._s(t.curDrink.instructions))])])],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-img",{attrs:{src:t.curDrink.img}})],1)],1),n("v-row",{attrs:{justify:"center",align:"end"}},[n("v-btn",{on:{click:t.backToSearch}},[t._v("Back to Search")])],1)],1)],1)},r=[],s=n(7212),o=n.n(s),a=n(6665);function c(t,e,n,i,r,s,o){try{var a=t[s](o),c=a.value}catch(l){return void n(l)}a.done?e(c):Promise.resolve(c).then(i,r)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var s=t.apply(e,n);function o(t){c(s,i,r,o,a,"next",t)}function a(t){c(s,i,r,o,a,"throw",t)}o(void 0)}))}}var u=n(9669);function h(t){var e=[],n=1;do{var i="";i=null!=t["strMeasure"+n]?t["strMeasure"+n]+" "+t["strIngredient"+n]:t["strIngredient"+n],e.push(i),n++}while(null!=t["strIngredient"+n]);return{dName:t["strDrink"],category:t["strCategory"],dIngredients:e,id:t["idDrink"],img:t["strDrinkThumb"],instructions:t["strInstructions"]}}const d={props:{id:String},data:function(){return{favBoolean:"",curIcon:"",curDrink:{dName:"",category:"",dIngredients:[],id:"",img:"",instructions:""},useremail:""}},created:function(){var t=this;return l(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.get("/api/idsearch",{params:{id:t.id}}).then((function(e){return t.curDrink=h(e.data.drinks[0])}));case 2:return e.next=4,u.get("/api/logininfo").then((function(e){return console.log(e.data),e.data.email?t.useremail=e.data.email:t.useremail="UnknownUser"}));case 4:return e.next=6,u.get("/api/isfavorite/"+t.curDrink.id).then((function(e){console.log(e.data),e.data.length>0?t.favBoolean=!0:t.favBoolean=!1}));case 6:return e.abrupt("return",t.curIcon=t.favBoolean?"mdi-heart":"mdi-heart-outline");case 7:case"end":return e.stop()}}),e)})))()},methods:{backToSearch:function(){a.Z.push({name:"search"})},favorite:function(){this.favBoolean=!this.favBoolean,this.curIcon=this.favBoolean?"mdi-heart":"mdi-heart-outline",console.log(this.curDrink),console.log(this.useremail),this.favBoolean?u.post("/api/favorite",{name:this.curDrink.dName,ingredients:this.curDrink.dIngredients,category:this.curDrink.category,cocktailid:this.curDrink.id,img:this.curDrink.img,instructions:this.curDrink.instructions,useremail:this.useremail}).then((function(t){console.log(t)}))["catch"]((function(t){return console.log(t)})):u.post("/api/unfavorite",{name:this.curDrink.dName,ingredients:this.curDrink.dIngredients,category:this.curDrink.category,cocktailid:this.curDrink.id,img:this.curDrink.img,instructions:this.curDrink.instructions,useremail:this.useremail}).then((function(t){console.log(t)}))["catch"]((function(t){return console.log(t)}))}}},f=d;var v=n(1001),p=n(3453),g=n.n(p),m=n(7524),b=n(680),k=n(3237),y=n(7118),D=n(2102),x=n(9846),w=n(6428),_=n(7047),C=n(6816),S=n(7620),I=n(2877),Z=n(9330),O=(0,v.Z)(f,i,r,!1,null,null,null);const B=O.exports;g()(O,{VApp:m.Z,VBtn:b.Z,VCard:k.Z,VCardTitle:y.EB,VCol:D.Z,VContainer:x.Z,VIcon:w.Z,VImg:_.Z,VList:C.Z,VListItem:S.Z,VRow:I.Z,VTooltip:Z.Z})}}]);
//# sourceMappingURL=331.f98dfeef.js.map
>>>>>>> 4867fcfe9855869b54a2eb2df697ea4acbd98969:server/dist/js/331.f98dfeef.js
