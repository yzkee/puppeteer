/*! For license information please see 0a28a40c.83f01a82.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85356],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(96540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(e,t,n){var i=null;if(void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in n={},t)"key"!==a&&(n[a]=t[a]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:i,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=i,t.jsxs=i},33352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.predicate","title":"Predicate type","description":"Signature","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.predicate.md","sourceDirName":"api","slug":"/api/puppeteer.predicate","permalink":"/api/puppeteer.predicate","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Predicate"},"sidebar":"api","previous":{"title":"PredefinedNetworkConditions","permalink":"/api/puppeteer.predefinednetworkconditions"},"next":{"title":"ProtocolError","permalink":"/api/puppeteer.protocolerror"}}');var i=r(74848),a=r(28453);const o={sidebar_label:"Predicate"},s="Predicate type",p={},c=[{value:"Signature",id:"signature",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"predicate-type",children:"Predicate type"})}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"export type Predicate<From, To extends From = From> =\n  | ((value: From) => value is To)\n  | ((value: From) => Awaitable<boolean>);\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"References:"})," ",(0,i.jsx)(t.a,{href:"/api/puppeteer.awaitable",children:"Awaitable"})]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},74848:(e,t,r)=>{e.exports=r(29698)}}]);