(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab6e40d0"],{"3cb4":function(e,t,a){"use strict";a.r(t);var n,r,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"10"}},[a("v-row",{staticStyle:{height:"48px"}}),a("RankCard",[a("div",{staticClass:"scoreboard"},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.records,page:e.page,"items-per-page":e.itemsPerPage,"hide-default-footer":"",loading:e.isLoading,"loading-text":"Loading... Please wait",height:"300","fixed-header":"","disable-sort":""},on:{"update:page":function(t){e.page=t},"page-count":function(t){e.pageCount=t}}}),a("div",{staticClass:"text-center pt-2"},[a("v-pagination",{attrs:{length:e.pageCount},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)])],1)],1)],1)},s=[],i=(a("e25e"),a("b85c")),c=(a("96cf"),a("1da1")),l=a("c1df"),d=a.n(l),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",e._b({staticClass:"rank_card--has-heading rank_card "},"v-card",e.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[a("v-sheet",{staticClass:"text-start rank_card__heading chart_ring",attrs:{width:"100%",elevation:"6",dark:""}},[e.loaded?a("TrendCard",{staticStyle:{height:"250px",padding:"10px"},attrs:{chartdata:e.datacollection,options:e.chartOption}}):e._e()],1)],1),e._t("default")],2)},f=[],p=a("5530"),h=a("2f62"),g=a("1fca"),m={extends:g["a"],props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},b=m,v=a("2877"),x=Object(v["a"])(b,n,r,!1,null,null,null),_=x.exports,C=a("f634"),k=(a("30ef"),{components:{TrendCard:_},name:"RankCard",inheritAttrs:!1,props:{},data:function(){return{loaded:!1,timeFormat:"YYYY-MM-DD HH:mm:ss",colorset:["#409eff","#fe9205","#f87979","#00bcd4","#39c7ba","#733c8b","#9a4a4c","#dd162a","#3f637b","#635e16"],datacollection:{datasets:[]},chartOption:{scales:{xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 0.7)"},gridLines:{borderDash:[1,4],color:"rgba(255, 255, 255, 0.6)",zeroLineBorderDash:[1,4],zeroLineColor:"rgba(255, 255, 255, 0.6)"},type:"time",time:{parser:this.timeFormat,tooltipFormat:this.timeFormat}}],yAxes:[{ticks:{beginAtZero:!0,fontColor:"rgba(255, 255, 255, 0.7)"},gridLines:{color:"rgba(255, 255, 255, 0.6)",borderDash:[1,4],zeroLineBorderDash:[1,4],zeroLineColor:"rgba(255, 255, 255, 0.6)"}}]},legend:{labels:{fontColor:"rgba(255, 255, 255, 0.7)"}},lineTension:0,scaleFontColor:"rgba(255, 255, 255, 0.7)",responsive:!0,maintainAspectRatio:!1}}},computed:Object(p["a"])({},Object(h["c"])("contest",["contestInfo"])),mounted:function(){this.genTrend()},methods:{genTrend:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,r,o,s,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loaded=!1,t.next=3,Object(C["c"])();case 3:for(n in a=t.sent,a.data.rows){r=a.data.rows[n],o=r.records,s={label:r.nickname,borderColor:e.colorset[n],fill:!1,pointBackgroundColor:e.colorset[n],data:[]},s.data.push({x:d()(e.contestInfo.start_time).format(e.timeFormat),y:0}),c=Object(i["a"])(o);try{for(c.s();!(l=c.n()).done;)u=l.value,s.data.push({x:d()(u.date).format(e.timeFormat),y:u.points})}catch(f){c.e(f)}finally{c.f()}s.data.push({x:d()().isBefore(e.contestInfo.end_time)?d()().format(e.timeFormat):d()(e.contestInfo.end_time).format(e.timeFormat),y:r.current_points}),e.datacollection.datasets.push(s)}e.loaded=!0;case 6:case"end":return t.stop()}}),t)})))()}}}),w=k,y=(a("84d6"),a("6544")),O=a.n(y),j=a("b0af"),L=a("8dd9"),R=Object(v["a"])(w,u,f,!1,null,"db24630e",null),D=R.exports;O()(R,{VCard:j["a"],VSheet:L["a"]});var F={components:{RankCard:D},data:function(){return{page:1,pageCount:0,itemsPerPage:10,isLoading:!0,headers:[{text:"Rank",align:"start",sortable:!1,value:"rank"},{text:"Nickname",value:"nickname"},{text:"Points",value:"points"},{text:"Solved",value:"solved_amount"},{text:"Last Point Time",value:"last_point_at"}],records:[],challenges:[]}},methods:{genUserList:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,r,o,s,c,l,u,f,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(C["b"])();case 2:a=t.sent,n=a.data.players,r=a.data.challenges,o=Object(i["a"])(r);try{for(o.s();!(s=o.n()).done;)c=s.value,e.headers.push({text:c.title,value:"challenge_"+c.id}),e.challenges.push({text:c.title,value:"challenge_"+c.id})}catch(h){o.e(h)}finally{o.f()}for(l in n){n[l].rank=parseInt(l)+1,n[l].last_point_at=d()(n[l].last_point_at,"YYYY-MM-DD HH:mm:ss").fromNow(),u=Object(i["a"])(n[l].solved_challenges);try{for(u.s();!(f=u.n()).done;)p=f.value,n[l]["challenge_"+p.challenge]="🚩"}catch(h){u.e(h)}finally{u.f()}}e.records=n,e.isLoading=!1;case 10:case"end":return t.stop()}}),t)})))()}},created:function(){this.genUserList()}},P=F,Y=(a("a35b"),a("62ad")),T=a("a523"),V=a("8fea"),A=a("891e"),I=a("0fd9"),z=Object(v["a"])(P,o,s,!1,null,"73a9e85a",null);t["default"]=z.exports;O()(z,{VCol:Y["a"],VContainer:T["a"],VDataTable:V["a"],VPagination:A["a"],VRow:I["a"]})},"5d3f":function(e,t,a){},"84d6":function(e,t,a){"use strict";a("e4ae")},a35b:function(e,t,a){"use strict";a("5d3f")},e4ae:function(e,t,a){}}]);