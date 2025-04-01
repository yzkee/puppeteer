/*! For license information please see e0a657cf.41735d86.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53166],{28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var r=n(96540);const t={},i=r.createContext(t);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}},29698:(e,s)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(e,s,r){var t=null;if(void 0!==r&&(t=""+r),void 0!==s.key&&(t=""+s.key),"key"in s)for(var i in r={},s)"key"!==i&&(r[i]=s[i]);else r=s;return s=r.ref,{$$typeof:n,type:e,key:t,ref:void 0!==s?s:null,props:r}}s.Fragment=r,s.jsx=t,s.jsxs=t},33353:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"browsers-api/browsers.install","title":"install() function","description":"install(): Promise&lt;InstalledBrowser&gt;","source":"@site/../docs/browsers-api/browsers.install.md","sourceDirName":"browsers-api","slug":"/browsers-api/browsers.install","permalink":"/next/browsers-api/browsers.install","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"install"},"sidebar":"browsersApi","previous":{"title":"launch","permalink":"/next/browsers-api/browsers.launch"},"next":{"title":"uninstall","permalink":"/next/browsers-api/browsers.uninstall"}}');var t=n(74848),i=n(28453);const l={sidebar_label:"install"},a="install() function",o={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Signature",id:"signature-1",level:3},{value:"Parameters",id:"parameters-1",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"install-function",children:"install() function"})}),"\n",(0,t.jsx)("h2",{id:"install",children:"install(): Promise<InstalledBrowser>"}),"\n",(0,t.jsxs)(s.p,{children:["Downloads and unpacks the browser archive according to the ",(0,t.jsx)(s.a,{href:"/next/browsers-api/browsers.installoptions",children:"InstallOptions"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare function install(\n  options: InstallOptions & {\n    unpack?: true;\n  },\n): Promise<InstalledBrowser>;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/next/browsers-api/browsers.installoptions",children:"InstallOptions"})," & { unpack?: true; }"]})}),(0,t.jsx)("td",{})]})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(s.p,{children:["Promise<",(0,t.jsx)(s.a,{href:"/next/browsers-api/browsers.installedbrowser",children:"InstalledBrowser"}),">"]}),"\n",(0,t.jsxs)(s.p,{children:["a ",(0,t.jsx)(s.a,{href:"/next/browsers-api/browsers.installedbrowser",children:"InstalledBrowser"})," instance."]}),"\n",(0,t.jsx)("h2",{id:"install-1",children:"install(): Promise<string>"}),"\n",(0,t.jsxs)(s.p,{children:["Downloads the browser archive according to the ",(0,t.jsx)(s.a,{href:"/next/browsers-api/browsers.installoptions",children:"InstallOptions"})," without unpacking."]}),"\n",(0,t.jsx)(s.h3,{id:"signature-1",children:"Signature"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare function install(\n  options: InstallOptions & {\n    unpack: false;\n  },\n): Promise<string>;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/next/browsers-api/browsers.installoptions",children:"InstallOptions"})," & { unpack: false; }"]})}),(0,t.jsx)("td",{})]})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(s.p,{children:"Promise<string>"}),"\n",(0,t.jsx)(s.p,{children:"the absolute path to the archive."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},74848:(e,s,n)=>{e.exports=n(29698)}}]);