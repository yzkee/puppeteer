/*! For license information please see a4950696.8715eb85.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88805],{28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var t=s(96540);const n={},a=t.createContext(n);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}},29698:(e,r)=>{var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(e,r,t){var n=null;if(void 0!==t&&(n=""+t),void 0!==r.key&&(n=""+r.key),"key"in r)for(var a in t={},r)"key"!==a&&(t[a]=r[a]);else t=r;return r=t.ref,{$$typeof:s,type:e,key:n,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=n,r.jsxs=n},74848:(e,r,s)=>{e.exports=s(29698)},79336:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/puppeteer.page.setbypassserviceworker","title":"Page.setBypassServiceWorker() method","description":"Toggles ignoring of service worker for each request.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.page.setbypassserviceworker.md","sourceDirName":"api","slug":"/api/puppeteer.page.setbypassserviceworker","permalink":"/api/puppeteer.page.setbypassserviceworker","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Page.setBypassServiceWorker"},"sidebar":"api","previous":{"title":"Page.setBypassCSP","permalink":"/api/puppeteer.page.setbypasscsp"},"next":{"title":"Page.setCacheEnabled","permalink":"/api/puppeteer.page.setcacheenabled"}}');var n=s(74848),a=s(28453);const i={sidebar_label:"Page.setBypassServiceWorker"},o="Page.setBypassServiceWorker() method",p={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"pagesetbypassserviceworker-method",children:"Page.setBypassServiceWorker() method"})}),"\n",(0,n.jsx)(r.p,{children:"Toggles ignoring of service worker for each request."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract setBypassServiceWorker(bypass: boolean): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"bypass"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether to bypass service worker and load from network."})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);