(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11dc6cb1"],{"1db2":function(t,e,n){},2316:function(t,e,n){"use strict";n("1db2")},"4e1b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"task_panel",staticStyle:{padding:"0px"},attrs:{cols:"12",sm:"6",md:"7"}},[n("div",{staticClass:"task_page"},[n("div",{staticClass:"task_content"},[n("h3",{staticClass:"task_title",domProps:{textContent:t._s(t.challenge.title)}}),n("p",{staticClass:"content_author"},[t._v(" Author: "),n("a",{attrs:{target:"_blank"}},[n("strong",{domProps:{textContent:t._s(t.challenge.author)}})])]),n("div",{staticClass:"content_description"},[n("vue-markdown",{staticStyle:{"overflow-wrap":"break-word"},attrs:{source:t.challenge.content}})],1)])]),n("div",{staticClass:"task_action"},[n("div",{staticClass:"action_fab"},[t.challenge.has_dynamic_container?[n("docker-button",{attrs:{url:t.challenge.attachment_url,challenge_id:t.challenge.id,container:t.container},on:{updateContainerInfo:t.updateContainerInfo}})]:[n("attachment-button",{attrs:{url:this.challenge.attachment_url}})]],2),n("div",{staticClass:"action_header"},[n("i",{staticClass:"mdi mdi-console",staticStyle:{"margin-right":"10px"}}),t._v(t._s(t.console_title)+" ")]),n("div",{staticClass:"action_form"},[n("div",{staticStyle:{padding:"20px 15px"}},[n("div",{ref:"records",staticClass:"records"},t._l(t.submitRecords,(function(t,e){return n("vue-typed-js",{key:e,attrs:{strings:t,"show-cursor":!1}},[n("p",{staticClass:"typing",staticStyle:{margin:"0px"}})])})),1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.challenge.flag,expression:"challenge.flag"}],staticClass:"flag_input",attrs:{type:"text",placeholder:"flag{...}"},domProps:{value:t.challenge.flag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitFlag(e)},input:function(e){e.target.composing||t.$set(t.challenge,"flag",e.target.value)}}})])])])])},a=[],o=(n("99af"),n("4795"),n("96cf"),n("1da1")),s=n("40a0"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"blue darken-2",dark:"",fab:"",target:"_blank",href:t.url,disabled:null===t.url||""===t.url}},"v-btn",a,!1),i),[n("v-icon",[t._v(" mdi-cloud-download ")])],1)]}}])},[n("span",[t._v("Download Attachment")])])},c=[],l={name:"AttachmentButton",props:{url:{type:String,default:""}}},u=l,d=n("2877"),h=n("6544"),p=n.n(h),f=n("8336"),v=n("132d"),m=(n("a9e3"),n("e25e"),n("ade3")),g=(n("9734"),n("4ad4")),b=n("a9ad"),_=n("16b7"),y=n("b848"),k=n("75eb"),C=n("f573"),w=n("f2e7"),x=n("80d2"),O=n("d9bd"),A=n("58df"),j=Object(A["a"])(b["a"],_["a"],y["a"],k["a"],C["a"],w["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||i?o=a+e.width/2-n.width/2:(this.left||this.right)&&(o=a+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=i+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=i+e.height/2-n.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(x["g"])(this.maxWidth),minWidth:Object(x["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(x["s"])(this,"activator",!0)&&Object(O["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=g["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===x["w"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(m["a"])(t,this.contentClass,!0),Object(m["a"])(t,"menuable__content__active",this.isActive),Object(m["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),S=Object(d["a"])(u,r,c,!1,null,null,null),I=S.exports;p()(S,{VBtn:f["a"],VIcon:v["a"],VTooltip:j});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-speed-dial",{attrs:{direction:"left",transition:t.transition},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?n("v-icon",[t._v("mdi-close")]):n("v-icon",[t._v("mdi-docker")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[0==t.container.status?[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"},on:{click:t.requestChallengeContainer}},[n("v-icon",[t._v("mdi-play")])],1)]:[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:t.renewChallengeContainer}},[n("v-icon",[t._v("mdi-sync")])],1),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"},on:{click:t.deleteChallengeContainer}},[n("v-icon",[t._v("mdi-delete")])],1)],null!==t.url&&""!==t.url?[n("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:"",small:"",target:"_blank",href:t.url}},[n("v-icon",[t._v("mdi-cloud-download")])],1)]:t._e()],2)},B=[],T={name:"DockerButton",props:{url:{type:String,default:""},challenge_id:{type:Number,required:!0},container:{type:Object,required:!0}},data:function(){return{fab:!1,transition:"slide-x-reverse-transition"}},methods:{requestChallengeContainer:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["b"])(t.challenge_id);case 2:n=e.sent,console.log(n),t.$emit("updateContainerInfo",n.data);case 5:case"end":return e.stop()}}),e)})))()},renewChallengeContainer:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["h"])(t.challenge_id);case 2:n=e.sent,console.log(n),t.$emit("updateContainerInfo",n.data);case 5:case"end":return e.stop()}}),e)})))()},deleteChallengeContainer:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])(t.challenge_id);case 2:n=e.sent,console.log(n),t.$emit("updateContainerInfo",{status:0});case 5:case"end":return e.stop()}}),e)})))()}}},$=T,D=(n("caad"),n("d81d"),n("b0c0"),n("c7cd"),n("8cd0"),n("fe6c")),N=n("f40d"),E=n("a293"),L=Object(A["a"])(D["a"],w["a"],N["a"]).extend({name:"v-speed-dial",directives:{ClickOutside:E["a"]},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(m["a"])(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(m["a"])(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,n=[],i={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(i.on.mouseenter=function(){return e.isActive=!0},i.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var a=0;n=(this.$slots["default"]||[]).map((function(e,n){return!e.tag||"undefined"===typeof e.componentOptions||"v-btn"!==e.componentOptions.Ctor.options.name&&"v-tooltip"!==e.componentOptions.Ctor.options.name?(e.key=n,e):(a++,t("div",{style:{transitionDelay:.05*a+"s"},key:n},[e]))}))}var o=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},n);return t("div",i,[this.$slots.activator,o])}}),V=Object(d["a"])($,R,B,!1,null,null,null),Y=V.exports;p()(V,{VBtn:f["a"],VIcon:v["a"],VSpeedDial:L});var q=n("c1df"),F=n.n(q),W={components:{AttachmentButton:I,DockerButton:Y},name:"Challenge",data:function(){return{now:F()(),showCur:!0,submitRecords:[["> Paste flag in the input below and press enter."]],challenge:{name:"",author:"",content:"",id:0,points:0,category:""},container:{address:"",port:0,protocol:"",start_time:"",timeout:10800,status:0}}},mounted:function(){try{document.getElementsByName("challenges_panel")[0].className+=" hidden"}catch(t){}},beforeDestroy:function(){try{var t=document.getElementsByName("challenges_panel")[0];t.className=t.className.replaceAll("hidden","")}catch(e){}},methods:{getInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["e"])(t.$route.params.id);case 2:if(n=e.sent,t.challenge=n.data,!t.challenge.has_dynamic_container){e.next=9;break}return e.next=7,Object(s["f"])(t.challenge.id);case 7:i=e.sent,204==i.status?t.container.status=0:200==i.status&&(t.container=i.data,t.container.status=1,t.submitRecords.push(["> Your container listening at ".concat(t.container.host,":").concat(t.container.port)]));case 9:case"end":return e.stop()}}),e)})))()},submitFlag:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={flag:t.challenge.flag},e.prev=1,e.next=4,Object(s["a"])(n,t.$route.params.id);case 4:e.sent,t.submitRecords.push(["> ✓ I am most impressed by your efforts. You solved the task"]),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0),t.submitRecords.push(["> ✗ ".concat(e.t0.message)]);case 12:i=document.getElementsByClassName("records")[0],t.$nextTick((function(){setTimeout((function(){i.scrollTop=i.scrollHeight}),200)}));case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))()},updateContainerInfo:function(t){console.log("update",t),0==t.status?(this.submitRecords.push(["> Your container successfully closed"]),this.console_title="submission console",this.container=void 0):(this.submitRecords.push(["> Your container listening at ".concat(t.host,":").concat(t.port)]),this.container=t)}},computed:{console_title:function(){if(this.container&&this.container.start_time){var t="".concat(this.container.host,":").concat(this.container.port," ");return t+(this.container.timeout-this.now.diff(F()(this.container.start_time),"seconds"))+"s"}return"submission console"}},watch:{$route:function(t,e){this.getInfo()}},created:function(){var t=this,e=function e(){t.now=F()(),requestAnimationFrame(e)};e(),this.getInfo()}},H=W,P=(n("2316"),n("62ad")),z=Object(d["a"])(H,i,a,!1,null,null,null);e["default"]=z.exports;p()(z,{VCol:P["a"]})},"8cd0":function(t,e,n){},9734:function(t,e,n){},f40d:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);