webpackJsonp([0],{0:function(t,e){},IxIF:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("/ocq"),a=s("8+8L"),o=s("OXLr"),l=s.n(o),c={name:"vModel",created:function(){console.log(this.type)},props:["isHeadShow","type"],data:function(){return{isModelShow:!1}},methods:{popupClick:function(){},modelClose:function(){this.isModelShow=!1},modelOpen:function(){this.isModelShow=!0},modelBgHide:function(){"pop"===this.type&&this.modelClose()},alert_BtnEvent:function(){this.modelClose(),this.$emit("alertEvent")},confirm_BtnEvent:function(t){this.modelClose(),this.$emit("confirmEvent",t)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"animateBase"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isModelShow,expression:"isModelShow"}],staticClass:"screen1",on:{click:t.modelBgHide}},[s("div",{staticClass:"model-box"},[s("div",{staticClass:"model"},[s("div",{staticClass:"main",on:{click:function(e){return e.stopPropagation(),t.popupClick(e)}}},["pop"==t.type?s("div",{staticClass:"pop"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isHeadShow,expression:"isHeadShow"}],staticClass:"head"},[s("span",{staticClass:"title"},[t._v("弹出窗口")]),t._v(" "),s("span",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.modelClose(e)}}},[t._v("x")])]),t._v(" "),s("div",{staticClass:"body"},[t._t("modalbody")],2),t._v(" "),s("div",{staticClass:"foot"},[t._t("modalfoot")],2)]):t._e(),t._v(" "),"alert"==t.type?s("div",[s("div",{staticClass:"alert"},[s("div",{staticClass:"top"},[t._t("alert")],2),t._v(" "),s("div",{staticClass:"bottom"},[s("button",{on:{click:t.alert_BtnEvent}},[t._v("确 认")])])])]):t._e(),t._v(" "),"confirm"==t.type?s("div",[s("div",{staticClass:"confirm"},[s("div",{staticClass:"top"},[t._t("confirm")],2),t._v(" "),s("div",{staticClass:"bottom"},[s("button",{staticClass:"radius-left",on:{click:function(e){t.confirm_BtnEvent(1)}}},[t._v("确 认")]),t._v(" "),s("button",{staticClass:"radius-right",on:{click:function(e){t.confirm_BtnEvent(0)}}},[t._v("取 消")])])])]):t._e()])])])])])},staticRenderFns:[]};var d={name:"exam1",components:{"u-model":s("VU/8")(c,r,!1,function(t){s("fzYW")},"data-v-0d3f5234",null).exports},data:function(){return{exams:l.a.list,questionList:[],activeIndex:-1,rightIndex:-1,errorIndex:-1,ansState:!1,allQuestionState:[],errorHtmlData:[],collectionList:[],collectHtmlData:[],collectionState:!1,collectionText:"",collectNum:0,toast:!1,toastText:"",qIndex:0}},watch:{qIndex:function(t,e){this.qIndex=t,this.qIndexChange()}},mounted:function(){for(var t=0;t<this.exams.length;t++)this.collectionList.push(!1),this.allQuestionState.push({id:t,state:1})},created:function(){},methods:{checkEvent:function(t){console.log(t),this.questionList[this.qIndex]||(console.log("num"),this.activeIndex=t,this.exams[this.qIndex].answer===t?(this.rightIndex=t,this.questionList[this.qIndex]={userAns:t,rightAns:t},this.allQuestionState[this.qIndex].state=2):(this.errorIndex=t,this.rightIndex=this.exams[this.qIndex].answer,this.questionList[this.qIndex]={userAns:t,rightAns:this.exams[this.qIndex].answer},this.errorHtmlData.push(this.qIndex+1),this.allQuestionState[this.qIndex].state=3))},preEvent:function(){0!==this.qIndex&&(this.qIndex-=1,this.activeIndex=-1,this.rightIndex=-1,this.errorIndex=-1,this.ansState=!1)},nextEvent:function(){this.exams.length>this.qIndex+1&&(this.qIndex+=1,this.activeIndex=-1,this.rightIndex=-1,this.errorIndex=-1,this.ansState=!1)},qIndexChange:function(){this.activeIndex=-1,this.rightIndex=-1,this.errorIndex=-1,this.questionList[this.qIndex]&&(this.questionList[this.qIndex].rightAns===this.questionList[this.qIndex].userAns?this.rightIndex=this.questionList[this.qIndex].rightAns:(this.rightIndex=this.questionList[this.qIndex].rightAns,this.errorIndex=this.questionList[this.qIndex].userAns)),this.collectionList[this.qIndex]?(this.collectionState=!0,this.collectionText=""):(this.collectionState=!1,this.collectionText="")},collectionEvent:function(){this.collectionState?(this.collectionList[this.qIndex]=!1,this.collectionState=!this.collectionState,this.collectionText=""):(this.collectionList[this.qIndex]=!0,this.collectionState=!this.collectionState,this.collectionText=""),this.collectNum=this.getCollectList().length},getCollectList:function(){for(var t=[],e=0;e<this.collectionList.length;e++)this.collectionList[e]&&t.push(e+1);return t},listEvent:function(){this.$refs.list.modelOpen()},collectListEvent:function(){this.collectHtmlData=this.getCollectList(),this.collectHtmlData.length>0?this.$refs.collectList.modelOpen():this.showToast("ᠬᠠᠳᠠᠭᠠᠯᠠᠭᠰᠠᠨ ᠰᠡᠳᠦᠪ ᠪᠠᠢᠬᠤ ᠦᠭᠡᠢ")},errorListEvent:function(){this.errorHtmlData.length>0?this.$refs.error.modelOpen():this.showToast("ᠪᠤᠷᠤᠭᠤ ᠬᠢᠭᠰᠡᠨ ᠰᠡᠳᠦᠪ ᠪᠠᠢᠬᠤ ᠦᠭᠡᠢ")},showToast:function(t){var e=this;e.toast=!0,e.toastText=t,setTimeout(function(){e.toast=!1},2e3)},allQuestionEvent:function(t){this.$refs.list.modelClose(),this.qIndex=t},errInEvent:function(t){this.$refs.error.modelClose(),this.qIndex=t},collectInEvent:function(t){this.$refs.collectList.modelClose(),this.qIndex=t},fnLuanXu:function(){this.$http.get("./../static/251TO300.json").then(function(t){return console.log(t.json()),t.json()}).then(function(t){var e=t.list,s=e.length;console.log("num::::::::::"+s);for(var i=0;i<s;i++){var n=parseInt(s*Math.random()),a=e[i];e[i]=e[n],e[n]=a}console.log(e),this.exams=e})},fetchData:function(){this.$http.get("./../static/251TO300.json").then(function(t){return console.log(t.json()),t.json()}).then(function(t){this.exams=t.list})}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content mongol"},[s("div",{staticStyle:{"margin-top":"10px"}},[t._m(0),t._v(" "),s("div",{staticStyle:{margin:"0 20px"},attrs:{onselectstart:"return false"}},[s("div",{staticClass:"thumbnail"},[s("p",{staticClass:"subject"},[t._v("\n              "+t._s(t.exams[t.qIndex].examId)+" . \n              "),s("span",[t._v(t._s(t.exams[t.qIndex].examTitle))])]),t._v(" "),s("ul",{staticStyle:{"padding-top":"20px"}},t._l(t.exams[t.qIndex].selections,function(e,i){return s("li",{staticClass:"choices",class:{active:t.activeIndex===i,color1:i===t.rightIndex,color2:i===t.errorIndex},on:{click:function(e){t.checkEvent(i)}}},[0===i?s("span",{class:[{sign1:i===t.rightIndex},{sign2:i===t.errorIndex},"sign"]},[t._v("A")]):t._e(),t._v(" "),1===i?s("span",{class:[{sign1:i===t.rightIndex},{sign2:i===t.errorIndex},"sign"]},[t._v("B")]):t._e(),t._v(" "),2===i?s("span",{class:[{sign1:i===t.rightIndex},{sign2:i===t.errorIndex},"sign"]},[t._v("C")]):t._e(),t._v(" "),3===i?s("span",{class:[{sign1:i===t.rightIndex},{sign2:i===t.errorIndex},"sign"]},[t._v("D")]):t._e(),t._v(" "),4===i?s("span",{class:[{sign1:i===t.rightIndex},{sign2:i===t.errorIndex},"sign"]},[t._v("E")]):t._e(),t._v(" "+t._s(e)+"\n              ")])}))])])]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"50px"}}),t._v(" "),s("transition",{attrs:{name:"toast"}},[t.toast?s("div",{staticClass:"toast"},[s("div",{staticClass:"main"},[t._v(t._s(t.toastText))])]):t._e()]),t._v(" "),s("div",{staticClass:"footer"},[s("div",{class:["btn",{btn1:t.collectionState}],on:{click:t.collectionEvent}},[s("span",{staticClass:"iconfont"},[t._v(t._s(t.collectionText))])]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.collectListEvent}},[s("span",{staticClass:"iconfont icon-weibiaoti2fuzhi03-copy"}),t.collectNum?s("span",[t._v(" "+t._s(t.collectNum))]):t._e()]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.errorListEvent}},[s("span",{staticClass:"iconfont icon-cuotiku"}),t.errorHtmlData.length?s("span",[t._v(" "+t._s(t.errorHtmlData.length))]):t._e()]),t._v(" "),s("div",{staticClass:"btn",staticStyle:{"border-bottom":"1px solid #ddd"},on:{click:t.listEvent}},[s("span",{staticClass:"iconfont icon-caidan-copy"})]),t._v(" "),s("div",{staticClass:"btn",class:[{button:0!==t.qIndex},{button1:0===t.qIndex}],staticStyle:{"margin-top":"10px"},on:{click:t.preEvent}},[t._v("ᠡᠮᠦᠨ᠎ᠡ ᠰᠡᠳᠦᠪ")]),t._v(" "),s("div",{staticClass:"btn",class:[{button:t.qIndex!==t.exams.length-1},{button1:t.qIndex===t.exams.length-1}],staticStyle:{"margin-top":"10px"},on:{click:t.nextEvent}},[t._v("\n        ᠳᠠᠷᠠᠭ᠎ᠠ ᠰᠡᠳᠦᠪ\n      ")])]),t._v(" "),s("u-model",{ref:"list",staticClass:"collectList",attrs:{type:"pop"}},[s("div",{attrs:{slot:"modalbody"},slot:"modalbody"},[s("h5",[t._v("ᠰᠡᠳᠦᠪ ᠬᠢᠭᠰᠡᠨ ᠲᠣᠢᠮᠣ ᠪᠠᠢᠳᠠᠯ")]),t._v(" "),s("div",{staticStyle:{overflow:"auto","max-width":"300px"}},[s("ul",{staticClass:"bs-list",staticStyle:{padding:"5px"}},t._l(t.allQuestionState,function(e){return s("li",[1===e.state?s("div",{staticClass:"item",on:{click:function(s){t.allQuestionEvent(e.id)}}},[t._v(t._s(t.exams[e.id].examId))]):t._e(),t._v(" "),2===e.state?s("div",{staticClass:"item right",on:{click:function(s){t.allQuestionEvent(e.id)}}},[t._v(t._s(t.exams[e.id].examId))]):t._e(),t._v(" "),3===e.state?s("div",{staticClass:"item error",on:{click:function(s){t.allQuestionEvent(e.id)}}},[t._v(t._s(t.exams[e.id].examId))]):t._e()])}))])]),t._v(" "),s("div",{attrs:{slot:"modelfoot"},slot:"modelfoot"})]),t._v(" "),s("u-model",{ref:"collectList",staticClass:"collectList",attrs:{type:"pop"}},[s("div",{attrs:{slot:"modalbody"},slot:"modalbody"},[s("h5",[t._v("ᠠᠪᠳᠠᠷ᠎ᠠ")]),t._v(" "),s("div",{staticStyle:{overflow:"auto","max-width":"300px"}},[s("ul",t._l(t.collectHtmlData,function(e){return s("li",[s("div",{staticClass:"item right",on:{click:function(s){t.collectInEvent(e-1)}}},[t._v(t._s(t.exams[e-1].examId))])])}))])]),t._v(" "),s("div",{attrs:{slot:"modelfoot"},slot:"modelfoot"})]),t._v(" "),s("u-model",{ref:"error",staticClass:"collectList",attrs:{type:"pop"}},[s("div",{attrs:{slot:"modalbody"},slot:"modalbody"},[s("h5",[t._v("ᠪᠤᠷᠤᠭᠤ ᠬᠢᠭᠰᠡᠨ ᠰᠡᠳᠦᠪ  ᠦᠳ")]),t._v(" "),s("div",{staticStyle:{overflow:"auto","max-width":"300px"}},[s("ul",t._l(t.errorHtmlData,function(e){return s("li",[s("div",{staticClass:"item error",on:{click:function(s){t.errInEvent(e-1)}}},[t._v(t._s(t.exams[e-1].examId))])])}))])]),t._v(" "),s("div",{attrs:{slot:"modelfoot"},slot:"modelfoot"})])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h4",{staticClass:"title"},[this._v("ᠤᠲᠠᠴᠢ ᠰᠤᠷᠭᠠᠨ ᠬᠦᠮᠦᠵᠢᠯ —— ᠮᠤᠩᠭᠤᠯ ᠡᠮᠨᠡᠯᠭᠡ ᠶᠢᠨ ᠡᠮᠴᠢ ᠶᠢᠨ ᠬᠢᠷᠢ ᠭᠡᠮ ᠤᠯᠭᠤᠬᠤ ᠰᠢᠯᠭᠠᠯᠲᠠ ᠶᠢᠨ ᠰᠡᠳᠦᠪ ᠦᠨ ᠬᠦᠮᠦᠷᠭᠡ")])])}]};var x=s("VU/8")(d,m,!1,function(t){s("IxIF")},"data-v-2e0248c0",null).exports,h={name:"category",methods:{gotoExam:function(){console.log("sssss"),this.$router.push({name:"examLink"})}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content mongol"},[e("h1",[this._v(" ᠰᠤᠩᠭᠤᠭᠠᠷᠠᠢ ᠄")]),this._v(" "),e("hr"),this._v(" "),e("ul",[e("li",{staticClass:"item"},[e("router-link",{staticClass:"title",attrs:{to:"{name:'examLink'}"}},[this._v("ᠤᠲᠠᠴᠢ ᠰᠤᠷᠭᠠᠨ ᠬᠦᠮᠦᠵᠢᠯ  ᠦᠨ ᠲᠦᠰᠦᠭᠡᠯᠡᠭᠰᠡᠨ ᠰᠡᠳᠦᠪ")]),e("hr")],1),this._v(" "),e("li",{staticClass:"item"},[e("router-link",{staticClass:"title",attrs:{to:{name:"examLink"}}},[this._v("ᠮᠤᠩᠭᠤᠯ ᠠᠨᠠᠭᠠᠬᠤ ᠤᠬᠠᠭᠠᠨ  ᠤ ᠡᠮᠴᠢ  ᠶᠢᠨ ᠬᠢᠷᠢ ᠭᠡᠮ ᠤᠯᠭᠤᠬᠤ ᠰᠢᠯᠭᠠᠯᠲᠠ  ᠶᠢᠨ ᠰᠡᠳᠦᠪ  ᠦᠨ ᠬᠦᠮᠦᠷᠭᠡ 06 ᠳ᠋ᠤᠭᠠᠷ")]),e("hr")],1)])])},staticRenderFns:[]};var u=s("VU/8")(h,v,!1,function(t){s("tHvI")},"data-v-2444feb2",null).exports,_={name:"App",components:{Exam:x,Category:u}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Exam")],1)},staticRenderFns:[]};var f=s("VU/8")(_,I,!1,function(t){s("O2jM")},null,null).exports,p=[{path:"/",name:"homeLink",component:u},{path:"/exam",name:"examLink",component:x},{path:"*",redirect:"/"}];i.a.use(n.a),i.a.use(a.a);var w=new n.a({routes:p,scrollBehavior:function(t,e,s){return s||{x:0,y:0}}});new i.a({el:"#app",router:w,components:{App:f},template:"<App/>"})},O2jM:function(t,e){},OXLr:function(t,e){t.exports={list:[{examId:301,examTitle:"      （ ）",selections:["         ","         ","           ","             ","   "],answer:3},{examId:302,examTitle:"              （ ）",selections:["  ","     "," ","  ","   "],answer:2},{examId:303,examTitle:"               （ ）",selections:[" "," "," ","  ","   "],answer:1},{examId:304,examTitle:"           （ ）",selections:["    ","   "," ","   ","   "],answer:3},{examId:305,examTitle:"           （ ）",selections:["   ","   ","  ","   ","   "],answer:1},{examId:306,examTitle:"         （ ）",selections:["      ","     ","      ","      ","      "],answer:0},{examId:307,examTitle:"        （ ）",selections:["      "," ","  ","   ","    "],answer:1},{examId:308,examTitle:"               （ ）",selections:["          ","          ","       ","          ","         "],answer:0},{examId:309,examTitle:"    __   （ ）",selections:["   ","      ","       ","  ","  "],answer:3},{examId:310,examTitle:"       __    （ ）",selections:["  ","  ","  ","  ","  "],answer:1},{examId:311,examTitle:"             （ ）",selections:["  ","   ","     ","     ","    "],answer:0},{examId:312,examTitle:"                      __   （ ）",selections:["    ","    "," "," "," "],answer:3},{examId:313,examTitle:"                     （ ）",selections:["      ","       ","      ","      ","       "],answer:2},{examId:314,examTitle:"       __  （ ）",selections:["     ","     ","     ","     ","     "],answer:1},{examId:315,examTitle:"                 __       （ ）",selections:["  ","  ","  ","  ","  "],answer:2},{examId:316,examTitle:"                                 __  （ ）",selections:["   ","   ","   ","   ","     "],answer:3},{examId:317,examTitle:"         （ ）",selections:["       ","          ","                 ","       ","   "],answer:2},{examId:318,examTitle:"       （ ）",selections:["              ","                 ","           ","      ","   "],answer:1},{examId:319,examTitle:"        （ ）",selections:["  ","  ","  ","     ","  "],answer:4},{examId:320,examTitle:"                              （ ）",selections:["      ","      ","       ","       ","      "],answer:3},{examId:321,examTitle:"          （ ）",selections:["          ","            ","       ","          ","        "],answer:3},{examId:322,examTitle:"        （ ）",selections:["  ","  "," ","     ","   "],answer:2},{examId:323,examTitle:"         （ ）",selections:["           ","         ","          ","          ","   "],answer:2},{examId:324,examTitle:"                                __   （ ）",selections:["  ","  ","  ","     ","   "],answer:3},{examId:325,examTitle:"        （ ）",selections:["  ","      ","    "," "," "],answer:2},{examId:326,examTitle:"             __   （ ）",selections:[" "," "," "," "," "],answer:1},{examId:327,examTitle:"              __ （ ）",selections:["   ","   ","   ","    ","    "],answer:4},{examId:328,examTitle:"              （ ）",selections:["  ","  ","  ","  ","   "],answer:3},{examId:329,examTitle:"       __    （ ）",selections:[" ","  ","  ","  ","  "],answer:1},{examId:330,examTitle:"        （ ）",selections:["      ","   ","   ","  ","     "],answer:4},{examId:331,examTitle:"        （ ）",selections:["              ","                 ","           ","      ","   "],answer:2},{examId:332,examTitle:"          __   （ ）",selections:["   ","   ","   ","   ","      "],answer:4},{examId:333,examTitle:"         （ ）",selections:["     ","     ","     ","    ","   "],answer:3},{examId:334,examTitle:"    __       （ ）",selections:["  "," "," ","     "," "],answer:2},{examId:335,examTitle:"        （ ）",selections:["       ","      ","        ","   ","   "],answer:1},{examId:336,examTitle:"        （ ）",selections:["  ","    ","     ","  ","    "],answer:3},{examId:337,examTitle:"                  __ （ ）",selections:["  ","  ","  ","    ","  "],answer:3},{examId:338,examTitle:"                      （ ）",selections:["   ","   ","   ","   ","   "],answer:4},{examId:339,examTitle:"           （ ）",selections:["   ","   ","   ","   ","   "],answer:0},{examId:340,examTitle:"               （ ）",selections:["          ","           ","        ","        ","     "],answer:3},{examId:341,examTitle:"            （ ）",selections:["   ","     ","  ","    ","    "],answer:0},{examId:342,examTitle:"            （ ）",selections:["     ","         ","   ","     ","     "],answer:1},{examId:343,examTitle:"              （ ）",selections:["  ","  ","  ","   ","   "],answer:3},{examId:344,examTitle:"                         （ ）",selections:["  "," "," "," "," "],answer:3},{examId:345,examTitle:"        （ ）",selections:["      ","  ","  ","  ","     "],answer:0},{examId:346,examTitle:"              __  （ ）",selections:["  ","  ","   ","  ","  "],answer:2},{examId:347,examTitle:"              （ ）",selections:["  ","  ","  ","  ","   "],answer:4},{examId:348,examTitle:"                            __     （ ）",selections:[" "," "," "," "," "],answer:2},{examId:349,examTitle:"          （ ）",selections:["   ","  ","     ","    ","   "],answer:1},{examId:350,examTitle:"       __  （ ）",selections:["     ","     ","     ","     ","     "],answer:2}]}},fzYW:function(t,e){},tHvI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.95781a3a5433a1d12267.js.map