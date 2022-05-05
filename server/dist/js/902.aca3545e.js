"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[902],{7118:(t,n,i)=>{i.d(n,{EB:()=>c});var e=i(3237),o=i(4589),r=(0,o.Ji)("v-card__actions"),s=(0,o.Ji)("v-card__subtitle"),a=(0,o.Ji)("v-card__text"),c=(0,o.Ji)("v-card__title");e.Z},9330:(t,n,i)=>{i.d(n,{Z:()=>d});var e=i(5795),o=i(6952),r=i(4561),s=i(5907),a=i(6737),c=i(4589),u=i(1824),h=i(3325);function l(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}const d=(0,h.Z)(o.Z,r.Z,s.Z,a.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,n=t.activator,i=t.content,e=!this.bottom&&!this.left&&!this.top&&!this.right,o=!1!==this.attach?n.offsetLeft:n.left,r=0;return this.top||this.bottom||e?r=o+n.width/2-i.width/2:(this.left||this.right)&&(r=o+(this.right?n.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,n=t.activator,i=t.content,e=!1!==this.attach?n.offsetTop:n.top,o=0;return this.top||this.bottom?o=e+(this.bottom?n.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=e+n.height/2-i.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:(0,c.kb)(this.maxWidth),minWidth:(0,c.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===(0,c.sp)(this,"activator",!0)&&(0,u.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,n=e.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(n.focus=function(n){t.getActivator(n),t.runDelay("open")},n.blur=function(n){t.getActivator(n),t.runDelay("close")}),n.keydown=function(n){n.keyCode===c.Do.esc&&(t.getActivator(n),t.runDelay("close"))},n},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},l(t,this.contentClass,!0),l(t,"menuable__content__active",this.isActive),l(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var n=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[n.genTransition()]})),this.genActivator()])}})},1186:(t,n,i)=>{i.r(n),i.d(n,{default:()=>B});var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-app",[i("v-container",{attrs:{"grid-list-lg":"",fluid:"","fill-height":""}},[i("v-row",{attrs:{justify:"center"}},[i("h1",[t._v(t._s(t.curDrink.dName)+" "),i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on,o=n.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",color:"pink"},on:{click:t.favorite}},"v-btn",o,!1),e),[i("v-icon",{attrs:{dark:"",id:"favicon"}},[t._v(" "+t._s(t.curIcon)+" ")])],1)]}}])},[i("span",[t._v("Favorite Recipe")])])],1)]),i("v-row",{staticClass:"mt-12",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"4"}},[i("v-card",[i("v-card-title",[t._v("Ingredients ")]),i("v-list",{attrs:{expand:""}},t._l(t.curDrink.dIngredients,(function(n){return i("v-list-item",{key:n},[t._v(t._s(n))])})),1)],1)],1),i("v-col",[i("v-card",[i("v-container",[i("h1",[t._v("Instructions")]),i("p",[t._v(t._s(t.curDrink.instructions))])])],1)],1),i("v-col",{attrs:{cols:"3"}},[i("v-img",{attrs:{src:t.curDrink.img}})],1)],1),i("v-row",{attrs:{justify:"center",align:"end"}},[i("v-col",{staticClass:"text-center"},[i("v-btn",{on:{click:t.backToAccount}},[t._v("Back to Profile")]),t._v("      "),i("v-btn",{on:{click:t.backToRandom}},[t._v("Random!")])],1)],1),i("v-row",[i("v-col",[i("p")])],1),i("v-row",[i("v-col",[i("p")])],1)],1)],1)},o=[],r=i(7212),s=i.n(r),a=i(6665);function c(t,n,i,e,o,r,s){try{var a=t[r](s),c=a.value}catch(u){return void i(u)}a.done?n(c):Promise.resolve(c).then(e,o)}function u(t){return function(){var n=this,i=arguments;return new Promise((function(e,o){var r=t.apply(n,i);function s(t){c(r,e,o,s,a,"next",t)}function a(t){c(r,e,o,s,a,"throw",t)}s(void 0)}))}}var h=i(9669);function l(t){var n=[],i=1;do{var e="";if(""===t["strIngredient"+i])break;e=null!=t["strMeasure"+i]?t["strMeasure"+i]+" "+t["strIngredient"+i]:t["strIngredient"+i],n.push(e),i++}while(null!=t["strIngredient"+i]);return{dName:t["strDrink"],category:t["strCategory"],dIngredients:n,id:t["idDrink"],img:t["strDrinkThumb"],instructions:t["strInstructions"]}}const d={props:{id:String},data:function(){return{favBoolean:"",curIcon:"",curDrink:{dName:"",category:"",dIngredients:[],id:"",img:"",instructions:""},useremail:""}},created:function(){var t=this;return u(s().mark((function n(){return s().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,h.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(n){return t.curDrink=l(n.data.drinks[0])}));case 2:return n.next=4,h.get("/api/logininfo").then((function(n){return console.log(n.data),n.data.email?t.useremail=n.data.email:t.useremail="UnknownUser"}));case 4:return n.next=6,h.get("/api/isfavorite/"+t.curDrink.id).then((function(n){console.log(n.data),n.data.length>0?t.favBoolean=!0:t.favBoolean=!1}));case 6:return n.abrupt("return",t.curIcon=t.favBoolean?"mdi-heart":"mdi-heart-outline");case 7:case"end":return n.stop()}}),n)})))()},methods:{backToAccount:function(){a.Z.push({name:"Account"})},backToRandom:function(){window.location.reload()},favorite:function(){this.favBoolean=!this.favBoolean,this.curIcon=this.favBoolean?"mdi-heart":"mdi-heart-outline",console.log(this.curDrink),console.log(this.useremail),this.favBoolean?h.post("/api/favorite",{name:this.curDrink.dName,ingredients:this.curDrink.dIngredients,category:this.curDrink.category,cocktailid:this.curDrink.id,img:this.curDrink.img,instructions:this.curDrink.instructions,useremail:this.useremail}).then((function(t){console.log(t)}))["catch"]((function(t){return console.log(t)})):h.post("/api/unfavorite",{name:this.curDrink.dName,ingredients:this.curDrink.dIngredients,category:this.curDrink.category,cocktailid:this.curDrink.id,img:this.curDrink.img,instructions:this.curDrink.instructions,useremail:this.useremail}).then((function(t){console.log(t)}))["catch"]((function(t){return console.log(t)}))}}},v=d;var f=i(3736),p=i(3453),g=i.n(p),m=i(7524),k=i(3150),b=i(3237),_=i(7118),y=i(2102),D=i(247),w=i(6428),I=i(7047),Z=i(6816),x=i(7620),A=i(2877),C=i(9330),T=(0,f.Z)(v,e,o,!1,null,null,null);const B=T.exports;g()(T,{VApp:m.Z,VBtn:k.Z,VCard:b.Z,VCardTitle:_.EB,VCol:y.Z,VContainer:D.Z,VIcon:w.Z,VImg:I.Z,VList:Z.Z,VListItem:x.Z,VRow:A.Z,VTooltip:C.Z})}}]);
//# sourceMappingURL=902.aca3545e.js.map