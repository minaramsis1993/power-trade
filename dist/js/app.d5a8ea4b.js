(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-28b83914":"011dc034","chunk-89bcc1d4":"89d7716e","chunk-af4808f2":"2a4f6bf8","chunk-bcd77506":"16832920"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-28b83914":1,"chunk-89bcc1d4":1,"chunk-af4808f2":1,"chunk-bcd77506":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-28b83914":"3b7e6f17","chunk-89bcc1d4":"50bc105f","chunk-af4808f2":"04f6231f","chunk-bcd77506":"bea271f4"}[t]+".css",s=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],p.parentNode.removeChild(p),a(r)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"076e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light"},[a("div",{staticClass:"container"},[a("footer",{staticClass:"text-center py-2"},[t._v(" PowerTrade © 2015 - 2022 All Rights Reserved. ")])])])}],s={},r=s,o=a("2877"),c=Object(o["a"])(r,n,i,!1,null,"3c6b6512",null);e["a"]=c.exports},"2eca":function(t,e,a){},5597:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[a("div",{staticClass:"container"},[a("b-navbar-brand",{attrs:{href:"#"}},[a("router-link",{staticClass:"brand-link",attrs:{to:"/"}},[t._v("PowerTrade")])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",[a("router-link",{staticClass:"link",attrs:{to:"/products"}},[t._v("Products")])],1),a("b-nav-item",[a("router-link",{staticClass:"link",attrs:{to:"/about-us"}},[t._v("About Us")])],1),a("b-nav-item",[a("router-link",{staticClass:"link",attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)],1)],1)],1)])},o=[],c={},l=c,u=(a("f5e0"),a("2877")),d=Object(u["a"])(l,r,o,!1,null,"fdc3cbfe",null),p=d.exports,m={components:{Navbar:p}},f=m,h=Object(u["a"])(f,i,s,!1,null,"6e63b076",null),v=h.exports,b=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("carousel"),t._m(0),t._m(1),a("Footer")],1)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-2 bg-dark text-light"},[a("div",{staticClass:"departments"},[a("div",{staticClass:"dep"},[a("h2",{staticClass:"title"},[t._v("Domestic sales")]),a("div",{staticClass:"contact-txt"},[t._v("Contact")]),a("div",{staticClass:"email"},[t._v("E-Mail : sales@deminasseal.com")]),a("div",{staticClass:"tel-fax"},[t._v("TEL / FAX : +44 0208799 7584")])]),a("div",{staticClass:"dep"},[a("h2",{staticClass:"title"},[t._v("International sales")]),a("div",{staticClass:"contact-txt"},[t._v("Contact")]),a("div",{staticClass:"email"},[t._v("E-Mail : sales@deminasseal.com")]),a("div",{staticClass:"tel-fax"},[t._v("TEL / FAX : +44 0208799 7584")])]),a("div",{staticClass:"dep"},[a("h2",{staticClass:"title"},[t._v("Technical Department")]),a("div",{staticClass:"contact-txt"},[t._v("Contact")]),a("div",{staticClass:"email"},[t._v("E-Mail : technical@deminasseal.com")]),a("div",{staticClass:"tel-fax"},[t._v("TEL / FAX : +44 0208799 7584")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro container my-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-12"},[a("h2",[t._v("Welcome to our Company")]),a("p",[t._v(" We design, manufacture and supply a wide range of essential sealing and insulation components to many industries where equipment failure is not an option. Products include cut gaskets, packings, sheet jointing materials, heat insulation material , expansion joint and sight glass , all vital to a modern industrial society."),a("br"),t._v(" We ensure that white goods manufacturers, petrochemical and chemical plants, power stations, cement industries , the automotive industry, pipeline & boiler manufacturers and other key industries function effectively by supplying only the best materials available on the market. Our success is due to continually meeting our customers’ expectations of high performance. The company is committed to offering the highest technology, the “best” service and the “best” value. This is our corporate quality policy."),a("br"),t._v(" Our commitment to quality has always been directly linked to the customers, who have consistently been the driving force behind all our strategic planning and achievement. Our objective continues to be the identification of the customers’ requirements and the satisfactory fulfillment of those requirements within acceptable quality standards."),a("br"),t._v(" Customer satisfaction is paramount. We aim for total quality performance with each and every order."),a("br"),t._v(" We believe our prices will be generally competitive, but due consideration is always given to providing the most suitable material for the particular job. Material performance, dependability, available alternatives, technical appraisal and production capability are all areas considered to when assessing costs and providing the best possible price for the customer. ")])]),a("div",{staticClass:"col-md-6 col-12 products-grid-wrapper"},[a("div",{staticClass:"products-grid"},[a("div",{staticClass:"grid-item"},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:"https://deminasseal.com/images/box1.jpg",alt:"box1"}})]),a("div",{staticClass:"prod-title"},[t._v("Braided Packing")])]),a("div",{staticClass:"grid-item"},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:"https://deminasseal.com/images/box2.jpg",alt:"box1"}})]),a("div",{staticClass:"prod-title"},[t._v("Expansion Joint")])]),a("div",{staticClass:"grid-item"},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:"https://deminasseal.com/images/box3.jpg",alt:"box1"}})]),a("div",{staticClass:"prod-title"},[t._v("Gasket Heat Exchanger")])]),a("div",{staticClass:"grid-item"},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:"https://deminasseal.com/images/box4.jpg",alt:"box1"}})]),a("div",{staticClass:"prod-title"},[t._v("Spiral Wound Gasket")])])])])])])}],C=a("d221"),_=a("076e"),k={name:"Home",components:{Carousel:C["a"],Footer:_["a"]}},w=k,x=(a("59e6"),Object(u["a"])(w,g,y,!1,null,"6d69b62d",null)),j=x.exports;n["default"].use(b["a"]);var E=[{path:"/",name:"Home",component:j},{path:"/about-us",name:"About",component:function(){return a.e("chunk-89bcc1d4").then(a.bind(null,"f820"))}},{path:"/contact-us",name:"Contact",component:function(){return a.e("chunk-af4808f2").then(a.bind(null,"b8fa"))}},{path:"/products",name:"Products",component:function(){return a.e("chunk-bcd77506").then(a.bind(null,"e6dc"))}},{path:"/products/:id",name:"SingleProduct",component:function(){return a.e("chunk-28b83914").then(a.bind(null,"4701"))}}],O=new b["a"]({base:"/",routes:E}),S=O,P=a("5f5b"),T=a("b1e0");a("f9e3"),a("2dd8");n["default"].config.productionTip=!1,n["default"].use(P["a"]),n["default"].use(T["a"]),new n["default"]({render:function(t){return t(v)},router:S}).$mount("#app")},"59e6":function(t,e,a){"use strict";a("2eca")},9245:function(t,e,a){},d221:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cmp-wrapper container"},[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",fade:"",background:"#ababab","img-width":"1024","img-height":"300"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-width":"1024","img-height":"300","img-src":"https://deminasseal.com/images/6.jpg"}}),a("b-carousel-slide",{attrs:{"img-width":"1024","img-height":"300","img-src":"https://deminasseal.com/images/4.jpg"}}),a("b-carousel-slide",{attrs:{"img-width":"1024","img-height":"300","img-src":"https://deminasseal.com/images/3.jpg"}})],1)],1)},i=[],s={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){console.log(t),this.sliding=!0},onSlideEnd:function(t){console.log(t),this.sliding=!1}}},r=s,o=(a("e57c"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"07c5e404",null);e["a"]=c.exports},e57c:function(t,e,a){"use strict";a("5597")},f5e0:function(t,e,a){"use strict";a("9245")}});
//# sourceMappingURL=app.d5a8ea4b.js.map