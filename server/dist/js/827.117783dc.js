"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[827],{6816:(t,e,n)=>{n.d(e,{Z:()=>u});var i=n(3385);function r(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=s(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(l)throw o}}}}function s(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const u=i.Z.extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return l(l({},i.Z.options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,n=r(this.groups);try{for(n.s();!(e=n.n()).done;){var i=e.value;i.toggle(t)}}catch(s){n.e(s)}finally{n.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:l({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots["default"]])}})},7620:(t,e,n)=>{n.d(e,{Z:()=>g});var i=n(6952),r=n(6505),s=n(7352),o=n(8085),a=n(2936),l=n(6286),c=n(4589),u=n(1824),d=n(3325);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=(0,d.Z)(i.Z,r.Z,o.Z,(0,s.d)("listItemGroup"),(0,a.d)("inputValue"));const g=p.extend().extend({name:"v-list-item",directives:{Ripple:l.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return f(f({"v-list-item":!0},r.Z.options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(r.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&(0,u.Jk)("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=f({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var e=this,n=this.generateRouteLink(),i=n.tag,r=n.data;r.attrs=f(f({},r.attrs),this.genAttrs()),r[this.to?"nativeOn":"on"]=f(f({},r[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===c.Do.enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(i="div"),this.inactive&&this.to&&(r.on=r.nativeOn,delete r.nativeOn);var s=this.$scopedSlots["default"]?this.$scopedSlots["default"]({active:this.isActive,toggle:this.toggle}):this.$slots["default"];return t(i,this.isActive?this.setTextColor(this.color,r):r,s)}})},1490:(t,e,n)=>{n.r(e),n.d(e,{default:()=>j});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",[n("v-row",{staticClass:"mb-8"},[n("div",{scopedSlots:t._u([{key:"item.dIngredients",fn:function(e){var i=e.item;return[n("v-list",t._l(i.dIngredients,(function(e){return n("v-list-item",{key:e},[t._v(t._s(e))])})),1)]}}])},[n("v-row",[n("h1",{staticStyle:{"font-size":"2.0em"},attrs:{id:"welcome"}},[t._v("Welcome, "+t._s(t.user)+" ")])]),n("v-row",{attrs:{justify:"center"}},[n("h3",{staticStyle:{"font-size":"1.5em"}},[t._v("Added Ingredients...")])]),n("v-row",{attrs:{justify:"center"}})],1)])],1)],1)},r=[],s=n(7212),o=n.n(s),a=n(9669),l=n.n(a);function c(t,e,n,i,r,s,o){try{var a=t[s](o),l=a.value}catch(c){return void n(c)}a.done?e(l):Promise.resolve(l).then(i,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var s=t.apply(e,n);function o(t){c(s,i,r,o,a,"next",t)}function a(t){c(s,i,r,o,a,"throw",t)}o(void 0)}))}}function d(t){for(var e=[],n=0;n<ingredientsArr.length;n++){var i=1;do{i++}while(null!=ingredientsArr[n]["strIngredient"+i]&&""!=ingredientsArr[n]["strIngredient"+i]);e.push({dIngredients:ingredientsArr[n]["addedIngredients"]})}return e}const h={created:function(){var t=this;return u(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l().get("/api/logininfo").then((function(e){return e.data.email?(console.log(e.data),t.user=e.data.name+"'s",t.useremail=e.data.email):(t.user="",t.useremail="unknown")}));case 2:return e.next=4,l().get("/api/listAddedIngredients").then((function(e){e.data?t.addedIngredients=d(e.data):console.log("fail")}));case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{addedIngredients:[]}}},f=h;var v=n(3736),p=n(3453),g=n.n(p),b=n(7524),m=n(247),y=n(6816),w=n(7620),O=n(2877),I=(0,v.Z)(f,i,r,!1,null,"884c0ec6",null);const j=I.exports;g()(I,{VApp:b.Z,VContainer:m.Z,VList:y.Z,VListItem:w.Z,VRow:O.Z})}}]);
//# sourceMappingURL=827.117783dc.js.map