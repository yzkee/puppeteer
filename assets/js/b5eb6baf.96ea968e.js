/*! For license information please see b5eb6baf.96ea968e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3440],{28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var r=t(96540);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}},29698:(e,s)=>{var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(e,s,r){var n=null;if(void 0!==r&&(n=""+r),void 0!==s.key&&(n=""+s.key),"key"in s)for(var i in r={},s)"key"!==i&&(r[i]=s[i]);else r=s;return s=r.ref,{$$typeof:t,type:e,key:n,ref:void 0!==s?s:null,props:r}}s.Fragment=r,s.jsx=n,s.jsxs=n},29854:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/puppeteer.page.select","title":"Page.select() method","description":"Triggers a change and input event once all the provided options have been selected. If there\'s no ` element matching selector`, the method throws an error.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.page.select.md","sourceDirName":"api","slug":"/api/puppeteer.page.select","permalink":"/api/puppeteer.page.select","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Page.select"},"sidebar":"api","previous":{"title":"Page.screenshot","permalink":"/api/puppeteer.page.screenshot"},"next":{"title":"Page.setBypassCSP","permalink":"/api/puppeteer.page.setbypasscsp"}}');var n=t(74848),i=t(28453);const a={sidebar_label:"Page.select"},l="Page.select() method",c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"pageselect-method",children:"Page.select() method"})}),"\n",(0,n.jsxs)(s.p,{children:["Triggers a ",(0,n.jsx)(s.code,{children:"change"})," and ",(0,n.jsx)(s.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,n.jsx)(s.code,{children:"<select>"})," element matching ",(0,n.jsx)(s.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,n.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"class Page {\n  select(selector: string, ...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,n.jsx)(s.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows querying by ",(0,n.jsx)(s.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,n.jsx)(s.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,n.jsx)(s.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,n.jsx)(s.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,n.jsx)(s.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"values"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"string[]"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Values of options to select. If the ",(0,n.jsx)(s.code,{children:"<select>"})," has the ",(0,n.jsx)(s.code,{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(s.p,{children:"Promise<string[]>"}),"\n",(0,n.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(s.p,{children:["Shortcut for ",(0,n.jsx)(s.a,{href:"/api/puppeteer.frame.select",children:"page.mainFrame().select()"})]}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"page.select('select#colors', 'blue'); // single selection\npage.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n"})})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},74848:(e,s,t)=>{e.exports=t(29698)}}]);