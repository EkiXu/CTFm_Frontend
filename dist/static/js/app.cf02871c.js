(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"0542":function(e,t,n){},1551:function(e,t,n){},"21bb":function(e,t,n){"use strict";n("2dad")},"28e0":function(e,t,n){"use strict";n("0542")},"2dad":function(e,t,n){},3786:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l}));var a=n("b775"),r=function(e){return Object(a["a"])({url:"/auth/obtain_token/",method:"post",data:e})},s=function(e){return Object(a["a"])({url:"/auth/refresh_token/",method:"post",data:e})},o=function(e,t){return Object(a["a"])({url:"/auth/activate/"+e+"/"+t+"/",method:"get"})},c=function(e){return Object(a["a"])({url:"/auth/reset_password_email/",method:"post",data:e})},i=function(e,t,n){return Object(a["a"])({url:"/auth/reset_password/"+e+"/"+t+"/",method:"post",data:n})},u=function(e){return Object(a["a"])({url:"/auth/register/",method:"post",data:e})},l=function(){return Object(a["a"])({url:"/auth/recaptcha/",method:"get"})}},"40a0":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"c",(function(){return d}));var a=n("b775"),r=function(){return Object(a["a"])({url:"/category/",method:"get"})},s=function(e){return Object(a["a"])({url:"/challenge/",params:{categoryName:e},method:"get"})},o=function(e){return Object(a["a"])({url:"/challenge/"+e,method:"get"})},c=function(e,t){return Object(a["a"])({url:"/challenge/"+t+"/_checkFlag/",method:"post",data:e})},i=function(e){return Object(a["a"])({url:"/challenge/"+e+"/env/",method:"get"})},u=function(e){return Object(a["a"])({url:"/challenge/"+e+"/env/",method:"post"})},l=function(e){return Object(a["a"])({url:"/challenge/"+e+"/env/",method:"patch"})},d=function(e){return Object(a["a"])({url:"/challenge/"+e+"/env/",method:"delete"})}},4360:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("2b0e"),r=n("2f62"),s=n("bfa9"),o=(n("96cf"),n("1da1")),c=n("5530"),i=n("3786"),u=n("a18c"),l=n("1232"),d={namespaced:!0,state:{accessToken:localStorage.getItem("accessToken"),refreshToken:localStorage.getItem("refreshToken"),userInfo:{id:0,nickname:"",username:"",team:null,is_staff:!1,is_hidden:!0,is_active:!1}},mutations:{updateTokens:function(e,t){localStorage.setItem("accessToken",t.access),e.accessToken=t.access,localStorage.setItem("refreshToken",t.refresh),e.refreshToken=t.refresh},updateAccessToken:function(e,t){localStorage.setItem("accessToken",t),e.accessToken=t},removeAccessToken:function(e){localStorage.removeItem("accessToken"),e.accessToken=null},removeTokens:function(e){localStorage.removeItem("accessToken"),e.accessToken=null,localStorage.removeItem("refreshToken"),e.refreshToken=null},setUserInfo:function(e,t){e.userInfo=t},setUserTeam:function(e,t){e.userInfo.team=t},resetUserInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.userInfo=Object(c["a"])(Object(c["a"])({},e.userInfo),t)}},actions:{ObtainToken:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,s,o,c,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,Object(i["b"])(t);case 3:return r=n.sent,200==r.status&&(s={access:r.data.access,refresh:r.data.refresh},a("updateTokens",s),o=Object(l["a"])(r.data.access),c={nickname:o.nickname,username:o.username,id:o.id,is_hidden:o.is_hidden,is_staff:o.is_staff,is_active:o.is_active},a("setUserInfo",c),d=u["a"].history.current.query.redirect,d?u["a"].push({path:d}):u["a"].push({path:"/category"})),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},RefreshToken:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,Object(i["d"])({refresh:t});case 3:return r=n.sent,200==r.status&&a("updateAccessToken",r.data.access),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},UpdateUserInfo:function(e,t){var n=e.commit;n("resetUserInfo",t)},UpdateUserTeam:function(e,t){var n=e.commit;n("setUserTeam",t)},ClearUserState:function(e){var t=e.commit;t("resetUserInfo",{}),t("removeTokens")},Logout:function(e){var t=e.commit;t("removeTokens");var n={nickname:null,username:null};t("setUserInfo",n),u["a"].push({path:"/login"})}},getters:{userInfo:function(e){return e.userInfo},accessToken:function(e){return e.accessToken},refreshToken:function(e){return e.refreshToken}}},f=(n("a4d3"),n("e01a"),n("b0c0"),n("b85c")),m=n("f634"),h=n("40a0"),b={namespaced:!0,state:{contestInfo:{name:"",start_time:"",end_time:""},categorylist:[]},mutations:{setContestInfo:function(e,t){e.contestInfo=t},setCategoryList:function(e,t){e.categoryList=t}},actions:{GetCategoryList:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Object(h["d"])();case 3:if(a=t.sent,categoryList=[],200==a.status){r=Object(f["a"])(a.data);try{for(r.s();!(s=r.n()).done;)o=s.value,categoryList.push({id:o.id,name:o.name,icon:o.icon})}catch(c){r.e(c)}finally{r.f()}n("setCategoryList",categoryList)}return t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},SetCategoryList:function(e,t){var n,a=e.commit,r=[],s=Object(f["a"])(t);try{for(s.s();!(n=s.n()).done;){var o=n.value;r.push({id:o.id,name:o.name,icon:o.icon})}}catch(c){s.e(c)}finally{s.f()}return a("setCategoryList",r),t},GetContestInfo:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Object(m["a"])();case 3:return a=t.sent,200==a.status&&(r={name:a.data.name,start_time:a.data.start_time,end_time:a.data.end_time,description:a.data.description},n("setContestInfo",r)),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))()}},getters:{contestInfo:function(e){return e.contestInfo},categoryList:function(e){return e.categoryList}}};a["a"].use(r["a"]);var p=new s["a"]({storage:window.localStorage,modules:["user","contest"]}),v=new r["a"].Store({modules:{user:d,contest:b},plugins:[p.plugin]})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("NavMenu"),n("v-main",{staticClass:"main"},[n("router-view")],1)],1)},s=[],o=(n("b0c0"),n("5530")),c=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{staticClass:"nav",attrs:{app:"",height:"56px","elevate-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"toolbar-title"},[n("Breadcrumb")],1),n("v-spacer"),null===e.accessToken?[n("v-btn",{attrs:{text:"",to:"/login"}},[e._v(" Login ")]),n("v-btn",{attrs:{text:"",to:"/register"}},[e._v(" Register ")])]:[n("v-menu",{attrs:{left:"","open-on-hover":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticStyle:{"text-transform":"unset"},attrs:{text:""}},"v-btn",r,!1),a),[e._v(" "+e._s(e.userInfo.nickname)+" ")])]}}])},[n("v-list",[n("v-list-item",{attrs:{link:"",to:"/dashboard/profile"}},[n("v-list-item-title",[e._v("Profile")])],1),n("v-list-item",{on:{click:e.Logout}},[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)]],2),n("v-navigation-drawer",{staticClass:"drawer",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"drawer_header"},[n("h1",{staticClass:"font-weight-light",domProps:{textContent:e._s(e.contestInfo.name)}})])]),null!=e.accessToken?[n("v-list-group",{attrs:{"prepend-icon":"mdi-view-dashboard"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[e._v("Dashboard")])],1)]},proxy:!0}],null,!1,1870259532)},[this.userInfo.is_staff?[n("v-list-item",{attrs:{href:"/admin/",target:"_blank"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-view-dashboard-variant")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Admin")])],1)],1)]:e._e(),e._l(e.dashboard,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.href}},[n("v-list-item-action",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)}))],2)]:e._e(),n("v-list",e._l(e.menu,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.href}},[n("v-list-item-action",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],2)],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:e.routeList},scopedSlots:e._u([{key:"item",fn:function(t){var a=t.item;return[n("v-breadcrumbs-item",{staticClass:"breadcrumbs-item",attrs:{href:a.href,disabled:a.disabled}},[a.canExpand?[n("v-menu",{attrs:{right:"","open-on-hover":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[n("v-btn",e._g(e._b({attrs:{text:""},domProps:{textContent:e._s(a.text)}},"v-btn",s,!1),r))]}}],null,!0)},[n("v-list",e._l(e.categoryList,(function(t){return n("v-list-item",{key:t.name,attrs:{link:"",to:"/category/"+t.name.toLowerCase()}},[n("v-list-item-title",{domProps:{textContent:e._s(t.name.toUpperCase())}})],1)})),1)],1)]:[n("v-icon",{domProps:{textContent:e._s(a.icon)}}),e._v(e._s(a.text.toUpperCase())+" ")]],2)]}}])})},d=[],f=(n("a434"),n("ac1f"),n("1276"),n("498a"),{name:"Breadcrumb",data:function(){return{iconSet:{category:"mdi-tag",notifications:"mdi-bell",scoreboard:"mdi-signal",about:"mdi-bee-flower",dashboard:"mdi-dashboard",profile:"mdi-account"}}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])("contest",["categoryList"])),{},{routeList:function(){if("/"==this.$route.path)return[];var e=this.$route.path.split("/").splice(1),t=[],n="";t.push({text:"Home",disabled:!1,href:"/",icon:"mdi-home"});for(var a=0;a<e.length-1;a++)n+="/"+e[a],t.push({text:e[a],disabled:e[a]==="challenge".trim(),href:n,icon:this.iconSet[e[a]],canExpand:"category"===e[a-1]});return t.push({text:e[e.length-1],disabled:"category"!==e[e.length-2],icon:this.iconSet[e[e.length-1]],canExpand:"category"===e[e.length-2]}),t}}),methods:{}}),m=f,h=(n("28e0"),n("2877")),b=n("6544"),p=n.n(b),v=n("2bc5"),g=n("f625"),j=n("8336"),k=n("132d"),y=n("8860"),_=n("da13"),w=n("5d23"),C=n("e449"),O=Object(h["a"])(m,l,d,!1,null,null,null),x=O.exports;p()(O,{VBreadcrumbs:v["a"],VBreadcrumbsItem:g["a"],VBtn:j["a"],VIcon:k["a"],VList:y["a"],VListItem:_["a"],VListItemTitle:w["c"],VMenu:C["a"]});n("4160"),n("c975"),n("b64b"),n("d3b7"),n("3ca3"),n("10d1"),n("159b"),n("ddb0"),n("4795"),n("d4ec"),n("bee2"),n("ade3"),n("5364"),n("9bd1"),new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;var T={name:"NavMenu",props:{source:String},components:{Breadcrumb:x},data:function(){return{drawer:null,dropdown_menu:["Profile","Logout"],isLoggedIn:!1,menu:[{title:"Challenges",href:"/category",icon:"mdi-flag"},{title:"Notification",href:"/notifications",icon:"mdi-bell"},{title:"Scoreboard",href:"/scoreboard",icon:"mdi-signal"},{title:"About",href:"/about",icon:"mdi-bee-flower"}],dashboard:[{title:"Profile",href:"/dashboard/profile",icon:"mdi-account"},{title:"Team",href:"/dashboard/team",icon:"mdi-account-group"}]}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])("user",["accessToken","userInfo"])),Object(c["c"])("contest",["contestInfo"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])("user",["Logout"])),{},{observeNotification:function(){}}),mounted:function(){this.observeNotification()},beforeDestroy:function(){}},I=T,S=(n("cdac"),n("40dc")),L=n("5bc1"),V=n("56b0"),P=n("1800"),z=n("f774"),$=n("2fa4"),R=n("2a7f"),U=Object(h["a"])(I,i,u,!1,null,"6f30dc42",null),N=U.exports;p()(U,{VAppBar:S["a"],VAppBarNavIcon:L["a"],VBtn:j["a"],VIcon:k["a"],VList:y["a"],VListGroup:V["a"],VListItem:_["a"],VListItemAction:P["a"],VListItemContent:w["a"],VListItemTitle:w["c"],VMenu:C["a"],VNavigationDrawer:z["a"],VSpacer:$["a"],VToolbarTitle:R["a"]});var E={name:"App",components:{NavMenu:N},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!0},mounted:function(){this.GetContestInfo(),document.title=this.contestInfo.name},computed:Object(o["a"])({},Object(c["c"])("contest",["contestInfo"])),methods:Object(o["a"])({},Object(c["b"])("contest",["GetContestInfo"]))},A=E,B=(n("5c0b"),n("7496")),D=n("f6c4"),M=Object(h["a"])(A,r,s,!1,null,null,null),H=M.exports;p()(M,{VApp:B["a"],VMain:D["a"]});var q=n("a18c"),W=n("4360"),F=n("f309");a["a"].use(F["a"]);var G=new F["a"]({theme:{themes:{dark:{primary:"#00bcd4",secondary:"#b0bec5",accent:"#8c9eff",error:"#ff5252"}}}}),Y=n("8cb8");a["a"].use(Y["default"]);var J=n("98c9");a["a"].use(J["a"]);var K=n("9ce6"),Q=n.n(K);a["a"].component("vue-markdown",Q.a);var X=n("6838"),Z=n.n(X);a["a"].use(Z.a,{hideProgressbar:!0,position:"bottom-left"}),a["a"].config.productionTip=!1,new a["a"]({router:q["a"],store:W["a"],vuetify:G,render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6b4f":function(e,t,n){},7554:function(e,t,n){},"7fa4":function(e,t,n){"use strict";n("1551")},"814f":function(e,t,n){"use strict";n("7554")},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"home"},[n("vue-markdown",{staticClass:"article",staticStyle:{"overflow-wrap":"break-word"},attrs:{source:e.contestInfo.description}})],1)},o=[],c=n("5530"),i=n("2f62"),u={name:"Home",components:{},computed:Object(c["a"])({},Object(i["c"])("contest",["contestInfo"]))},l=u,d=(n("21bb"),n("2877")),f=n("6544"),m=n.n(f),h=n("a523"),b=Object(d["a"])(l,s,o,!1,null,null,null),p=b.exports;m()(b,{VContainer:h["a"]});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticStyle:{height:"52px"}}),n("v-row",e._l(e.categories,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6",lg:"3"}},[n("CategoryCard",{attrs:{icon:e.icon,title:e.name,total:e.challenge_amount,"last-update":e.updated_at,herf:"/category/"+e.name.toLowerCase()}})],1)})),1)],1)},g=[],j=(n("96cf"),n("1da1")),k=n("c1df"),y=n.n(k),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",e._b({staticClass:"category_card pa-3",class:e.classes,attrs:{raised:""},on:{click:e.toherf}},"v-card",e.$attrs,!1),[n("div",{staticClass:"d-flex grow flex-wrap"},[n("v-sheet",{staticClass:"text-start category_card__heading",attrs:{"max-height":"90",width:"auto",elevation:"6",dark:""}},[n("v-icon",{attrs:{size:"36"},domProps:{textContent:e._s(e.icon)}})],1),n("div",{staticClass:"ml-6"},[n("div",{staticClass:"ml-auto text-right"},[n("div",{staticClass:"body-3 grey--text font-weight-light"},[e._v(" Total:"+e._s(e.total)+" ")]),n("h3",{staticClass:"font-weight-light primary_text"},[e._v(" "+e._s(e.title)+" ")])])])],1),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("v-divider")],1),n("v-icon",{staticClass:"ml-2 mr-1",attrs:{size:"16"}},[e._v(" mdi-calendar ")]),n("span",{staticClass:"caption grey--text font-weight-light",domProps:{textContent:e._s(e.lastUpdate)}})],1)},w=[],C=(n("a9e3"),{name:"CategoryCard",props:{icon:{type:String,default:void 0},text:{type:String,default:""},title:{type:String,default:""},lastUpdate:{type:String,default:void 0},total:{type:Number,default:void 0},herf:{type:String,default:"#"}},computed:{classes:function(){return{"category_card--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}},methods:{toherf:function(){this.$router.push({path:this.herf})}}}),O=C,x=(n("7fa4"),n("b0af")),T=n("62ad"),I=n("ce7e"),S=n("132d"),L=n("8dd9"),V=Object(d["a"])(O,_,w,!1,null,"272f03be",null),P=V.exports;m()(V,{VCard:x["a"],VCol:T["a"],VDivider:I["a"],VIcon:S["a"],VSheet:L["a"]});var z=n("40a0"),$={components:{CategoryCard:P},data:function(){return{categories:[]}},methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])("contest",["SetCategoryList"])),{},{genCategoryList:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(z["d"])();case 3:for(n=t.sent,e.categories=n.data,e.SetCategoryList(e.categories),a=0;a<e.categories.length;a++)e.categories[a].updated_at=y()(e.categories[a].updated_at,"YYYY-MM-DD HH:mm:ss").fromNow();t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),401!=t.t0.response.status&&403!=t.t0.response.status||e.$router.push({name:"profile"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}),created:function(){this.genCategoryList()}},R=$,U=n("0fd9"),N=Object(d["a"])(R,v,g,!1,null,null,null),E=N.exports;m()(N,{VCol:T["a"],VContainer:h["a"],VRow:U["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticStyle:{margin:"0px",height:"100%"}},[n("v-col",{staticClass:"challenges_panel",staticStyle:{height:"100%"},attrs:{cols:"12",sm:"6",md:"5",name:"challenges_panel"}},[n("v-container",{staticClass:"challenges"},e._l(e.challengelist,(function(t,a){return n("v-col",{key:t.id,class:e.activeIndex==a?"clicked":"",on:{click:function(t){return e.select(a)}}},[n("ChallengeCard",{attrs:{title:t.title,summary:t.summary,score:t.points,id:t.id,solved:t.solved,solved_amount:t.solved_amount}})],1)})),1)],1),n("router-view")],1)},B=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"challenge_card",attrs:{color:"#028d9e"},on:{click:e.doClick}},[n("v-card-title",[e._v(e._s(e.title))]),n("v-card-subtitle",[e._v(e._s(e.summary))]),n("v-card-actions",[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("v-icon",{staticStyle:{"font-size":"22px",opacity:"0.8"},domProps:{textContent:e._s(e.solved?"mdi-checkbox-marked-circle-outline":"mdi-checkbox-blank-circle-outline")}}),n("p",{staticClass:"score"},[e._v(" "+e._s(e.solved_amount)+" ")]),n("p",{staticClass:"points"},[e._v(" solved ")]),n("p",{staticClass:"score"},[e._v(" / ")]),n("p",{staticClass:"score"},[e._v(" "+e._s(e.score)+" ")]),n("p",{staticClass:"points"},[e._v(" points ")])],1)])],1)},M=[],H={name:"ChallengeCard",data:function(){return{open:!1}},props:{title:{type:String,default:void 0},summary:{type:String,default:void 0},origin:{type:String,default:void 0},score:{type:Number,default:void 0},id:{type:Number,default:void 0},solved:{type:Boolean,default:void 0},solved_amount:{type:Number,default:0}},methods:{doClick:function(){this.$router.push({name:"challenge",params:{id:this.id}})}}},q=H,W=(n("f126"),n("99d9")),F=Object(d["a"])(q,D,M,!1,null,"63af457a",null),G=F.exports;m()(F,{VCard:x["a"],VCardActions:W["a"],VCardSubtitle:W["b"],VCardTitle:W["d"],VIcon:S["a"]});var Y={name:"Challenges",components:{ChallengeCard:G},data:function(){return{activeIndex:-1,challengelist:[]}},created:function(){this.genChallengesList()},watch:{$route:function(e,t){this.genChallengesList()}},methods:{select:function(e){this.activeIndex=e},genChallengesList:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(z["g"])(e.$route.params.type);case 2:n=t.sent,e.challengelist=n.data;case 4:case"end":return t.stop()}}),t)})))()}}},J=Y,K=(n("814f"),Object(d["a"])(J,A,B,!1,null,null,null)),Q=K.exports;m()(K,{VCol:T["a"],VContainer:h["a"],VRow:U["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},Z=[],ee={name:"DashboardLayout"},te=ee,ne=Object(d["a"])(te,X,Z,!1,null,null,null),ae=ne.exports,re=r["a"].prototype.push;r["a"].prototype.push=function(e){return re.call(this,e)["catch"]((function(e){return e}))},a["a"].use(r["a"]);var se=[{path:"/",name:"home",component:p,meta:{title:"Home"}},{path:"/about",name:"about",component:function(){return n.e("chunk-8598062e").then(n.bind(null,"f820"))},meta:{title:"About"}},{path:"/category",name:"categories",component:E,meta:{title:"Category"}},{path:"/category/:type",name:"category",component:Q,meta:{title:"Category"},children:[{name:"challenge",path:"challenge/:id",component:function(){return n.e("chunk-11dc6cb1").then(n.bind(null,"4e1b"))},meta:{title:"Challenge"}}]},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-5fc5686e"),n.e("chunk-872205de")]).then(n.bind(null,"a55b"))},meta:{title:"Login"}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-5fc5686e"),n.e("chunk-451cf6d8")]).then(n.bind(null,"73cf"))},meta:{title:"Register"}},{path:"/forget_password",name:"Forget Password",component:function(){return Promise.all([n.e("chunk-5fc5686e"),n.e("chunk-652aaaf6")]).then(n.bind(null,"5373"))},meta:{title:"Forget Password"}},{path:"/activate/:user_id/:token",name:"activate",component:function(){return n.e("chunk-20a02e74").then(n.bind(null,"ba45"))},meta:{title:"Activate Email"}},{path:"/reset_password/:user_id/:token",name:"reset_password",component:function(){return Promise.all([n.e("chunk-5fc5686e"),n.e("chunk-bec17840")]).then(n.bind(null,"0813"))},meta:{title:"Reset Password"}},{path:"/notifications",name:"notifications",component:function(){return n.e("chunk-50376c0b").then(n.bind(null,"fda7"))},meta:{title:"Notifications"}},{path:"/scoreboard",name:"Scoreboard",component:function(){return Promise.all([n.e("chunk-5fc5686e"),n.e("chunk-21e8480d"),n.e("chunk-217b1076"),n.e("chunk-d46cfb20")]).then(n.bind(null,"3cb4"))},meta:{title:"Scoreboard"}},{path:"/dashboard",component:ae,redirect:"/dashboard/profile",alwaysShow:!0,name:"dashboard",meta:{title:"Dashboard"},children:[{path:"profile",component:function(){return Promise.all([n.e("chunk-5fc5686e"),n.e("chunk-15643711")]).then(n.bind(null,"c563"))},name:"profile",meta:{title:"Profile"}},{path:"team",component:function(){return Promise.all([n.e("chunk-5fc5686e"),n.e("chunk-21e8480d"),n.e("chunk-4904a854")]).then(n.bind(null,"0f9b"))},name:"team",meta:{title:"Team"}}]},{path:"/error/404",name:"404 NOT FOUND",component:function(){return n.e("chunk-77731b10").then(n.bind(null,"d80f"))},meta:{title:"404"}},{path:"*",redirect:"/error/404"}],oe=new r["a"]({mode:"history",base:"/",routes:se});t["a"]=oe},a2ee:function(e,t,n){},b775:function(e,t,n){"use strict";n("caad"),n("c975"),n("6eba"),n("0d03"),n("d3b7"),n("25f0"),n("2532"),n("2ca0");var a=n("bc3a"),r=n.n(a),s=n("4360"),o=n("323e"),c=n.n(o),i=(n("a5d8"),n("2b0e")),u=n("1232"),l=n("a18c"),d=r.a.create({baseURL:"/api/v1",timeout:5e4});function f(){l["a"].push({path:"/login",query:{redirect:l["a"].currentRoute.fullPath}})}function m(){l["a"].push({path:"/error/404",query:{redirect:l["a"].currentRoute.fullPath}})}function h(){var e=s["a"].getters["user/accessToken"],t=Object(u["a"])(e),n=t.exp;if(n){var a=n-Date.now()/1e3<1800;return a}return!1}function b(){var e=s["a"].getters["user/refreshToken"],t=Object(u["a"])(e),n=t.exp;if(n){var a=n-Date.now()/1e3<0;return a}return!1}window.isRefreshing=!1,d.interceptors.request.use((function(e){if(c.a.start(),e.headers["Content-Type"]||(e.headers={"Content-Type":"application/json"}),e.url.startsWith("/auth")||e.url.startsWith("/contest"))return e;var t=s["a"].getters["user/accessToken"];if(t){var n=s["a"].getters["user/refreshToken"];if(b())s["a"].dispatch("user/ClearUserState");else{if(!h())return e.headers.Authorization="Bearer ".concat(t),e;s["a"].dispatch("user/RefreshToken",n)}}else f(),i["a"].$vToastify.error("Please Login First");return e}),(function(e){if(c.a.done(),"ECONNABORTED"===e.code&&-1!==e.message.indexOf("timeout")){i["a"].$vToastify.error("Sorry Timeout!");var t=e.config;return instance.request(t)}var n=e.response.data.detail;if(i["a"].$vToastify.error("Error: ".concat(n)),console.log(n),n){var a=n.status;l["a"].push({path:"/error/".concat(a)})}return Promise.reject(e)})),d.interceptors.response.use((function(e){return c.a.done(),e}),(function(e){if(c.a.done(),e.toString().includes("timeout"))e.message="Sorry Timeout!";else if(e.response){if(e.response.data.detail)e.message=e.response.data.detail;else{var t;for(var n in e.response.data)t=n.toString()+e.response.data[n][0];e.message=t}if(401==e.response.status||403==e.response.status);else if(404==e.response.status)return void m()}return i["a"].$vToastify.error("Error: ".concat(e.message)),console.error("Error： ".concat(e)),Promise.reject(e)})),t["a"]=d},cdac:function(e,t,n){"use strict";n("6b4f")},f126:function(e,t,n){"use strict";n("a2ee")},f634:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l}));var a=n("b775"),r=function(){return Object(a["a"])({url:"/contest/",method:"get"})},s=function(){return Object(a["a"])({url:"/contest/trend/",method:"get"})},o=function(e,t){return Object(a["a"])({url:"/contest/scoreboard/",method:"get",params:{offset:e,limit:t}})},c=function(){return Object(a["a"])({url:"/contest/trend/stu/",method:"get"})},i=function(e,t){return Object(a["a"])({url:"/contest/scoreboard/stu/",method:"get",params:{offset:e,limit:t}})},u=function(){return Object(a["a"])({url:"/contest/trend/team/",method:"get"})},l=function(e,t){return Object(a["a"])({url:"/contest/scoreboard/team/",method:"get",params:{offset:e,limit:t}})}}},[[0,"runtime","chunk-libs"]]]);