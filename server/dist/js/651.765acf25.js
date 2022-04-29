"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[651],{211:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S});var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-container",[i("v-row",{staticClass:"mb-8"},[i("v-card",{attrs:{color:"rgb(15,12,12)",id:"barShelf",width:"100%","justify-center":""}},[i("div",[i("v-row",[i("h1",{staticStyle:{"font-size":"2.0em",color:"blue"}},[e._v("Your Bar Shelf")]),i("hr",{staticStyle:{size:"20",color:"blue"}})]),i("v-row",{attrs:{justify:"center"}},[i("v-tab",[e._v("Search by Ingredients")])],1),0==e.selected?i("v-scroll-x-reverse-transition",{attrs:{mode:"in","hide-on-leave":!0}},[i(e.curComps[e.selected],{tag:"component",attrs:{option_searches:e.option_searches}})],1):i("v-scroll-x-transition",{attrs:{mode:"in","hide-on-leave":!0}},[i(e.curComps[e.selected],{tag:"component",attrs:{option_searches:e.option_searches}})],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",[i("v-data-table",{staticClass:"elevation-1 mx-16",attrs:{headers:e.sample_res_headers,items:e.sample_res},on:{"click:row":e.rowClicked},scopedSlots:e._u([{key:"item.liquor",fn:function(t){var r=t.item;return[i("v-list",e._l(r.liquor,(function(t){return i("v-list-item",{key:t},[e._v(e._s(t))])})),1)]}},{key:"item.mixer",fn:function(t){var r=t.item;return[i("v-list",e._l(r.mixer,(function(t){return i("v-list-item",{key:t},[e._v(e._s(t))])})),1)]}},{key:"item.bitters",fn:function(t){var r=t.item;return[i("v-list",e._l(r.bitters,(function(t){return i("v-list-item",{key:t},[e._v(e._s(t))])})),1)]}},{key:"item.garnish",fn:function(t){var r=t.item;return[i("v-list",e._l(r.garnish,(function(t){return i("v-list-item",{key:t},[e._v(e._s(t))])})),1)]}}])})],1)],1)],1),i("div",[i("v-btn",{attrs:{color:"info",href:"/add"}},[e._v("ADD INGREDIENTS")])],1)])],1)],1)],1)},n=[],s=i(69),a=i(6665);const o={components:{IngredientSearch:s.Z},data:function(){return{option_searches:[{name:"Liquor",options:["Whiskey","Gin","Vodka","Rum"]},{name:"Mixer",options:["Orange Juice","Cranberry Juice","Simple Syrup","Vermouth"]},{name:"Bitters",options:["Angostura","Orange","Peychauds","Cinnamon"]},{name:"Garnish",options:["Orange","Lime","Cherry","Olive"]}],sample_res_headers:[{text:"Drink Name",align:"start",value:"name"},{text:"Liquor",value:"liquor"},{text:"Mixer",value:"mixer"},{text:"Bitters",value:"bitters"},{text:"Garnish",value:"garnish"}],sample_res:[{name:"Old Fashioned",liquor:["Whiskey","Rye"],mixer:["Simple Syrup"],bitters:["Angostura"],garnish:["Orange"],instructions:"Add the sugar and bitters to a rocks glass, then add the water, and stir until the sugar is nearly dissolved. Fill the glass with large ice cubes, add the bourbon, and gently stir to combine. Express the oil of an orange peel over the glass, then drop in.",id:0},{name:"Martini",liquor:["Gin","Vodka"],mixer:["Vermouth"],bitters:["None"],garnish:["Olive"],instructions:"Combine vodka and dry vermouth in a cocktail mixing glass. Fill with ice and stir until chilled. Strain into a chilled martini glass. Garnish with three olives on a toothpick.",id:1},{name:"Screwdriver",liquor:["Vodka"],mixer:["Orange Juice"],bitters:["None"],garnish:["Orange"],instructions:"Divide ice between 4 glasses. Add vodka and orange juice to a pitcher and stir. Pour over ice. Alternatively, instead of using a pitcher, divide the vodka and orange juice between 4 glasses — Each glass should have 2 ounces of vodka and about 3 ounces of orange juice. Stir well then place a few orange wedges into the middle of the glass.",id:2}],curComps:[s.Z],selected:0}},methods:{rowClicked:function(e,t){a.Z.push({name:"recipe",params:{id:e.id}})}}},l=o;var c=i(3736),u=i(3453),d=i.n(u),h=i(7524),v=i(680),m=i(3237),p=i(2102),g=i(9846),f=i(6277),b=i(6816),_=i(7620),k=i(2877),y=i(5827),w=i(4227),x=(0,c.Z)(l,r,n,!1,null,"e3e617ce",null);const S=x.exports;d()(x,{VApp:h.Z,VBtn:v.Z,VCard:m.Z,VCol:p.Z,VContainer:g.Z,VDataTable:f.Z,VList:b.Z,VListItem:_.Z,VRow:k.Z,VScrollXReverseTransition:y.xy,VScrollXTransition:y.vQ,VTab:w.Z})}}]);
//# sourceMappingURL=651.765acf25.js.map