(function(e){function t(t){for(var l,s,r=t[0],c=t[1],i=t[2],v=0,f=[];v<r.length;v++)s=r[v],a[s]&&f.push(a[s][0]),a[s]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],l=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(l=!1)}l&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var l={},a={app:0},o=[];function s(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=l,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)s.d(n,l,function(t){return e[t]}.bind(null,l));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"033d":function(e,t,n){"use strict";var l=n("2b68"),a=n.n(l);a.a},"2b68":function(e,t,n){},"388a":function(e,t,n){"use strict";var l=n("e7b3"),a=n.n(l);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var l=n("2b0e"),a=n("1559"),o=n.n(a),s=n("9e32"),r=n.n(s),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("grid"),n("controls")],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid"},[n("div",{staticClass:"a",style:e.aStyle},[e._v("A")]),n("div",{staticClass:"b"},[e._v("B")]),n("div",{staticClass:"c",style:e.cStyle},[e._v("C")]),n("collapse-transition",{staticClass:"d"},[e.d?["D1"===e.dComp?n("div",{key:"d1"},[n("h2",[e._v("D1")]),n("p",[e._v("Paragraph 1")]),n("p",[e._v("Paragraph 2")])]):"D2"===e.dComp?n("div",{key:"d2"},[n("p",[e._v("D2")]),n("small",[e._v("Note")])]):e._e()]:e._e()],2),e.e?n("div",{staticClass:"e"},[e._v("E")]):e._e(),n("div",{staticClass:"f"},[e._v("F")]),n("div",{staticClass:"g"},[e._v("G")]),n("div",{staticClass:"h"},[e._v("H")]),n("div",{staticClass:"i"},[e._v("I")])],1)},v=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",e._g({attrs:{css:!1,mode:"out-in"}},e.transition),[e._t("default")],2)],1)},d=[];function p(e,t){var n=function n(l){"height"===l.propertyName&&(e.removeEventListener(l.type,n,!1),t())};e.addEventListener("transitionend",n,!1)}var h={created:function(){var e=this,t=function(e){return setTimeout(e,30)};this.transition={beforeLeave:function(t){e.$el.style.height||(e.$el.style.height=t.offsetHeight+"px"),e.$el.classList.add("collapse-leave","collapse-leave-active")},leave:function(n,l){t(function(){e.$el.classList.remove("collapse-leave"),e.$el.classList.add("collapse-leave-to"),p(e.$el,l),e.$el.style.height=0})},afterLeave:function(t){e.$el.classList.remove("collapse-leave-to","collapse-leave-active")},leaveCancelled:function(t){e.$el.classList.remove("collapse-leave-to","collapse-leave-active")},beforeEnter:function(t){null!==e.$el.offsetParent?(e.$el.style.height||(e.$el.style.height=0),e.$el.classList.add("collapse-enter","collapse-enter-active")):e.$el.style.height=""},enter:function(n,l){null!==e.$el.offsetParent&&t(function(){e.$el.classList.remove("collapse-enter"),e.$el.classList.add("collapse-enter-to"),p(e.$el,l),e.$el.style.height=n.scrollHeight+"px"})},afterEnter:function(t){e.$el.classList.remove("collapse-enter-to","collapse-enter-active"),e.$el.style.height=""},enterCancelled:function(t){e.$el.classList.remove("collapse-enter-to","collapse-enter-active")}}}},b=h,m=n("2877"),_=Object(m["a"])(b,f,d,!1,null,null,null),y=_.exports,g=(n("fb43"),{a:!0,c:!0,d:!0,e:!0,dComp:"D1"}),$={name:"Grid",components:{CollapseTransition:y},data:function(){return g},computed:{aStyle:function(){return{width:this.a?"220px":"0"}},cStyle:function(){return{width:this.c?"250px":"0"}}}},C=$,x=(n("388a"),Object(m["a"])(C,u,v,!1,null,"55f318c1",null)),k=x.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"controls"},[n("div",[n("b-checkbox",{model:{value:e.a,callback:function(t){e.a=t},expression:"a"}},[e._v("A")])],1),n("div",[n("b-checkbox",{model:{value:e.c,callback:function(t){e.c=t},expression:"c"}},[e._v("C")])],1),n("div",{staticClass:"row"},[n("b-checkbox",{model:{value:e.d,callback:function(t){e.d=t},expression:"d"}},[e._v("D")]),n("b-select",{model:{value:e.dComp,callback:function(t){e.dComp=t},expression:"dComp"}},e._l(["D1","D2"],function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n        "+e._s(t)+"\n      ")])}),0)],1),n("div",[n("b-checkbox",{model:{value:e.e,callback:function(t){e.e=t},expression:"e"}},[e._v("E")])],1)])},w=[],O={name:"Controls",data:function(){return g}},j=O,P=(n("033d"),Object(m["a"])(j,L,w,!1,null,"e1bbc262",null)),E=P.exports,S={name:"app",components:{Grid:k,Controls:E}},D=S,T=(n("5c0b"),Object(m["a"])(D,c,i,!1,null,null,null)),M=T.exports;l["a"].use(o.a),l["a"].use(r.a),l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(M)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var l=n("5e27"),a=n.n(l);a.a},"5e27":function(e,t,n){},e7b3:function(e,t,n){},fb43:function(e,t,n){}});
//# sourceMappingURL=app.8a0c85c8.js.map