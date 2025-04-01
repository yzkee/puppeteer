/*! For license information please see a617e331.ca3fb3c4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28350],{28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var s in r={},t)"key"!==s&&(r[s]=t[s]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},39656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"api/puppeteer.eventemitter.on","title":"EventEmitter.on() method","description":"Bind an event listener to fire when an event occurs.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.eventemitter.on.md","sourceDirName":"api","slug":"/api/puppeteer.eventemitter.on","permalink":"/api/puppeteer.eventemitter.on","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"EventEmitter.on"},"sidebar":"api","previous":{"title":"EventEmitter.off","permalink":"/api/puppeteer.eventemitter.off"},"next":{"title":"EventEmitter.once","permalink":"/api/puppeteer.eventemitter.once"}}');var i=n(74848),s=n(28453);const d={sidebar_label:"EventEmitter.on"},o="EventEmitter.on() method",l={},a=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"eventemitteron-method",children:"EventEmitter.on() method"})}),"\n",(0,i.jsx)(t.p,{children:"Bind an event listener to fire when an event occurs."}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class EventEmitter {\n  on<Key extends keyof EventsWithWildcard<Events>>(\n    type: Key,\n    handler: Handler<EventsWithWildcard<Events>[Key]>,\n  ): this;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"type"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Key"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"the event type you'd like to listen to. Can be a string or symbol."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"handler"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/puppeteer.handler",children:"Handler"}),"<",(0,i.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>[Key]>"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"the function to be called when the event occurs."})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"this"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"this"})," to enable you to chain method calls."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},74848:(e,t,n)=>{e.exports=n(29698)}}]);