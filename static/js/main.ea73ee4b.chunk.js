(this["webpackJsonpweekly-project-3"]=this["webpackJsonpweekly-project-3"]||[]).push([[0],{139:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(47),r=a.n(s),o=(a(139),a(22)),i=(a(140),a(141),a(142),a(143),a(144),a(176)),l=a(173),u=a(178),j=a(174),h=a(5),b=function(e){return Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsx)(i.a,{className:"nav__form",onSubmit:function(){return e.onSearch()},children:Object(h.jsxs)(i.a.Group,{className:"nav__group",children:[Object(h.jsx)(i.a.Input,{className:"nav__search",placeholder:"Search...",name:"search",onChange:function(t){return e.isValue(t)},value:e.value}),Object(h.jsx)(l.a,{className:"nav__select",onChange:e.onChangeSelect,placeholder:"Number of results",options:[{key:"1",text:"40",value:"40"},{key:"2",text:"60",value:"60"},{key:"3",text:"100",value:"100"},{key:"4",text:"150",value:"150"},{key:"5",text:"200",value:"200"}]}),e.isLoading?Object(h.jsx)(u.a,{type:"submit",className:"nav__btn",children:Object(h.jsx)(j.a,{inline:"centered",active:!0,size:"mini"})}):Object(h.jsx)(u.a,{type:"submit",className:"nav__btn",children:"Search"}),Object(h.jsx)(i.a.Input,{className:"nav__range",label:"Articles per page: ".concat(e.range),min:1,max:20,name:"range",onChange:function(t){return e.onChangeRange(t)},step:1,type:"range",value:e.range})]})}),Object(h.jsx)(u.a,{onClick:e.luckyQuery,className:"nav__btn",children:"Surprise me!"})]})},m=function(e){return Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("a",{href:"./index.html",className:"header__logo link",children:[Object(h.jsx)("img",{src:"./img/hn-logo.svg",alt:"Logo"}),"Hacker News"]}),Object(h.jsx)(b,{luckyQuery:e.luckyQuery,onChangeSelect:e.onChangeSelect,range:e.range,onChangeRange:e.onChangeRange,isLoading:e.isLoading,isValue:e.isValue,onSearch:e.onSearch,value:e.value})]})})})},g=(a(110),a(120),a(175)),d=(a(157),function(){return Object(h.jsxs)("div",{className:"error",children:[Object(h.jsx)("h2",{className:"error__title",children:"Search failed successfully!"}),Object(h.jsx)("img",{className:"error__gif",src:"./img/error.gif",alt:"Homer Error"})]})}),O=(a(158),function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){s((function(t){return function(e){var t=new Date(e).getTime(),a=((new Date).getTime()-t)/1e3,c=Math.floor(a/86400),n=Math.floor(c/365.25),s=Math.floor(a/3600)%24,r=Math.floor(a/60)%60;return n>=1&&n<2?"1 year ago":n>=2?"".concat(n," years ago"):n<1&&s>=24?"".concat(c," days ago"):s<24&&s>=1?"".concat(s," hours ago"):s<1?"".concat(r," minutes ago"):void 0}("".concat(e.time))}))}),[]),Object(h.jsxs)("li",{className:"article",children:[Object(h.jsxs)("span",{className:"article__id",children:[e.id,"."]}),Object(h.jsxs)("div",{className:"row article__row-1",children:[Object(h.jsx)("h3",{className:"article__title",children:e.title}),Object(h.jsx)("a",{href:e.link,className:"article__link",children:"link"})]}),Object(h.jsxs)("div",{className:"row article__row-2",children:[Object(h.jsxs)("span",{className:"article__info",children:[e.points," points by ",e.author," ",n]}),Object(h.jsxs)("span",{className:"article__comments",children:[e.num_comments," comments"]})]})]})});var v=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(o.a)(s,2),i=(r[0],r[1]),l=Object(c.useState)([]),u=Object(o.a)(l,2),j=u[0],b=u[1],v=Object(c.useState)(!1),f=Object(o.a)(v,2),x=f[0],_=f[1],p=Object(c.useState)(!1),N=Object(o.a)(p,2),y=N[0],S=N[1],k=Object(c.useState)(1),w=Object(o.a)(k,2),C=w[0],L=w[1],M=Object(c.useState)(5),P=Object(o.a)(M,2),R=P[0],E=P[1],Q=Object(c.useState)("disabled"),T=Object(o.a)(Q,2),V=T[0],H=T[1],I=Object(c.useState)({value:20}),U=Object(o.a)(I,2),q=U[0],A=U[1],D=Object(c.useState)(Math.ceil(q.value/R)),J=Object(o.a)(D,2),z=J[0],B=J[1];Object(c.useEffect)((function(){B(Math.ceil(q.value/R))}),[q,R]);var F=["php","jest","javascript","perl","react","angular","hacking","python","vue","jango","html and css","politics in it","frontend","backend","server","macos","windows","bootcamp"],G=function(e){void 0===e&&(e=a),_(!0),S(!1),b((function(e){return[]}));var t=new URL("https://hn.algolia.com/api/v1/search"),c={query:e,hitsPerPage:q.value};t.search=new URLSearchParams(c),console.log("URL: ".concat(t)),fetch(t).then((function(e){if(!e.ok)throw new d("An error has occured during the request. HTTP status code: ".concat(e.status));return e.json()}),(function(e){console.log("Rejection error callback"),_(!1),S(!0),console.log(e)})).then((function(e){_(!1),e.hits.length>0?(i(e),b(e.hits),H("")):(H("disabled"),S(!0))})).catch((function(e){console.log("Catch block"),_(!1),S(!0),console.log(e)}))},K=C*R,W=K-R,X=j.slice(W,K);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{luckyQuery:function(){var e=Math.floor(Math.random()*F.length);G(F[e])},onChangeSelect:function(e,t){var a=t.value;console.log({value:a}),A({value:a})},range:R,onChangeRange:function(e){E(e.target.value)},isLoading:x,isValue:function(e){n((function(t){return e.target.value}))},onSearch:G,value:a}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"container",children:[y&&Object(h.jsx)(d,{}),Object(h.jsx)("ol",{className:"article-list",children:X&&X.map((function(e,t){return Object(h.jsx)(O,{isLoading:x,id:(C-1)*R+t+1,title:e.title||e.story_title,link:e.url,author:e.author,points:e.points,num_comments:e.num_comments,time:e.created_at},t+1)}))}),Object(h.jsx)(g.a,{className:V,activePage:C,onPageChange:function(e,t){var a=t.activePage;L(a)},totalPages:z})]})})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("app"))}},[[160,1,2]]]);
//# sourceMappingURL=main.ea73ee4b.chunk.js.map