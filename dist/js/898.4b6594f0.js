"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[898],{7998:(r,t,e)=>{e.d(t,{Z:()=>c});var s=function(){var r=this,t=r._self._c;return t("b-card",{staticClass:"custom-card"},[t("h1",{staticClass:"title mb-4"},[r._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),r.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"4",label:"Username:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",type:"text",state:r.validateState("username")},model:{value:r.$v.form.username.$model,callback:function(t){r.$set(r.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[r._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"4",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"password",type:"password",state:r.validateState("password")},model:{value:r.$v.form.password.$model,callback:function(t){r.$set(r.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[r._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px"},attrs:{disabled:r.isSubmitting,type:"submit",variant:"primary"}},[r._v(" Login ")]),t("div",{staticClass:"mt-4"},[r._v(" Do not have an account yet? "),t("span",{staticClass:"register-prompt",on:{click:r.handleToggleForm}},[r._v("Register here ")])])],1),r.form.submitError?t("b-alert",{staticClass:"mt-4",attrs:{variant:"warning",dismissible:"",show:""}},[r._v(" Login failed: "+r._s(r.form.submitError)+" ")]):r._e()],1)},o=[],a=e(124),n=e(8534),i=(e(7658),e(8309),e(1539),e(379));const u={name:"LoginForm",props:{toggleForm:{type:Function}},data:function(){return{form:{username:"",password:"",submitError:void 0},isSubmitting:!1}},validations:{form:{username:{required:i.C1},password:{required:i.C1}}},methods:{validateState:function(r){var t=this.$v.form[r],e=t.$dirty,s=t.$error;return e?!s:null},Login:function(){var r=this;return(0,n.Z)((0,a.Z)().mark((function t(){var e,s,o;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.axios.post("".concat(r.$root.store.server_domain,"/auth/login"),{username:r.form.username,password:r.form.password},{withCredentials:!0});case 3:e=t.sent,e.data.success?(r.$root.store.login(r.form.username),r.$router.push("/")["catch"]((function(r){"NavigationDuplicated"!==r.name&&console.error(r)}))):r.form.submitError=e.data.message||"Login failed",t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),r.form.submitError=(null===(s=t.t0.response)||void 0===s||null===(o=s.data)||void 0===o?void 0:o.message)||"An error occurred during login. Please try again.";case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onLogin:function(){var r=this;this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||(this.isSubmitting=!0,this.Login()["finally"]((function(){r.isSubmitting=!1})))},handleToggleForm:function(){var r=this.$route.path;"/"===r?this.toggleForm():"/login"===r&&this.$router.push("/register")}}},l=u;var m=e(1001),d=(0,m.Z)(l,s,o,!1,null,"f2857190",null);const c=d.exports},4898:(r,t,e)=>{e.r(t),e.d(t,{default:()=>m});var s=function(){var r=this,t=r._self._c;return t("LoginForm")},o=[],a=e(7998);const n={components:{LoginForm:a.Z},methods:{}},i=n;var u=e(1001),l=(0,u.Z)(i,s,o,!1,null,"2aa1e620",null);const m=l.exports}}]);
//# sourceMappingURL=898.4b6594f0.js.map