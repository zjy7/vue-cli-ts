(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a0b1964"],{a434:function(r,e,t){"use strict";var a=t("23e7"),i=t("23cb"),n=t("a691"),c=t("50c4"),s=t("7b0b"),o=t("65f0"),l=t("8418"),f=t("1dde"),d=t("ae40"),p=f("splice"),u=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,v=9007199254740991,w="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!u},{splice:function(r,e){var t,a,f,d,p,u,M=s(this),b=c(M.length),Y=i(r,b),g=arguments.length;if(0===g?t=a=0:1===g?(t=0,a=b-Y):(t=g-2,a=h(m(n(e),0),b-Y)),b+t-a>v)throw TypeError(w);for(f=o(M,a),d=0;d<a;d++)p=Y+d,p in M&&l(f,d,M[p]);if(f.length=a,t<a){for(d=Y;d<b-a;d++)p=d+a,u=d+t,p in M?M[u]=M[p]:delete M[u];for(d=b;d>b-a+t;d--)delete M[d-1]}else if(t>a)for(d=b-a;d>Y;d--)p=d+a-1,u=d+t-1,p in M?M[u]=M[p]:delete M[u];for(d=0;d<t;d++)M[d+Y]=arguments[d+2];return M.length=b-a+t,f}})},c36fc:function(r,e,t){"use strict";t.r(e);var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("div",[r._v("moment.js")]),r._l(r.arr,(function(e,a){return t("div",{key:"sss"+a},[r._v(r._s(e))])}))],2)},i=[],n=(t("a434"),t("c1df")),c={data:function(){return{arr:[]}},created:function(){var r=this;this.timer=setInterval((function(){r.arr.splice(0,1,n()),r.arr.splice(1,1,n().format("ddd")),r.arr.splice(2,1,n().format("dddd")),r.arr.splice(3,1,n().format("hA")),r.arr.splice(4,1,n().format("dddd --- MMMM Do YYYY ,,, h:mm:ss a")),r.arr.splice(5,1,n().format("YYYY-MM-DD")),r.arr.splice(6,1,n([2020,1,22]).fromNow()),r.arr.splice(7,1,n([2020,1,22]).fromNow(!0)),r.arr.splice(8,1,n([2020,1,22]).to(n([2020,4,29]))),r.arr.splice(9,1,n([2020,1,22]).diff(n([2020,5,2]),"days",!0)),r.arr.splice(10,1,n([2020,1,22]).diff(n([2020,5,2]),"days",!1))}),1e3)},beforeDestroy:function(){clearInterval(this.timer)}},s=c,o=t("2877"),l=Object(o["a"])(s,a,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2a0b1964.afd71b4a.js.map