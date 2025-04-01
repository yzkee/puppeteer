/*! For license information please see 60b3a363.36767a9b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64753],{28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>p});var n=t(96540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function p(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}},29698:(e,s)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(e,s,n){var r=null;if(void 0!==n&&(r=""+n),void 0!==s.key&&(r=""+s.key),"key"in s)for(var a in n={},s)"key"!==a&&(n[a]=s[a]);else n=s;return s=n.ref,{$$typeof:t,type:e,key:r,ref:void 0!==s?s:null,props:n}}s.Fragment=n,s.jsx=r,s.jsxs=r},74848:(e,s,t)=>{e.exports=t(29698)},86328:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/puppeteer.page.setbypasscsp","title":"Page.setBypassCSP() method","description":"Toggles bypassing page\'s Content-Security-Policy.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.page.setbypasscsp.md","sourceDirName":"api","slug":"/api/puppeteer.page.setbypasscsp","permalink":"/api/puppeteer.page.setbypasscsp","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Page.setBypassCSP"},"sidebar":"api","previous":{"title":"Page.select","permalink":"/api/puppeteer.page.select"},"next":{"title":"Page.setBypassServiceWorker","permalink":"/api/puppeteer.page.setbypassserviceworker"}}');var r=t(74848),a=t(28453);const i={sidebar_label:"Page.setBypassCSP"},p="Page.setBypassCSP() method",o={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"pagesetbypasscsp-method",children:"Page.setBypassCSP() method"})}),"\n",(0,r.jsx)(s.p,{children:"Toggles bypassing page's Content-Security-Policy."}),"\n",(0,r.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"class Page {\n  abstract setBypassCSP(enabled: boolean): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"enabled"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"boolean"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"sets bypassing of page's Content-Security-Policy."})})]})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(s.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:["NOTE: CSP bypassing happens at the moment of CSP initialization rather than evaluation. Usually, this means that ",(0,r.jsx)(s.code,{children:"page.setBypassCSP"})," should be called before navigating to the domain."]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);