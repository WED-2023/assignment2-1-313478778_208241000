(()=>{"use strict";var e={7522:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var n=r(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("NavBar"),t("div",{staticClass:"content"},[t("router-view")],1)],1)},o=[],i=(r(7658),function(){var e=this,t=e._self._c;return t("b-navbar",{staticClass:"custom-navbar",attrs:{toggleable:"lg",type:"light",variant:"primary",fixed:"top",small:""}},[t("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"main"}}},[t("b-img",{staticClass:"navbar-logo",attrs:{src:r(9957),alt:"Chef Logo"}})],1),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{staticClass:"nav-link",attrs:{to:{name:"main"}}},[t("b",[e._v("Home")])]),t("b-nav-item",{staticClass:"nav-link",attrs:{to:{name:"search"}}},[t("b",[e._v("Search")])]),t("b-nav-item",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[t("b",[e._v("About")])])],1),e.$root.store.username?t("b-navbar-nav",[t("b-nav-item-dropdown",{staticClass:"nav-link",attrs:{html:"<b>Personal</b>"}},[t("b-dropdown-item",{staticClass:"nav-link",attrs:{to:{name:"favorites"}}},[t("b",[e._v("Favorites")])]),t("b-dropdown-item",{staticClass:"nav-link",attrs:{to:{name:"private"}}},[t("b",[e._v("Private")])]),t("b-dropdown-item",{staticClass:"nav-link",attrs:{to:{name:"family"}}},[t("b",[e._v("Family")])]),t("b-dropdown-item",{staticClass:"nav-link",on:{click:e.showAddRecipeModal}},[t("b",[e._v("Add Recipe")])])],1)],1):e._e(),t("b-navbar-nav",{staticClass:"ml-auto"},[e.$root.store.username?t("b-navbar-nav",[t("b-nav-item",{staticClass:"nav-link",on:{click:e.Logout}},[t("b",[e._v("Logout")])])],1):t("b-nav-item-dropdown",{staticClass:"nav-link",attrs:{html:"<b>Hello guest</b>"}},[t("b-dropdown-item",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[t("b",[e._v("Register")])]),t("b-dropdown-item",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[t("b",[e._v("Login")])])],1)],1)],1),e.isAddRecipeModalVisible?t("AddRecipeModal",{on:{close:function(t){e.isAddRecipeModalVisible=!1}}}):e._e()],1)}),s=[],l=r(124),u=r(8534),c=function(){var e=this,t=e._self._c;return t("div",[t("b-overlay",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{background:"rgba(0, 0, 0, 0.6)",position:"fixed",top:"0",left:"0",right:"0",bottom:"0","z-index":"1050"},attrs:{show:e.isVisible},on:{click:e.closeModal}},[t("b-card",{staticClass:"add-recipe-popup",on:{click:function(e){e.stopPropagation()}}},[t("b-button",{staticClass:"close-button",attrs:{variant:"link"},on:{click:e.closeModal}},[e._v(" close ")]),t("b-card-title",[e._v("Add New Recipe")]),t("b-card-body",[t("b-toast",{attrs:{id:"recipe-toast",title:e.toastTitle,visible:e.toastVisible,variant:e.toastVariant,"auto-hide-delay":"3000",solid:"",toaster:"b-toaster-top-center"},on:{hidden:function(t){e.toastVisible=!1}}},[e._v(" "+e._s(e.toastMessage)+" ")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.createRecipe.apply(null,arguments)},reset:function(t){return t.preventDefault(),e.onReset.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:"Recipe Name:","label-for":"title"}},[t("b-form-input",{attrs:{id:"title",type:"text",state:e.validateState("title"),placeholder:"Enter recipe name"},model:{value:e.$v.form.title.$model,callback:function(t){e.$set(e.$v.form.title,"$model",t)},expression:"$v.form.title.$model"}})],1),t("b-form-group",{attrs:{label:"Image:","label-for":"image"}},[t("b-form-input",{attrs:{id:"image",type:"text",state:e.validateState("image"),placeholder:"Image URL"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}}),t("b-form-invalid-feedback",{attrs:{state:e.validateState("image")}},[e._v(" Image is required. ")])],1),t("b-form-group",{attrs:{label:"Preparation Time:","label-for":"readyInMinutes"}},[t("b-form-input",{attrs:{id:"readyInMinutes",type:"text",state:e.validateState("readyInMinutes"),placeholder:"Enter preparation time in minutes"},model:{value:e.$v.form.readyInMinutes.$model,callback:function(t){e.$set(e.$v.form.readyInMinutes,"$model",t)},expression:"$v.form.readyInMinutes.$model"}})],1),t("b-form-group",{attrs:{labal:"Prefreances"}},[t("b-form-checkbox",{attrs:{switch:""},model:{value:e.$v.form.glutenFree.$model,callback:function(t){e.$set(e.$v.form.glutenFree,"$model",t)},expression:"$v.form.glutenFree.$model"}},[e._v(" Gluten free ")]),t("b-form-checkbox",{attrs:{switch:""},model:{value:e.$v.form.vegetarian.$model,callback:function(t){e.$set(e.$v.form.vegetarian,"$model",t)},expression:"$v.form.vegetarian.$model"}},[e._v(" Vegetarian ")]),t("b-form-checkbox",{attrs:{switch:""},model:{value:e.$v.form.vegan.$model,callback:function(t){e.$set(e.$v.form.vegan,"$model",t)},expression:"$v.form.vegan.$model"}},[e._v(" Vegan ")])],1),t("b-form-group",{attrs:{label:"Ingredients:","label-for":"ingredients"}},[t("b-form-textarea",{attrs:{id:"ingredients",state:e.validateState("ingredients"),placeholder:"Enter ingredients separated by ' , ' . For example: chicken - 1 kg, beer - 1 cup.",rows:"2"},model:{value:e.$v.form.ingredients.$model,callback:function(t){e.$set(e.$v.form.ingredients,"$model",t)},expression:"$v.form.ingredients.$model"}})],1),t("b-form-group",{attrs:{label:"Preparation Instructions:","label-for":"prepInstructions"}},[t("b-form-textarea",{attrs:{id:"prepInstructions",state:e.validateState("prepInstructions"),placeholder:"Enter instructions separated by ' , ' . For example: Preheat oven to 350°F, Mix dry ingredients.",rows:"2"},model:{value:e.$v.form.prepInstructions.$model,callback:function(t){e.$set(e.$v.form.prepInstructions,"$model",t)},expression:"$v.form.prepInstructions.$model"}})],1),t("b-form-group",{attrs:{label:"Number of Dishes:","label-for":"numberOfDishes"}},[t("b-form-input",{attrs:{id:"numberOfDishes",type:"text",state:e.validateState("numberOfDishes"),placeholder:"Enter number of servings"},model:{value:e.$v.form.numberOfDishes.$model,callback:function(t){e.$set(e.$v.form.numberOfDishes,"$model",t)},expression:"$v.form.numberOfDishes.$model"}})],1),t("div",{staticClass:"d-flex justify-content-end"},[t("b-button",{staticClass:"btn-primary",attrs:{type:"reset",pill:""}},[e._v("Reset")]),t("b-button",{staticClass:"ml-3 w-70",attrs:{variant:"primary",vartype:"submit",pill:""}},[e._v("Create Recipe")])],1)],1)],1)],1)],1)],1)},d=[],m=(r(4916),r(7601),r(379));const f={props:{isVisible:{type:Boolean,default:!1}},data:function(){return{form:{image:"",title:"",readyInMinutes:"",glutenFree:!1,vegan:!1,vegetarian:!1,ingredients:"",prepInstructions:"",numberOfDishes:""},toastTitle:"",toastMessage:"",toastVariant:"success",toastVisible:!1,validated:!1}},validations:{form:{image:{required:m.C1},title:{required:m.C1},readyInMinutes:{required:m.C1,digit:function(e){return e&&/\d/.test(e)}},glutenFree:{required:m.C1},vegan:{required:m.C1},vegetarian:{required:m.C1},ingredients:{required:m.C1},prepInstructions:{required:m.C1},numberOfDishes:{required:m.C1,digit:function(e){return e&&/\d/.test(e)}}}},methods:{createRecipe:function(){var e=this;return(0,u.Z)((0,l.Z)().mark((function t(){return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$v.form.$touch(),!e.$v.form.$anyError){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e.axios.post("".concat(e.$root.store.server_domain,"/users/my_recepies"),{image:e.form.image,title:e.form.title,readyInMinutes:e.form.readyInMinutes,glutenFree:e.form.glutenFree,vegan:e.form.vegan,vegetarian:e.form.vegetarian,ingredients:e.form.ingredients,instructions:e.form.prepInstructions,numberOfDishes:e.form.numberOfDishes},{withCredentials:!0});case 6:t.sent,e.toastTitle="Success",e.toastMessage='Recipe "'.concat(e.form.title,'" created successfully!'),e.toastVariant="success",e.toastVisible=!0,e.onReset(),e.$emit("close"),t.next=22;break;case 15:t.prev=15,t.t0=t["catch"](3),console.log(t.t0.response),e.toastTitle="Error",e.toastMessage=t.t0.response?t.t0.response.data:"Failed to create recipe",e.toastVariant="danger",e.toastVisible=!0;case 22:case"end":return t.stop()}}),t,null,[[3,15]])})))()},onReset:function(){var e=this;this.form={image:"",title:"",readyInMinutes:"",glutenFree:!1,vegan:!1,vegetarian:!1,ingredients:"",prepInstructions:"",numberOfDishes:""},this.$nextTick((function(){e.$v.$reset()}))},closeModal:function(){this.$emit("close")},validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null}}},p=f;var v=r(1001),b=(0,v.Z)(p,c,d,!1,null,"5789feae",null);const g=b.exports,h={components:{AddRecipeModal:g},data:function(){return{isAddRecipeModalVisible:!1}},methods:{showAddRecipeModal:function(){this.isAddRecipeModalVisible=!0},Logout:function(){var e=this;return(0,u.Z)((0,l.Z)().mark((function t(){return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$root.store.logout();case 3:if(e.$root.toast("Logout","User logged out successfully","success"),"/"===e.$route.path){t.next=7;break}return t.next=7,e.$router.push("/");case 7:t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error("Error during logout:",t.t0),e.$root.toast("Logout Error","There was an issue logging out","error");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},$=h;var y=(0,v.Z)($,i,s,!1,null,"89eabb58",null);const k=y.exports,_={name:"App",components:{NavBar:k},methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},x=_;var C=(0,v.Z)(x,a,o,!1,null,null,null);const w=C.exports;var O=r(1939),M=r.n(O),I=r(9669),S=r.n(I),P=r(6152),A=(r(8783),r(3948),[{path:"/",name:"main",component:function(){return Promise.all([r.e(200),r.e(128)]).then(r.bind(r,9487))}},{path:"/register",name:"register",component:function(){return r.e(527).then(r.bind(r,527))}},{path:"/login",name:"login",component:function(){return r.e(839).then(r.bind(r,839))}},{path:"/search",name:"search",component:function(){return r.e(202).then(r.bind(r,3202))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return Promise.all([r.e(200),r.e(308)]).then(r.bind(r,6985))}},{path:"/about",name:"about",component:function(){return r.e(987).then(r.bind(r,486))}},{path:"/favorites",name:"favorites",component:function(){return r.e(305).then(r.bind(r,2305))}},{path:"/family",name:"family",component:function(){return r.e(65).then(r.bind(r,65))}},{path:"/private",name:"private",component:function(){return r.e(965).then(r.bind(r,4965))}},{path:"*",name:"notFound",component:function(){return r.e(80).then(r.bind(r,4080))}}]);const E=A;var j=r(8345),R=r(8620),F=(r(7024),r(9301)),T=r(7563),D=r(7419),V=r(1869),L=r(295),N=r(4500),q=r(794),Z=r(4063),B=r(4167),H=r(7772),U=r(959),z=r(2749),G=r(7941),K=r(4869),Y=r(7192),J=r(5808);n["default"].use(j.ZP);var Q=new j.ZP({routes:E});[F.E,T.w6,D.g,V.SY,L.xL,N.u3,q.v5,Z.F,B.m$,H.A6,U.H,z._s,G.A7,K.T,P.s,Y.F,J.Rt].forEach((function(e){return n["default"].use(e)})),n["default"].use(R.ZP),S().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),S().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(M(),S()),n["default"].config.productionTip=!1;var W={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};new n["default"]({router:Q,data:function(){return{store:W}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(w)}}).$mount("#app")},9957:(e,t,r)=>{e.exports=r.p+"img/main_chef_logo.508e5dce.png"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,o]=e[c],s=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var o=Object.create(null);r.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,r.d(o,i),o}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{65:"d63d4c81",80:"08b6d1b6",128:"3aaa9eef",200:"b9ca563d",202:"7dc294e3",305:"4930296a",308:"c626b271",471:"b41581f5",527:"f0362c4e",839:"598d6acf",965:"43f8984c",987:"6fc65473"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{65:"1a46fc15",128:"81f76658",202:"0dbbdd05",308:"c81a97f4",527:"86e8ec35",839:"4f33fa76",987:"8d1ada22"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";r.l=(n,a,o,i)=>{if(e[n])e[n].push(a);else{var s,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[a];var m=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var a=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=r=>{if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode&&o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=i,o.href=t,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=n=>new Promise(((a,o)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return a();e(n,s,null,a,o)})),a={143:0};r.f.miniCss=(e,t)=>{var r={65:1,128:1,202:1,308:1,527:1,839:1,987:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=o);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,s,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var c=l(r)}for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(7522)));n=r.O(n)})();
//# sourceMappingURL=app.46da7e1f.js.map