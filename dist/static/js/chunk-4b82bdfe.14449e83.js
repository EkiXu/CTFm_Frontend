(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b82bdfe"],{"1db2":function(t,e,n){},2316:function(t,e,n){"use strict";n("1db2")},"4e1b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"task_panel",staticStyle:{padding:"0px"},attrs:{cols:"12",sm:"6",md:"7"}},[n("div",{staticClass:"task_page"},[n("div",{staticClass:"task_content"},[n("h3",{staticClass:"task_title",domProps:{textContent:t._s(t.challenge.title)}}),n("p",{staticClass:"content_author"},[t._v(" Author: "),n("a",{attrs:{target:"_blank"}},[n("strong",{domProps:{textContent:t._s(t.challenge.author)}})])]),n("div",{staticClass:"content_description"},[n("vue-markdown",{staticStyle:{"overflow-wrap":"break-word"},attrs:{source:t.challenge.content}})],1)])]),n("div",{staticClass:"task_action"},[n("div",{staticClass:"action_fab"},[n("attachment-button",{attrs:{url:this.challenge.attachment_url}})],1),n("div",{staticClass:"action_header"},[n("i",{staticClass:"mdi mdi-console",staticStyle:{"margin-right":"10px"}}),t._v("submission console ")]),n("div",{staticClass:"action_form"},[n("div",{staticStyle:{padding:"20px 15px"}},[n("div",{ref:"records",staticClass:"records"},t._l(t.submitRecords,(function(t,e){return n("vue-typed-js",{key:e,attrs:{strings:t,"show-cursor":!1}},[n("p",{staticClass:"typing",staticStyle:{margin:"0px"}})])})),1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.challenge.flag,expression:"challenge.flag"}],staticClass:"flag_input",attrs:{type:"text",placeholder:"flag{...}"},domProps:{value:t.challenge.flag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitFlag(e)},input:function(e){e.target.composing||t.$set(t.challenge,"flag",e.target.value)}}})])])])])},i=[],s=(n("96cf"),n("1da1")),o=n("40a0"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"blue darken-2",dark:"",fab:"",target:"_blank",href:t.url,disabled:null===t.url||""===t.url}},"v-btn",i,!1),a),[n("v-icon",[t._v(" mdi-cloud-download ")])],1)]}}])},[n("span",[t._v("Download Attachment")])])},c=[],l={name:"AttachmentButton",props:{url:{type:String,default:""}}},u=l,h=n("2877"),d=n("6544"),p=n.n(d),f=n("8336"),g=n("132d"),m=(n("a9e3"),n("e25e"),n("ade3")),v=(n("9734"),n("4ad4")),b=n("a9ad"),y=n("16b7"),_=n("b848"),w=n("75eb"),x=n("f573"),k=n("f2e7"),C=n("80d2"),A=n("d9bd"),O=n("58df"),j=Object(O["a"])(b["a"],y["a"],_["a"],w["a"],x["a"],k["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||a?s=i+e.width/2-n.width/2:(this.left||this.right)&&(s=i+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,a=!1!==this.attach?e.offsetTop:e.top,i=0;return this.top||this.bottom?i=a+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=a+e.height/2-n.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(i+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(C["g"])(this.maxWidth),minWidth:Object(C["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(C["s"])(this,"activator",!0)&&Object(A["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=v["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===C["w"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(m["a"])(t,this.contentClass,!0),Object(m["a"])(t,"menuable__content__active",this.isActive),Object(m["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),T=Object(h["a"])(u,r,c,!1,null,null,null),S=T.exports;p()(T,{VBtn:f["a"],VIcon:g["a"],VTooltip:j});var I={components:{AttachmentButton:S},name:"Challenge",data:function(){return{showCur:!0,submitRecords:[["> Paste flag in the input below and press enter."]],challenge:{name:"",author:"",content:"",id:0,points:0,category:""}}},mounted:function(){try{document.getElementsByName("challenges_panel")[0].className+=" hidden"}catch(t){}},beforeDestroy:function(){try{var t=document.getElementsByName("challenges_panel")[0];t.className=t.className.replaceAll("hidden","")}catch(e){}},methods:{getInfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["c"])(t.$route.params.id);case 2:n=e.sent,t.challenge=n.data;case 4:case"end":return e.stop()}}),e)})))()},submitFlag:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={flag:t.challenge.flag},e.prev=1,e.next=4,Object(o["a"])(n,t.$route.params.id);case 4:e.sent,t.submitRecords.push(["> ✓ I am most impressed by your efforts. You solved the task"]),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0),t.submitRecords.push(["> ✗ ".concat(e.t0.message)]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},watch:{$route:function(t,e){this.getInfo()},submitRecords:function(){var t=this;this.$nextTick((function(){var e=t.$refs.records;e.scrollTop=e.scrollHeight+72}))}},created:function(){this.getInfo()}},B=I,R=(n("2316"),n("62ad")),$=Object(h["a"])(B,a,i,!1,null,null,null);e["default"]=$.exports;p()($,{VCol:R["a"]})},9734:function(t,e,n){}}]);