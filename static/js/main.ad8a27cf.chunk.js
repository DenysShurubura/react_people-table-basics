(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(8),r=(c(33),c(34),c(3)),s=(c(35),c(2)),j=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("h1",{className:"title",children:"Page not found"})})},i=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("h1",{className:"title",children:"Home Page"})})},l=c(4),b=c(6),o=c(5),d=c(12),h=c.n(d),O=c(0),x=function(e){var t=e.person;return Object(s.jsx)(a.b,{to:"/people/".concat(t.slug),className:h()({"has-text-danger":"f"===t.sex}),children:t.name})},u=(c(37),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})});function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(){var e=Object(r.q)().slug,t=Object(O.useState)([]),c=Object(o.a)(t,2),n=c[0],a=c[1],j=Object(O.useState)(!1),i=Object(o.a)(j,2),d=i[0],m=i[1],f=Object(O.useState)(!1),v=Object(o.a)(f,2),g=v[0],N=v[1],y=function(){var e=Object(b.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,p();case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m(!0);case 11:return e.prev=11,N(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){y()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[g&&Object(s.jsx)(u,{}),d&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===n.length&&!d&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),n.length>0&&Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:n.map((function(t){var c=n.find((function(e){return e.name===t.fatherName})),a=n.find((function(e){return e.name===t.motherName}));return Object(s.jsxs)("tr",{"data-cy":"person",className:h()({"has-background-warning":e===t.slug}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(x,{person:t})}),Object(s.jsx)("td",{children:t.sex}),Object(s.jsx)("td",{children:t.born}),Object(s.jsx)("td",{children:t.died}),Object(s.jsx)("td",{children:a?Object(s.jsx)(x,{person:a}):t.motherName||"-"}),Object(s.jsx)("td",{children:c?Object(s.jsx)(x,{person:c}):t.fatherName||"-"})]},t.name)}))})]})]})})]})},f=function(){var e=function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})};return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(s.jsx)(a.c,{className:e,to:"/people",children:"People"})]})})})},v=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(f,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(i,{})}),Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.b,{path:"people",element:Object(s.jsx)(m,{}),children:Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(m,{})})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(v,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.ad8a27cf.chunk.js.map