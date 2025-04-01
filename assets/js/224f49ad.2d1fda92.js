/*! For license information please see 224f49ad.2d1fda92.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72199],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(e,t,n){var i=null;if(void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),"key"in t)for(var o in n={},t)"key"!==o&&(n[o]=t[o]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:i,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=i,t.jsxs=i},45747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.locator.wait","title":"Locator.wait() method","description":"Waits for the locator to get the serialized value from the page.","source":"@site/../docs/api/puppeteer.locator.wait.md","sourceDirName":"api","slug":"/api/puppeteer.locator.wait","permalink":"/next/api/puppeteer.locator.wait","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Locator.wait"},"sidebar":"api","previous":{"title":"Locator.setWaitForStableBoundingBox","permalink":"/next/api/puppeteer.locator.setwaitforstableboundingbox"},"next":{"title":"Locator.waitHandle","permalink":"/next/api/puppeteer.locator.waithandle"}}');var i=r(74848),o=r(28453);const a={sidebar_label:"Locator.wait"},s="Locator.wait() method",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"locatorwait-method",children:"Locator.wait() method"})}),"\n",(0,i.jsx)(t.p,{children:"Waits for the locator to get the serialized value from the page."}),"\n",(0,i.jsx)(t.p,{children:"Note this requires the value to be JSON-serializable."}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Locator {\n  wait(options?: Readonly<ActionOptions>): Promise<T>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:["Readonly<",(0,i.jsx)(t.a,{href:"/next/api/puppeteer.actionoptions",children:"ActionOptions"}),">"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"(Optional)"})})})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"Promise<T>"})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},74848:(e,t,r)=>{e.exports=r(29698)}}]);