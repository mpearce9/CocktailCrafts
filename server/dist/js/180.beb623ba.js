"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[180],{3733:(e,t,n)=>{n.d(t,{Z:()=>w});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-lg":"","fill-width":"",fluid:""}},[n("v-row",{staticClass:"pt-3 mx-16",attrs:{justify:"center",align:"start"}},[n("v-col",{attrs:{cols:"10"}},[n("v-autocomplete",{attrs:{items:e.ingredient_options,label:"Ingredients",multiple:"",chips:"","small-chips":"",clearable:"","deletable-chips":"",dense:"",outlined:"","menu-props":{offsetY:!0}},model:{value:e.curIngredient,callback:function(t){e.curIngredient=t},expression:"curIngredient"}})],1),n("v-col",{attrs:{cols:"2"}},[e.searchButton?n("v-btn",{attrs:{color:"secondary",dark:"",block:""},on:{click:e.onSearch}},[e._v("Search")]):n("v-btn",{attrs:{color:"secondary",dark:"",block:""},on:{click:e.onAdd}},[e._v("Add Ingredients")])],1)],1)],1)},s=[];const r={props:{ingredient_options:Array,searchButton:{type:Boolean,default:!0}},data:function(){return{option_searches:[{name:"Liquor",options:["Whiskey","Gin","Vodka","Rum"]},{name:"Mixer",options:["Orange Juice","Cranberry Juice","Simple Syrup","Vermouth"]},{name:"Bitters",options:["Angostura","Orange","Peychauds","Cinnamon"]},{name:"Garnish",options:["Orange","Lime","Cherry","Olive"]}],curIngredient:[]}},created:function(){this.curIngredient=this.curSearch},methods:{onSearch:function(){this.$emit("ingredientSearch",this.curIngredient)},onAdd:function(){this.$emit("ingredientAdd",this.curIngredient)}}},a=r;var o=n(3736),l=n(3453),c=n.n(l),u=n(9811),h=n(5978),d=n(6290),p=n(4589);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=m(m({},u.l),{},{offsetY:!0,offsetOverflow:!0,transition:!1});const v=u.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:u.Z.options.props.menuProps.type,default:function(){return I}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},u.Z.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=(0,p.qF)(t,e.itemText),i=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=u.Z.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},I),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=u.Z.options.computed.listData.call(this);return e.props=m(m({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((function(e){return e===i}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===p.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===p.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==p.Do.backspace&&e!==p.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,s=e!==i-1?e:e-1,r=this.selectedItems[s];r?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,u.Z.options.methods.clearableCallback.call(this)},genInput:function(){var e=h.Z.options.methods.genInput.call(this);return e.data=(0,d.ZP)(e.data,{attrs:{"aria-activedescendant":(0,p.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,p.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=u.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?u.Z.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[p.Do.home,p.Do.end].includes(t)||u.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){u.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){u.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){u.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",s),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}});var S=n(3150),y=n(2102),x=n(247),b=n(2877),D=(0,o.Z)(a,i,s,!1,null,null,null);const w=D.exports;c()(D,{VAutocomplete:v,VBtn:S.Z,VCol:y.Z,VContainer:x.Z,VRow:b.Z})},1180:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",[n("v-row",{staticClass:"mb-8"},[n("v-card",{attrs:{color:"rgb(15,12,12)",id:"barShelf",width:"100%","justify-center":""}},[n("div",[n("v-row",{attrs:{justify:"center"}},[n("h1",[e._v("Your Bar Shelf")])]),n("IngredientSearch",{attrs:{searchButton:!1,ingredient_options:e.ingredientsList},on:{ingredientAdd:e.onIngredientAdd}}),n("v-row",{attrs:{justify:"center"}},[n("v-col",[n("v-data-table",{staticClass:"elevation-1 mx-16",attrs:{headers:e.ingredientHeaders,items:e.ownedIngredients,"show-select":"","item-key":"ingredient","no-data-text":"Your Bar Shelf is Empty"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)])],1)],1)],1)},s=[],r=n(7212),a=n.n(r),o=n(3733);n(6665);function l(e,t,n,i,s,r,a){try{var o=e[r](a),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(i,s)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function a(e){l(r,i,s,a,o,"next",e)}function o(e){l(r,i,s,a,o,"throw",e)}a(void 0)}))}}const u={components:{IngredientSearch:o.Z},data:function(){return{ingredientHeaders:[{text:"Ingredient",value:"ingredient"}],ingredientsList:[],ownedIngredients:[],selected:[]}},created:function(){var e=this;return c(a().mark((function t(){return a().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!localStorage.getItem("ingredient-list")){t.next=4;break}e.ingredientsList=JSON.parse(localStorage.getItem("ingredient-list")),t.next=6;break;case 4:return t.next=6,axios.get("/api/getIngredients").then((function(t){e.ingredientsList=preprocessIngredientsList(t.data.drinks),localStorage.setItem("ingredient-list",JSON.stringify(e.ingredientsList))}));case 6:case"end":return t.stop()}}),t)})))()},methods:{onIngredientAdd:function(e){var t=this;e.forEach((function(e){t.ownedIngredients.push({ingredient:e,selected:!1})}))}}},h=u;var d=n(3736),p=n(3453),f=n.n(p),m=n(7524),g=n(3237),I=n(2102),v=n(247),S=n(6277),y=n(2877),x=(0,d.Z)(h,i,s,!1,null,"65e7de3a",null);const b=x.exports;f()(x,{VApp:m.Z,VCard:g.Z,VCol:I.Z,VContainer:v.Z,VDataTable:S.Z,VRow:y.Z})}}]);
//# sourceMappingURL=180.beb623ba.js.map