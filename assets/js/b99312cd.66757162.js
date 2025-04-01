/*! For license information please see b99312cd.66757162.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75408],{18161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.httprequest.enqueueinterceptaction","title":"HTTPRequest.enqueueInterceptAction() method","description":"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guaranteed to resolve before the request interception is finalized.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.httprequest.enqueueinterceptaction.md","sourceDirName":"api","slug":"/api/puppeteer.httprequest.enqueueinterceptaction","permalink":"/api/puppeteer.httprequest.enqueueinterceptaction","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"HTTPRequest.enqueueInterceptAction"},"sidebar":"api","previous":{"title":"HTTPRequest.continueRequestOverrides","permalink":"/api/puppeteer.httprequest.continuerequestoverrides"},"next":{"title":"HTTPRequest.failure","permalink":"/api/puppeteer.httprequest.failure"}}');var s=n(74848),i=n(28453);const a={sidebar_label:"HTTPRequest.enqueueInterceptAction"},o="HTTPRequest.enqueueInterceptAction() method",u={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"httprequestenqueueinterceptaction-method",children:"HTTPRequest.enqueueInterceptAction() method"})}),"\n",(0,s.jsx)(t.p,{children:"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guaranteed to resolve before the request interception is finalized."}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  enqueueInterceptAction(\n    pendingHandler: () => void | PromiseLike<unknown>,\n  ): void;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"pendingHandler"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"() => void | PromiseLike<unknown>"})}),(0,s.jsx)("td",{})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"void"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(e,t,r){var s=null;if(void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:s,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=s,t.jsxs=s},74848:(e,t,n)=>{e.exports=n(29698)}}]);