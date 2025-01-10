/*! For license information please see df33acfb.faf1b0ce.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51787],{42928:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"api/puppeteer.accessibility","title":"Accessibility class","description":"The Accessibility class provides methods for inspecting the browser\'s accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.","source":"@site/versioned_docs/version-24.0.0/api/puppeteer.accessibility.md","sourceDirName":"api","slug":"/api/puppeteer.accessibility","permalink":"/api/puppeteer.accessibility","draft":false,"unlisted":false,"tags":[],"version":"24.0.0","frontMatter":{"sidebar_label":"Accessibility"},"sidebar":"api","previous":{"title":"WebWorker.url","permalink":"/api/puppeteer.webworker.url"},"next":{"title":"Accessibility.snapshot","permalink":"/api/puppeteer.accessibility.snapshot"}}');var r=t(74848),n=t(28453);const c={sidebar_label:"Accessibility"},a="Accessibility class",o={},l=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"accessibility-class",children:"Accessibility class"})}),"\n",(0,r.jsxs)(s.p,{children:["The Accessibility class provides methods for inspecting the browser's accessibility tree. The accessibility tree is used by assistive technology such as ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Screen_reader",children:"screen readers"})," or ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Switch_access",children:"switches"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export declare class Accessibility\n"})}),"\n",(0,r.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."}),"\n",(0,r.jsx)(s.p,{children:'Blink - Chrome\'s rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users access to the Blink Accessibility Tree.'}),"\n",(0,r.jsx)(s.p,{children:'Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Puppeteer tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'}),"\n",(0,r.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(s.code,{children:"Accessibility"})," class."]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Method"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"snapshot",children:(0,r.jsx)(s.a,{href:"/api/puppeteer.accessibility.snapshot",children:"snapshot(options)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(s.p,{children:"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Remarks:"})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE"})," The Chrome accessibility tree contains nodes that go unused on most platforms and by most screen readers. Puppeteer will discard them as well for an easier to process tree, unless ",(0,r.jsx)(s.code,{children:"interestingOnly"})," is set to ",(0,r.jsx)(s.code,{children:"false"}),"."]})]})]})})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,s,t)=>{var i=t(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,t){var i,n={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(d=s.ref),s)c.call(s,i)&&!o.hasOwnProperty(i)&&(n[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===n[i]&&(n[i]=s[i]);return{$$typeof:r,type:e,key:l,ref:d,props:n,_owner:a.current}}s.Fragment=n,s.jsx=l,s.jsxs=l},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>a});var i=t(96540);const r={},n=i.createContext(r);function c(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);