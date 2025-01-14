/*! For license information please see 71b9f16b.24108a75.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95187],{27914:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"api/puppeteer.mouse.draganddrop","title":"Mouse.dragAndDrop() method","description":"Performs a drag, dragenter, dragover, and drop in sequence.","source":"@site/../docs/api/puppeteer.mouse.draganddrop.md","sourceDirName":"api","slug":"/api/puppeteer.mouse.draganddrop","permalink":"/next/api/puppeteer.mouse.draganddrop","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Mouse.dragAndDrop"},"sidebar":"api","previous":{"title":"Mouse.drag","permalink":"/next/api/puppeteer.mouse.drag"},"next":{"title":"Mouse.dragEnter","permalink":"/next/api/puppeteer.mouse.dragenter"}}');var s=n(74848),d=n(28453);const o={sidebar_label:"Mouse.dragAndDrop"},i="Mouse.dragAndDrop() method",a={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"mousedraganddrop-method",children:"Mouse.dragAndDrop() method"})}),"\n",(0,s.jsx)(r.p,{children:"Performs a drag, dragenter, dragover, and drop in sequence."}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragAndDrop(\n    start: Point,\n    target: Point,\n    options?: {\n      delay?: number;\n    },\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"start"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.point",children:"Point"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"point to drag from"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"target"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.point",children:"Point"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"point to drop on"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"{ delay?: number; }"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts delay which, if specified, is the time to wait between ",(0,s.jsx)(r.code,{children:"dragover"})," and ",(0,s.jsx)(r.code,{children:"drop"})," in milliseconds. Defaults to 0."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var t,d={},p=null,c=null;for(t in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,t)&&!a.hasOwnProperty(t)&&(d[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===d[t]&&(d[t]=r[t]);return{$$typeof:s,type:e,key:p,ref:c,props:d,_owner:i.current}}r.Fragment=d,r.jsx=p,r.jsxs=p},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(96540);const s={},d=t.createContext(s);function o(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);