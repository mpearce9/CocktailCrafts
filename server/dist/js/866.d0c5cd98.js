<<<<<<< HEAD:server/dist/js/555.34b0867a.js
"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[555],{1764:(t,e,n)=>{n.r(e),n.d(e,{default:()=>D});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{attrs:{"grid-list-lg":"","fill-width":"",fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v(t._s(t.user)+" Saved Cocktails")])]),n("v-row",{attrs:{justify:"center"}},[n("v-col",[n("v-data-table",{staticClass:"elevation-1 mx-16",attrs:{headers:t.apiHeaders,items:t.apiDrinkList,"no-data-text":"No Saved Drinks",loading:t.tableLoading,"loading-text":"Loading Saved Drinks..."},on:{"click:row":t.rowClicked},scopedSlots:t._u([{key:"item.dName",fn:function(e){var a=e.item;return[n("tr",[n("td",[n("v-img",{staticClass:"mr-6 rounded-circle",attrs:{"max-height":"128","max-width":"128",contain:"",src:a.img,"lazy-src":"https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"}})],1),n("td",{staticClass:"ml-4"},[t._v(t._s(a.dName))])])]}},{key:"item.dIngredients",fn:function(e){var a=e.item;return[n("v-list",t._l(a.dIngredients,(function(e){return n("v-list-item",{key:e},[t._v(t._s(e))])})),1)]}}])})],1)],1)],1)],1)},i=[],r=n(7212),s=n.n(r),o=n(9669),l=n.n(o),d=n(6665);function c(t,e,n,a,i,r,s){try{var o=t[r](s),l=o.value}catch(d){return void n(d)}o.done?e(l):Promise.resolve(l).then(a,i)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function s(t){c(r,a,i,s,o,"next",t)}function o(t){c(r,a,i,s,o,"throw",t)}s(void 0)}))}}function g(t){for(var e=[],n=0;n<t.length;n++){var a=1;do{a++}while(null!=t[n]["strIngredient"+a]&&""!=t[n]["strIngredient"+a]);e.push({dName:t[n]["name"],category:t[n]["category"],dIngredients:t[n]["ingredients"],id:t[n]["cocktailid"],img:t[n]["img"],instructions:t[n]["instructions"]})}return e}const m={created:function(){var t=this;return u(s().mark((function e(){return s().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l().get("/api/logininfo").then((function(e){return e.data.email?(console.log(e.data),t.user=e.data.name+"'s",t.useremail=e.data.email):(t.user="",t.useremail="unknown")}));case 2:return e.next=4,l().get("/api/listfavorites").then((function(e){e.data?(console.log(e.data),t.apiDrinkList=g(e.data),console.log(t.apiDrinkList),t.tableloading=!1):console.log("fail")}));case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{apiHeaders:[{text:"Drink Name",align:"start",value:"dName"},{text:"Category",value:"category"},{text:"Ingredients",value:"dIngredients"}],useremail:"",user:"",apiDrinkList:[],ingredientsList:[],tableloading:!0}},methods:{rowClicked:function(t,e){d.Z.push({name:"recipe",params:{id:t.id}})}}},v=m;var f=n(3736),p=n(3453),h=n.n(p),k=n(7524),w=n(2102),x=n(9846),y=n(6277),C=n(7047),Z=n(6816),_=n(7620),I=n(2877),L=(0,f.Z)(v,a,i,!1,null,"4a452c2d",null);const D=L.exports;h()(L,{VApp:k.Z,VCol:w.Z,VContainer:x.Z,VDataTable:y.Z,VImg:C.Z,VList:Z.Z,VListItem:_.Z,VRow:I.Z})}}]);
//# sourceMappingURL=555.34b0867a.js.map
=======
"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[866],{8866:(t,e,n)=>{n.r(e),n.d(e,{default:()=>D});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{attrs:{"grid-list-lg":"","fill-width":"",fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v(t._s(t.user)+" Saved Cocktails")])]),n("v-row",{attrs:{justify:"center"}},[n("v-col",[n("v-data-table",{staticClass:"elevation-1 mx-16",attrs:{headers:t.apiHeaders,items:t.apiDrinkList,"no-data-text":"No Saved Drinks",loading:t.tableLoading,"loading-text":"Loading Saved Drinks..."},on:{"click:row":t.rowClicked},scopedSlots:t._u([{key:"item.dName",fn:function(e){var a=e.item;return[n("tr",[n("td",[n("v-img",{staticClass:"mr-6 rounded-circle",attrs:{"max-height":"128","max-width":"128",contain:"",src:a.img,"lazy-src":"https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"}})],1),n("td",{staticClass:"ml-4"},[t._v(t._s(a.dName))])])]}},{key:"item.dIngredients",fn:function(e){var a=e.item;return[n("v-list",t._l(a.dIngredients,(function(e){return n("v-list-item",{key:e},[t._v(t._s(e))])})),1)]}}])})],1)],1)],1)],1)},i=[],r=n(7212),s=n.n(r),o=n(9669),l=n.n(o),d=n(6665);function c(t,e,n,a,i,r,s){try{var o=t[r](s),l=o.value}catch(d){return void n(d)}o.done?e(l):Promise.resolve(l).then(a,i)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function s(t){c(r,a,i,s,o,"next",t)}function o(t){c(r,a,i,s,o,"throw",t)}s(void 0)}))}}function g(t){for(var e=[],n=0;n<t.length;n++){var a=1;do{a++}while(null!=t[n]["strIngredient"+a]&&""!=t[n]["strIngredient"+a]);e.push({dName:t[n]["name"],category:t[n]["category"],dIngredients:t[n]["ingredients"],id:t[n]["cocktailid"],img:t[n]["img"],instructions:t[n]["instructions"]})}return e}const m={created:function(){var t=this;return u(s().mark((function e(){return s().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l().get("/api/logininfo").then((function(e){return e.data.email?(console.log(e.data),t.user=e.data.name+"'s",t.useremail=e.data.email):(t.user="",t.useremail="unknown")}));case 2:return e.next=4,l().get("/api/listfavorites").then((function(e){e.data?(console.log(e.data),t.apiDrinkList=g(e.data),console.log(t.apiDrinkList),t.tableloading=!1):console.log("fail")}));case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{apiHeaders:[{text:"Drink Name",align:"start",value:"dName"},{text:"Category",value:"category"},{text:"Ingredients",value:"dIngredients"}],useremail:"",user:"",apiDrinkList:[],ingredientsList:[],tableloading:!0}},methods:{rowClicked:function(t,e){d.Z.push({name:"recipe",params:{id:t.id}})}}},v=m;var f=n(1001),p=n(3453),h=n.n(p),k=n(7524),w=n(2102),x=n(9846),y=n(6277),C=n(7047),Z=n(6816),_=n(7620),I=n(2877),L=(0,f.Z)(v,a,i,!1,null,"4a452c2d",null);const D=L.exports;h()(L,{VApp:k.Z,VCol:w.Z,VContainer:x.Z,VDataTable:y.Z,VImg:C.Z,VList:Z.Z,VListItem:_.Z,VRow:I.Z})}}]);
//# sourceMappingURL=866.d0c5cd98.js.map
>>>>>>> df9f6e08101cb7d6f08ab2dc72b524702c2083d1:server/dist/js/866.d0c5cd98.js
