/*! For license information please see d4d55b39.d7dbbf39.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43427],{28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}},29698:(e,n)=>{var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(e,n,t){var r=null;if(void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),"key"in n)for(var o in t={},n)"key"!==o&&(t[o]=n[o]);else t=n;return n=t.ref,{$$typeof:s,type:e,key:r,ref:void 0!==n?n:null,props:t}}n.Fragment=t,n.jsx=r,n.jsxs=r},74848:(e,n,s)=>{e.exports=s(29698)},79151:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"api/puppeteer.connection.fromsession","title":"Connection.fromSession() method","description":"Signature","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.connection.fromsession.md","sourceDirName":"api","slug":"/api/puppeteer.connection.fromsession","permalink":"/api/puppeteer.connection.fromsession","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Connection.fromSession"},"sidebar":"api","previous":{"title":"Connection.dispose","permalink":"/api/puppeteer.connection.dispose"},"next":{"title":"Connection.send","permalink":"/api/puppeteer.connection.send"}}');var r=s(74848),o=s(28453);const i={sidebar_label:"Connection.fromSession"},c="Connection.fromSession() method",a={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"connectionfromsession-method",children:"Connection.fromSession() method"})}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Connection {\n  static fromSession(session: CDPSession): Connection | undefined;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"session"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/puppeteer.cdpsession",children:"CDPSession"})})}),(0,r.jsx)("td",{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/puppeteer.connection",children:"Connection"})," | undefined"]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);