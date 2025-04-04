/*! For license information please see 16396bb9.376464e2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22225],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>p});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var s in r={},t)"key"!==s&&(r[s]=t[s]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},74848:(e,t,n)=>{e.exports=n(29698)},84945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.eventswithwildcard","title":"EventsWithWildcard type","description":"Signature","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.eventswithwildcard.md","sourceDirName":"api","slug":"/api/puppeteer.eventswithwildcard","permalink":"/api/puppeteer.eventswithwildcard","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"EventsWithWildcard"},"sidebar":"api","previous":{"title":"EvaluateFuncWith","permalink":"/api/puppeteer.evaluatefuncwith"},"next":{"title":"EventType","permalink":"/api/puppeteer.eventtype"}}');var i=n(74848),s=n(28453);const a={sidebar_label:"EventsWithWildcard"},p="EventsWithWildcard type",o={},c=[{value:"Signature",id:"signature",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"eventswithwildcard-type",children:"EventsWithWildcard type"})}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"export type EventsWithWildcard<Events extends Record<EventType, unknown>> =\n  Events & {\n    '*': Events[keyof Events];\n  };\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"References:"})," ",(0,i.jsx)(t.a,{href:"/api/puppeteer.eventtype",children:"EventType"})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);