(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b83914"],{"0b42":function(e,t,i){var r=i("da84"),s=i("e8b5"),o=i("68ee"),c=i("861d"),n=i("b622"),a=n("species"),d=r.Array;e.exports=function(e){var t;return s(e)&&(t=e.constructor,o(t)&&(t===d||s(t.prototype))?t=void 0:c(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?d:t}},"1b3f":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var r=[{id:1,name:"Product 1",shortDescription:"Lorem ipsum dolor sit amet",longDescription:"Lorem ipsum dolor sit amet",price:"99",image:"https://deminasseal.com/images/ex1.jpg"},{id:2,name:"Product 2",shortDescription:"Lorem ipsum dolor sit amet",longDescription:"Lorem ipsum dolor sit amet",price:"99",image:"https://deminasseal.com/images/3300%20_expended_graphite.jpg"},{id:3,name:"Product 3",shortDescription:"Lorem ipsum dolor sit amet",longDescription:"Lorem ipsum dolor sit amet",price:"99",image:"https://deminasseal.com/images/3310R%20_expended_graphite.jpg"},{id:4,name:"Product 4",shortDescription:"Lorem ipsum dolor sit amet",longDescription:"Lorem ipsum dolor sit amet",price:"99",image:"https://deminasseal.com/images/packing%20cutter.jpg"},{id:5,name:"Product 5",shortDescription:"Lorem ipsum dolor sit amet",longDescription:"Lorem ipsum dolor sit amet",price:"99",image:"https://deminasseal.com/images/2200%20PTFE%20Pure.jpg"},{id:6,name:"Product 6",shortDescription:"Lorem ipsum dolor sit amet",longDescription:"Lorem ipsum dolor sit amet",price:"99",image:"https://deminasseal.com/images/2100%20Rami%20PTFE.jpg"},{id:7,name:"Product 7",shortDescription:"Lorem ipsum dolor sit amet",longDescription:"Lorem ipsum dolor sit amet",price:"99",image:"https://deminasseal.com/images/3110%20fiber%20glass%20Graphite.jpg"}]},4701:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"single-product"},[e.selectedProduct?i("div",{staticClass:"container"},[i("div",{staticClass:"row my-4"},[i("div",{staticClass:"col-lg-4 col-12"},[i("div",{staticClass:"img-wrapper"},[i("img",{attrs:{src:e.selectedProduct.image,alt:"Product-"+e.selectedProduct.id}})])]),i("div",{staticClass:"col-lg-8 col-12"},[i("h1",{staticClass:"title"},[e._v(e._s(e.selectedProduct.name))]),i("div",{staticClass:"price"},[e._v("Price: "+e._s(e.selectedProduct.price)+" EGP")]),i("p",{staticClass:"description"},[e._v(" "+e._s(e.selectedProduct.longDescription)+" ")])])])]):e._e(),i("Footer")],1)},s=[],o=(i("7db0"),i("d3b7"),i("076e")),c=i("1b3f"),n={components:{Footer:o["a"]},data:function(){return{selectedProduct:null}},created:function(){var e=this;this.selectedProduct=c["a"].find((function(t){return t.id==e.$route.params.id}))}},a=n,d=(i("9c30"),i("2877")),m=Object(d["a"])(a,r,s,!1,null,"8ad192ac",null);t["default"]=m.exports},"65f0":function(e,t,i){var r=i("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"7db0":function(e,t,i){"use strict";var r=i("23e7"),s=i("b727").find,o=i("44d2"),c="find",n=!0;c in[]&&Array(1)[c]((function(){n=!1})),r({target:"Array",proto:!0,forced:n},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),o(c)},"9c30":function(e,t,i){"use strict";i("cbf7")},b727:function(e,t,i){var r=i("0366"),s=i("e330"),o=i("44ad"),c=i("7b0b"),n=i("07fa"),a=i("65f0"),d=s([].push),m=function(e){var t=1==e,i=2==e,s=3==e,m=4==e,u=6==e,p=7==e,l=5==e||u;return function(f,g,h,v){for(var b,P,D=c(f),L=o(D),_=r(g,h),w=n(L),j=0,x=v||a,y=t?x(f,w):i||p?x(f,0):void 0;w>j;j++)if((l||j in L)&&(b=L[j],P=_(b,j,D),e))if(t)y[j]=P;else if(P)switch(e){case 3:return!0;case 5:return b;case 6:return j;case 2:d(y,b)}else switch(e){case 4:return!1;case 7:d(y,b)}return u?-1:s||m?m:y}};e.exports={forEach:m(0),map:m(1),filter:m(2),some:m(3),every:m(4),find:m(5),findIndex:m(6),filterReject:m(7)}},cbf7:function(e,t,i){},e8b5:function(e,t,i){var r=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-28b83914.011dc034.js.map