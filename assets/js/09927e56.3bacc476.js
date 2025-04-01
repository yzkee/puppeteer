/*! For license information please see 09927e56.3bacc476.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81918],{28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var n=s(96540);const t={},o=n.createContext(t);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(e,r,n){var t=null;if(void 0!==n&&(t=""+n),void 0!==r.key&&(t=""+r.key),"key"in r)for(var o in n={},r)"key"!==o&&(n[o]=r[o]);else n=r;return r=n.ref,{$$typeof:s,type:e,key:t,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=t,r.jsxs=t},51185:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.browser.version","title":"Browser.version() method","description":"Gets a string representing this browser\'s name and version.","source":"@site/../docs/api/puppeteer.browser.version.md","sourceDirName":"api","slug":"/api/puppeteer.browser.version","permalink":"/next/api/puppeteer.browser.version","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Browser.version"},"sidebar":"api","previous":{"title":"Browser.userAgent","permalink":"/next/api/puppeteer.browser.useragent"},"next":{"title":"Browser.waitForTarget","permalink":"/next/api/puppeteer.browser.waitfortarget"}}');var t=s(74848),o=s(28453);const i={sidebar_label:"Browser.version"},a="Browser.version() method",p={},c=[{value:"Signature",id:"signature",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"browserversion-method",children:"Browser.version() method"})}),"\n",(0,t.jsxs)(r.p,{children:["Gets a string representing this ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.browser",children:"browser's"})," name and version."]}),"\n",(0,t.jsxs)(r.p,{children:["For headless browser, this is similar to ",(0,t.jsx)(r.code,{children:'"HeadlessChrome/61.0.3153.0"'}),". For non-headless or new-headless, this is similar to ",(0,t.jsx)(r.code,{children:'"Chrome/61.0.3153.0"'}),". For Firefox, it is similar to ",(0,t.jsx)(r.code,{children:'"Firefox/116.0a1"'}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The format of ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.browser.version",children:"Browser.version()"})," might change with future releases of browsers."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Browser {\n  abstract version(): Promise<string>;\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<string>"})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},74848:(e,r,s)=>{e.exports=s(29698)}}]);