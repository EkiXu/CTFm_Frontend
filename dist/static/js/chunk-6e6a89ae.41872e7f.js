(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6a89ae"],{"0f9b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"user-profile",fluid:"",tag:"section"}},[a("v-row",{staticStyle:{height:"56px"}}),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("BaseCard",{attrs:{color:"#03a9be"},scopedSlots:t._u([{key:"heading",fn:function(){return[null==t.userInfo.team?[a("div",{staticClass:"display-2 font-weight-light"},[t._v("Team")]),a("div",{staticClass:"subtitle-1 font-weight-light"},[t._v("Create or Join A team")])]:[a("v-row",[a("v-col",{attrs:{cols:"4",xs:"6",md:"2"}},[a("v-avatar",{attrs:{size:"72"}},[a("img",{attrs:{src:t.teamProfile.avatar_url}})])],1),a("v-col",{attrs:{cols:"8",xs:"6",md:"10"}},[a("div",{staticClass:"display-2 font-weight-light"},[t._v(t._s(t.teamProfile.name))]),a("div",{staticClass:"subtitle-1 font-weight-light"},[t._v("Points:"+t._s(t.teamProfile.points))])])],1)]]},proxy:!0}])},[a("v-data-table",{staticClass:"elevation-1",staticStyle:{"box-shadow":"none !important"},attrs:{headers:t.headers,items:t.teamProfile.members,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("Team")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),null!=t.userInfo.team?[a("span",[t._v("Token:"+t._s(t.teamProfile.token))])]:t._e(),a("v-spacer"),null==t.userInfo.team||t.isLeader?a("v-dialog",{attrs:{"hide-overlay":"",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"blue darken-1",text:""}},"v-btn",n,!1),i),[t._v(t._s(t.teamFormTitle))])]}}],null,!1,883788156),model:{value:t.createTeamDialog,callback:function(e){t.createTeamDialog=e},expression:"createTeamDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.teamFormTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6",sm:"5",md:"6"}},[a("v-text-field",{attrs:{label:"Team Name","prepend-icon":"mdi-account-group"},model:{value:t.editedTeam.name,callback:function(e){t.$set(t.editedTeam,"name",e)},expression:"editedTeam.name"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Team Avatar","prepend-icon":"mdi-camera"},model:{value:t.editedTeam.avatar_url,callback:function(e){t.$set(t.editedTeam,"avatar_url",e)},expression:"editedTeam.avatar_url"}})],1),a("v-col",{attrs:{cols:"12"}},[a("h2",{staticStyle:{"padding-bottom":"10px"}},[t._v("Description")]),a("v-textarea",{attrs:{"auto-grow":"",clearable:"","clear-icon":"mdi-close-circle"},model:{value:t.editedTeam.description,callback:function(e){t.$set(t.editedTeam,"description",e)},expression:"editedTeam.description"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeCreateTeamDialog}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.createTeam}},[t._v("Create")])],1)],1)],1):t._e(),null==t.userInfo.team?a("v-dialog",{attrs:{"hide-overlay":"",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"blue darken-1",text:""}},"v-btn",n,!1),i),[t._v("Join Team")])]}}],null,!1,2999674629),model:{value:t.joinTeamDialog,callback:function(e){t.joinTeamDialog=e},expression:"joinTeamDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Join Team")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[a("v-text-field",{attrs:{label:"Team Token","prepend-icon":"mdi-key"},model:{value:t.joinTeamInfo.token,callback:function(e){t.$set(t.joinTeamInfo,"token",e)},expression:"joinTeamInfo.token"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeJoinTeamDialog}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.joinTeam}},[t._v("Join")])],1)],1)],1):[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.dismissTeam}},[t._v(t._s(t.dismissText))])]],2)]},proxy:!0},{key:"item.icon",fn:function(e){var i=e.item;return[a("v-icon",{domProps:{textContent:t._s(i.icon)}})]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v("mdi-delete")])]}}])})],1)],1)],1)],1)},n=[],o=(a("a4d3"),a("e01a"),a("b0c0"),a("96cf"),a("1da1")),s=a("5530"),r=a("2f62"),c=a("ff7d"),l=a("b775"),d=function(t){return Object(l["a"])({url:"/team/",method:"post",data:t})},u=function(t){return Object(l["a"])({url:"/team/"+t+"/",method:"get"})},m=function(t,e){return Object(l["a"])({url:"/team/"+t+"/",method:"put",data:e})},h=function(t){return Object(l["a"])({url:"/team/ticket/",method:"post",data:t})},v=function(t){return Object(l["a"])({url:"/team/"+t+"/",method:"delete"})},f={components:{BaseCard:c["a"]},data:function(){return{createTeamDialog:!1,joinTeamDialog:!1,headers:[{text:"ID",align:"start",sortable:!0,value:"id"},{text:"Nickname",sortable:!1,value:"nickname"},{text:"Points",value:"points"}],isLeader:!1,editedTeam:{name:"",description:"",avatar_url:""},joinTeamInfo:{token:""},dismissText:"Dismiss",teamFormTitle:"Create A Team",teamProfile:{name:"",token:"",description:"",avatar_url:"",solved_amount:0,leader:0,member:[{id:0,nickname:"",points:0}]}}},computed:Object(s["a"])({},Object(r["c"])("user",["userInfo"])),mounted:function(){null!=this.userInfo.team&&this.genTeamInfo()},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])("user",["UpdateUserTeam"])),{},{closeCreateTeamDialog:function(){this.createTeamDialog=!1},closeJoinTeamDialog:function(){this.joinTeamDialog=!1},createTeam:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.userInfo.team){e.next=9;break}return e.next=3,d(t.editedTeam);case 3:a=e.sent,t.UpdateUserTeam(a.data.id),t.closeCreateTeamDialog(),t.genTeamInfo(),e.next=15;break;case 9:return e.next=11,m(t.userInfo.team,t.editedTeam);case 11:i=e.sent,t.UpdateUserTeam(i.data.id),t.closeCreateTeamDialog(),t.genTeamInfo();case 15:t.isLeader=!0;case 16:case"end":return e.stop()}}),e)})))()},joinTeam:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h(t.joinTeamInfo);case 2:a=e.sent,console.log(a.data),t.UpdateUserTeam(a.data.id),t.closeJoinTeamDialog();case 6:case"end":return e.stop()}}),e)})))()},genTeamInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u(t.userInfo.team);case 2:a=e.sent,t.teamProfile=a.data,t.editedTeam={name:t.teamProfile.name,description:t.teamProfile.description,avatar_url:t.teamProfile.avatar_url},t.isLeader=t.teamProfile.leader==t.userInfo.id,t.isLeader?(t.dismissText="Dismiss",t.teamFormTitle="Edit"):(t.dismissText="Leave",t.teamFormTitle="Create A Team");case 7:case"end":return e.stop()}}),e)})))()},dismissTeam:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v(t.userInfo.team);case 2:e.sent,t.userInfo.team=null,t.teamProfile={name:"",token:"",description:"",avatar_url:"",solved_amount:0,leader:0,member:[{id:0,nickname:"",points:0}]};case 5:case"end":return e.stop()}}),e)})))()}})},p=f,g=a("2877"),b=a("6544"),x=a.n(b),T=a("8212"),w=a("8336"),k=a("b0af"),_=a("99d9"),C=a("62ad"),y=a("a523"),I=a("8fea"),j=(a("7db0"),a("caad"),a("45fc"),a("c0b6"),a("a9e3"),a("2532"),a("498a"),a("4795"),a("2909")),O=a("ade3"),$=(a("368e"),a("480e")),A=a("4ad4"),D=a("b848"),S=a("75eb"),V=a("e707"),P=a("e4d3"),B=a("21be"),E=a("f2e7"),F=a("a293"),H=a("58df"),R=a("d9bd"),z=a("80d2"),L=Object(H["a"])(A["a"],D["a"],S["a"],V["a"],P["a"],B["a"],E["a"]),N=L.extend({name:"v-dialog",directives:{ClickOutside:F["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(O["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(O["a"])(t,"v-dialog--active",this.isActive),Object(O["a"])(t,"v-dialog--persistent",this.persistent),Object(O["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(O["a"])(t,"v-dialog--scrollable",this.scrollable),Object(O["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(R["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):V["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===z["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(j["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement($["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(s["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(z["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(z["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),J=a("ce7e"),U=a("132d"),G=a("0fd9"),M=a("2fa4"),Z=a("8654"),W=(a("acd8"),a("e25e"),a("1681"),Object(H["a"])(Z["a"])),K=W.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},Z["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=Z["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){Z["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),q=a("71d9"),Q=a("2a7f"),X=Object(g["a"])(p,i,n,!1,null,null,null);e["default"]=X.exports;x()(X,{VAvatar:T["a"],VBtn:w["a"],VCard:k["a"],VCardActions:_["a"],VCardText:_["c"],VCardTitle:_["d"],VCol:C["a"],VContainer:y["a"],VDataTable:I["a"],VDialog:N,VDivider:J["a"],VIcon:U["a"],VRow:G["a"],VSpacer:M["a"],VTextField:Z["a"],VTextarea:K,VToolbar:q["a"],VToolbarTitle:Q["a"]})},1681:function(t,e,a){},"368e":function(t,e,a){},"900b":function(t,e,a){"use strict";a("a9c0")},a9c0:function(t,e,a){},ff7d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._b({staticClass:"v-card--material pa-3",class:t.classes},"v-card",t.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[t.avatar?a("v-avatar",{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[a("v-img",{attrs:{src:t.avatar}})],1):a("v-sheet",{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!t.$slots.image},attrs:{color:t.color,"max-height":t.icon?90:void 0,width:t.icon?"auto":"100%",elevation:"6",dark:""}},[t.$slots.heading?t._t("heading"):t.$slots.image?t._t("image"):t.title&&!t.icon?a("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:t._s(t.title)}}):t.icon?a("v-icon",{attrs:{size:"32"},domProps:{textContent:t._s(t.icon)}}):t._e(),t.text?a("div",{staticClass:"headline font-weight-thin",domProps:{textContent:t._s(t.text)}}):t._e()],2),t.$slots["after-heading"]?a("div",{staticClass:"ml-6"},[t._t("after-heading")],2):t.icon&&t.title?a("div",{staticClass:"ml-4"},[a("div",{staticClass:"card-title font-weight-light",domProps:{textContent:t._s(t.title)}})]):t._e()],1),t._t("default"),t.$slots.actions?[a("v-divider",{staticClass:"mt-2"}),a("v-card-actions",{staticClass:"pb-0"},[t._t("actions")],2)]:t._e()],2)},n=[],o={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes:function(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},s=o,r=(a("900b"),a("2877")),c=a("6544"),l=a.n(c),d=a("8212"),u=a("b0af"),m=a("99d9"),h=a("ce7e"),v=a("132d"),f=a("adda"),p=a("8dd9"),g=Object(r["a"])(s,i,n,!1,null,null,null);e["a"]=g.exports;l()(g,{VAvatar:d["a"],VCard:u["a"],VCardActions:m["a"],VDivider:h["a"],VIcon:v["a"],VImg:f["a"],VSheet:p["a"]})}}]);