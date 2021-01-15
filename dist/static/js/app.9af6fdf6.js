(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,a){e.exports=a("56d7")},1040:function(e,t,a){"use strict";a("3357")},1551:function(e,t,a){},3357:function(e,t,a){},3786:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o}));var n=a("b775"),r=function(e){return Object(n["a"])({url:"/auth/obtainToken/",method:"post",data:e})},s=function(e){return Object(n["a"])({url:"/auth/refreshToken/",method:"post",data:e})},o=function(e){return Object(n["a"])({url:"/auth/register/",method:"post",data:e})}},"40a0":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a("b775"),r=function(){return Object(n["a"])({url:"/category/",method:"get"})},s=function(e){return Object(n["a"])({url:"/challenge/",params:{categoryName:e},method:"get"})},o=function(e){return Object(n["a"])({url:"/challenge/"+e,method:"get"})},c=function(e,t){return Object(n["a"])({url:"/challenge/"+t+"/_checkFlag/",method:"post",data:e})}},4360:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("2b0e"),r=a("2f62"),s=a("bfa9"),o=(a("96cf"),a("1da1")),c=a("5530"),i=a("3786"),l=a("a18c"),u=a("1232"),d={namespaced:!0,state:{accessToken:localStorage.getItem("accessToken"),refreshToken:localStorage.getItem("refreshToken"),userInfo:{id:0,nickname:"",username:""}},mutations:{updateTokens:function(e,t){localStorage.setItem("accessToken",t.access),e.accessToken=t.access,localStorage.setItem("refreshToken",t.refresh),e.refreshToken=t.refresh},updateAccessToken:function(e,t){localStorage.setItem("accessToken",t),e.accessToken=t},removeAccessToken:function(e){localStorage.removeItem("accessToken"),e.accessToken=null},removeTokens:function(e){localStorage.removeItem("accessToken"),e.accessToken=null,localStorage.removeItem("refreshToken"),e.refreshToken=null},setUserInfo:function(e,t){e.userInfo=t},resetUserInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.userInfo=Object(c["a"])(Object(c["a"])({},e.userInfo),t)}},actions:{ObtainToken:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r,s,o,c,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,Object(i["a"])(t);case 3:return r=a.sent,200==r.status&&(s={access:r.data.access,refresh:r.data.refresh},n("updateTokens",s),o=Object(u["a"])(r.data.access),c={nickname:o.nickname,username:o.username,id:o.id,is_hidden:o.is_hidden,is_staff:o.is_staff},n("setUserInfo",c),d=l["a"].history.current.query.redirect,d?l["a"].push({path:d}):l["a"].push({path:"/categories"})),a.abrupt("return",r);case 6:case"end":return a.stop()}}),a)})))()},RefreshToken:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,Object(i["b"])({refresh:t});case 3:return r=a.sent,console.log(r),200==r.status&&n("updateAccessToken",r.data.access),a.abrupt("return",r);case 7:case"end":return a.stop()}}),a)})))()},UpdateUserInfo:function(e,t){var a=e.commit;a("resetUserInfo",t)},ClearUserState:function(e){var t=e.commit;t("resetUserInfo",{}),t("removeTokens")},Logout:function(e){var t=e.commit;t("removeTokens");var a={nickname:null,username:null};t("setUserInfo",a),l["a"].push({path:"/login"})}},getters:{userInfo:function(e){return e.userInfo},accessToken:function(e){return e.accessToken},refreshToken:function(e){return e.refreshToken}}};n["a"].use(r["a"]);var f=new s["a"]({storage:window.localStorage,modules:["user"]}),m=new r["a"].Store({modules:{user:d},plugins:[f.plugin]})},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app"}},[a("NavMenu"),a("v-main",{staticStyle:{height:"100%"}},[a("router-view")],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{staticClass:"nav",attrs:{app:"",height:"56px","elevate-on-scroll":""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"toolbar-title breadcrumbs"}),a("v-spacer"),null===e.accessToken?[a("v-btn",{attrs:{text:"",to:"/login"}},[e._v(" Login ")]),a("v-btn",{attrs:{text:"",to:"/register"}},[e._v(" Register ")])]:[a("v-menu",{attrs:{left:"","open-on-hover":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticStyle:{"text-transform":"unset"},attrs:{text:""}},"v-btn",r,!1),n),[e._v(" "+e._s(e.userInfo.nickname)+" ")])]}}])},[a("v-list",[a("v-list-item",{attrs:{link:"",to:"/dashboard/profile"}},[a("v-list-item-title",[e._v("Profile")])],1),a("v-list-item",{on:{click:e.Logout}},[a("v-list-item-title",[e._v("Logout")])],1)],1)],1)]],2),a("v-navigation-drawer",{staticClass:"drawer",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"drawer_header"},[a("h1",{staticClass:"font-weight-light"},[e._v(" CTFm ")])])]),null!=e.accessToken?[a("v-list-group",{attrs:{"prepend-icon":"mdi-view-dashboard"},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",[e._v("Dashboard")])],1)]},proxy:!0}],null,!1,1870259532)},[this.userInfo.is_staff?[a("v-list-item",{attrs:{href:"/admin/",target:"_blank"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-view-dashboard-variant")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Admin")])],1)],1)]:e._e(),e._l(e.dashboard,(function(t){return a("v-list-item",{key:t.title,attrs:{to:t.herf}},[a("v-list-item-action",[a("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)}))],2)]:e._e(),a("v-list",e._l(e.menu,(function(t){return a("v-list-item",{key:t.title,attrs:{to:t.herf}},[a("v-list-item-action",[a("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],2)],1)},c=[],i=(a("b0c0"),a("b85c")),l=a("5530"),u=a("2f62"),d={name:"NavMenu",props:{source:String},data:function(){return{drawer:null,dropdown_menu:["Profile","Logout"],isLoggedIn:!1,menu:[{title:"Challenges",herf:"/categories",icon:"mdi-flag"},{title:"Notification",herf:"/notifications",icon:"mdi-bell"},{title:"Scoreboard",herf:"/scoreboard",icon:"mdi-signal"},{title:"About",herf:"/about",icon:"mdi-bee-flower"}],dashboard:[{title:"Profile",herf:"/dashboard/profile",icon:"mdi-account"}],breadList:[]}},computed:Object(l["a"])({},Object(u["c"])("user",["accessToken","userInfo"])),mounted:function(){this.getBreadcrumb()},methods:Object(l["a"])(Object(l["a"])({},Object(u["b"])("user",["Logout"])),{},{isHome:function(e){return"home"===e.name},getBreadcrumb:function(){var e,t=this.$route.matched,a=Object(i["a"])(t);try{for(a.s();!(e=a.n()).done;){var n=e.value,r={};r.text=n.meta.title,r.href=n.path,console.log(r),this.breadList.push(r)}}catch(s){a.e(s)}finally{a.f()}console.log(this.breadList)}})},f=d,m=(a("1040"),a("2877")),h=a("6544"),b=a.n(h),p=a("40dc"),v=a("5bc1"),g=a("8336"),j=a("132d"),k=a("8860"),y=a("56b0"),_=a("da13"),C=a("1800"),w=a("5d23"),x=a("e449"),T=a("f774"),O=a("2fa4"),S=a("2a7f"),I=Object(m["a"])(f,o,c,!1,null,"1b28c5ee",null),V=I.exports;b()(I,{VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:g["a"],VIcon:j["a"],VList:k["a"],VListGroup:y["a"],VListItem:_["a"],VListItemAction:C["a"],VListItemContent:w["a"],VListItemTitle:w["c"],VMenu:x["a"],VNavigationDrawer:T["a"],VSpacer:O["a"],VToolbarTitle:S["a"]});var z={name:"App",components:{NavMenu:V},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!0}},L=z,P=(a("5c0b"),a("7496")),$=a("f6c4"),N=Object(m["a"])(L,r,s,!1,null,null,null),R=N.exports;b()(N,{VApp:P["a"],VMain:$["a"]});var U=a("a18c"),A=a("4360"),E=a("f309");n["a"].use(E["a"]);var D=new E["a"]({theme:{themes:{dark:{primary:"#00bcd4",secondary:"#b0bec5",accent:"#8c9eff",error:"#ff5252"}}}}),B=a("8cb8");n["a"].use(B["default"]);var F=a("98c9");n["a"].use(F["a"]);var H=a("9ce6"),M=a.n(H);n["a"].component("vue-markdown",M.a);var q=a("6838"),Y=a.n(q);n["a"].use(Y.a,{hideProgressbar:!0,position:"bottom-left"}),n["a"].config.productionTip=!1,new n["a"]({router:U["a"],store:A["a"],vuetify:D,render:function(e){return e(R)}}).$mount("#app")},"57b3":function(e,t,a){},"5c0b":function(e,t,a){"use strict";a("9c0c")},"5fbe":function(e,t,a){e.exports=a.p+"static/img/logo2.62ca6d84.png"},"66d8":function(e,t,a){"use strict";a("bb4d")},7554:function(e,t,a){},"7fa4":function(e,t,a){"use strict";a("1551")},"814f":function(e,t,a){"use strict";a("7554")},"9c0c":function(e,t,a){},a18c:function(e,t,a){"use strict";a("d3b7");var n=a("2b0e"),r=a("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"home"},[n("div",{staticClass:"logo"},[n("img",{attrs:{alt:"CTFm logo",src:a("5fbe")}})]),n("h1",[e._v("Welcome to CTFm")])])},o=[],c=(a("f634"),{name:"Home",components:{}}),i=c,l=(a("e71b"),a("2877")),u=a("6544"),d=a.n(u),f=a("a523"),m=Object(l["a"])(i,s,o,!1,null,"71ea03f6",null),h=m.exports;d()(m,{VContainer:f["a"]});var b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticStyle:{height:"52px"}}),a("v-row",e._l(e.categories,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",sm:"6",lg:"3"}},[a("CategoryCard",{attrs:{icon:e.icon,title:e.name,total:e.challenge_amount,"last-update":e.updated_at,herf:"/category/"+e.name.toLowerCase()}})],1)})),1)],1)},p=[],v=(a("96cf"),a("1da1")),g=a("c1df"),j=a.n(g),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",e._b({staticClass:"category_card pa-3",class:e.classes,attrs:{raised:""},on:{click:e.toherf}},"v-card",e.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[a("v-sheet",{staticClass:"text-start category_card__heading",attrs:{"max-height":"90",width:"auto",elevation:"6",dark:""}},[a("v-icon",{attrs:{size:"36"},domProps:{textContent:e._s(e.icon)}})],1),a("div",{staticClass:"ml-6"},[a("div",{staticClass:"ml-auto text-right"},[a("div",{staticClass:"body-3 grey--text font-weight-light"},[e._v(" Total:"+e._s(e.total)+" ")]),a("h3",{staticClass:"font-weight-light primary_text"},[e._v(" "+e._s(e.title)+" ")])])])],1),a("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[a("v-divider")],1),a("v-icon",{staticClass:"ml-2 mr-1",attrs:{size:"16"}},[e._v(" mdi-calendar ")]),a("span",{staticClass:"caption grey--text font-weight-light",domProps:{textContent:e._s(e.lastUpdate)}})],1)},y=[],_=(a("a9e3"),{name:"CategoryCard",props:{icon:{type:String,default:void 0},text:{type:String,default:""},title:{type:String,default:""},lastUpdate:{type:String,default:void 0},total:{type:Number,default:void 0},herf:{type:String,default:"#"}},computed:{classes:function(){return{"category_card--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}},methods:{toherf:function(){this.$router.push({path:this.herf})}}}),C=_,w=(a("7fa4"),a("b0af")),x=a("62ad"),T=a("ce7e"),O=a("132d"),S=a("8dd9"),I=Object(l["a"])(C,k,y,!1,null,"272f03be",null),V=I.exports;d()(I,{VCard:w["a"],VCol:x["a"],VDivider:T["a"],VIcon:O["a"],VSheet:S["a"]});var z=a("40a0"),L={components:{CategoryCard:V},data:function(){return{categories:[]}},methods:{genCategoryList:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(z["b"])();case 2:for(a=t.sent,e.categories=a.data,n=0;n<e.categories.length;n++)e.categories[n].updated_at=j()(e.categories[n].updated_at,"YYYY-MM-DD HH:mm:ss").fromNow();case 5:case"end":return t.stop()}}),t)})))()}},created:function(){this.genCategoryList()}},P=L,$=a("0fd9"),N=Object(l["a"])(P,b,p,!1,null,null,null),R=N.exports;d()(N,{VCol:x["a"],VContainer:f["a"],VRow:$["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticStyle:{margin:"0px",height:"100%"}},[a("v-col",{staticClass:"challenges_panel",staticStyle:{height:"100%"},attrs:{cols:"12",sm:"6",md:"5",name:"challenges_panel"}},[a("v-container",{staticClass:"challenges"},e._l(e.challengelist,(function(t,n){return a("v-col",{key:t.id,class:e.activeIndex==n?"clicked":"",on:{click:function(t){return e.select(n)}}},[a("ChallengeCard",{attrs:{title:t.title,summary:t.summary,score:t.points,id:t.id,solved:t.solved}})],1)})),1)],1),a("router-view")],1)},A=[],E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"challenge_card",attrs:{color:"#028d9e"},on:{click:e.doClick}},[a("v-card-title",[e._v(e._s(e.title))]),a("v-card-subtitle",[e._v(e._s(e.summary))]),a("v-card-actions",[a("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("v-icon",{staticStyle:{"font-size":"22px",opacity:"0.8"},domProps:{textContent:e._s(e.solved?"mdi-checkbox-marked-circle-outline":"mdi-checkbox-blank-circle-outline")}}),a("p",{staticClass:"score"},[e._v(" "+e._s(e.score)+" ")]),a("p",{staticClass:"points"},[e._v(" points ")])],1)])],1)},D=[],B={name:"ChallengeCard",data:function(){return{open:!1}},props:{title:{type:String,default:void 0},summary:{type:String,default:void 0},origin:{type:String,default:void 0},score:{type:Number,default:void 0},id:{type:Number,default:void 0},solved:{type:Boolean,default:void 0}},methods:{doClick:function(){this.$router.push({name:"challenge",params:{id:this.id}})}}},F=B,H=(a("66d8"),a("99d9")),M=Object(l["a"])(F,E,D,!1,null,"7cea14fb",null),q=M.exports;d()(M,{VCard:w["a"],VCardActions:H["a"],VCardSubtitle:H["b"],VCardTitle:H["d"],VIcon:O["a"]});var Y={name:"Challenges",components:{ChallengeCard:q},data:function(){return{activeIndex:-1,challengelist:[]}},created:function(){this.initialize()},methods:{select:function(e){this.activeIndex=e},initialize:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(z["d"])(e.$route.params.type);case 2:a=t.sent,e.challengelist=a.data;case 4:case"end":return t.stop()}}),t)})))()}}},J=Y,W=(a("814f"),Object(l["a"])(J,U,A,!1,null,null,null)),G=W.exports;d()(W,{VCol:x["a"],VContainer:f["a"],VRow:$["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},Q=[],X={name:"DashboardLayout"},Z=X,ee=Object(l["a"])(Z,K,Q,!1,null,null,null),te=ee.exports,ae=r["a"].prototype.push;r["a"].prototype.push=function(e){return ae.call(this,e)["catch"]((function(e){return e}))},n["a"].use(r["a"]);var ne=[{path:"/",name:"home",component:h,meta:{title:"Home"}},{path:"/about",name:"about",component:function(){return a.e("chunk-3299b094").then(a.bind(null,"f820"))},meta:{title:"About"}},{path:"/categories",name:"categories",component:R,meta:{title:"Categories"}},{path:"/category/:type",name:"category",component:G,meta:{title:"Category"},children:[{name:"challenge",path:"challenge/:id",component:function(){return a.e("chunk-2664a3ea").then(a.bind(null,"4e1b"))},meta:{title:"Challenge"}}]},{path:"/login",name:"login",component:function(){return Promise.all([a.e("chunk-5fc5686e"),a.e("chunk-4b008357")]).then(a.bind(null,"a55b"))},meta:{title:"Login"}},{path:"/register",name:"register",component:function(){return Promise.all([a.e("chunk-5fc5686e"),a.e("chunk-ef6a2276")]).then(a.bind(null,"73cf"))},meta:{title:"Register"}},{path:"/notifications",name:"notifications",component:function(){return a.e("chunk-50376c0b").then(a.bind(null,"fda7"))},meta:{title:"Notifications"}},{path:"/scoreboard",name:"Scoreboard",component:function(){return Promise.all([a.e("chunk-5fc5686e"),a.e("chunk-3ec9eead"),a.e("chunk-3cac0ec2")]).then(a.bind(null,"3cb4"))},meta:{title:"Scoreboard"}},{path:"/dashboard",component:te,redirect:"/dashboard/profile",alwaysShow:!0,name:"dashboard",meta:{title:"Dashboard"},children:[{path:"profile",component:function(){return Promise.all([a.e("chunk-5fc5686e"),a.e("chunk-19333761")]).then(a.bind(null,"c563"))},name:"profile",meta:{title:"Profile"}}]},{path:"/error/404",name:"404 NOT FOUND",component:function(){return a.e("chunk-015b17c7").then(a.bind(null,"d80f"))},meta:{title:""}},{path:"*",redirect:"/error/404"}],re=new r["a"]({mode:"history",base:"/",routes:ne});t["a"]=re},b775:function(e,t,a){"use strict";a("caad"),a("c975"),a("6eba"),a("0d03"),a("d3b7"),a("25f0"),a("2532"),a("2ca0");var n=a("bc3a"),r=a.n(n),s=a("4360"),o=a("323e"),c=a.n(o),i=(a("a5d8"),a("2b0e")),l=a("1232"),u=a("a18c"),d=r.a.create({baseURL:"/api/v1",timeout:5e4});function f(){u["a"].push({path:"/login",query:{redirect:u["a"].currentRoute.fullPath}})}function m(){var e=s["a"].getters["user/accessToken"],t=Object(l["a"])(e),a=t.exp;if(a){var n=a-Date.now()/1e3<1800;return n}return!1}function h(){var e=s["a"].getters["user/refreshToken"],t=Object(l["a"])(e),a=t.exp;if(a){var n=a-Date.now()/1e3<0;return n}return!1}window.isRefreshing=!1,d.interceptors.request.use((function(e){if(c.a.start(),e.headers["Content-Type"]||(e.headers={"Content-Type":"application/json"}),e.url.startsWith("/auth"))return e;var t=s["a"].getters["user/accessToken"];if(t){var a=s["a"].getters["user/refreshToken"];if(h())s["a"].dispatch("user/ClearUserState");else{if(!m())return e.headers.Authorization="Bearer ".concat(t),e;s["a"].dispatch("user/RefreshToken",a)}}else f(),i["a"].$vToastify.error("Please Login First");return e}),(function(e){if(c.a.done(),"ECONNABORTED"===e.code&&-1!==e.message.indexOf("timeout")){i["a"].$vToastify.error("Sorry Timeout!");var t=e.config;return instance.request(t)}var a=e.response.data.detail;if(i["a"].$vToastify.error("Error: ".concat(a)),console.log(a),a){var n=a.status;u["a"].push({path:"/error/".concat(n)})}return Promise.reject(e)})),d.interceptors.response.use((function(e){return c.a.done(),e}),(function(e){if(c.a.done(),e.toString().includes("timeout"))e.message="Sorry Timeout!";else if(e.response)if(401==e.response.status||403==e.response.status)e.message="Forbidden",s["a"].dispatch("user/ClearUserState"),f();else if(e.response.data.detail)e.message=e.response.data.detail;else{var t;for(var a in e.response.data)t=a.toString()+e.response.data[a][0];e.message=t}return i["a"].$vToastify.error("Error: ".concat(e.message)),console.error("Error： ".concat(e)),Promise.reject(e)})),t["a"]=d},bb4d:function(e,t,a){},e71b:function(e,t,a){"use strict";a("57b3")},f634:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s}));var n=a("b775"),r=function(){return Object(n["a"])({url:"/contest/trend/",method:"get"})},s=function(){return Object(n["a"])({url:"/contest/scoreboard/",method:"get"})}}},[[0,"runtime","chunk-libs"]]]);