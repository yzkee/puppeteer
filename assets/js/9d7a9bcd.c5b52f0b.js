/*! For license information please see 9d7a9bcd.c5b52f0b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[104],{28453:(e,r,t)=>{t.d(r,{R:()=>p,x:()=>i});var s=t(96540);const n={},o=s.createContext(n);function p(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:p(e.components),s.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(e,r,s){var n=null;if(void 0!==s&&(n=""+s),void 0!==r.key&&(n=""+r.key),"key"in r)for(var o in s={},r)"key"!==o&&(s[o]=r[o]);else s=r;return r=s.ref,{$$typeof:t,type:e,key:n,ref:void 0!==r?r:null,props:s}}r.Fragment=s,r.jsx=n,r.jsxs=n},51849:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"api/puppeteer.httpresponse.buffer","title":"HTTPResponse.buffer() method","description":"Promise which resolves to a buffer with response body.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.httpresponse.buffer.md","sourceDirName":"api","slug":"/api/puppeteer.httpresponse.buffer","permalink":"/api/puppeteer.httpresponse.buffer","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"HTTPResponse.buffer"},"sidebar":"api","previous":{"title":"HTTPResponse","permalink":"/api/puppeteer.httpresponse"},"next":{"title":"HTTPResponse.content","permalink":"/api/puppeteer.httpresponse.content"}}');var n=t(74848),o=t(28453);const p={sidebar_label:"HTTPResponse.buffer"},i="HTTPResponse.buffer() method",a={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"httpresponsebuffer-method",children:"HTTPResponse.buffer() method"})}),"\n",(0,n.jsx)(r.p,{children:"Promise which resolves to a buffer with response body."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class HTTPResponse {\n  buffer(): Promise<Buffer>;\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<Buffer>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["The buffer might be re-encoded by the browser based on HTTP-headers or other heuristics. If the browser failed to detect the correct encoding, the buffer might be encoded incorrectly. See ",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues/6478",children:"https://github.com/puppeteer/puppeteer/issues/6478"}),"."]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},74848:(e,r,t)=>{e.exports=t(29698)}}]);