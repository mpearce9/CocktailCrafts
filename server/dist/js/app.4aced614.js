(()=>{"use strict";var e={8131:(e,n,t)=>{var r=t(144),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(e.component,{tag:"component"})},a=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-card",{staticClass:"overflow-hidden",attrs:{color:"rgb(15,12,12)"}},[t("v-app-bar",{attrs:{fixed:"",color:"rgb(15,12,12)",dark:""}},[t("v-toolbar-title",{staticStyle:{cursor:"pointer"},on:{click:function(n){return e.$router.push("/")}}},[e._v("cocktail crafts")]),t("v-spacer"),t(e.component,{tag:"component"})],1),t("v-container",{staticStyle:{height:"100px"}})],1),t("v-main",{attrs:{color:"rgb(15, 12, 12)"}},[t("router-view")],1),t("v-divider",{attrs:{color:"white"}}),t("v-footer",{attrs:{dark:"",padless:"",color:"rgb(15,12,12)"}},[t("v-row",{attrs:{justify:"center","no-gutters":""}},[t("v-col",{staticClass:"rgb(15, 12, 12) py-4 text-center white--text",attrs:{cols:"12"}},[t("v-btn",{attrs:{plain:"",href:"/aboutus"}},[e._v(" ABOUT US ")]),t("v-btn",{attrs:{plain:"",href:"/contact"}},[e._v(" CONTACT ")]),t("v-btn",{attrs:{plain:"",disabled:""}},[e._v(" Copyright 2022 ")])],1)],1)],1)],1)},c=[],u=t(7212),l=t.n(u),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-btn",{attrs:{plain:"",href:"/"}},[e._v(" HOME ")]),t("v-btn",{attrs:{plain:"",href:"/discover"}},[e._v(" DISCOVER ")]),t("v-btn",{attrs:{plain:"",href:"/search"}},[e._v(" SEARCH ")]),t("v-btn",{attrs:{plain:"",href:"/account"}},[e._v(" ACCOUNT ")]),t("v-btn",{attrs:{plain:""},on:{click:e.logOut}},[e._v(" LOGOUT ")])],1)},f=[],d=t(9669),p=t.n(d);const h={data:function(){return{}},methods:{logOut:function(){p().post("/api/logout").then((function(e){console.log(e.data),"success"==e.data&&window.location.replace("/login")}))}}},v=h;var m=t(1001),b=t(3453),g=t.n(b),w=t(680),y=(0,m.Z)(v,s,f,!1,null,"0b2cb17b",null);const k=y.exports;g()(y,{VBtn:w.Z});var Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-btn",{attrs:{plain:"",href:"/"}},[e._v(" HOME ")]),t("v-btn",{attrs:{plain:"",href:"/login"}},[e._v(" LOGIN ")])],1)},E=[],C={},O=(0,m.Z)(C,Z,E,!1,null,"00363e52",null);const _=O.exports;function A(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void t(l)}c.done?n(u):Promise.resolve(u).then(r,o)}function S(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){A(a,r,o,i,c,"next",e)}function c(e){A(a,r,o,i,c,"throw",e)}i(void 0)}))}}g()(O,{VBtn:w.Z});var P=t(9669);const T={components:{"logged-in":k,regular:_},data:function(){return{component:""}},created:function(){var e=this;return S(l().mark((function n(){return l().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,P.get("/api/logininfo").then((function(n){return console.log(n.data),n.data.email?(localStorage.setItem("user","known"),e.component="logged-in"):(localStorage.setItem("user","unknown"),e.component="regular")}));case 2:case"end":return n.stop()}}),n)})))()},methods:{}},x=T;var V=t(7524),j=t(8320),N=t(3237),B=t(2102),L=t(9846),D=t(1418),I=t(899),M=t(7877),U=t(2877),$=t(9762),F=t(7921),H=(0,m.Z)(x,i,c,!1,null,null,null);const R=H.exports;g()(H,{VApp:V.Z,VAppBar:j.Z,VBtn:w.Z,VCard:N.Z,VCol:B.Z,VContainer:L.Z,VDivider:D.Z,VFooter:I.Z,VMain:M.Z,VRow:U.Z,VSpacer:$.Z,VToolbarTitle:F.qW});const q={name:"App",components:{baseLayout:R},computed:{component:function(){return R}}},G=q;var K=(0,m.Z)(G,o,a,!1,null,null,null);const W=K.exports;var z=t(1846),J=t(9132);r.Z.use(J.Z);const Q=new J.Z({theme:{options:{customProperties:!0},dark:!0,themes:{dark:{primary:z.Z.shades.white,secondary:z.Z.blue,background:z.Z.shades.black}}}});var X=t(6665),Y=t(7879);r.Z.config.productionTip=!1,r.Z.use(Y.Z),r.Z.config.devtools=!0,new r.Z({router:X.Z,vuetify:Q,render:function(e){return e(W)}}).$mount("#app")},6665:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(144),o=t(8345);r.Z.use(o.Z);var a=localStorage.getItem("user"),i=[{path:"/",name:"home",component:function(){return t.e(738).then(t.bind(t,738))},beforeEnter:function(e,n,t){"known"==a?t("/homelogin=true"):t(),t()}},{path:"/homelogin=true",name:"home",component:function(){return t.e(949).then(t.bind(t,6949))},beforeEnter:function(e,n,t){"known"==a?t():t("/home")}},{path:"/login",name:"login",component:function(){return Promise.all([t.e(978),t.e(788)]).then(t.bind(t,2788))},beforeEnter:function(e,n,t){"known"==a?t("/account"):t(),t()}},{path:"/create",name:"create",component:function(){return Promise.all([t.e(978),t.e(364),t.e(735),t.e(801)]).then(t.bind(t,3801))}},{path:"/aboutus",name:"About Us",component:function(){return t.e(199).then(t.bind(t,5199))}},{path:"/discover",name:"Discover",component:function(){return t.e(671).then(t.bind(t,5671))},beforeEnter:function(e,n,t){"unknown"==a?t("/login"):t(),t()}},{path:"/account",name:"Account",component:function(){return t.e(616).then(t.bind(t,4616))},beforeEnter:function(e,n,t){"unknown"==a?t("/login"):t(),t()}},{path:"/search",name:"search",component:function(){return Promise.all([t.e(978),t.e(364),t.e(735),t.e(277),t.e(473)]).then(t.bind(t,9139))},beforeEnter:function(e,n,t){"unknown"==a?t("/login"):t(),t()}},{path:"/recipe/:id",name:"recipe",props:!0,component:function(){return Promise.all([t.e(364),t.e(331)]).then(t.bind(t,4039))},beforeEnter:function(e,n,t){"unknown"==a?t("/login"):t(),t()}},{path:"/accountdetails",name:"Account Details",component:function(){return t.e(766).then(t.bind(t,5766))},beforeEnter:function(e,n,t){"unknown"==a?t("/login"):t(),t()}},{path:"/contact",name:"Contact",component:function(){return Promise.all([t.e(978),t.e(192)]).then(t.bind(t,192))}},{path:"/random",name:"Random",component:function(){return Promise.all([t.e(364),t.e(579)]).then(t.bind(t,2605))},beforeEnter:function(e,n,t){"unknown"==a?t("/login"):t(),t()}},{path:"/savedCocktails",name:"Saved Cocktails",component:function(){return Promise.all([t.e(978),t.e(364),t.e(735),t.e(277),t.e(558)]).then(t.bind(t,8866))},beforeEnter:function(e,n,t){"unknown"==a?t("/login"):t(),t()}}];const c=new o.Z({mode:"history",base:"/",routes:i})}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,r,o,a)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,o,a]=e[s],c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](r[u])))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{192:"31f10cf5",199:"9401db2c",277:"92e73602",331:"f98dfeef",364:"a4327144",473:"1eb20816",558:"4b0dab4c",579:"72e26748",616:"dca8356b",671:"94fea76b",735:"088f0317",738:"1d544841",766:"30d9901c",788:"81e71a8a",801:"ee07a506",949:"81bd0633",978:"43f8a82b"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+e+"."+{192:"4b607f2f",331:"fc8e4a9f",473:"cafa9dd4",558:"1452fb4c",579:"fc8e4a9f",735:"5b045295",788:"02717a45",801:"d9c737ae",978:"658c3edc"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="frontend:";t.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var d=(n,t)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/"})(),(()=>{var e=(e,n,t,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=r=>new Promise(((o,a)=>{var i=t.miniCssF(r),c=t.p+i;if(n(i,c))return o();e(r,c,o,a)})),o={143:0};t.f.miniCss=(e,n)=>{var t={192:1,331:1,473:1,558:1,579:1,735:1,788:1,801:1,978:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((()=>{o[e]=0}),(n=>{throw delete o[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((t,r)=>o=e[n]=[t,r]));r.push(o[2]=a);var i=t.p+t.u(n),c=new Error,u=r=>{if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var o,a,[i,c,u]=r,l=0;if(i.some((n=>0!==e[n]))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var s=u(t)}for(n&&n(r);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[998],(()=>t(8131)));r=t.O(r)})();
//# sourceMappingURL=app.4aced614.js.map