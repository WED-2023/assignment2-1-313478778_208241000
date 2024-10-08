(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[854],{9417:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container my-5"},[e.recipe?t("div",{staticClass:"recipe-container"},[t("recipe-preview",{attrs:{recipe:e.recipe,isFullView:!0}}),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"d-flex flex-wrap justify-content-between"},[t("div",{staticClass:"col-md-6 mb-4"},[t("b-container",{staticClass:"recipe-fullview-container"},[t("h4",[t("strong",[e._v("Ingredients:")])]),t("ul",{staticClass:"indented-list"},e._l(e.recipe.extendedIngredients,(function(r,n){return t("li",{key:n,staticClass:"mb-2"},[t("i",{staticClass:"fas fa-check-circle text-success"}),e._v(" "+e._s(r.original)+" ")])})),0)])],1),t("div",{staticClass:"col-md-6 mb-4"},[t("b-container",{staticClass:"recipe-fullview-container"},[t("h4",[t("strong",[e._v("Instructions:")])]),t("ol",{staticClass:"indented-list"},e._l(e.recipe._instructions,(function(r,n){return t("li",{key:n,staticClass:"mb-2"},[e._v(" "+e._s(r.step)+" ")])})),0)])],1)])])],1):e._e()])},i=[],s=r(3144),c=r(124),a=r(8534),o=(r(8309),r(1249),r(3210),r(6535),r(9244),r(1539),r(2222),r(8862),r(4307)),u=r(9206);const p={components:{RecipePreview:o.Z},data:function(){return{recipe:null}},created:function(){var e=this;return(0,a.Z)((0,c.Z)().mark((function t(){var r,n;return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=sessionStorage.getItem("currentRecipe"),!r){t.next=7;break}n=JSON.parse(r),e.processRecipe(n),t.next=14;break;case 7:if(!e.isPrivateRecipe()){t.next=12;break}return t.next=10,e.fetchPrivateRecipe(e.$route.params.recipeId);case 10:t.next=14;break;case 12:return t.next=14,e.fetchPublicRecipe(e.$route.params.recipeId);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},methods:{isPrivateRecipe:function(){return"privateRecipe"===this.$route.name},fetchPrivateRecipe:function(e){var t=this;return(0,a.Z)((0,c.Z)().mark((function e(){var r;return(0,c.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("".concat(t.$root.store.server_domain,"/user/PrivateRecipes/"),{withCredentials:!0});case 3:r=e.sent,t.processRecipe(r.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error fetching private recipe:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchPublicRecipe:function(e){var t=this;return(0,a.Z)((0,c.Z)().mark((function r(){var n;return(0,c.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,u.i)(e);case 2:n=r.sent,t.processRecipe(n.data.recipe);case 4:case"end":return r.stop()}}),r)})))()},processRecipe:function(e){var t=e.instructions&&"string"===typeof e.instructions,r=[],n=[];t?(r=e.instructions.split(",").map((function(e){return{step:e.trim()}})),n=e.ingredients.split(",").map((function(e){return{original:e.trim()}}))):(r=e.analyzedInstructions.length?e.analyzedInstructions.flatMap((function(e){return e.steps.map((function(t){return{step:"".concat(e.name?e.name+": ":"").concat(t.step)}}))})):[{step:"No instructions available."}],n=e.extendedIngredients),this.recipe=(0,s.Z)((0,s.Z)({},e),{},{_instructions:r,extendedIngredients:n}),sessionStorage.setItem("currentRecipe",JSON.stringify(this.recipe))}}},l=p;var f=r(1001),v=(0,f.Z)(l,n,i,!1,null,"b1d05df8",null);const d=v.exports},8709:(e,t,r)=>{"use strict";var n=r(9670),i=r(2140),s=TypeError;e.exports=function(e){if(n(this),"string"===e||"default"===e)e="string";else if("number"!==e)throw s("Incorrect hint");return i(this,e)}},6790:(e,t,r)=>{"use strict";var n=r(3157),i=r(6244),s=r(7207),c=r(9974),a=function(e,t,r,o,u,p,l,f){var v,d,h=u,b=0,g=!!l&&c(l,f);while(b<o)b in r&&(v=g?g(r[b],b,t):r[b],p>0&&n(v)?(d=i(v),h=a(e,t,v,d,h,p-1)-1):(s(h+1),e[h]=v),h++),b++;return h};e.exports=a},2222:(e,t,r)=>{"use strict";var n=r(2109),i=r(7293),s=r(3157),c=r(111),a=r(7908),o=r(6244),u=r(7207),p=r(6135),l=r(5417),f=r(1194),v=r(5112),d=r(7392),h=v("isConcatSpreadable"),b=d>=51||!i((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=function(e){if(!c(e))return!1;var t=e[h];return void 0!==t?!!t:s(e)},m=!b||!f("concat");n({target:"Array",proto:!0,arity:1,forced:m},{concat:function(e){var t,r,n,i,s,c=a(this),f=l(c,0),v=0;for(t=-1,n=arguments.length;t<n;t++)if(s=-1===t?c:arguments[t],g(s))for(i=o(s),u(v+i),r=0;r<i;r++,v++)r in s&&p(f,v,s[r]);else u(v+1),p(f,v++,s);return f.length=v,f}})},7327:(e,t,r)=>{"use strict";var n=r(2109),i=r(2092).filter,s=r(1194),c=s("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},6535:(e,t,r)=>{"use strict";var n=r(2109),i=r(6790),s=r(9662),c=r(7908),a=r(6244),o=r(5417);n({target:"Array",proto:!0},{flatMap:function(e){var t,r=c(this),n=a(r);return s(e),t=o(r,0),t.length=i(t,r,r,n,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},9244:(e,t,r)=>{var n=r(1223);n("flatMap")},6078:(e,t,r)=>{var n=r(2597),i=r(8052),s=r(8709),c=r(5112),a=c("toPrimitive"),o=Date.prototype;n(o,a)||i(o,a,s)},3321:(e,t,r)=>{var n=r(2109),i=r(9781),s=r(6048).f;n({target:"Object",stat:!0,forced:Object.defineProperties!==s,sham:!i},{defineProperties:s})},5003:(e,t,r)=>{var n=r(2109),i=r(7293),s=r(5656),c=r(1236).f,a=r(9781),o=!a||i((function(){c(1)}));n({target:"Object",stat:!0,forced:o,sham:!a},{getOwnPropertyDescriptor:function(e,t){return c(s(e),t)}})},9337:(e,t,r)=>{var n=r(2109),i=r(9781),s=r(3887),c=r(5656),a=r(1236),o=r(6135);n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,r,n=c(e),i=a.f,u=s(n),p={},l=0;while(u.length>l)r=i(n,t=u[l++]),void 0!==r&&o(p,t,r);return p}})},8563:(e,t,r)=>{var n=r(2109),i=r(7908),s=r(1956),c=r(7293),a=c((function(){s(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(e){return s(i(e))}})},6649:(e,t,r)=>{var n=r(6800),i=r(6532);n("toPrimitive"),i()},3144:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(8563),r(2526),r(7327),r(1539),r(5003),r(7658),r(9554),r(4747),r(9337),r(3321),r(9070);var n=r(3336);r(6649),r(6078),r(1817),r(1703),r(6647),r(9653);function i(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==(0,n.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function s(e){var t=i(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}function c(e,t,r){return t=s(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=854.50d6bfd7.js.map