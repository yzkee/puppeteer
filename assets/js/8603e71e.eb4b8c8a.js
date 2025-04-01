/*! For license information please see 8603e71e.eb4b8c8a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2316],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}},29698:(e,n)=>{var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,n,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),"key"in n)for(var i in r={},n)"key"!==i&&(r[i]=n[i]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:a,ref:void 0!==n?n:null,props:r}}n.Fragment=r,n.jsx=a,n.jsxs=a},69945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.page.isdraginterceptionenabled","title":"Page.isDragInterceptionEnabled() method","description":"Warning: This API is now obsolete.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.page.isdraginterceptionenabled.md","sourceDirName":"api","slug":"/api/puppeteer.page.isdraginterceptionenabled","permalink":"/api/puppeteer.page.isdraginterceptionenabled","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Page.isDragInterceptionEnabled"},"sidebar":"api","previous":{"title":"Page.isClosed","permalink":"/api/puppeteer.page.isclosed"},"next":{"title":"Page.isJavaScriptEnabled","permalink":"/api/puppeteer.page.isjavascriptenabled"}}');var a=t(74848),i=t(28453);const s={sidebar_label:"Page.isDragInterceptionEnabled"},o="Page.isDragInterceptionEnabled() method",p={},l=[{value:"Signature",id:"signature",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"pageisdraginterceptionenabled-method",children:"Page.isDragInterceptionEnabled() method"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,a.jsxs)(n.p,{children:["We no longer support intercepting drag payloads. Use the new drag APIs found on ",(0,a.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"})," to drag (or just use the ",(0,a.jsx)(n.a,{href:"/api/puppeteer.page#mouse",children:"Page.mouse"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"true"})," if drag events are being intercepted, ",(0,a.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,a.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract isDragInterceptionEnabled(): boolean;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(n.p,{children:"boolean"})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},74848:(e,n,t)=>{e.exports=t(29698)}}]);