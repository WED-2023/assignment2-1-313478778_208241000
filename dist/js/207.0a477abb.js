(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[207],{6207:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"family-container"},[t("h1",{staticClass:"family-title"},[e._v("Family Recipes")]),t("p",{staticClass:"family-description"},[e._v(" Explore cherished family recipes from Itay's and Amit's family, perfect for special occasions and holidays. ")]),t("div",{staticClass:"recipe-gallery"},e._l(e.familyRecipes,(function(r,i){return t("div",{key:i,staticClass:"recipe-card",on:{click:function(t){return e.showRecipeDetails(i)}}},[t("img",{staticClass:"recipe-image",attrs:{src:r.image,alt:r.title}}),t("h2",[e._v(e._s(r.title))]),t("p",[e._v(e._s(r.madeBy)+" | "+e._s(r.occasion))])])})),0),null!==e.selectedRecipe?t("div",{staticClass:"modal-overlay",on:{click:e.closeRecipeDetails}},[t("div",{staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[t("div",{staticClass:"modal-header"},[t("img",{staticClass:"modal-image",attrs:{src:e.selectedRecipe.image,alt:e.selectedRecipe.title}}),t("h2",{staticClass:"modal-title"},[e._v(e._s(e.selectedRecipe.title))])]),t("p",{staticClass:"modal-text"},[t("strong",[e._v("Made by:")]),e._v(" "+e._s(e.selectedRecipe.madeBy))]),t("p",{staticClass:"modal-text"},[t("strong",[e._v("Occasion:")]),e._v(" "+e._s(e.selectedRecipe.occasion))]),t("h3",{staticClass:"modal-subtitle"},[e._v("Ingredients:")]),t("ul",{staticClass:"modal-list"},e._l(e.selectedRecipe.ingredients,(function(r,i){return t("li",{key:i},[e._v(e._s(r))])})),0),t("h3",{staticClass:"modal-subtitle"},[e._v("Instructions:")]),t("ol",{staticClass:"modal-list"},e._l(e.selectedRecipe.instructions,(function(r,i){return t("li",{key:i},[e._v(e._s(r))])})),0),t("button",{staticClass:"close-button",on:{click:e.closeRecipeDetails}},[e._v("Close")])])]):e._e()])},s=[],n=(r(8563),r(2526),r(7327),r(1539),r(5003),r(7658),r(9554),r(4747),r(9337),r(3321),r(9070),r(3336));r(6649),r(6078),r(1817),r(1703),r(6647),r(9653);function c(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==(0,n.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function a(e){var t=c(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}function o(e,t,r){return t=a(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(8783),r(3948),r(1249);const p={name:"FamilyPage",data:function(){return{familyRecipes:[],selectedRecipe:null}},created:function(){this.loadFamilyRecipes()},methods:{loadFamilyRecipes:function(){var e=this;r.e(471).then(r.t.bind(r,3471,19)).then((function(t){e.familyRecipes=t["default"].map((function(e){return u(u({},e),{},{image:r(4798)("./".concat(e.image.split("/").pop()))})}))}))["catch"]((function(e){console.error("Error loading family recipes:",e)}))},showRecipeDetails:function(e){this.selectedRecipe=this.familyRecipes[e]},closeRecipeDetails:function(){this.selectedRecipe=null}}},f=p;var d=r(1001),m=(0,d.Z)(f,i,s,!1,null,"22974e3e",null);const b=m.exports},8709:(e,t,r)=>{"use strict";var i=r(9670),s=r(2140),n=TypeError;e.exports=function(e){if(i(this),"string"===e||"default"===e)e="string";else if("number"!==e)throw n("Incorrect hint");return s(this,e)}},3111:(e,t,r)=>{var i=r(1702),s=r(4488),n=r(1340),c=r(1361),a=i("".replace),o=RegExp("^["+c+"]+"),l=RegExp("(^|[^"+c+"])["+c+"]+$"),u=function(e){return function(t){var r=n(s(t));return 1&e&&(r=a(r,o,"")),2&e&&(r=a(r,l,"$1")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},863:(e,t,r)=>{var i=r(1702);e.exports=i(1..valueOf)},1361:e=>{e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7327:(e,t,r)=>{"use strict";var i=r(2109),s=r(2092).filter,n=r(1194),c=n("filter");i({target:"Array",proto:!0,forced:!c},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},1249:(e,t,r)=>{"use strict";var i=r(2109),s=r(2092).map,n=r(1194),c=n("map");i({target:"Array",proto:!0,forced:!c},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},6078:(e,t,r)=>{var i=r(2597),s=r(8052),n=r(8709),c=r(5112),a=c("toPrimitive"),o=Date.prototype;i(o,a)||s(o,a,n)},9653:(e,t,r)=>{"use strict";var i=r(2109),s=r(1913),n=r(9781),c=r(7854),a=r(857),o=r(1702),l=r(4705),u=r(2597),p=r(9587),f=r(7976),d=r(2190),m=r(7593),b=r(7293),v=r(8006).f,g=r(1236).f,h=r(3070).f,y=r(863),_=r(3111).trim,w="Number",O=c[w],R=a[w],C=O.prototype,E=c.TypeError,N=o("".slice),I=o("".charCodeAt),j=function(e){var t=m(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,r,i,s,n,c,a,o,l=m(e,"number");if(d(l))throw E("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=_(l),t=I(l,0),43===t||45===t){if(r=I(l,2),88===r||120===r)return NaN}else if(48===t){switch(I(l,1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+l}for(n=N(l,2),c=n.length,a=0;a<c;a++)if(o=I(n,a),o<48||o>s)return NaN;return parseInt(n,i)}return+l},P=l(w,!O(" 0o1")||!O("0b1")||O("+0x1")),x=function(e){return f(C,e)&&b((function(){y(e)}))},D=function(e){var t=arguments.length<1?0:O(j(e));return x(this)?p(Object(t),this,D):t};D.prototype=C,P&&!s&&(C.constructor=D),i({global:!0,constructor:!0,wrap:!0,forced:P},{Number:D});var S=function(e,t){for(var r,i=n?v(t):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),s=0;i.length>s;s++)u(t,r=i[s])&&!u(e,r)&&h(e,r,g(t,r))};s&&R&&S(a[w],R),(P||s)&&S(a[w],O)},3321:(e,t,r)=>{var i=r(2109),s=r(9781),n=r(6048).f;i({target:"Object",stat:!0,forced:Object.defineProperties!==n,sham:!s},{defineProperties:n})},5003:(e,t,r)=>{var i=r(2109),s=r(7293),n=r(5656),c=r(1236).f,a=r(9781),o=!a||s((function(){c(1)}));i({target:"Object",stat:!0,forced:o,sham:!a},{getOwnPropertyDescriptor:function(e,t){return c(n(e),t)}})},9337:(e,t,r)=>{var i=r(2109),s=r(9781),n=r(3887),c=r(5656),a=r(1236),o=r(6135);i({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var t,r,i=c(e),s=a.f,l=n(i),u={},p=0;while(l.length>p)r=s(i,t=l[p++]),void 0!==r&&o(u,t,r);return u}})},8563:(e,t,r)=>{var i=r(2109),s=r(7908),n=r(1956),c=r(7293),a=c((function(){n(1)}));i({target:"Object",stat:!0,forced:a},{keys:function(e){return n(s(e))}})},6649:(e,t,r)=>{var i=r(6800),s=r(6532);i("toPrimitive"),s()},4798:(e,t,r)=>{var i={"./beetroot_soup.webp":7082,"./couscus.webp":5574,"./ikra.webp":9218,"./kibbeh.webp":1401,"./schnizel.webp":3611,"./tofu.webp":5428};function s(e){var t=n(e);return r(t)}function n(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=n,e.exports=s,s.id=4798},7082:(e,t,r)=>{"use strict";e.exports=r.p+"img/beetroot_soup.0dd0a650.webp"},5574:(e,t,r)=>{"use strict";e.exports=r.p+"img/couscus.0612ecfe.webp"},9218:(e,t,r)=>{"use strict";e.exports=r.p+"img/ikra.26ed568d.webp"},1401:(e,t,r)=>{"use strict";e.exports=r.p+"img/kibbeh.56ebd741.webp"},3611:(e,t,r)=>{"use strict";e.exports=r.p+"img/schnizel.12750d1d.webp"},5428:(e,t,r)=>{"use strict";e.exports=r.p+"img/tofu.10677c6b.webp"}}]);
//# sourceMappingURL=207.0a477abb.js.map