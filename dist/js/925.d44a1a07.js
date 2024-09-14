(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[925],{6925:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>j});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("Search Page")]),e("div",{staticClass:"mt-3"},[e("h6",{staticClass:"mb-2 font-weight-bold result-header"},[t._v("Amount of results")]),e("b-button-group",t._l(t.results,(function(r){return e("b-button",{key:r,staticClass:"btn-lg result-button",attrs:{variant:r===t.selectedResult?"custom-active":"outline-custom"},on:{click:function(e){return t.selectResult(r)}}},[t._v(" "+t._s(r)+" ")])})),1)],1),e("div",{staticClass:"d-flex justify-content-between align-items-center mt-3"},[e("b-form-input",{staticClass:"w-75 taller-input mr-2",attrs:{placeholder:"Look for a recipe..."},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),e("div",[e("b-button",{staticClass:"btn-lg search-button"},[t._v("Search")]),t._v(" "),e("b-button",{staticClass:"ml-2 btn-lg",attrs:{variant:"secondary"},on:{click:t.resetSearch}},[t._v("Reset")])],1)],1),e("div",{staticClass:"row mt-3"},t._l(t.selects,(function(r,n){return e("div",{key:n,staticClass:"col-sm-4"},[e("h6",{staticClass:"mb-2 font-weight-bold"},[t._v(t._s(r.title))]),e("b-form-select",{staticClass:"mt-1",attrs:{options:r.options,size:"sm"},model:{value:r.selected,callback:function(e){t.$set(r,"selected",e)},expression:"select.selected"}})],1)})),0)])},a=[],o=r(5957),i=(r(1249),r(9554),r(1539),r(4747),r(2222),r(7930)),s=r(7353),l=r(5193),c=r(1915),u=r(9558),f=r(4689),p=r(2299),v=r(7040),d=r(451);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=(0,d.y2)((0,v.GE)(h(h({},(0,v.ei)(l.N,["size"])),{},{ariaRole:(0,d.pi)(p.N0,"group"),size:(0,d.pi)(p.N0),tag:(0,d.pi)(p.N0,"div"),vertical:(0,d.pi)(p.U5,!1)})),f.rK),y=(0,c.l7)({name:f.rK,functional:!0,props:g,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.tag,(0,u.b)(n,{class:m({"btn-group":!r.vertical,"btn-group-vertical":r.vertical},"btn-group-".concat(r.size),r.size),attrs:{role:r.ariaRole}}),a)}}),x=["African","Asian","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],w=[{value:"gluten-free",text:"Gluten Free"},{value:"ketogenic",text:"Ketogenic"},{value:"vegetarian",text:"Vegetarian"},{value:"lacto-vegetarian",text:"Lacto-Vegetarian"},{value:"ovo-vegetarian",text:"Ovo-Vegetarian"},{value:"vegan",text:"Vegan"},{value:"pescetarian",text:"Pescetarian"},{value:"paleo",text:"Paleo"},{value:"primal",text:"Primal"},{value:"low-fodmap",text:"Low FODMAP"},{value:"whole30",text:"Whole30"}],C=["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"];const O={components:{BFormSelect:i.K,BFormInput:s.e,BButton:l.T,BButtonGroup:y},data:function(){return{text:"",selectedResult:"5",selects:[{title:"Cuisine",selected:null,options:[]},{title:"Diet",selected:null,options:[]},{title:"Intolerance",selected:null,options:[]}]}},computed:{selected:function(){return this.selects.map((function(t){return t.selected}))},results:function(){return["5","10","15"]}},mounted:function(){this.selects.forEach((function(t,e){switch(e){case 0:t.options=[{value:null,text:"Please select a cuisine"}].concat((0,o.Z)(x.map((function(t){return{value:t.toLowerCase(),text:t}}))));break;case 1:t.options=[{value:null,text:"Please select a diet"}].concat((0,o.Z)(w.map((function(t){return{value:t.value,text:t.text}}))));break;case 2:t.options=[{value:null,text:"Please select an intolerance"}].concat((0,o.Z)(C.map((function(t){return{value:t.toLowerCase(),text:t}}))));break;default:t.options=[]}}))},methods:{selectResult:function(t){this.selectedResult=t},resetSearch:function(){this.text="",this.selects.forEach((function(t){t.selected=null}))}}},A=O;var S=r(1001),P=(0,S.Z)(A,n,a,!1,null,"a4fdfffa",null);const j=P.exports},8457:(t,e,r)=>{"use strict";var n=r(9974),a=r(6916),o=r(7908),i=r(3411),s=r(7659),l=r(4411),c=r(6244),u=r(6135),f=r(4121),p=r(1246),v=Array;t.exports=function(t){var e=o(t),r=l(this),d=arguments.length,b=d>1?arguments[1]:void 0,h=void 0!==b;h&&(b=n(b,d>2?arguments[2]:void 0));var m,g,y,x,w,C,O=p(e),A=0;if(!O||this===v&&s(O))for(m=c(e),g=r?new this(m):v(m);m>A;A++)C=h?b(e[A],A):e[A],u(g,A,C);else for(x=f(e,O),w=x.next,g=r?new this:[];!(y=a(w,x)).done;A++)C=h?i(x,b,[y.value,A],!0):y.value,u(g,A,C);return g.length=A,g}},3411:(t,e,r)=>{var n=r(9670),a=r(9212);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){a(t,"throw",i)}}},2222:(t,e,r)=>{"use strict";var n=r(2109),a=r(7293),o=r(3157),i=r(111),s=r(7908),l=r(6244),c=r(7207),u=r(6135),f=r(5417),p=r(1194),v=r(5112),d=r(7392),b=v("isConcatSpreadable"),h=d>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},g=!h||!p("concat");n({target:"Array",proto:!0,arity:1,forced:g},{concat:function(t){var e,r,n,a,o,i=s(this),p=f(i,0),v=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],m(o))for(a=l(o),c(v+a),r=0;r<a;r++,v++)r in o&&u(p,v,o[r]);else c(v+1),u(p,v++,o);return p.length=v,p}})},1038:(t,e,r)=>{var n=r(2109),a=r(8457),o=r(7072),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},9753:(t,e,r)=>{var n=r(2109),a=r(3157);n({target:"Array",stat:!0},{isArray:a})},1249:(t,e,r)=>{"use strict";var n=r(2109),a=r(2092).map,o=r(1194),i=o("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5957:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});r(9753);function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return n(t)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r(7042),r(8309),r(4916),r(7601);function i(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}r(1703),r(6647);function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||o(t)||i(t)||s()}}}]);
//# sourceMappingURL=925.d44a1a07.js.map