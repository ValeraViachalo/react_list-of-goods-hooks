(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(4),l=n.n(a),u=n(1),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.None=0]="None",t[t.Length=1]="Length",t[t.Alphabet=2]="Alphabet"}(s||(s={}));var d=function(){var t=Object(u.useState)(s.None),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(u.useState)(!1),a=Object(r.a)(o,2),d=a[0],j=a[1],g=function(t,e){var n=e.sortField,c=e.reverseField,o=Object(i.a)(t);return n&&o.sort((function(t,e){switch(n){case s.Alphabet:return t.localeCompare(e);case s.Length:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(h,{sortField:n,reverseField:d}),p=function(t){return function(){return c(t)}},f=d||n!==s.None;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:p(s.Alphabet),type:"button",className:l()("button is-info",{"is-light":n!==s.Alphabet}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:p(s.Length),type:"button",className:l()("button is-success",{"is-light":n!==s.Length}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return j((function(t){return!t}))},type:"button",className:l()("button is-warning",{"is-light":!d}),children:"Reverse"}),f&&Object(b.jsx)("button",{onClick:function(){j(!1),c(s.None)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t})}))})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.26f216b9.chunk.js.map