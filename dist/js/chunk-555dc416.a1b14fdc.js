(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-555dc416"],{1955:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myclock"},[r("div",[t._v(" "+t._s(t.t0)+" ")]),r("div",[t._v(" "+t._s(t.t1)+" ")])])},n=[],c=r("c1df"),i={data:function(){return{t0:"",t1:""}},computed:{isShowHeader:function(){return this.$store.state.isShowHeader}},methods:{},created:function(){var t=this.$route.query;t.fullscreen&&"1"===t.fullscreen&&this.$store.commit("setIsShowHeader",!1);var e=this;this.timer=setInterval((function(){e.t0=c().format("MM月DD日"),e.t1=c().format("HH:mm:ss")}),1e3)},beforeDestroy:function(){clearInterval(this.timer)}},o=i,a=(r("19c2"),r("2877")),u=Object(a["a"])(o,s,n,!1,null,"2b20ae0c",null);e["default"]=u.exports},"19c2":function(t,e,r){"use strict";var s=r("85d3"),n=r.n(s);n.a},"85d3":function(t,e,r){}}]);
//# sourceMappingURL=chunk-555dc416.a1b14fdc.js.map