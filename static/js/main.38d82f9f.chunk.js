(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{49:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(16),r=c.n(a),i=c(3),o=c(7),j=c(17),u=c.n(j).a.create({}),l=function(e){try{return u.post("api/chats",e)}catch(t){throw new Error(t)}},d=function(e){try{return u.get("api/chats/".concat(e))}catch(t){throw new Error(t)}},h=c(0),b=function(e){var t=e.name,c=(e.image,e.id),s=(e.created_at,e.setCurrentRoom);return Object(h.jsx)("div",{onClick:function(){return s(c)},style:{cursor:"pointer"},className:"chat_list active_chat",children:Object(h.jsx)("div",{id:"conversation",className:"chat_people ",children:Object(h.jsxs)("div",{className:"chat_ib",children:[Object(h.jsxs)("h5",{children:[t,Object(h.jsx)("span",{className:"chat_date",children:"Dec 25"})]}),Object(h.jsx)("p",{children:"Test, which is a new approach to have all solutions astrology under one roof."})]})})})},m=function(e){var t=e.setSearch,c=e.search;return Object(h.jsx)("div",{className:"srch_bar",children:Object(h.jsxs)("div",{className:"stylish-input-group",children:[Object(h.jsx)("input",{onChange:function(e){return t(e.target.value)},value:c,id:"search",type:"text",className:"search-bar",placeholder:"Search"}),Object(h.jsx)("span",{className:"input-group-addon",children:Object(h.jsxs)("button",{type:"button",children:[" ",Object(h.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})," "]})})]})})},O=function(e){var t=e.setCurrentRoomId,c=Object(s.useState)([]),n=Object(i.a)(c,2),a=n[0],r=n[1],j=Object(s.useState)([]),l=Object(i.a)(j,2),d=l[0],O=l[1],p=Object(s.useState)(""),x=Object(i.a)(p,2),v=x[0],f=x[1];Object(s.useEffect)((function(){(function(){try{return u.get("api/rooms/")}catch(e){throw new Error(e)}})().then((function(e){var t=e.data;r(t),O(d)}))}),[]),Object(s.useEffect)((function(){var e=a.filter((function(e){return e.name.includes(v.toLowerCase())}));O(e)}),[v,a]);var g=function(){return Object(h.jsx)(h.Fragment,{children:d.map((function(e){return Object(s.createElement)(b,Object(o.a)(Object(o.a)({setCurrentRoom:t},e),{},{key:e.id}))}))})};return Object(h.jsxs)("div",{className:"inbox_people",children:[Object(h.jsxs)("div",{className:"headind_srch",children:[Object(h.jsx)("div",{className:"recent_heading",children:Object(h.jsx)("h4",{children:"Recent"})}),Object(h.jsx)(m,{setSearch:f,search:v})]}),Object(h.jsx)("div",{id:"inbox",className:"inbox_chat",children:Object(h.jsx)(g,{})})]})},p=c(4),x=c.n(p),v=c(6),f=function(e){var t=e.setMessage,c=Object(s.useState)(""),n=Object(i.a)(c,2),a=n[0],r=n[1];return Object(h.jsx)("div",{className:"type_msg",children:Object(h.jsxs)("div",{className:"form-row mt-3 ",children:[Object(h.jsx)("div",{className:"form-group  col-md-10",children:Object(h.jsx)("input",{value:a,onChange:function(e){return r(e.target.value)},id:"send_message",type:"text",className:"write_msg form-control",placeholder:"Type a message"})}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsxs)("label",{className:"custom-file-upload",children:[Object(h.jsx)("input",{type:"file"}),Object(h.jsx)("img",{style:{height:"25px",cursor:"pointer"},src:"/assets/svg/file.svg",alt:""})]}),Object(h.jsx)("img",{id:"send",style:{height:"25px",cursor:"pointer"},src:"/assets/svg/send.svg",alt:"",onClick:function(e){t(a),r("")}})]})]})})},g=function(e){var t=e.input;return Object(h.jsx)("div",{className:"incoming_msg",children:Object(h.jsx)("div",{className:"received_msg",children:Object(h.jsxs)("div",{className:"received_withd_msg",children:[Object(h.jsx)("p",{children:t}),Object(h.jsx)("span",{className:"time_date",children:" 11:01 AM | June 9"})]})})})},N=function(e){var t=e.input;return Object(h.jsx)("div",{className:"outgoing_msg",children:Object(h.jsxs)("div",{className:"sent_msg",children:[Object(h.jsx)("p",{className:"bg-primary",children:t}),Object(h.jsx)("span",{className:"time_date",children:" 11:01 AM | June 9"})]})})},_=function(e){var t=e.messages,c=e.ip_address;console.log(t);var s=function(){return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return e.ip_address==c?Object(h.jsx)(N,{input:e.input},e.id):Object(h.jsx)(g,{input:e.input},e.id)}))})};return Object(h.jsx)("div",{id:"msg_history",className:"msg_history",children:Object(h.jsx)(s,{})})},y=c(42),w=function(e){var t=e.roomId,c=Object(s.useState)([]),n=Object(i.a)(c,2),a=n[0],r=n[1],o=Object(s.useState)(null),j=Object(i.a)(o,2),u=j[0],b=j[1],m=Object(s.useState)(y.address()),O=Object(i.a)(m,2),p=O[0];O[1];Object(s.useEffect)((function(){g()}),[t]);var g=function(){var e=Object(v.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t);case 3:c=e.sent,r(c.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){u&&N()}),[u]);var N=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({ip_address:p,input:u,room:t});case 3:e.sent,g(),b(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"mesgs",children:[Object(h.jsx)(_,{messages:a,ip_address:p}),Object(h.jsx)(f,{setMessage:b})]})};var C=function(){var e=Object(s.useState)(1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("main",{className:"container h-100",children:[Object(h.jsx)("h2",{className:"text-center",children:"Chat"}),Object(h.jsx)("div",{className:"messaging",children:Object(h.jsxs)("div",{className:"inbox_msg",children:[Object(h.jsx)(O,{setCurrentRoomId:n}),Object(h.jsx)(w,{roomId:c})]})})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),S()}},[[49,1,2]]]);
//# sourceMappingURL=main.38d82f9f.chunk.js.map