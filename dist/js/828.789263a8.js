(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[828],{1180:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>g});var n=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("register-form",{on:{submit:t.register}}),t.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[t._v(" Register failed: "+t._s(t.form.submitError)+" ")]):t._e(),t.loading?r("b-alert",{staticClass:"mt-2",attrs:{variant:"info",show:""}},[t._v(" Registering, please wait... ")]):t._e()],1)},a=[],s=e(124),i=e(8534),o=(e(7658),e(5483)),u=e(9239);const l={name:"RegisterPage",components:{RegisterForm:o.Z},data:function(){return{form:{submitError:void 0},loading:!1}},methods:{register:function(t){var r=this;return(0,i.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.loading=!0,r.form.submitError=void 0,e.prev=2,e.next=5,(0,u.Ge)(t);case 5:r.$router.push("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),r.form.submitError=(null===(n=e.t0.response)||void 0===n?void 0:n.data.message)||"Register failed.";case 11:return e.prev=11,r.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])})))()}}},c=l;var f=e(1001),d=(0,f.Z)(c,n,a,!1,null,"cbf20100",null);const g=d.exports},8457:(t,r,e)=>{"use strict";var n=e(9974),a=e(6916),s=e(7908),i=e(3411),o=e(7659),u=e(4411),l=e(6244),c=e(6135),f=e(4121),d=e(1246),g=Array;t.exports=function(t){var r=s(t),e=u(this),v=arguments.length,p=v>1?arguments[1]:void 0,x=void 0!==p;x&&(p=n(p,v>2?arguments[2]:void 0));var m,h,b,y,I,E,w=d(r),R=0;if(!w||this===g&&o(w))for(m=l(r),h=e?new this(m):g(m);m>R;R++)E=x?p(r[R],R):r[R],c(h,R,E);else for(y=f(r,w),I=y.next,h=e?new this:[];!(b=a(I,y)).done;R++)E=x?i(y,p,[b.value,R],!0):b.value,c(h,R,E);return h.length=R,h}},3411:(t,r,e)=>{var n=e(9670),a=e(9212);t.exports=function(t,r,e,s){try{return s?r(n(e)[0],e[1]):r(e)}catch(i){a(t,"throw",i)}}},2261:(t,r,e)=>{"use strict";var n=e(6916),a=e(1702),s=e(1340),i=e(7066),o=e(2999),u=e(2309),l=e(30),c=e(9909).get,f=e(9441),d=e(7168),g=u("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,p=v,x=a("".charAt),m=a("".indexOf),h=a("".replace),b=a("".slice),y=function(){var t=/a/,r=/b*/g;return n(v,t,"a"),n(v,r,"a"),0!==t.lastIndex||0!==r.lastIndex}(),I=o.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],w=y||E||I||f||d;w&&(p=function(t){var r,e,a,o,u,f,d,w=this,R=c(w),A=s(t),_=R.raw;if(_)return _.lastIndex=w.lastIndex,r=n(p,_,A),w.lastIndex=_.lastIndex,r;var S=R.groups,C=I&&w.sticky,k=n(i,w),O=w.source,Z=0,T=A;if(C&&(k=h(k,"y",""),-1===m(k,"g")&&(k+="g"),T=b(A,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==x(A,w.lastIndex-1))&&(O="(?: "+O+")",T=" "+T,Z++),e=new RegExp("^(?:"+O+")",k)),E&&(e=new RegExp("^"+O+"$(?!\\s)",k)),y&&(a=w.lastIndex),o=n(v,C?e:w,T),C?o?(o.input=b(o.input,Z),o[0]=b(o[0],Z),o.index=w.lastIndex,w.lastIndex+=o[0].length):w.lastIndex=0:y&&o&&(w.lastIndex=w.global?o.index+o[0].length:a),E&&o&&o.length>1&&n(g,o[0],e,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&S)for(o.groups=f=l(null),u=0;u<S.length;u++)d=S[u],f[d[0]]=o[d[1]];return o}),t.exports=p},7066:(t,r,e)=>{"use strict";var n=e(9670);t.exports=function(){var t=n(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r}},2999:(t,r,e)=>{var n=e(7293),a=e(7854),s=a.RegExp,i=n((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),o=i||n((function(){return!s("a","y").sticky})),u=i||n((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:o,UNSUPPORTED_Y:i}},9441:(t,r,e)=>{var n=e(7293),a=e(7854),s=a.RegExp;t.exports=n((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:(t,r,e)=>{var n=e(7293),a=e(7854),s=a.RegExp;t.exports=n((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1038:(t,r,e)=>{var n=e(2109),a=e(8457),s=e(7072),i=!s((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},9753:(t,r,e)=>{var n=e(2109),a=e(3157);n({target:"Array",stat:!0},{isArray:a})},4916:(t,r,e)=>{"use strict";var n=e(2109),a=e(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},7601:(t,r,e)=>{"use strict";e(4916);var n=e(2109),a=e(6916),s=e(614),i=e(9670),o=e(1340),u=function(){var t=!1,r=/[ac]/;return r.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===r.test("abc")&&t}(),l=/./.test;n({target:"RegExp",proto:!0,forced:!u},{test:function(t){var r=i(this),e=o(t),n=r.exec;if(!s(n))return a(l,r,e);var u=a(n,r,e);return null!==u&&(i(u),!0)}})},5957:(t,r,e)=>{"use strict";e.d(r,{Z:()=>u});e(9753);function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t){if(Array.isArray(t))return n(t)}e(2526),e(1817),e(1539),e(2165),e(8783),e(3948),e(1038);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e(7042),e(8309),e(4916),e(7601);function i(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}e(1703),e(6647);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||i(t)||o()}}}]);
//# sourceMappingURL=828.789263a8.js.map