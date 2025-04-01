/*! For license information please see b572f0a3.c10f1cdb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76821],{28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>d});var n=t(96540);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(e,r,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),"key"in r)for(var i in n={},r)"key"!==i&&(n[i]=r[i]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:a,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=a,r.jsxs=a},29785:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.frame.addscripttag","title":"Frame.addScriptTag() method","description":"Adds a `` tag into the page with the desired url or content.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.frame.addscripttag.md","sourceDirName":"api","slug":"/api/puppeteer.frame.addscripttag","permalink":"/api/puppeteer.frame.addscripttag","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Frame.addScriptTag"},"sidebar":"api","previous":{"title":"Frame.$eval","permalink":"/api/puppeteer.frame._eval"},"next":{"title":"Frame.addStyleTag","permalink":"/api/puppeteer.frame.addstyletag"}}');var a=t(74848),i=t(28453);const s={sidebar_label:"Frame.addScriptTag"},d="Frame.addScriptTag() method",p={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"frameaddscripttag-method",children:"Frame.addScriptTag() method"})}),"\n",(0,a.jsxs)(r.p,{children:["Adds a ",(0,a.jsx)(r.code,{children:"<script>"})," tag into the page with the desired url or content."]}),"\n",(0,a.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  addScriptTag(\n    options: FrameAddScriptTagOptions,\n  ): Promise<ElementHandle<HTMLScriptElement>>;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"options"})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/api/puppeteer.frameaddscripttagoptions",children:"FrameAddScriptTagOptions"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Options for the script."})})]})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:["Promise<",(0,a.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLScriptElement>>"]}),"\n",(0,a.jsxs)(r.p,{children:["An ",(0,a.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,a.jsx)(r.code,{children:"<script>"})," element."]})]})}function o(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},74848:(e,r,t)=>{e.exports=t(29698)}}]);