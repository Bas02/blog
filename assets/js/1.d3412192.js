(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{368:function(t,e,n){n(29),n(90),t.exports={capitalize:function(t){return t.replace(/^\w/,(function(t){return t.toUpperCase()}))}}},370:function(t,e,n){},372:function(t,e,n){"use strict";n(370)},373:function(t,e,n){"use strict";var r={name:"PostMeta",props:["post"],filters:{capitalize:n(368).capitalize}},i=(n(372),n(37)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"meta"},[t._v("\n  Posted in\n\n  "),Array.isArray(t.post.frontmatter.category)?t._l(t.post.frontmatter.category,(function(e,r){return n("span",{key:e},[n("router-link",{staticClass:"meta-link",attrs:{to:"/category/"+e}},[t._v(t._s(t._f("capitalize")(e)))]),t._v(" "),r!=t.post.frontmatter.category.length-1?n("span",[t._v(", ")]):t._e()],1)})):n("router-link",{staticClass:"meta-link",attrs:{to:"/category/"+t.post.frontmatter.category}},[t._v(t._s(t._f("capitalize")(t.post.frontmatter.category)))]),t._v("\n\n  by\n\n  "),Array.isArray(t.post.frontmatter.author)?t._l(t.post.frontmatter.author,(function(e,r){return n("span",{key:e},[n("router-link",{staticClass:"meta-link",attrs:{to:"/author/"+e}},[t._v(t._s(e))]),t._v(" "),r!=t.post.frontmatter.author.length-1?n("span",[t._v(", ")]):t._e()],1)})):n("router-link",{staticClass:"meta-link",attrs:{to:"/author/"+t.post.frontmatter.author}},[t._v(t._s(t.post.frontmatter.author))]),t._v("\n\n  on\n\n  "+t._s(new Date(t.post.frontmatter.date).getMonth()+1)+"/"+t._s(new Date(t.post.frontmatter.date).getDate()+1)+"/"+t._s(new Date(t.post.frontmatter.date).getFullYear())+"\n")],2)}),[],!1,null,"5bdec7e4",null);e.a=a.exports},397:function(t,e,n){},398:function(t,e,n){},399:function(t,e,n){},405:function(t,e,n){"use strict";n.r(e);n(228),n(432);var r=n(368),i={filters:{capitalize:r.capitalize}},a=(n(433),n(37)),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"categories-list"},t._l(t.$category.list,(function(e){return n("li",{key:e.path},[t.$page.frontmatter.title.toLowerCase().startsWith(e.name)?n("span",{staticClass:"active-link"},[t._v(t._s(t._f("capitalize")(e.name)))]):n("router-link",{staticClass:"page-link",attrs:{to:e.path}},[t._v("\n        "+t._s(t._f("capitalize")(e.name))+"\n      ")])],1)})),0)])}),[],!1,null,"5526d076",null).exports,s=n(373),u=(n(6),n(20),n(25),{data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(3).then(n.t.bind(null,459,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}}),c=(n(434),Object(a.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports),p=(n(435),Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,n(436),n(99)),l=n.n(p),f=n(438),v=n.n(f),_={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return v()(this.$props,l.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},g=(Object(a.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports,{computed:{posts:function(){return this.$pagination.pages.sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}))}},components:{Categories:o,Pagination:c,PostMeta:s.a},props:["items","title"],filters:{capitalize:r.capitalize}}),m=Object(a.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"theme-default-content"},[n("h1",{staticClass:"home-title"},[n("router-link",{staticClass:"home-link",attrs:{to:"/"}},[t._v(t._s(t.title||"BTCPay Server Blog"))])],1),t._v(" "),n("Categories"),t._v(" "),n("hr"),t._v(" "),t._l(t.posts,(function(e){return n("div",{key:e.path},[n("h2",{staticClass:"index-post-title"},[n("router-link",{attrs:{to:e.path}},[t._v("\n          "+t._s(e.frontmatter.title)+"\n        ")])],1),t._v(" "),n("PostMeta",{attrs:{post:e}}),t._v(" "),n("router-link",{attrs:{to:e.path}},[e.frontmatter.coverImage?n("img",{staticClass:"cover-image",attrs:{src:e.frontmatter.coverImage}}):t._e()])],1)})),t._v(" "),t.$pagination.length>1?[n("hr"),t._v(" "),n("Pagination")]:t._e()],2),t._v(" "),n("Layout")],1)}),[],!1,null,null,null);e.default=m.exports},432:function(t,e,n){var r=n(2),i=n(17),a=Date.prototype,o=r(a.toString),s=r(a.getTime);"Invalid Date"!=String(new Date(NaN))&&i(a,"toString",(function(){var t=s(this);return t==t?o(this):"Invalid Date"}))},433:function(t,e,n){"use strict";n(397)},434:function(t,e,n){"use strict";n(398)},435:function(t,e,n){"use strict";n(399)},436:function(t,e,n){"use strict";var r=n(8),i=n(0),a=n(2),o=n(124),s=n(17),u=n(10),c=n(206),p=n(38),l=n(96),f=n(212),v=n(3),_=n(65).f,g=n(32).f,m=n(12).f,h=n(437),d=n(211).trim,y=i.Number,b=y.prototype,k=i.TypeError,x=a("".slice),$=a("".charCodeAt),N=function(t){var e=f(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,i,a,o,s,u,c=f(t,"number");if(l(c))throw k("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=d(c),43===(e=$(c,0))||45===e){if(88===(n=$(c,2))||120===n)return NaN}else if(48===e){switch($(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(a=x(c,2)).length,s=0;s<o;s++)if((u=$(a,s))<48||u>i)return NaN;return parseInt(a,r)}return+c};if(o("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,P=function(t){var e=arguments.length<1?0:y(N(t)),n=this;return p(b,n)&&v((function(){h(n)}))?c(Object(e),n,P):e},C=r?_(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;C.length>E;E++)u(y,I=C[E])&&!u(P,I)&&m(P,I,g(y,I));P.prototype=b,b.constructor=P,s(i,"Number",P)}},437:function(t,e,n){var r=n(2);t.exports=r(1..valueOf)},438:function(t,e,n){var r=n(223),i=n(215),a=n(439),o=n(443);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),a(t,n,(function(t,n){return e(t,n[0])}))}},439:function(t,e,n){var r=n(137),i=n(440),a=n(125);t.exports=function(t,e,n){for(var o=-1,s=e.length,u={};++o<s;){var c=e[o],p=r(t,c);n(p,c)&&i(u,a(c,t),p)}return u}},440:function(t,e,n){var r=n(441),i=n(125),a=n(135),o=n(95),s=n(67);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,p=(e=i(e,t)).length,l=p-1,f=t;null!=f&&++c<p;){var v=s(e[c]),_=n;if("__proto__"===v||"constructor"===v||"prototype"===v)return t;if(c!=l){var g=f[v];void 0===(_=u?u(g,v,f):void 0)&&(_=o(g)?g:a(e[c+1])?[]:{})}r(f,v,_),f=f[v]}return t}},441:function(t,e,n){var r=n(442),i=n(134),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];a.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},442:function(t,e,n){var r=n(224);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},443:function(t,e,n){var r=n(216),i=n(444),a=n(446);t.exports=function(t){return r(t,a,i)}},444:function(t,e,n){var r=n(133),i=n(445),a=n(217),o=n(218),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,a(t)),t=i(t);return e}:o;t.exports=s},445:function(t,e,n){var r=n(221)(Object.getPrototypeOf,Object);t.exports=r},446:function(t,e,n){var r=n(219),i=n(447),a=n(136);t.exports=function(t){return a(t)?r(t,!0):i(t)}},447:function(t,e,n){var r=n(95),i=n(220),a=n(448),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&n.push(s);return n}},448:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}}}]);