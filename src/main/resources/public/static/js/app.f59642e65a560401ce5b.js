webpackJsonp([1],{"2mPc":function(e,t){},ILB6:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(e){a("nF9L")},null,null).exports,o=a("/ocq"),i=a("mtWM"),u=a.n(i),l=a("mvHQ"),m=a.n(l),c=a("Zrlr"),d=a.n(c),v=a("wxAW"),h=a.n(v),p="http://localhost:8081",f={URL:p,API_USER:"http://localhost:8081/api/user/",API_CHAT:"http://localhost:8081/api/chat",API_REGISTRATION:"http://localhost:8081/api/registration",API_AUTH:"http://localhost:8081/api/auth",API_USER_ALL:"http://localhost:8081/api/user/all"},g=new(function(){function e(){d()(this,e)}return h()(e,[{key:"login",value:function(e){return u.a.post(f.API_AUTH,{username:e.username,password:e.password}).then(function(e){return e.data.token&&(localStorage.setItem("userAuth",m()(e.data)),localStorage.setItem("username",e.data.username)),e.data})}},{key:"logout",value:function(){localStorage.removeItem("userAuth"),localStorage.removeItem("username")}},{key:"userName",value:function(){return localStorage.getItem("username")}}]),e}()),_={name:"Main",data:function(){return{clientLogged:!1,form:{username:"",password:""}}},methods:{isUserLogged:function(){g.userName();username?this.clientLogged=!0:this.$router.push({name:"Login"})}},created:function(){this.isUserLogged()}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h2",[e._v("S kým budeme žvanit?")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],attrs:{type:"text",id:"username",placeholder:"Jak na tebe hulákaj"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}})]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",id:"password",placeholder:"Tady napiš heslo"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),e._v(" "),a("button",[e._v("Tak hurá do kecání")])]),e._v(" "),a("router-link",{attrs:{to:{name:"Registration"}}},[e._v("Když nevíš klikni sem")])],1)},staticRenderFns:[]};var N=a("VU/8")(_,U,!1,function(e){a("PzTj")},"data-v-63d6ff80",null).exports,w={name:"Registration",data:function(){return{form:{username:"",password:""}}},methods:{submitRegistraion:function(){var e=this;u.a.post(f.API_REGISTRATION,this.form).then(function(t){200===t.status&&e.$router.push({name:"Main"})})}}},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"registration"},[a("h2",[e._v("Nějaká registrace")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.submitRegistraion(t)}}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],attrs:{type:"text",id:"username",placeholder:"Jak na tebe hulákaj"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}})]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",id:"password",placeholder:"Doplň Heslo nebo 123"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),e._v(" "),a("button",[e._v("Upiš se!")])]),e._v(" "),a("router-link",{attrs:{to:{name:"Main"}}},[e._v("Ale tady jsem už byl.")])],1)},staticRenderFns:[]};var k=a("VU/8")(w,L,!1,function(e){a("ILB6")},"data-v-37d82530",null).exports;function C(){var e=JSON.parse(localStorage.getItem("userAuth"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var A={name:"UserSelector",data:function(){return{toUserName:"",userSelectorText:"S kým budeme žvanit",userList:[]}},methods:{toUserNameChanged:function(e){var t=this;e&&u.a.get(f.API_USER+"/"+e.target.value,{headers:C()}).then(function(e){200===e.status&&t.$emit("changed",e.data.username)}).catch(function(e){404===e.response.status&&(t.toUserName="",t.userSelectorText="Nikdo takový neexistuje ! Zkus znovu.")})},loadUserList:function(){var e=this;u.a.get(f.API_USER_ALL,{headers:C()}).then(function(t){200===t.status&&(e.userList=e.filterLoggedUsername(t.data))})},toUserNamePicked:function(e){e&&this.$emit("changed",e)},filterLoggedUsername:function(e){var t=g.userName();return t?e.filter(function(e){return e.username!==t}):e}},mounted:function(){this.loadUserList()}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userSelector"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.toUserName,expression:"toUserName"}],attrs:{type:"text",placeholder:e.userSelectorText},domProps:{value:e.toUserName},on:{change:e.toUserNameChanged,input:function(t){t.target.composing||(e.toUserName=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"userList"},[a("h3",[e._v("Seznam Žvanilů")]),e._v(" "),e._l(e.userList,function(t){return a("a",{key:t.username,attrs:{href:""},on:{click:function(a){return a.preventDefault(),e.toUserNamePicked(t.username)}}},[e._v(e._s(t.username))])})],2)])},staticRenderFns:[]};var x=a("VU/8")(A,P,!1,function(e){a("OEKj")},"data-v-3830b430",null).exports,y={name:"Chat",components:{UserSelector:x},data:function(){return{toUserName:null,chatList:[],newMessage:""}},methods:{toUserNameFilled:function(e){this.toUserName=e,console.log(e),this.loadChatList(),this.setPeriodicLoad()},setPeriodicLoad:function(){var e=this;this.interval=setInterval(function(){return e.loadChatList()},1e3)},loadChatList:function(){var e=this;u.a.get(f.API_CHAT+"?withUsername="+this.toUserName,{headers:C()}).then(function(t){200===t.status&&(e.chatList=t.data)})},sendMessage:function(){var e=this;if(this.toUserName&&this.newMessage){var t={toUserName:this.toUserName,message:this.newMessage};u.a.post(f.API_CHAT,t,{headers:C()}).then(function(t){200===t.status&&(console.log("sended"),e.newMessage="",loadChatList())})}}}},M={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chat"},[null!=e.toUserName?a("h2",[e._v("Žvanění s "+e._s(e.toUserName))]):a("h2",[e._v("Žvanění")]),e._v(" "),null==e.toUserName?a("UserSelector",{on:{changed:e.toUserNameFilled}}):e._e(),e._v(" "),e.chatList&&e.chatList.length?a("div",{staticClass:"chatlist"},e._l(e.chatList,function(t,s){return a("div",{key:"message-"+s},[t.userName==e.toUserName?a("span",{staticClass:"right"},[e._v(e._s(t.userName)+": "+e._s(t.message))]):a("span",{staticClass:"left"},[e._v(e._s(t.userName)+" : "+e._s(t.message))])])}),0):e._e(),e._v(" "),null!=e.toUserName?a("div",{on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[a("form",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],attrs:{type:"text",placeholder:""},domProps:{value:e.newMessage},on:{input:function(t){t.target.composing||(e.newMessage=t.target.value)}}}),e._v(" "),a("button",[e._v("Odeslat žvanění")])])]):e._e()],1)},staticRenderFns:[]};var I=a("VU/8")(y,M,!1,function(e){a("2mPc")},"data-v-0642ff7d",null).exports,S={name:"Chat",components:{UserSelector:x},data:function(){return{toUserName:null,chatList:[],newMessage:""}},methods:{toUserNameFilled:function(e){this.toUserName=e,console.log(e),this.loadChatList(),this.setPeriodicLoad()},setPeriodicLoad:function(){var e=this;this.interval=setInterval(function(){return e.loadChatList()},1e3)},loadChatList:function(){var e=this;u.a.get(f.API_CHAT+"?withUsername="+this.toUserName,{headers:C()}).then(function(t){200===t.status&&(e.chatList=t.data)})},sendMessage:function(){var e=this;if(this.toUserName&&this.newMessage){var t={toUserName:this.toUserName,message:this.newMessage};u.a.post(f.API_CHAT,t,{headers:C()}).then(function(t){200===t.status&&(console.log("sended"),e.newMessage="",loadChatList())})}}}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chat"},[null!=e.toUserName?a("h2",[e._v("Žvanění s "+e._s(e.toUserName))]):a("h2",[e._v("Žvanění")]),e._v(" "),null==e.toUserName?a("UserSelector",{on:{changed:e.toUserNameFilled}}):e._e(),e._v(" "),e.chatList&&e.chatList.length?a("div",{staticClass:"chatlist"},e._l(e.chatList,function(t,s){return a("div",{key:"message-"+s},[t.userName==e.toUserName?a("span",{staticClass:"right"},[e._v(e._s(t.userName)+": "+e._s(t.message))]):a("span",{staticClass:"left"},[e._v(e._s(t.userName)+" : "+e._s(t.message))])])}),0):e._e(),e._v(" "),null!=e.toUserName?a("div",{on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[a("form",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],attrs:{type:"text",placeholder:""},domProps:{value:e.newMessage},on:{input:function(t){t.target.composing||(e.newMessage=t.target.value)}}}),e._v(" "),a("button",[e._v("Odeslat žvanění")])])]):e._e()],1)},staticRenderFns:[]};var b=a("VU/8")(S,R,!1,function(e){a("nBCR")},"data-v-d662d388",null).exports;s.a.use(o.a);var T=new o.a({routes:[{path:"/",name:"Main",component:N},{path:"/registration",name:"Registration",component:k},{path:"/chat",name:"Chat",component:I},{path:"/login",name:"Login",component:b}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:T,components:{App:r},template:"<App/>"})},OEKj:function(e,t){},PzTj:function(e,t){},nBCR:function(e,t){},nF9L:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f59642e65a560401ce5b.js.map