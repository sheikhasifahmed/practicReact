(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,n,c){},12:function(e,n,c){"use strict";c.r(n);var t=c(1),r=c.n(t),a=c(4),i=c.n(a),s=(c(9),c(3)),u=(c(10),c(0)),o=[{name:"Bangladesh",currency:"Taka",capital:"Dhaka"},{name:"USA",currency:"Dollar",capital:"Wt DC"},{name:"India",currency:"Rupia",capital:"Delhi"},{name:"UK",currency:"GBP",capital:"London"}];var l=function(){return Object(u.jsxs)("div",{className:"App",children:[o.map((function(e){return Object(u.jsx)(j,{name:e.name,capital:e.capital,currency:e.currency})})),Object(u.jsx)(h,{}),Object(u.jsx)(d,{})]})};function j(e){return Object(u.jsxs)("div",{style:{backgroundColor:"lightcoral",margin:"20px",borderRadius:"10px"},children:[Object(u.jsxs)("h1",{children:["The name of my country is ",e.name,"."]}),Object(u.jsxs)("h3",{children:[e.capital," is the capital of this country."]}),Object(u.jsxs)("h3",{children:["currency is ",e.currency]})]})}function h(){var e=Object(t.useState)(0),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:["count:",c]}),Object(u.jsx)("button",{onClick:function(){return r(c+1)},children:"increase"}),Object(u.jsx)("button",{onClick:function(){return r(c-1)},children:"decrease"})]})}function d(){var e=Object(t.useState)([]),n=Object(s.a)(e,2),c=n[0],r=n[1];Object(t.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){console.log(e),r(e)}))}),[]);var a={backgroundColor:"lightblue",margin:"20px"};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"External Users:"}),c.map((function(e){return Object(u.jsxs)("div",{style:a,children:[Object(u.jsxs)("h3",{children:["Name: ",e.name]}),Object(u.jsxs)("h3",{children:["User Name:",e.username]}),Object(u.jsxs)("h3",{children:["Email:",e.email]})]})}))]})}var b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(n){var c=n.getCLS,t=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;c(e),t(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),b()},9:function(e,n,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.b2ab434a.chunk.js.map