/*! For license information please see 1f49393f.e248bbec.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57328],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(e,t,r){var s=null;if(void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:s,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=s,t.jsxs=s},59182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.page.setdraginterception","title":"Page.setDragInterception() method","description":"Warning: This API is now obsolete.","source":"@site/../docs/api/puppeteer.page.setdraginterception.md","sourceDirName":"api","slug":"/api/puppeteer.page.setdraginterception","permalink":"/next/api/puppeteer.page.setdraginterception","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.setDragInterception"},"sidebar":"api","previous":{"title":"Page.setDefaultTimeout","permalink":"/next/api/puppeteer.page.setdefaulttimeout"},"next":{"title":"Page.setExtraHTTPHeaders","permalink":"/next/api/puppeteer.page.setextrahttpheaders"}}');var s=n(74848),a=n(28453);const i={sidebar_label:"Page.setDragInterception"},o="Page.setDragInterception() method",p={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pagesetdraginterception-method",children:"Page.setDragInterception() method"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,s.jsxs)(t.p,{children:["We no longer support intercepting drag payloads. Use the new drag APIs found on ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"})," to drag (or just use the ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.page#mouse",children:"Page.mouse"}),")."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setDragInterception(enabled: boolean): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"enabled"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Whether to enable drag interception."})})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},74848:(e,t,n)=>{e.exports=n(29698)}}]);