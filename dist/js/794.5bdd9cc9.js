"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[794],{1426:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=function(){var e=this,t=e._self._c;return t("b-container",[t("b-row",{staticClass:"text-center"},[t("b-col",{staticClass:"d-flex justify-content-center align-items-center"},[t("WelcomUser",{attrs:{welcomeMessage:"Welcome to Your Favorite Recipes!",mainText:"Here, you can easily revisit all the delicious recipes you've saved. Whether you want to recreate a classic dish or\n        experiment with something new, your favorites are just a click away.\n        Enjoy the convenience of having all your go-to recipes in one place,\n        making meal planning and cooking a breeze. Dive back into your culinary creations and let your taste buds explore!"}})],1),t("b-col",[t("RecipePreviewList",{attrs:{title:"Your Favorites:"}})],1)],1)],1)},s=[],i=(n(7658),n(4266)),a=n(2638);const r={components:{RecipePreviewList:i.Z,WelcomUser:a.Z},data:function(){return{}},computed:{isLoggedIn:function(){return!!this.$root.store.username}},methods:{showLoginRequiredToast:function(){this.$root.toast("Access Denied","You must be logged in to access the favorites page.","warning")}},mounted:function(){this.isLoggedIn||(this.showLoginRequiredToast(),this.$router.push("/login"))}},c=r;var u=n(1001),l=(0,u.Z)(c,o,s,!1,null,"60ed0f2a",null);const h=l.exports}}]);
//# sourceMappingURL=794.5bdd9cc9.js.map