webpackJsonp([1],{0:function(t,s){},"48Rx":function(t,s,e){t.exports=e.p+"static/img/dashu2.c203314.png"},"59zD":function(t,s,e){t.exports=e.p+"static/img/pandang@2x.1a3a2f1.png"},"7ZMz":function(t,s){},Chdk:function(t,s,e){t.exports=e.p+"static/img/utaqi-logo-white.966cad3.png"},Cqnn:function(t,s){},FqFW:function(t,s,e){t.exports=e.p+"static/img/qqg.01df886.png"},Gqlx:function(t,s){},I8Mj:function(t,s){},KXqr:function(t,s,e){t.exports=e.p+"static/img/utaqi-logo.8b6d054.png"},NGhG:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("/ocq"),n=e("8+8L"),r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"add-blog"}},[e("h1",[t._v("写博客")]),t._v(" "),t.submited?t._e():e("form",[e("label",[t._v("主题")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.title,expression:"blog.title"}],attrs:{type:"text",required:""},domProps:{value:t.blog.title},on:{input:function(s){s.target.composing||t.$set(t.blog,"title",s.target.value)}}}),t._v(" "),e("label",[t._v("博客内容")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blog.content,expression:"blog.content"}],domProps:{value:t.blog.content},on:{input:function(s){s.target.composing||t.$set(t.blog,"content",s.target.value)}}}),t._v(" "),e("div",{attrs:{id:"checkboxes"}},[e("label",[t._v("Vue.js")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Vue.js"},domProps:{checked:Array.isArray(t.blog.categories)?t._i(t.blog.categories,"Vue.js")>-1:t.blog.categories},on:{change:function(s){var e=t.blog.categories,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n=t._i(e,"Vue.js");i.checked?n<0&&(t.blog.categories=e.concat(["Vue.js"])):n>-1&&(t.blog.categories=e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.blog,"categories",a)}}}),t._v(" "),e("label",[t._v("Node.js")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Node.js"},domProps:{checked:Array.isArray(t.blog.categories)?t._i(t.blog.categories,"Node.js")>-1:t.blog.categories},on:{change:function(s){var e=t.blog.categories,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n=t._i(e,"Node.js");i.checked?n<0&&(t.blog.categories=e.concat(["Node.js"])):n>-1&&(t.blog.categories=e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.blog,"categories",a)}}}),t._v(" "),e("label",[t._v("React.js")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"React.js"},domProps:{checked:Array.isArray(t.blog.categories)?t._i(t.blog.categories,"React.js")>-1:t.blog.categories},on:{change:function(s){var e=t.blog.categories,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n=t._i(e,"React.js");i.checked?n<0&&(t.blog.categories=e.concat(["React.js"])):n>-1&&(t.blog.categories=e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.blog,"categories",a)}}}),t._v(" "),e("label",[t._v("Angular4")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Angular4"},domProps:{checked:Array.isArray(t.blog.categories)?t._i(t.blog.categories,"Angular4")>-1:t.blog.categories},on:{change:function(s){var e=t.blog.categories,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n=t._i(e,"Angular4");i.checked?n<0&&(t.blog.categories=e.concat(["Angular4"])):n>-1&&(t.blog.categories=e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.blog,"categories",a)}}})]),t._v(" "),e("label",{staticClass:"inlineBlock"},[t._v("作者：")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.blog.author,expression:"blog.author"}],on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.blog,"author",s.target.multiple?e:e[0])}}},t._l(t.authors,function(s){return e("option",[t._v(t._s(s))])})),t._v(" "),e("button",{on:{click:function(s){s.preventDefault(),t.post(s)}}},[t._v("添加博客")])]),t._v(" "),t.submited?e("h3",[t._v("您的博客添加成功！")]):t._e(),t._v(" "),e("hr"),t._v(" "),e("div",{attrs:{id:"preview"}},[e("h3",[t._v("博客预览")]),t._v(" "),e("p",{staticClass:"title"},[t._v("博客主题：")]),t._v(" "),e("p",[t._v(t._s(t.blog.title))]),t._v(" "),e("p",{staticClass:"title"},[t._v("博客内容：")]),t._v(" "),e("p",[t._v(t._s(t.blog.content))]),t._v(" "),e("p",{staticClass:"title"},[t._v("博客分类：")]),t._v(" "),e("ul",t._l(t.blog.categories,function(s){return e("li",[t._v(t._s(s))])})),t._v(" "),e("p",[e("label",{staticClass:"title",staticStyle:{display:"inline-block","margin-top":"0"}},[t._v("作者：")]),t._v(t._s(t.blog.author))]),t._v(" "),e("p")])])},staticRenderFns:[]};var l=e("VU/8")({name:"add-blog",data:function(){return{blog:{title:"",content:"",categories:[],author:""},authors:["Guojun Liang","Anar","Jirimu"],submited:!1}},methods:{post:function(){this.$http.post("https://vue-blog-jun.firebaseio.com/posts.json",this.blog).then(function(t){this.submited=!0})}}},r,!1,function(t){e("iATW")},"data-v-79fcb040",null).exports,o=e("g9Iy"),c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"container"}},[s("nav",[this._m(0),this._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/",exact:""}},[this._v("课程")]),this._v(" "),s("router-link",{attrs:{to:"/about",exact:""}},[this._v("关于")]),this._v(" "),s("a",{attrs:{href:"http://www.utaqi.cn/mn/"}},[this._v("Mongol")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"nav-a",attrs:{href:"http://www.utaqi.cn/"}},[s("img",{attrs:{src:e("Chdk")}})])}]};var v=e("VU/8")({name:"blog-header"},c,!1,function(t){e("jUrI")},"data-v-61279ee8",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"blog-footer"}},[s("p",{staticClass:"company"},[this._v("内蒙古奥塔奇蒙医研究有限公司")]),this._v(" "),s("p",{staticClass:"copyright"},[this._v("Copyright ©Utaqi 2017")])])}]};var _=e("VU/8")({name:"blog-footer"},h,!1,function(t){e("I8Mj")},"data-v-cf7ab880",null).exports,d=e("kHun"),u={name:"app",components:{AddBlog:l,ShowBlogs:o.default,BlogHeader:v,BlogFooter:_,AboutUs:d.default}},p={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("blog-header"),this._v(" "),s("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:this.$route.meta.title,expression:"$route.meta.title"}]}),this._v(" "),s("blog-footer")],1)},staticRenderFns:[]};var g=e("VU/8")(u,p,!1,function(t){e("NGhG")},null,null).exports,m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"single-blog"}},[e("h1",[t._v(t._s(t.blog.title))]),t._v(" "),e("article",[t._v(t._s(t.blog.content))]),t._v(" "),e("p",[t._v("作者："+t._s(t.blog.author))]),t._v(" "),e("p",[t._v("分类："),t._l(t.blog.categories,function(s){return e("span",{staticClass:"category"},[t._v(t._s(s)+" ")])})],2)])},staticRenderFns:[]};var f=e("VU/8")({name:"single-blog",data:function(){return{id:this.$route.params.id,blog:{}}},created:function(){this.$http.get("https://vue-blog-jun.firebaseio.com/posts/"+this.id+".json").then(function(t){return t.json()}).then(function(t){this.blog=t})}},m,!1,function(t){e("Gqlx")},"data-v-2ea44b1a",null).exports,b=e("vDDV");var y={name:"all-students",data:function(){return{students:[],student:{},phone:"",name:"",date:new Date,fiterResult:[]}},methods:{filterWithName:function(t){var s=this;return""==t?void alert("请输入学员姓名"):(console.log(t),this.students.filter(function(t){return t.name.match(s.name)}))}},created:function(){this.$http.get("./../static/students.json").then(function(t){return t.json()}).then(function(t){this.students=t})},computed:{fiterStudentWithPhone:function(){var t=this;return this.students.filter(function(s){return t.fiterResult=s.phone.match(t.phone),console.log(t.fiterResult),t.fiterResult})}},filters:{formatDate:function(t){return function(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e,i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in i)if(new RegExp("("+a+")").test(s)){var n=i[a]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?n:("00"+(e=n)).substr(e.length))}return s}(new Date(t),"yyyy-MM-dd hh : mm")}}},C={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content"},[i("h1",[t._v("报名情况总览")]),t._v(" "),i("hr",{staticClass:"titleHr"}),t._v(" "),i("div",{staticClass:"container"},[i("form",[i("div",{staticClass:"input-group"},[i("span",{staticClass:"input-group-addon",attrs:{id:"sizing-addon1"}},[t._v("📱 手机号过滤")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",staticStyle:{"font-size":"18px"},attrs:{type:"text",placeholder:"请输入手机号","aria-describedby":"sizing-addon1",onkeyup:"value=value.replace(/[^\\d]/g,'')","ng-pattern":"/[^a-zA-Z]/",required:""},domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"result"},[i("div",{staticClass:"panel panel-default"},[i("table",{staticClass:"table"},[t._m(0),t._v(" "),i("tbody",t._l(t.fiterStudentWithPhone,function(s){return i("tr",[i("th",[t._v(t._s(s.id))]),t._v(" "),i("td",[t._v(t._s(s.name))]),t._v(" "),i("td",[t._v(t._s(s.phone))]),t._v(" "),i("td",[t._v(t._s(s.class))]),t._v(" "),i("td",[s.isOldStudent?i("span",[t._v("是")]):i("span",[t._v("否")])]),t._v(" "),i("td",[t._v(t._s(s.preSigndate))]),t._v(" "),i("td",{staticStyle:{"font-size":"6px",width:"20%"}},[t._v(t._s(s.address))])])}))])])]),t._v(" "),i("div",{staticClass:"no-result"},[i("hr"),t._v(" "),i("p",[t._v("查询时间："),i("span",[t._v(t._s(t._f("formatDate")(t.date)))])]),t._v(" "),i("img",{staticClass:"qrcode",attrs:{src:e("KXqr")}})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("#")]),this._v(" "),s("th",[this._v("名字")]),this._v(" "),s("th",[this._v("电话")]),this._v(" "),s("th",[this._v("报名课程")]),this._v(" "),s("th",[this._v("是否老学员")]),this._v(" "),s("th",[this._v("预报名时间")]),this._v(" "),s("th",[this._v("地址")])])])}]};var x=e("VU/8")(y,C,!1,function(t){e("7ZMz")},"data-v-61917b04",null).exports,S=[{path:"/",component:o.default},{path:"/add",component:l},{path:"/blog/:id",component:f},{path:"/about",component:d.default},{path:"/stu",component:b.default},{path:"/students",component:x}],w=e("YqKu"),k=e.n(w);i.a.config.productionTip=!1,i.a.use(n.a),i.a.use(a.a),i.a.use(k.a),i.a.directive("theme",{bind:function(t,s,e){"wide"==s.value?t.style.height="100%":"narrow"==s.value&&(t.style.maxWidth="600px"),"column"==s.arg&&(t.style.background="#ffffff",t.style.padding="10px")}}),i.a.filter("snippet",function(t){return t.slice(0,230)+"..."});var j=new a.a({routes:S});e("g9Iy"),e("kHun"),e("vDDV");new i.a({el:"#app",template:"<App/>",components:{App:g},router:j})},NXlg:function(t,s,e){t.exports=e.p+"static/img/shenmi.7227d1e.png"},"QIu/":function(t,s,e){t.exports=e.p+"static/img/menggu2.2381c01.png"},VLNX:function(t,s){},"g0O+":function(t,s,e){t.exports=e.p+"static/img/aldar.22b55fc.jpg"},g9Iy:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={name:"show-blogs",data:function(){return{blogs:[],search:"",btnTitle:"展开简介",isZhankai:!1,classes:[]}},methods:{showSummary:function(t){this.isZhankai=!this.isZhankai,this.isZhankai?this.btnTitle="收起简介":this.btnTitle="展开简介"}},created:function(){this.$http.get("./../static/posts.json").then(function(t){return console.log(t.json()),t.json()}).then(function(t){var s=[];console.log(t);for(var e in t)t[e].id=e,s.push(t[e]);this.blogs=s})},computed:{filteredBlogs:function(){var t=this;return this.blogs.filter(function(s){return s.title.match(t.search)})}},filters:{toUppercase:function(t){return t.toUpperCase()}},directives:{rainbow:{bind:function(t,s,e){t.style.color="#"+Math.random().toString(16).slice(2,8)}}}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"show-blogs"}},[t._m(0),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"panel panel-primary",staticStyle:{"margin-top":"20px"}},[t._m(1),t._v(" "),i("hr",{staticStyle:{"margin-top":"5px"}}),t._v(" "),i("div",{staticClass:"row",staticStyle:{padding:"0 20px"}},[t._m(2),t._v(" "),i("div",{staticClass:"col-sm-6 col-md-4"},[i("div",{staticClass:"thumbnail"},[i("img",{staticClass:"teacher",attrs:{src:e("FqFW"),alt:"..."}}),t._v(" "),i("div",{staticClass:"caption"},[i("h4",[t._v("蒙医基础理论学习技巧（1小时）")]),t._v(" "),i("p",[t._v("时间：2018.3.2")]),t._v(" "),i("p",[t._v("讲师：苏雅拉其其格老师")]),t._v(" "),i("p",[i("button",{staticClass:"btn btn-primary",on:{click:function(s){t.showSummary(t.teacher)}}},[t._v(t._s(t.btnTitle))])]),t.isZhankai?i("div",{attrs:{id:"qqg"}},[i("hr"),t._v(" "),i("p",[t._v("\n                    内蒙古奥塔奇蒙医教育“蒙医基础理论”王牌讲师。内蒙古民族大学硕士研究生毕业，现在工作于内蒙古中蒙医院。\n                  ")])]):t._e(),t._v(" "),i("p")])])]),t._v(" "),i("div",{staticClass:"col-sm-6 col-md-4"},[i("div",{staticClass:"thumbnail"},[i("img",{staticClass:"teacher",attrs:{src:e("g0O+"),alt:"..."}}),t._v(" "),i("div",{staticClass:"caption"},[i("h4",[t._v("蒙医内科学习技巧（1小时）")]),t._v(" "),i("p",[t._v("时间：2018.3.3")]),t._v(" "),i("p",[t._v("讲师：赛音阿拉德日老师")]),t._v(" "),i("p",[i("button",{staticClass:"btn btn-primary",on:{click:t.showSummary}},[t._v(t._s(t.btnTitle))])]),t._v(" "),t.isZhankai?i("div",{attrs:{id:"aldar"}},[i("hr"),t._v(" "),i("p",[t._v("\n                内蒙古奥塔奇蒙医教育“蒙医内科”王牌讲师，硕士研究生，主治医生。2012—2013年在包头市蒙医中医医院工作，2013年至今在呼和浩特市第一医院工作。曾在国家级、自治区级医学期刊发表过10余篇论文。获得2016年度草原文化节中医蒙医论文大赛三等奖。2017年在第二届中国-蒙古国博览会蒙医药论坛论文评选一等奖。曾完成内蒙古自治区教育厅创办的创新课题《心刺痛病分类与心电图变化的相关性研究》。\n              ")])]):t._e()])])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"jumbotron"},[s("img",{staticClass:"pandeng",attrs:{src:e("59zD")}}),this._v(" "),s("h1",[this._v("奥塔奇蒙医")]),this._v(" "),s("p",[this._v("内蒙古奥塔奇蒙医教育是全区唯一一家蒙医执业医师、执业助理医师资格考试培训机构。拥有全区最权威的师资团队。我们一切的努力只为您最后的考试通过。本教育以最优质的服务让您轻松学习➕提升自己➕拿到优异成绩。")]),this._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("a",{staticClass:"btn btn-primary btn-lg btn-diy",attrs:{href:"http://www.utaqi.cn/#/stu",role:"button"}},[this._v("报名情况查询")])]),this._v(" "),s("div",{staticStyle:{"text-align":"right"}},[s("img",{staticClass:"menggu",attrs:{src:e("QIu/")}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"panel-body panel-primary"},[s("h3",{staticStyle:{"text-align":"center"}},[this._v("免费直播讲座")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-sm-6 col-md-4"},[s("div",{staticClass:"thumbnail"},[s("img",{staticClass:"teacher",attrs:{src:e("NXlg"),alt:"..."}}),this._v(" "),s("div",{staticClass:"caption"},[s("h4",[this._v("蒙医技能考试历年真题分析（1小时）")]),this._v(" "),s("p",[this._v("时间：2018.3.1")]),this._v(" "),s("p",[this._v("讲师：历年考官")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("h5",{staticStyle:{"text-align":"center",padding:"0px","line-height":"2"}},[this._v("UTAQI蒙医医师资格考试培训"),s("br"),this._v("笔试网络精品课程安排")])]),this._v(" "),s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[this._v("课程")]),this._v(" "),s("th",[this._v("时长")]),this._v(" "),s("th",[this._v("时间")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("蒙医基础理论")]),this._v(" "),s("td",[this._v("24课时"),s("p")]),this._v(" "),s("td",[this._v("6月16~6月19"),s("p")])]),this._v(" "),s("tr",[s("td",[this._v("蒙医诊断")]),this._v(" "),s("td",[this._v("12课时"),s("p")]),this._v(" "),s("td",[this._v("6月20~6月21"),s("p")])]),this._v(" "),s("tr",[s("td",[this._v("蒙医诊断")]),this._v(" "),s("td",[this._v("12课时"),s("p")]),this._v(" "),s("td",[this._v("6月20~6月21"),s("p")])]),this._v(" "),s("tr",[s("td",[this._v("内科")]),this._v(" "),s("td",[this._v("30课时"),s("p")]),this._v(" "),s("td",[this._v("6月22~6月26"),s("p")])]),this._v(" "),s("tr",[s("td",[this._v("外科 & 骨科")]),this._v(" "),s("td",[this._v("12课时"),s("p")]),this._v(" "),s("td",[this._v("6月27~6月28"),s("p")])]),this._v(" "),s("tr",[s("td",[this._v("温病")]),this._v(" "),s("td",[this._v("12课时"),s("p")]),this._v(" "),s("td",[this._v("6月29~6月30"),s("p")])]),this._v(" "),s("tr",[s("td",[this._v("疗术")]),this._v(" "),s("td",[this._v("12课时")]),this._v(" "),s("td",[this._v("7月1~7月2")])]),this._v(" "),s("tr",[s("td",[this._v("妇科")]),this._v(" "),s("td",[this._v("6课时")]),this._v(" "),s("td",[this._v("7月3日")])]),this._v(" "),s("tr",[s("td",[this._v("儿科")]),this._v(" "),s("td",[this._v("6课时")]),this._v(" "),s("td",[this._v("7月4日")])]),this._v(" "),s("tr",[s("td",[this._v("方剂 & 蒙药")]),this._v(" "),s("td",[this._v("12课时")]),this._v(" "),s("td",[this._v("7月5~7月6")])]),this._v(" "),s("tr",[s("td",[this._v("西医诊断")]),this._v(" "),s("td",[this._v("12课时")]),this._v(" "),s("td",[this._v("7月7~7月8")])]),this._v(" "),s("tr",[s("td",[this._v("法律法规 & 传染病")]),this._v(" "),s("td",[this._v("6课时")]),this._v(" "),s("td",[this._v("7月9日")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row",staticStyle:{padding:"0"}},[s("div",{staticClass:"col-sm-6 col-md-3"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[this._v("网络课程优惠细则:")]),this._v(" "),s("div",{staticClass:"panel-body"},[s("ul",{staticStyle:{"list-style-type":"none","line-height":"2"}},[s("li",[this._v("①  5人团报每人优惠300元。")]),this._v(" "),s("li",[this._v("②  10人团报每人优惠500元。")]),this._v(" "),s("li",[this._v("③  介绍一名学员优惠200元。")]),this._v(" "),s("li",[this._v("④  老学员仅收1000元。")]),this._v(" "),s("br"),this._v(" "),s("p",{staticStyle:{color:"red"}},[this._v("注：①、②、④ 项不能同时使用。")])])])])]),this._v(" "),s("div",{staticClass:"col-sm-6 col-md-3"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[this._v("课程及学费：")]),this._v(" "),s("div",{staticClass:"panel-body"},[s("ul",{staticStyle:{"line-height":"2"}},[s("li",[this._v("单项技能保过班（2500元）")]),this._v(" "),s("li",[this._v("技能+笔试全程保过班（32000元）")]),this._v(" "),s("li",[this._v("笔试网络精品课程（3200元，不退款）")]),this._v(" "),s("li",[this._v("单项笔试协议班（28000元）")]),this._v(" "),s("li",[this._v("刷题班（2000元，不退款）")]),this._v(" "),s("p",{staticStyle:{color:"red"}},[this._v("注：所有保过班及协议班不过全额退款。")])])])])]),this._v(" "),s("div",{staticClass:"col-sm-6 col-md-3"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[this._v("乡村全科医生培训")]),this._v(" "),s("div",{staticClass:"panel-body"},[s("ul",{staticStyle:{"line-height":"2"}},[s("li",[this._v("保过班"),s("span",{staticStyle:{color:"crimson"}},[this._v("( 技能+笔试 )")]),this._v("11000元，过不了退12000元。")]),this._v(" "),s("li",[s("strong",[this._v("150课时网络课程＋集训11天")]),this._v("，集训地点：北京。")]),this._v(" "),s("li",[this._v("现在报名食宿费优惠一半。")]),this._v(" "),s("li",{staticStyle:{"list-style-type":"none"}},[this._v("( 正常情况下食宿费一天300元,现在只需150元。)")]),this._v(" "),s("li",[this._v("11天集训总共1650元食宿费。")]),this._v(" "),s("p",{staticStyle:{color:"red"}},[this._v("注：食宿费不在学费范围内。")])])])])]),this._v(" "),s("div",{staticClass:"col-sm-6 col-md-3"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[this._v("了解更多请联系:")]),this._v(" "),s("div",{staticClass:"panel-body",staticStyle:{"text-align":"center"}},[s("ul",{staticStyle:{"list-style-type":"none","line-height":"2","padding-left":"0"}},[s("li",[s("a",{attrs:{href:"tel:15248184142"}},[this._v("联系电话：152-4818-4142")])]),this._v(" "),s("li",[s("img",{staticClass:"qrcode",attrs:{src:e("hdDD")}})])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"panel panel-default",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"panel-body panel-heading"},[s("h3",{staticStyle:{"text-align":"center"}},[this._v("参考书推荐")])]),this._v(" "),s("div",{staticClass:"row",staticStyle:{padding:"10px 0 0 0"}},[s("div",{staticClass:"col-sm-6 col-md-6"},[s("div",{staticClass:"thumbnail",staticStyle:{border:"none"}},[s("img",{staticClass:"books",attrs:{src:e("td3O"),alt:"蒙医执业医师资格考试-技能"}}),this._v(" "),s("div",{staticClass:"caption",staticStyle:{"text-align":"center"}},[s("h5",[this._v("蒙医执业医师资格考试-技能参考书")]),this._v(" "),s("p",[this._v("定价：59.00元（包邮）")])])])]),this._v(" "),s("div",{staticClass:"col-sm-6 col-md-6"},[s("div",{staticClass:"thumbnail",staticStyle:{border:"none"}},[s("img",{staticClass:"books",attrs:{src:e("48Rx"),alt:"蒙医执业医师资格考试-笔试"}}),this._v(" "),s("div",{staticClass:"caption",staticStyle:{"text-align":"center"}},[s("h5",[this._v("蒙医执业医师资格考试-笔试参考书")]),this._v(" "),s("p",[this._v("定价：128.00元（包邮）")])])])])])])}]};var n=e("VU/8")(i,a,!1,function(t){e("Cqnn")},null,null);s.default=n.exports},hdDD:function(t,s,e){t.exports=e.p+"static/img/anar.50732df.png"},iATW:function(t,s){},jUrI:function(t,s){},kHun:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("h1",[this._v("关于我们")]),this._v(" "),s("article",[this._v("\n\t\t内蒙古奥塔奇蒙医教育是全区唯一一家蒙医执业助理医师资格考试培训良心企业，报名等于考过。2017年通过率达到67％。本教育励志2018年通过率为百分百！！！我们有全区最权威的师资团队。我们一切的努力只为您最后的考试通过。本教育以最优质的服务让您轻松学习➕提升自己➕拿到优异成绩。\n\t")])])}]};var a=e("VU/8")({name:"about-us"},i,!1,function(t){e("mihO")},"data-v-3a4dba48",null);s.default=a.exports},mihO:function(t,s){},td3O:function(t,s,e){t.exports=e.p+"static/img/shijian2.80ea3b8.png"},vDDV:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("BO1k"),a=e.n(i),n={name:"student",data:function(){return{students:[],student:{},phone:"",isHasResult:!1,isNOResult:!1}},methods:{getInfoWithPhone:function(t){if(""!=t){var s=!0,e=!1,i=void 0;try{for(var n,r=a()(this.students);!(s=(n=r.next()).done);s=!0){var l=n.value;if(l.phone==this.phone)return this.isHasResult=!0,this.student=l,void(this.isNOResult=!1);this.isNOResult=!0,this.isHasResult=!1}}catch(t){e=!0,i=t}finally{try{!s&&r.return&&r.return()}finally{if(e)throw i}}}else alert("请输入您的手机号")}},created:function(){this.$http.get("./../static/students.json").then(function(t){return t.json()}).then(function(t){this.students=t})}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content"},[i("h1",[t._v("报名情况查询")]),t._v(" "),i("hr",{staticClass:"titleHr"}),t._v(" "),i("div",{staticClass:"container"},[i("form",[i("div",{staticClass:"input-group"},[i("span",{staticClass:"input-group-addon",attrs:{id:"sizing-addon1"}},[t._v("📱 手机号")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",staticStyle:{"font-size":"18px"},attrs:{type:"text",placeholder:"请输入手机号","aria-describedby":"sizing-addon1",onkeyup:"value=value.replace(/[^\\d]/g,'')","ng-pattern":"/[^a-zA-Z]/",required:""},domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}})]),t._v(" "),i("button",{staticClass:"submitButton",on:{click:function(s){s.preventDefault(),t.getInfoWithPhone(t.phone)}}},[t._v("查询")])])]),t._v(" "),t.isHasResult?i("div",{staticClass:"result"},[i("hr"),t._v(" "),i("h3",[t._v("查询结果如下：")]),t._v(" "),i("ul",{staticClass:"list-group"},[i("li",{staticClass:"list-group-item"},[i("span",{staticStyle:{color:"#686868"}},[t._v("姓名：")]),t._v(" "),i("strong",[t._v(t._s(t.student.name))])]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("span",{staticStyle:{color:"#686868"}},[t._v("电话：")]),t._v(" "),i("strong",[t._v(t._s(t.student.phone))])]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("span",{staticStyle:{color:"#686868"}},[t._v("报名课程：")]),t._v(" "),i("strong",[t._v(t._s(t.student.class))])]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("span",{staticStyle:{color:"#686868"}},[t._v("是否老学员：")]),t._v(" "),t.student.isOldStudent?i("strong",[t._v("是")]):i("strong",[t._v("否")])]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("span",{staticStyle:{color:"#686868"}},[t._v("预报名时间：")]),t._v(" "),i("strong",[t._v(t._s(t.student.preSigndate))])]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("span",{staticStyle:{color:"#686868"}},[t._v("地址：")]),t._v(" "),i("strong",[t._v(t._s(t.student.address))])])])]):t._e(),t._v(" "),t.isNOResult?i("div",{staticClass:"no-result"},[i("hr"),t._v(" "),i("h3",[t._v("未查到您的报名信息")]),t._v(" "),t._m(0),t._v(" "),i("img",{staticClass:"qrcode",attrs:{src:e("hdDD")}})]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("已经报名未显示结果或新学员报名请联系："),s("a",{attrs:{href:"tel:15248184142"}},[this._v("15248184142")])])}]};var l=e("VU/8")(n,r,!1,function(t){e("VLNX")},"data-v-7c1049e4",null);s.default=l.exports}},["NHnr"]);
//# sourceMappingURL=app.0aafdde7f4f9a7c10369.js.map