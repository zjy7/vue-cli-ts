(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cada9a4e"],{"4fab":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"kp2sy"},e._l(e.addMenuArr,(function(a,n){return t("div",{key:n,staticClass:"item"},[t("span",{on:{click:function(t){return e.clickItem(a)}}},[e._v(" "+e._s(a.label)+" ")])])})),0)},c=[],l=(t("99af"),t("2ef0")),i=t.n(l),s={data:function(){return{addMenuArr:[{label:"add cp0",value:"cp0"},{label:"add cp1",value:"cp1"},{label:"add cp2",value:"cp2"},{label:"add dyn",value:"dyn"}]}},methods:{clickItem:function(e){var a=i.a.clone(e);if("dyn"===e.value){var t=this.$store.state.keepalive2.nextDynId;this.$router.push("".concat(e.value,"/").concat(t)),a.dynid=t,t++,this.$store.commit("keepalive2/setNextDynId",t)}else this.$router.push(e.value);this.$store.commit("keepalive2/addMenu",a)}}},u=s,d=(t("d52e"),t("2877")),r=Object(d["a"])(u,n,c,!1,null,"12597e67",null);a["default"]=r.exports},b2a8:function(e,a,t){},d52e:function(e,a,t){"use strict";var n=t("b2a8"),c=t.n(n);c.a}}]);
//# sourceMappingURL=chunk-cada9a4e.5636784f.js.map