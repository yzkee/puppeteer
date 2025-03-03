/*! For license information please see 46bda68f.67c84099.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11104],{9658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"api/puppeteer.touchscreen.touchmove","title":"Touchscreen.touchMove() method","description":"Dispatches a touchMove event on the first touch that is active.","source":"@site/versioned_docs/version-24.3.1/api/puppeteer.touchscreen.touchmove.md","sourceDirName":"api","slug":"/api/puppeteer.touchscreen.touchmove","permalink":"/api/puppeteer.touchscreen.touchmove","draft":false,"unlisted":false,"tags":[],"version":"24.3.1","frontMatter":{"sidebar_label":"Touchscreen.touchMove"},"sidebar":"api","previous":{"title":"Touchscreen.touchEnd","permalink":"/api/puppeteer.touchscreen.touchend"},"next":{"title":"Touchscreen.touchStart","permalink":"/api/puppeteer.touchscreen.touchstart"}}');var o=r(74848),s=r(28453);const c={sidebar_label:"Touchscreen.touchMove"},i="Touchscreen.touchMove() method",h={},a=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"touchscreentouchmove-method",children:"Touchscreen.touchMove() method"})}),"\n",(0,o.jsxs)(t.p,{children:["Dispatches a ",(0,o.jsx)(t.code,{children:"touchMove"})," event on the first touch that is active."]}),"\n",(0,o.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"class Touchscreen {\n  touchMove(x: number, y: number): Promise<void>;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Parameter"})}),(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Type"})}),(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Description"})})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"x"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"number"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"Horizontal position of the move."})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"y"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"number"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"Vertical position of the move."})})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,o.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(t.p,{children:["Not every ",(0,o.jsx)(t.code,{children:"touchMove"})," call results in a ",(0,o.jsx)(t.code,{children:"touchmove"})," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,o.jsx)(t.a,{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model",children:"throttles"})," touch move events."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21020:(e,t,r)=>{var n=r(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,d=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!h.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);