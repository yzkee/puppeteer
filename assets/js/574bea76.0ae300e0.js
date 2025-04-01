/*! For license information please see 574bea76.0ae300e0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59532],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var s in r={},t)"key"!==s&&(r[s]=t[s]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},74848:(e,t,n)=>{e.exports=n(29698)},75334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.page.emulatetimezone","title":"Page.emulateTimezone() method","description":"Signature","source":"@site/../docs/api/puppeteer.page.emulatetimezone.md","sourceDirName":"api","slug":"/api/puppeteer.page.emulatetimezone","permalink":"/next/api/puppeteer.page.emulatetimezone","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.emulateTimezone"},"sidebar":"api","previous":{"title":"Page.emulateNetworkConditions","permalink":"/next/api/puppeteer.page.emulatenetworkconditions"},"next":{"title":"Page.emulateVisionDeficiency","permalink":"/next/api/puppeteer.page.emulatevisiondeficiency"}}');var i=n(74848),s=n(28453);const a={sidebar_label:"Page.emulateTimezone"},o="Page.emulateTimezone() method",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"pageemulatetimezone-method",children:"Page.emulateTimezone() method"})}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateTimezone(timezoneId?: string): Promise<void>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"timezoneId"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"string"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"(Optional)"})," Changes the timezone of the page. See ",(0,i.jsx)(t.a,{href:"https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt",children:"ICU\u2019s metaZones.txt"})," for a list of supported timezone IDs. Passing ",(0,i.jsx)(t.code,{children:"null"})," disables timezone emulation."]})})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"Promise<void>"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);