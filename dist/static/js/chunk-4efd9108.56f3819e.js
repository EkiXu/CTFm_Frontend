(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4efd9108"],{"1db2":function(t,e,a){},2316:function(t,e,a){"use strict";a("1db2")},"4e1b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"task_panel",staticStyle:{padding:"0px"},attrs:{cols:"12",sm:"6",md:"7"}},[a("div",{staticClass:"task_page"},[a("div",{staticClass:"task_content"},[a("h3",{staticClass:"task_title",domProps:{textContent:t._s(t.challenge.title)}}),a("p",{staticClass:"content_author"},[t._v(" Author: "),a("a",{attrs:{target:"_blank"}},[a("strong",{domProps:{textContent:t._s(t.challenge.author)}})])]),a("div",{staticClass:"content_description"},[a("vue-markdown",{staticStyle:{"overflow-wrap":"break-word"},attrs:{source:t.challenge.content}})],1)])]),a("div",{staticClass:"task_action"},[a("div",{staticClass:"action_header"},[a("i",{staticClass:"mdi mdi-console",staticStyle:{"margin-right":"10px"}}),t._v("submission console ")]),a("div",{staticClass:"action_form"},[a("div",{staticStyle:{padding:"20px 15px"}},[a("div",{ref:"records",staticClass:"records"},t._l(t.submitRecords,(function(t,e){return a("vue-typed-js",{key:e,attrs:{strings:t,"show-cursor":!1}},[a("p",{staticClass:"typing",staticStyle:{margin:"0px"}})])})),1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.challenge.flag,expression:"challenge.flag"}],staticClass:"flag_input",attrs:{type:"text",placeholder:"flag{...}"},domProps:{value:t.challenge.flag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitFlag(e)},input:function(e){e.target.composing||t.$set(t.challenge,"flag",e.target.value)}}})])])])])},n=[],r=(a("96cf"),a("1da1")),c=a("40a0"),i={name:"Challenge",data:function(){return{showCur:!0,submitRecords:[["> Paste flag in the input below and press enter."]],challenge:{name:"",author:"",content:"",id:0,points:0,category:""}}},methods:{getInfo:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])(t.$route.params.id);case 2:a=e.sent,t.challenge=a.data;case 4:case"end":return e.stop()}}),e)})))()},submitFlag:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={flag:t.challenge.flag},e.prev=1,e.next=4,Object(c["a"])(a,t.$route.params.id);case 4:e.sent,t.submitRecords.push(["> ✓ I am most impressed by your efforts. You solved the task"]),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0),t.submitRecords.push(["> ✗ ".concat(e.t0.message)]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},watch:{$route:function(t,e){this.getInfo()},submitRecords:function(t){var e=this;this.$nextTick((function(){var t=e.$refs.records;t.scrollTop=t.scrollHeight}))}},created:function(){this.getInfo()}},o=i,l=(a("2316"),a("2877")),u=a("6544"),d=a.n(u),p=a("62ad"),g=Object(l["a"])(o,s,n,!1,null,null,null);e["default"]=g.exports;d()(g,{VCol:p["a"]})}}]);