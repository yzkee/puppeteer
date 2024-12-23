/*! For license information please see ef85296e.ca2f29c8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98831],{67280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.page.setrequestinterception","title":"Page.setRequestInterception() method","description":"Activating request interception enables HTTPRequest.abort(), HTTPRequest.continue() and HTTPRequest.respond() methods. This provides the capability to modify network requests that are made by a page.","source":"@site/../docs/api/puppeteer.page.setrequestinterception.md","sourceDirName":"api","slug":"/api/puppeteer.page.setrequestinterception","permalink":"/next/api/puppeteer.page.setrequestinterception","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.setRequestInterception"},"sidebar":"api","previous":{"title":"Page.setOfflineMode","permalink":"/next/api/puppeteer.page.setofflinemode"},"next":{"title":"Page.setUserAgent","permalink":"/next/api/puppeteer.page.setuseragent"}}');var s=n(74848),i=n(28453);const a={sidebar_label:"Page.setRequestInterception"},p="Page.setRequestInterception() method",o={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pagesetrequestinterception-method",children:"Page.setRequestInterception() method"})}),"\n",(0,s.jsxs)(t.p,{children:["Activating request interception enables ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.httprequest.abort",children:"HTTPRequest.abort()"}),", ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.httprequest.continue",children:"HTTPRequest.continue()"})," and ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.httprequest.respond",children:"HTTPRequest.respond()"})," methods. This provides the capability to modify network requests that are made by a page."]}),"\n",(0,s.jsx)(t.p,{children:"Once request interception is enabled, every request will stall unless it's continued, responded or aborted; or completed using the browser cache."}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/network-interception",children:"Request interception guide"})," for more details."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setRequestInterception(value: boolean): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"value"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Whether to enable request interception."})})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"An example of a na\xefve request interceptor that aborts all image requests:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setRequestInterception(true);\n  page.on('request', interceptedRequest => {\n    if (\n      interceptedRequest.url().endsWith('.png') ||\n      interceptedRequest.url().endsWith('.jpg')\n    )\n      interceptedRequest.abort();\n    else interceptedRequest.continue();\n  });\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:l,props:i,_owner:p.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>p});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);