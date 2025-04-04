/*! For license information please see b883e309.9c415db2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4239],{6365:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"api/puppeteer.viewport","title":"Viewport interface","description":"Signature","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.viewport.md","sourceDirName":"api","slug":"/api/puppeteer.viewport","permalink":"/api/puppeteer.viewport","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Viewport"},"sidebar":"api","previous":{"title":"UnsupportedOperation","permalink":"/api/puppeteer.unsupportedoperation"},"next":{"title":"VisibilityOption","permalink":"/api/puppeteer.visibilityoption"}}');var t=r(74848),n=r(28453);const d={sidebar_label:"Viewport"},l="Viewport interface",c={},h=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"viewport-interface",children:"Viewport interface"})}),"\n",(0,t.jsx)(i.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"export interface Viewport\n"})}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Description"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Default"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"devicescalefactor",children:"deviceScaleFactor"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"number"})}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(i.p,{children:["Specify device scale factor. See ",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",children:"devicePixelRatio"})," for more info."]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Remarks:"})}),(0,t.jsxs)(i.p,{children:["Setting this value to ",(0,t.jsx)(i.code,{children:"0"})," will reset this value to the system default."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"1"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"hastouch",children:"hasTouch"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Specify if the viewport supports touch events."})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"false"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"height",children:"height"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"number"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(i.p,{children:"The page height in CSS pixels."}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Remarks:"})}),(0,t.jsxs)(i.p,{children:["Setting this value to ",(0,t.jsx)(i.code,{children:"0"})," will reset this value to the system default."]})]}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"islandscape",children:"isLandscape"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Specifies if the viewport is in landscape mode."})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"false"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"ismobile",children:"isMobile"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(i.p,{children:["Whether the ",(0,t.jsx)(i.code,{children:"meta viewport"})," tag is taken into account."]})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"false"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"width",children:"width"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"number"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(i.p,{children:"The page width in CSS pixels."}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Remarks:"})}),(0,t.jsxs)(i.p,{children:["Setting this value to ",(0,t.jsx)(i.code,{children:"0"})," will reset this value to the system default."]})]}),(0,t.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>l});var s=r(96540);const t={},n=s.createContext(t);function d(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(n.Provider,{value:i},e.children)}},29698:(e,i)=>{var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function t(e,i,s){var t=null;if(void 0!==s&&(t=""+s),void 0!==i.key&&(t=""+i.key),"key"in i)for(var n in s={},i)"key"!==n&&(s[n]=i[n]);else s=i;return i=s.ref,{$$typeof:r,type:e,key:t,ref:void 0!==i?i:null,props:s}}i.Fragment=s,i.jsx=t,i.jsxs=t},74848:(e,i,r)=>{e.exports=r(29698)}}]);