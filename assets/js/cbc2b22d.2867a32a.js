/*! For license information please see cbc2b22d.2867a32a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81013],{24954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"api/puppeteer.elementhandle.toelement","title":"ElementHandle.toElement() method","description":"Converts the current handle to the given element type.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.elementhandle.toelement.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.toelement","permalink":"/api/puppeteer.elementhandle.toelement","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"ElementHandle.toElement"},"sidebar":"api","previous":{"title":"ElementHandle.tap","permalink":"/api/puppeteer.elementhandle.tap"},"next":{"title":"ElementHandle.touchEnd","permalink":"/api/puppeteer.elementhandle.touchend"}}');var r=t(74848),a=t(28453);const s={sidebar_label:"ElementHandle.toElement"},i="ElementHandle.toElement() method",o={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"elementhandletoelement-method",children:"ElementHandle.toElement() method"})}),"\n",(0,r.jsx)(n.p,{children:"Converts the current handle to the given element type."}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  toElement<K extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap>(\n    tagName: K,\n  ): Promise<HandleFor<ElementFor<K>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"tagName"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"K"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"The tag name of the desired element type."})})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<",(0,r.jsx)(n.a,{href:"/api/puppeteer.elementfor",children:"ElementFor"}),"<K>>>"]}),"\n",(0,r.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,r.jsxs)(n.p,{children:["An error if the handle does not match. ",(0,r.jsx)(n.strong,{children:"The handle will not be automatically disposed."})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const element: ElementHandle<Element> = await page.$('.class-name-of-anchor');\n// DO NOT DISPOSE `element`, this will be always be the same handle.\nconst anchor: ElementHandle<HTMLAnchorElement> = await element.toElement('a');\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var l=t(96540);const r={},a=l.createContext(r);function s(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:n},e.children)}},29698:(e,n)=>{var t=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(e,n,l){var r=null;if(void 0!==l&&(r=""+l),void 0!==n.key&&(r=""+n.key),"key"in n)for(var a in l={},n)"key"!==a&&(l[a]=n[a]);else l=n;return n=l.ref,{$$typeof:t,type:e,key:r,ref:void 0!==n?n:null,props:l}}n.Fragment=l,n.jsx=r,n.jsxs=r},74848:(e,n,t)=>{e.exports=t(29698)}}]);